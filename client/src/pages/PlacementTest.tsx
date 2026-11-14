import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  Award,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Sparkles,
  Info,
  Check
} from 'lucide-react';
import { placementQuestions, calculateCefrLevel } from '../data/placementTestData';
import { useLearning } from '../context/LearningContext';
import { LearningLevel } from '../types';

interface PlacementTestProps {
  onNavigate: (tab: string, slugOrDay?: string | number) => void;
}

export const PlacementTest: React.FC<PlacementTestProps> = ({ onNavigate }) => {
  const { profile, setCurrentLevel, addXP, recordQuizAttempt } = useLearning();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = placementQuestions[currentIndex];
  const totalQuestions = placementQuestions.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleSelectOption = (optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      handleFinishTest();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleFinishTest = () => {
    let score = 0;
    placementQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score += 1;
      }
    });

    const result = calculateCefrLevel(score, totalQuestions);
    setCurrentLevel(result.level);
    addXP(100, 'Completed Placement Assessment');
    recordQuizAttempt({
      title: 'English Placement Assessment',
      score,
      total: totalQuestions,
      percentage: Math.round((score / totalQuestions) * 100),
      type: 'Placement Test'
    });

    setShowResults(true);
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setShowResults(false);
  };

  // Calculate final score
  const score = Object.entries(selectedAnswers).reduce((acc, [idxStr, ans]) => {
    const idx = parseInt(idxStr);
    return acc + (ans === placementQuestions[idx].correctIndex ? 1 : 0);
  }, 0);

  const resultData = calculateCefrLevel(score, totalQuestions);

  // Category performance breakdown
  const categoryStats = placementQuestions.reduce((acc, q, idx) => {
    if (!acc[q.category]) {
      acc[q.category] = { correct: 0, total: 0 };
    }
    acc[q.category].total += 1;
    if (selectedAnswers[idx] === q.correctIndex) {
      acc[q.category].correct += 1;
    }
    return acc;
  }, {} as Record<string, { correct: number; total: number }>);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-light text-navy-dark text-xs font-bold mb-2">
              <HelpCircle size={14} /> Diagnostic Level Assessment
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-black text-navy-dark">
              English Placement Assessment
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Find your ideal starting level between <strong>Medium</strong>, <strong>Upper Medium</strong>, and <strong>Hard</strong>.
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-xs text-slate-400 block font-medium">Current Active Level</span>
            <span className="text-2xl font-black font-display text-navy-DEFAULT">
              {profile.currentLevel || 'Medium'}
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 p-3.5 rounded-xl bg-surface-100 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
          <Info size={16} className="text-navy-DEFAULT flex-shrink-0 mt-0.5" />
          <p>
            <strong>Note:</strong> This assessment recommends a personalized starting level for everyday conversational learning. It does not claim to be an official certified CEFR exam (like Cambridge, IELTS, or TOEFL).
          </p>
        </div>
      </div>

      {!showResults ? (
        /* Ongoing Test Question Card */
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-6">
          {/* Progress bar */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
              <span>Question {currentIndex + 1} of {totalQuestions}</span>
              <span className="text-navy-DEFAULT font-bold">{progressPercent}% Completed</span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-navy-DEFAULT h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Question Tag */}
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-sky-light text-navy-dark text-[11px] font-bold">
              {currentQuestion.category}
            </span>
            <span className="text-xs text-slate-400 font-semibold">
              Difficulty: {currentQuestion.level}
            </span>
          </div>

          {/* Question text */}
          <h2 className="text-lg sm:text-xl font-display font-extrabold text-navy-dark leading-snug">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((opt, optIdx) => {
              const isSelected = selectedAnswers[currentIndex] === optIdx;

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full p-4 rounded-xl border text-xs sm:text-sm font-semibold text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-navy-DEFAULT text-white border-navy-DEFAULT shadow-soft'
                      : 'bg-surface-100 border-slate-200 text-slate-800 hover:border-sky-DEFAULT'
                  }`}
                >
                  <span>{opt}</span>
                  {isSelected && <Check size={16} className="text-sky-DEFAULT" />}
                </button>
              );
            })}
          </div>

          {/* Next / Prev Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-30"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentIndex] === undefined}
              className="px-6 py-2.5 rounded-xl bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark flex items-center gap-1.5 shadow-soft disabled:opacity-40"
            >
              <span>{currentIndex === totalQuestions - 1 ? 'Finish & Calculate Level' : 'Next Question'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-6">
          <div className="text-center space-y-3 py-4">
            <div className="w-16 h-16 rounded-full bg-sky-light text-navy-dark flex items-center justify-center mx-auto text-2xl font-black shadow-soft">
              <Award size={32} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Assessment Results
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-navy-dark">
              {resultData.levelTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              {resultData.description}
            </p>
          </div>

          {/* Recommended Starting Level Box */}
          <div className="p-5 rounded-2xl bg-sky-light/40 border border-sky-DEFAULT/40 space-y-2">
            <span className="text-xs font-bold text-navy-dark uppercase tracking-wider block">
              Personalized Recommendation:
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {resultData.recommendation}
            </p>
            <div className="pt-2">
              <span className="text-xs font-bold text-navy-DEFAULT">Grammar & Speaking Focus: </span>
              <span className="text-xs text-slate-700">{resultData.grammarFocus}</span>
            </div>
          </div>

          {/* Choose your level manually */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
              Confirm or Change Your Active Level:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(['Medium', 'Upper Medium', 'Hard'] as LearningLevel[]).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setCurrentLevel(lvl)}
                  className={`p-3.5 rounded-xl border text-xs font-bold transition-all text-center ${
                    profile.currentLevel === lvl
                      ? 'bg-navy-DEFAULT text-white border-navy-DEFAULT shadow-soft'
                      : 'bg-surface-100 border-slate-200 text-slate-700 hover:border-sky-DEFAULT'
                  }`}
                >
                  {lvl} {profile.currentLevel === lvl && '✓ (Active)'}
                </button>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleRetake}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 flex items-center gap-1.5"
            >
              <RotateCcw size={14} /> Retake Assessment
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-6 py-2.5 rounded-xl bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark shadow-soft"
            >
              Go to Dashboard →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
