import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Award,
  Sparkles,
  AlertCircle,
  RotateCcw,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { TestCatalogItem } from '../data/assessmentsData';
import { useLearning } from '../context/LearningContext';

interface TestRunnerProps {
  test: TestCatalogItem;
  onBack: () => void;
  onNavigateToLesson: (slug: string) => void;
}

export const TestRunner: React.FC<TestRunnerProps> = ({
  test,
  onBack,
  onNavigateToLesson
}) => {
  const { addXP, recordQuizAttempt, unlockBadge } = useLearning();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  const totalQuestions = test.questions.length;
  const currentQuestion = test.questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleSelect = (idx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [currentIndex]: idx }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      finishTest();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const finishTest = () => {
    let score = 0;
    test.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score += 1;
      }
    });

    const percent = Math.round((score / totalQuestions) * 100);
    recordQuizAttempt({
      title: test.title,
      score,
      total: totalQuestions,
      percentage: percent,
      type: test.category
    });

    addXP(score * 15, `Completed ${test.title}`);
    if (percent === 100) {
      unlockBadge('flawless_quiz');
    }
    if (test.category === 'Final Exam' && percent >= 80) {
      unlockBadge('graduate_day30');
    }

    setIsFinished(true);
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsFinished(false);
  };

  // Calculate results
  const score = Object.entries(selectedAnswers).reduce((acc, [idxStr, ans]) => {
    const idx = parseInt(idxStr);
    return acc + (ans === test.questions[idx].correctIndex ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / totalQuestions) * 100);

  // Identify weak topics
  const weakTopics = test.questions
    .map((q, idx) => {
      const isCorrect = selectedAnswers[idx] === q.correctIndex;
      if (!isCorrect && test.weakTopicMap[idx]) {
        return test.weakTopicMap[idx];
      }
      return null;
    })
    .filter(Boolean) as { topicName: string; lessonSlug: string }[];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-navy-DEFAULT transition-colors"
      >
        <ArrowLeft size={16} /> Back to Assessments
      </button>

      {!isFinished ? (
        /* Test Active Screen */
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-6">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-navy-DEFAULT uppercase">
                {test.category} • Level {test.level}
              </span>
              <h2 className="text-xl font-display font-black text-navy-dark">
                {test.title}
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-navy-DEFAULT h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Question Box */}
          <div className="py-2">
            <h3 className="text-base sm:text-lg font-display font-bold text-navy-dark leading-snug">
              {currentIndex + 1}. {currentQuestion.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((opt, optIdx) => {
              const isSelected = selectedAnswers[currentIndex] === optIdx;

              return (
                <div
                  key={optIdx}
                  onClick={() => handleSelect(optIdx)}
                  className={`p-4 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-sky-light/40 border-sky-DEFAULT text-navy-dark font-bold ring-1 ring-sky-DEFAULT'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${
                      isSelected ? 'bg-navy-DEFAULT text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2.5 rounded-xl border text-xs font-bold ${
                currentIndex === 0 ? 'border-slate-200 text-slate-300 cursor-not-allowed' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentIndex] === undefined}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-soft transition-all ${
                selectedAnswers[currentIndex] === undefined
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-navy-DEFAULT text-white hover:bg-navy-dark'
              }`}
            >
              <span>{currentIndex === totalQuestions - 1 ? 'Finish Examination' : 'Next Question'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-6 animate-fadeIn">
          {/* Result Card in Navy & Sky Blue */}
          <div className="bg-gradient-to-br from-navy-dark via-navy to-[#1B3B66] text-white p-6 sm:p-8 rounded-2xl shadow-soft-lg text-center space-y-3">
            <span className="text-xs font-bold text-sky-light uppercase tracking-wider block">
              Assessment Report
            </span>

            <div className="text-4xl sm:text-5xl font-display font-black text-sky-DEFAULT">
              {percentage}%
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold">
              {percentage >= 80 ? 'Outstanding Mastery! 🏆' : percentage >= 60 ? 'Commendable Effort!' : 'Needs Further Review'}
            </h3>

            <p className="text-xs text-slate-200 max-w-md mx-auto">
              You answered {score} out of {totalQuestions} questions correctly. +{score * 15} XP has been credited to your learning account.
            </p>
          </div>

          {/* Weak Topics & Recommended Revision */}
          {weakTopics.length > 0 ? (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-800">
                <AlertCircle size={18} className="text-amber-600" />
                <h4 className="font-display font-bold text-base text-navy-dark">
                  Identified Weak Areas & Recommended Revision:
                </h4>
              </div>

              <p className="text-xs text-slate-600">
                Click any topic to review its dedicated lesson in the Grammar Academy:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {weakTopics.map((wt, i) => (
                  <div
                    key={i}
                    onClick={() => onNavigateToLesson(wt.lessonSlug)}
                    className="p-3.5 rounded-xl bg-surface-100 hover:bg-sky-light/40 cursor-pointer border border-slate-200 hover:border-sky-DEFAULT transition-all flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-navy-dark block">{wt.topicName}</span>
                      <span className="text-[10px] text-navy-DEFAULT font-semibold">Review Lesson →</span>
                    </div>
                    <BookOpen size={16} className="text-navy-DEFAULT" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-sky-light/40 border border-sky-DEFAULT/40 text-navy-dark text-xs font-bold flex items-center gap-2">
              <CheckCircle2 size={18} className="text-navy-DEFAULT" />
              <span>Flawless Performance! No weak topics detected in this assessment.</span>
            </div>
          )}

          {/* Detailed Question Review */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
            <h4 className="font-display font-bold text-base text-navy-dark">
              Detailed Question-by-Question Review
            </h4>

            <div className="space-y-4">
              {test.questions.map((q, idx) => {
                const userChoice = selectedAnswers[idx];
                const isCorrect = userChoice === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border text-xs ${
                      isCorrect ? 'bg-sky-light/20 border-sky-DEFAULT/40' : 'bg-rose-50/40 border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-700">Question {idx + 1}</span>
                      <span className={`font-bold flex items-center gap-1 ${
                        isCorrect ? 'text-navy-DEFAULT' : 'text-rose-700'
                      }`}>
                        {isCorrect ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>

                    <p className="font-semibold text-navy-dark text-sm mb-2">{q.question}</p>

                    <div className="space-y-1 mb-2">
                      <p className="text-slate-600">
                        <strong>Your answer:</strong> {userChoice !== undefined ? q.options[userChoice] : 'Unanswered'}
                      </p>
                      {!isCorrect && (
                        <p className="text-navy-DEFAULT font-bold">
                          <strong>Correct answer:</strong> {q.options[q.correctIndex]}
                        </p>
                      )}
                    </div>

                    <p className="text-slate-600 italic bg-white p-2.5 rounded-lg border border-slate-200">
                      <strong>Explanation:</strong> {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              onClick={handleRetake}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5"
            >
              <RotateCcw size={14} /> Retake Test
            </button>

            <button
              onClick={onBack}
              className="px-6 py-2.5 rounded-xl bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark shadow-soft transition-colors"
            >
              Back to Assessments Catalog
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
