import { Achievement } from '../types';

export const initialAchievementsList: Achievement[] = [
  {
    code: 'first_step',
    title: 'First Step',
    description: 'Completed your very first English grammar lesson.',
    iconName: 'Compass',
    xpReward: 30,
    unlocked: true,
    unlockedAt: '2026-11-14'
  },
  {
    code: 'streak_3',
    title: 'Streak Pioneer',
    description: 'Maintained a 3-day consecutive learning streak.',
    iconName: 'Flame',
    xpReward: 50,
    unlocked: false
  },
  {
    code: 'grammar_guru_5',
    title: 'Grammar Virtuoso',
    description: 'Completed 5 comprehensive grammar academy lessons with quiz mastery.',
    iconName: 'BookOpen',
    xpReward: 75,
    unlocked: false
  },
  {
    code: 'vocab_master',
    title: 'Lexicon Builder',
    description: 'Saved at least 10 vocabulary words to your personal favorites bank.',
    iconName: 'Sparkles',
    xpReward: 60,
    unlocked: false
  },
  {
    code: 'speaking_champ',
    title: 'Confident Orator',
    description: 'Practiced voice recording and playback in Speaking Studio.',
    iconName: 'Mic',
    xpReward: 70,
    unlocked: false
  },
  {
    code: 'reading_scholar',
    title: 'Deep Reader',
    description: 'Read 3 reading passages and scored 100% on comprehension.',
    iconName: 'Glasses',
    xpReward: 80,
    unlocked: false
  },
  {
    code: 'writing_craftsman',
    title: 'Articulate Writer',
    description: 'Submitted an essay or email to the AI Writing Studio for evaluation.',
    iconName: 'PenTool',
    xpReward: 90,
    unlocked: false
  },
  {
    code: 'flawless_quiz',
    title: 'Flawless Score',
    description: 'Scored 100% on any lesson quiz or unit assessment.',
    iconName: 'Award',
    xpReward: 100,
    unlocked: false
  },
  {
    code: 'graduate_day30',
    title: 'English Journey Graduate',
    description: 'Conquered the Day 30 Final Comprehensive Examination.',
    iconName: 'GraduationCap',
    xpReward: 200,
    unlocked: false
  }
];

