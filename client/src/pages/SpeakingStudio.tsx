import React, { useState, useEffect } from 'react';
import {
  Mic,
  MicOff,
  Square,
  Play,
  RotateCcw,
  Sparkles,
  Award,
  Volume2,
  CheckCircle2,
  AlertTriangle,
  Info,
  BookOpen,
  Send,
  Eye,
  EyeOff,
  MessageSquare,
  Bot,
  Search,
  Filter,
  Check,
  ArrowRight
} from 'lucide-react';
import { speakingScenariosList } from '../data/speakingData';
import { speechService } from '../services/speechService';
import { AudioButton } from '../components/AudioButton';
import { useLearning } from '../context/LearningContext';

interface SpeakingStudioProps {
  onNavigateToAi?: () => void;
}

export const SpeakingStudio: React.FC<SpeakingStudioProps> = ({ onNavigateToAi }) => {
  const { addXP, unlockBadge, incrementSpeakingCount, recordMistake } = useLearning();

  const [activeMode, setActiveMode] = useState<'study' | 'roleplay'>('study');
  const [selectedScenarioId, setSelectedScenarioId] = useState(speakingScenariosList[0].id);
  const [scenarioSearch, setScenarioSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const activeScenario = speakingScenariosList.find(s => s.id === selectedScenarioId) || speakingScenariosList[0];

  // Roman Hindi translation toggle
  const [showRomanHindi, setShowRomanHindi] = useState(true);

  // User interactive reply states for Study Mode
  const [userReplies, setUserReplies] = useState<Record<string, string>>({});
  const [submittedReplies, setSubmittedReplies] = useState<Record<string, boolean>>({});

  // Speech Recognition & Recording states
  const [isListening, setIsListening] = useState(false);
  const [activeReplyingExchangeId, setActiveReplyingExchangeId] = useState<string | null>(null);

  // Voice recording & playback states
  const [isRecordingAudio, setIsRecordingAudio] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [recognitionError, setRecognitionError] = useState<string | null>(null);

  // ----------------------------------------
  // Interactive AI Roleplay Mode State
  // ----------------------------------------
  const [roleplayStep, setRoleplayStep] = useState(0); // index into activeScenario.dialogue
  const [roleplayUserInput, setRoleplayUserInput] = useState('');
  const [roleplayFeedback, setRoleplayFeedback] = useState<{
    praise: string;
    correction?: { original: string; corrected: string; romanHindi: string; whatWasWrong: string };
    naturalTip?: string;
  } | null>(null);
  const [roleplayFinished, setRoleplayFinished] = useState(false);

  const recognitionSupported = speechService.isRecognitionSupported();

  useEffect(() => {
    return () => {
      speechService.stopListening();
    };
  }, []);

  // Filter scenarios
  const filteredScenarios = speakingScenariosList.filter(s => {
    const matchesCat = selectedCategory === 'All' || s.category === selectedCategory;
    const matchesSearch = s.title.toLowerCase().includes(scenarioSearch.toLowerCase()) ||
                          s.description.toLowerCase().includes(scenarioSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const categories = ['All', ...Array.from(new Set(speakingScenariosList.map(s => s.category)))];

  // Switch scenario
  const handleSelectScenario = (id: string) => {
    setSelectedScenarioId(id);
    setRecordedAudioUrl(null);
    setRoleplayStep(0);
    setRoleplayUserInput('');
    setRoleplayFeedback(null);
    setRoleplayFinished(false);
  };

  // Toggle speech-to-text dictation
  const handleToggleListening = (targetId: string, isRoleplay = false) => {
    if (isListening && activeReplyingExchangeId === targetId) {
      speechService.stopListening();
      setIsListening(false);
      setActiveReplyingExchangeId(null);
    } else {
      speechService.stopListening();
      setRecognitionError(null);
      setActiveReplyingExchangeId(targetId);
      const started = speechService.startListening(
        (transcript, isFinal) => {
          if (isRoleplay) {
            setRoleplayUserInput(transcript);
          } else {
            setUserReplies(prev => ({ ...prev, [targetId]: transcript }));
          }
          if (isFinal) {
            setIsListening(false);
            setActiveReplyingExchangeId(null);
          }
        },
        (err) => {
          setRecognitionError(err);
          setIsListening(false);
          setActiveReplyingExchangeId(null);
        }
      );
      if (started) {
        setIsListening(true);
      }
    }
  };

  // Full Audio Recording
  const handleToggleAudioRecording = async () => {
    if (isRecordingAudio) {
      const audioUrl = await speechService.stopRecording();
      setIsRecordingAudio(false);
      setRecordedAudioUrl(audioUrl);
      addXP(30, 'Recorded Full Dialogue Audio');
      unlockBadge('speaking_champ');
      incrementSpeakingCount();
    } else {
      setRecordedAudioUrl(null);
      const started = await speechService.startRecording();
      if (started) {
        setIsRecordingAudio(true);
      } else {
        setRecognitionError('Microphone permission required to record your voice.');
      }
    }
  };

  const handleSubmitUserReply = (exchangeId: string) => {
    setSubmittedReplies(prev => ({ ...prev, [exchangeId]: true }));
    addXP(15, 'Practiced Conversational Turn');
    incrementSpeakingCount();
  };

  // ----------------------------------------
  // Roleplay Step-by-Step Logic
  // ----------------------------------------
  const currentExchange = activeScenario.dialogue[roleplayStep];
  const isUserExpectedToReply = currentExchange ? currentExchange.isUserTurn : false;

  const handleRoleplaySubmit = () => {
    if (!roleplayUserInput.trim() && !isUserExpectedToReply) {
      // Just advance partner's turn
      advanceRoleplay();
      return;
    }

    const text = roleplayUserInput.trim();
    let mistakeFound = null;

    // Check common mistakes in text
    if (/\bi\s+have\s+seen\s+him\s+yesterday\b/i.test(text)) {
      mistakeFound = {
        original: 'I have seen him yesterday',
        corrected: 'I saw him yesterday',
        whatWasWrong: 'Used Present Perfect with finished past time indicator (yesterday).',
        romanHindi: 'Yesterday ke sath hamesha Past Simple (V2: saw) lagta hai.'
      };
    } else if (/\bi\s+am\s+agree\b/i.test(text)) {
      mistakeFound = {
        original: 'I am agree',
        corrected: 'I agree',
        whatWasWrong: 'Added "am" before the verb "agree".',
        romanHindi: '"Agree" khud ek verb hai; English mein "I agree" bolte hain.'
      };
    } else if (/\b(he|she)\s+don'?t\b/i.test(text)) {
      mistakeFound = {
        original: "he/she don't",
        corrected: "he/she doesn't",
        whatWasWrong: 'Used "don\'t" for a singular third-person subject.',
        romanHindi: 'He / She ke sath negative mein "doesn\'t" lagta hai.'
      };
    }

    if (mistakeFound) {
      recordMistake(mistakeFound);
      setRoleplayFeedback({
        praise: 'Good attempt! You communicated your idea clearly.',
        correction: mistakeFound,
        naturalTip: currentExchange?.text
      });
    } else {
      setRoleplayFeedback({
        praise: 'Awesome reply! That sounds natural and communicative.',
        naturalTip: currentExchange?.text
      });
    }

    addXP(20, 'Roleplay Conversation Turn');
    incrementSpeakingCount();
  };

  const advanceRoleplay = () => {
    setRoleplayFeedback(null);
    setRoleplayUserInput('');

    if (roleplayStep < activeScenario.dialogue.length - 1) {
      const nextStep = roleplayStep + 1;
      setRoleplayStep(nextStep);
      // If next is Person A, speak it out automatically
      const nextExchange = activeScenario.dialogue[nextStep];
      if (nextExchange && !nextExchange.isUserTurn) {
        speechService.speak(nextExchange.text, 0.95);
      }
    } else {
      setRoleplayFinished(true);
      addXP(50, 'Completed Full 12-15 Turn Roleplay!');
      unlockBadge('speaking_champ');
    }
  };

  const handleRestartRoleplay = () => {
    setRoleplayStep(0);
    setRoleplayUserInput('');
    setRoleplayFeedback(null);
    setRoleplayFinished(false);
    if (activeScenario.dialogue[0] && !activeScenario.dialogue[0].isUserTurn) {
      speechService.speak(activeScenario.dialogue[0].text, 0.95);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Header Banner in Dark Navy & Sky Blue */}
      <div className="bg-gradient-to-r from-navy-dark via-navy to-[#1B3B66] text-white p-6 sm:p-8 rounded-2xl shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-sky-light border border-sky-DEFAULT/20">
            <Mic size={14} className="text-sky-DEFAULT" /> Daily Speaking Practice • 12–15 Realistic Exchanges
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight">
            Speaking Studio & Roleplay Lab
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Speak English that people actually use in everyday life. Learn all 14 practical topics, explore Roman Hindi meanings, try your own replies, and roleplay live with Coach Sarah!
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-sky-DEFAULT/20 text-center flex-shrink-0 min-w-[200px]">
          <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold block mb-1">
            Voice System
          </span>
          <div className="flex items-center justify-center gap-2 text-white font-display font-bold text-sm">
            <span className={`w-2.5 h-2.5 rounded-full ${recognitionSupported ? 'bg-sky-DEFAULT animate-pulse' : 'bg-amber-400'}`} />
            {recognitionSupported ? 'Microphone Active' : 'Native Playback Active'}
          </div>
          <span className="text-[11px] text-sky-light mt-1 block">
            14 Real-Life Scenarios Ready
          </span>
        </div>
      </div>

      {/* Mode Switcher: Study Mode vs Interactive Roleplay Mode */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveMode('study')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeMode === 'study'
                ? 'bg-navy-DEFAULT text-white shadow-soft'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <BookOpen size={14} />
            <span>Full Script & Pronunciation Study</span>
          </button>
          <button
            onClick={() => {
              setActiveMode('roleplay');
              handleRestartRoleplay();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeMode === 'roleplay'
                ? 'bg-navy-DEFAULT text-white shadow-soft border border-sky-DEFAULT'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Bot size={14} className="text-sky-DEFAULT" />
            <span>Live Interactive Roleplay with Coach Sarah</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-light text-navy-dark font-extrabold">NEW</span>
          </button>
        </div>

        {activeMode === 'study' && (
          <button
            onClick={() => setShowRomanHindi(!showRomanHindi)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors"
          >
            {showRomanHindi ? <EyeOff size={14} /> : <Eye size={14} />}
            <span>{showRomanHindi ? 'Hide Roman Hindi' : 'Show Roman Hindi'}</span>
          </button>
        )}
      </div>

      {/* 2. Scenario Category & Topic Selector (14 Topics) */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft-sm space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-navy-DEFAULT" />
            <span className="text-xs font-bold text-navy-dark uppercase tracking-wider">
              Select Real-Life Conversation Topic ({speakingScenariosList.length} Available):
            </span>
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={scenarioSearch}
              onChange={(e) => setScenarioSearch(e.target.value)}
              placeholder="Filter topics..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs text-navy-dark outline-none focus:ring-2 focus:ring-sky-DEFAULT/40"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-navy-DEFAULT text-white shadow-soft'
                  : 'bg-surface-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2 border-t border-slate-100">
          {filteredScenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => handleSelectScenario(scenario.id)}
              className={`p-3 rounded-xl text-left transition-all border ${
                selectedScenarioId === scenario.id
                  ? 'bg-sky-light/40 border-sky-DEFAULT ring-2 ring-sky-DEFAULT/20'
                  : 'bg-surface-100 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold text-navy-DEFAULT uppercase truncate">
                  {scenario.category}
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-white text-navy-dark font-bold border border-slate-200">
                  {scenario.dialogue.length} turns
                </span>
              </div>
              <h4 className="font-display font-extrabold text-xs text-navy-dark mt-1 line-clamp-1">
                {scenario.title}
              </h4>
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================
          MODE 1: FULL DIALOGUE STUDY & PRONUNCIATION
      ======================================================== */}
      {activeMode === 'study' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left 2 Cols: 12-15 Turn Dialogue with User Turns */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-6">
            <div className="pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md bg-sky-light text-navy-dark text-xs font-bold">
                  {activeScenario.category}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {activeScenario.dialogue.length} Exchanges
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-black text-navy-dark">
                {activeScenario.title}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {activeScenario.description}
              </p>
            </div>

            {/* Exchanges list */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Full Dialogue Exchanges (12–15 Turns):
                </span>
                <span className="text-[11px] text-navy-DEFAULT font-semibold">
                  Click audio to listen to natural pacing
                </span>
              </div>

              {activeScenario.dialogue.map((item) => {
                const isPersonA = item.speaker === 'Person A';
                const hasReplied = submittedReplies[item.id];
                const userVal = userReplies[item.id] || '';

                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      item.isUserTurn
                        ? 'bg-sky-light/30 border-sky-DEFAULT/50 shadow-soft-sm ml-2 sm:ml-6'
                        : isPersonA
                        ? 'bg-surface-100 border-slate-200 mr-2 sm:mr-6'
                        : 'bg-white border-slate-200 ml-2 sm:ml-6'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-xs font-bold flex items-center gap-1.5 ${
                        item.isUserTurn ? 'text-navy-DEFAULT' : 'text-slate-700'
                      }`}>
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                          item.isUserTurn
                            ? 'bg-sky-DEFAULT text-navy-dark'
                            : isPersonA
                            ? 'bg-navy-DEFAULT text-white'
                            : 'bg-slate-200 text-slate-800'
                        }`}>
                          {item.isUserTurn ? 'YOU' : isPersonA ? 'A' : 'B'}
                        </span>
                        <span>{item.speaker} {item.isUserTurn && '🎙️ (Your Turn to Try!)'}</span>
                      </span>

                      <AudioButton text={item.text} size="sm" />
                    </div>

                    {/* English Sentence */}
                    <p className="text-sm font-bold text-navy-dark leading-snug pl-7">
                      {item.text}
                    </p>

                    {/* Roman Hindi Translation */}
                    {showRomanHindi && (
                      <p className="text-xs text-slate-500 font-medium pl-7 mt-1 italic">
                        🗣️ {item.romanHindi}
                      </p>
                    )}

                    {/* Natural Expression Note */}
                    {item.naturalExpressionNote && (
                      <div className="mt-2 ml-7 p-2 rounded-lg bg-white/80 border border-slate-200 text-[11px] text-navy-dark flex items-center gap-1.5">
                        <Sparkles size={13} className="text-sky-DEFAULT flex-shrink-0" />
                        <span><strong>Natural Phrasing Tip:</strong> {item.naturalExpressionNote}</span>
                      </div>
                    )}

                    {/* Interactive User Turn Box */}
                    {item.isUserTurn && (
                      <div className="mt-3 ml-7 pt-3 border-t border-sky-DEFAULT/20 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-navy-dark">
                            Try saying or typing your reply:
                          </span>
                          {recognitionSupported && (
                            <button
                              onClick={() => handleToggleListening(item.id, false)}
                              className={`px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 transition-all ${
                                isListening && activeReplyingExchangeId === item.id
                                  ? 'bg-rose-500 text-white animate-pulse'
                                  : 'bg-navy-DEFAULT text-white hover:bg-navy-dark'
                              }`}
                            >
                              <Mic size={12} />
                              <span>{isListening && activeReplyingExchangeId === item.id ? 'Listening...' : 'Speak Reply'}</span>
                            </button>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={userVal}
                            onChange={(e) => setUserReplies(prev => ({ ...prev, [item.id]: e.target.value }))}
                            placeholder="Type what you would say here..."
                            className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-navy-dark focus:ring-2 focus:ring-sky-DEFAULT/40 outline-none"
                          />
                          <button
                            onClick={() => handleSubmitUserReply(item.id)}
                            className="px-3 py-1.5 rounded-lg bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark flex items-center gap-1"
                          >
                            <Send size={12} />
                            <span>Submit</span>
                          </button>
                        </div>

                        {/* Suggested Hints */}
                        {item.suggestedUserHints && (
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            <span className="text-[10px] text-slate-500 font-bold">Quick Idea Pills:</span>
                            {item.suggestedUserHints.map((hint, hIdx) => (
                              <button
                                key={hIdx}
                                onClick={() => setUserReplies(prev => ({ ...prev, [item.id]: hint }))}
                                className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] text-navy-DEFAULT font-medium hover:border-sky-DEFAULT"
                              >
                                "{hint}"
                              </button>
                            ))}
                          </div>
                        )}

                        {hasReplied && (
                          <div className="p-2 rounded-lg bg-sky-light/50 border border-sky-DEFAULT/30 text-[11px] text-navy-dark flex items-center gap-1.5">
                            <CheckCircle2 size={14} className="text-navy-DEFAULT" />
                            <span>Great attempt! Compare with the sample answer above to build natural flow.</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Col: Difficult Words, Natural Expressions & Audio Recorder */}
          <div className="lg:col-span-1 space-y-6">
            {/* 1. Difficult Words Explained */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm space-y-3">
              <div className="flex items-center gap-2 text-navy-dark">
                <BookOpen size={18} className="text-navy-DEFAULT" />
                <h3 className="font-display font-bold text-sm">
                  Difficult Words Explained
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                Key everyday words used in this dialogue with Roman Hindi meanings.
              </p>

              <div className="space-y-2.5 pt-1">
                {activeScenario.difficultWords.map((w, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-surface-100 border border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-navy-dark">{w.word}</span>
                      <AudioButton text={w.word} size="sm" />
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5">{w.meaning}</p>
                    <p className="text-[11px] text-navy-DEFAULT font-semibold mt-0.5">
                      🗣️ {w.romanHindi}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Natural Expressions Explained */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm space-y-3">
              <div className="flex items-center gap-2 text-navy-dark">
                <Sparkles size={18} className="text-sky-DEFAULT" />
                <h3 className="font-display font-bold text-sm">
                  Natural Expressions
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                Phrases native speakers constantly use in casual conversation.
              </p>

              <div className="space-y-2.5 pt-1">
                {activeScenario.naturalExpressions.map((exp, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-sky-light/20 border border-sky-DEFAULT/20">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-navy-DEFAULT">"{exp.phrase}"</span>
                      <AudioButton text={exp.phrase} size="sm" />
                    </div>
                    <p className="text-[11px] text-slate-700 mt-0.5">{exp.explanation}</p>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5 italic">
                      {exp.romanHindi}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Audio Voice Recorder */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
              <div className="flex items-center gap-2 text-navy-dark">
                <Mic size={18} className="text-navy-DEFAULT" />
                <h3 className="font-display font-bold text-sm">
                  Record & Hear Yourself Speak
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Read the dialogue aloud and record your voice. Listening to yourself builds immediate confidence and removes hesitation.
              </p>

              <div className="p-4 rounded-xl bg-surface-100 border border-slate-200 text-center space-y-3">
                <div className="flex items-center justify-center">
                  <button
                    onClick={handleToggleAudioRecording}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                      isRecordingAudio
                        ? 'bg-rose-500 text-white animate-pulse shadow-lg ring-4 ring-rose-200'
                        : 'bg-navy-DEFAULT text-white hover:bg-navy-dark shadow-soft'
                    }`}
                    title={isRecordingAudio ? 'Stop Recording' : 'Start Voice Recording'}
                  >
                    {isRecordingAudio ? <Square size={20} /> : <Mic size={22} />}
                  </button>
                </div>

                <div className="text-xs font-bold text-slate-700">
                  {isRecordingAudio ? (
                    <span className="text-rose-600 animate-pulse">Recording voice... click to stop</span>
                  ) : recordedAudioUrl ? (
                    <span className="text-navy-DEFAULT">Recording complete! Listen below:</span>
                  ) : (
                    <span>Click microphone to record dialogue</span>
                  )}
                </div>

                {recordedAudioUrl && (
                  <div className="pt-2">
                    <audio controls src={recordedAudioUrl} className="w-full h-9 rounded-lg" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MODE 2: LIVE INTERACTIVE ROLEPLAY WITH COACH SARAH
      ======================================================== */}
      {activeMode === 'roleplay' && (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy-dark text-sky-DEFAULT flex items-center justify-center font-black">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-navy-dark">
                    Roleplay: {activeScenario.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Coach Sarah plays Person A. You play Person B. First try answering yourself!
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold text-navy-DEFAULT block">
                  Turn {roleplayStep + 1} of {activeScenario.dialogue.length}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-light text-navy-dark font-bold">
                  Interactive Turn
                </span>
              </div>
            </div>

            {!roleplayFinished ? (
              <div className="space-y-6">
                {/* 1. Coach Sarah's Line (Person A) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-surface-100 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-navy-DEFAULT text-white flex items-center justify-center text-[10px] font-black">
                        A
                      </div>
                      <span className="text-xs font-extrabold text-navy-dark">
                        Coach Sarah ({currentExchange?.speaker || 'Person A'}):
                      </span>
                    </div>
                    {currentExchange && <AudioButton text={currentExchange.text} size="sm" />}
                  </div>

                  <p className="text-base font-display font-bold text-navy-dark pl-8">
                    "{currentExchange?.text}"
                  </p>
                  <p className="text-xs text-slate-500 italic pl-8">
                    🗣️ {currentExchange?.romanHindi}
                  </p>
                </div>

                {/* 2. Your Response Box (Person B) */}
                <div className="p-5 rounded-2xl bg-sky-light/20 border border-sky-DEFAULT/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-sky-DEFAULT text-navy-dark flex items-center justify-center text-[10px] font-black">
                        YOU
                      </div>
                      <span className="text-xs font-extrabold text-navy-dark">
                        Your Turn: Reply naturally to Coach Sarah
                      </span>
                    </div>

                    {recognitionSupported && (
                      <button
                        onClick={() => handleToggleListening('roleplay-input', true)}
                        className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                          isListening
                            ? 'bg-rose-500 text-white animate-pulse'
                            : 'bg-navy-DEFAULT text-white hover:bg-navy-dark'
                        }`}
                      >
                        <Mic size={13} />
                        <span>{isListening ? 'Listening...' : 'Speak Your Reply'}</span>
                      </button>
                    )}
                  </div>

                  <textarea
                    rows={3}
                    value={roleplayUserInput}
                    onChange={(e) => setRoleplayUserInput(e.target.value)}
                    placeholder="Type or speak what you would reply in everyday English..."
                    className="w-full p-3.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-navy-dark focus:ring-2 focus:ring-sky-DEFAULT/40 outline-none"
                  />

                  {/* Quick idea pills */}
                  {currentExchange?.suggestedUserHints && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[10px] font-bold text-slate-500">Need an idea? Click to try:</span>
                      {currentExchange.suggestedUserHints.map((hint, hIdx) => (
                        <button
                          key={hIdx}
                          onClick={() => setRoleplayUserInput(hint)}
                          className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-medium text-navy-DEFAULT hover:border-sky-DEFAULT"
                        >
                          "{hint}"
                        </button>
                      ))}
                    </div>
                  )}

                  {!roleplayFeedback ? (
                    <button
                      onClick={handleRoleplaySubmit}
                      disabled={!roleplayUserInput.trim()}
                      className="w-full py-2.5 rounded-xl bg-navy-DEFAULT text-white text-xs font-extrabold hover:bg-navy-dark transition-all shadow-soft flex items-center justify-center gap-1.5 disabled:opacity-50"
                    >
                      <Send size={13} />
                      <span>Check & Submit My Reply</span>
                    </button>
                  ) : null}
                </div>

                {/* 3. AI Teacher Real-Time Feedback */}
                {roleplayFeedback && (
                  <div className="p-5 rounded-2xl bg-white border-2 border-sky-DEFAULT/50 shadow-soft space-y-3 animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} className="text-sky-DEFAULT" />
                      <h4 className="font-display font-extrabold text-sm text-navy-dark">
                        Coach Sarah's Evaluation:
                      </h4>
                    </div>

                    <p className="text-xs text-navy-DEFAULT font-bold">
                      {roleplayFeedback.praise}
                    </p>

                    {/* Correction if mistake was made */}
                    {roleplayFeedback.correction && (
                      <div className="p-3.5 rounded-xl bg-surface-100 border border-slate-200 text-xs space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Friendly Correction:</span>
                        <p className="line-through text-slate-500">"{roleplayFeedback.correction.original}"</p>
                        <p className="font-extrabold text-navy-DEFAULT">Say: "{roleplayFeedback.correction.corrected}"</p>
                        <p className="text-[11px] text-slate-600"><strong>Why:</strong> {roleplayFeedback.correction.whatWasWrong}</p>
                        <p className="text-[11px] text-navy-DEFAULT font-semibold">🗣️ <strong>Hindi:</strong> {roleplayFeedback.correction.romanHindi}</p>
                      </div>
                    )}

                    {/* Model Natural Version */}
                    {roleplayFeedback.naturalTip && (
                      <div className="text-xs text-slate-600 space-y-0.5 pt-1 border-t border-slate-100">
                        <span className="font-bold text-navy-dark block text-[11px]">Model Natural Answer:</span>
                        <p className="italic text-slate-700">"{roleplayFeedback.naturalTip}"</p>
                      </div>
                    )}

                    <button
                      onClick={advanceRoleplay}
                      className="w-full py-2.5 rounded-xl bg-sky-DEFAULT text-navy-dark text-xs font-extrabold hover:bg-sky-hover transition-colors shadow-soft flex items-center justify-center gap-1.5"
                    >
                      <span>Continue to Next Exchange</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-sky-light text-navy-dark flex items-center justify-center mx-auto text-2xl font-black shadow-soft">
                  🎉
                </div>
                <h3 className="text-2xl font-display font-black text-navy-dark">
                  Roleplay Completed!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Outstanding job practicing this 12–15 exchange conversation! Practicing both sides of everyday conversations removes hesitation and builds automatic fluency.
                </p>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleRestartRoleplay}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 flex items-center gap-1.5"
                  >
                    <RotateCcw size={14} /> Retake Roleplay
                  </button>
                  <button
                    onClick={() => setActiveMode('study')}
                    className="px-6 py-2.5 rounded-xl bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark shadow-soft"
                  >
                    Review Full Script
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
