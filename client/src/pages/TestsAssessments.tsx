import React, { useState } from 'react';
import {
  ClipboardCheck,
  Award,
  Clock,
  Sparkles,
  ArrowRight,
  RotateCcw,
  History,
  CheckCircle2
} from 'lucide-react';
import { assessmentCatalog, TestCatalogItem } from '../data/assessmentsData';
import { useLearning } from '../context/LearningContext';

interface TestsAssessmentsProps {
  onStartTest: (test: TestCatalogItem) => void;
}

export const TestsAssessments: React.FC<TestsAssessmentsProps> = ({ onStartTest }) => {
  const { profile } = useLearning();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Grammar MCQ', 'Sentence Correction', 'Final Exam'];

  const filteredTests = assessmentCatalog.filter(t => {
    return selectedCategory === 'All' || t.category === selectedCategory;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Header Banner in Dark Navy & Sky Blue */}
      <div className="bg-gradient-to-r from-navy-dark via-navy to-[#1B3B66] text-white p-6 sm:p-8 rounded-2xl shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-sky-light border border-sky-DEFAULT/20">
            <ClipboardCheck size={14} className="text-sky-DEFAULT" /> Practice Tests & Quizzes
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight">
            Tests & Quizzes
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Test your conversational instincts, spot common grammatical traps, and evaluate your everyday English progress with instant explanations and Roman Hindi tips.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-sky-DEFAULT/20 text-center flex-shrink-0 min-w-[200px]">
          <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold block mb-1">
            Tests Attempted
          </span>
          <div className="text-3xl font-display font-black text-white">
            {profile.recentAttempts.length} <span className="text-sm font-medium text-sky-light">Tests</span>
          </div>
          <span className="text-[11px] text-sky-light mt-1 block font-semibold">
            Up to +150 XP per test
          </span>
        </div>
      </div>

      {/* 2. Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-navy-DEFAULT text-white shadow-soft'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Tests Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTests.map((test) => {
          const isFinal = test.category === 'Final Exam';

          return (
            <div
              key={test.id}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-card ${
                isFinal
                  ? 'bg-gradient-to-br from-navy-dark to-navy text-white border-navy-light/40 shadow-soft-lg'
                  : 'bg-white border-slate-200 shadow-soft-sm hover:border-sky-DEFAULT'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    isFinal ? 'bg-sky-DEFAULT text-navy-dark font-black' : 'bg-sky-light text-navy-dark'
                  }`}>
                    {test.category}
                  </span>
                  <div className={`flex items-center gap-2 text-xs ${isFinal ? 'text-slate-300' : 'text-slate-400'}`}>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock size={12} /> {test.durationMins}m
                    </span>
                    <span className="font-bold">Level {test.level}</span>
                  </div>
                </div>

                <h3 className={`font-display font-black text-lg ${isFinal ? 'text-white' : 'text-navy-dark'}`}>
                  {test.title}
                </h3>
                <p className={`text-xs mt-2 line-clamp-2 leading-relaxed ${isFinal ? 'text-slate-200' : 'text-slate-500'}`}>
                  {test.description}
                </p>

                <div className="mt-4 flex items-center gap-3 text-xs">
                  <span className={`font-bold ${isFinal ? 'text-sky-DEFAULT' : 'text-navy-DEFAULT'}`}>
                    {test.totalQuestions} Questions
                  </span>
                  <span className={isFinal ? 'text-slate-300' : 'text-slate-400'}>•</span>
                  <span className={isFinal ? 'text-slate-200' : 'text-slate-500'}>
                    Instant Roman Hindi Tips
                  </span>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className={`text-xs font-bold ${isFinal ? 'text-sky-light' : 'text-slate-400'}`}>
                  Reward: +{test.rewardXP} XP
                </span>
                <button
                  onClick={() => onStartTest(test)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-soft ${
                    isFinal
                      ? 'bg-sky-DEFAULT text-navy-dark hover:bg-white'
                      : 'bg-navy-DEFAULT text-white hover:bg-navy-dark'
                  }`}
                >
                  <span>Start Test</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Recent Test Attempts Log */}
      {profile.recentAttempts.length > 0 && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-navy-dark">
              <History size={18} className="text-navy-DEFAULT" />
              <h3 className="font-display font-bold text-base">
                Recent Test Attempts & Diagnostic History
              </h3>
            </div>
            <span className="text-xs text-slate-400">Past performance records</span>
          </div>

          <div className="space-y-2.5">
            {profile.recentAttempts.map((att) => (
              <div
                key={att.id}
                className="p-3.5 rounded-xl bg-surface-100 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-navy-dark">{att.title}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sky-light text-navy-dark font-medium">
                      {att.type}
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">
                    Completed on {att.date}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-700">
                    {att.score} / {att.total} ({att.percentage}%)
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-sky-light text-navy-dark">
                    {att.percentage >= 80 ? 'Mastered ✓' : 'Good Practice'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
