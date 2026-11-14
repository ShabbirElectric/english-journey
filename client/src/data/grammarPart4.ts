import { GrammarLesson } from '../types';

export const grammarPart4Lessons: GrammarLesson[] = [
  {
    id: 'g-part4-1',
    part: 4,
    partTitle: 'Part 4: Advanced Grammar',
    slug: 'gerunds-and-infinitives',
    title: 'Gerunds and Infinitives (Verb Patterns & Meaning Shifts)',
    level: 'B2',
    durationMins: 18,
    simpleExplanation: 'A gerund is a verb ending in -ing that functions as a noun (e.g., "Swimming is great exercise"). An infinitive is "to + base verb" (e.g., "I hope to see you"). Some verbs only take gerunds (enjoy, avoid, suggest), some only take infinitives (decide, promise, hope), and some take both with a distinct shift in meaning (remember, stop, try, forget).',
    formulaOrStructure: 'Gerund: Verb + -ing (as Subject, Object of preposition, or after verbs like enjoy/avoid/mind)\nInfinitive: To + V1 (after adjectives, expressions of purpose, or verbs like decide/plan/refuse)\nMeaning shifts:\n- "Stop to smoke" (paused an activity in order to smoke)\n- "Stop smoking" (quit the habit of smoking)',
    hindiExplanation: 'कृदंत और अनियत क्रिया (Gerunds and Infinitives):\n- Gerund: क्रिया + ing जो संज्ञा की तरह काम करे (जैसे "Reading expands the mind")। Preposition के बाद हमेशा Gerund आता है (e.g. good at speaking)।\n- Infinitive: To + V1।\nअर्थ का बदलाव:\n- Remember to buy milk = दूध खरीदना याद रखना (भविष्य का काम)।\n- Remember buying milk = दूध खरीदने की घटना याद होना (अतीत की स्मृति)।',
    examples: [
      { en: 'She enjoys reading historical non-fiction novels before going to bed.', hi: 'वह सोने से पहले ऐतिहासिक गैर-काल्पनिक उपन्यास पढ़ने का आनंद लेती है।' },
      { en: 'They decided to postpone the international conference until next quarter.', hi: 'उन्होंने अंतर्राष्ट्रीय सम्मेलन को अगली तिमाही तक स्थगित करने का निर्णय लिया।' },
      { en: 'I clearly remember locking the front door before leaving for work.', hi: 'मुझे काम पर जाने से पहले मुख्य द्वार पर ताला लगाना अच्छी तरह याद है।' },
      { en: 'Please remember to email the finalized agreement to our legal team.', hi: 'कृपया कानूनी टीम को अंतिम रूप से तय समझौते को ईमेल करना याद रखें।' },
      { en: 'He stopped drinking coffee after 4:00 PM to improve his sleep quality.', hi: 'नींद की गुणवत्ता में सुधार के लिए उन्होंने शाम 4:00 बजे के बाद कॉफी पीना बंद कर दिया।' }
    ],
    commonMistakes: [
      {
        wrong: 'I look forward to meet you.',
        correct: 'I look forward to meeting you.',
        reason: 'In "look forward to", "to" is a preposition, not an infinitive marker; hence it must be followed by a gerund (-ing).'
      },
      {
        wrong: 'She suggested to go to the Italian bistro.',
        correct: 'She suggested going to the Italian bistro.',
        reason: '"Suggest" is followed by a gerund (-ing), never an infinitive with "to".'
      },
      {
        wrong: 'He is capable to do this difficult task.',
        correct: 'He is capable of doing this difficult task.',
        reason: 'The adjective "capable" pairs with the preposition "of + gerund".'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-gi-1',
        type: 'fill_blank',
        prompt: 'Do you mind ______ (helping / to help) me move this desk?',
        options: ['helping', 'to help'],
        correctAnswer: 'helping',
        hint: '"Mind" is followed by a gerund.',
        explanation: 'The verb "mind" requires a gerund (-ing).'
      }
    ],
    quiz: [
      {
        id: 'q-gi-1',
        question: 'Which sentence has the correct gerund/infinitive structure?',
        options: [
          'We decided going on holiday next month.',
          'I am looking forward to hear from you soon.',
          'She avoided answering the journalist\'s pointed questions.',
          'He refused speaking without his attorney present.'
        ],
        correctIndex: 2,
        explanation: '"Avoid" takes a gerund: "She avoided answering...".',
        hindiTip: 'Avoid के बाद हमेशा Gerund (-ing) रूप आता है।'
      }
    ]
  },
  {
    id: 'g-part4-2',
    part: 4,
    partTitle: 'Part 4: Advanced Grammar',
    slug: 'relative-clauses',
    title: 'Relative Clauses (Defining vs Non-Defining & Relative Pronouns)',
    level: 'B2',
    durationMins: 18,
    simpleExplanation: 'Relative clauses provide extra information about a noun using relative pronouns (who for people, which for things, that for people/things, whose for possession, where for places, when for time). Defining clauses are essential to identify the noun (no commas). Non-defining clauses add non-essential extra info (enclosed in commas; never use "that" in non-defining clauses).',
    formulaOrStructure: 'Defining: The doctor who treated me was very empathetic. (Essential, no commas)\nNon-Defining: Dr. Sharma, who treated me, is retiring next month. (Extra info, commas)\nPronouns: Who (subject/people), Whom (object/people/formal), Whose (possession), Which (things), That (defining only)',
    hindiExplanation: 'संबंधवाचक उपवाक्य (Relative Clauses): संज्ञा के बारे में अधिक जानकारी देने के लिए Who (व्यक्तियों के लिए), Which (वस्तुओं के लिए), Whose (जिसका/जिसकी), Where (स्थान के लिए) का प्रयोग होता है।\n- Defining Clause: आवश्यक जानकारी देता है, कोई कॉमा नहीं लगता।\n- Non-Defining Clause: अतिरिक्त जानकारी देता है, दोनों तरफ कॉमा (,) लगता है, और इसमें "that" का प्रयोग कभी नहीं होता।',
    examples: [
      { en: 'The engineer who designed this revolutionary software received an international award.', hi: 'जिस इंजीनियर ने इस क्रांतिकारी सॉफ्टवेयर को डिजाइन किया, उसे एक अंतरराष्ट्रीय पुरस्कार मिला।' },
      { en: 'Bengaluru, which is widely known as the Silicon Valley of India, attracts top engineering talent.', hi: 'बेंगलुरु, जिसे व्यापक रूप से भारत की सिलिकॉन वैली के रूप में जाना जाता है, शीर्ष इंजीनियरिंग प्रतिभा को आकर्षित करता है।' },
      { en: 'The entrepreneur whose startup was funded yesterday is an alumnus of IIT.', hi: 'वह उद्यमी जिसके स्टार्टअप को कल फंड मिला था, वह आईआईटी का पूर्व छात्र है।' },
      { en: 'This is the state-of-the-art laboratory where researchers developed the synthetic vaccine.', hi: 'यह अत्याधुनिक प्रयोगशाला है जहां शोधकर्ताओं ने सिंथेटिक टीका विकसित किया था।' },
      { en: 'The laptop that I bought on Black Friday has exceptional battery longevity.', hi: 'ब्लैक फ्राइडे पर मैंने जो लैपटॉप खरीदा था, उसकी बैटरी लाइफ असाधारण है।' }
    ],
    commonMistakes: [
      {
        wrong: 'Dr. APJ Abdul Kalam, that was our former president, was a great scientist.',
        correct: 'Dr. APJ Abdul Kalam, who was our former president, was a great scientist.',
        reason: 'Never use "that" in a non-defining relative clause set off by commas. Use "who" for people.'
      },
      {
        wrong: 'The student which scored highest won the medal.',
        correct: 'The student who scored highest won the medal.',
        reason: 'Use "who" for human beings, not "which".'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-rc-1',
        type: 'fill_blank',
        prompt: 'The scientist ______ discoveries changed modern physics was Albert Einstein. (who / whose / which)',
        options: ['whose', 'who', 'which'],
        correctAnswer: 'whose',
        hint: 'Possessive relation: his discoveries.',
        explanation: 'Use "whose" to indicate ownership/possession.'
      }
    ],
    quiz: [
      {
        id: 'q-rc-1',
        question: 'Select the sentence with punctuation that properly marks a non-defining relative clause:',
        options: [
          'My father who lives in Mumbai is a retired professor.',
          'My father, who lives in Mumbai, is a retired professor.',
          'My father that lives in Mumbai, is a retired professor.',
          'My father, which lives in Mumbai, is a retired professor.'
        ],
        correctIndex: 1,
        explanation: 'A person only has one biological father; "who lives in Mumbai" is non-essential extra info and must be enclosed in commas with "who".',
        hindiTip: 'Non-defining क्लॉज में कॉमा लगाना अनिवार्य है और व्यक्ति के लिए "who" आता है।'
      }
    ]
  },
  {
    id: 'g-part4-3',
    part: 4,
    partTitle: 'Part 4: Advanced Grammar',
    slug: 'phrasal-verbs',
    title: 'Phrasal Verbs (Separable, Inseparable & High-Frequency Idiomatic Verbs)',
    level: 'B2',
    durationMins: 18,
    simpleExplanation: 'A phrasal verb consists of a verb plus one or two particles (a preposition or adverb) that create a completely new idiomatic meaning (e.g., "give up" means quit, not physically hand upward). Some are separable (you can put the object in the middle: "turn it off"), while others are inseparable ("look after her"). When the object is a pronoun, it MUST go in the middle of separable phrasal verbs.',
    formulaOrStructure: 'Verb + Particle (Preposition/Adverb) = New Meaning\nSeparable: Turn off the light OR Turn the light off.\nWith Pronoun: Turn IT off (Mandatory middle position; "Turn off it" is WRONG).\nInseparable: Look after the baby (Always together).',
    hindiExplanation: 'वाक्यांश क्रियाएं (Phrasal Verbs): जब किसी मुख्य क्रिया के साथ Preposition या Adverb जुड़कर एक बिल्कुल नया मुहावरेदार अर्थ बनाता है।\n- Give up: हार मानना / छोड़ना\n- Bring up: पालन-पोषण करना या चर्चा में लाना\n- Call off: रद्द करना\nनियम: Separable phrasal verbs में Pronoun (it/them) हमेशा बीच में आता है (जैसे "Turn it off", कभी "Turn off it" नहीं)।',
    examples: [
      { en: 'The executive committee decided to call off the meeting due to unforeseen circumstances.', hi: 'कार्यकारी समिति ने अप्रत्याशित परिस्थितियों के कारण बैठक रद्द करने का निर्णय लिया।' },
      { en: 'She brought up an intriguing point during the quarterly strategy discussion.', hi: 'उन्होंने त्रैमासिक रणनीति चर्चा के दौरान एक दिलचस्प बिंदु उठाया।' },
      { en: 'Never give up on your dreams regardless of the obstacles you encounter.', hi: 'आपके सामने आने वाली बाधाओं की परवाह किए बिना कभी भी अपने सपनों को मत छोड़ें।' },
      { en: 'Could you please look after my dog while I am traveling abroad for a week?', hi: 'जब मैं एक सप्ताह के लिए विदेश यात्रा कर रहा हूँ तो क्या आप कृपया मेरे कुत्ते की देखभाल कर सकते हैं?' },
      { en: 'He came across an old family heirloom while cleaning out the attic.', hi: 'अटारी की सफाई करते समय उसे अचानक एक पुराना पारिवारिक गहना मिला।' }
    ],
    commonMistakes: [
      {
        wrong: 'Turn off it right now.',
        correct: 'Turn it off right now.',
        reason: 'When the object of a separable phrasal verb is a pronoun (it/them/me), it MUST go between the verb and particle.'
      },
      {
        wrong: 'I am looking forward to meet you.',
        correct: 'I am looking forward to meeting you.',
        reason: '"Look forward to" is an inseparable three-part phrasal verb ending with preposition "to", requiring -ing.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-pv-1',
        type: 'fill_blank',
        prompt: 'The company had to ______ (call off / put off) the launch until next year. (Meaning: postpone)',
        options: ['put off', 'call off'],
        correctAnswer: 'put off',
        hint: '"Call off" means cancel; "put off" means postpone.',
        explanation: '"Put off" means to delay or postpone to a future date.'
      }
    ],
    quiz: [
      {
        id: 'q-pv-1',
        question: 'Which sentence correctly places the pronoun with a separable phrasal verb?',
        options: [
          'Please figure out it yourself.',
          'Please figure it out yourself.',
          'Please figure out them yourself.',
          'Please out figure it yourself.'
        ],
        correctIndex: 1,
        explanation: 'Pronouns must be placed between the verb and the particle: "figure it out".',
        hindiTip: 'सर्वनाम (it/them) हमेशा Verb और Particle के बीच में आता है: figure it out।'
      }
    ]
  },
  {
    id: 'g-part4-4',
    part: 4,
    partTitle: 'Part 4: Advanced Grammar',
    slug: 'clauses',
    title: 'Clauses (Noun Clauses, Adverbial Clauses & Reduced Clauses)',
    level: 'C1',
    durationMins: 18,
    simpleExplanation: 'A clause is a group of words containing a subject and a predicate verb. Independent clauses can stand alone as complete sentences. Dependent clauses function as nouns (Noun Clauses), modify verbs/clauses (Adverbial Clauses), or can be reduced to participle phrases to achieve sophisticated, concise prose.',
    formulaOrStructure: 'Noun Clause: What he said surprised everyone. / I wonder whether she will come.\nAdverbial Clause: Although he was tired, he kept walking. (Time, condition, reason, concession)\nReduced Clause: Having completed his work, he went to sleep. (Instead of: After he had completed...)',
    hindiExplanation: 'उपवाक्य (Clauses):\n- Noun Clause: जो पूरा उपवाक्य संज्ञा का काम करे ("What she said was true")।\n- Adverbial Clause: समय, कारण या शर्त बताने वाला क्लॉज ("Because it was late, we left")।\n- Reduced Clause: वाक्य को संक्षिप्त और परिष्कृत बनाने के लिए उपवाक्य को Participle में बदलना (जैसे "Feeling exhausted, she rested" = "Because she felt exhausted, she rested")। उच्च स्तर की अंग्रेजी में इसका भरपूर उपयोग होता है।',
    examples: [
      { en: 'What impressed the interview panel most was his remarkable composure under pressure.', hi: 'साक्षात्कार पैनल को जिस बात ने सबसे अधिक प्रभावित किया, वह दबाव में उनका उल्लेखनीय धैर्य था।' },
      { en: 'Whether we achieve our quarterly targets depends entirely on team collaboration.', hi: 'हम अपने त्रैमासिक लक्ष्यों को प्राप्त करते हैं या नहीं, यह पूरी तरह से टीम सहयोग पर निर्भर करता है।' },
      { en: 'Having reviewed the legal contract thoroughly, she signed the final agreement.', hi: 'कानूनी अनुबंध की पूरी तरह से समीक्षा करने के बाद, उसने अंतिम समझौते पर हस्ताक्षर किए।' },
      { en: 'Unless comprehensive reforms are enacted, economic disparity will widen further.', hi: 'जब तक व्यापक सुधार लागू नहीं किए जाते, आर्थिक असमानता और बढ़ेगी।' },
      { en: 'Shocked by the unexpected announcement, the audience remained completely silent.', hi: 'अप्रत्याशित घोषणा से स्तब्ध होकर दर्शक पूरी तरह शांत रहे।' }
    ],
    commonMistakes: [
      {
        wrong: 'Walking into the kitchen, the smoke was smelled by Rohan. (Dangling Participle)',
        correct: 'Walking into the kitchen, Rohan smelled the smoke.',
        reason: 'The subject of a reduced participle clause must be the subject of the main clause. The smoke was not walking; Rohan was.'
      },
      {
        wrong: 'I don\'t know where does he live.',
        correct: 'I don\'t know where he lives.',
        reason: 'In an embedded noun clause, do not use question inversion (do/does). Use statement order.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-cl-1',
        type: 'fill_blank',
        prompt: 'Could you tell me what time ______ ? (does the train arrive / the train arrives)',
        options: ['the train arrives', 'does the train arrive'],
        correctAnswer: 'the train arrives',
        hint: 'This is an indirect/embedded clause, so use standard subject + verb order.',
        explanation: 'Embedded noun clauses follow statement word order without auxiliary inversion.'
      }
    ],
    quiz: [
      {
        id: 'q-cl-1',
        question: 'Identify the sentence with an appropriately placed, non-dangling participle clause:',
        options: [
          'Barking fiercely, the postman ran away from the dog.',
          'Having finished her homework, Maya switched on the television.',
          'Driving down the highway, a deer was struck by the truck.',
          'Hoping to catch the train, the ticket slipped from his fingers.'
        ],
        correctIndex: 1,
        explanation: 'Maya is the one who finished her homework, making the subject correctly attached to the participle modifier.',
        hindiTip: 'Participle Clause का कर्ता मुख्य वाक्य के कर्ता से मेल खाना चाहिए।'
      }
    ]
  },
  {
    id: 'g-part4-5',
    part: 4,
    partTitle: 'Part 4: Advanced Grammar',
    slug: 'advanced-sentence-structures',
    title: 'Advanced Sentence Structures (Inversion for Emphasis & Cleft Sentences)',
    level: 'C1',
    durationMins: 20,
    simpleExplanation: 'To write and speak with dramatic emphasis, rhetorical power, and academic style, advanced English uses Inversion (inverting the subject and auxiliary verb after negative or restrictive adverbs like "Never", "Seldom", "Rarely", "Hardly") and Cleft Sentences (splitting a sentence using "It is/was..." or "What...") to highlight specific elements.',
    formulaOrStructure: 'Inversion: Negative Adverb + Auxiliary Verb + Subject + Main Verb\n- "Seldom have I witnessed such brilliance."\n- "Hardly had the meeting started when the fire alarm rang."\nCleft Sentence (It-cleft): It was [focused element] that/who [rest of sentence]\n- "It was Sarah who finalized the lucrative deal."\nWh-cleft: What [clause] is/was [focused element]\n- "What we urgently require is clarity."',
    hindiExplanation: 'उन्नत वाक्य संरचनाएं (Inversion & Cleft Sentences):\n- Inversion: जब वाक्य की शुरुआत किसी नकारात्मक या सीमित करने वाले शब्द (Never, Seldom, Rarely, Hardly) से होती है, तो जोर देने के लिए सहायक क्रिया कर्ता से पहले आ जाती है (जैसे "Never have I seen..." बजाए "I have never seen...")।\n- Cleft Sentences: किसी खास बात पर बल देने के लिए वाक्य को "It was..." या "What..." से शुरू करना।',
    examples: [
      { en: 'Rarely have I encountered an individual with such extraordinary intellectual depth.', hi: 'शायद ही कभी मुझे इतनी असाधारण बौद्धिक गहराई वाले व्यक्ति का सामना करना पड़ा हो।' },
      { en: 'Hardly had she entered the auditorium when the entire assembly stood up to applaud.', hi: 'वह मुश्किल से सभागार में दाखिल हुई ही थी कि पूरी सभा ने खड़े होकर तालियां बजाईं।' },
      { en: 'Under no circumstances should confidential financial data be disclosed to third parties.', hi: 'किसी भी परिस्थिति में गोपनीय वित्तीय डेटा तीसरे पक्ष को नहीं बताया जाना चाहिए।' },
      { en: 'It was his unwavering perseverance that ultimately secured victory for the team.', hi: 'यह उनकी अटूट दृढ़ता थी जिसने अंततः टीम के लिए जीत हासिल की।' },
      { en: 'What astonished the scientific community was the unprecedented speed of the breakthrough.', hi: 'जिस बात ने वैज्ञानिक समुदाय को चकित कर दिया वह थी इस सफलता की अभूतपूर्व गति।' }
    ],
    commonMistakes: [
      {
        wrong: 'Never I have seen such a breathtaking sunset.',
        correct: 'Never have I seen such a breathtaking sunset.',
        reason: 'When a negative adverbial like "Never" is fronted for emphasis, inversion of subject and auxiliary is grammatically mandatory.'
      },
      {
        wrong: 'Hardly had I arrived when the phone didn\'t ring.',
        correct: 'Hardly had I arrived when the phone rang.',
        reason: 'Pair "Hardly had... when..." with an affirmative past simple clause.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-as-1',
        type: 'fill_blank',
        prompt: 'Seldom ______ (we have / have we) witnessed such remarkable dedication.',
        options: ['have we', 'we have'],
        correctAnswer: 'have we',
        hint: '"Seldom" fronted requires auxiliary-subject inversion.',
        explanation: 'Inversion requires auxiliary "have" before subject "we".'
      }
    ],
    quiz: [
      {
        id: 'q-as-1',
        question: 'Which sentence correctly demonstrates negative inversion?',
        options: [
          'Not only did he win the prestigious trophy, but he also broke the world record.',
          'Not only he won the prestigious trophy, but he also broke the world record.',
          'Not only won he the prestigious trophy, but he also broke the record.',
          'Not only he did win the trophy, but broke record.'
        ],
        correctIndex: 0,
        explanation: '"Not only did he win..." correctly follows Negative Adverb + Auxiliary (did) + Subject (he) + Base Verb (win).',
        hindiTip: 'Not only से शुरू होने पर "did he win" का Inversion क्रम लागू होता है।'
      }
    ]
  },
  {
    id: 'g-part4-6',
    part: 4,
    partTitle: 'Part 4: Advanced Grammar',
    slug: 'common-grammatical-mistakes',
    title: 'Common Grammatical Mistakes (Top Traps, False Friends & Fixes)',
    level: 'B2',
    durationMins: 18,
    simpleExplanation: 'Mastering English involves unlearning widespread habitual errors: confusing "its" vs "it\'s", "affect" vs "effect", misplaced modifiers, redundant words (e.g., "revert back", "return back"), subject-verb mismatches with collective nouns, and improper preposition collocations.',
    formulaOrStructure: 'Its (Possessive) vs It\'s (Contraction of "it is" or "it has")\nAffect (Usually a Verb = to influence) vs Effect (Usually a Noun = result)\nRedundancy: Say "revert" NOT "revert back"; say "repeat" NOT "repeat again"\nCollocations: "cope with" (NOT "cope up with"); "comprise" (NOT "comprise of")',
    hindiExplanation: 'अक्सर होने वाली आम गलतियां (Common Traps & Corrections):\n1. "Cope up with" गलत है — सही केवल "cope with" है।\n2. "Revert back" गलत है — केवल "revert" कहें।\n3. "Discuss about" गलत है — केवल "discuss" कहें।\n4. "It\'s" का अर्थ है "It is", जबकि "Its" का अर्थ है "उसका/इसका" (जैसे Its color is blue)।\n5. "Affect" क्रिया (Verb) है और "Effect" प्रभाव (Noun) है।',
    examples: [
      { en: 'The changing climate will adversely affect global agricultural yields.', hi: 'बदलती जलवायु वैश्विक कृषि पैदावार पर प्रतिकूल प्रभाव डालेगी।' },
      { en: 'The economic effect of the stimulus package was noticeable within two quarters.', hi: 'प्रोत्साहन पैकेज का आर्थिक प्रभाव दो तिमाहियों के भीतर ध्यान देने योग्य था।' },
      { en: 'It is difficult to cope with high levels of corporate stress without adequate sleep.', hi: 'पर्याप्त नींद के बिना कॉर्पोरेट तनाव के उच्च स्तर से निपटना मुश्किल है।' },
      { en: 'Please revert to this email at your earliest convenience.', hi: 'कृपया अपनी सुविधानुसार इस ईमेल का उत्तर दें।' },
      { en: 'The committee comprises twelve distinguished economists from across the globe.', hi: 'समिति में दुनिया भर के बारह प्रतिष्ठित अर्थशास्त्री शामिल हैं।' }
    ],
    commonMistakes: [
      {
        wrong: 'I cannot cope up with this heavy workload.',
        correct: 'I cannot cope with this heavy workload.',
        reason: 'The idiom is "cope with". Adding "up" is an Indian English colloquialism that is non-standard globally.'
      },
      {
        wrong: 'We will revert back to you tomorrow.',
        correct: 'We will revert to you tomorrow.',
        reason: '"Revert" already implies returning to a person or state; adding "back" is an unnecessary redundancy.'
      },
      {
        wrong: 'The dog wagged it\'s tail playfully.',
        correct: 'The dog wagged its tail playfully.',
        reason: '"Its" is possessive. "It\'s" is the contraction of "it is".'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-cm-1',
        type: 'fill_blank',
        prompt: 'The new legislation will have a profound ______ (affect / effect) on international trade.',
        options: ['effect', 'affect'],
        correctAnswer: 'effect',
        hint: 'Preceded by the article "a" and adjective "profound", so a noun is required.',
        explanation: '"Effect" is the noun meaning consequence or impact.'
      }
    ],
    quiz: [
      {
        id: 'q-cm-1',
        question: 'Which of the following sentences is 100% grammatically accurate?',
        options: [
          'Can you repeat the question again?',
          'He gave me many useful advices.',
          'The team is capable of handling the crisis effectively.',
          'She married with a wealthy businessman.'
        ],
        correctIndex: 2,
        explanation: '"capable of handling" is correct. "Repeat again" is redundant, "advices" is incorrect, and "married with" should be "married to".',
        hindiTip: 'Capable of + V-ing का प्रयोग बिल्कुल सही व्याकरण है।'
      }
    ]
  },
  {
    id: 'g-part4-7',
    part: 4,
    partTitle: 'Part 4: Advanced Grammar',
    slug: 'formal-and-informal-english',
    title: 'Formal and Informal English (Register, Email Etiquette & Professional Nuance)',
    level: 'C1',
    durationMins: 18,
    simpleExplanation: 'Register refers to the degree of formality in language based on context, audience, and purpose. Formal English avoids contractions (don\'t → do not), avoids slang/phrasal verbs, utilizes higher-tier Latinate vocabulary (help → assist, start → commence, ask for → request), uses passive voice where diplomacy is needed, and adheres to structured business email etiquette.',
    formulaOrStructure: 'Informal vs Formal Vocabulary:\n- "Ask for" → "Request"\n- "Look into" → "Investigate / Examine"\n- "Get" → "Obtain / Receive"\n- "Tell" → "Inform / Clarify"\n- "Sorry" → "We sincerely apologize for any inconvenience caused"\nProfessional Email Opening: "I hope this email finds you well." (Formal) vs "Hey there!" (Informal)',
    hindiExplanation: 'औपचारिक और अनौपचारिक अंग्रेजी (Formal vs Informal English):\n- Informal: दोस्तों, परिवार और अनौपचारिक बातचीत के लिए (Contractions जैसे can\'t, won\'t और Phrasal verbs का उपयोग)।\n- Formal: ऑफिस ईमेल, आधिकारिक रिपोर्ट, इंटरव्यू और व्यावसायिक संचार के लिए। इसमें Contractions से बचा जाता है, उच्च स्तरीय शब्दों (जैसे help की जगह assist, get की जगह acquire) का प्रयोग किया जाता है।',
    examples: [
      { en: 'Informal: Can you send me the doc ASAP?\nFormal: Could you please provide the finalized document at your earliest convenience?', hi: 'क्या आप कृपया अपनी सुविधानुसार अंतिम रूप से तैयार दस्तावेज प्रदान कर सकते हैं?' },
      { en: 'Informal: Sorry for being late on this.\nFormal: Please accept my apologies for the delayed response.', hi: 'विलंबित प्रतिक्रिया के लिए कृपया मेरी क्षमा स्वीकार करें।' },
      { en: 'Informal: We need to fix this problem right away.\nFormal: It is imperative that we address and resolve this issue promptly.', hi: 'यह अनिवार्य है कि हम इस मुद्दे को तुरंत संबोधित करें और उसका समाधान करें।' },
      { en: 'Informal: I want to know more about the job.\nFormal: I am writing to inquire about the vacant managerial position advertised on LinkedIn.', hi: 'मैं लिंक्डइन पर विज्ञापित रिक्त प्रबंधकीय पद के बारे में पूछताछ करने के लिए लिख रहा हूँ।' },
      { en: 'Informal: Thanks for helping me out!\nFormal: I would like to express my sincere gratitude for your invaluable assistance.', hi: 'मैं आपकी अमूल्य सहायता के लिए अपना हार्दिक आभार व्यक्त करना चाहता हूँ।' }
    ],
    commonMistakes: [
      {
        wrong: 'In a formal cover letter: "Hey, I\'m gonna be a great fit for you guys!"',
        correct: 'In a formal cover letter: "Dear Hiring Team, I believe my qualifications and experience align closely with your organization\'s objectives."',
        reason: 'Avoid contractions ("gonna", "I\'m") and casual slang ("you guys") in formal professional applications.'
      },
      {
        wrong: 'In a business email: "Revert back ASAP thx."',
        correct: 'In a business email: "I look forward to hearing from you at your earliest convenience."',
        reason: 'Use complete, courteous sentences without text abbreviations.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-fi-1',
        type: 'fill_blank',
        prompt: 'Which word is preferred in formal academic writing: "The committee decided to ______ (look into / investigate) the discrepancy."?',
        options: ['investigate', 'look into'],
        correctAnswer: 'investigate',
        hint: 'Single Latinate verbs are preferred over phrasal verbs in formal writing.',
        explanation: '"Investigate" has a more professional and formal register than "look into".'
      }
    ],
    quiz: [
      {
        id: 'q-fi-1',
        question: 'Which of the following sentences represents the highest level of formal business diplomacy?',
        options: [
          'You didn\'t attach the file you talked about.',
          'It appears that the referenced attachment was omitted from your correspondence.',
          'Where is the file? You forgot it.',
          'Send the attachment quickly please.'
        ],
        correctIndex: 1,
        explanation: '"It appears that the referenced attachment was omitted..." uses polite passive phrasing without assigning direct personal blame.',
        hindiTip: 'फॉर्मल बिजनेस कम्युनिकेशन में आरोप लगाने की बजाय विनम्र और कूटनीतिक भाषा का प्रयोग किया जाता है।'
      }
    ]
  }
];

