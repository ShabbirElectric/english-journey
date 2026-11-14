import React from 'react';
import { Flame, Zap, Award, Sparkles, Menu, X, Compass } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const { profile } = useLearning();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-soft-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Tagline */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-navy-dark to-navy flex items-center justify-center text-sky-DEFAULT shadow-soft">
            <Compass size={22} className="stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xl tracking-tight text-navy-dark">
                English <span className="text-sky-DEFAULT">Journey</span>
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-sky-light text-navy-dark rounded-full">
                Medium Level
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden md:block">
              Learn English. Practice Daily. Speak Confidently.
            </p>
          </div>
        </div>

        {/* User Stats & Quick Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Streak pill */}
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold"
            title="Current Learning Streak"
          >
            <Flame size={16} className="text-amber-500 fill-amber-500 animate-pulse" />
            <span>{profile.streakCount} Day Streak</span>
          </div>

          {/* XP pill */}
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-light/70 border border-sky-DEFAULT/40 text-navy-dark text-xs font-bold"
            title="Total Experience Points"
          >
            <Zap size={15} className="text-navy-DEFAULT fill-navy-DEFAULT" />
            <span>{profile.totalXP} XP</span>
          </div>

          {/* Level Badge */}
          <button
            onClick={() => setActiveTab('placement')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-dark text-white text-xs font-semibold hover:bg-navy transition-colors shadow-soft-sm"
            title="Click to view Level & Placement Assessment"
          >
            <Award size={14} className="text-sky-DEFAULT" />
            <span>Level: {profile.currentLevel || 'Medium'}</span>
          </button>

          {/* AI Tutor Quick Access Button */}
          <button
            onClick={() => setActiveTab('ai-tutor')}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-navy-dark to-navy text-white text-xs font-semibold shadow-soft hover:brightness-110 transition-all border border-sky-DEFAULT/20"
          >
            <Sparkles size={14} className="text-sky-DEFAULT" />
            <span>Ask Coach Sarah</span>
          </button>

          {/* User Avatar */}
          <div
            onClick={() => setActiveTab('profile')}
            className="w-9 h-9 rounded-full ring-2 ring-sky-DEFAULT/40 overflow-hidden cursor-pointer hover:ring-navy-DEFAULT transition-all ml-1"
            title="My Profile"
          >
            <img
              src={profile.avatarUrl}
              alt={profile.displayName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 lg:hidden"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};
