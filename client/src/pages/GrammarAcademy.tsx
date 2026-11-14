import React, { useState } from 'react';
import {
  BookOpenCheck,
  Search,
  CheckCircle2,
  Clock,
  ArrowRight,
  Filter,
  CheckCircle,
  Award,
  Sparkles
} from 'lucide-react';
import { allGrammarLessons, grammarPartsInfo } from '../data/grammarAcademyData';
import { useLearning } from '../context/LearningContext';

interface GrammarAcademyProps {
  onSelectLesson: (slug: string) => void;
}

export const GrammarAcademy: React.FC<GrammarAcademyProps> = ({ onSelectLesson }) => {
  const { profile } = useLearning();
  const [selectedPart, setSelectedPart] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const completedCount = profile.completedLessons.length;
  const totalCount = allGrammarLessons.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  // Filter lessons
  const filteredLessons = allGrammarLessons.filter(lesson => {
    const matchesPart = selectedPart === 'all' || lesson.part === selectedPart;
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.simpleExplanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPart && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Hero Banner in Dark Navy & Sky Blue */}
      <div className="bg-gradient-to-r from-navy-dark via-navy to-[#1B3B66] text-white p-6 sm:p-8 rounded-2xl shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-sky-light border border-sky-DEFAULT/20">
            <BookOpenCheck size={14} className="text-sky-DEFAULT" /> Daily Practical Grammar • Step-by-Step
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight">
            Daily Practical Grammar
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Learn practical grammar one topic at a time without overwhelming rules. Every lesson features simple explanations, Roman Hindi tips, formulas, 5–10 real-life examples, common mistakes, and short practice tests.
          </p>
        </div>

        {/* Progress Tracker Card */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-sky-DEFAULT/20 text-center flex-shrink-0 min-w-[200px]">
          <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold block mb-1">
            Grammar Progress
          </span>
          <div className="text-3xl font-display font-black text-white">
            {completedCount} <span className="text-sm font-medium text-sky-light">/ {totalCount}</span>
          </div>
          <div className="w-full bg-white/20 h-2 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-sky-DEFAULT h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[11px] text-sky-light mt-1.5 block font-medium">
            {progressPercent}% Completed
          </span>
        </div>
      </div>

      {/* 2. Search & Part Filters */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search practical topics (e.g. Present Simple, Past, Modals)..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-navy-dark focus:ring-2 focus:ring-sky-DEFAULT/40 outline-none"
          />
        </div>

        {/* Part Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setSelectedPart('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedPart === 'all'
                ? 'bg-navy-DEFAULT text-white shadow-soft'
                : 'bg-surface-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Lessons ({allGrammarLessons.length})
          </button>
          {[1, 2, 3, 4].map((partNum) => (
            <button
              key={partNum}
              onClick={() => setSelectedPart(partNum)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedPart === partNum
                  ? 'bg-navy-DEFAULT text-white shadow-soft'
                  : 'bg-surface-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Part {partNum}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredLessons.map((lesson) => {
          const isCompleted = profile.completedLessons.includes(lesson.id);

          return (
            <div
              key={lesson.id}
              onClick={() => onSelectLesson(lesson.slug)}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm hover:border-sky-DEFAULT hover:shadow-soft-lg cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-light text-navy-dark">
                    Part {lesson.part} • {lesson.level}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {lesson.durationMins}m
                    </span>
                    {isCompleted && (
                      <CheckCircle2 size={16} className="text-navy-DEFAULT fill-sky-light" />
                    )}
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-base text-navy-dark group-hover:text-navy-DEFAULT transition-colors">
                  {lesson.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {lesson.simpleExplanation}
                </p>

                {/* Roman Hindi snippet */}
                <div className="mt-3 p-2.5 rounded-xl bg-surface-100 border border-slate-100 text-[11px] text-navy-DEFAULT font-medium line-clamp-2">
                  🗣️ <strong>Roman Hindi:</strong> {lesson.romanHindiExplanation}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-navy-DEFAULT group-hover:text-navy-dark">
                <span>{isCompleted ? 'Review Lesson' : 'Start Lesson'}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
