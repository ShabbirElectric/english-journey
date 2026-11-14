import React from 'react';
import {
  Flame,
  Zap,
  BookOpen,
  CalendarCheck,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Award,
  Play,
  Clock,
  Mic,
  PenTool,
  HelpCircle,
  BookMarked,
  Layers,
  CheckCircle2,
  Lock
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useLearning } from '../context/LearningContext';
import { allGrammarLessons } from '../data/grammarAcademyData';
import { thirtyDayChallengeList } from '../data/challengeData';

interface DashboardProps {
  onNavigate: (tab: string, slugOrDay?: string | number) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { profile, unlockNextLevel } = useLearning();

  // Weekly activity chart data
  const weeklyData = [
    { day: 'Mon', xp: 50, minutes: 25 },
    { day: 'Tue', xp: 70, minutes: 30 },
    { day: 'Wed', xp: 95, minutes: 40 },
    { day: 'Thu', xp: 60, minutes: 25 },
    { day: 'Fri', xp: 110, minutes: 45 },
    { day: 'Sat', xp: 130, minutes: 50 },
    { day: 'Sun', xp: 85, minutes: 30 },
  ];

  // Calculate stats
  const totalLessonsCount = allGrammarLessons.length;
  const completedLessonsCount = profile.completedLessons.length;
  const grammarMasteryPercent = Math.round((completedLessonsCount / totalLessonsCount) * 100);

  // Next upcoming challenge day
  const nextChallengeDayNumber = (profile.completedChallengeDays.length > 0
    ? Math.max(...profile.completedChallengeDays) + 1
    : 1);
  const nextChallengeDay = thirtyDayChallengeList.find(d => d.day === nextChallengeDayNumber) || thirtyDayChallengeList[0];

  // Next upcoming grammar lesson
  const nextLesson = allGrammarLessons.find(l => !profile.completedLessons.includes(l.id)) || allGrammarLessons[0];

  // Daily learning progress calculation (target: 3 daily activities out of 4)
  const dailyActivitiesDone = 2; // Vocab + Grammar completed today
  const dailyGoalProgress = Math.round((dailyActivitiesDone / 3) * 100);

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Welcome & Greeting Banner in Navy & Sky Blue */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy-dark via-navy to-[#1B3B66] text-white p-6 sm:p-8 shadow-soft-lg">
        {/* Soft decorative background circles */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-sky-DEFAULT/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-56 h-56 bg-sky-light/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold tracking-wide text-sky-light border border-sky-DEFAULT/20">
              <Sparkles size={14} className="text-sky-DEFAULT" />
              <span>Current Level: <strong>{profile.currentLevel || 'Medium'}</strong> • Day {profile.currentDay || nextChallengeDayNumber} of 30</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight">
              Welcome back, {profile.displayName}! 👋
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              "Speak clearly, practice daily, and make English a natural habit." You are on a <strong>{profile.streakCount}-day active streak!</strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('challenge', nextChallengeDay.day)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-DEFAULT text-navy-dark font-extrabold text-xs sm:text-sm shadow-soft hover:bg-white hover:shadow-soft-lg transition-all"
            >
              <Play size={16} className="fill-navy-dark text-navy-dark" />
              <span>Continue Learning (Day {nextChallengeDay.day})</span>
            </button>
            <button
              onClick={() => onNavigate('ai-tutor')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-sky-DEFAULT/30 text-white font-semibold text-xs sm:text-sm hover:bg-white/20 transition-colors"
            >
              <Mic size={16} className="text-sky-DEFAULT" />
              <span>Talk to Coach Sarah</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Level Progression Strip (Medium -> Upper Medium -> Hard) */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <h3 className="font-display font-bold text-sm text-navy-dark flex items-center gap-2">
              <Award size={18} className="text-navy-DEFAULT" />
              Learning Difficulty Progression
            </h3>
            <p className="text-xs text-slate-500">
              You are currently learning at <strong>Medium Level</strong>. Complete daily milestones to unlock Upper Medium and Hard.
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-light text-navy-dark self-start sm:self-auto">
            Starting Level: Medium
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Level 1: Medium */}
          <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
            profile.currentLevel === 'Medium'
              ? 'bg-sky-light/40 border-sky-DEFAULT ring-2 ring-sky-DEFAULT/20'
              : 'bg-surface-100 border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-navy-dark text-sky-DEFAULT flex items-center justify-center font-bold text-xs">
                1
              </div>
              <div>
                <h5 className="font-display font-extrabold text-xs text-navy-dark">Medium Level</h5>
                <p className="text-[11px] text-slate-500">Everyday conversations & routines</p>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-navy-DEFAULT text-white font-bold">
              Current
            </span>
          </div>

          {/* Level 2: Upper Medium */}
          <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
            profile.currentLevel === 'Upper Medium'
              ? 'bg-sky-light/40 border-sky-DEFAULT ring-2 ring-sky-DEFAULT/20'
              : profile.unlockedLevels.includes('Upper Medium')
              ? 'bg-white border-slate-200'
              : 'bg-slate-50 border-slate-200 opacity-80'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                2
              </div>
              <div>
                <h5 className="font-display font-extrabold text-xs text-navy-dark">Upper Medium</h5>
                <p className="text-[11px] text-slate-500">Opinions, meetings & reasoning</p>
              </div>
            </div>
            {profile.unlockedLevels.includes('Upper Medium') ? (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-light text-navy-dark font-bold">
                Unlocked
              </span>
            ) : (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center gap-1">
                <Lock size={10} /> Locked
              </span>
            )}
          </div>

          {/* Level 3: Hard */}
          <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
            profile.currentLevel === 'Hard'
              ? 'bg-sky-light/40 border-sky-DEFAULT ring-2 ring-sky-DEFAULT/20'
              : profile.unlockedLevels.includes('Hard')
              ? 'bg-white border-slate-200'
              : 'bg-slate-50 border-slate-200 opacity-80'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                3
              </div>
              <div>
                <h5 className="font-display font-extrabold text-xs text-navy-dark">Hard Level</h5>
                <p className="text-[11px] text-slate-500">Advanced discussions & formal nuances</p>
              </div>
            </div>
            {profile.unlockedLevels.includes('Hard') ? (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-light text-navy-dark font-bold">
                Unlocked
              </span>
            ) : (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center gap-1">
                <Lock size={10} /> Locked
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 3. Top Metric Cards (Streak, Daily Progress, Vocab Learned, Grammar, Speaking, Reading) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Streak */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft-sm">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Current Streak</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center">
              <Flame size={17} className="fill-amber-500" />
            </div>
          </div>
          <div className="mt-2">
            <div className="text-xl sm:text-2xl font-display font-black text-navy-dark">
              {profile.streakCount} <span className="text-xs font-semibold text-slate-500">Days</span>
            </div>
            <p className="text-[10px] text-amber-600 font-bold mt-1 flex items-center gap-0.5">
              <TrendingUp size={11} /> Active today
            </p>
          </div>
        </div>

        {/* Daily Progress */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft-sm">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Daily Goal</span>
            <div className="w-8 h-8 rounded-lg bg-sky-light text-navy-DEFAULT flex items-center justify-center">
              <CheckCircle2 size={17} />
            </div>
          </div>
          <div className="mt-2">
            <div className="text-xl sm:text-2xl font-display font-black text-navy-dark">
              {dailyGoalProgress}% <span className="text-xs font-semibold text-slate-400">done</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-sky-DEFAULT h-full rounded-full"
                style={{ width: `${dailyGoalProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Vocabulary Learned */}
        <div
          onClick={() => onNavigate('vocabulary')}
          className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft-sm cursor-pointer hover:border-sky-DEFAULT transition-all"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Vocab Bank</span>
            <div className="w-8 h-8 rounded-lg bg-sky-light text-navy-DEFAULT flex items-center justify-center">
              <Zap size={17} className="fill-navy-DEFAULT" />
            </div>
          </div>
          <div className="mt-2">
            <div className="text-xl sm:text-2xl font-display font-black text-navy-dark">
              {profile.savedWordIds.length + profile.masteredWordIds.length} <span className="text-xs font-semibold text-slate-500">Words</span>
            </div>
            <p className="text-[10px] text-navy-DEFAULT font-bold mt-1">
              {profile.masteredWordIds.length} Mastered
            </p>
          </div>
        </div>

        {/* Grammar Progress */}
        <div
          onClick={() => onNavigate('grammar')}
          className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft-sm cursor-pointer hover:border-sky-DEFAULT transition-all"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Grammar</span>
            <div className="w-8 h-8 rounded-lg bg-sky-light text-navy-DEFAULT flex items-center justify-center">
              <BookOpen size={17} />
            </div>
          </div>
          <div className="mt-2">
            <div className="text-xl sm:text-2xl font-display font-black text-navy-dark">
              {completedLessonsCount} <span className="text-xs font-semibold text-slate-400">/ {totalLessonsCount}</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-navy-DEFAULT h-full rounded-full"
                style={{ width: `${grammarMasteryPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Speaking Practice */}
        <div
          onClick={() => onNavigate('speaking')}
          className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft-sm cursor-pointer hover:border-sky-DEFAULT transition-all"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Speaking</span>
            <div className="w-8 h-8 rounded-lg bg-sky-light text-navy-DEFAULT flex items-center justify-center">
              <Mic size={17} />
            </div>
          </div>
          <div className="mt-2">
            <div className="text-xl sm:text-2xl font-display font-black text-navy-dark">
              {profile.speakingPracticeCount || 4} <span className="text-xs font-semibold text-slate-500">Sessions</span>
            </div>
            <p className="text-[10px] text-navy-DEFAULT font-bold mt-1">
              12–15 turn dialogues
            </p>
          </div>
        </div>

        {/* Reading Progress */}
        <div
          onClick={() => onNavigate('reading')}
          className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft-sm cursor-pointer hover:border-sky-DEFAULT transition-all"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Reading</span>
            <div className="w-8 h-8 rounded-lg bg-sky-light text-navy-DEFAULT flex items-center justify-center">
              <BookMarked size={17} />
            </div>
          </div>
          <div className="mt-2">
            <div className="text-xl sm:text-2xl font-display font-black text-navy-dark">
              {profile.readingPassagesCount || 3} <span className="text-xs font-semibold text-slate-500">Passages</span>
            </div>
            <p className="text-[10px] text-navy-DEFAULT font-bold mt-1">
              Medium difficulty
            </p>
          </div>
        </div>
      </div>

      {/* 4. Middle Section: Today's Learning Schedule & Weekly Activity Performance Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Learning Schedule */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-navy-DEFAULT" />
                <h3 className="font-display font-bold text-base text-navy-dark">Today's Daily Plan</h3>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-sky-light text-navy-dark">
                Day {nextChallengeDay.day}
              </span>
            </div>

            <div className="space-y-3">
              {/* Task 1: 10 Daily Words */}
              <div
                onClick={() => onNavigate('vocabulary')}
                className="p-3 rounded-xl bg-surface-100 hover:bg-sky-light/30 border border-slate-200 cursor-pointer transition-colors flex items-start gap-3"
              >
                <CheckCircle size={18} className="text-navy-DEFAULT mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-navy-dark">Learn 10 Useful Daily Words</span>
                    <span className="text-[10px] text-slate-500 font-medium">5m</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Actually, Probably, Definitely, Honestly...</p>
                </div>
              </div>

              {/* Task 2: Speaking Dialogue */}
              <div
                onClick={() => onNavigate('speaking')}
                className="p-3 rounded-xl bg-surface-100 hover:bg-sky-light/30 border border-slate-200 cursor-pointer transition-colors flex items-start gap-3"
              >
                <div className="w-4 h-4 rounded-full border-2 border-slate-300 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-navy-dark">12–15 Exchange Conversation</span>
                    <span className="text-[10px] text-slate-500 font-medium">10m</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Catching up with a friend & daily routines</p>
                </div>
              </div>

              {/* Task 3: Practical Grammar */}
              <div
                onClick={() => onNavigate('grammar')}
                className="p-3 rounded-xl bg-surface-100 hover:bg-sky-light/30 border border-slate-200 cursor-pointer transition-colors flex items-start gap-3"
              >
                <div className="w-4 h-4 rounded-full border-2 border-slate-300 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-navy-dark">{nextLesson.title}</span>
                    <span className="text-[10px] text-slate-500 font-medium">10m</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Roman Hindi explanation + 5 practical examples</p>
                </div>
              </div>

              {/* Task 4: 5 Sentences Writing */}
              <div
                onClick={() => onNavigate('writing')}
                className="p-3 rounded-xl bg-surface-100 hover:bg-sky-light/30 border border-slate-200 cursor-pointer transition-colors flex items-start gap-3"
              >
                <div className="w-4 h-4 rounded-full border-2 border-slate-300 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-navy-dark">Write 5 Sentences About My Day</span>
                    <span className="text-[10px] text-slate-500 font-medium">5m</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Get AI Teacher corrections in Roman Hindi</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('challenge', nextChallengeDay.day)}
            className="w-full mt-5 py-2.5 rounded-xl bg-navy-DEFAULT text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-navy-dark transition-colors shadow-soft"
          >
            <span>Start Today's Routine</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Weekly Activity Performance Chart (Recharts in Navy & Sky Blue) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="font-display font-bold text-base text-navy-dark">Weekly Progress Chart</h3>
              <p className="text-xs text-slate-500">Track your daily XP gains and study consistency over the last 7 days.</p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-navy-dark font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-navy-DEFAULT" /> Daily XP
              </span>
              <span className="flex items-center gap-1 text-slate-500 font-medium">
                Total: 600 XP this week
              </span>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="navySkyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#69B7F7" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#142D4E" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0B1F3A',
                    borderRadius: '12px',
                    border: '1px solid #142D4E',
                    color: '#fff',
                    fontSize: '12px',
                    boxShadow: '0 8px 24px -4px rgba(0,0,0,0.25)'
                  }}
                  formatter={(value: any) => [`${value} XP`, 'Gained']}
                />
                <Area
                  type="monotone"
                  dataKey="xp"
                  stroke="#142D4E"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#navySkyGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 5. Upcoming Practical Lesson & Learning Modules Quick Access */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Next Recommended Grammar Lesson Card */}
        <div className="lg:col-span-1 bg-gradient-to-br from-white via-surface-100 to-sky-light/30 p-6 rounded-2xl border border-slate-200 shadow-soft-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-sky-light text-navy-dark">
                Part {nextLesson.part} • {nextLesson.level} Level
              </span>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <Clock size={13} /> {nextLesson.durationMins} mins
              </span>
            </div>

            <h4 className="font-display font-bold text-lg text-navy-dark mt-2">
              {nextLesson.title}
            </h4>
            <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
              {nextLesson.simpleExplanation}
            </p>

            <div className="mt-4 p-3 rounded-xl bg-white border border-slate-200 text-xs font-mono text-navy-dark shadow-sm">
              <span className="font-bold font-sans block text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">Formula:</span>
              {nextLesson.formulaOrStructure.split('\n')[0]}
            </div>
          </div>

          <button
            onClick={() => onNavigate('grammar-lesson', nextLesson.slug)}
            className="w-full mt-5 py-2.5 rounded-xl bg-navy-DEFAULT text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-navy-dark transition-colors shadow-soft"
          >
            <span>Start Practical Lesson</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Quick Access to All Everyday Learning Modules Grid */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-base text-navy-dark">Daily-Use English Modules</h3>
            <span className="text-xs text-slate-500 font-medium">Starting from Medium Level</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {/* Speaking Studio */}
            <div
              onClick={() => onNavigate('speaking')}
              className="p-3.5 rounded-xl bg-surface-100 hover:bg-sky-light/40 border border-slate-200 hover:border-sky-DEFAULT cursor-pointer transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-navy-dark text-sky-DEFAULT flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Mic size={16} />
              </div>
              <h5 className="font-display font-bold text-xs text-navy-dark group-hover:text-navy-DEFAULT">Speaking Studio</h5>
              <p className="text-[11px] text-slate-500 mt-0.5">12–15 turn real dialogues</p>
            </div>

            {/* Vocab Builder */}
            <div
              onClick={() => onNavigate('vocabulary')}
              className="p-3.5 rounded-xl bg-surface-100 hover:bg-sky-light/40 border border-slate-200 hover:border-sky-DEFAULT cursor-pointer transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-navy-dark text-sky-DEFAULT flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Zap size={16} />
              </div>
              <h5 className="font-display font-bold text-xs text-navy-dark group-hover:text-navy-DEFAULT">Daily Vocabulary</h5>
              <p className="text-[11px] text-slate-500 mt-0.5">10 words with Roman Hindi</p>
            </div>

            {/* Daily Grammar */}
            <div
              onClick={() => onNavigate('grammar')}
              className="p-3.5 rounded-xl bg-surface-100 hover:bg-sky-light/40 border border-slate-200 hover:border-sky-DEFAULT cursor-pointer transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-navy-dark text-sky-DEFAULT flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <BookOpen size={16} />
              </div>
              <h5 className="font-display font-bold text-xs text-navy-dark group-hover:text-navy-DEFAULT">Daily Grammar</h5>
              <p className="text-[11px] text-slate-500 mt-0.5">One practical topic at a time</p>
            </div>

            {/* Reading Practice */}
            <div
              onClick={() => onNavigate('reading')}
              className="p-3.5 rounded-xl bg-surface-100 hover:bg-sky-light/40 border border-slate-200 hover:border-sky-DEFAULT cursor-pointer transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-navy-dark text-sky-DEFAULT flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <BookMarked size={16} />
              </div>
              <h5 className="font-display font-bold text-xs text-navy-dark group-hover:text-navy-DEFAULT">Reading Practice</h5>
              <p className="text-[11px] text-slate-500 mt-0.5">200–300 words + 5 MCQs</p>
            </div>

            {/* Writing Practice */}
            <div
              onClick={() => onNavigate('writing')}
              className="p-3.5 rounded-xl bg-surface-100 hover:bg-sky-light/40 border border-slate-200 hover:border-sky-DEFAULT cursor-pointer transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-navy-dark text-sky-DEFAULT flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <PenTool size={16} />
              </div>
              <h5 className="font-display font-bold text-xs text-navy-dark group-hover:text-navy-DEFAULT">Writing Practice</h5>
              <p className="text-[11px] text-slate-500 mt-0.5">5 sentences with AI feedback</p>
            </div>

            {/* AI Teacher */}
            <div
              onClick={() => onNavigate('ai-tutor')}
              className="p-3.5 rounded-xl bg-surface-100 hover:bg-sky-light/40 border border-slate-200 hover:border-sky-DEFAULT cursor-pointer transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-navy-dark text-sky-DEFAULT flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Sparkles size={16} />
              </div>
              <h5 className="font-display font-bold text-xs text-navy-dark group-hover:text-navy-DEFAULT">AI English Teacher</h5>
              <p className="text-[11px] text-slate-500 mt-0.5">Friendly conversational coach</p>
            </div>
          </div>

          {/* Quick Motivational Tip */}
          <div className="mt-4 p-3.5 rounded-xl bg-sky-light/30 border border-sky-DEFAULT/20 flex items-center gap-3">
            <Award size={18} className="text-navy-DEFAULT flex-shrink-0" />
            <p className="text-xs text-navy-dark">
              <span className="font-bold">Coach Sarah's Tip:</span> Don't worry about making mistakes! In real conversations, clarity is what matters most. Try practicing 1 speaking scenario out loud every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
