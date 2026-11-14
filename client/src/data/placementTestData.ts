import { PlacementTestQuestion, LearningLevel } from '../types';

export const placementQuestions: PlacementTestQuestion[] = [
  // SECTION 1: DAILY CONVERSATION & GRAMMAR
  {
    id: 'pt-g-1',
    category: 'Grammar',
    level: 'Medium',
    question: 'She ______ to the gym every Tuesday and Thursday morning before work.',
    options: ['go', 'goes', 'is go', 'going'],
    correctIndex: 1,
    explanation: 'Third-person singular subjects (she/he/it) take the -s/-es ending in the Present Simple tense.'
  },
  {
    id: 'pt-g-2',
    category: 'Grammar',
    level: 'Medium',
    question: 'Which sentence is grammatically correct for a completed past action yesterday?',
    options: [
      'I have seen Rahul yesterday.',
      'I saw Rahul yesterday.',
      'I am seeing Rahul yesterday.',
      'I had saw Rahul yesterday.'
    ],
    correctIndex: 1,
    explanation: 'With a specific past time like "yesterday", use the Past Simple ("I saw"), NOT the Present Perfect.'
  },
  {
    id: 'pt-g-3',
    category: 'Grammar',
    level: 'Medium',
    question: 'I ______ here since 9 AM waiting for the client to join the Zoom call.',
    options: ['am sitting', 'have been sitting', 'was sat', 'sit'],
    correctIndex: 1,
    explanation: 'For an action that started in the past and is still ongoing right now with "since", use Present Perfect Continuous.'
  },
  {
    id: 'pt-g-4',
    category: 'Grammar',
    level: 'Upper Medium',
    question: 'If I ______ earlier this morning, I would not have missed the team briefing.',
    options: ['woke up', 'had woken up', 'would wake up', 'have woken up'],
    correctIndex: 1,
    explanation: 'Third conditional for past regret: "If + had + V3, would have + V3".'
  },
  {
    id: 'pt-g-5',
    category: 'Grammar',
    level: 'Hard',
    question: 'Hardly ______ the presentation when the fire alarm interrupted the meeting.',
    options: ['I had started', 'had I started', 'did I started', 'was I started'],
    correctIndex: 1,
    explanation: 'Inversion after negative adverbs: "Hardly had I started... when...".'
  },

  // SECTION 2: EVERYDAY VOCABULARY
  {
    id: 'pt-v-1',
    category: 'Vocabulary',
    level: 'Medium',
    question: 'Which word naturally fits: "I thought the movie was tomorrow, but ______ it is tonight!"',
    options: ['actually', 'instead', 'although', 'pragmatic'],
    correctIndex: 0,
    explanation: '"Actually" is used to state a real fact or clarify a misunderstanding (Sach mein).'
  },
  {
    id: 'pt-v-2',
    category: 'Vocabulary',
    level: 'Medium',
    question: 'When you are not 100% sure but think something is likely to happen, you say: "It will ______ rain today."',
    options: ['definitely', 'probably', 'honestly', 'accomplish'],
    correctIndex: 1,
    explanation: '"Probably" expresses high likelihood (shayad / sambhavtah).'
  },
  {
    id: 'pt-v-3',
    category: 'Vocabulary',
    level: 'Medium',
    question: 'The meeting was postponed because the manager was unwell. Which phrasal verb means "postpone"?',
    options: ['call off', 'put off', 'look after', 'run into'],
    correctIndex: 1,
    explanation: '"Put off" means to delay or postpone to a later date.'
  },
  {
    id: 'pt-v-4',
    category: 'Vocabulary',
    level: 'Upper Medium',
    question: 'A practical, realistic approach to solving day-to-day problems is described as ______.',
    options: ['hesitant', 'pragmatic', 'tedious', 'spontaneous'],
    correctIndex: 1,
    explanation: '"Pragmatic" means dealing with problems in a sensible, realistic, and practical way.'
  },
  {
    id: 'pt-v-5',
    category: 'Vocabulary',
    level: 'Hard',
    question: 'Her explanation was so clear and ______ that everyone agreed without debate.',
    options: ['lucid', 'vague', 'ambiguous', 'hesitant'],
    correctIndex: 0,
    explanation: '"Lucid" means expressed clearly and easy to understand.'
  },

  // SECTION 3: DAILY CONVERSATION & SENTENCE FORMATION
  {
    id: 'pt-c-1',
    category: 'Sentence Formation',
    level: 'Medium',
    question: 'How do you politely order coffee in a cafe?',
    options: [
      'Give me coffee now.',
      'Could I please get a cappuccino?',
      'I am wanting a coffee.',
      'Coffee is needed by me.'
    ],
    correctIndex: 1,
    explanation: '"Could I please get a [drink]?" is the polite, natural conversational standard.'
  },
  {
    id: 'pt-c-2',
    category: 'Sentence Formation',
    level: 'Medium',
    question: 'When expressing agreement with a colleague\'s proposal, say: "______"',
    options: [
      'I am agree with you.',
      'I completely agree with your idea.',
      'I am agreeing your idea.',
      'Agreed is by me.'
    ],
    correctIndex: 1,
    explanation: '"Agree" is a verb. We say "I agree", never "I am agree".'
  },
  {
    id: 'pt-c-3',
    category: 'Sentence Formation',
    level: 'Medium',
    question: 'Which question is correct when asking a friend about their weekend plan?',
    options: [
      'What are you doing this weekend?',
      'What you do this weekend?',
      'What are you do this weekend?',
      'Where you will going?'
    ],
    correctIndex: 0,
    explanation: '"What are you doing this weekend?" uses Present Continuous for planned future events.'
  },
  {
    id: 'pt-c-4',
    category: 'Reading Comprehension',
    level: 'Upper Medium',
    question: 'Read: "Despite working late into the night, Rohan felt energized by the team\'s progress." What does this mean?',
    options: [
      'Rohan was exhausted and unhappy.',
      'Even though he worked late, the good progress kept him motivated.',
      'Rohan stopped working because he was tired.',
      'The team did not make any progress.'
    ],
    correctIndex: 1,
    explanation: '"Despite" introduces a contrast: working late normally causes tiredness, but the progress motivated him.'
  },
  {
    id: 'pt-c-5',
    category: 'Writing Skills',
    level: 'Hard',
    question: 'Which sentence connects ideas most naturally in a professional email?',
    options: [
      'I finished the report so I will email it however you can review it.',
      'I have attached the finalized report; please let me know if you would like any revisions.',
      'Report is done and see it and tell.',
      'Having did the report, please do the review.'
    ],
    correctIndex: 1,
    explanation: 'Clear, concise professional phrasing with a semi-colon and polite conditional call-to-action.'
  }
];

export function calculateCefrLevel(score: number, total: number): {
  level: LearningLevel;
  levelTitle: string;
  description: string;
  recommendation: string;
  grammarFocus: string;
} {
  const percentage = (score / total) * 100;

  if (percentage >= 80) {
    return {
      level: 'Hard',
      levelTitle: 'Hard Level (Advanced Polish)',
      description: 'You have a strong command of everyday conversational English and can now focus on advanced nuance, complex sentence structures, and high-impact discussions.',
      recommendation: 'Start with Upper Medium topics to verify speed and rhythm, and unlock Hard level for advanced workplace communication and idiomatic mastery.',
      grammarFocus: 'Conditional nuances, indirect speech in meetings, and advanced sentence connectors.'
    };
  } else if (percentage >= 50) {
    return {
      level: 'Upper Medium',
      levelTitle: 'Upper Medium (Fluent Conversationalist)',
      description: 'You have a good grasp of everyday routines and basic tenses, with occasional slips in sentence connections and prepositions.',
      recommendation: 'We recommend starting at Medium level to solidify your daily conversation confidence, then smoothly moving into Upper Medium.',
      grammarFocus: 'Present Perfect vs Past Simple, connecting sentences with although/however, and natural roleplays.'
    };
  } else {
    return {
      level: 'Medium',
      levelTitle: 'Medium Level (Recommended Starting Level)',
      description: 'You understand everyday words and can follow basic conversations, but need structured daily practice to speak smoothly without hesitating.',
      recommendation: 'Medium is your ideal starting level! Practice 10 daily words, practical grammar rules with Roman Hindi explanations, and 12-15 turn speaking dialogues.',
      grammarFocus: 'Present Simple routines, Past Simple storytelling, daily modal verbs (can/could/should), and polite everyday questions.'
    };
  }
}
