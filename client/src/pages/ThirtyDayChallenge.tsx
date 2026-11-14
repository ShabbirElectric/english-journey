import React, { useState } from 'react';
import {
  CalendarCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  Flame,
  Award,
  Zap,
  Play
} from 'lucide-react';
import { thirtyDayChallengeList } from '../data/challengeData';
import { useLearning } from '../context/LearningContext';

interface ThirtyDayChallengeProps {
  onSelectDay: (dayNumber: number) => void;
}

export const ThirtyDayChallenge: React.FC<ThirtyDayChallengeProps> = ({ onSelectDay }) => {
  const { profile } = useLearning();
  const [selectedPhase, setSelectedPhase] = useState<number | 'all'>('all');

  const completedCount = profile.completedChallengeDays.length;
  const progressPercent = Math.round((completedCount / 30) * 100);

  // Phases
  const phases = [
    { num: 1, title: 'Phase 1: Foundations', days: 'Days 1–7', focus: 'Sentence Structure & Daily Routines' },
    { num: 2, title: 'Phase 2: Tenses Mastery', days: 'Days 8–14', focus: 'Past, Present & Future in Conversation' },
    { num: 3, title: 'Phase 3: Intermediate', days: 'Days 15–21', focus: 'Modals, Asking Questions & Opinions' },
    { num: 4, title: 'Phase 4: Vocab & Reading', days: 'Days 22–25', focus: 'High-yield Idioms & Practical Passages' },
    { num: 5, title: 'Phase 5: Writing & Speaking', days: 'Days 26–30', focus: 'Daily Writing, Roleplays & Final Exam' },
  ];

  const filteredDays = thirtyDayChallengeList.filter(d => {
    if (selectedPhase === 'all') return true;
    if (selectedPhase === 1) return d.day >= 1 && d.day <= 7;
    if (selectedPhase === 2) return d.day >= 8 && d.day <= 14;
    if (selectedPhase === 3) return d.day >= 15 && d.day <= 21;
    if (selectedPhase === 4) return d.day >= 22 && d.day <= 25;
    if (selectedPhase === 5) return d.day >= 26 && d.day <= 30;
    return true;
  });

  // Next day to tackle
  const nextDayNum = (profile.completedChallengeDays.length > 0
    ? Math.max(...profile.completedChallengeDays) + 1
    : 1);

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Challenge Hero Banner in Dark Navy & Sky Blue */}
      <div className="bg-gradient-to-r from-navy-dark via-navy to-[#1B3B66] text-white p-6 sm:p-8 rounded-2xl shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-sky-light border border-sky-DEFAULT/20">
            <Flame size={14} className="text-amber-300 fill-amber-300" />
            <span>30-Day Structured Habit Loop • Medium Level</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight">
            The 30-Day English Challenge
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Build lasting fluency one day at a time. Each day features daily objectives, practical grammar rules, 10 daily words with Roman Hindi, reading/writing tasks, speaking exercises, and daily reward milestones.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-sky-DEFAULT/20 text-center flex-shrink-0 min-w-[220px]">
          <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold block mb-1">
            Program Progress
          </span>
          <div className="text-3xl font-display font-black text-white">
            {completedCount} <span className="text-sm font-medium text-sky-light">/ 30 Days</span>
          </div>
          <div className="w-full bg-white/20 h-2.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-sky-DEFAULT h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[11px] text-sky-light mt-2 block font-medium">
            {progressPercent}% Complete • {30 - completedCount} days remaining
          </span>
        </div>
      </div>

      {/* 2. Resume / Current Day Action */}
      {nextDayNum <= 30 && (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-navy-DEFAULT text-white flex items-center justify-center font-display font-black text-lg shadow-soft">
              {nextDayNum}
            </div>
            <div>
              <span className="text-[11px] font-bold text-navy-DEFAULT uppercase tracking-wider block">
                Up Next Today
              </span>
              <h4 className="font-display font-bold text-base text-navy-dark">
                Day {nextDayNum}: {thirtyDayChallengeList[nextDayNum - 1]?.title}
              </h4>
              <p className="text-xs text-slate-500">
                {thirtyDayChallengeList[nextDayNum - 1]?.grammarSummary.topic}
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectDay(nextDayNum)}
            className="px-5 py-2.5 rounded-xl bg-navy-DEFAULT text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-navy-dark transition-colors shadow-soft"
          >
            <Play size={14} className="fill-white" />
            <span>Start Day {nextDayNum}</span>
          </button>
        </div>
      )}

      {/* 3. Phase Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setSelectedPhase('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
            selectedPhase === 'all'
              ? 'bg-navy-DEFAULT text-white shadow-soft'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          All 30 Days
        </button>
        {phases.map((ph) => (
          <button
            key={ph.num}
            onClick={() => setSelectedPhase(ph.num)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedPhase === ph.num
                ? 'bg-navy-DEFAULT text-white shadow-soft'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {ph.title} ({ph.days})
          </button>
        ))}
      </div>

      {/* 4. Days Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredDays.map((dayItem) => {
          const isDone = profile.completedChallengeDays.includes(dayItem.day);
          const isCurrent = dayItem.day === nextDayNum;

          return (
            <div
              key={dayItem.day}
              onClick={() => onSelectDay(dayItem.day)}
              className={`bg-white p-5 rounded-2xl border shadow-soft-sm hover:shadow-soft-lg cursor-pointer transition-all flex flex-col justify-between group ${
                isDone
                  ? 'border-slate-200 hover:border-sky-DEFAULT'
                  : isCurrent
                  ? 'border-sky-DEFAULT ring-2 ring-sky-DEFAULT/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-display font-black text-xs ${
                      isDone
                        ? 'bg-sky-light text-navy-dark'
                        : isCurrent
                        ? 'bg-navy-DEFAULT text-white'
                        : 'bg-surface-100 text-slate-700'
                    }`}>
                      {dayItem.day}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-surface-100 text-slate-600">
                      Week {dayItem.week}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {isDone ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-navy-DEFAULT">
                        <CheckCircle2 size={16} /> Done
                      </span>
                    ) : isCurrent ? (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-light text-navy-dark">
                        Today
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-slate-400">
                        {dayItem.rewardXP} XP
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-sm text-navy-dark group-hover:text-navy-DEFAULT transition-colors">
                  {dayItem.title}
                </h3>

                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {dayItem.grammarSummary.topic}
                </p>

                <div className="mt-3 space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Daily Objectives:
                  </span>
                  <ul className="text-[11px] text-slate-600 space-y-0.5">
                    {dayItem.objectives.slice(0, 2).map((obj, i) => (
                      <li key={i} className="line-clamp-1">• {obj}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-navy-DEFAULT group-hover:text-navy-dark">
                <span>{isDone ? 'Review Day' : 'Start Day'}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
