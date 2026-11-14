import { QuizQuestion, CefrLevel } from '../types';

export interface TestCatalogItem {
  id: string;
  title: string;
  category: 'Grammar MCQ' | 'Fill in Blanks' | 'Sentence Correction' | 'Vocabulary Test' | 'Weekly Unit' | 'Final Exam';
  level: CefrLevel;
  durationMins: number;
  totalQuestions: number;
  description: string;
  questions: QuizQuestion[];
  weakTopicMap: Record<number, { topicName: string; lessonSlug: string }>;
  rewardXP?: number;
}

export const assessmentCatalog: TestCatalogItem[] = [
  {
    id: 'test-grammar-mcq-1',
    title: 'Essential Grammar & Tenses Diagnostic',
    category: 'Grammar MCQ',
    level: 'Medium',
    durationMins: 12,
    totalQuestions: 6,
    description: 'Test your understanding of subject-verb agreement, basic tenses, and preposition placement.',
    weakTopicMap: {
      0: { topicName: 'Present Simple', lessonSlug: 'present-simple' },
      1: { topicName: 'Prepositions of Time', lessonSlug: 'prepositions' },
      2: { topicName: 'Present Perfect vs Past Simple', lessonSlug: 'present-perfect' },
      3: { topicName: 'Subject-Verb Agreement', lessonSlug: 'subject-verb-agreement' },
      4: { topicName: 'Articles', lessonSlug: 'articles' },
      5: { topicName: 'Modals', lessonSlug: 'modal-verbs' }
    },
    questions: [
      {
        id: 't-g1',
        question: 'Rohan ______ to his hometown twice every month to visit his grandparents.',
        options: ['travel', 'travels', 'is travel', 'traveling'],
        correctIndex: 1,
        explanation: 'Habitual actions with singular third person (Rohan) take the -s inflection in Present Simple.',
        hindiTip: 'नियमित आदत के लिए Present Simple (travels) आता है।'
      },
      {
        id: 't-g2',
        question: 'The annual general meeting is scheduled to begin ______ 10:00 AM ______ Friday.',
        options: ['in, at', 'at, on', 'on, at', 'at, in'],
        correctIndex: 1,
        explanation: 'Use "at" for specific clock times (at 10:00 AM) and "on" for days of the week (on Friday).',
        hindiTip: 'घड़ी के समय के लिए At और दिन के लिए On आता है।'
      },
      {
        id: 't-g3',
        question: 'I ______ the new company policy document yesterday evening.',
        options: ['have read', 'read (past)', 'was read', 'had readed'],
        correctIndex: 1,
        explanation: 'With a specific past time ("yesterday evening"), use Past Simple "read" (/red/).',
        hindiTip: 'Yesterday के साथ Past Simple आता है।'
      },
      {
        id: 't-g4',
        question: 'Every student in the auditorium ______ given a commemorative badge.',
        options: ['were', 'was', 'are', 'have been'],
        correctIndex: 1,
        explanation: '"Every student" is grammatically singular, requiring the singular verb "was".',
        hindiTip: 'Every student एकवचन है इसलिए was लगेगा।'
      },
      {
        id: 't-g5',
        question: 'She earned ______ master of science degree from ______ European university.',
        options: ['a, an', 'an, a', 'a, a', 'an, an'],
        correctIndex: 2,
        explanation: '"Master" starts with consonant sound /m/ (a master), and "European" starts with consonant "y" sound /jʊərəˈpiːən/ (a European).',
        hindiTip: 'European का उच्चारण "य" (व्यंजन) से शुरू होता है, इसलिए "a" लगेगा।'
      },
      {
        id: 't-g6',
        question: 'You ______ not touch those high-voltage wires under any circumstances.',
        options: ['must', 'might', 'could', 'should'],
        correctIndex: 0,
        explanation: '"Must not" conveys absolute prohibition and strict safety warning.',
        hindiTip: 'सख्त मनाही के लिए "must not" आता है।'
      }
    ]
  },
  {
    id: 'test-sentence-correction',
    title: 'Spot the Error: Sentence Correction',
    category: 'Sentence Correction',
    level: 'Upper Medium',
    durationMins: 15,
    totalQuestions: 5,
    description: 'Find the grammatical trap: identify which sentence is free from common Indian English errors.',
    weakTopicMap: {
      0: { topicName: 'Common Mistakes (Redundancies)', lessonSlug: 'common-grammatical-mistakes' },
      1: { topicName: 'Preposition Collocations', lessonSlug: 'common-grammatical-mistakes' },
      2: { topicName: 'Question Tags', lessonSlug: 'question-formation' },
      3: { topicName: 'Phrasal Verbs', lessonSlug: 'phrasal-verbs' },
      4: { topicName: 'Conditionals', lessonSlug: 'conditionals' }
    },
    questions: [
      {
        id: 'sc-1',
        question: 'Which of the following sentences does NOT contain a redundant repetition?',
        options: [
          'Please revert back to my email as soon as possible.',
          'Kindly repeat the instructions again for the class.',
          'Please revert to my email at your earliest convenience.',
          'We will return back home by 9:00 PM.'
        ],
        correctIndex: 2,
        explanation: '"Revert" already means reply/return. Saying "revert back", "repeat again", or "return back" is redundant.',
        hindiTip: 'Revert, repeat और return के साथ back/again नहीं लगाते।'
      },
      {
        id: 'sc-2',
        question: 'Choose the sentence with correct preposition usage:',
        options: [
          'I cannot cope up with this chaotic traffic.',
          'I cannot cope with this chaotic traffic.',
          'She is married with an architect from London.',
          'We discussed about the problem yesterday.'
        ],
        correctIndex: 1,
        explanation: 'The standard idiom is "cope with" (never "cope up with"). Also, we say "married to" and "discussed [something]" without about.',
        hindiTip: 'Cope with सही मुहावरा है, "cope up with" गलत है।'
      },
      {
        id: 'sc-3',
        question: 'Select the sentence with a correct question tag:',
        options: [
          'You are coming tomorrow, isn\'t it?',
          'She knows the truth, doesn\'t she?',
          'They didn\'t leave early, didn\'t they?',
          'He can swim well, can he?'
        ],
        correctIndex: 1,
        explanation: 'Positive statement ("She knows") takes the negative tag matching the auxiliary ("doesn\'t she").',
        hindiTip: 'Knows के लिए tag "doesn\'t she" सही है।'
      },
      {
        id: 'sc-4',
        question: 'Which sentence correctly handles pronoun placement in a separable phrasal verb?',
        options: [
          'It is very cold; put on it immediately.',
          'It is very cold; put it on immediately.',
          'Please look after it carefully tomorrow.',
          'Turn off it before leaving the room.'
        ],
        correctIndex: 1,
        explanation: 'Pronouns must be placed between the verb and particle in separable phrasal verbs ("put it on").',
        hindiTip: 'सर्वनाम (it) हमेशा बीच में आता है: put it on।'
      },
      {
        id: 'sc-5',
        question: 'Identify the sentence with flawless conditional structure:',
        options: [
          'If I will study hard, I will pass the examination.',
          'If I had known about the traffic, I would have taken the metro.',
          'If I was rich, I will buy a mansion in London.',
          'If you heat ice, it will have melted.'
        ],
        correctIndex: 1,
        explanation: 'Third conditional correctly uses: If + had known, would have taken.',
        hindiTip: 'If + had + V3 ... would have + V3 का प्रयोग बिल्कुल सही है।'
      }
    ]
  },
  {
    id: 'test-day30-final-exam',
    title: 'The 30-Day Graduation Comprehensive Examination',
    category: 'Final Exam',
    level: 'Hard',
    durationMins: 30,
    totalQuestions: 10,
    description: 'The ultimate final assessment covering Medium, Upper Medium, and Hard fluency. Score 80%+ to earn your Graduation Certificate!',
    weakTopicMap: {
      0: { topicName: 'Sentence Structure', lessonSlug: 'sentence-structure' },
      1: { topicName: 'Uncountable Nouns', lessonSlug: 'nouns' },
      2: { topicName: 'Present Perfect Continuous', lessonSlug: 'present-perfect-continuous' },
      3: { topicName: 'Future Perfect', lessonSlug: 'future-perfect' },
      4: { topicName: 'Subject-Verb Agreement', lessonSlug: 'subject-verb-agreement' },
      5: { topicName: 'Passive Voice', lessonSlug: 'active-passive-voice' },
      6: { topicName: 'Third Conditionals', lessonSlug: 'conditionals' },
      7: { topicName: 'Inversion for Emphasis', lessonSlug: 'advanced-sentence-structures' },
      8: { topicName: 'High-Level Vocabulary', lessonSlug: 'formal-and-informal-english' },
      9: { topicName: 'Diplomatic Formal Register', lessonSlug: 'formal-and-informal-english' }
    },
    questions: [
      {
        id: 'fe-1',
        question: 'Identify the sentence with correct English word order:',
        options: [
          'She speaks very fluently English during meetings.',
          'She speaks English very fluently during meetings.',
          'Speaks she English very fluently during meetings.',
          'She very fluently speaks English during meetings.'
        ],
        correctIndex: 1,
        explanation: 'Direct object ("English") stays with the verb ("speaks"), followed by manner ("very fluently").',
        hindiTip: 'Verb और Direct Object को अलग नहीं किया जाता।'
      },
      {
        id: 'fe-2',
        question: 'Which of the following contains NO grammatical error?',
        options: [
          'All the furnitures were damaged in transit.',
          'The manager gave me several useful pieces of advice.',
          'She provided many valuable informations.',
          'He bought three breads from the supermarket.'
        ],
        correctIndex: 1,
        explanation: '"Pieces of advice" correctly quantifies the uncountable noun "advice".',
        hindiTip: 'Advice uncountable है, इसलिए "pieces of advice" सही है।'
      },
      {
        id: 'fe-3',
        question: 'Complete: "Dr. Roy ______ at this university since October 2015."',
        options: ['is teaching', 'has been teaching', 'taught', 'teaches'],
        correctIndex: 1,
        explanation: '"Since October 2015" signifies ongoing duration up to the present, requiring Present Perfect Continuous.',
        hindiTip: 'Since के साथ Present Perfect Continuous (has been teaching) आता है।'
      },
      {
        id: 'fe-4',
        question: 'Fill in the blank: "By the end of this fiscal year, our organization ______ three new regional branches."',
        options: ['will launch', 'will have launched', 'launched', 'has launched'],
        correctIndex: 1,
        explanation: 'A deadline starting with "By [future time]" requires the Future Perfect "will have launched".',
        hindiTip: 'By [भविष्य का समय] आने पर Future Perfect आता है।'
      },
      {
        id: 'fe-5',
        question: 'Choose the correct verb: "Neither the CEO nor her executive assistants ______ available for comment yesterday."',
        options: ['was', 'were', 'is', 'are'],
        correctIndex: 1,
        explanation: 'In "neither... nor", the verb agrees with the closer plural subject ("executive assistants") in past tense ("were").',
        hindiTip: 'पास वाले बहुवचन Subject के अनुसार were आएगा।'
      },
      {
        id: 'fe-6',
        question: 'Change to Passive: "Archaeologists discovered an ancient temple in the valley."',
        options: [
          'An ancient temple discovered by archaeologists in the valley.',
          'An ancient temple was discovered by archaeologists in the valley.',
          'An ancient temple had discovered by archaeologists.',
          'An ancient temple is being discovered by archaeologists.'
        ],
        correctIndex: 1,
        explanation: 'Past Simple passive requires "was/were + V3" ("was discovered").',
        hindiTip: 'Past Simple Passive में was/were + V3 आता है।'
      },
      {
        id: 'fe-7',
        question: 'Complete the third conditional: "If we ______ earlier, we ______ the train."',
        options: [
          'left, wouldn\'t miss',
          'had left, would not have missed',
          'would leave, hadn\'t missed',
          'have left, will not miss'
        ],
        correctIndex: 1,
        explanation: 'Third conditional formula: If + had + V3, would have + V3.',
        hindiTip: '3rd Conditional का सही सूत्र है: If had left, would not have missed।'
      },
      {
        id: 'fe-8',
        question: 'Which sentence correctly demonstrates negative inversion for dramatic emphasis?',
        options: [
          'Never I have heard such an inspiring speech.',
          'Never have I heard such an inspiring speech.',
          'Never heard I such an inspiring speech.',
          'Never did I heard such an inspiring speech.'
        ],
        correctIndex: 1,
        explanation: 'Negative inversion: Negative word (Never) + Auxiliary (have) + Subject (I) + Participle (heard).',
        hindiTip: 'Never से वाक्य शुरू होने पर सहायक क्रिया Subject से पहले आती है।'
      },
      {
        id: 'fe-9',
        question: 'Select the word that best completes: "The lawyer sought to ______ the client\'s claim with documentary evidence."',
        options: ['substantiate', 'dilute', 'vacillate', 'juxtapose'],
        correctIndex: 0,
        explanation: '"Substantiate" means to provide evidence to support or prove the truth of an assertion.',
        hindiTip: 'Substantiate का अर्थ साक्ष्य द्वारा सिद्ध करना है।'
      },
      {
        id: 'fe-10',
        question: 'In high-level corporate negotiation, what is the most diplomatic way to address a missing document?',
        options: [
          'You forgot to attach the financial summary.',
          'Why did you send an email without the attachment?',
          'It appears that the referenced attachment was inadvertently omitted from your correspondence.',
          'Please send the document you failed to attach.'
        ],
        correctIndex: 2,
        explanation: 'Using polite passive voice ("was inadvertently omitted") avoids personal blame and maintains impeccable diplomatic rapport.',
        hindiTip: 'कूटनीतिक और विनम्र भाषा में बिना दोषारोपण के बात कही जाती है।'
      }
    ]
  }
];

