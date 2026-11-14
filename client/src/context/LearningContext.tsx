import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { UserProfile, LearningLevel, WritingCorrectionItem } from '../types';
import { storageService } from '../services/storageService';

interface LearningContextType {
  profile: UserProfile;
  updateProfile: (fields: Partial<UserProfile>) => void;
  setCurrentLevel: (level: LearningLevel) => void;
  unlockNextLevel: () => void;
  incrementSpeakingCount: () => void;
  incrementReadingCount: () => void;
  addXP: (amount: number, reason?: string) => void;
  markLessonCompleted: (lessonId: string, earnedXP?: number) => void;
  markChallengeDayCompleted: (day: number, earnedXP?: number) => void;
  toggleSaveWord: (wordId: string) => void;
  toggleMasterWord: (wordId: string) => void;
  recordQuizAttempt: (attempt: { title: string; score: number; total: number; percentage: number; type: string }) => void;
  saveWritingSubmission: (submission: {
    promptTitle: string;
    genre: string;
    text: string;
    score: number;
    feedback: string;
    corrections?: WritingCorrectionItem[];
  }) => void;
  addPersonalNote: (title: string, content: string) => void;
  deletePersonalNote: (id: string) => void;
  unlockBadge: (badgeCode: string) => void;
  setCefrLevel: (level: any) => void;
  triggerConfetti: () => void;
  recentNotification: string | null;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>(() => storageService.loadProfile());
  const [recentNotification, setRecentNotification] = useState<string | null>(null);

  useEffect(() => {
    storageService.saveProfile(profile);
  }, [profile]);

  const notify = (msg: string) => {
    setRecentNotification(msg);
    setTimeout(() => {
      setRecentNotification(null);
    }, 4000);
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0B1F3A', '#142D4E', '#69B7F7', '#DCEEFF', '#2A7FCE', '#F59E0B']
      });
    } catch (e) {
      // Ignore if unavailable
    }
  };

  const addXP = (amount: number, reason?: string) => {
    setProfile(prev => ({
      ...prev,
      totalXP: prev.totalXP + amount
    }));
    triggerConfetti();
    notify(`+${amount} XP Gained! ${reason ? `(${reason})` : ''}`);
  };

  const setCurrentLevel = (level: LearningLevel) => {
    setProfile(prev => {
      const unlocked = prev.unlockedLevels.includes(level)
        ? prev.unlockedLevels
        : [...prev.unlockedLevels, level];
      return {
        ...prev,
        currentLevel: level,
        unlockedLevels: unlocked
      };
    });
    notify(`Learning level set to ${level}! 🚀`);
  };

  const unlockNextLevel = () => {
    setProfile(prev => {
      let nextLvl: LearningLevel = 'Upper Medium';
      if (prev.currentLevel === 'Medium') nextLvl = 'Upper Medium';
      else if (prev.currentLevel === 'Upper Medium') nextLvl = 'Hard';

      if (!prev.unlockedLevels.includes(nextLvl)) {
        triggerConfetti();
        notify(`🎉 Congratulations! You unlocked ${nextLvl} Level!`);
        return {
          ...prev,
          currentLevel: nextLvl,
          unlockedLevels: [...prev.unlockedLevels, nextLvl],
          totalXP: prev.totalXP + 100
        };
      }
      return prev;
    });
  };

  const incrementSpeakingCount = () => {
    setProfile(prev => ({
      ...prev,
      speakingPracticeCount: (prev.speakingPracticeCount || 0) + 1
    }));
  };

  const incrementReadingCount = () => {
    setProfile(prev => ({
      ...prev,
      readingPassagesCount: (prev.readingPassagesCount || 0) + 1
    }));
  };

  const markLessonCompleted = (lessonId: string, earnedXP: number = 25) => {
    setProfile(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        totalXP: prev.totalXP + earnedXP
      };
    });
    triggerConfetti();
    notify(`Grammar Lesson Completed! +${earnedXP} XP`);
  };

  const markChallengeDayCompleted = (day: number, earnedXP: number = 50) => {
    setProfile(prev => {
      if (prev.completedChallengeDays.includes(day)) return prev;
      return {
        ...prev,
        completedChallengeDays: [...prev.completedChallengeDays, day],
        currentDay: Math.min(30, day + 1),
        totalXP: prev.totalXP + earnedXP,
        streakCount: prev.streakCount + 1
      };
    });
    triggerConfetti();
    notify(`Day ${day} Completed! +${earnedXP} XP & Streak Updated! 🔥`);
  };

  const toggleSaveWord = (wordId: string) => {
    setProfile(prev => {
      const isSaved = prev.savedWordIds.includes(wordId);
      const newSaved = isSaved
        ? prev.savedWordIds.filter(id => id !== wordId)
        : [...prev.savedWordIds, wordId];

      notify(isSaved ? 'Word removed from saved list' : 'Word saved to your daily vocabulary bank! ⭐');
      return { ...prev, savedWordIds: newSaved };
    });
  };

  const toggleMasterWord = (wordId: string) => {
    setProfile(prev => {
      const isMastered = prev.masteredWordIds.includes(wordId);
      const newMastered = isMastered
        ? prev.masteredWordIds.filter(id => id !== wordId)
        : [...prev.masteredWordIds, wordId];

      if (!isMastered) {
        addXP(10, 'Mastered Vocabulary Word');
      }
      return { ...prev, masteredWordIds: newMastered };
    });
  };

  const recordQuizAttempt = (attempt: { title: string; score: number; total: number; percentage: number; type: string }) => {
    const newAttempt = {
      ...attempt,
      id: `att-${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };
    setProfile(prev => ({
      ...prev,
      recentAttempts: [newAttempt, ...prev.recentAttempts].slice(0, 20)
    }));
  };

  const saveWritingSubmission = (submission: {
    promptTitle: string;
    genre: string;
    text: string;
    score: number;
    feedback: string;
    corrections?: WritingCorrectionItem[];
  }) => {
    const newSubmission = {
      ...submission,
      id: `ws-${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };
    setProfile(prev => ({
      ...prev,
      writingSubmissions: [newSubmission, ...prev.writingSubmissions].slice(0, 20)
    }));
    addXP(40, 'Daily Writing Submitted');
  };

  const addPersonalNote = (title: string, content: string) => {
    const newNote = {
      id: `note-${Date.now()}`,
      title,
      content,
      date: new Date().toISOString().split('T')[0]
    };
    setProfile(prev => ({
      ...prev,
      personalNotes: [newNote, ...prev.personalNotes]
    }));
    notify('Study note saved successfully');
  };

  const deletePersonalNote = (id: string) => {
    setProfile(prev => ({
      ...prev,
      personalNotes: prev.personalNotes.filter(n => n.id !== id)
    }));
    notify('Note deleted');
  };

  const unlockBadge = (badgeCode: string) => {
    setProfile(prev => {
      if (prev.unlockedBadges.includes(badgeCode)) return prev;
      triggerConfetti();
      notify(`Achievement Unlocked! 🏆`);
      return {
        ...prev,
        unlockedBadges: [...prev.unlockedBadges, badgeCode],
        totalXP: prev.totalXP + 50
      };
    });
  };

  const setCefrLevel = (level: any) => {
    setProfile(prev => ({
      ...prev,
      currentLevel: (level === 'A1' || level === 'A2' || level === 'B1') ? 'Medium' : level === 'B2' ? 'Upper Medium' : 'Hard',
      cefrLevel: level
    }));
    notify(`Target level updated to ${level}`);
  };

  const updateProfile = (fields: Partial<UserProfile>) => {
    setProfile(prev => ({
      ...prev,
      ...fields
    }));
    notify('Profile updated');
  };

  return (
    <LearningContext.Provider
      value={{
        profile,
        updateProfile,
        setCurrentLevel,
        unlockNextLevel,
        incrementSpeakingCount,
        incrementReadingCount,
        addXP,
        markLessonCompleted,
        markChallengeDayCompleted,
        toggleSaveWord,
        toggleMasterWord,
        recordQuizAttempt,
        saveWritingSubmission,
        addPersonalNote,
        deletePersonalNote,
        unlockBadge,
        setCefrLevel,
        triggerConfetti,
        recentNotification
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};
