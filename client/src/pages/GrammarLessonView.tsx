import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  HelpCircle,
  Lightbulb,
  Check,
  RotateCcw,
  Volume2
} from 'lucide-react';
import { GrammarLesson } from '../types';
import { AudioButton } from '../components/AudioButton';
import { useLearning } from '../context/LearningContext';

interface GrammarLessonViewProps {
  lesson: GrammarLesson;
  onBack: () => void;
  onNavigateToLesson?: (slug: string) => void;
}

export const GrammarLessonView: React.FC<GrammarLessonViewProps> = ({
  lesson,
  onBack
}) => {
  const { profile, markLessonCompleted, recordQuizAttempt } = useLearning();
  const isCompleted = profile.completedLessons.includes(lesson.id);

  // Practice exercises interactive state
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, string>>({});
  const [checkedPractice, setCheckedPractice] = useState<Record<string, boolean>>({});

  // Quiz state
  const [quizSelected, setQuizSelected] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handlePracticeChange = (id: string, val: string) => {
    setPracticeAnswers(prev => ({ ...prev, [id]: val }));
  };

  const handleCheckPractice = (id: string) => {
    setCheckedPractice(prev => ({ ...prev, [id]: true }));
  };

  const handleSelectQuiz = (questionId: string, optionIndex: number) => {
    if (quizSubmitted) return;
    setQuizSelected(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
    let correctCount = 0;
    lesson.quiz.forEach(q => {
      if (quizSelected[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });

    recordQuizAttempt({
      title: `${lesson.title} Practice Test`,
      score: correctCount,
      total: lesson.quiz.length,
      percentage: Math.round((correctCount / lesson.quiz.length) * 100),
      type: 'Grammar Quiz'
    });

    if (!isCompleted) {
      markLessonCompleted(lesson.id, 35);
    }
  };

  const handleRetakeQuiz = () => {
    setQuizSelected({});
    setQuizSubmitted(false);
  };

  const quizScore = lesson.quiz.reduce((acc, q) => {
    return acc + (quizSelected[q.id] === q.correctIndex ? 1 : 0);
  }, 0);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      {/* Top Navigation & Header */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-navy-DEFAULT transition-colors mb-3"
        >
          <ArrowLeft size={16} /> Back to Daily Grammar
        </button>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="px-3 py-1 rounded-full bg-sky-light text-navy-dark text-xs font-bold">
              {lesson.partTitle}
            </span>
            <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <Clock size={14} /> {lesson.durationMins} mins
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">
                {lesson.level} Level
              </span>
              {isCompleted && (
                <span className="flex items-center gap-1 text-navy-DEFAULT font-bold">
                  <CheckCircle2 size={16} /> Completed
                </span>
              )}
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-display font-black text-navy-dark">
            {lesson.title}
          </h1>

          {/* 1. Simple Explanation */}
          <div className="p-4 rounded-xl bg-surface-100 border border-slate-200 leading-relaxed text-sm text-slate-800">
            <p className="font-medium">{lesson.simpleExplanation}</p>
          </div>
        </div>
      </div>

      {/* 2. Formula & Structure Card in Dark Navy */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-navy-dark text-sky-DEFAULT flex items-center justify-center font-black">
            fx
          </div>
          <h3 className="font-display font-bold text-base text-navy-dark">
            Formula & Sentence Structure
          </h3>
        </div>
        <div className="p-4 rounded-xl bg-navy-dark text-sky-light font-mono text-xs sm:text-sm whitespace-pre-wrap leading-relaxed shadow-inner border border-navy-light/40">
          {lesson.formulaOrStructure}
        </div>
      </div>

      {/* 3. Roman Hindi Explanation Card */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-3">
        <div className="flex items-center gap-2 text-navy-dark">
          <Lightbulb size={20} className="text-amber-500" />
          <h3 className="font-display font-bold text-base">
            Roman Hindi Explanation (Hinglish Mein Samjhein)
          </h3>
        </div>
        <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60 text-slate-800 text-sm leading-relaxed whitespace-pre-wrap font-medium">
          {lesson.romanHindiExplanation}
        </div>
      </div>

      {/* 4. 5–10 Practical Examples with Audio */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-light text-navy-dark flex items-center justify-center font-bold text-xs">
              {lesson.examples.length}x
            </div>
            <h3 className="font-display font-bold text-base text-navy-dark">
              Practical Everyday Examples
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-medium">Click icon to hear pronunciation</span>
        </div>

        <div className="space-y-3">
          {lesson.examples.map((eg, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-surface-100 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-sky-light/20 transition-colors"
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-bold text-navy-dark bg-sky-light px-1.5 py-0.5 rounded mt-0.5">
                    #{idx + 1}
                  </span>
                  <p className="text-sm font-bold text-navy-dark">
                    {eg.en}
                  </p>
                </div>
                <p className="text-xs text-slate-600 pl-6 font-medium">
                  🗣️ {eg.romanHindi}
                </p>
                {eg.context && (
                  <p className="text-[11px] text-slate-400 pl-6 italic">
                    Context: {eg.context}
                  </p>
                )}
              </div>

              <div className="pl-6 sm:pl-0 flex-shrink-0">
                <AudioButton text={eg.en} size="sm" label="Listen" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Common Mistakes to Avoid */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
        <div className="flex items-center gap-2 text-rose-600">
          <XCircle size={20} />
          <h3 className="font-display font-bold text-base text-navy-dark">
            Common Traps & Mistakes to Avoid
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lesson.commonMistakes.map((m, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-rose-100 bg-rose-50/40 space-y-2">
              <div className="flex items-center gap-2 text-rose-700 text-xs font-bold">
                <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 text-[11px]">✕</span>
                <span className="line-through">{m.wrong}</span>
              </div>
              <div className="flex items-center gap-2 text-navy-dark text-xs font-bold">
                <span className="w-5 h-5 rounded-full bg-sky-light flex items-center justify-center text-navy-dark text-[11px]">✓</span>
                <span>{m.correct}</span>
              </div>
              <p className="text-[11px] text-slate-600 pt-1 border-t border-rose-100/60 leading-relaxed">
                <strong>Why:</strong> {m.reason}
              </p>
              {m.romanHindiReason && (
                <p className="text-[11px] text-navy-DEFAULT font-semibold">
                  🗣️ <strong>Hindi:</strong> {m.romanHindiReason}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 6. Interactive Practice Exercises */}
      {lesson.practiceExercises && lesson.practiceExercises.length > 0 && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle size={20} className="text-navy-DEFAULT" />
            <h3 className="font-display font-bold text-base text-navy-dark">
              Interactive Practice Exercises
            </h3>
          </div>

          <div className="space-y-4">
            {lesson.practiceExercises.map((pe, idx) => {
              const hasChecked = checkedPractice[pe.id];
              const userAnswer = practiceAnswers[pe.id] || '';
              const isCorrect = userAnswer.trim().toLowerCase() === pe.correctAnswer.trim().toLowerCase();

              return (
                <div key={pe.id} className="p-4 rounded-xl bg-surface-100 border border-slate-200 space-y-3">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Exercise {idx + 1}
                  </span>
                  <p className="text-sm font-bold text-navy-dark">{pe.prompt}</p>

                  {pe.options ? (
                    <div className="flex flex-wrap gap-2">
                      {pe.options.map((opt, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => handlePracticeChange(pe.id, opt)}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                            userAnswer === opt
                              ? 'bg-navy-DEFAULT text-white border-navy-DEFAULT'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => handlePracticeChange(pe.id, e.target.value)}
                      placeholder="Type your answer here..."
                      className="w-full sm:w-80 px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-sky-DEFAULT/40 outline-none"
                    />
                  )}

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => handleCheckPractice(pe.id)}
                      disabled={!userAnswer}
                      className="px-3 py-1.5 rounded-lg bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark disabled:opacity-50"
                    >
                      Check Answer
                    </button>
                  </div>

                  {hasChecked && (
                    <div className={`p-3 rounded-lg text-xs space-y-1 ${
                      isCorrect ? 'bg-sky-light/50 border border-sky-DEFAULT text-navy-dark' : 'bg-rose-50 border border-rose-200 text-rose-900'
                    }`}>
                      <p className="font-bold">
                        {isCorrect ? '✓ Correct!' : `✕ Incorrect. Correct answer: "${pe.correctAnswer}"`}
                      </p>
                      <p>{pe.explanation}</p>
                      {pe.romanHindiTip && (
                        <p className="font-bold text-navy-DEFAULT">🗣️ Roman Hindi: {pe.romanHindiTip}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 7. Short Practice Test / MCQ Quiz */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-display font-bold text-base text-navy-dark">
              Short Practice Test ({lesson.quiz.length} Questions)
            </h3>
            <p className="text-xs text-slate-500">Test your mastery of this practical topic.</p>
          </div>
          {quizSubmitted && (
            <button
              onClick={handleRetakeQuiz}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 hover:bg-slate-50"
            >
              <RotateCcw size={13} /> Retake Test
            </button>
          )}
        </div>

        <div className="space-y-6">
          {lesson.quiz.map((q, qIdx) => {
            const selectedIdx = quizSelected[q.id];

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
                        onClick={() => handleSelectQuiz(q.id, optIdx)}
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

        {!quizSubmitted ? (
          <div className="pt-2">
            <button
              onClick={handleSubmitQuiz}
              disabled={Object.keys(quizSelected).length < lesson.quiz.length}
              className="w-full py-3 rounded-xl bg-navy-DEFAULT text-white font-bold text-xs hover:bg-navy-dark transition-colors shadow-soft disabled:opacity-50"
            >
              Submit Test & Complete Lesson (+35 XP)
            </button>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-sky-light/30 border border-sky-DEFAULT/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-navy-DEFAULT text-white flex items-center justify-center font-bold text-sm">
                {quizScore}/{lesson.quiz.length}
              </div>
              <div>
                <span className="text-xs font-bold text-navy-dark block">
                  {quizScore === lesson.quiz.length ? 'Perfect Score! 🌟' : 'Good Practice! Keep Going!'}
                </span>
                <span className="text-[11px] text-slate-500">
                  Lesson marked as complete. +35 XP added to your profile.
                </span>
              </div>
            </div>
            <button
              onClick={onBack}
              className="px-4 py-2 rounded-xl bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark"
            >
              Next Lesson →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
