import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Sparkles,
  BookOpen,
  Languages,
  PenTool,
  Mic,
  Award,
  Clock,
  RotateCcw,
  Check
} from 'lucide-react';
import { ChallengeDay } from '../types';
import { AudioButton } from '../components/AudioButton';
import { useLearning } from '../context/LearningContext';

interface ChallengeDayViewProps {
  dayData: ChallengeDay;
  onBack: () => void;
  onNavigateToNextDay?: () => void;
}

export const ChallengeDayView: React.FC<ChallengeDayViewProps> = ({
  dayData,
  onBack,
  onNavigateToNextDay
}) => {
  const { profile, markChallengeDayCompleted, recordQuizAttempt } = useLearning();
  const isCompleted = profile.completedChallengeDays.includes(dayData.day);

  // Daily quiz state
  const [selectedQuizIndex, setSelectedQuizIndex] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [writingResponse, setWritingResponse] = useState('');

  const currentQuiz = dayData.quiz[0];
  const isQuizCorrect = selectedQuizIndex === currentQuiz.correctIndex;

  const handleCompleteDay = () => {
    if (selectedQuizIndex === null) return;
    setQuizSubmitted(true);

    if (isQuizCorrect) {
      recordQuizAttempt({
        title: `Challenge Day ${dayData.day} Quiz`,
        score: 1,
        total: 1,
        percentage: 100,
        type: 'Challenge Day'
      });
      if (!isCompleted) {
        markChallengeDayCompleted(dayData.day, dayData.rewardXP);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      {/* Back button & Day Header */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-navy-DEFAULT transition-colors mb-3"
        >
          <ArrowLeft size={16} /> Back to 30-Day Challenge
        </button>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="px-3 py-1 rounded-full bg-sky-light text-navy-dark text-xs font-bold">
              {dayData.phaseTitle}
            </span>
            <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <Calendar size={14} /> Day {dayData.day} of 30
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">
                {dayData.level} Level
              </span>
              {isCompleted && (
                <span className="flex items-center gap-1 text-navy-DEFAULT font-bold">
                  <CheckCircle2 size={16} /> Completed
                </span>
              )}
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-display font-black text-navy-dark">
            Day {dayData.day}: {dayData.title}
          </h1>

          {/* Objectives */}
          <div className="p-4 rounded-xl bg-surface-100 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-navy-dark uppercase tracking-wider block">
              🎯 Today's Learning Objectives:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {dayData.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-DEFAULT mt-1.5 flex-shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 1. Core Practical Grammar Lesson */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
        <div className="flex items-center gap-2 text-navy-dark">
          <BookOpen size={20} className="text-navy-DEFAULT" />
          <h3 className="font-display font-bold text-base">
            1. Core Grammar Concept: {dayData.grammarSummary.topic}
          </h3>
        </div>

        <div className="p-4 rounded-xl bg-navy-dark text-sky-light font-mono text-xs sm:text-sm whitespace-pre-wrap leading-relaxed shadow-inner border border-navy-light/40">
          Formula: {dayData.grammarSummary.formula}
        </div>

        <p className="text-xs text-slate-700 leading-relaxed font-medium">
          {dayData.grammarSummary.keyRule}
        </p>

        {dayData.grammarSummary.romanHindiNote && (
          <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-slate-800 font-medium">
            🗣️ <strong>Roman Hindi Note:</strong> {dayData.grammarSummary.romanHindiNote}
          </div>
        )}

        <div className="space-y-2 pt-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Quick Examples:</span>
          {dayData.grammarSummary.quickExamples.map((eg, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-surface-100 border border-slate-200 flex items-center justify-between text-xs text-navy-dark">
              <span className="font-medium">• {eg}</span>
              <AudioButton text={eg} size="sm" />
            </div>
          ))}
        </div>
      </div>

      {/* 2. Today's 10 Vocabulary Words */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-navy-dark">
            <Languages size={20} className="text-navy-DEFAULT" />
            <h3 className="font-display font-bold text-base">
              2. Today's Vocabulary Focus
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-medium">{dayData.vocabList.length} Everyday Words</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {dayData.vocabList.map((vw, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-surface-100 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-display font-extrabold text-sm text-navy-dark">{vw.word}</span>
                <AudioButton text={vw.word} size="sm" />
              </div>
              <p className="text-xs text-slate-700"><strong>Meaning:</strong> {vw.simpleMeaning}</p>
              <p className="text-xs text-navy-DEFAULT font-bold">🗣️ Roman Hindi: {vw.romanHindiMeaning}</p>
              <p className="text-[11px] text-slate-500 italic">"{vw.dailyLifeExample}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Reading or Writing Task */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-3">
        <div className="flex items-center gap-2 text-navy-dark">
          <PenTool size={20} className="text-navy-DEFAULT" />
          <h3 className="font-display font-bold text-base">
            3. Daily {dayData.readingOrWritingTask.type === 'writing' ? 'Writing Activity' : 'Reading Task'}: {dayData.readingOrWritingTask.title}
          </h3>
        </div>

        <p className="text-xs text-slate-700 leading-relaxed font-medium">
          {dayData.readingOrWritingTask.prompt}
        </p>

        {dayData.readingOrWritingTask.type === 'writing' && (
          <div className="space-y-2 pt-2">
            <textarea
              value={writingResponse}
              onChange={(e) => setWritingResponse(e.target.value)}
              placeholder="Write your response here..."
              rows={4}
              className="w-full p-3 rounded-xl border border-slate-200 text-xs text-navy-dark focus:ring-2 focus:ring-sky-DEFAULT/40 outline-none"
            />
          </div>
        )}
      </div>

      {/* 4. Speaking Activity Prompt */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-3">
        <div className="flex items-center gap-2 text-navy-dark">
          <Mic size={20} className="text-navy-DEFAULT" />
          <h3 className="font-display font-bold text-base">
            4. Speaking Practice Prompt
          </h3>
        </div>

        <div className="p-4 rounded-xl bg-sky-light/30 border border-sky-DEFAULT/30 space-y-2 text-xs text-navy-dark">
          <p><strong>Scenario:</strong> {dayData.speakingPrompt.scenario}</p>
          <div className="flex items-center justify-between pt-1">
            <p><strong>Starter:</strong> "{dayData.speakingPrompt.starterPhrase}"</p>
            <AudioButton text={dayData.speakingPrompt.starterPhrase} size="sm" />
          </div>
          <span className="text-[10px] text-slate-500 font-bold block">
            Target speaking duration: ~{dayData.speakingPrompt.targetSeconds} seconds
          </span>
        </div>
      </div>

      {/* 5. Daily Mastery Quiz */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-display font-bold text-base text-navy-dark">
              5. Daily Mastery Quiz (+{dayData.rewardXP} XP)
            </h3>
            <p className="text-xs text-slate-500">Answer correctly to complete Day {dayData.day} and extend your streak!</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-surface-100 border border-slate-200 space-y-3">
          <span className="text-xs font-bold text-navy-dark">
            {currentQuiz.question}
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {currentQuiz.options.map((opt, optIdx) => {
              const isSelected = selectedQuizIndex === optIdx;
              const isCorrect = currentQuiz.correctIndex === optIdx;

              let btnStyle = 'bg-white border-slate-200 text-slate-800 hover:border-slate-300';
              if (quizSubmitted) {
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
                  onClick={() => !quizSubmitted && setSelectedQuizIndex(optIdx)}
                  className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {quizSubmitted && isCorrect && <Check size={14} className="text-navy-DEFAULT" />}
                </button>
              );
            })}
          </div>

          {quizSubmitted && (
            <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
              <p className="text-slate-700"><strong>Explanation:</strong> {currentQuiz.explanation}</p>
              {currentQuiz.romanHindiTip && (
                <p className="text-navy-DEFAULT font-bold">🗣️ Roman Hindi Tip: {currentQuiz.romanHindiTip}</p>
              )}
            </div>
          )}
        </div>

        {!quizSubmitted ? (
          <button
            onClick={handleCompleteDay}
            disabled={selectedQuizIndex === null}
            className="w-full py-3 rounded-xl bg-navy-DEFAULT text-white font-bold text-xs hover:bg-navy-dark transition-colors shadow-soft disabled:opacity-50"
          >
            Submit Answer & Complete Day {dayData.day}
          </button>
        ) : (
          <div className="p-4 rounded-xl bg-sky-light/40 border border-sky-DEFAULT/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={24} className="text-navy-DEFAULT" />
              <div>
                <span className="text-xs font-bold text-navy-dark block">
                  Day {dayData.day} Completed! (+{dayData.rewardXP} XP)
                </span>
                <span className="text-[11px] text-slate-600">
                  Streak extended! Tomorrow unlock Day {dayData.day + 1}.
                </span>
              </div>
            </div>

            {onNavigateToNextDay && dayData.day < 30 && (
              <button
                onClick={onNavigateToNextDay}
                className="px-4 py-2 rounded-xl bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark"
              >
                Go to Day {dayData.day + 1} →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
