import { GrammarLesson } from '../types';

export const grammarPart3Lessons: GrammarLesson[] = [
  {
    id: 'g-part3-1',
    part: 3,
    partTitle: 'Part 3: Intermediate Grammar',
    slug: 'modal-verbs',
    title: 'Modal Verbs (Ability, Permission, Obligation & Probability)',
    level: 'B1',
    durationMins: 18,
    simpleExplanation: 'Modal auxiliary verbs (can, could, may, might, must, should, would) add meaning to the main verb by expressing ability, possibility, permission, advice, or necessity. Modals never change form (no -s, -ed, or -ing) and are always followed directly by the base verb (V1) without "to".',
    formulaOrStructure: 'Formula: Subject + Modal + Base Verb (V1)\nAbility: Can / Could\nPermission: May / Can / Could\nAdvice: Should / Ought to\nObligation / Necessity: Must / Have to\nProbability / Deduction: Must (95%) / May / Might (40%) / Can\'t (impossible)',
    hindiExplanation: 'मोडल क्रियाएं (Modal Verbs) संभावना, क्षमता, अनुमति और कर्तव्य व्यक्त करती हैं।\n- Can/Could: क्षमता (सकना/सका)\n- May/Might: संभावना (शायद)\n- Should: सलाह (चाहिए)\n- Must: पक्का कर्तव्य या दृढ़ निश्चय (जरूर चाहिए)\nनियम: Modal के बाद हमेशा क्रिया की पहली फॉर्म (V1) आती है और कभी "to" नहीं लगता (सिवाय ought to के)।',
    examples: [
      { en: 'You should drink at least two litres of water every day to stay hydrated.', hi: 'आपको हाइड्रेटेड रहने के लिए हर दिन कम से कम दो लीटर पानी पीना चाहिए।' },
      { en: 'He must be in his office right now because his car is parked outside.', hi: 'वह इस समय अपने कार्यालय में ही होगा क्योंकि उसकी कार बाहर खड़ी है।' },
      { en: 'Could you please forward the contract details to my work email address?', hi: 'क्या आप कृपया अनुबंध का विवरण मेरे कार्य ईमेल पते पर अग्रेषित कर सकते हैं?' },
      { en: 'It might rain later this evening, so carry an umbrella just in case.', hi: 'आज शाम बाद में बारिश हो सकती है, इसलिए ऐहतियातन छाता साथ रखें।' },
      { en: 'All passengers must fasten their seatbelts during takeoff and landing.', hi: 'उड़ान भरने और उतरने के दौरान सभी यात्रियों को अपनी सीट बेल्ट बांधनी होगी।' }
    ],
    commonMistakes: [
      {
        wrong: 'She can plays the piano very gracefully.',
        correct: 'She can play the piano very gracefully.',
        reason: 'Never add -s to the main verb after a modal. Always use the base form (can play).'
      },
      {
        wrong: 'I must to go now.',
        correct: 'I must go now.',
        reason: 'Do not use "to" after modal verbs like must, can, should, would, or might.'
      },
      {
        wrong: 'He should had arrived earlier.',
        correct: 'He should have arrived earlier.',
        reason: 'To express past regret, use "should have + V3", never "should had".'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-m1-1',
        type: 'fill_blank',
        prompt: 'You ______ (must / might) not use your mobile phone while driving; it is against the law.',
        options: ['must', 'might'],
        correctAnswer: 'must',
        hint: 'This is a strict legal prohibition.',
        explanation: '"Must not" expresses prohibition and legal obligation.'
      }
    ],
    quiz: [
      {
        id: 'q-m1-1',
        question: 'Which modal verb expresses strong logical certainty?',
        options: [
          'He might be the CEO.',
          'He must be the CEO; everyone is standing up to welcome him.',
          'He can be the CEO.',
          'He should be the CEO maybe.'
        ],
        correctIndex: 1,
        explanation: '"Must" expresses near certainty based on strong visible evidence.',
        hindiTip: 'पक्के अनुमान या प्रमाण पर आधारित निष्कर्ष के लिए "must" का प्रयोग होता है।'
      }
    ]
  },
  {
    id: 'g-part3-2',
    part: 3,
    partTitle: 'Part 3: Intermediate Grammar',
    slug: 'subject-verb-agreement',
    title: 'Subject-Verb Agreement (Golden Rules & Tricky Exceptions)',
    level: 'B1',
    durationMins: 18,
    simpleExplanation: 'The subject and verb must agree in number: a singular subject takes a singular verb, and a plural subject takes a plural verb. Watch out for phrases that come between the subject and verb (like "together with", "along with", "as well as"), and indefinite pronouns like "each" and "every".',
    formulaOrStructure: 'Singular Subject → Singular Verb (The book IS interesting)\nPlural Subject → Plural Verb (The books ARE interesting)\nIntervening Phrases: The manager, along with his assistants, IS attending.\nEither / Or & Neither / Nor: Verb agrees with the CLOSEST subject.',
    hindiExplanation: 'कर्ता और क्रिया का तालमेल (Subject-Verb Agreement): एकवचन कर्ता के साथ एकवचन क्रिया और बहुवचन कर्ता के साथ बहुवचन क्रिया आती है।\n- "Along with, together with, as well as" आने पर क्रिया पहले वाले मुख्य Subject के अनुसार आती है।\n- "Neither... nor / Either... or" में क्रिया सबसे नजदीकी Subject के अनुसार आती है।\n- "Each, Everyone, Somebody" हमेशा एकवचन क्रिया लेते हैं।',
    examples: [
      { en: 'The quality of these organic Kashmiri apples is exceptional.', hi: 'इन जैविक कश्मीरी सेबों की गुणवत्ता असाधारण है।' },
      { en: 'The CEO, as well as her senior directors, is attending the annual summit.', hi: 'सीईओ, साथ ही उनके वरिष्ठ निदेशक, वार्षिक शिखर सम्मेलन में भाग ले रहे हैं।' },
      { en: 'Neither the manager nor the employees were informed about the schedule shift.', hi: 'न तो प्रबंधक को और न ही कर्मचारियों को समय परिवर्तन के बारे में सूचित किया गया था।' },
      { en: 'Each of the participating candidates has received an official certificate.', hi: 'भाग लेने वाले प्रत्येक उम्मीदवार को एक आधिकारिक प्रमाण पत्र मिला है।' },
      { en: 'Ten thousand rupees is a reasonable price for this refurbished computer.', hi: 'इस नवीनीकृत कंप्यूटर के लिए दस हजार रुपये एक उचित मूल्य है।' }
    ],
    commonMistakes: [
      {
        wrong: 'The list of items are on the desk.',
        correct: 'The list of items is on the desk.',
        reason: 'The subject is the singular noun "list", not the plural prepositional phrase "of items".'
      },
      {
        wrong: 'Everyone are ready for the test.',
        correct: 'Everyone is ready for the test.',
        reason: 'Indefinite pronouns (everyone, someone, each, nobody) are grammatically singular.'
      },
      {
        wrong: 'Neither the teacher nor the students was present.',
        correct: 'Neither the teacher nor the students were present.',
        reason: 'With "neither... nor", the verb agrees with the closer subject ("students" = plural → were).'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-sva-1',
        type: 'fill_blank',
        prompt: 'Bread and butter ______ (is / are) his daily breakfast.',
        options: ['is', 'are'],
        correctAnswer: 'is',
        hint: 'Treated together as a single compound dish.',
        explanation: 'Pairs forming a single idea or meal take a singular verb.'
      }
    ],
    quiz: [
      {
        id: 'q-sva-1',
        question: 'Choose the correct verb: "Neither the captain nor the crew members ______ ready for the storm."',
        options: ['was', 'were', 'is', 'has been'],
        correctIndex: 1,
        explanation: 'With "neither... nor", the verb agrees with the closest subject "crew members" (plural), so "were" is correct.',
        hindiTip: 'Neither... nor में Verb अपने सबसे पास वाले Subject (crew members) के अनुसार बहुवचन होगी।'
      }
    ]
  },
  {
    id: 'g-part3-3',
    part: 3,
    partTitle: 'Part 3: Intermediate Grammar',
    slug: 'question-formation',
    title: 'Question Formation (Wh- Questions, Inversion & Question Tags)',
    level: 'B1',
    durationMins: 17,
    simpleExplanation: 'Questions in English require inversion: placing the auxiliary (helping) verb before the subject. For Wh- questions, the question word goes first. Question tags are short questions added to the end of statements (positive statement + negative tag; negative statement + positive tag).',
    formulaOrStructure: 'Yes/No Questions: Auxiliary + Subject + Main Verb + ? ("Do you live in Delhi?")\nWh- Questions: Wh-word + Auxiliary + Subject + Main Verb + ? ("Where do you work?")\nQuestion Tags: Auxiliary + Pronoun? ("You are coming, aren\'t you?" / "He didn\'t call, did he?")',
    hindiExplanation: 'प्रश्न निर्माण (Question Formation): अंग्रेजी में प्रश्न बनाने के लिए सहायक क्रिया (Helping Verb) को कर्ता (Subject) से पहले रखा जाता है।\nQuestion Tags: वाक्य सकारात्मक है तो टैग नकारात्मक होगा (You are a student, aren\'t you?), वाक्य नकारात्मक है तो टैग सकारात्मक होगा (She doesn\'t drink tea, does she?)।',
    examples: [
      { en: 'Where did you purchase that elegant leather briefcase from?', hi: 'आपने वह सुंदर चमड़े का ब्रीफकेस कहाँ से खरीदा?' },
      { en: 'How long have you been residing in this cosmopolitan city?', hi: 'आप कितने समय से इस महानगरीय शहर में रह रहे हैं?' },
      { en: 'You have completed the financial audit report, haven\'t you?', hi: 'आपने वित्तीय ऑडिट रिपोर्ट पूरी कर ली है, है न?' },
      { en: 'Why was the flight to London delayed by two hours?', hi: 'लंदन की उड़ान में दो घंटे की देरी क्यों हुई?' },
      { en: 'She doesn\'t eat seafood, does she?', hi: 'वह सीफूड नहीं खाती है, क्या वह खाती है?' }
    ],
    commonMistakes: [
      {
        wrong: 'Where you are going for holidays?',
        correct: 'Where are you going for holidays?',
        reason: 'In direct questions, invert the auxiliary verb and subject: "are you", not "you are".'
      },
      {
        wrong: 'Why did she left early?',
        correct: 'Why did she leave early?',
        reason: 'After the auxiliary "did", use base verb "leave", not the past form "left".'
      },
      {
        wrong: 'You like coffee, isn\'t it?',
        correct: 'You like coffee, don\'t you?',
        reason: 'Do not use "isn\'t it" universally. The tag must match the auxiliary of the main clause ("don\'t you").'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-qf-1',
        type: 'reorder',
        prompt: 'Form a question: [did / why / call / you / not / me]',
        correctAnswer: 'Why did you not call me',
        explanation: 'Wh-word (Why) + Auxiliary (did) + Subject (you) + not + base verb (call) + object (me).'
      }
    ],
    quiz: [
      {
        id: 'q-qf-1',
        question: 'Choose the correct question tag: "She hardly ever arrives on time, ______?"',
        options: ["doesn't she", 'does she', "isn't she", 'is she'],
        correctIndex: 1,
        explanation: '"Hardly ever" gives the sentence a negative meaning, so the question tag must be positive: "does she?".',
        hindiTip: 'Hardly/Rarely नकारात्मक भाव देते हैं, इसलिए इनके साथ positive tag "does she" लगेगा।'
      }
    ]
  },
  {
    id: 'g-part3-4',
    part: 3,
    partTitle: 'Part 3: Intermediate Grammar',
    slug: 'negative-sentences',
    title: 'Negative Sentences (Negation Patterns & Avoiding Double Negatives)',
    level: 'B1',
    durationMins: 15,
    simpleExplanation: 'Negation turns an affirmative statement into a negative one by adding "not" after an auxiliary verb, or by using negative words like never, nowhere, nobody, or neither. Standard English strictly avoids double negatives (e.g., saying "I didn\'t see nobody" is incorrect).',
    formulaOrStructure: 'Auxiliary + NOT + Main Verb\nNever + affirmative verb (e.g., "I never lie")\nAvoid Double Negatives: Use "any" words with negatives:\n"I didn\'t see anybody" (CORRECT) vs "I didn\'t see nobody" (INCORRECT)',
    hindiExplanation: 'नकारात्मक वाक्य (Negative Sentences): मुख्य नियम यह है कि मानक अंग्रेजी में दोहरा नकारात्मक (Double Negative) कभी नहीं बोला जाता।\nगलत: "I don\'t know nothing"\nसही: "I don\'t know anything" या "I know nothing"।',
    examples: [
      { en: 'We have not received any feedback from the client yet.', hi: 'हमें अभी तक मुवक्किल से कोई प्रतिक्रिया नहीं मिली है।' },
      { en: 'I could hardly hear the speaker because of the background noise.', hi: 'पृष्ठभूमि के शोर के कारण मैं वक्ता को मुश्किल से ही सुन सका।' },
      { en: 'She never makes hasty decisions when investing in the market.', hi: 'बाजार में निवेश करते समय वह कभी भी जल्दबाजी में निर्णय नहीं लेती है।' },
      { en: 'There was nobody present in the conference hall when I arrived.', hi: 'जब मैं पहुंचा तो सम्मेलन कक्ष में कोई उपस्थित नहीं था।' },
      { en: 'He does not have any prior experience in digital marketing.', hi: 'उनके पास डिजिटल मार्केटिंग में कोई पूर्व अनुभव नहीं है।' }
    ],
    commonMistakes: [
      {
        wrong: 'I don\'t have no money.',
        correct: 'I don\'t have any money. (or I have no money)',
        reason: 'Double negatives cancel each other out in standard English. Pair "don\'t" with "any".'
      },
      {
        wrong: 'She doesn\'t know nothing about it.',
        correct: 'She doesn\'t know anything about it.',
        reason: 'Use "anything" with negative verb constructions.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-ns-1',
        type: 'fill_blank',
        prompt: 'He couldn\'t find his glasses ______ in the house. (nowhere / anywhere)',
        options: ['anywhere', 'nowhere'],
        correctAnswer: 'anywhere',
        hint: 'The verb already has "couldn\'t" (negative).',
        explanation: 'Use "anywhere" to prevent a double negative.'
      }
    ],
    quiz: [
      {
        id: 'q-ns-1',
        question: 'Which of the following sentences is grammatically sound?',
        options: [
          'I haven\'t seen nobody today.',
          'I haven\'t seen anybody today.',
          'I didn\'t see no one today.',
          'Nobody didn\'t come to the lecture.'
        ],
        correctIndex: 1,
        explanation: '"I haven\'t seen anybody today" properly avoids double negatives.',
        hindiTip: 'नकारात्मक क्रिया (haven\'t) के साथ anybody/anything आता है।'
      }
    ]
  },
  {
    id: 'g-part3-5',
    part: 3,
    partTitle: 'Part 3: Intermediate Grammar',
    slug: 'active-passive-voice',
    title: 'Active and Passive Voice (Tense Transformations & By-Agent)',
    level: 'B1',
    durationMins: 18,
    simpleExplanation: 'In Active Voice, the subject performs the action (e.g., "The chef cooked the meal"). In Passive Voice, the subject receives the action (e.g., "The meal was cooked by the chef"). Passive voice is widely used in journalism, scientific reports, and formal business communication when the action or receiver is more important than who did it.',
    formulaOrStructure: 'Active: Subject + Verb + Object\nPassive: Object + appropriate form of BE + V3 (Past Participle) + (by + Agent)\nPresent Simple: is/are + V3\nPast Simple: was/were + V3\nPresent Perfect: have/has been + V3\nModals: modal + be + V3',
    hindiExplanation: 'कृतवाच्य और कर्मवाच्य (Active and Passive Voice):\n- Active: कर्ता स्वयं काम करता है ("रोहन ने कार चलाई")।\n- Passive: काम किस पर हुआ उस पर जोर दिया जाता है ("कार रोहन द्वारा चलाई गई")।\nPassive का मूल मंत्र: BE का उपयुक्त रूप + क्रिया का तीसरा रूप (V3)। फॉर्मल इंग्लिश और समाचारों में इसका बहुत उपयोग होता है।',
    examples: [
      { en: 'The ancient manuscript was discovered by archaeologists in Egypt.', hi: 'मिस्र में पुरातत्वविदों द्वारा प्राचीन पांडुलिपि की खोज की गई थी।' },
      { en: 'All incoming emails are monitored by the cybersecurity system.', hi: 'सभी आने वाले ईमेल की साइबर सुरक्षा प्रणाली द्वारा निगरानी की जाती है।' },
      { en: 'The new expressway will be inaugurated by the Prime Minister tomorrow.', hi: 'नए एक्सप्रेसवे का उद्घाटन कल प्रधानमंत्री द्वारा किया जाएगा।' },
      { en: 'A comprehensive vaccine was developed by scientists in record time.', hi: 'वैज्ञानिकों द्वारा रिकॉर्ड समय में एक व्यापक टीका विकसित किया गया था।' },
      { en: 'The project proposal has been approved by the board of trustees.', hi: 'परियोजना प्रस्ताव को न्यासी बोर्ड द्वारा अनुमोदित कर दिया गया है।' }
    ],
    commonMistakes: [
      {
        wrong: 'The house was builted in 1995.',
        correct: 'The house was built in 1995.',
        reason: 'The V3 form of "build" is "built", not "builted".'
      },
      {
        wrong: 'The letter is wrote by him.',
        correct: 'The letter is written by him.',
        reason: 'Passive voice strictly requires the past participle (V3: written), not the past simple (wrote).'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-ap-1',
        type: 'fill_blank',
        prompt: 'Change to Passive: "They built the bridge in 2020." → "The bridge ______ in 2020."',
        options: ['was built', 'is built', 'had built'],
        correctAnswer: 'was built',
        hint: 'Past simple active (built) becomes "was/were + V3".',
        explanation: 'Singular object "The bridge" + was + built.'
      }
    ],
    quiz: [
      {
        id: 'q-ap-1',
        question: 'Which of the following is in PASSIVE voice?',
        options: [
          'The architect designed the skyscraper.',
          'The skyscraper was designed by a renowned architect.',
          'The architect is designing the skyscraper.',
          'The architect has completed the design.'
        ],
        correctIndex: 1,
        explanation: '"The skyscraper was designed..." features the object in subject position with be + V3.',
        hindiTip: 'Was/were + V3 होने के कारण यह Passive Voice है।'
      }
    ]
  },
  {
    id: 'g-part3-6',
    part: 3,
    partTitle: 'Part 3: Intermediate Grammar',
    slug: 'direct-indirect-speech',
    title: 'Direct and Indirect Speech (Reporting Verbs & Tense Shifts)',
    level: 'B2',
    durationMins: 18,
    simpleExplanation: 'Direct speech quotes a speaker\'s exact words within quotation marks. Indirect (reported) speech communicates what someone said without exact quotes. When the reporting verb is in the past (e.g., "said", "told"), verb tenses shift one step back into the past (Present Simple → Past Simple, Present Perfect → Past Perfect, will → would).',
    formulaOrStructure: 'Direct: She said, "I am tired."\nIndirect: She said that she was tired.\nTense shifts (Backshift):\nPresent Simple → Past Simple\nPresent Continuous → Past Continuous\nPresent Perfect / Past Simple → Past Perfect\nWill → Would | Can → Could',
    hindiExplanation: 'प्रत्यक्ष और अप्रत्यक्ष कथन (Direct and Indirect Speech): जब किसी की कही बात को अपने शब्दों में बताया जाता है (Indirect), तो काल एक कदम पीछे चला जाता है (Backshift):\n- Present Simple बदलकर Past Simple बन जाता है।\n- "Said to" बदलकर "Told" बन जाता है और Quotation Marks हट जाते हैं।',
    examples: [
      { en: 'Direct: He said, "I am working on the monthly audit report."\nIndirect: He said that he was working on the monthly audit report.', hi: 'उसने कहा कि वह मासिक ऑडिट रिपोर्ट पर काम कर रहा था।' },
      { en: 'Direct: Shabbir said, "I have completed the presentation."\nIndirect: Shabbir said that he had completed the presentation.', hi: 'शब्बीर ने कहा कि उसने प्रस्तुति पूरी कर ली थी।' },
      { en: 'Direct: The doctor said, "You must take this medicine twice a day."\nIndirect: The doctor advised me to take that medicine twice a day.', hi: 'डॉक्टर ने मुझे वह दवा दिन में दो बार लेने की सलाह दी।' },
      { en: 'Direct: Rohan said, "I will call you tomorrow."\nIndirect: Rohan promised that he would call me the next day.', hi: 'रोहन ने वादा किया कि वह अगले दिन मुझे फोन करेगा।' },
      { en: 'Direct: She asked, "Where do you live?"\nIndirect: She asked me where I lived.', hi: 'उसने मुझसे पूछा कि मैं कहाँ रहता था।' }
    ],
    commonMistakes: [
      {
        wrong: 'He told that he was leaving.',
        correct: 'He said that he was leaving. (or He told me that...)',
        reason: '"Tell" requires a direct personal object ("told me/told him"), whereas "say" does not.'
      },
      {
        wrong: 'She asked me where did I live.',
        correct: 'She asked me where I lived.',
        reason: 'In reported questions, do not use question inversion (did I live); use statement word order (I lived).'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-ds-1',
        type: 'fill_blank',
        prompt: 'Direct: He said, "I will visit London." → Indirect: He said that he ______ visit London.',
        options: ['would', 'will'],
        correctAnswer: 'would',
        hint: '"Will" shifts back to its past modal counterpart.',
        explanation: 'In reported speech with past reporting verb, "will" shifts to "would".'
      }
    ],
    quiz: [
      {
        id: 'q-ds-1',
        question: 'Choose the correct indirect form of: She said, "I have lost my wallet."',
        options: [
          'She said that she has lost her wallet.',
          'She said that she had lost her wallet.',
          'She said that she losted her wallet.',
          'She said that she would lose her wallet.'
        ],
        correctIndex: 1,
        explanation: 'Present Perfect ("have lost") shifts back to Past Perfect ("had lost").',
        hindiTip: 'Have/has + V3 बदलकर had + V3 बन जाता है।'
      }
    ]
  },
  {
    id: 'g-part3-7',
    part: 3,
    partTitle: 'Part 3: Intermediate Grammar',
    slug: 'comparatives-superlatives',
    title: 'Comparatives and Superlatives (Degrees of Comparison & As...As)',
    level: 'A2',
    durationMins: 16,
    simpleExplanation: 'Comparatives compare two people or things (add -er or use "more + adjective"). Superlatives compare three or more, picking the extreme (add -est or use "the most + adjective"). To show equality, use "as + adjective + as". Watch out for irregular adjectives (good/better/best, bad/worse/worst, far/further/furthest).',
    formulaOrStructure: 'Short Adjectives (1 syllable): Adjective + er + than (taller than) | the + Adjective + est (the tallest)\nLong Adjectives (2+ syllables): more + Adjective + than (more expensive than) | the most + Adjective (the most expensive)\nEquality: as + adjective + as (as tall as me)\nIrregulars: good → better → best | bad → worse → worst',
    hindiExplanation: 'तुलना की डिग्रियां (Degrees of Comparison):\n- Positive: सामान्य गुण (as smart as)\n- Comparative: दो की तुलना (smarter than, more intelligent than)\n- Superlative: सबसे श्रेष्ठ/अधिक (the smartest, the most intelligent)\nयाद रखें: Superlative के आगे हमेशा "the" लगता है।',
    examples: [
      { en: 'Tokyo is significantly larger than Singapore in both area and population.', hi: 'टोक्यो क्षेत्रफल और जनसंख्या दोनों में सिंगापुर से काफी बड़ा है।' },
      { en: 'Mount Everest is the highest mountain peak above sea level on Earth.', hi: 'माउंट एवरेस्ट पृथ्वी पर समुद्र तल से सबसे ऊंची पर्वत चोटी है।' },
      { en: 'Health and happiness are far more valuable than material possessions.', hi: 'स्वास्थ्य और खुशी भौतिक संपत्ति की तुलना में कहीं अधिक मूल्यवान हैं।' },
      { en: 'This online course is just as informative as an in-person university lecture.', hi: 'यह ऑनलाइन पाठ्यक्रम विश्वविद्यालय के आमने-सामने के व्याख्यान जितना ही जानकारीपूर्ण है।' },
      { en: 'His second speech was much better than his inaugural address.', hi: 'उनका दूसरा भाषण उनके उद्घाटन भाषण से कहीं बेहतर था।' }
    ],
    commonMistakes: [
      {
        wrong: 'He is more taller than his elder brother.',
        correct: 'He is taller than his elder brother.',
        reason: 'Do not use double comparatives. Use either "-er" or "more", never both.'
      },
      {
        wrong: 'She is the most smartest student in the class.',
        correct: 'She is the smartest student in the class.',
        reason: 'Do not double superlatives (do not say "most smartest").'
      },
      {
        wrong: 'This is the most unique opportunity.',
        correct: 'This is a unique opportunity.',
        reason: '"Unique" is an absolute adjective; something cannot be "more unique" or "most unique".'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-cs-1',
        type: 'fill_blank',
        prompt: 'The weather today is ______ (badder / worse / worst) than yesterday.',
        options: ['worse', 'badder', 'worst'],
        correctAnswer: 'worse',
        hint: '"Bad" has an irregular comparative form.',
        explanation: 'Comparative of "bad" is "worse".'
      }
    ],
    quiz: [
      {
        id: 'q-cs-1',
        question: 'Select the grammatically correct sentence:',
        options: [
          'Silver is not as precious than gold.',
          'Silver is not as precious as gold.',
          'Silver is more cheaper than gold.',
          'Silver is the cheaper of all metals.'
        ],
        correctIndex: 1,
        explanation: '"as precious as" is the correct correlative construction for equality/comparison.',
        hindiTip: 'समानता या तुलना के लिए "as... as" का प्रयोग होता है।'
      }
    ]
  },
  {
    id: 'g-part3-8',
    part: 3,
    partTitle: 'Part 3: Intermediate Grammar',
    slug: 'conditionals',
    title: 'Conditionals (Zero, First, Second, Third & Mixed Conditionals)',
    level: 'B2',
    durationMins: 18,
    simpleExplanation: 'Conditionals express what happens or could happen depending on a certain condition. Zero Conditional expresses scientific truths. First Conditional expresses realistic future possibilities. Second Conditional expresses hypothetical/unreal present situations. Third Conditional expresses past regrets and imaginary past scenarios.',
    formulaOrStructure: 'Zero: If + Present Simple, Present Simple ("If you heat water, it boils")\nFirst: If + Present Simple, will + V1 ("If it rains, we will stay home")\nSecond: If + Past Simple, would + V1 ("If I won the lottery, I would travel the world")\nThird: If + Past Perfect, would have + V3 ("If I had studied harder, I would have passed")',
    hindiExplanation: 'शर्त वाले वाक्य (Conditionals):\n- 0 Conditional: वैज्ञानिक सत्य (If you heat ice, it melts)।\n- 1st Conditional: वास्तविक भविष्य की संभावना (If it rains, I will take an umbrella)।\n- 2nd Conditional: काल्पनिक वर्तमान (If I were rich, I would help everyone)। नियम: "If" के साथ "were" आता है चाहे Subject "I" या "He" क्यों न हो।\n- 3rd Conditional: अतीत का पछतावा (If I had known, I would have helped you)।',
    examples: [
      { en: 'If you freeze pure water, it turns into ice at zero degrees Celsius.', hi: 'यदि आप शुद्ध पानी को जमाते हैं, तो यह शून्य डिग्री सेल्सियस पर बर्फ में बदल जाता है।' },
      { en: 'If you submit the application before 5:00 PM, they will process it today.', hi: 'यदि आप शाम 5:00 बजे से पहले आवेदन जमा करते हैं, तो वे इसे आज ही संसाधित कर देंगे।' },
      { en: 'If I were the prime minister, I would invest heavily in public education.', hi: 'यदि मैं प्रधानमंत्री होता, तो मैं सार्वजनिक शिक्षा में भारी निवेश करता।' },
      { en: 'If we had left the house ten minutes earlier, we would not have missed our flight.', hi: 'यदि हम दस मिनट पहले घर से निकले होते, तो हमारी उड़ान नहीं छूटती।' },
      { en: 'If she had accepted that job offer last year, she would be living in London now.', hi: 'यदि उसने पिछले साल उस नौकरी के प्रस्ताव को स्वीकार कर लिया होता, तो वह अब लंदन में रह रही होती।' }
    ],
    commonMistakes: [
      {
        wrong: 'If I will see him, I will tell him.',
        correct: 'If I see him, I will tell him.',
        reason: 'In first conditional "if-clauses", never use "will"; use the Present Simple.'
      },
      {
        wrong: 'If I was you, I would take the job.',
        correct: 'If I were you, I would take the job.',
        reason: 'In subjunctive/hypothetical conditional clauses, use "were" for all subjects ("If I were, If he were").'
      },
      {
        wrong: 'If I would have known, I would have called.',
        correct: 'If I had known, I would have called.',
        reason: 'In the if-clause of third conditional, use "had + V3", never "would have".'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-c-1',
        type: 'fill_blank',
        prompt: 'If she ______ (studies / will study) regularly, she will ace the exam.',
        options: ['studies', 'will study'],
        correctAnswer: 'studies',
        hint: 'Rule: No "will" in the if-clause.',
        explanation: 'First conditional uses Present Simple in the if-clause.'
      }
    ],
    quiz: [
      {
        id: 'q-c-1',
        question: 'Choose the correct form: "If I ______ his phone number, I would have called him yesterday."',
        options: ['had had', 'have had', 'had', 'would have'],
        correctIndex: 0,
        explanation: 'Third conditional if-clause requires Past Perfect: had + V3 of have = "had had".',
        hindiTip: '3rd Conditional के If वाले भाग में Past Perfect (had + V3) आता है।'
      }
    ]
  }
];
