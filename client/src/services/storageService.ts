import { UserProfile } from '../types';

const STORAGE_KEY = 'english_journey_user_profile_v2';

export const defaultProfile: UserProfile = {
  displayName: 'Shabbir',
  email: 'shabbir@example.com',
  avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
  bio: 'Starting my English journey from Medium level. Focused on daily conversations, speaking confidently with friends and at work.',
  currentLevel: 'Medium',
  unlockedLevels: ['Medium'],
  currentDay: 1,
  dailyGoalMins: 20,
  streakCount: 5,
  totalXP: 450,
  speakingPracticeCount: 4,
  readingPassagesCount: 3,
  completedLessons: ['g-daily-1', 'g-daily-2'],
  completedChallengeDays: [1, 2],
  savedWordIds: ['v-1', 'v-3', 'v-6', 'v-10'],
  masteredWordIds: ['v-1', 'v-2'],
  unlockedBadges: ['first_step', 'streak_3'],
  personalNotes: [
    {
      id: 'note-1',
      title: 'Daily Rule: Actually vs Probably',
      content: '"Actually" is used when stating the real truth or correcting someone politely (Sach mein). "Probably" is used for likely possibilities (Shayad).',
      date: '2026-11-13'
    },
    {
      id: 'note-2',
      title: 'Past Simple Golden Rule',
      content: 'Never say "I have seen him yesterday". Since "yesterday" is a finished time, always say "I saw him yesterday".',
      date: '2026-11-14'
    }
  ],
  recentAttempts: [
    {
      id: 'att-1',
      title: 'Present Simple vs Continuous Quiz',
      score: 5,
      total: 5,
      date: '2026-11-13',
      percentage: 100,
      type: 'Grammar Test'
    },
    {
      id: 'att-2',
      title: 'Day 2 Daily Challenge Quiz',
      score: 1,
      total: 1,
      date: '2026-11-14',
      percentage: 100,
      type: 'Challenge Day'
    }
  ],
  writingSubmissions: [
    {
      id: 'ws-1',
      promptTitle: 'Write 5 Sentences About My Day',
      genre: 'Daily 5 Sentences',
      text: 'Today I woke up at 7 AM. I had a cup of hot tea and went for a brisk walk. Later, I finished my work tasks on time. In the evening, I cooked dinner with my family and practiced English.',
      score: 8.8,
      date: '2026-11-14',
      feedback: 'Clear, natural daily sentences with correct past tense usage and good flow.',
      corrections: [
        {
          original: 'I had a cup of hot tea and went for a brisk walk.',
          corrected: 'I had a cup of hot tea and went for a brisk walk.',
          whatWasWrong: 'Grammatically flawless and very natural.',
          romanHindiExplanation: 'Yeh sentence bilkul natural hai aur daily routine ke liye perfect hai.',
          naturalAlternative: 'I grabbed a hot cup of tea and headed out for a brisk morning walk.'
        }
      ]
    }
  ],
  repeatedMistakes: [
    {
      id: 'm-1',
      original: 'I have seen him yesterday',
      corrected: 'I saw him yesterday',
      whatWasWrong: 'Used Present Perfect with finished past time indicator (yesterday)',
      romanHindi: 'Yesterday ke sath Past Simple (V2) lagta hai, have + V3 nahi.',
      count: 2,
      lastOccurred: '2026-11-14'
    },
    {
      id: 'm-2',
      original: 'I am agree with you',
      corrected: 'I agree with you',
      whatWasWrong: 'Used "am" before the verb "agree"',
      romanHindi: '"Agree" khud verb hai, isme "am" nahi lagate.',
      count: 1,
      lastOccurred: '2026-11-13'
    }
  ]
};

export const storageService = {
  loadProfile(): UserProfile {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.displayName === 'Priya Sharma' || !parsed.displayName) {
          parsed.displayName = 'Shabbir';
          parsed.email = 'shabbir@example.com';
          parsed.avatarUrl = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200';
        }
        // Ensure new Medium level fields are present
        if (!parsed.currentLevel || parsed.currentLevel === 'B1' || parsed.currentLevel === 'A1') {
          parsed.currentLevel = 'Medium';
        }
        if (!parsed.unlockedLevels || !Array.isArray(parsed.unlockedLevels)) {
          parsed.unlockedLevels = ['Medium'];
        }
        if (typeof parsed.speakingPracticeCount !== 'number') {
          parsed.speakingPracticeCount = 4;
        }
        if (typeof parsed.readingPassagesCount !== 'number') {
          parsed.readingPassagesCount = 3;
        }
        if (!parsed.repeatedMistakes || !Array.isArray(parsed.repeatedMistakes)) {
          parsed.repeatedMistakes = defaultProfile.repeatedMistakes || [];
        }
        return parsed;
      }
    } catch (e) {
      console.warn('Could not read from localStorage, using default profile');
    }
    this.saveProfile(defaultProfile);
    return defaultProfile;
  },

  saveProfile(profile: UserProfile): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  },

  resetToDefault(): UserProfile {
    this.saveProfile(defaultProfile);
    return defaultProfile;
  }
};
