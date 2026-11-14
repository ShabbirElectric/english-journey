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
  Bot
} from 'lucide-react';
import { speakingScenariosList } from '../data/speakingData';
import { speechService } from '../services/speechService';
import { AudioButton } from '../components/AudioButton';
import { useLearning } from '../context/LearningContext';

interface SpeakingStudioProps {
  onNavigateToAi?: () => void;
}

export const SpeakingStudio: React.FC<SpeakingStudioProps> = ({ onNavigateToAi }) => {
  const { addXP, unlockBadge, incrementSpeakingCount } = useLearning();

  const [selectedScenarioId, setSelectedScenarioId] = useState(speakingScenariosList[0].id);
  const activeScenario = speakingScenariosList.find(s => s.id === selectedScenarioId) || speakingScenariosList[0];

  // Roman Hindi translation visibility toggle
  const [showRomanHindi, setShowRomanHindi] = useState(true);

  // User interactive reply states for "User Turn"
  const [userReplies, setUserReplies] = useState<Record<string, string>>({});
  const [submittedReplies, setSubmittedReplies] = useState<Record<string, boolean>>({});

  // Speech Recognition & Recording states
  const [isListening, setIsListening] = useState(false);
  const [spokenTranscript, setSpokenTranscript] = useState('');
  const [activeReplyingExchangeId, setActiveReplyingExchangeId] = useState<string | null>(null);

  // Voice recording & playback states
  const [isRecordingAudio, setIsRecordingAudio] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [recognitionError, setRecognitionError] = useState<string | null>(null);

  const recognitionSupported = speechService.isRecognitionSupported();

  useEffect(() => {
    return () => {
      speechService.stopListening();
    };
  }, []);

  const handleToggleListeningForExchange = (exchangeId: string) => {
    if (isListening && activeReplyingExchangeId === exchangeId) {
      speechService.stopListening();
      setIsListening(false);
      setActiveReplyingExchangeId(null);
    } else {
      speechService.stopListening();
      setRecognitionError(null);
      setActiveReplyingExchangeId(exchangeId);
      const started = speechService.startListening(
        (transcript) => {
          setUserReplies(prev => ({ ...prev, [exchangeId]: transcript }));
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

  const handleToggleAudioRecording = async () => {
    if (isRecordingAudio) {
      const audioUrl = await speechService.stopRecording();
      setIsRecordingAudio(false);
      setRecordedAudioUrl(audioUrl);
      addXP(30, 'Recorded Full Speaking Dialogue');
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
    addXP(15, 'Practiced Speaking Turn');
  };

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Header Banner in Dark Navy & Sky Blue */}
      <div className="bg-gradient-to-r from-navy-dark via-navy to-[#1B3B66] text-white p-6 sm:p-8 rounded-2xl shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-sky-light border border-sky-DEFAULT/20">
            <Mic size={14} className="text-sky-DEFAULT" /> Daily Speaking Practice • 12–15 Turn Conversations
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight">
            Speaking Studio & Dialogue Lab
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Master English that people actually use in everyday life. Listen to natural pronunciations, read Roman Hindi meanings, try your own replies, and roleplay with the AI teacher.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-sky-DEFAULT/20 text-center flex-shrink-0 min-w-[200px]">
          <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold block mb-1">
            Voice System
          </span>
          <div className="flex items-center justify-center gap-2 text-white font-display font-bold text-sm">
            <span className={`w-2.5 h-2.5 rounded-full ${recognitionSupported ? 'bg-sky-DEFAULT animate-pulse' : 'bg-amber-400'}`} />
            {recognitionSupported ? 'Speech Recognition Ready' : 'Audio Playback Active'}
          </div>
          <span className="text-[11px] text-sky-light mt-1 block">
            Native Speech & Audio Recording
          </span>
        </div>
      </div>

      {/* Browser compatibility note if speech recognition isn't supported */}
      {!recognitionSupported && (
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
          <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Live Speech Transcription Note:</p>
            <p className="mt-0.5">
              Live microphone dictation is supported in Google Chrome and Microsoft Edge. You can still listen to all native audios and record your voice with the audio recorder below.
            </p>
          </div>
        </div>
      )}

      {/* 2. Conversation Scenario Selector */}
      <div className="flex flex-wrap items-center gap-2">
        {speakingScenariosList.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => {
              setSelectedScenarioId(scenario.id);
              setRecordedAudioUrl(null);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              selectedScenarioId === scenario.id
                ? 'bg-navy-DEFAULT text-white shadow-soft border border-sky-DEFAULT'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>{scenario.title}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded ${
              selectedScenarioId === scenario.id ? 'bg-sky-DEFAULT text-navy-dark font-extrabold' : 'bg-slate-100 text-slate-600'
            }`}>
              {scenario.level}
            </span>
          </button>
        ))}
      </div>

      {/* 3. Main Interactive Conversation Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: 12-15 Turn Dialogue with User Turns */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
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

            {/* Roman Hindi toggle button */}
            <button
              onClick={() => setShowRomanHindi(!showRomanHindi)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-surface-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors self-start sm:self-auto"
            >
              {showRomanHindi ? <EyeOff size={14} /> : <Eye size={14} />}
              <span>{showRomanHindi ? 'Hide Roman Hindi' : 'Show Roman Hindi'}</span>
            </button>
          </div>

          {/* Dialogue Exchanges (12-15 Turns) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Full 12–15 Exchange Dialogue:
              </span>
              <span className="text-[11px] text-navy-DEFAULT font-semibold">
                Click speaker icons to listen to natural pronunciation
              </span>
            </div>

            {activeScenario.dialogue.map((item, idx) => {
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

                  {/* Natural Expression Note if present */}
                  {item.naturalExpressionNote && (
                    <div className="mt-2 ml-7 p-2 rounded-lg bg-white/80 border border-slate-200 text-[11px] text-navy-dark flex items-center gap-1.5">
                      <Sparkles size={13} className="text-sky-DEFAULT flex-shrink-0" />
                      <span><strong>Natural Phrasing Tip:</strong> {item.naturalExpressionNote}</span>
                    </div>
                  )}

                  {/* Interactive User Turn Input Box */}
                  {item.isUserTurn && (
                    <div className="mt-3 ml-7 pt-3 border-t border-sky-DEFAULT/20 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-navy-dark">
                          Try saying or typing your reply:
                        </span>
                        {recognitionSupported && (
                          <button
                            onClick={() => handleToggleListeningForExchange(item.id)}
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
                          <span>Awesome attempt! Compare with the sample answer above to build natural flow.</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Difficult Words, Natural Expressions & Audio Recorder */}
        <div className="lg:col-span-1 space-y-6">
          {/* 1. Difficult Words Explained with Roman Hindi */}
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

          {/* 3. Voice Recorder & Playback Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
            <div className="flex items-center gap-2 text-navy-dark">
              <Mic size={18} className="text-navy-DEFAULT" />
              <h3 className="font-display font-bold text-sm">
                Record & Hear Yourself Speak
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Read the conversation aloud and record your voice. Listening to yourself builds immediate confidence and accent clarity!
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

          {/* 4. Live Roleplay with AI English Teacher */}
          <div className="bg-gradient-to-br from-navy-dark to-navy text-white p-5 rounded-2xl border border-navy-light/40 shadow-soft space-y-3">
            <div className="flex items-center gap-2">
              <Bot size={20} className="text-sky-DEFAULT" />
              <h3 className="font-display font-bold text-sm">
                Roleplay with Coach Sarah
              </h3>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              Ready to practice this dialogue live? Coach Sarah will play Person A, listen to your replies, and help you sound completely natural!
            </p>
            {onNavigateToAi && (
              <button
                onClick={onNavigateToAi}
                className="w-full py-2.5 rounded-xl bg-sky-DEFAULT text-navy-dark font-extrabold text-xs flex items-center justify-center gap-1.5 hover:bg-white transition-colors shadow-soft"
              >
                <MessageSquare size={14} />
                <span>Start AI Roleplay Now</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
