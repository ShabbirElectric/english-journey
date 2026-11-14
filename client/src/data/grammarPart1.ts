import { GrammarLesson } from '../types';

export const grammarPart1Lessons: GrammarLesson[] = [
  {
    id: 'g-part1-1',
    part: 1,
    partTitle: 'Part 1: Grammar Foundations',
    slug: 'sentence-structure',
    title: 'Sentence Structure (S-V-O & Clauses)',
    level: 'A1',
    durationMins: 15,
    simpleExplanation: 'A complete English sentence must have at least a Subject (who or what performs the action) and a Predicate containing a Verb (what happens). Most basic English sentences follow the S-V-O order: Subject + Verb + Object.',
    formulaOrStructure: 'Subject + Verb + Object (S + V + O)\nExample: Rohan (Subject) + eats (Verb) + an apple (Object).',
    hindiExplanation: 'अंग्रेजी में वाक्य का मुख्य क्रम कर्ता (Subject) + क्रिया (Verb) + कर्म (Object) होता है। हिंदी के विपरीत जहां क्रिया अंत में आती है (जैसे "रोहन सेब खाता है"), अंग्रेजी में क्रिया हमेशा कर्म से पहले आती है ("Rohan eats an apple")।',
    examples: [
      { en: 'Maria drinks warm water every morning.', hi: 'मारिया हर सुबह गुनगुना पानी पीती है।' },
      { en: 'The students finished their homework early.', hi: 'छात्रों ने अपना होमवर्क जल्दी पूरा कर लिया।' },
      { en: 'Our teacher explains grammar rules very clearly.', hi: 'हमारे शिक्षक व्याकरण के नियमों को बहुत स्पष्ट रूप से समझाते हैं।' },
      { en: 'He bought a new laptop for his programming course.', hi: 'उसने अपने प्रोग्रामिंग कोर्स के लिए एक नया लैपटॉप खरीदा।' },
      { en: 'They enjoy playing badminton on Sunday evenings.', hi: 'वे रविवार की शाम बैडमिंटन खेलना पसंद करते हैं।' }
    ],
    commonMistakes: [
      {
        wrong: 'I English learn every day.',
        correct: 'I learn English every day.',
        reason: 'Do not put the Object before the Verb. Always follow S + V + O in positive statements.'
      },
      {
        wrong: 'In the morning went to the office.',
        correct: 'In the morning, he went to the office.',
        reason: 'An English sentence must have an explicit Subject pronoun (he/she/they/I).'
      },
      {
        wrong: 'Eats apple Rohan.',
        correct: 'Rohan eats an apple.',
        reason: 'The subject comes first, then the verb, then the object.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-1-1',
        type: 'fill_blank',
        prompt: 'Choose the correct word order: "The doctor ______ (examined carefully the patient / carefully examined the patient)."',
        options: ['carefully examined the patient', 'examined carefully the patient'],
        correctAnswer: 'carefully examined the patient',
        hint: 'Adverbs often go between the subject and main verb, or after the object.',
        explanation: 'In English, we do not separate the verb and its direct object ("examined the patient"). The adverb goes before the verb or at the end.'
      },
      {
        id: 'pe-1-2',
        type: 'reorder',
        prompt: 'Reorder: [plays / Rahul / football / in the park]',
        correctAnswer: 'Rahul plays football in the park',
        explanation: 'Subject (Rahul) + Verb (plays) + Object (football) + Place (in the park).'
      }
    ],
    quiz: [
      {
        id: 'q-1-1',
        question: 'Identify the Subject in this sentence: "Yesterday afternoon, my elder sister baked delicious chocolate cookies."',
        options: ['Yesterday afternoon', 'delicious chocolate cookies', 'my elder sister', 'baked'],
        correctIndex: 2,
        explanation: '"My elder sister" is the person performing the action (baking), making her the Subject.',
        hindiTip: 'जो काम करता है वह कर्ता (Subject) होता है।'
      },
      {
        id: 'q-1-2',
        question: 'Which of the following is a grammatically complete sentence?',
        options: ['Because it was raining heavily.', 'Birds fly in the sky.', 'Singing in the shower loudly.', 'Under the old wooden bridge.'],
        correctIndex: 1,
        explanation: '"Birds fly in the sky" has a subject (Birds) and a finite verb (fly). The others are dependent clauses or phrases.',
        hindiTip: 'पूर्ण वाक्य में हमेशा एक स्वतंत्र Subject और Verb होना चाहिए।'
      },
      {
        id: 'q-1-3',
        question: 'Choose the sentence with correct English word order:',
        options: ['She speaks very well French.', 'She speaks French very well.', 'Speaks she French very well.', 'She French speaks very well.'],
        correctIndex: 1,
        explanation: 'The verb (speaks) and the direct object (French) should remain together, followed by the manner adverbial (very well).',
        hindiTip: 'Verb और Object के बीच आमतौर पर Adverb नहीं डालते।'
      }
    ]
  },
  {
    id: 'g-part1-2',
    part: 1,
    partTitle: 'Part 1: Grammar Foundations',
    slug: 'parts-of-speech',
    title: 'Parts of Speech (8 Building Blocks)',
    level: 'A1',
    durationMins: 18,
    simpleExplanation: 'Every word in English belongs to one of eight parts of speech according to its function: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, and Interjection.',
    formulaOrStructure: 'Noun (Name) | Pronoun (Replaces Noun) | Verb (Action/State) | Adjective (Describes Noun) | Adverb (Describes Verb/Adj) | Preposition (Shows relation) | Conjunction (Connects) | Interjection (Emotion)',
    hindiExplanation: 'शब्द भेद (Parts of Speech) भाषा के 8 मूल स्तंभ हैं: संज्ञा (Noun), सर्वनाम (Pronoun), क्रिया (Verb), विशेषण (Adjective), क्रियाविशेषण (Adverb), संबंधबोधक (Preposition), समुच्चयबोधक (Conjunction), विस्मयादिबोधक (Interjection)।',
    examples: [
      { en: 'The quick brown fox jumps over the lazy dog.', hi: 'तेज भूरी लोमड़ी सुस्त कुत्ते के ऊपर से कूदती है।' },
      { en: 'She spoke softly because the baby was sleeping peacefully.', hi: 'वह धीरे से बोली क्योंकि बच्चा शांति से सो रहा था।' },
      { en: 'Knowledge and dedication bring lasting success.', hi: 'ज्ञान और समर्पण स्थायी सफलता लाते हैं।' },
      { en: 'Wow! That was an incredible performance by the young artist.', hi: 'वाह! उस युवा कलाकार द्वारा यह एक अविश्वसनीय प्रदर्शन था।' },
      { en: 'He walked into the conference room with immense confidence.', hi: 'वह अत्यधिक आत्मविश्वास के साथ सम्मेलन कक्ष में दाखिल हुआ।' }
    ],
    commonMistakes: [
      {
        wrong: 'He drives very fastly.',
        correct: 'He drives very fast.',
        reason: '"Fast" is both an adjective and an adverb. The word "fastly" does not exist in standard English.'
      },
      {
        wrong: 'She is a very well singer.',
        correct: 'She is a very good singer.',
        reason: 'Use the adjective "good" to modify the noun "singer", not the adverb "well".'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-2-1',
        type: 'identify',
        prompt: 'In the sentence "The heavy rain stopped suddenly", what part of speech is "suddenly"?',
        options: ['Adjective', 'Adverb', 'Verb', 'Noun'],
        correctAnswer: 'Adverb',
        hint: 'It tells HOW the rain stopped.',
        explanation: '"Suddenly" describes the manner of the verb "stopped", so it is an Adverb.'
      }
    ],
    quiz: [
      {
        id: 'q-2-1',
        question: 'What part of speech is "under" in: "The cat is hiding under the bed"?',
        options: ['Conjunction', 'Preposition', 'Adverb', 'Pronoun'],
        correctIndex: 1,
        explanation: '"Under" shows the spatial relationship between the cat and the bed, making it a Preposition.',
        hindiTip: 'Preposition स्थान या दिशा का संबंध दर्शाता है।'
      },
      {
        id: 'q-2-2',
        question: 'In "Happiness comes from within", what part of speech is "Happiness"?',
        options: ['Verb', 'Adjective', 'Abstract Noun', 'Adverb'],
        correctIndex: 2,
        explanation: '"Happiness" is an abstract noun representing a feeling or state of being.',
        hindiTip: 'भाववाचक संज्ञा (Abstract Noun) किसी गुण या भावना का नाम है।'
      }
    ]
  },
  {
    id: 'g-part1-3',
    part: 1,
    partTitle: 'Part 1: Grammar Foundations',
    slug: 'nouns',
    title: 'Nouns (Types, Countable & Uncountable)',
    level: 'A1',
    durationMins: 15,
    simpleExplanation: 'A noun is a word that names a person, place, thing, idea, or quality. Countable nouns can be counted individually (one chair, two chairs) while uncountable nouns cannot (water, furniture, advice).',
    formulaOrStructure: 'Countable: Singular (a/an book) → Plural (books, many books)\nUncountable: Singular verb only (much milk, some information, NOT "an advice")',
    hindiExplanation: 'संज्ञा (Noun) किसी व्यक्ति, स्थान, वस्तु या भाव का नाम है। गणनीय संज्ञा (Countable) को गिना जा सकता है (जैसे किताब/किताबें)। अगणनीय संज्ञा (Uncountable) को गिना नहीं जा सकता (जैसे पानी, सलाह, जानकारी)। Uncountable के आगे a/an या "s" नहीं लगता।',
    examples: [
      { en: 'Could you give me some advice regarding my career?', hi: 'क्या आप मुझे अपने करियर के संबंध में कुछ सलाह दे सकते हैं?' },
      { en: 'The modern furniture in their living room looks stylish.', hi: 'उनके लिविंग रूम का आधुनिक फर्नीचर आकर्षक दिखता है।' },
      { en: 'She bought three fresh loaves of bread from the bakery.', hi: 'उसने बेकरी से ब्रेड के तीन ताजे लोफ खरीदे।' },
      { en: 'Patience and perseverance are essential virtues.', hi: 'धैर्य और दृढ़ता आवश्यक गुण हैं।' },
      { en: 'He shared valuable information about the upcoming examination.', hi: 'उसने आगामी परीक्षा के बारे में बहुमूल्य जानकारी साझा की।' }
    ],
    commonMistakes: [
      {
        wrong: 'She gave me an advice.',
        correct: 'She gave me a piece of advice. (or some advice)',
        reason: '"Advice" is uncountable. Never say "an advice" or "advices".'
      },
      {
        wrong: 'All the furnitures were damaged during shifting.',
        correct: 'All the furniture was damaged during shifting.',
        reason: '"Furniture" is uncountable and takes a singular verb.'
      },
      {
        wrong: 'I have many works today.',
        correct: 'I have a lot of work today. (or much work to do)',
        reason: '"Work" meaning employment or tasks is uncountable.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-3-1',
        type: 'fill_blank',
        prompt: 'The police ______ investigating the incident. (is / are)',
        options: ['are', 'is'],
        correctAnswer: 'are',
        hint: '"Police" is a plural collective noun.',
        explanation: 'In English, "police" is treated as a plural noun and takes the plural verb "are".'
      }
    ],
    quiz: [
      {
        id: 'q-3-1',
        question: 'Which of the following nouns is UNCOUNTABLE?',
        options: ['Luggage', 'Suitcase', 'Bag', 'Passport'],
        correctIndex: 0,
        explanation: '"Luggage" is an uncountable mass noun. We count "pieces of luggage" or "bags".',
        hindiTip: 'Luggage और Baggage हमेशा uncountable होते हैं।'
      },
      {
        id: 'q-3-2',
        question: 'Choose the correct sentence:',
        options: [
          'The news are very shocking today.',
          'The news is very shocking today.',
          'A news is very shocking today.',
          'The news were very shocking today.'
        ],
        correctIndex: 1,
        explanation: '"News" looks plural because of the "s", but it is an uncountable singular noun requiring "is".',
        hindiTip: 'News हमेशा एकवचन (singular verb) लेता है।'
      }
    ]
  },
  {
    id: 'g-part1-4',
    part: 1,
    partTitle: 'Part 1: Grammar Foundations',
    slug: 'pronouns',
    title: 'Pronouns (Subject, Object, Possessive, Reflexive)',
    level: 'A1',
    durationMins: 16,
    simpleExplanation: 'Pronouns replace nouns to avoid repetition. They change form depending on whether they act as the subject (I, he, she, they), the object (me, him, her, them), show possession (my/mine, his, their/theirs), or reflect back on the subject (myself, himself).',
    formulaOrStructure: 'Subject: I, You, He, She, It, We, They\nObject: Me, You, Him, Her, It, Us, Them\nPossessive: My/Mine, Your/Yours, His, Her/Hers, Their/Theirs\nReflexive: Myself, Yourself, Himself, Herself, Themselves',
    hindiExplanation: 'सर्वनाम (Pronouns) संज्ञा के स्थान पर आते हैं। जब व्यक्ति काम करता है तो Subject Pronoun (I, He, She) का उपयोग होता है, जब उस पर काम का असर होता है तो Object Pronoun (Me, Him, Her) का उपयोग होता है।',
    examples: [
      { en: 'Amit called me yesterday, and I invited him to the party.', hi: 'अमित ने कल मुझे फोन किया, और मैंने उसे पार्टी में आमंत्रित किया।' },
      { en: 'This notebook is mine, but that blue pen is yours.', hi: 'यह नोटबुक मेरी है, लेकिन वह नीली कलम तुम्हारी है।' },
      { en: 'She prepared the entire presentation by herself.', hi: 'उसने पूरी प्रस्तुति खुद तैयार की।' },
      { en: 'Between you and me, the new manager is very polite.', hi: 'तुम्हारे और मेरे बीच की बात है, नया प्रबंधक बहुत विनम्र है।' },
      { en: 'They repaired the bicycle themselves without calling a mechanic.', hi: 'उन्होंने मैकेनिक को बुलाए बिना साइकिल की मरम्मत खुद की।' }
    ],
    commonMistakes: [
      {
        wrong: 'Me and Rahul went to the market.',
        correct: 'Rahul and I went to the market.',
        reason: 'When part of the subject, use the subject pronoun "I", and place the other person first out of politeness.'
      },
      {
        wrong: 'Between you and I, this plan is risky.',
        correct: 'Between you and me, this plan is risky.',
        reason: 'Prepositions ("between") require object pronouns ("me", not "I").'
      },
      {
        wrong: 'Myself is Sunita.',
        correct: 'I am Sunita. (or My name is Sunita)',
        reason: 'A reflexive pronoun ("myself") cannot stand alone as the subject of a sentence.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-4-1',
        type: 'fill_blank',
        prompt: 'The teacher praised Sarah and ______ (I / me) for our project work.',
        options: ['me', 'I'],
        correctAnswer: 'me',
        hint: 'Are you the subject or the object of "praised"?',
        explanation: '"Sarah and me" are the objects receiving the action of "praised". Hence, use "me".'
      }
    ],
    quiz: [
      {
        id: 'q-4-1',
        question: 'Select the correct pronoun: "Everyone must submit ______ assignment before Friday."',
        options: ['their', 'theirs', 'his or her', 'they'],
        correctIndex: 0,
        explanation: 'In modern English, singular "their" is widely accepted and standard for indefinite pronouns like "everyone".',
        hindiTip: 'Everyone / Someone के लिए सर्वनाम "their" सामान्य रूप से प्रयोग होता है।'
      },
      {
        id: 'q-4-2',
        question: 'Which sentence correctly uses a reflexive pronoun?',
        options: [
          'Myself went to the station.',
          'He hurt himself while playing football.',
          'Please give the file to myself.',
          'Ravi and myself will handle this.'
        ],
        correctIndex: 1,
        explanation: '"Himself" correctly reflects the subject "He" receiving the action of injuring.',
        hindiTip: 'Reflexive pronoun केवल तब आता है जब Subject और Object एक ही व्यक्ति हों।'
      }
    ]
  },
  {
    id: 'g-part1-5',
    part: 1,
    partTitle: 'Part 1: Grammar Foundations',
    slug: 'verbs',
    title: 'Verbs (Action, State & Transitive/Intransitive)',
    level: 'A1',
    durationMins: 16,
    simpleExplanation: 'Verbs express actions (run, speak, build) or states of being (be, seem, know, love). Transitive verbs require a direct object to complete their meaning (e.g., "She made a cake"), while intransitive verbs do not need an object (e.g., "The baby smiled").',
    formulaOrStructure: 'Transitive: Subject + Verb + Direct Object ("He kicked the ball")\nIntransitive: Subject + Verb (+ Adverbial) ("She arrived late")',
    hindiExplanation: 'क्रिया (Verb) किसी कार्य (Action) या स्थिति (State) को दर्शाती है। सकर्मक क्रिया (Transitive) को कर्म (Object) की जरूरत होती है (जैसे "उसने पत्र लिखा")। अकर्मक क्रिया (Intransitive) बिना कर्म के भी पूर्ण होती है (जैसे "वह हंसा")।',
    examples: [
      { en: 'The chef baked delicious sourdough bread this morning.', hi: 'शेफ ने आज सुबह स्वादिष्ट साउरडो ब्रेड बनाई।' },
      { en: 'The sun rose over the majestic Himalayan peaks.', hi: 'हिमालय की भव्य चोटियों पर सूरज उग आया।' },
      { en: 'She knows the answer to that challenging question.', hi: 'वह उस चुनौतीपूर्ण प्रश्न का उत्तर जानती है।' },
      { en: 'They discussed the annual budget during the meeting.', hi: 'उन्होंने बैठक के दौरान वार्षिक बजट पर चर्चा की।' },
      { en: 'The train arrived on platform number four right on schedule.', hi: 'ट्रेन ठीक समय पर प्लेटफॉर्म नंबर चार पर पहुंची।' }
    ],
    commonMistakes: [
      {
        wrong: 'We discussed about the problem.',
        correct: 'We discussed the problem.',
        reason: '"Discuss" is a transitive verb; do not add the preposition "about" after it.'
      },
      {
        wrong: 'I am knowing him since childhood.',
        correct: 'I have known him since childhood.',
        reason: 'Stative verbs like "know" are not normally used in continuous (-ing) tenses.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-5-1',
        type: 'identify',
        prompt: 'Is the verb in "The baby slept peacefully" transitive or intransitive?',
        options: ['Intransitive', 'Transitive'],
        correctAnswer: 'Intransitive',
        hint: 'Is there a direct object answering "what" or "whom"?',
        explanation: '"Slept" has no object; "peacefully" is an adverb describing manner.'
      }
    ],
    quiz: [
      {
        id: 'q-5-1',
        question: 'Which of the following verbs is STATIVE (state of mind, not physical action)?',
        options: ['Understand', 'Run', 'Cook', 'Write'],
        correctIndex: 0,
        explanation: '"Understand" represents a mental state, not a visible physical action.',
        hindiTip: 'Stative क्रियाएं मानसिक स्थिति दर्शाती हैं और सामान्यतः Continuous tense में नहीं आतीं।'
      }
    ]
  },
  {
    id: 'g-part1-6',
    part: 1,
    partTitle: 'Part 1: Grammar Foundations',
    slug: 'helping-verbs',
    title: 'Helping Verbs (Auxiliary Verbs: Be, Do, Have)',
    level: 'A1',
    durationMins: 15,
    simpleExplanation: 'Helping (auxiliary) verbs accompany the main verb to create tenses, form questions, and make negative sentences. The three primary auxiliaries are Be (am/is/are/was/were), Do (do/does/did), and Have (have/has/had).',
    formulaOrStructure: 'Negative: Subject + Auxiliary + NOT + Main Verb\nQuestion: Auxiliary + Subject + Main Verb + ?\nBe + V-ing (Continuous) | Have + V3 (Perfect) | Do/Does/Did + V1 (Simple tenses)',
    hindiExplanation: 'सहायक क्रियाएं (Helping Verbs) मुख्य क्रिया के काल (Tense) और रूप को स्पष्ट करती हैं। नकारात्मक वाक्यों और प्रश्नों के लिए Be, Do और Have की महत्वपूर्ण भूमिका होती है।',
    examples: [
      { en: 'Does she work at the tech company in Bangalore?', hi: 'क्या वह बैंगलोर की टेक कंपनी में काम करती है?' },
      { en: 'They have completed all their assignment modules.', hi: 'उन्होंने अपने सभी असाइनमेंट मॉड्यूल पूरे कर लिए हैं।' },
      { en: 'I do not drink sweet tea in the evening.', hi: 'मैं शाम को मीठी चाय नहीं पीता हूँ।' },
      { en: 'We were waiting for the express train at the station.', hi: 'हम स्टेशन पर एक्सप्रेस ट्रेन का इंतजार कर रहे थे।' },
      { en: 'Did you lock the main entrance gate before leaving?', hi: 'क्या आपने जाने से पहले मुख्य प्रवेश द्वार पर ताला लगाया था?' }
    ],
    commonMistakes: [
      {
        wrong: 'Did you went to school yesterday?',
        correct: 'Did you go to school yesterday?',
        reason: 'After the auxiliary "Did", always use the base form (V1) of the verb ("go", not "went").'
      },
      {
        wrong: 'He does not likes spicy food.',
        correct: 'He does not like spicy food.',
        reason: 'When "does" is used, the main verb drops the "-s" or "-es".'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-6-1',
        type: 'fill_blank',
        prompt: 'Why ______ they leave the conference early yesterday? (did / do / have)',
        options: ['did', 'do', 'have'],
        correctAnswer: 'did',
        hint: 'The time marker is "yesterday" (past simple question).',
        explanation: 'We use the auxiliary "did" to form past simple questions.'
      }
    ],
    quiz: [
      {
        id: 'q-6-1',
        question: 'Which sentence correctly uses the auxiliary verb "does"?',
        options: [
          'Does she knows French?',
          'She does not works here.',
          'Does he live in Mumbai?',
          'He does goes to gym daily.'
        ],
        correctIndex: 2,
        explanation: '"Does he live in Mumbai?" correctly pairs "does" with the base verb "live".',
        hindiTip: 'Does के साथ हमेशा क्रिया का पहला रूप (V1) आता है, s/es हट जाता है।'
      }
    ]
  },
  {
    id: 'g-part1-7',
    part: 1,
    partTitle: 'Part 1: Grammar Foundations',
    slug: 'adjectives',
    title: 'Adjectives (Descriptive & Order of Adjectives)',
    level: 'A2',
    durationMins: 16,
    simpleExplanation: 'Adjectives describe or modify nouns and pronouns, providing details about appearance, size, age, shape, color, origin, or material. When using multiple adjectives before a noun, English follows a specific royal order: Opinion → Size → Age → Shape → Color → Origin → Material → Purpose.',
    formulaOrStructure: 'Order: O-S-A-S-C-O-M-P (Opinion, Size, Age, Shape, Color, Origin, Material, Purpose + NOUN)\nExample: A lovely (Opinion) little (Size) old (Age) Italian (Origin) leather (Material) bag.',
    hindiExplanation: 'विशेषण (Adjectives) संज्ञा की विशेषता बताते हैं। जब एक से अधिक विशेषण एक साथ आते हैं, तो उनका एक निश्चित क्रम होता है: राय (Opinion) → आकार (Size) → आयु (Age) → रंग (Color) → उत्पत्ति (Origin) → सामग्री (Material) + संज्ञा।',
    examples: [
      { en: 'She wore an elegant black silk dress to the ceremony.', hi: 'उसने समारोह में एक सुंदर काला रेशमी गाउन पहना था।' },
      { en: 'We stayed in a charming little Japanese wooden cottage.', hi: 'हम एक आकर्षक छोटी जापानी लकड़ी की कुटिया में ठहरे।' },
      { en: 'He bought a sleek modern metallic sports car.', hi: 'उसने एक आकर्षक आधुनिक धातु वाली स्पोर्ट्स कार खरीदी।' },
      { en: 'An enormous antique Indian brass lamp stood in the hallway.', hi: 'दालान में एक विशाल प्राचीन भारतीय पीतल का दीपक रखा था।' },
      { en: 'They adopted a playful little golden retriever puppy.', hi: 'उन्होंने एक चंचल छोटे गोल्डन रिट्रीवर पिल्ले को गोद लिया।' }
    ],
    commonMistakes: [
      {
        wrong: 'She has a leather black stylish bag.',
        correct: 'She has a stylish black leather bag.',
        reason: 'Follow Opinion (stylish) → Color (black) → Material (leather).'
      },
      {
        wrong: 'The movie was very bored.',
        correct: 'The movie was very boring.',
        reason: 'Use -ing adjectives (boring) for things that cause the feeling, and -ed adjectives (bored) for people who experience the feeling.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-7-1',
        type: 'reorder',
        prompt: 'Arrange into correct order: [wooden / round / a / handsome / table]',
        correctAnswer: 'a handsome round wooden table',
        explanation: 'Opinion (handsome) + Shape (round) + Material (wooden) + Noun (table).'
      }
    ],
    quiz: [
      {
        id: 'q-7-1',
        question: 'Which option follows the correct order of adjectives?',
        options: [
          'A round big wooden table',
          'A big round wooden table',
          'A wooden big round table',
          'A round wooden big table'
        ],
        correctIndex: 1,
        explanation: 'Size (big) comes before Shape (round), which comes before Material (wooden).',
        hindiTip: 'आकार (Size) हमेशा रूप (Shape) और धातु/लकड़ी (Material) से पहले आता है।'
      }
    ]
  },
  {
    id: 'g-part1-8',
    part: 1,
    partTitle: 'Part 1: Grammar Foundations',
    slug: 'adverbs',
    title: 'Adverbs (Manner, Time, Place, Frequency & Degree)',
    level: 'A2',
    durationMins: 15,
    simpleExplanation: 'Adverbs modify verbs, adjectives, or other adverbs. They tell us HOW (manner: quickly), WHEN (time: yesterday), WHERE (place: upstairs), HOW OFTEN (frequency: always, rarely), or TO WHAT DEGREE (degree: extremely, quite).',
    formulaOrStructure: 'Frequency adverbs go before main verbs, but AFTER "be":\nSubject + Adverb of Frequency + Main Verb (e.g., "I always wake up early")\nSubject + BE + Adverb of Frequency (e.g., "She is always punctual")',
    hindiExplanation: 'क्रियाविशेषण (Adverbs) क्रिया, विशेषण या अन्य क्रियाविशेषण की विशेषता बताते हैं। Adverbs of Frequency (always, usually, often, never) मुख्य क्रिया से पहले और "is/am/are" के बाद आते हैं।',
    examples: [
      { en: 'He speaks English fluently and articulately in meetings.', hi: 'वह बैठकों में धाराप्रवाह और स्पष्ट रूप से अंग्रेजी बोलता है।' },
      { en: 'Rohan always arrives five minutes before the scheduled time.', hi: 'रोहन हमेशा निर्धारित समय से पांच मिनट पहले पहुंचता है।' },
      { en: 'She is extremely passionate about environmental conservation.', hi: 'वह पर्यावरण संरक्षण को लेकर बेहद उत्साही है।' },
      { en: 'We rarely eat fast food on weekdays.', hi: 'हम काम के दिनों में शायद ही कभी फास्ट फूड खाते हैं।' },
      { en: 'They searched everywhere for the missing office keys.', hi: 'उन्होंने गुम हुई कार्यालय की चाबियों के लिए हर जगह खोज की।' }
    ],
    commonMistakes: [
      {
        wrong: 'He plays very good.',
        correct: 'He plays very well.',
        reason: 'Modify the verb "plays" with the adverb "well", not the adjective "good".'
      },
      {
        wrong: 'I go always to the library on Mondays.',
        correct: 'I always go to the library on Mondays.',
        reason: 'Frequency adverbs (always, never, often) go between the subject and the main verb.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-8-1',
        type: 'fill_blank',
        prompt: 'He is ______ late for his morning classes. (never / rarely / always)',
        options: ['never', 'rarely', 'always'],
        correctAnswer: 'never',
        hint: 'Position: after the verb "is".',
        explanation: 'Any adverb of frequency fits after "is", but remember it must follow the "be" verb.'
      }
    ],
    quiz: [
      {
        id: 'q-8-1',
        question: 'Choose the correct placement of "often":',
        options: [
          'They go often to the cinema.',
          'They often go to the cinema.',
          'Often they go to the cinema on Sunday usually.',
          'They go to the cinema oftenly.'
        ],
        correctIndex: 1,
        explanation: '"They often go..." is the standard grammatical placement before the main verb.',
        hindiTip: 'Often, usually, always जैसी क्रियाएं मुख्य क्रिया (go) से ठीक पहले आती हैं।'
      }
    ]
  },
  {
    id: 'g-part1-9',
    part: 1,
    partTitle: 'Part 1: Grammar Foundations',
    slug: 'articles',
    title: 'Articles (A, An, The & Zero Article)',
    level: 'A2',
    durationMins: 18,
    simpleExplanation: 'Articles define whether a noun is specific or unspecific. Indefinite articles "A" and "An" are used before singular countable nouns based on SOUND (consonant sound = a; vowel sound = an). The definite article "The" is used for specific, unique, or previously mentioned things.',
    formulaOrStructure: 'A + Consonant Sound: a book, a university (starts with "yu" sound)\nAn + Vowel Sound: an apple, an hour (silent "h"), an MBA\nThe: Specific reference, superlative degrees ("the best"), unique entities ("the sun")',
    hindiExplanation: 'Articles का नियम ध्वनि (Sound) पर आधारित होता है: यदि उच्चारण स्वर ध्वनि (अ, आ, इ, ई, ए, ऐ, ओ, औ) से शुरू हो तो "An" आता है (जैसे an honest man, an hour)। यदि उच्चारण व्यंजन ध्वनि से हो तो "A" आता है (जैसे a university, a European)। किसी खास या पहले उल्लिखित वस्तु के लिए "The" आता है।',
    examples: [
      { en: 'It took him an hour to solve the intricate puzzle.', hi: 'उस जटिल पहेली को हल करने में उसे एक घंटा लगा।' },
      { en: 'She is an honest and hardworking officer in the civil service.', hi: 'वह सिविल सेवा में एक ईमानदार और मेहनती अधिकारी हैं।' },
      { en: 'The sun rises in the east and sets in the west.', hi: 'सूर्य पूर्व में उगता है और पश्चिम में अस्त होता है।' },
      { en: 'He attends a prestigious university in the United States.', hi: 'वह संयुक्त राज्य अमेरिका के एक प्रतिष्ठित विश्वविद्यालय में पढ़ता है।' },
      { en: 'I saw a movie yesterday; the movie was deeply touching.', hi: 'मैंने कल एक फिल्म देखी; वह फिल्म बहुत दिल को छू लेने वाली थी।' }
    ],
    commonMistakes: [
      {
        wrong: 'He is an university student.',
        correct: 'He is a university student.',
        reason: '"University" begins with a consonant "y" sound (/juː/), so use "a", not "an".'
      },
      {
        wrong: 'She is a honest person.',
        correct: 'She is an honest person.',
        reason: 'The "h" in "honest" is silent, so it starts with a vowel sound (/ˈɒn.ɪst/), needing "an".'
      },
      {
        wrong: 'I love the music.',
        correct: 'I love music. (in general)',
        reason: 'Do not use "the" when speaking about concepts, music, or life in general (Zero Article).'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-9-1',
        type: 'fill_blank',
        prompt: 'He holds ______ master\'s degree from ______ United Kingdom. (a / an / the)',
        options: ['a, the', 'an, the', 'the, the'],
        correctAnswer: 'a, the',
        hint: '"Master\'s" has consonant sound /m/, and UK is a compound country name.',
        explanation: 'We say "a master\'s degree" and "the United Kingdom" (countries with United/Kingdom take "the").'
      }
    ],
    quiz: [
      {
        id: 'q-9-1',
        question: 'Which phrase correctly uses the article "an"?',
        options: ['An European country', 'An one-way street', 'An MBA graduate', 'An uniform policy'],
        correctIndex: 2,
        explanation: '"MBA" is pronounced "em-bee-ay" (starts with vowel sound /e/), so it takes "an".',
        hindiTip: 'MBA का उच्चारण "एम" (स्वर ध्वनि) से शुरू होता है, इसलिए "an" लगेगा।'
      },
      {
        id: 'q-9-2',
        question: 'Choose the correct sentence:',
        options: [
          'Mount Everest is highest mountain in world.',
          'Mount Everest is the highest mountain in the world.',
          'The Mount Everest is highest mountain.',
          'A Mount Everest is the highest mountain.'
        ],
        correctIndex: 1,
        explanation: 'Superlatives ("highest") take "the", "world" takes "the", and individual mountain peaks do not take "the".',
        hindiTip: 'सुपरलेटिव डिग्री (the highest) और the world के आगे हमेशा The लगता है।'
      }
    ]
  },
  {
    id: 'g-part1-10',
    part: 1,
    partTitle: 'Part 1: Grammar Foundations',
    slug: 'prepositions',
    title: 'Prepositions (Time, Place & Dependent Prepositions)',
    level: 'A2',
    durationMins: 18,
    simpleExplanation: 'Prepositions connect nouns or pronouns to other words in the sentence, indicating time, location, or direction. For time: "At" is used for specific clock times, "On" for days and dates, and "In" for months, years, seasons, and long periods.',
    formulaOrStructure: 'Time: AT 5:00 PM / at midnight | ON Monday / on 15th August | IN July / in 2024 / in summer\nPlace: AT a point (at the door) | ON a surface (on the table) | IN an enclosed space (in the room)',
    hindiExplanation: 'समय के लिए Preposition का नियम:\n- AT: निश्चित समय (at 9 AM, at night)\n- ON: दिन और तारीख (on Sunday, on 25th December)\n- IN: महीना, वर्ष, ऋतु (in June, in 2024, in the morning)\nस्थान के लिए: In (अंदर), On (सतह पर), At (निश्चित बिंदु पर)।',
    examples: [
      { en: 'The webinar begins at 4:30 PM on Thursday.', hi: 'वेबिनार गुरुवार को शाम 4:30 बजे शुरू होगा।' },
      { en: 'India gained independence on August 15 in 1947.', hi: 'भारत को 15 अगस्त 1947 को स्वतंत्रता मिली।' },
      { en: 'She is exceptionally good at mathematics and analytical reasoning.', hi: 'वह गणित और विश्लेषणात्मक तर्क में असाधारण रूप से अच्छी है।' },
      { en: 'The documents are kept in the drawer on the second floor.', hi: 'दस्तावेज दूसरी मंजिल पर दराज में रखे हैं।' },
      { en: 'They congratulated him on his outstanding achievement.', hi: 'उन्होंने उनकी उत्कृष्ट उपलब्धि पर उन्हें बधाई दी।' }
    ],
    commonMistakes: [
      {
        wrong: 'I will see you on next Monday.',
        correct: 'I will see you next Monday.',
        reason: 'Do not use prepositions (at/on/in) before words like "next", "last", "this", or "every".'
      },
      {
        wrong: 'She is good in English.',
        correct: 'She is good at English.',
        reason: 'The dependent preposition for proficiency or skill with "good" is "at" ("good at singing/math/English").'
      },
      {
        wrong: 'He is married with a doctor.',
        correct: 'He is married to a doctor.',
        reason: 'In English, we say someone is "married to", not "married with".'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-10-1',
        type: 'fill_blank',
        prompt: 'The manager is waiting ______ the conference hall ______ the first floor. (in / at / on)',
        options: ['in, on', 'at, in', 'on, at'],
        correctAnswer: 'in, on',
        hint: 'Inside a hall (in), on a floor level (on).',
        explanation: 'We say "in the hall" (enclosed area) and "on the first floor" (surface level).'
      }
    ],
    quiz: [
      {
        id: 'q-10-1',
        question: 'Fill in the blank: "We usually take a family vacation ______ October."',
        options: ['on', 'at', 'in', 'by'],
        correctIndex: 2,
        explanation: 'Months take the preposition "in" (in October, in January).',
        hindiTip: 'महीनों और वर्षों के लिए हमेशा "in" का प्रयोग होता है।'
      },
      {
        id: 'q-10-2',
        question: 'Which preposition correctly completes: "Are you interested ______ joining our team?"',
        options: ['for', 'about', 'in', 'with'],
        correctIndex: 2,
        explanation: 'The adjective "interested" takes the dependent preposition "in".',
        hindiTip: 'Interested के साथ हमेशा "in" आता है (interested in).'
      }
    ]
  },
  {
    id: 'g-part1-11',
    part: 1,
    partTitle: 'Part 1: Grammar Foundations',
    slug: 'conjunctions',
    title: 'Conjunctions (FANBOYS, Subordinating & Correlative)',
    level: 'A2',
    durationMins: 16,
    simpleExplanation: 'Conjunctions are joining words that connect words, phrases, or clauses. Coordinating conjunctions (FANBOYS: For, And, Nor, But, Or, Yet, So) join equal clauses. Subordinating conjunctions (because, although, since, while, unless) link a dependent clause to an independent clause.',
    formulaOrStructure: 'Coordinating: Independent Clause + comma + FANBOYS + Independent Clause\nSubordinating: Although + Dependent Clause, Independent Clause\nCorrelative: Neither... nor | Either... or | Not only... but also',
    hindiExplanation: 'समुच्चयबोधक (Conjunctions) वाक्यों या शब्दों को जोड़ते हैं।\n- FANBOYS: For, And, Nor, But, Or, Yet, So (समान महत्व के वाक्यों के लिए)\n- Subordinating: Because (क्योंकि), Although (यद्यपि/हालांकि), Unless (जब तक कि नहीं)\n- Correlative: Not only... but also (न केवल... बल्कि भी)।',
    examples: [
      { en: 'He studied diligently, so he passed the examination with flying colours.', hi: 'उसने लगन से पढ़ाई की, इसलिए उसने शानदार अंकों के साथ परीक्षा पास की।' },
      { en: 'Although it rained heavily, the football match continued.', hi: 'यद्यपि भारी बारिश हुई, फिर भी फुटबॉल मैच जारी रहा।' },
      { en: 'She is not only a talented musician but also a published author.', hi: 'वह न केवल एक प्रतिभाशाली संगीतकार हैं बल्कि एक प्रकाशित लेखिका भी हैं।' },
      { en: 'You cannot enter the examination hall unless you show your admit card.', hi: 'जब तक आप अपना प्रवेश पत्र नहीं दिखाते, आप परीक्षा हॉल में प्रवेश नहीं कर सकते।' },
      { en: 'I wanted to attend the conference, but all tickets were sold out.', hi: 'मैं सम्मेलन में भाग लेना चाहता था, लेकिन सभी टिकट बिक चुके थे।' }
    ],
    commonMistakes: [
      {
        wrong: 'Although he was tired, but he finished the report.',
        correct: 'Although he was tired, he finished the report.',
        reason: 'Do not use both "although" and "but" in the same sentence. Use either one or the other.'
      },
      {
        wrong: 'Unless you do not study, you will fail.',
        correct: 'Unless you study, you will fail.',
        reason: '"Unless" already contains a negative meaning ("if not"). Do not use "not" in the unless-clause.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-11-1',
        type: 'fill_blank',
        prompt: '______ she was nervous, she gave a confident presentation. (Although / Because / But)',
        options: ['Although', 'Because', 'But'],
        correctAnswer: 'Although',
        hint: 'It introduces a contrast between being nervous and giving a confident presentation.',
        explanation: '"Although" introduces a concession/contrast clause.'
      }
    ],
    quiz: [
      {
        id: 'q-11-1',
        question: 'Identify the sentence with correct conjunction usage:',
        options: [
          'Because I was sick, so I stayed home.',
          'Although he worked hard, but he missed the target.',
          'Neither Rohan nor his friends were present at the meeting.',
          'Unless you do not hurry, you will miss the train.'
        ],
        correctIndex: 2,
        explanation: '"Neither... nor" is used correctly with appropriate subject agreement and no double conjunction.',
        hindiTip: 'Neither के साथ Nor आता है, और Because के साथ So नहीं लगाते।'
      }
    ]
  }
];
