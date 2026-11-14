import { GrammarLesson } from '../types';

export const practicalGrammarLessons: GrammarLesson[] = [
  {
    id: 'g-pres-vs-cont',
    part: 1,
    partTitle: 'Daily Practical Grammar',
    slug: 'present-simple-vs-continuous',
    title: 'Present Simple vs Present Continuous (Roz ke Kaam vs Abhi Jo Ho Raha Hai)',
    level: 'Medium',
    durationMins: 12,
    simpleExplanation: 'Use Present Simple for daily habits, routines, and facts (what you do regularly). Use Present Continuous for actions happening right now at this exact moment.',
    romanHindiExplanation: 'Jab hum rozmarra ke kaamo ya aadaton ki baat karte hain (jaise: "Main roz subah 7 baje chai peeta hoon"), tab Present Simple lagta hai. Aur jab koi kaam abhi is waqt hamari aankhon ke saamne chal raha hai (jaise: "Main abhi chai pee raha hoon"), tab Present Continuous lagta hai.',
    formulaOrStructure: 'Routines: Subject + V1 (add -s/-es for he/she/it)\nRight Now: Subject + is/am/are + Verb-ing',
    examples: [
      { en: 'I drink black coffee every morning.', romanHindi: 'Main har subah black coffee peeta hoon.' },
      { en: 'Right now, I am drinking cold water.', romanHindi: 'Abhi is waqt, main thanda paani pee raha hoon.' },
      { en: 'Rahul works at a bank in Delhi.', romanHindi: 'Rahul Delhi ke ek bank mein kaam karta hai.' },
      { en: 'Look! He is talking to a client on the phone.', romanHindi: 'Dekho! Woh phone par ek client se baat kar raha hai.' },
      { en: 'She usually takes the metro to college.', romanHindi: 'Woh aamtaur par college ke liye metro leti hai.' },
      { en: 'Today, she is driving her brother\'s car because it is raining.', romanHindi: 'Aaj woh apne bhai ki car chala rahi hai kyunki barish ho rahi hai.' },
      { en: 'Do you live near the market?', romanHindi: 'Kya tum market ke paas rehte ho?' },
      { en: 'Why are you walking so fast right now?', romanHindi: 'Tum abhi itni tezi se kyun chal rahe ho?' }
    ],
    commonMistakes: [
      {
        wrong: 'I am knowing him very well.',
        correct: 'I know him very well.',
        reason: 'Mental state verbs like "know", "like", "understand" express feelings, not physical actions. Never say "I am knowing".',
        romanHindiReason: 'Know, understand, like jaisi baaton mein "-ing" nahi lagate. Hamesha "I know him" bolein.'
      },
      {
        wrong: 'He watch TV every night.',
        correct: 'He watches TV every night.',
        reason: 'With He / She / It in present routines, always add -s or -es to the verb.',
        romanHindiReason: 'He, She ya kisi ek naam ke saath verb mein "s" ya "es" lagana zaroori hai (watches).'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-1',
        type: 'fill_blank',
        prompt: 'Listen! Someone ______ (knocks / is knocking) at the door.',
        options: ['is knocking', 'knocks'],
        correctAnswer: 'is knocking',
        explanation: '"Listen!" signals an action happening right at this moment.',
        romanHindiTip: '"Suno!" se pata chalta hai ki kaam abhi chal raha hai, isliye "is knocking" aayega.'
      },
      {
        id: 'pe-2',
        type: 'fill_blank',
        prompt: 'My brother ______ (works / is working) at an IT company in Pune.',
        options: ['works', 'is working'],
        correctAnswer: 'works',
        explanation: 'Permanent jobs and routines take the Present Simple.',
        romanHindiTip: 'Job ek regular routine hai, isliye "works" aayega.'
      }
    ],
    quiz: [
      {
        id: 'q-1',
        question: 'Which sentence correctly describes a daily routine?',
        options: [
          'I am going for a jog every morning at 6 AM.',
          'I go for a jog every morning at 6 AM.',
          'I goes for a jog every morning at 6 AM.',
          'I am go for a jog every morning at 6 AM.'
        ],
        correctIndex: 1,
        explanation: 'With "I", use base verb "go" for daily routines.',
        romanHindiTip: '"I" ke saath roz ke kaam ke liye seedha "go" aata hai.'
      },
      {
        id: 'q-2',
        question: 'Choose the correct sentence for what is happening right now:',
        options: [
          'Wait, I talk with my manager.',
          'Wait, I am talking with my manager.',
          'Wait, I talks with my manager.',
          'Wait, I am talk with my manager.'
        ],
        correctIndex: 1,
        explanation: 'Action in progress right now takes "am talking".',
        romanHindiTip: 'Abhi chal rahe kaam ke liye "am talking" aayega.'
      }
    ]
  },
  {
    id: 'g-past-simple',
    part: 1,
    partTitle: 'Daily Practical Grammar',
    slug: 'past-simple',
    title: 'Past Simple (Kal Jo Hua – Talking About Yesterday & Past Events)',
    level: 'Medium',
    durationMins: 12,
    simpleExplanation: 'Use the Past Simple to talk about completed actions that happened at a specific time in the past (yesterday, last weekend, two days ago, in 2022).',
    romanHindiExplanation: 'Jab bhi hum kal, pichhle hafte, ya kisi beete hue waqt ki baat karte hain (jaise: "Main kal market gaya tha", "Humne pizza khaya"), tab verb ka second form (V2) lagta hai. Negative aur question mein "Did" ke saath V1 lagta hai.',
    formulaOrStructure: 'Positive: Subject + V2 (went, called, bought, met)\nNegative: Subject + did not + V1 (did not go, did not call)\nQuestion: Did + Subject + V1 + ? (Did you go?)',
    examples: [
      { en: 'I saw a great movie yesterday evening.', romanHindi: 'Maine kal shaam ek badhiya movie dekhi.' },
      { en: 'We ate dinner at a small Italian restaurant.', romanHindi: 'Humne ek chhote Italian restaurant mein dinner kiya.' },
      { en: 'Did you call Rohit yesterday afternoon?', romanHindi: 'Kya tumne kal dopahar Rohit ko call kiya tha?' },
      { en: 'I did not receive your WhatsApp message.', romanHindi: 'Mujhe tumhara WhatsApp message nahi mila tha.' },
      { en: 'She bought a new laptop last weekend.', romanHindi: 'Usne pichhle weekend ek naya laptop khareeda.' },
      { en: 'They moved to this city three years ago.', romanHindi: 'Woh teen saal pehle is shahar mein shift hue the.' },
      { en: 'Why did you leave the party so early?', romanHindi: 'Tum party se itni jaldi kyun nikal gaye the?' }
    ],
    commonMistakes: [
      {
        wrong: 'Did you called him yesterday?',
        correct: 'Did you call him yesterday?',
        reason: 'Whenever you use "Did", the main verb MUST revert to its first form (call, not called).',
        romanHindiReason: 'Jab bhi "Did" aa jata hai, toh verb ka pehla form (V1: call) lagta hai, "called" nahi.'
      },
      {
        wrong: 'I didn\'t went to the office.',
        correct: 'I didn\'t go to the office.',
        reason: 'After "didn\'t", always use base verb "go", never "went".',
        romanHindiReason: '"Didn\'t" ke baad hamesha "go" aayega, "went" nahi.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-ps-1',
        type: 'fill_blank',
        prompt: 'I ______ (met / meet) an old school friend at the mall yesterday.',
        options: ['met', 'meet'],
        correctAnswer: 'met',
        explanation: '"Yesterday" requires past tense V2 "met".',
        romanHindiTip: 'Kal ki baat hai isliye verb ka second form "met" aayega.'
      }
    ],
    quiz: [
      {
        id: 'q-ps-1',
        question: 'Which question is grammatically correct?',
        options: [
          'Did you went to market yesterday?',
          'Did you go to market yesterday?',
          'Did you gone to market yesterday?',
          'Do you went to market yesterday?'
        ],
        correctIndex: 1,
        explanation: 'Did + subject + base form (go).',
        romanHindiTip: 'Did ke baad hamesha verb ka pehla form "go" lagta hai.'
      }
    ]
  },
  {
    id: 'g-future-forms',
    part: 1,
    partTitle: 'Daily Practical Grammar',
    slug: 'future-forms',
    title: 'Future Forms: Will vs Going To (Aane Wale Kal Ke Plans)',
    level: 'Medium',
    durationMins: 12,
    simpleExplanation: 'Use "WILL" for instant decisions made right now at this moment or promises. Use "BE GOING TO" for plans you decided before or predictions with visible proof.',
    romanHindiExplanation: 'Jab aap turant bolte waqt koi faisla lete hain (jaise: phone baj raha hai, "Main uthata hoon - I will answer it"), tab "will" lagta hai. Par jab aapne pehle se plan bana rakha hai (jaise: "Main agle hafte car khareedne wala hoon - I am going to buy a car"), tab "going to" lagta hai.',
    formulaOrStructure: 'Instant decision: Subject + will + V1 ("I will help you")\nPre-arranged plan: Subject + am/is/are + going to + V1 ("I am going to visit Mumbai")',
    examples: [
      { en: 'Don\'t carry those heavy bags alone; I will help you.', romanHindi: 'Woh bhaari bags akele mat uthao; main tumhari madad karta hoon.' },
      { en: 'I am going to start going to the gym next Monday.', romanHindi: 'Main agle somwar se gym jana shuru karne wala hoon.' },
      { en: 'Look at those dark clouds; it is going to rain soon.', romanHindi: 'Un kaale baadlon ko dekho; jaldi hi barish hone wali hai.' },
      { en: 'I will definitely send you the location on WhatsApp.', romanHindi: 'Main WhatsApp par tumhe location pakka bhej doonga.' },
      { en: 'We are going to meet our college friends this Saturday.', romanHindi: 'Hum is shanivaar apne college ke dosto se milne wale hain.' }
    ],
    commonMistakes: [
      {
        wrong: 'The phone is ringing. I am going to answer it.',
        correct: 'The phone is ringing. I will answer it.',
        reason: 'Answering a ringing phone is an instant decision, which takes "will".',
        romanHindiReason: 'Turant phone bajte hi uthane ka faisla lene ke liye "I will answer it" bolein.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-ff-1',
        type: 'fill_blank',
        prompt: 'A: "I have a headache." B: "Wait, I ______ (will get / am going to get) you some water."',
        options: ['will get', 'am going to get'],
        correctAnswer: 'will get',
        explanation: 'Instant spontaneous offer takes "will".',
        romanHindiTip: 'Turant madad ka offer dene ke liye "will get" sahi hai.'
      }
    ],
    quiz: [
      {
        id: 'q-ff-1',
        question: 'Which sentence describes a pre-planned intention correctly?',
        options: [
          'I am going to learn driving next month; I already booked my classes.',
          'I will learn driving next month; I already booked my classes.',
          'I learn driving next month.',
          'I shall be learn driving.'
        ],
        correctIndex: 0,
        explanation: 'Pre-planned intentions with booked arrangements use "going to".',
        romanHindiTip: 'Pehle se taiyaar plan ke liye "am going to" lagta hai.'
      }
    ]
  },
  {
    id: 'g-present-perfect',
    part: 2,
    partTitle: 'Daily Practical Grammar',
    slug: 'present-perfect',
    title: 'Present Perfect (Life Experiences & Recent Actions: Have/Has + V3)',
    level: 'Medium',
    durationMins: 14,
    simpleExplanation: 'Use Present Perfect (have/has + V3) to talk about life experiences ("Have you ever...?"), or actions just completed with current impact. Never use specific past time words like "yesterday" with this tense.',
    romanHindiExplanation: 'Jab aap kisi life experience ki baat karte hain (jaise: "Kya tumne kabhi sushi khayi hai? - Have you ever eaten sushi?"), ya koi kaam abhi-abhi khatam hua hai (jaise: "Maine lunch kar liya hai - I have eaten lunch"), tab have/has + V3 lagta hai. Iske saath "yesterday" kabhi nahi lagate!',
    formulaOrStructure: 'Subject + have/has + V3 (Past Participle)\nI / You / We / They + have + V3\nHe / She / It + has + V3',
    examples: [
      { en: 'I have visited Goa three times with my family.', romanHindi: 'Main apni family ke saath teen baar Goa ja chuka hoon.' },
      { en: 'Have you ever tried authentic Italian pizza?', romanHindi: 'Kya tumne kabhi asli Italian pizza try kiya hai?' },
      { en: 'She has already finished her work for today.', romanHindi: 'Usne aaj ka apna kaam pehle hi khatam kar liya hai.' },
      { en: 'I have just received an email from my manager.', romanHindi: 'Mujhe abhi-abhi mere manager ka email mila hai.' },
      { en: 'We have lived in this apartment for four years.', romanHindi: 'Hum pichhle chaar saalon se is apartment mein reh rahe hain.' }
    ],
    commonMistakes: [
      {
        wrong: 'I have seen him yesterday at the bus stand.',
        correct: 'I saw him yesterday at the bus stand.',
        reason: 'When "yesterday" is mentioned, you MUST use Past Simple (saw), not Present Perfect.',
        romanHindiReason: '"Yesterday" ke saath hamesha Past Simple "saw" aayega, "have seen" nahi.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-pp-1',
        type: 'fill_blank',
        prompt: 'Have you ______ (ever / never) been to Kerala?',
        options: ['ever', 'never'],
        correctAnswer: 'ever',
        explanation: 'Use "ever" in questions asking about life experiences.',
        romanHindiTip: 'Sawaal poochhte waqt "ever" ka use karte hain ("Kya kabhi...?").'
      }
    ],
    quiz: [
      {
        id: 'q-pp-1',
        question: 'Which sentence is grammatically correct?',
        options: [
          'I have watched that movie yesterday.',
          'I watched that movie yesterday.',
          'I have watch that movie yesterday.',
          'I watching that movie yesterday.'
        ],
        correctIndex: 1,
        explanation: 'With "yesterday", use the simple past "watched".',
        romanHindiTip: 'Yesterday ke saath seedha "watched" aayega.'
      }
    ]
  },
  {
    id: 'g-modal-verbs',
    part: 2,
    partTitle: 'Daily Practical Grammar',
    slug: 'modal-verbs',
    title: 'Modal Verbs: Can, Could, Should, Must, Might (Roz ke Helpers)',
    level: 'Medium',
    durationMins: 12,
    simpleExplanation: 'Modal verbs add polite meaning, permission, ability, advice, or necessity to your sentences. Always follow a modal with a base verb without "to".',
    romanHindiExplanation: 'Modals hamari rozana ki baaton ko polite aur clear banate hain:\n- Can: Taakat ya kabiliyat (kar sakta hoon)\n- Could: Polite request (Kya aap please...)\n- Should: Sallaah / Advice (Karna chahiye)\n- Must: Zaroori / Farz (Bilkul karna hoga)\n- Might: Thodi si sambhavna (Shaayad ho sakta hai)\nNiyam: Modal ke baad hamesha verb ka pehla form aayega, kabhi "to" nahi lagta.',
    formulaOrStructure: 'Subject + Modal (can/could/should/must/might) + Base Verb (V1)',
    examples: [
      { en: 'Could you please pass me the salt?', romanHindi: 'Kya aap please namak aage badha sakte hain?' },
      { en: 'You should sleep at least seven hours every night.', romanHindi: 'Aapko har raat kam se kam saat ghante sona chahiye.' },
      { en: 'It might rain later this evening, so take an umbrella.', romanHindi: 'Aaj shaam ko shaayad barish ho sakti hai, isliye chhaata le lo.' },
      { en: 'We must wear a helmet while riding a two-wheeler.', romanHindi: 'Bike chalate waqt humein helmet zaroor pehanna chahiye.' },
      { en: 'Can you speak English a little bit slower, please?', romanHindi: 'Kya aap thoda dheere English bol sakte hain, please?' }
    ],
    commonMistakes: [
      {
        wrong: 'You should to call him.',
        correct: 'You should call him.',
        reason: 'Never use "to" after should, can, could, must, or might.',
        romanHindiReason: 'Should ke baad "to" kabhi mat lagayein. Seedha "should call" bolein.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-mv-1',
        type: 'fill_blank',
        prompt: 'You ______ (should / must to) drink plenty of water during hot summer days.',
        options: ['should', 'must to'],
        correctAnswer: 'should',
        explanation: 'Modals do not take "to".',
        romanHindiTip: 'Salah dene ke liye seedha "should" lagta hai.'
      }
    ],
    quiz: [
      {
        id: 'q-mv-1',
        question: 'Which is the most polite way to ask for someone\'s phone in an emergency?',
        options: [
          'Give me your phone now.',
          'Could I please use your phone for an urgent call?',
          'I must use your phone.',
          'You should give me phone.'
        ],
        correctIndex: 1,
        explanation: '"Could I please..." is the most courteous and natural English request.',
        romanHindiTip: 'Polite request ke liye "Could I please..." sabse behtar tareeka hai.'
      }
    ]
  },
  {
    id: 'g-prepositions-articles',
    part: 3,
    partTitle: 'Daily Practical Grammar',
    slug: 'prepositions-and-articles',
    title: 'Prepositions & Articles (In, On, At & A, An, The)',
    level: 'Medium',
    durationMins: 14,
    simpleExplanation: 'Prepositions connect time and places: At for exact clock time, On for days/dates, In for months/years. Articles: A for consonant sounds, An for vowel sounds (sound, not spelling!).',
    romanHindiExplanation: 'Time ke liye rules yaad rakhein:\n- AT: Ghadi ka exact time (at 5:00 PM, at night)\n- ON: Din aur tareekh (on Monday, on 15th August)\n- IN: Mahina, saal, subah/shaam (in July, in 2026, in the morning)\nArticles: An tab lagta hai jab aawaz swar (a, e, i, o, u) jaisi nikle (jaise: an honest man, an hour).',
    formulaOrStructure: 'At 9:00 AM | On Sunday | In the evening\nA book | An apple | An hour (silent h) | The sun (unique)',
    examples: [
      { en: 'The webinar will begin at 4:30 PM on Thursday.', romanHindi: 'Webinar guruwaar ko shaam 4:30 baje shuru hoga.' },
      { en: 'She was born in Mumbai in 1998.', romanHindi: 'Uska janam 1998 mein Mumbai mein hua tha.' },
      { en: 'He is an honest police officer.', romanHindi: 'Woh ek imaandar police officer hain.' },
      { en: 'Can you meet me at the cafe on MG Road?', romanHindi: 'Kya tum mujhe MG Road wale cafe par mil sakte ho?' },
      { en: 'I saw a dog in the park; the dog was playing happily.', romanHindi: 'Maine park mein ek kutta dekha; woh kutta maze se khel raha tha.' }
    ],
    commonMistakes: [
      {
        wrong: 'I will see you on next Monday.',
        correct: 'I will see you next Monday.',
        reason: 'Never use on/at/in before words like "next", "last", or "this".',
        romanHindiReason: '"Next", "last", ya "this" ke aage on/at nahi lagate.'
      },
      {
        wrong: 'He is an European tourist.',
        correct: 'He is a European tourist.',
        reason: '"European" starts with a consonant "Y" sound (/jʊərəˈpiːən/), so use "a".',
        romanHindiReason: 'European ka pehla sound "Y" (vyānjan) hai, isliye "a" lagta hai.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-pa-1',
        type: 'fill_blank',
        prompt: 'The train arrives ______ 8:15 AM ______ Sunday. (at / on / in)',
        options: ['at, on', 'on, at', 'in, on'],
        correctAnswer: 'at, on',
        explanation: 'At for time, On for day.',
        romanHindiTip: 'Time ke liye At, Din ke liye On.'
      }
    ],
    quiz: [
      {
        id: 'q-pa-1',
        question: 'Choose the correct sentence:',
        options: [
          'He has been waiting for an hour.',
          'He has been waiting for a hour.',
          'He has been waiting for the hour in morning.',
          'He has been wait on hour.'
        ],
        correctIndex: 0,
        explanation: '"Hour" has a silent "h", starting with a vowel sound, taking "an".',
        romanHindiTip: 'Hour mein "h" silent hota hai, isliye "an hour" aayega.'
      }
    ]
  },
  {
    id: 'g-connecting-sentences',
    part: 3,
    partTitle: 'Daily Practical Grammar',
    slug: 'connecting-sentences',
    title: 'Connecting Sentences (And, But, Because, So, Although, However)',
    level: 'Medium',
    durationMins: 12,
    simpleExplanation: 'Connectors turn choppy, short sentences into smooth, natural, and confident English conversation.',
    romanHindiExplanation: 'Chhote-chhote tute hue sentences bolne ke bajaay connectors ka use karein:\n- Because: Wajah batane ke liye (kyunki)\n- So: Nateeja batane ke liye (isliye)\n- But / However: Ulti baat ya contrast batane ke liye (lekin / phir bhi)\n- Although: Halaanki / Bhale hi',
    formulaOrStructure: 'Reason: I stayed home BECAUSE it was raining.\nResult: It was raining, SO I stayed home.\nContrast: I was tired, BUT I finished my work.\nContrast: I was tired. HOWEVER, I finished my work.',
    examples: [
      { en: 'I wanted to buy the shirt, but it was too expensive.', romanHindi: 'Main woh shirt khareedna chahta tha, lekin woh kafi mehngi thi.' },
      { en: 'He practiced speaking daily, so he cleared the interview.', romanHindi: 'Usne roz bolne ki practice ki, isliye uska interview nikal gaya.' },
      { en: 'Although she was feeling tired, she cooked a delicious meal.', romanHindi: 'Halaanki woh thaki hui thi, phir bhi usne lazeez khana banaya.' },
      { en: 'We planned to go to the park; however, the weather turned cold.', romanHindi: 'Humne park jane ka plan banaya tha; lekin mausam thanda ho gaya.' },
      { en: 'I am learning English because it will help my career grow.', romanHindi: 'Main English seekh raha hoon kyunki yeh mere career ko aage badhayega.' }
    ],
    commonMistakes: [
      {
        wrong: 'Although he was tired, but he went to work.',
        correct: 'Although he was tired, he went to work.',
        reason: 'Do not use both "although" and "but" in the same sentence. Use either one or the other.',
        romanHindiReason: 'Although aur But dono ek saath mat lagayein. Sirf "Although he was tired, he went to work" bolein.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-cs-1',
        type: 'fill_blank',
        prompt: 'The traffic was heavy, ______ (so / because) I arrived 15 minutes late.',
        options: ['so', 'because'],
        correctAnswer: 'so',
        explanation: '"So" shows the result of the heavy traffic.',
        romanHindiTip: 'Nateeja batane ke liye "so" (isliye) lagta hai.'
      }
    ],
    quiz: [
      {
        id: 'q-cs-1',
        question: 'Which sentence correctly connects two contrasting ideas?',
        options: [
          'Although he worked hard, but he missed the target.',
          'Although he worked hard, he missed the target.',
          'Because he worked hard, so he missed the target.',
          'He worked hard because he missed the target.'
        ],
        correctIndex: 1,
        explanation: 'Option 2 properly uses "Although" without the redundant "but".',
        romanHindiTip: 'Although ke saath doosra "but" nahi lagaya jata.'
      }
    ]
  }
];

export const allGrammarLessons = practicalGrammarLessons;

export const grammarPartsInfo = [
  { part: 1, title: 'Part 1: Daily Grammar Foundations', description: 'Present routines, past experiences, and basic sentence flow.' },
  { part: 2, title: 'Part 2: Essential Tenses & Actions', description: 'Future plans, present perfect, and ongoing actions.' },
  { part: 3, title: 'Part 3: Conversational Modals & Prepositions', description: 'Polite requests, permission, and time/place prepositions.' },
  { part: 4, title: 'Part 4: Connected Sentences & Natural Phrasing', description: 'Joining ideas with although, however, because, and so.' }
];

export function getLessonBySlug(slug: string): GrammarLesson | undefined {
  return practicalGrammarLessons.find(l => l.slug === slug);
}

export function getLessonById(id: string): GrammarLesson | undefined {
  return practicalGrammarLessons.find(l => l.id === id);
}
