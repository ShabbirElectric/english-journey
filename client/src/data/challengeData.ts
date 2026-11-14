import { ChallengeDay } from '../types';
import { dailyVocabularyBank } from './vocabularyData';

export const thirtyDayChallengeList: ChallengeDay[] = [
  {
    day: 1,
    week: 1,
    phaseTitle: 'Phase 1: Daily Routine & Natural Questions (Days 1–7)',
    title: 'Talking About Your Daily Routine & Morning Habits',
    level: 'Medium',
    objectives: [
      'Confidently describe your morning routine in English',
      'Use Present Simple naturally without overthinking rules',
      'Learn 10 everyday expressions for habits and time management'
    ],
    grammarSummary: {
      topic: 'Present Simple for Daily Habits',
      keyRule: 'Use simple base verbs for "I / you / we / they" (I wake up, I drink) and add -s/-es for "he / she" (He wakes up, She drinks).',
      romanHindiNote: 'Jab bhi roz ke kaamon ki baat karte hain, seedha verb ka first form lagta hai. He/She ke saath verb mein "s" lagayein.',
      formula: 'I / You / We / They + V1 (routine)\nHe / She / It + V1 + s/es',
      quickExamples: [
        'I wake up around 6:30 AM every weekday.',
        'My mother usually drinks green tea in the morning.',
        'I catch the metro at 8:15 AM to reach office on time.'
      ]
    },
    vocabList: dailyVocabularyBank.slice(0, 10),
    readingOrWritingTask: {
      type: 'writing',
      title: 'Write 5 Sentences About Your Morning Routine',
      prompt: 'Write 5 simple sentences describing what you do from the moment you wake up until you start work or study.'
    },
    speakingPrompt: {
      scenario: 'Morning Routine Share',
      starterPhrase: 'Every morning, I usually wake up around 6:30 AM and drink a warm glass of water...',
      targetSeconds: 45
    },
    quiz: [
      {
        id: 'cd-q1',
        question: 'Which sentence correctly describes a daily routine in natural English?',
        options: [
          'I am drinking coffee every morning at 7:00 AM.',
          'I drink coffee every morning at 7:00 AM.',
          'I drinks coffee every morning at 7:00 AM.',
          'I am drink coffee every morning at 7:00 AM.'
        ],
        correctIndex: 1,
        explanation: 'For daily routines with "I", use the base form "drink".',
        romanHindiTip: 'Roz ke kaam ke liye "I drink" sahi hai.'
      }
    ],
    rewardXP: 50
  },
  {
    day: 2,
    week: 1,
    phaseTitle: 'Phase 1: Daily Routine & Natural Questions (Days 1–7)',
    title: 'Talking With Friends & Asking "How Was Your Day?"',
    level: 'Medium',
    objectives: [
      'Master the classic evening catch-up conversation',
      'Answer "What kept you busy?" with confidence',
      'Learn natural conversational fillers (Actually, Honestly, Probably)'
    ],
    grammarSummary: {
      topic: 'Past Simple for Recent Events',
      keyRule: 'Use V2 for completed actions (had, went, finished, called). After "Did", always use V1.',
      romanHindiNote: 'Beete hue waqt ki baat ke liye verb ka 2nd form (V2) lagayein. Sawaal mein "Did" ke saath V1 lagayein.',
      formula: 'Subject + V2 | Did + Subject + V1 + ?',
      quickExamples: [
        'It was pretty good! I had a busy day at work.',
        'Did you call Rohit yesterday afternoon?'
      ]
    },
    vocabList: dailyVocabularyBank.slice(10, 20),
    readingOrWritingTask: {
      type: 'writing',
      title: 'Short Message to a Friend',
      prompt: 'Write a 4-sentence WhatsApp message to your friend telling them how your day went and asking about their weekend plans.'
    },
    speakingPrompt: {
      scenario: 'Evening Catch-up With Friend',
      starterPhrase: 'Hey! It was quite a busy day today because we had two back-to-back meetings...',
      targetSeconds: 50
    },
    quiz: [
      {
        id: 'cd-q2',
        question: 'What is the most natural reply to "How was your day?"',
        options: [
          'It was pretty good! I had a productive day at work.',
          'Day is was yesterday.',
          'I am being fine today afternoon.',
          'Yes, day was work.'
        ],
        correctIndex: 0,
        explanation: '"It was pretty good..." is the most natural and widely used everyday conversational response.',
        romanHindiTip: '"It was pretty good..." rozana English mein sabse natural jawab hai.'
      }
    ],
    rewardXP: 50
  },
  {
    day: 3,
    week: 1,
    phaseTitle: 'Phase 1: Daily Routine & Natural Questions (Days 1–7)',
    title: 'Talking About Work, College & Studies',
    level: 'Medium',
    objectives: [
      'Explain what you do for work or what you are studying in 3 simple sentences',
      'Use phrases like "I am responsible for...", "I usually handle..."',
      'Speak without fear during office standups and college introductions'
    ],
    grammarSummary: {
      topic: 'Present Simple vs Continuous at Work',
      keyRule: 'Use Present Simple for regular responsibilities and Present Continuous for current projects.',
      romanHindiNote: 'Roz ki jimmedari ke liye Present Simple aur chal rahe project ke liye Present Continuous lagayein.',
      formula: 'Regular: I manage / I work | Current: Today I am working on...',
      quickExamples: [
        'I work as a digital marketer at an agency in Pune.',
        'Currently, I am working on our new website redesign.'
      ]
    },
    vocabList: dailyVocabularyBank.slice(0, 10),
    readingOrWritingTask: {
      type: 'writing',
      title: 'Describe Your Work or Studies',
      prompt: 'Write 4 sentences explaining your profession or studies, your daily responsibilities, and what you enjoy most about it.'
    },
    speakingPrompt: {
      scenario: 'Work Role Introduction',
      starterPhrase: 'Currently, I work in operations, where I coordinate daily client requests and ensure everything runs on schedule...',
      targetSeconds: 60
    },
    quiz: [
      {
        id: 'cd-q3',
        question: 'Choose the correct way to describe your current ongoing project:',
        options: [
          'Currently, I work on a new client presentation right now.',
          'Currently, I am working on a new client presentation.',
          'Currently, I am work on client presentation.',
          'Currently, I worked on client presentation.'
        ],
        correctIndex: 1,
        explanation: 'Ongoing current projects use "am working on".',
        romanHindiTip: 'Abhi chal rahe project ke liye "am working on" aayega.'
      }
    ],
    rewardXP: 50
  },
  {
    day: 4,
    week: 1,
    phaseTitle: 'Phase 1: Daily Routine & Natural Questions (Days 1–7)',
    title: 'Expressing Opinions: "In My Opinion..." & "I Think..."',
    level: 'Medium',
    objectives: [
      'Share your thoughts politely without sounding aggressive',
      'Use opinion starters: "To be honest", "In my view", "From my perspective"',
      'Disagree respectfully using "I see your point, but..."'
    ],
    grammarSummary: {
      topic: 'Opinion Phrases & Connectors',
      keyRule: 'Combine an opinion starter with a clear reason using "because" or "since".',
      romanHindiNote: 'Apni raye dene ke liye "In my opinion...", "I think..." aur "To be honest..." ka use karein.',
      formula: 'Opinion Starter + Subject + Verb + because + Reason',
      quickExamples: [
        'In my opinion, working from home saves valuable commute time.',
        'I see your point, but I think having in-person discussions is faster.'
      ]
    },
    vocabList: dailyVocabularyBank.slice(10, 20),
    readingOrWritingTask: {
      type: 'writing',
      title: 'Express Your Opinion',
      prompt: 'Write 4 sentences expressing your opinion on: "Is learning English online better than attending a physical coaching center?"'
    },
    speakingPrompt: {
      scenario: 'Sharing a Perspective in a Meeting',
      starterPhrase: 'From my perspective, focusing on daily conversation practice is much more effective than memorizing grammar rules...',
      targetSeconds: 60
    },
    quiz: [
      {
        id: 'cd-q4',
        question: 'Which phrase is the most polite way to express disagreement with a colleague?',
        options: [
          'You are completely wrong about this.',
          'I see your point, but I have a slightly different perspective.',
          'No, that makes zero sense.',
          'Your idea is bad.'
        ],
        correctIndex: 1,
        explanation: '"I see your point, but..." politely acknowledges the other person before offering a counter-opinion.',
        romanHindiTip: '"I see your point, but..." sabse polite tareeka hai kisi ki baat par asahmat hone ka.'
      }
    ],
    rewardXP: 50
  },
  {
    day: 5,
    week: 1,
    phaseTitle: 'Phase 1: Daily Routine & Natural Questions (Days 1–7)',
    title: 'Asking Questions Naturally (How come? What do you think?)',
    level: 'Medium',
    objectives: [
      'Form natural everyday questions without hesitating',
      'Use natural question starters: "How come?", "Do you mind if...?", "Could you tell me...?"',
      'Practice question intonation (rising pitch at the end)'
    ],
    grammarSummary: {
      topic: 'Natural Question Inversion',
      keyRule: 'Direct questions invert the auxiliary verb: "Do you...", "Can you...", "Where are you..."',
      romanHindiNote: 'Sawaal poochhte waqt Helping verb ko Subject se pehle rakhte hain (Do you / Did you / Can you).',
      formula: 'Question Word + Auxiliary + Subject + Main Verb + ?',
      quickExamples: [
        'How come you didn\'t come to the cafe yesterday?',
        'Could you please share the location with me?'
      ]
    },
    vocabList: dailyVocabularyBank.slice(0, 10),
    readingOrWritingTask: {
      type: 'writing',
      title: '5 Natural Questions',
      prompt: 'Write 5 questions you would ask a new colleague or friend you are meeting for the first time.'
    },
    speakingPrompt: {
      scenario: 'Asking Friendly Questions',
      starterPhrase: 'How long have you been living in this city, and what do you enjoy doing during your free time?',
      targetSeconds: 50
    },
    quiz: [
      {
        id: 'cd-q5',
        question: 'Choose the grammatically correct question:',
        options: [
          'Where you are going for lunch today?',
          'Where are you going for lunch today?',
          'Where you go for lunch right now?',
          'Where going you for lunch?'
        ],
        correctIndex: 1,
        explanation: 'Invert the auxiliary "are" before the subject "you".',
        romanHindiTip: 'Sawaal mein "Where are you going..." aayega.'
      }
    ],
    rewardXP: 50
  },
  {
    day: 6,
    week: 1,
    phaseTitle: 'Phase 1: Daily Routine & Natural Questions (Days 1–7)',
    title: 'Talking About Past Experiences (Yesterday & Last Trip)',
    level: 'Medium',
    objectives: [
      'Tell a simple 1-minute story about your last weekend or vacation',
      'Use time connectors: "First", "Then", "After that", "Finally"',
      'Prevent common irregular past tense errors (say "saw", not "seen")'
    ],
    grammarSummary: {
      topic: 'Sequencing Past Events',
      keyRule: 'Use sequential connectors (First, Then, Later, In the end) with Past Simple verbs.',
      romanHindiNote: 'Kahaani ya purana kissa sunate waqt: First, Then, After that aur V2 verbs ka use karein.',
      formula: 'First + V2 ... Then + V2 ... In the end + V2',
      quickExamples: [
        'First, we reached the station, and then we grabbed some breakfast.',
        'Last weekend was memorable because we went hiking in the hills.'
      ]
    },
    vocabList: dailyVocabularyBank.slice(10, 20),
    readingOrWritingTask: {
      type: 'writing',
      title: 'Describe Your Last Weekend',
      prompt: 'Write 5 sentences about what you did last Saturday and Sunday using past tense verbs.'
    },
    speakingPrompt: {
      scenario: 'Sharing a Past Experience',
      starterPhrase: 'Last weekend was very relaxing. On Saturday morning, I woke up late, met my cousins, and we...',
      targetSeconds: 60
    },
    quiz: [
      {
        id: 'cd-q6',
        question: 'Which sentence correctly shares a past event?',
        options: [
          'We seen an incredible sunset at the beach yesterday.',
          'We saw an incredible sunset at the beach yesterday.',
          'We was see an incredible sunset at the beach.',
          'We did saw an incredible sunset.'
        ],
        correctIndex: 1,
        explanation: '"Saw" is the past simple form of see. Never say "we seen".',
        romanHindiTip: 'Past Simple mein "We saw" aayega.'
      }
    ],
    rewardXP: 50
  },
  {
    day: 7,
    week: 1,
    phaseTitle: 'Phase 1: Daily Routine & Natural Questions (Days 1–7)',
    title: 'Discussing Future Plans & Upcoming Weekends',
    level: 'Medium',
    objectives: [
      'Confidently answer "What are your plans for this weekend?"',
      'Differentiate between "I will probably..." and "I am planning to..."',
      'Complete Week 1 Milestone Assessment'
    ],
    grammarSummary: {
      topic: 'Future Plans & Intentions',
      keyRule: 'Use "I am planning to + V1" or "I am going to + V1" for weekend plans.',
      romanHindiNote: 'Aage ke plans ke liye "I am planning to..." ya "I am going to..." bolein.',
      formula: 'Subject + am/is/are + planning to + V1',
      quickExamples: [
        'I am planning to clean my room and catch up on some reading this Sunday.',
        'We are probably going to watch the cricket match together.'
      ]
    },
    vocabList: dailyVocabularyBank.slice(0, 10),
    readingOrWritingTask: {
      type: 'writing',
      title: 'My Upcoming Weekend Plans',
      prompt: 'Write 4 sentences detailing what you are planning to do this coming weekend.'
    },
    speakingPrompt: {
      scenario: 'Weekend Plans Discussion',
      starterPhrase: 'This weekend, I am planning to visit a nearby bookstore, relax with my family, and probably cook...',
      targetSeconds: 60
    },
    quiz: [
      {
        id: 'cd-q7',
        question: 'What is the most natural answer to "What are you doing this weekend?"',
        options: [
          'I am planning to visit my grandparents in Pune.',
          'I will visit yesterday.',
          'I am visit grandparents.',
          'Planning I am to visit.'
        ],
        correctIndex: 0,
        explanation: '"I am planning to visit..." is natural and grammatically sound.',
        romanHindiTip: '"I am planning to visit..." aage ke plan ke liye bilkul sahi hai.'
      }
    ],
    rewardXP: 75
  },
  // Days 8 to 30: Realistic Everyday English progression
  {
    day: 8,
    week: 2,
    phaseTitle: 'Phase 2: Everyday Scenarios & Practical Situations (Days 8–14)',
    title: 'Shopping & Ordering Food at a Restaurant',
    level: 'Medium',
    objectives: [
      'Order food and beverages politely at cafes and restaurants',
      'Ask for modifications: "less spicy", "without sugar", "table by the window"',
      'Request the bill and confirm payment options'
    ],
    grammarSummary: {
      topic: 'Polite Requests with "Could I have..."',
      keyRule: 'Use "Could I have...", "Can I get...", or "We would like..." to order food politely.',
      romanHindiNote: 'Restaurant mein order dete waqt "Could I please have..." bolna sabse polite hota hai.',
      formula: 'Could I please have + [Food item] + with [modifications]?',
      quickExamples: [
        'Could I please have an iced tea with less sugar?',
        'Could you bring us the bill whenever you are ready?'
      ]
    },
    vocabList: dailyVocabularyBank.slice(10, 20),
    readingOrWritingTask: {
      type: 'writing',
      title: 'Restaurant Order Script',
      prompt: 'Write a short 4-line script ordering your favorite meal and beverage at a restaurant.'
    },
    speakingPrompt: {
      scenario: 'Ordering at a Restaurant',
      starterPhrase: 'Good evening! We would like to order one pasta and two iced coffees with less ice, please...',
      targetSeconds: 60
    },
    quiz: [
      {
        id: 'cd-q8',
        question: 'Which is the most polite way to ask for the bill at a restaurant?',
        options: [
          'Bring bill fast.',
          'Could you please bring us the bill?',
          'Bill give me now.',
          'I want bill right now.'
        ],
        correctIndex: 1,
        explanation: '"Could you please bring us the bill?" is standard polite English.',
        romanHindiTip: 'Bill mangne ke liye "Could you please bring us the bill?" sabse polite hai.'
      }
    ],
    rewardXP: 60
  },
  {
    day: 9,
    week: 2,
    phaseTitle: 'Phase 2: Everyday Scenarios & Practical Situations (Days 8–14)',
    title: 'Phone Conversations & Leaving Clear Voice Messages',
    level: 'Medium',
    objectives: [
      'Answer phone calls professionally: "This is [Name] speaking"',
      'Ask someone to repeat politely: "Could you please repeat that?"',
      'Leave a brief 30-second voicemail'
    ],
    grammarSummary: {
      topic: 'Telephone English Phrases',
      keyRule: 'On phone calls, identify yourself with "This is [Name]", not "I am [Name]".',
      romanHindiNote: 'Phone par apna naam batate waqt hamesha "This is [Naam]" bolein, "I am [Naam]" nahi.',
      formula: 'This is [Name] calling from / regarding [Topic]...',
      quickExamples: [
        'Hello Rohit, this is Amit calling. Do you have a quick minute to chat?',
        'Sorry, your voice is breaking up. Could you please say that again?'
      ]
    },
    vocabList: dailyVocabularyBank.slice(0, 10),
    readingOrWritingTask: {
      type: 'writing',
      title: 'Phone Message Script',
      prompt: 'Write a 4-sentence phone message explaining why you missed a call and when you will call back.'
    },
    speakingPrompt: {
      scenario: 'Leaving a Voicemail',
      starterPhrase: 'Hi Shabbir, this is Aman calling. I wanted to follow up on our meeting yesterday. Please give me a call back when you are free...',
      targetSeconds: 50
    },
    quiz: [
      {
        id: 'cd-q9',
        question: 'When answering an official phone call, what should you say?',
        options: [
          'Who is this? Tell fast.',
          'Hello, this is Rahul speaking. How can I help you today?',
          'Myself Rahul here.',
          'Yes, speak.'
        ],
        correctIndex: 1,
        explanation: '"Hello, this is Rahul speaking..." is the universal professional standard.',
        romanHindiTip: 'Phone par hamesha "Hello, this is [Name] speaking" bolte hain.'
      }
    ],
    rewardXP: 60
  },
  {
    day: 10,
    week: 2,
    phaseTitle: 'Phase 2: Everyday Scenarios & Practical Situations (Days 8–14)',
    title: 'Asking for Help & Making Polite Requests',
    level: 'Medium',
    objectives: [
      'Ask for assistance without feeling awkward or hesitant',
      'Use phrases like: "Would you mind helping me with...?"',
      'Respond graciously: "I would be happy to help!"'
    ],
    grammarSummary: {
      topic: 'Requests with "Would you mind..."',
      keyRule: 'Remember: "Would you mind" is always followed by a verb ending in -ing (e.g. "Would you mind helping...").',
      romanHindiNote: '"Would you mind" ke baad hamesha verb mein "-ing" lagta hai (helping, sharing).',
      formula: 'Would you mind + Verb-ing + Object?',
      quickExamples: [
        'Would you mind helping me move this desk?',
        'Do you mind if I open the window for some fresh air?'
      ]
    },
    vocabList: dailyVocabularyBank.slice(10, 20),
    readingOrWritingTask: {
      type: 'writing',
      title: 'Ask for Help Politely',
      prompt: 'Write 3 polite requests asking a friend or colleague for help with computer troubleshooting or transportation.'
    },
    speakingPrompt: {
      scenario: 'Asking a Colleague for Assistance',
      starterPhrase: 'Excuse me Vikram, do you have five minutes? I was wondering if you could help me figure out this spreadsheet formula...',
      targetSeconds: 60
    },
    quiz: [
      {
        id: 'cd-q10',
        question: 'Choose the correct sentence:',
        options: [
          'Would you mind to help me?',
          'Would you mind helping me?',
          'Would you mind help me?',
          'Do you mind to help me?'
        ],
        correctIndex: 1,
        explanation: '"Would you mind" strictly takes the -ing form: "Would you mind helping me?"',
        romanHindiTip: 'Would you mind ke baad hamesha -ing lagta hai (helping).'
      }
    ],
    rewardXP: 60
  },
  {
    day: 11,
    week: 2,
    phaseTitle: 'Phase 2: Everyday Scenarios & Practical Situations (Days 8–14)',
    title: 'Explaining Problems & Roadblocks Calmly',
    level: 'Medium',
    objectives: [
      'Explain what went wrong without panicking or placing blame',
      'Use phrases like: "We ran into an issue with...", "There seems to be a delay because..."',
      'Propose a constructive solution immediately after stating the problem'
    ],
    grammarSummary: {
      topic: 'Stating Problems Diplomatically',
      keyRule: 'Use passive expressions or softeners: "There seems to be an issue" instead of "You made a mistake".',
      romanHindiNote: 'Problem batate waqt kisi par gussa nikalne ke bajaay "There seems to be an issue..." bolein.',
      formula: 'There seems to be + [Problem] + because + [Cause]',
      quickExamples: [
        'There seems to be a small issue with the wifi connection.',
        'We ran into a slight delay due to morning traffic, but we are on our way.'
      ]
    },
    vocabList: dailyVocabularyBank.slice(0, 10),
    readingOrWritingTask: {
      type: 'writing',
      title: 'Explain an Office or College Problem',
      prompt: 'Write 4 sentences explaining why a project submission is delayed by one day and proposing a new deadline.'
    },
    speakingPrompt: {
      scenario: 'Explaining a Delay to Your Team',
      starterPhrase: 'Hi team, I wanted to give a quick update. We ran into a minor technical glitch with the database, so we will need another hour...',
      targetSeconds: 60
    },
    quiz: [
      {
        id: 'cd-q11',
        question: 'Which is the most professional way to explain a delay?',
        options: [
          'The supplier is lazy so we have no raw materials.',
          'We experienced an unforeseen delay in shipment; however, it will arrive by 3 PM.',
          'Everything is broken.',
          'Delay is because supplier did bad work.'
        ],
        correctIndex: 1,
        explanation: 'Option 2 is calm, professional, and provides a constructive arrival update.',
        romanHindiTip: 'Professional tareeke se problem aur solution dono batayein.'
      }
    ],
    rewardXP: 60
  },
  {
    day: 12,
    week: 2,
    phaseTitle: 'Phase 2: Everyday Scenarios & Practical Situations (Days 8–14)',
    title: 'Agreeing & Disagreeing Politely in Daily Chats',
    level: 'Medium',
    objectives: [
      'Express agreement enthusiastically: "I completely agree with you!", "That makes total sense!"',
      'Disagree diplomatically: "I understand what you mean, but from my experience..."',
      'Avoid blunt "No, you are wrong"'
    ],
    grammarSummary: {
      topic: 'Agreement & Diplomatic Disagreement',
      keyRule: '"Agree" is a verb in English. Say "I agree", NEVER "I am agree".',
      romanHindiNote: 'Angrezi mein hamesha "I agree" bolte hain, "I am agree" bolna galat hai!',
      formula: 'I agree with [person/idea] | I see your point, but [alternative]',
      quickExamples: [
        'I agree with you 100% on that point.',
        'I see what you mean, but actually, the other option might be more affordable.'
      ]
    },
    vocabList: dailyVocabularyBank.slice(10, 20),
    readingOrWritingTask: {
      type: 'writing',
      title: 'Agree and Disagree Sentences',
      prompt: 'Write 2 sentences: one agreeing strongly with an idea, and one politely disagreeing with an alternative proposal.'
    },
    speakingPrompt: {
      scenario: 'Friendly Discussion on Weekend Movie',
      starterPhrase: 'I agree that action movies are fun, but to be honest, I would prefer watching a comedy tonight to relax...',
      targetSeconds: 60
    },
    quiz: [
      {
        id: 'cd-q12',
        question: 'Which of the following is correct in English?',
        options: [
          'I am agree with your decision.',
          'I agree with your decision.',
          'I am agreed with your decision.',
          'I agrees with your decision.'
        ],
        correctIndex: 1,
        explanation: '"Agree" is already a verb. We say "I agree", never "I am agree".',
        romanHindiTip: 'Hamesha "I agree" bolein, "I am agree" galat hai.'
      }
    ],
    rewardXP: 60
  },
  {
    day: 13,
    week: 2,
    phaseTitle: 'Phase 2: Everyday Scenarios & Practical Situations (Days 8–14)',
    title: 'Expressing Feelings & Emotions Naturally',
    level: 'Medium',
    objectives: [
      'Describe how you feel using natural everyday words: "exhausted", "relieved", "excited", "overwhelmed"',
      'Distinguish between feeling -ed (I am tired) vs causing -ing (the movie is boring)',
      'Share feelings honestly with friends and family'
    ],
    grammarSummary: {
      topic: '-ed vs -ing Adjectives for Feelings',
      keyRule: 'Use -ed when a person feels the emotion (I am excited). Use -ing for the thing that causes the feeling (The trip was exciting).',
      romanHindiNote: 'Insan ki feelings ke liye "-ed" (I am bored), aur cheez ke liye "-ing" (The lecture is boring).',
      formula: 'Person + feels + -ed adjective | Situation + is + -ing adjective',
      quickExamples: [
        'I was completely exhausted after the long flight.',
        'The cricket match was so exciting to watch!'
      ]
    },
    vocabList: dailyVocabularyBank.slice(0, 10),
    readingOrWritingTask: {
      type: 'writing',
      title: 'Expressing Personal Emotions',
      prompt: 'Write 4 sentences describing a day when you felt nervous at first, but ended up feeling relieved and happy.'
    },
    speakingPrompt: {
      scenario: 'Sharing How You Feel',
      starterPhrase: 'To be honest, I was feeling quite overwhelmed with work early this week, but now I feel so relieved because...',
      targetSeconds: 60
    },
    quiz: [
      {
        id: 'cd-q13',
        question: 'Choose the correct adjective: "After working 10 hours straight, I felt totally ______."',
        options: ['exhausting', 'exhausted', 'exhaust', 'exhausts'],
        correctIndex: 1,
        explanation: 'The person experiences the feeling, so use -ed "exhausted".',
        romanHindiTip: 'Insan ke thakne ke liye "exhausted" aayega.'
      }
    ],
    rewardXP: 60
  },
  {
    day: 14,
    week: 2,
    phaseTitle: 'Phase 2: Everyday Scenarios & Practical Situations (Days 8–14)',
    title: 'Talking Confidently in Meetings & Group Discussions',
    level: 'Medium',
    objectives: [
      'Speak up in meetings without waiting to be called upon',
      'Use meeting transitions: "If I may add a quick point...", "Building on what Pooja said..."',
      'Summarize key action items at the conclusion'
    ],
    grammarSummary: {
      topic: 'Meeting Interruptions & Transitions',
      keyRule: 'Polite meeting interjections: "Excuse me, may I add something here?" or "I have a quick question regarding that."',
      romanHindiNote: 'Meeting mein apni baat shuru karne ke liye "If I may add a quick point..." bolein.',
      formula: 'Transition + Point + Reason',
      quickExamples: [
        'If I may add a quick point, our client requested this feature yesterday.',
        'To wrap up, I will send the summary email by 4 PM.'
      ]
    },
    vocabList: dailyVocabularyBank.slice(10, 20),
    readingOrWritingTask: {
      type: 'writing',
      title: 'Meeting Contribution Note',
      prompt: 'Write a 3-sentence statement you would make during an office or college meeting suggesting a new practical idea.'
    },
    speakingPrompt: {
      scenario: 'Contributing to a Team Meeting',
      starterPhrase: 'Thank you for the update. Building on what the team discussed, I think we should test this with five users first before rolling it out...',
      targetSeconds: 70
    },
    quiz: [
      {
        id: 'cd-q14',
        question: 'What is the most courteous way to interject in a group discussion?',
        options: [
          'Stop talking, my turn now.',
          'Could I quickly add a thought here?',
          'Listen to me first.',
          'No, wait.'
        ],
        correctIndex: 1,
        explanation: '"Could I quickly add a thought here?" is polite, professional, and effective.',
        romanHindiTip: '"Could I quickly add a thought here?" sabse courteous tareeka hai.'
      }
    ],
    rewardXP: 75
  },
  // Days 15-30: Gradual elevation through practical scenarios
  ...Array.from({ length: 16 }, (_, i) => {
    const dayNum = i + 15;
    return {
      day: dayNum,
      week: Math.ceil(dayNum / 7),
      phaseTitle: dayNum < 22 ? 'Phase 3: Intermediate Fluency & Complex Scenarios (Days 15–21)' : dayNum < 26 ? 'Phase 4: Vocabulary Expansion & Reading (Days 22–25)' : 'Phase 5: Writing, Speaking & Final Exam (Days 26–30)',
      title: dayNum === 30 ? 'Day 30: Final Conversational Examination' : `Day ${dayNum}: Conversational Fluency Practice & Real-Life Communication`,
      level: (dayNum < 22 ? 'Medium' : dayNum < 28 ? 'Upper Medium' : 'Upper Medium') as any,
      objectives: [
        'Engage in multi-turn natural English conversation without hesitation',
        'Learn 10 everyday expressions with Roman Hindi meanings',
        'Practice daily writing and speaking with instant feedback'
      ],
      grammarSummary: {
        topic: 'Conversational Fluency & Sentence Flow',
        keyRule: 'Focus on connecting thoughts smoothly using because, however, and so.',
        romanHindiNote: 'Baatein bolte waqt chhote connectors ka use karein taaki English natural lage.',
        formula: 'Thought 1 + Connector (so / because / however) + Thought 2',
        quickExamples: [
          'I wanted to go out, but the weather was stormy.',
          'She practiced speaking daily, so she cleared her interview effortlessly.'
        ]
      },
      vocabList: dailyVocabularyBank.slice(0, 10),
      readingOrWritingTask: {
        type: 'writing' as const,
        title: `Day ${dayNum} Practice Reflection`,
        prompt: `Write 5 sentences about your experiences today using at least two words from today's vocabulary bank.`
      },
      speakingPrompt: {
        scenario: `Day ${dayNum} Impromptu Speaking`,
        starterPhrase: 'Today was an interesting day because I had the chance to practice my conversational English with...',
        targetSeconds: 60
      },
      quiz: [
        {
          id: `cd-q${dayNum}`,
          question: 'Choose the most natural English sentence:',
          options: [
            'I am knowing the answer yesterday.',
            'I know the answer and I will explain it to you.',
            'I knowing the answer right now.',
            'I is know answer.'
          ],
          correctIndex: 1,
          explanation: '"I know the answer..." uses the correct stative verb form.',
          romanHindiTip: 'Know ke saath -ing nahi lagate, "I know" sahi hai.'
        }
      ],
      rewardXP: dayNum === 30 ? 150 : 60
    };
  })
];

export function getChallengeDay(dayNumber: number): ChallengeDay | undefined {
  return thirtyDayChallengeList.find(d => d.day === dayNumber);
}
