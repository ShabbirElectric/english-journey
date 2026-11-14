import React, { useState } from 'react';
import {
  BookMarked,
  Clock,
  Volume2,
  VolumeX,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Layers,
  Award,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Check,
  RotateCcw
} from 'lucide-react';
import { readingPassagesList } from '../data/readingData';
import { DailyVocabWord } from '../types';
import { speechService } from '../services/speechService';
import { useLearning } from '../context/LearningContext';
import { AudioButton } from '../components/AudioButton';

export const ReadingRoom: React.FC = () => {
  const { addXP, unlockBadge, incrementReadingCount } = useLearning();

  const [selectedPassageId, setSelectedPassageId] = useState(readingPassagesList[0].id);
  const activePassage = readingPassagesList.find(p => p.id === selectedPassageId) || readingPassagesList[0];

  // Active view tab: 'passage' | 'vocab' | 'sentences' | 'mcqs' | 'comprehension'
  const [activeTab, setActiveTab] = useState<'passage' | 'vocab' | 'sentences' | 'mcqs' | 'comprehension'>('passage');

  // Audio reader state
  const [isReadingAloud, setIsReadingAloud] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.92);

  // Active word tooltip modal
  const [activeWordTooltip, setActiveWordTooltip] = useState<DailyVocabWord | null>(null);

  // MCQ state
  const [selectedMcqAnswers, setSelectedMcqAnswers] = useState<Record<string, number>>({});
  const [mcqSubmitted, setMcqSubmitted] = useState(false);

  // Comprehension questions expanded states
  const [revealedComprehensions, setRevealedComprehensions] = useState<Record<string, boolean>>({});

  const handleToggleReadAloud = async () => {
    if (isReadingAloud) {
      speechService.stopSpeaking();
      setIsReadingAloud(false);
    } else {
      setIsReadingAloud(true);
      await speechService.speak(activePassage.passage, speechRate);
      setIsReadingAloud(false);
    }
  };

  const handleSelectMcq = (qId: string, optIdx: number) => {
    if (mcqSubmitted) return;
    setSelectedMcqAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmitMcqs = () => {
    setMcqSubmitted(true);
    let score = 0;
    activePassage.mcqQuestions.forEach(q => {
      if (selectedMcqAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });

    if (score === activePassage.mcqQuestions.length) {
      addXP(40, 'Perfect Reading MCQs');
      unlockBadge('reading_scholar');
    } else {
      addXP(20, 'Reading MCQs Completed');
    }
    incrementReadingCount();
  };

  const handleResetMcqs = () => {
    setSelectedMcqAnswers({});
    setMcqSubmitted(false);
  };

  const toggleRevealComprehension = (qId: string) => {
    setRevealedComprehensions(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const wordCount = activePassage.passage.trim().split(/\s+/).length;

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Header Banner in Dark Navy & Sky Blue */}
      <div className="bg-gradient-to-r from-navy-dark via-navy to-[#1B3B66] text-white p-6 sm:p-8 rounded-2xl shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-sky-light border border-sky-DEFAULT/20">
            <BookMarked size={14} className="text-sky-DEFAULT" /> Daily Reading Immersion • {activePassage.level} Level
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight">
            Reading Room & Comprehension
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Every day, read an engaging 200–300 word passage in natural everyday English. Master 10 vocabulary words, understand 5 explained sentences, and test yourself with 5 MCQs and 5 comprehension questions.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-sky-DEFAULT/20 text-center flex-shrink-0 min-w-[200px]">
          <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold block mb-1">
            Passage Length
          </span>
          <div className="text-3xl font-display font-black text-white">
            {wordCount} <span className="text-sm font-medium text-sky-light">Words</span>
          </div>
          <span className="text-[11px] text-sky-light mt-1 block font-medium">
            {activePassage.level} Level • ~{activePassage.readTimeMins} mins read
          </span>
        </div>
      </div>

      {/* 2. Passage Selector */}
      <div className="flex flex-wrap items-center gap-2">
        {readingPassagesList.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setSelectedPassageId(p.id);
              handleResetMcqs();
              setRevealedComprehensions({});
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              selectedPassageId === p.id
                ? 'bg-navy-DEFAULT text-white shadow-soft border border-sky-DEFAULT'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>{p.title}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded ${
              selectedPassageId === p.id ? 'bg-sky-DEFAULT text-navy-dark font-extrabold' : 'bg-slate-100 text-slate-600'
            }`}>
              {p.level}
            </span>
          </button>
        ))}
      </div>

      {/* 3. Section Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveTab('passage')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'passage'
              ? 'bg-navy-DEFAULT text-white shadow-soft'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <BookOpen size={14} />
          <span>Read Passage ({wordCount} words)</span>
        </button>

        <button
          onClick={() => setActiveTab('vocab')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'vocab'
              ? 'bg-navy-DEFAULT text-white shadow-soft'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Sparkles size={14} className="text-sky-DEFAULT" />
          <span>10 Vocabulary Words</span>
        </button>

        <button
          onClick={() => setActiveTab('sentences')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'sentences'
              ? 'bg-navy-DEFAULT text-white shadow-soft'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Layers size={14} />
          <span>5 Sentences Explained</span>
        </button>

        <button
          onClick={() => setActiveTab('mcqs')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'mcqs'
              ? 'bg-navy-DEFAULT text-white shadow-soft'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <HelpCircle size={14} />
          <span>5 MCQs</span>
        </button>

        <button
          onClick={() => setActiveTab('comprehension')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'comprehension'
              ? 'bg-navy-DEFAULT text-white shadow-soft'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <CheckCircle2 size={14} />
          <span>5 Comprehension Questions</span>
        </button>
      </div>

      {/* 4. Tab Contents */}

      {/* TAB A: Reading Passage */}
      {activeTab === 'passage' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md bg-sky-light text-navy-dark text-xs font-bold">
                  {activePassage.category}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Level: {activePassage.level}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-black text-navy-dark">
                {activePassage.title}
              </h2>
            </div>

            {/* Audio Reader Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleToggleReadAloud}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  isReadingAloud
                    ? 'bg-navy-dark text-sky-DEFAULT shadow-soft'
                    : 'bg-sky-light text-navy-dark hover:bg-sky-DEFAULT/30 border border-sky-DEFAULT/30'
                }`}
              >
                {isReadingAloud ? <VolumeX size={16} /> : <Volume2 size={16} />}
                <span>{isReadingAloud ? 'Stop Audio' : 'Listen to Native Audio'}</span>
              </button>
            </div>
          </div>

          {/* Graded Natural English Passage */}
          <div className="prose max-w-none text-slate-800 leading-relaxed text-sm sm:text-base space-y-4">
            {activePassage.passage.split('\n\n').map((paragraph, pIdx) => (
              <p key={pIdx} className="font-normal leading-7">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bottom Action strip */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-500 font-medium">
              Finished reading? Review the 10 daily words and sentence breakdowns next!
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('vocab')}
                className="px-4 py-2 rounded-xl bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark transition-colors"
              >
                View 10 Vocabulary Words →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB B: 10 Vocabulary Words */}
      {activeTab === 'vocab' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-navy-dark flex items-center gap-2">
              <Sparkles size={18} className="text-sky-DEFAULT" />
              10 Vocabulary Words from This Passage
            </h3>
            <span className="text-xs text-slate-500 font-medium">Click audio to hear native pronunciation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activePassage.vocabularyList.map((wordItem, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-navy-dark text-sky-DEFAULT flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </span>
                    <h4 className="font-display font-extrabold text-base text-navy-dark">{wordItem.word}</h4>
                    <span className="text-[11px] text-slate-400 font-mono">[{wordItem.pronunciationGuide}]</span>
                  </div>
                  <AudioButton text={wordItem.word} size="sm" />
                </div>

                <div className="p-2.5 rounded-xl bg-surface-100 border border-slate-100 space-y-1">
                  <p className="text-xs text-slate-700"><strong>English:</strong> {wordItem.simpleMeaning}</p>
                  <p className="text-xs text-navy-DEFAULT font-bold">🗣️ Roman Hindi: {wordItem.romanHindiMeaning}</p>
                </div>

                <div className="text-xs text-slate-600 space-y-1 pl-1">
                  <p><strong>Natural Daily Example:</strong> "{wordItem.dailyLifeExample}"</p>
                  <p className="text-slate-500"><strong>Practice:</strong> "{wordItem.practiceSentence}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB C: 5 Sentences Explained */}
      {activeTab === 'sentences' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-navy-dark flex items-center gap-2">
              <Layers size={18} className="text-navy-DEFAULT" />
              5 Key Sentences Explained in Detail
            </h3>
            <span className="text-xs text-slate-500 font-medium">Sentence structures & Roman Hindi breakdowns</span>
          </div>

          <div className="space-y-4">
            {activePassage.explainedSentences.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-sky-light text-navy-dark flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      #{idx + 1}
                    </span>
                    <p className="text-sm font-bold text-navy-dark leading-snug">
                      "{item.sentence}"
                    </p>
                  </div>
                  <AudioButton text={item.sentence} size="sm" />
                </div>

                <div className="p-3 rounded-xl bg-surface-100 border border-slate-100 space-y-1.5 ml-8 text-xs text-slate-700">
                  <p><strong>Grammar & Structure Breakdown:</strong> {item.breakdown}</p>
                  <p className="text-navy-DEFAULT font-bold">
                    🗣️ Roman Hindi: {item.romanHindi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB D: 5 Multiple Choice Questions (MCQs) */}
      {activeTab === 'mcqs' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-display font-bold text-base text-navy-dark">
                5 Reading Comprehension MCQs
              </h3>
              <p className="text-xs text-slate-500">Test how well you understood the details and main ideas.</p>
            </div>
            {mcqSubmitted && (
              <button
                onClick={handleResetMcqs}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 hover:bg-slate-50"
              >
                <RotateCcw size={13} /> Retake MCQs
              </button>
            )}
          </div>

          <div className="space-y-6">
            {activePassage.mcqQuestions.map((q, qIdx) => {
              const selectedIdx = selectedMcqAnswers[q.id];
              const isAnswered = selectedIdx !== undefined;

              return (
                <div key={q.id} className="p-4 rounded-2xl bg-surface-100 border border-slate-200 space-y-3">
                  <span className="text-xs font-extrabold text-navy-dark">
                    Question {qIdx + 1}: {q.question}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedIdx === optIdx;
                      const isCorrect = q.correctIndex === optIdx;

                      let btnStyle = 'bg-white border-slate-200 text-slate-800 hover:border-slate-300';
                      if (mcqSubmitted) {
                        if (isCorrect) {
                          btnStyle = 'bg-sky-light/50 border-sky-DEFAULT text-navy-dark font-bold';
                        } else if (isSelected && !isCorrect) {
                          btnStyle = 'bg-rose-50 border-rose-300 text-rose-800 line-through';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-navy-DEFAULT text-white border-navy-DEFAULT font-bold shadow-soft-sm';
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectMcq(q.id, optIdx)}
                          className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {mcqSubmitted && isCorrect && <Check size={14} className="text-navy-DEFAULT" />}
                        </button>
                      );
                    })}
                  </div>

                  {mcqSubmitted && (
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                      <p className="text-slate-700"><strong>Explanation:</strong> {q.explanation}</p>
                      {q.romanHindiTip && (
                        <p className="text-navy-DEFAULT font-bold">🗣️ Roman Hindi Tip: {q.romanHindiTip}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!mcqSubmitted && (
            <div className="pt-2">
              <button
                onClick={handleSubmitMcqs}
                disabled={Object.keys(selectedMcqAnswers).length < activePassage.mcqQuestions.length}
                className="w-full py-3 rounded-xl bg-navy-DEFAULT text-white font-bold text-xs hover:bg-navy-dark transition-colors shadow-soft disabled:opacity-50"
              >
                Submit MCQ Answers ({Object.keys(selectedMcqAnswers).length}/{activePassage.mcqQuestions.length} Answered)
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB E: 5 Comprehension Questions */}
      {activeTab === 'comprehension' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-navy-dark flex items-center gap-2">
              <CheckCircle2 size={18} className="text-navy-DEFAULT" />
              5 Open Comprehension Questions
            </h3>
            <span className="text-xs text-slate-500 font-medium">Reflect on the passage & reveal model answers</span>
          </div>

          <div className="space-y-3">
            {activePassage.comprehensionQuestions.map((item, idx) => {
              const isRevealed = revealedComprehensions[item.id];

              return (
                <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-navy-dark text-sky-DEFAULT flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-sm font-bold text-navy-dark">
                        {item.question}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleRevealComprehension(item.id)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-navy-DEFAULT hover:bg-slate-50 flex items-center gap-1 transition-colors flex-shrink-0"
                    >
                      <span>{isRevealed ? 'Hide Answer' : 'Reveal Answer'}</span>
                      {isRevealed ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {isRevealed && (
                    <div className="p-3.5 rounded-xl bg-surface-100 border border-slate-200 space-y-2 ml-8 text-xs text-slate-700 animate-fadeIn">
                      <p><strong>Suggested Answer:</strong> {item.suggestedAnswer}</p>
                      <p className="text-navy-DEFAULT font-bold">
                        🗣️ Roman Hindi Hint: {item.romanHindiHint}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
