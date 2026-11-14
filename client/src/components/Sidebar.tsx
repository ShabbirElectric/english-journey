import React from 'react';
import {
  LayoutDashboard,
  CalendarCheck,
  BookOpenCheck,
  Languages,
  Mic,
  BookMarked,
  PenTool,
  Bot,
  ClipboardCheck,
  UserCheck,
  CheckCircle2,
  HelpCircle,
  Award
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const { profile } = useLearning();

  const navItems = [
    { id: 'dashboard', label: 'Main Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'speaking', label: 'Speaking Studio', icon: Mic, badge: 'Daily Audio' },
    { id: 'vocabulary', label: 'Vocabulary Builder', icon: Languages, badge: '10 Words/Day' },
    { id: 'grammar', label: 'Daily Grammar', icon: BookOpenCheck, badge: 'Practical' },
    { id: 'reading', label: 'Reading Practice', icon: BookMarked, badge: 'Passages' },
    { id: 'writing', label: 'Writing Practice', icon: PenTool, badge: 'AI Feedback' },
    { id: 'ai-tutor', label: 'AI English Teacher', icon: Bot, badge: 'Coach Sarah' },
    { id: 'challenge', label: '30-Day Challenge', icon: CalendarCheck, badge: `Day ${Math.max(...profile.completedChallengeDays, 0) + 1}` },
    { id: 'placement', label: 'Placement Test', icon: HelpCircle, badge: 'Levels' },
    { id: 'assessments', label: 'Tests & Quizzes', icon: ClipboardCheck, badge: 'Practice' },
    { id: 'profile', label: 'My Profile', icon: UserCheck, badge: null },
  ];

  const handleSelect = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar container in Dark Navy (#0B1F3A) */}
      <aside
        className={`fixed lg:sticky top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 bg-navy-dark text-white flex flex-col justify-between p-4 transition-transform duration-300 lg:translate-x-0 border-r border-navy ${
          mobileMenuOpen ? 'translate-x-0 shadow-soft-lg' : '-translate-x-full'
        }`}
      >
        <div className="overflow-y-auto space-y-1.5 pr-1 scrollbar-thin">
          {/* Level Indicator Pill */}
          <div className="mb-3 p-3 rounded-xl bg-navy/80 border border-navy-light/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-sky-DEFAULT/20 text-sky-DEFAULT flex items-center justify-center font-bold text-xs">
                <Award size={16} />
              </div>
              <div>
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider block">Current Level</span>
                <span className="text-xs font-extrabold text-sky-DEFAULT">{profile.currentLevel || 'Medium'}</span>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-light/20 text-sky-light font-bold">
              Active
            </span>
          </div>

          <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Everyday Modules
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                  isActive
                    ? 'bg-navy text-white shadow-soft font-bold border border-sky-DEFAULT/40'
                    : 'text-slate-300 hover:bg-navy/50 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={17}
                    className={isActive ? 'text-sky-DEFAULT' : 'text-slate-400 group-hover:text-slate-200'}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-sky-DEFAULT text-navy-dark'
                        : 'bg-navy-light/40 text-slate-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Quick Goal Progress Card in Navy */}
        <div className="pt-3 border-t border-navy">
          <div className="bg-navy/70 rounded-xl p-3 border border-navy-light/30">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-200 mb-1.5">
              <span>Today's Study Goal</span>
              <span className="flex items-center gap-1 text-sky-DEFAULT font-bold">
                <CheckCircle2 size={13} /> {profile.dailyGoalMins} mins
              </span>
            </div>
            <div className="w-full bg-navy-dark h-2 rounded-full overflow-hidden border border-navy-light/20">
              <div
                className="bg-sky-DEFAULT h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (profile.completedChallengeDays.length / 30) * 100)}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-300 mt-2 font-medium">
              30-Day Program: {profile.completedChallengeDays.length}/30 Days Done
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
