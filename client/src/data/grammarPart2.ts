import { GrammarLesson } from '../types';

export const grammarPart2Lessons: GrammarLesson[] = [
  {
    id: 'g-part2-1',
    part: 2,
    partTitle: 'Part 2: Complete Tenses Mastery',
    slug: 'present-simple',
    title: 'Present Simple Tense (Habits, Routines & Universal Truths)',
    level: 'A1',
    durationMins: 16,
    simpleExplanation: 'The Present Simple tense is used to talk about repeated actions, daily routines, habits, facts, and permanent situations. For third-person singular (he, she, it), add -s or -es to the base verb.',
    formulaOrStructure: 'Positive: Subject + V1 (+ s/es for he/she/it) + Object\nNegative: Subject + do/does + not + V1 + Object\nQuestion: Do/Does + Subject + V1 + Object + ?',
    hindiExplanation: 'वर्तमान अनिश्चित काल (Present Simple) का प्रयोग दैनिक दिनचर्या, आदत और सार्वभौमिक सत्य (Universal facts) के लिए होता है। पहचान: वाक्य के अंत में "ता है, ती है, ते हैं" आता है। He/She/It/Singular के साथ क्रिया में s/es लगता है।',
    examples: [
      { en: 'She drinks green tea every morning before going for a jog.', hi: 'वह सुबह जॉगिंग पर जाने से पहले हर दिन ग्रीन टी पीती है।' },
      { en: 'The sun rises in the east and provides light to the entire earth.', hi: 'सूर्य पूर्व में उगता है और पूरी पृथ्वी को प्रकाश प्रदान करता है।' },
      { en: 'My parents live in a quiet countryside town near Pune.', hi: 'मेरे माता-पिता पुणे के पास एक शांत ग्रामीण शहर में रहते हैं।' },
      { en: 'Does your brother work for a multinational software company?', hi: 'क्या आपका भाई किसी बहुराष्ट्रीय सॉफ्टवेयर कंपनी में काम करता है?' },
      { en: 'I do not consume sugary beverages during my fitness training.', hi: 'मैं अपने फिटनेस प्रशिक्षण के दौरान मीठे पेय पदार्थों का सेवन नहीं करता हूँ।' }
    ],
    commonMistakes: [
      {
        wrong: 'He play tennis every weekend.',
        correct: 'He plays tennis every weekend.',
        reason: 'Third-person singular subjects (he/she/it) require the verb ending -s or -es.'
      },
      {
        wrong: 'She does not likes loud music.',
        correct: 'She does not like loud music.',
        reason: 'After "does", the main verb must be in its base form without -s.'
      },
      {
        wrong: 'Water is boiling at 100 degrees Celsius.',
        correct: 'Water boils at 100 degrees Celsius.',
        reason: 'Scientific facts and general truths take the Present Simple, not Continuous.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-t1-1',
        type: 'fill_blank',
        prompt: 'My colleague always ______ (arrive / arrives) at work on time.',
        options: ['arrives', 'arrive'],
        correctAnswer: 'arrives',
        hint: 'My colleague = single person (he/she).',
        explanation: 'Singular third person takes the -s inflection.'
      }
    ],
    quiz: [
      {
        id: 'q-t1-1',
        question: 'Choose the correct sentence:',
        options: [
          'My brother fly planes for an airline.',
          'My brother flies planes for an airline.',
          'My brother is fly planes for an airline.',
          'My brother flys planes for an airline.'
        ],
        correctIndex: 1,
        explanation: 'For verbs ending in consonant + y (fly), change y to -ies (flies).',
        hindiTip: 'व्यंजन + y वाले शब्दों में y हटाकर -ies लगाया जाता है (fly → flies)।'
      }
    ]
  },
  {
    id: 'g-part2-2',
    part: 2,
    partTitle: 'Part 2: Complete Tenses Mastery',
    slug: 'present-continuous',
    title: 'Present Continuous Tense (Actions Happening Now & Current Trends)',
    level: 'A1',
    durationMins: 16,
    simpleExplanation: 'The Present Continuous tense describes actions that are happening right now at the moment of speaking, or temporary trends happening around this period of time.',
    formulaOrStructure: 'Positive: Subject + am/is/are + V-ing + Object\nNegative: Subject + am/is/are + not + V-ing\nQuestion: Am/Is/Are + Subject + V-ing + ?',
    hindiExplanation: 'अपूर्ण वर्तमान काल (Present Continuous) वर्तमान समय में चल रहे काम को दर्शाता है। पहचान: वाक्य के अंत में "रहा है, रही है, रहे हैं" आता है। संरचना: is/am/are + V1 + ing। Stative क्रियाओं (love, believe, know) के साथ यह Tense नहीं लगता।',
    examples: [
      { en: 'Look! The children are playing joyfully in the garden.', hi: 'देखो! बच्चे बगीचे में खुशी से खेल रहे हैं।' },
      { en: 'I am currently preparing for my civil services examination.', hi: 'मैं वर्तमान में अपनी सिविल सेवा परीक्षा की तैयारी कर रहा हूँ।' },
      { en: 'She is working on an important quarterly marketing report.', hi: 'वह एक महत्वपूर्ण त्रैमासिक विपणन रिपोर्ट पर काम कर रही है।' },
      { en: 'Why are they arguing about such a trivial matter?', hi: 'वे इतने मामूली मुद्दे पर क्यों बहस कर रहे हैं?' },
      { en: 'Global temperatures are rising due to greenhouse emissions.', hi: 'ग्रीनहाउस उत्सर्जन के कारण वैश्विक तापमान बढ़ रहा है।' }
    ],
    commonMistakes: [
      {
        wrong: 'I am knowing him very well.',
        correct: 'I know him very well.',
        reason: 'Stative verbs like "know", "believe", "understand" express mental states and do not use continuous forms.'
      },
      {
        wrong: 'They are listen to the lecture right now.',
        correct: 'They are listening to the lecture right now.',
        reason: 'Continuous tenses require the -ing participle after the "be" verb.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-t2-1',
        type: 'fill_blank',
        prompt: 'Listen! Someone ______ (knocks / is knocking) at the front door.',
        options: ['is knocking', 'knocks'],
        correctAnswer: 'is knocking',
        hint: '"Listen!" signals an action occurring right at this moment.',
        explanation: 'Immediate sensory prompts ("Listen!", "Look!") require the Present Continuous.'
      }
    ],
    quiz: [
      {
        id: 'q-t2-1',
        question: 'Which of the following sentences is grammatically correct?',
        options: [
          'I am understanding this rule completely.',
          'I understand this rule completely.',
          'I am understand this rule completely.',
          'I understands this rule completely.'
        ],
        correctIndex: 1,
        explanation: '"Understand" is a stative verb; it does not take the continuous form.',
        hindiTip: 'Understand, know, believe जैसी क्रियाएं आमतौर पर -ing नहीं लेतीं।'
      }
    ]
  },
  {
    id: 'g-part2-3',
    part: 2,
    partTitle: 'Part 2: Complete Tenses Mastery',
    slug: 'present-perfect',
    title: 'Present Perfect Tense (Past Actions with Present Impact & Experiences)',
    level: 'A2',
    durationMins: 18,
    simpleExplanation: 'The Present Perfect tense connects the past to the present. It describes life experiences (without exact dates), recent actions with present results, or states that began in the past and continue today. Never use specific past time markers (like yesterday or in 2020) with this tense.',
    formulaOrStructure: 'Positive: Subject + have/has + V3 (Past Participle) + Object\nNegative: Subject + have/has + not + V3\nQuestion: Have/Has + Subject + V3 + ?',
    hindiExplanation: 'पूर्ण वर्तमान काल (Present Perfect) बताता है कि कोई कार्य भूतकाल में पूरा हुआ है लेकिन उसका प्रभाव या महत्व वर्तमान में मौजूद है। पहचान: "चुका है, चुकी है, या है, ई है"। Have/Has + क्रिया का तीसरा रूप (V3)। इसके साथ भूतकाल का निश्चित समय (जैसे yesterday, last year) कभी न लगाएं।',
    examples: [
      { en: 'I have visited five different European countries in my life.', hi: 'मैंने अपने जीवन में पांच अलग-अलग यूरोपीय देशों का दौरा किया है।' },
      { en: 'She has already finished her master\'s degree thesis.', hi: 'वह पहले ही अपनी मास्टर डिग्री की थीसिस पूरी कर चुकी है।' },
      { en: 'They have lived in this residential complex for seven years.', hi: 'वे पिछले सात वर्षों से इस आवासीय परिसर में रह रहे हैं।' },
      { en: 'Have you ever tried traditional authentic Japanese sushi?', hi: 'क्या आपने कभी पारंपरिक प्रामाणिक जापानी सुशी चखी है?' },
      { en: 'The train has just arrived on platform number three.', hi: 'ट्रेन अभी-अभी प्लेटफॉर्म नंबर तीन पर पहुंची है।' }
    ],
    commonMistakes: [
      {
        wrong: 'I have seen him yesterday at the cinema.',
        correct: 'I saw him yesterday at the cinema.',
        reason: 'When a specific past time ("yesterday") is stated, you MUST use the Past Simple ("saw"), not the Present Perfect.'
      },
      {
        wrong: 'She has went to Dubai for business.',
        correct: 'She has gone to Dubai for business.',
        reason: 'After have/has, always use the third form of the verb (V3: gone), not the second form (went).'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-t3-1',
        type: 'fill_blank',
        prompt: 'She ______ (has lived / lived) in Delhi since 2018. (She still lives there today).',
        options: ['has lived', 'lived'],
        correctAnswer: 'has lived',
        hint: '"Since 2018" indicates an ongoing state up to the present.',
        explanation: 'Use Present Perfect with "since" to indicate an ongoing action starting in the past.'
      }
    ],
    quiz: [
      {
        id: 'q-t3-1',
        question: 'Which sentence is INCORRECT?',
        options: [
          'I have never been to Australia.',
          'He has finished his work two hours ago.',
          'They have already submitted their assignments.',
          'Has she ever eaten Thai cuisine?'
        ],
        correctIndex: 1,
        explanation: '"Two hours ago" is a specific past time expression, so it requires Past Simple: "He finished his work two hours ago."',
        hindiTip: 'Ago, yesterday, in 2010 आदि के साथ Present Perfect नहीं, Past Simple लगता है।'
      }
    ]
  },
  {
    id: 'g-part2-4',
    part: 2,
    partTitle: 'Part 2: Complete Tenses Mastery',
    slug: 'present-perfect-continuous',
    title: 'Present Perfect Continuous Tense (Duration from Past to Present)',
    level: 'B1',
    durationMins: 16,
    simpleExplanation: 'The Present Perfect Continuous tense emphasizes the duration of an ongoing action that started in the past and is still continuing now, or has just stopped with evident results. We use "since" for starting points and "for" for duration.',
    formulaOrStructure: 'Positive: Subject + have/has + been + V-ing + (since/for + time)\nSince + Point of time (since Monday, since 2015, since morning)\nFor + Period of time (for 3 hours, for 5 years, for two weeks)',
    hindiExplanation: 'पूर्ण अपूर्ण वर्तमान काल (Present Perfect Continuous) बताता है कि कोई कार्य भूतकाल में शुरू हुआ और वर्तमान में भी लगातार जारी है। पहचान: "से... रहा है/रही है"।\n- Since: निश्चित शुरुआती समय (since morning, since 2019)\n- For: समयावधि (for 2 hours, for 10 days)।',
    examples: [
      { en: 'I have been studying English grammar for two hours today.', hi: 'मैं आज दो घंटे से अंग्रेजी व्याकरण पढ़ रहा हूँ।' },
      { en: 'She has been working as a software architect since 2018.', hi: 'वह 2018 से सॉफ्टवेयर आर्किटेक्ट के रूप में काम कर रही हैं।' },
      { en: 'It has been raining continuously since early morning.', hi: 'सुबह से लगातार बारिश हो रही है।' },
      { en: 'How long have you been waiting for the bus?', hi: 'आप कितनी देर से बस का इंतजार कर रहे हैं?' },
      { en: 'His eyes are red because he has been working on the screen all night.', hi: 'उसकी आंखें लाल हैं क्योंकि वह पूरी रात स्क्रीन पर काम करता रहा है।' }
    ],
    commonMistakes: [
      {
        wrong: 'I am studying here since three years.',
        correct: 'I have been studying here for three years.',
        reason: 'Use "have been studying" (not "am studying") for actions continuing over time, and use "for" (not "since") with durations.'
      },
      {
        wrong: 'She has been knowing him for ten years.',
        correct: 'She has known him for ten years.',
        reason: 'Stative verbs like "know" cannot be used in continuous forms; use Present Perfect Simple instead.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-t4-1',
        type: 'fill_blank',
        prompt: 'They have been waiting at the airport ______ (since / for) three hours.',
        options: ['for', 'since'],
        correctAnswer: 'for',
        hint: '"Three hours" is a duration of time.',
        explanation: 'Use "for" with durations (periods) of time.'
      }
    ],
    quiz: [
      {
        id: 'q-t4-1',
        question: 'Choose the correct preposition: "Rohan has been working on this design ______ 9:00 AM."',
        options: ['for', 'since', 'from', 'in'],
        correctIndex: 1,
        explanation: '9:00 AM is a specific starting point in time, so "since" is required.',
        hindiTip: 'निश्चित घड़ी के समय (9:00 AM) के साथ "since" आता है।'
      }
    ]
  },
  {
    id: 'g-part2-5',
    part: 2,
    partTitle: 'Part 2: Complete Tenses Mastery',
    slug: 'past-simple',
    title: 'Past Simple Tense (Completed Past Actions & Historic Events)',
    level: 'A1',
    durationMins: 16,
    simpleExplanation: 'The Past Simple tense is used to talk about actions that started and finished completely at a specific time in the past. Regular verbs add -ed (walk → walked), while irregular verbs have unique forms (go → went, write → wrote, see → saw).',
    formulaOrStructure: 'Positive: Subject + V2 (Past form) + Object\nNegative: Subject + did not + V1 (Base form) + Object\nQuestion: Did + Subject + V1 + Object + ?',
    hindiExplanation: 'भूतकाल अनिश्चित (Past Simple) किसी बीते हुए समय में पूरे हुए काम को बताता है। पहचान: "गया, देखा, खाया, सोया, किया"। सकारात्मक वाक्य में क्रिया का दूसरा रूप (V2) आता है। नकारात्मक और प्रश्नवाचक में "Did" के साथ हमेशा क्रिया का पहला रूप (V1) आता है।',
    examples: [
      { en: 'We visited the historic Taj Mahal during our winter vacation last year.', hi: 'हमने पिछले साल सर्दियों की छुट्टियों में ऐतिहासिक ताजमहल का दौरा किया था।' },
      { en: 'Alexander Fleming discovered penicillin in 1928.', hi: 'अलेक्जेंडर फ्लेमिंग ने 1928 में पेनिसिलिन की खोज की थी।' },
      { en: 'Did you attend the international leadership conference yesterday?', hi: 'क्या आपने कल अंतर्राष्ट्रीय नेतृत्व सम्मेलन में भाग लिया था?' },
      { en: 'She did not receive the official confirmation email from HR.', hi: 'उसे एचआर से आधिकारिक पुष्टि ईमेल प्राप्त नहीं हुआ।' },
      { en: 'He graduated with top honours from Oxford University in 2021.', hi: 'उन्होंने 2021 में ऑक्सफोर्ड विश्वविद्यालय से शीर्ष सम्मान के साथ स्नातक किया।' }
    ],
    commonMistakes: [
      {
        wrong: 'Did you called him last night?',
        correct: 'Did you call him last night?',
        reason: 'After "Did", always use the base form (V1: call), never the past form (called).'
      },
      {
        wrong: 'She did not went to the market.',
        correct: 'She did not go to the market.',
        reason: 'After "did not", use base verb "go", not "went".'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-t5-1',
        type: 'fill_blank',
        prompt: 'I ______ (buy / bought) this laptop two weeks ago.',
        options: ['bought', 'buy'],
        correctAnswer: 'bought',
        hint: '"Two weeks ago" indicates a completed past event.',
        explanation: 'Use the past tense form V2 "bought".'
      }
    ],
    quiz: [
      {
        id: 'q-t5-1',
        question: 'Identify the sentence with correct past tense usage:',
        options: [
          'Did he wrote the letter yesterday?',
          'He did not understood the instructions.',
          'They did not attend the meeting yesterday.',
          'She did saw the accident with her own eyes.'
        ],
        correctIndex: 2,
        explanation: '"They did not attend..." correctly pairs "did not" with base verb "attend".',
        hindiTip: 'Did / Did not के बाद हमेशा क्रिया की पहली फॉर्म आती है।'
      }
    ]
  },
  {
    id: 'g-part2-6',
    part: 2,
    partTitle: 'Part 2: Complete Tenses Mastery',
    slug: 'past-continuous',
    title: 'Past Continuous Tense (Actions in Progress in the Past & Interrupted Actions)',
    level: 'A2',
    durationMins: 16,
    simpleExplanation: 'The Past Continuous tense describes actions that were in progress at a specific moment in the past, or an ongoing background action that was interrupted by a shorter action in the Past Simple.',
    formulaOrStructure: 'Positive: Subject + was/were + V-ing + Object\nWas: I, He, She, It, Singular\nWere: You, We, They, Plural\nInterruption: Past Continuous (while/as) + Past Simple (when)',
    hindiExplanation: 'अपूर्ण भूतकाल (Past Continuous) बीते समय में चल रहे काम को दर्शाता है। पहचान: "रहा था, रही थी, रहे थे"।\nजब कोई काम हो रहा था और उसी बीच दूसरा काम हुआ: "While I was studying (Past Continuous), the phone rang (Past Simple)"।',
    examples: [
      { en: 'I was reading a book when the lights suddenly went out.', hi: 'मैं एक किताब पढ़ रहा था जब अचानक बत्तियाँ बुझ गईं।' },
      { en: 'While she was cooking dinner, her husband was setting the table.', hi: 'जब वह रात का खाना बना रही थी, तब उसका पति मेज सजा रहा था।' },
      { en: 'At 8:00 PM yesterday, we were watching an exciting documentary.', hi: 'कल रात 8:00 बजे, हम एक रोमांचक वृत्तचित्र देख रहे थे।' },
      { en: 'They were discussing the contract terms when the CEO walked in.', hi: 'वे अनुबंध की शर्तों पर चर्चा कर रहे थे जब सीईओ अंदर आए।' },
      { en: 'Was he driving to the airport when the heavy storm began?', hi: 'क्या वह हवाई अड्डे की ओर गाड़ी चला रहा था जब भारी तूफान शुरू हुआ?' }
    ],
    commonMistakes: [
      {
        wrong: 'When the phone rang, I cooked dinner.',
        correct: 'When the phone rang, I was cooking dinner.',
        reason: 'Cooking was the continuous ongoing background action interrupted by the phone ringing.'
      },
      {
        wrong: 'They was walking in the park.',
        correct: 'They were walking in the park.',
        reason: '"They" is plural and requires the auxiliary "were", not "was".'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-t6-1',
        type: 'fill_blank',
        prompt: 'While my sister ______ (slept / was sleeping), someone knocked on the window.',
        options: ['was sleeping', 'slept'],
        correctAnswer: 'was sleeping',
        hint: '"While" introduces an action that was in progress over time.',
        explanation: 'Past Continuous expresses the ongoing background situation.'
      }
    ],
    quiz: [
      {
        id: 'q-t6-1',
        question: 'Choose the correct combination: "He ______ his bike when he ______ on the wet pavement."',
        options: [
          'was riding, slipped',
          'rode, was slipping',
          'was riding, was slipping',
          'rode, slipped'
        ],
        correctIndex: 0,
        explanation: 'Riding the bike was the ongoing action (was riding); slipping was the sudden event that interrupted it (slipped).',
        hindiTip: 'चल रही क्रिया Past Continuous (was riding) में और अचानक हुई घटना Past Simple (slipped) में आती है।'
      }
    ]
  },
  {
    id: 'g-part2-7',
    part: 2,
    partTitle: 'Part 2: Complete Tenses Mastery',
    slug: 'past-perfect',
    title: 'Past Perfect Tense (The "Past Before the Past")',
    level: 'B1',
    durationMins: 17,
    simpleExplanation: 'The Past Perfect tense clarifies the order of two past events: it is used for the earlier action that happened before another past action occurred. The earlier action uses Past Perfect (had + V3), and the later action uses Past Simple (V2).',
    formulaOrStructure: 'Positive: Subject + had + V3 (Past Participle) + Object\nTime Connectors: Before, After, By the time, When\nFormula: Earlier action (Had + V3) ... Later action (V2)',
    hindiExplanation: 'पूर्ण भूतकाल (Past Perfect) को "भूतकाल से भी पहले का भूतकाल" कहा जाता है। जब अतीत में दो काम हुए हों, तो जो काम पहले खत्म हुआ उसके लिए "Had + V3" लगता है और जो काम बाद में हुआ उसके लिए "Past Simple (V2)" लगता है। जैसे: "ट्रेन आने से पहले मरीज मर चुका था / मेरे स्टेशन पहुंचने से पहले ट्रेन जा चुकी थी"।',
    examples: [
      { en: 'When I reached the station, the express train had already departed.', hi: 'जब मैं स्टेशन पहुंचा, तो एक्सप्रेस ट्रेन पहले ही छूट चुकी थी।' },
      { en: 'She had completed her degree before she joined our corporate firm.', hi: 'हमारी कॉर्पोरेट फर्म में शामिल होने से पहले वह अपनी डिग्री पूरी कर चुकी थी।' },
      { en: 'By the time the fire brigade arrived, the neighbours had extinguished the fire.', hi: 'जब तक दमकल पहुंची, पड़ोसियों ने आग बुझा दी थी।' },
      { en: 'He realized he had left his important passport at the hotel desk.', hi: 'उसे एहसास हुआ कि वह अपना महत्वपूर्ण पासपोर्ट होटल के डेस्क पर भूल आया था।' },
      { en: 'Had you ever visited New York before you moved there last winter?', hi: 'क्या आप पिछले साल वहां बसने से पहले कभी न्यूयॉर्क गए थे?' }
    ],
    commonMistakes: [
      {
        wrong: 'When I reached the station, the train departed already.',
        correct: 'When I reached the station, the train had already departed.',
        reason: 'The departure happened before reaching the station, so it must be in the Past Perfect (had departed).'
      },
      {
        wrong: 'I had woke up at 7 AM yesterday.',
        correct: 'I woke up at 7 AM yesterday.',
        reason: 'Do not use Past Perfect for a single, isolated past action with no other prior reference point. Use Past Simple.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-t7-1',
        type: 'fill_blank',
        prompt: 'By the time the movie started, we ______ (had found / found) our seats.',
        options: ['had found', 'found'],
        correctAnswer: 'had found',
        hint: 'Finding seats happened before the movie started.',
        explanation: 'The earlier completed action takes "had found".'
      }
    ],
    quiz: [
      {
        id: 'q-t7-1',
        question: 'Which action happened FIRST in: "After she had locked all windows, she left the office"?',
        options: [
          'Leaving the office',
          'Locking all windows',
          'Both happened simultaneously',
          'Cannot be determined'
        ],
        correctIndex: 1,
        explanation: '"Had locked" is in the Past Perfect, which always indicates the earlier event.',
        hindiTip: 'Had + V3 वाला काम हमेशा पहले घटित हुआ होता है।'
      }
    ]
  },
  {
    id: 'g-part2-8',
    part: 2,
    partTitle: 'Part 2: Complete Tenses Mastery',
    slug: 'past-perfect-continuous',
    title: 'Past Perfect Continuous Tense (Past Duration Interrupted in Past)',
    level: 'B2',
    durationMins: 16,
    simpleExplanation: 'The Past Perfect Continuous describes an action that started in the past, had been going on continuously for a period of time, and was still in progress or had just ended right before another past event occurred.',
    formulaOrStructure: 'Positive: Subject + had + been + V-ing + (for/since + duration)\nNegative: Subject + had + not + been + V-ing\nQuestion: Had + Subject + been + V-ing + ?',
    hindiExplanation: 'पूर्ण अपूर्ण भूतकाल (Past Perfect Continuous) उस कार्य को दर्शाता है जो भूतकाल में किसी निश्चित बिंदु से पहले काफी समय से लगातार चल रहा था। उदाहरण: "वह दो घंटे से पढ़ रहा था जब बत्ती गुल हो गई"। Had been + V-ing + for/since।',
    examples: [
      { en: 'They had been driving for six hours before they found a decent motel.', hi: 'उन्हें एक अच्छा मोटल मिलने से पहले वे छह घंटे से गाड़ी चला रहे थे।' },
      { en: 'She was exhausted because she had been working on the presentation all night.', hi: 'वह बहुत थक गई थी क्योंकि वह पूरी रात प्रस्तुति पर काम करती रही थी।' },
      { en: 'The ground was wet because it had been raining heavily for hours.', hi: 'जमीन गीली थी क्योंकि कई घंटों से भारी बारिश हो रही थी।' },
      { en: 'He had been teaching at the university for a decade before retiring.', hi: 'सेवानिवृत्त होने से पहले वह एक दशक तक विश्वविद्यालय में पढ़ाते रहे थे।' },
      { en: 'How long had you been studying French before you moved to Paris?', hi: 'पेरिस जाने से पहले आप कितने समय से फ्रेंच पढ़ रहे थे?' }
    ],
    commonMistakes: [
      {
        wrong: 'He was waiting for two hours when the bus finally arrived.',
        correct: 'He had been waiting for two hours when the bus finally arrived.',
        reason: 'To express duration leading up to a past event, use Past Perfect Continuous, not Past Continuous.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-t8-1',
        type: 'fill_blank',
        prompt: 'Ravi was breathless because he ______ (had been running / was running) for 30 minutes.',
        options: ['had been running', 'was running'],
        correctAnswer: 'had been running',
        hint: 'Continuous duration causing a visible past result.',
        explanation: 'Past Perfect Continuous links past duration to a past result.'
      }
    ],
    quiz: [
      {
        id: 'q-t8-1',
        question: 'Choose the sentence that correctly shows continuous duration before a past moment:',
        options: [
          'She had been studying for three hours before taking a coffee break.',
          'She was studying for three hours before took a coffee break.',
          'She studied for three hours since taking a coffee break.',
          'She had studied continuous before taking a coffee break.'
        ],
        correctIndex: 0,
        explanation: '"Had been studying for three hours" accurately conveys the duration preceding the break.',
        hindiTip: 'भूतकाल में किसी काम के जारी रहने की अवधि Had been + V-ing द्वारा दर्शाई जाती है।'
      }
    ]
  },
  {
    id: 'g-part2-9',
    part: 2,
    partTitle: 'Part 2: Complete Tenses Mastery',
    slug: 'future-simple',
    title: 'Future Simple Tense (Will vs Going to & Spontaneous Decisions)',
    level: 'A2',
    durationMins: 16,
    simpleExplanation: 'The Future Simple tense expresses predictions, spontaneous decisions, promises, and future facts. We use "WILL" for instant decisions made at the moment of speaking, promises, and offers. We use "BE GOING TO" for pre-arranged plans or predictions based on visible present evidence.',
    formulaOrStructure: 'Will: Subject + will + V1 (Base verb) + Object (Spontaneous: "I will help you")\nGoing to: Subject + am/is/are + going to + V1 (Prior Plan: "I am going to visit Mumbai tomorrow")',
    hindiExplanation: 'भविष्य अनिश्चित काल (Future Simple):\n- Will: तुरंत लिया गया फैसला (Spontaneous decision), वादा, या भविष्यवाणी।\n- Be going to: पहले से तय योजना (Pre-planned) या आंखों के सामने दिख रहे सबूत के आधार पर भविष्यवाणी (जैसे "बादल काले हैं, बारिश होने वाली है - It is going to rain")।',
    examples: [
      { en: 'I will definitely send you the updated project report by 5:00 PM.', hi: 'मैं शाम 5:00 बजे तक आपको अपडेटेड प्रोजेक्ट रिपोर्ट निश्चित रूप से भेज दूंगा।' },
      { en: 'Look at those dark grey clouds; it is going to rain soon.', hi: 'उन काले बादलों को देखो; जल्द ही बारिश होने वाली है।' },
      { en: 'Don\'t carry that heavy box alone; I will help you with it.', hi: 'उस भारी बक्से को अकेले मत उठाओ; मैं इसमें तुम्हारी मदद करूंगा।' },
      { en: 'Next month, my sister is going to start her master\'s degree in Canada.', hi: 'अगले महीने, मेरी बहन कनाडा में अपनी मास्टर डिग्री शुरू करने जा रही है।' },
      { en: 'Will artificial intelligence transform healthcare over the next decade?', hi: 'क्या आर्टिफिशियल इंटेलिजेंस अगले दशक में स्वास्थ्य सेवा को बदल देगा?' }
    ],
    commonMistakes: [
      {
        wrong: 'If it will rain tomorrow, we will cancel the picnic.',
        correct: 'If it rains tomorrow, we will cancel the picnic.',
        reason: 'In first conditional clauses (after if/when/as soon as), use the Present Simple, never "will".'
      },
      {
        wrong: 'The phone is ringing. I am going to answer it.',
        correct: 'The phone is ringing. I will answer it.',
        reason: 'Answering a ringing phone is an instant spontaneous decision, which requires "will".'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-t9-1',
        type: 'fill_blank',
        prompt: 'A: "I have a terrible headache." B: "Wait, I ______ (will get / am going to get) you some water and aspirin."',
        options: ['will get', 'am going to get'],
        correctAnswer: 'will get',
        hint: 'This is an immediate, spontaneous offer of help.',
        explanation: 'Instant offers and decisions take "will".'
      }
    ],
    quiz: [
      {
        id: 'q-t9-1',
        question: 'Which sentence correctly expresses a pre-planned intention?',
        options: [
          'I will buy a new car next Monday; I booked the test drive yesterday.',
          'I am going to buy a new car next Monday; I booked the test drive yesterday.',
          'I buy a new car next Monday.',
          'I shall be buy a new car next Monday.'
        ],
        correctIndex: 1,
        explanation: 'Pre-planned intentions arranged earlier take "be going to".',
        hindiTip: 'पहले से सोची-समझी योजना के लिए "going to" का प्रयोग सबसे स्वाभाविक है।'
      }
    ]
  },
  {
    id: 'g-part2-10',
    part: 2,
    partTitle: 'Part 2: Complete Tenses Mastery',
    slug: 'future-continuous',
    title: 'Future Continuous Tense (Actions in Progress at a Future Time)',
    level: 'B1',
    durationMins: 16,
    simpleExplanation: 'The Future Continuous tense indicates an action that will be ongoing and in progress at a specific time in the future, or routine future events.',
    formulaOrStructure: 'Positive: Subject + will be + V-ing + Object\nNegative: Subject + will not (won\'t) be + V-ing\nQuestion: Will + Subject + be + V-ing + ?',
    hindiExplanation: 'अपूर्ण भविष्य काल (Future Continuous) भविष्य के किसी निश्चित समय पर जारी रहने वाले कार्य को दर्शाता है। पहचान: "रहा होगा, रही होगी, रहे होंगे"। Will be + V-ing।\nउदाहरण: "कल इस समय मैं विमान में उड़ रहा हूँगा - At this time tomorrow, I will be flying to London"।',
    examples: [
      { en: 'This time tomorrow, I will be flying over the Atlantic Ocean.', hi: 'कल इस समय, मैं अटलांटिक महासागर के ऊपर उड़ रहा हूँगा।' },
      { en: 'At 10:00 AM on Monday, we will be presenting our proposal to the board.', hi: 'सोमवार सुबह 10:00 बजे, हम बोर्ड के सामने अपना प्रस्ताव प्रस्तुत कर रहे होंगे।' },
      { en: 'Please do not call after 11:00 PM; I will be sleeping.', hi: 'कृपया रात 11:00 बजे के बाद फोन न करें; मैं सो रहा हूँगा।' },
      { en: 'Will you be using your laptop this afternoon, or may I borrow it?', hi: 'क्या आप आज दोपहर अपने लैपटॉप का उपयोग कर रहे होंगे, या क्या मैं इसे उधार ले सकता हूँ?' },
      { en: 'They will be celebrating their silver jubilee anniversary next weekend.', hi: 'वे अगले सप्ताहांत अपनी रजत जयंती वर्षगांठ मना रहे होंगे।' }
    ],
    commonMistakes: [
      {
        wrong: 'At 8 PM tonight, I will watch the cricket match.',
        correct: 'At 8 PM tonight, I will be watching the cricket match.',
        reason: 'At that specific time, the action of watching will already be in progress, so use Future Continuous.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-t10-1',
        type: 'fill_blank',
        prompt: 'Tomorrow at 3 PM, she ______ (will take / will be taking) her final exam.',
        options: ['will be taking', 'will take'],
        correctAnswer: 'will be taking',
        hint: 'The exam will be in progress at 3 PM.',
        explanation: 'Use Future Continuous for actions in progress at a specific future hour.'
      }
    ],
    quiz: [
      {
        id: 'q-t10-1',
        question: 'Complete: "Don\'t visit him at 2:00 PM; he ______ his team meeting."',
        options: ['will be chairing', 'chairs', 'will chair', 'is chaired'],
        correctIndex: 0,
        explanation: '"Will be chairing" shows the meeting will be in progress at 2:00 PM.',
        hindiTip: 'भविष्य के निश्चित समय पर चल रहे कार्य के लिए "will be + ing" आता है।'
      }
    ]
  },
  {
    id: 'g-part2-11',
    part: 2,
    partTitle: 'Part 2: Complete Tenses Mastery',
    slug: 'future-perfect',
    title: 'Future Perfect Tense (Actions Completed Before a Future Deadline)',
    level: 'B2',
    durationMins: 17,
    simpleExplanation: 'The Future Perfect tense describes an action that will be completed before a specific point of time or deadline in the future. It is very frequently used with time expressions starting with "BY" (by next month, by 2030, by the time you arrive).',
    formulaOrStructure: 'Positive: Subject + will have + V3 (Past Participle) + Object\nTime Markers: By [time], By the time + Present Simple\nFormula: By next year, I will have graduated.',
    hindiExplanation: 'पूर्ण भविष्य काल (Future Perfect) बताता है कि कोई कार्य भविष्य के किसी निश्चित समय या समय-सीमा (Deadline) से पहले पूरा "हो चुका होगा"। पहचान: "चुका होगा, चुकी होगी"। Will have + V3।\n"By next Monday, I will have finished this book" (अगले सोमवार तक मैं यह किताब पूरी कर चुका हूँगा)।',
    examples: [
      { en: 'By December 2026, they will have completed the new metro rail project.', hi: 'दिसंबर 2026 तक, वे नई मेट्रो रेल परियोजना पूरी कर चुके होंगे।' },
      { en: 'By the time you wake up tomorrow, I will have left for the airport.', hi: 'जब तक आप कल जागेंगे, मैं हवाई अड्डे के लिए निकल चुका हूँगा।' },
      { en: 'She will have saved enough money to buy her first apartment by next year.', hi: 'वह अगले साल तक अपना पहला अपार्टमेंट खरीदने के लिए पर्याप्त पैसे बचा चुकी होगी।' },
      { en: 'Will you have finished the financial audit before the board meeting begins?', hi: 'क्या आप बोर्ड की बैठक शुरू होने से पहले वित्तीय ऑडिट पूरा कर चुके होंगे?' },
      { en: 'Scientists predict that we will have found sustainable energy solutions by 2040.', hi: 'वैज्ञानिकों का अनुमान है कि 2040 तक हम संधारणीय ऊर्जा समाधान खोज चुके होंगे।' }
    ],
    commonMistakes: [
      {
        wrong: 'By next year, I will finish my graduation.',
        correct: 'By next year, I will have finished my graduation.',
        reason: 'Expressions starting with "By [future date]" indicate completion prior to that deadline, demanding Future Perfect.'
      },
      {
        wrong: 'By the time he will arrive, we will have left.',
        correct: 'By the time he arrives, we will have left.',
        reason: 'In time clauses starting with "by the time", use Present Simple (arrives), not "will arrive".'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-t11-1',
        type: 'fill_blank',
        prompt: 'By 5 PM, the engineers ______ (will repair / will have repaired) the server issue.',
        options: ['will have repaired', 'will repair'],
        correctAnswer: 'will have repaired',
        hint: '"By 5 PM" marks a deadline before which the repair is completed.',
        explanation: 'Use Future Perfect "will have repaired".'
      }
    ],
    quiz: [
      {
        id: 'q-t11-1',
        question: 'Fill in the blank: "By the time our boss returns next Friday, we ______ all customer invoices."',
        options: ['will process', 'will have processed', 'have processed', 'processed'],
        correctIndex: 1,
        explanation: '"Will have processed" correctly signifies completion prior to the boss\'s return.',
        hindiTip: 'By [समय] के साथ हमेशा Future Perfect (will have + V3) आता है।'
      }
    ]
  },
  {
    id: 'g-part2-12',
    part: 2,
    partTitle: 'Part 2: Complete Tenses Mastery',
    slug: 'future-perfect-continuous',
    title: 'Future Perfect Continuous Tense (Continuous Duration Looking Back from the Future)',
    level: 'B2',
    durationMins: 17,
    simpleExplanation: 'The Future Perfect Continuous tense looks back from a point in the future and emphasizes the duration of an ongoing action that will have been continuing up to that time.',
    formulaOrStructure: 'Positive: Subject + will have been + V-ing + (for + duration)\nExample: Next month, I will have been working here for ten years.',
    hindiExplanation: 'पूर्ण अपूर्ण भविष्य काल (Future Perfect Continuous) भविष्य के किसी बिंदु पर किसी कार्य के लगातार जारी रहने की अवधि को दर्शाता है।\nसूत्र: Will have been + V-ing + for [समयावधि]।\nउदाहरण: "अगले महीने, मुझे इस कंपनी में काम करते हुए 10 साल पूरे हो रहे होंगे"।',
    examples: [
      { en: 'By next October, Dr. Sharma will have been teaching at this medical college for twenty-five years.', hi: 'अगले अक्टूबर तक, डॉ. शर्मा को इस मेडिकल कॉलेज में पढ़ाते हुए पच्चीस साल हो जाएंगे।' },
      { en: 'When the marathon ends, the athletes will have been running for over four hours.', hi: 'मैराथन समाप्त होने पर, एथलीट चार घंटे से अधिक समय से दौड़ रहे होंगे।' },
      { en: 'By midnight, we will have been driving continuously across three states for twelve hours.', hi: 'आधी रात तक, हम बारह घंटे से लगातार तीन राज्यों में गाड़ी चलाते रहे होंगे।' },
      { en: 'In July, she will have been learning classical violin for seven years.', hi: 'जुलाई में, वह सात साल से शास्त्रीय वायलिन सीख रही होगी।' },
      { en: 'Will you have been living in this city for five years by next summer?', hi: 'क्या अगली गर्मियों तक आप इस शहर में पांच साल से रह रहे होंगे?' }
    ],
    commonMistakes: [
      {
        wrong: 'Next year, I will be working here for ten years.',
        correct: 'Next year, I will have been working here for ten years.',
        reason: 'To express the accumulation of duration up to a future point, use Future Perfect Continuous, not Future Continuous.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe-t12-1',
        type: 'fill_blank',
        prompt: 'In December, they ______ (will have been living / will live) in this apartment for ten years.',
        options: ['will have been living', 'will live'],
        correctAnswer: 'will have been living',
        hint: 'Emphasizes a 10-year continuous duration reached in December.',
        explanation: 'Future Perfect Continuous accurately expresses the ongoing duration.'
      }
    ],
    quiz: [
      {
        id: 'q-t12-1',
        question: 'Which sentence correctly expresses future duration?',
        options: [
          'By 2027, he will have been heading the department for a decade.',
          'By 2027, he will head the department for a decade.',
          'By 2027, he is heading the department since a decade.',
          'By 2027, he will be head the department.'
        ],
        correctIndex: 0,
        explanation: '"Will have been heading... for a decade" accurately measures ongoing duration at a future date.',
        hindiTip: 'भविष्य की तारीख पर अवधि मापने के लिए "will have been + ing" का प्रयोग होता है।'
      }
    ]
  }
];
