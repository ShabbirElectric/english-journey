// English Journey - Central TypeScript Definitions
// Focused on Daily-Use Conversational English with 3 Difficulty Levels: Medium, Upper Medium, Hard

export type LearningLevel = 'Medium' | 'Upper Medium' | 'Hard' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

// Legacy compatibility alias
export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | LearningLevel;

export interface GrammarExample {
  en: string;
  romanHindi?: string;
  context?: string;
  hi?: string;
}

export interface CommonMistake {
  wrong: string;
  correct: string;
  reason: string;
  romanHindiReason?: string;
}

export interface PracticeExercise {
  id: string;
  type: 'fill_blank' | 'reorder' | 'identify';
  prompt: string;
  options?: string[];
  correctAnswer: string;
  hint?: string;
  explanation: string;
  romanHindiTip?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  romanHindiTip?: string;
  hindiTip?: string;
}

export interface GrammarLesson {
  id: string;
  part: 1 | 2 | 3 | 4;
  partTitle: string;
  slug: string;
  title: string;
  level: LearningLevel;
  durationMins: number;
  simpleExplanation: string;
  romanHindiExplanation?: string;
  formulaOrStructure: string;
  examples: GrammarExample[]; // 5-10 practical daily-use examples
  commonMistakes: CommonMistake[];
  practiceExercises: PracticeExercise[];
  quiz: QuizQuestion[];
  hindiExplanation?: string;
}

// 10 Useful Daily Vocabulary Words/Phrases
export interface DailyVocabWord {
  id: string;
  word: string;
  simpleMeaning: string;
  romanHindiMeaning: string;
  pronunciationGuide: string;
  dailyLifeExample: string;
  practiceSentence: string;
  category?: string;
  synonyms?: string[];
  antonyms?: string[];
}

export interface DifficultWord {
  word: string;
  meaning: string;
  romanHindi?: string;
  hindi?: string;
}

// Speaking Dialogue Exchange (12-15 turns)
export interface DialogueExchange {
  id: string;
  speaker: 'Person A' | 'Person B' | string;
  text: string;
  romanHindi: string;
  naturalExpressionNote?: string;
  isUserTurn?: boolean;
  suggestedUserHints?: string[];
}

export interface SpeakingScenario {
  id: string;
  title: string;
  category: string;
  level: LearningLevel;
  description: string;
  dialogue: DialogueExchange[];
  difficultWords: { word: string; meaning: string; romanHindi: string }[];
  naturalExpressions: { phrase: string; explanation: string; romanHindi: string }[];
  practicePrompt: string;
}

// Reading Room
export interface ExplainedSentence {
  sentence: string;
  breakdown: string;
  romanHindi: string;
}

export interface ReadingPassage {
  id: string;
  title: string;
  level: LearningLevel;
  category: string;
  readTimeMins: number;
  passage: string; // 200-300 words of natural everyday English
  vocabularyList: DailyVocabWord[]; // 10 vocabulary words with Roman Hindi
  explainedSentences: ExplainedSentence[]; // 5 important sentences explained
  mcqQuestions: QuizQuestion[]; // 5 MCQs
  comprehensionQuestions: {
    id: string;
    question: string;
    suggestedAnswer: string;
    romanHindiHint: string;
  }[]; // 5 Comprehension Questions
}

// Writing Studio
export interface WritingPrompt {
  id: string;
  genre: 'Daily 5 Sentences' | 'Short Paragraph' | 'Experience Description' | 'Express Opinion' | 'Message / Chat' | string;
  title: string;
  level: LearningLevel;
  scenario: string;
  instructions: string[];
  vocabularySuggestions: string[];
  sampleStarter: string;
}

export interface WritingCorrectionItem {
  original: string;
  corrected: string;
  whatWasWrong: string;
  romanHindiExplanation: string;
  naturalAlternative: string;
}

// 30-Day Challenge Day
export interface ChallengeDay {
  day: number;
  week: number;
  phaseTitle: string;
  title: string;
  level: LearningLevel;
  objectives: string[];
  grammarSummary: {
    topic: string;
    keyRule: string;
    romanHindiNote: string;
    formula: string;
    quickExamples: string[];
    hindiNote?: string;
  };
  vocabList: DailyVocabWord[]; // 10 daily words
  readingOrWritingTask: {
    type: 'reading' | 'writing';
    title: string;
    prompt: string;
    sampleContent?: string;
  };
  speakingPrompt: {
    scenario: string;
    starterPhrase: string;
    targetSeconds: number;
  };
  quiz: QuizQuestion[];
  rewardXP: number;
}

export interface Achievement {
  code: string;
  title: string;
  description: string;
  iconName: string;
  xpReward: number;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface PlacementTestQuestion {
  id: string;
  category: string;
  level: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface UserProfile {
  displayName: string;
  email: string;
  avatarUrl: string;
  bio?: string;
  currentLevel: LearningLevel; // 'Medium' (default), 'Upper Medium', 'Hard'
  unlockedLevels: LearningLevel[];
  dailyGoalMins: number;
  streakCount: number;
  totalXP: number;
  currentDay: number;
  completedLessons: string[]; // lesson ids
  completedChallengeDays: number[]; // day numbers
  savedWordIds: string[];
  masteredWordIds: string[];
  unlockedBadges: string[];
  speakingPracticeCount: number;
  readingPassagesCount: number;
  personalNotes: { id: string; title: string; content: string; date: string }[];
  recentAttempts: {
    id: string;
    title: string;
    score: number;
    total: number;
    date: string;
    percentage: number;
    type: string;
  }[];
  writingSubmissions: {
    id: string;
    promptTitle: string;
    genre: string;
    text: string;
    score: number;
    date: string;
    feedback: string;
    corrections?: WritingCorrectionItem[];
  }[];
  // Backward compatibility
  cefrLevel?: any;
}
