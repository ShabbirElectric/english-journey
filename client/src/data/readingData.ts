import { ReadingPassage } from '../types';

export const readingPassagesList: ReadingPassage[] = [
  {
    id: 'rp-coffee-catchup',
    title: 'A Sunday Catch-up at the Neighborhood Cafe',
    level: 'Medium',
    category: 'Daily Life & Friendship',
    readTimeMins: 3,
    passage: `Every Sunday afternoon, Aman visits a small cafe near his apartment to relax and catch up with his close friend, Rohan. The cafe has comfortable wooden armchairs, soft background music, and a warm smell of freshly roasted coffee beans.

Last weekend, Rohan arrived with a bright smile on his face. He had exciting news: after months of hard work, he finally received a promotion at his software company. Aman was thrilled to hear this because he knew how much effort Rohan had put into improving his daily communication skills.

"Honestly, Aman, practicing speaking every single day made all the difference," Rohan explained as he sipped his hot cappuccino. "Earlier, I used to hesitate during client calls. But once I started practicing short daily conversations, my confidence skyrocketed. Actually, my manager specifically praised how clearly I presented our project roadmap last Tuesday."

Aman nodded in agreement. Hearing his friend's success story motivated him to take his own daily learning goals more seriously. They spent the next two hours laughing, discussing their upcoming weekend plans, and sharing helpful tips for speaking naturally without fear. It was the perfect way to recharge energy before a busy new work week.`,
    vocabularyList: [
      { id: 'v-1', word: 'Catch up', simpleMeaning: 'Talk to a friend to hear their recent news', romanHindiMeaning: 'Haal-chaal lena / Purane dost se baatein karna', pronunciationGuide: 'KACH-up', dailyLifeExample: 'Let us catch up over tea this Sunday.', practiceSentence: 'I caught up with my school friend yesterday.' },
      { id: 'v-2', word: 'Roasted', simpleMeaning: 'Cooked or baked with dry heat (like coffee beans)', romanHindiMeaning: 'Bhuna hua', pronunciationGuide: 'ROHST-id', dailyLifeExample: 'The aroma of roasted coffee filled the room.', practiceSentence: 'I enjoy roasted peanuts as an evening snack.' },
      { id: 'v-3', word: 'Promotion', simpleMeaning: 'Advancement to a higher position or rank at work', romanHindiMeaning: 'Tarakki / Unchi post milna', pronunciationGuide: 'pruh-MOH-shun', dailyLifeExample: 'She earned a promotion to senior manager.', practiceSentence: 'Hard work often leads to a well-deserved promotion.' },
      { id: 'v-4', word: 'Thrilled', simpleMeaning: 'Extremely happy and excited', romanHindiMeaning: 'Bahut zyada khush / Romanchit', pronunciationGuide: 'THRILLD', dailyLifeExample: 'He was thrilled to receive the job offer.', practiceSentence: 'I was thrilled to see my test score improve.' },
      { id: 'v-5', word: 'Honestly', simpleMeaning: 'In a sincere and truthful way', romanHindiMeaning: 'Sach kahoon toh / Imaandari se', pronunciationGuide: 'ON-ist-lee', dailyLifeExample: 'Honestly, I was quite nervous at first.', practiceSentence: 'Honestly, this dish tastes delicious.' },
      { id: 'v-6', word: 'Hesitate', simpleMeaning: 'To pause before doing something because you are nervous or unsure', romanHindiMeaning: 'Hichkichana / Jhijhakna', pronunciationGuide: 'HEZ-i-tayt', dailyLifeExample: 'Do not hesitate to ask questions if you don\'t understand.', practiceSentence: 'He hesitated before raising his hand in the meeting.' },
      { id: 'v-7', word: 'Skyrocketed', simpleMeaning: 'Increased very quickly to a high level', romanHindiMeaning: 'Achanak tezi se badh gaya', pronunciationGuide: 'SKY-rok-it-id', dailyLifeExample: 'Her spoken confidence skyrocketed within a month.', practiceSentence: 'Fuel prices skyrocketed last winter.' },
      { id: 'v-8', word: 'Actually', simpleMeaning: 'As a matter of fact / really', romanHindiMeaning: 'Asal mein / Sach mein', pronunciationGuide: 'AK-choo-uh-lee', dailyLifeExample: 'Actually, I already know the answer.', practiceSentence: 'Actually, the movie was much better than I expected.' },
      { id: 'v-9', word: 'Motivated', simpleMeaning: 'Filled with enthusiasm and determination to do something', romanHindiMeaning: 'Prerit / Josh se bhara hua', pronunciationGuide: 'MOH-ti-vay-tid', dailyLifeExample: 'His encouragement motivated me to study harder.', practiceSentence: 'Setting clear goals keeps me motivated every day.' },
      { id: 'v-10', word: 'Recharge', simpleMeaning: 'Get your energy and enthusiasm back after being tired', romanHindiMeaning: 'Dobara taaza-dum hona / Energy wapas pana', pronunciationGuide: 'ree-CHAHRJ', dailyLifeExample: 'A good night\'s sleep helps you recharge for the morning.', practiceSentence: 'I like spending weekends outdoors to recharge my mind.' }
    ],
    explainedSentences: [
      {
        sentence: 'Practicing speaking every single day made all the difference.',
        breakdown: 'The phrase "made all the difference" means it had a massive positive impact on the final result.',
        romanHindi: 'Iska matlab hai: "Roz bolne ki practice karne se sabse bada fark pada."'
      },
      {
        sentence: 'Earlier, I used to hesitate during client calls.',
        breakdown: '"Used to" indicates a past habit that no longer happens in the present.',
        romanHindi: '"Pehle main client calls ke dauran hichkichaya karta tha."'
      },
      {
        sentence: 'Once I started practicing short daily conversations, my confidence skyrocketed.',
        breakdown: '"Once" here functions as "as soon as / after". "Skyrocketed" is a lively expression for rapid improvement.',
        romanHindi: '"Jaise hi maine chhote daily dialogue bolna shuru kiya, mera confidence aasmaan par pahunch gaya."'
      },
      {
        sentence: 'My manager specifically praised how clearly I presented our project roadmap.',
        breakdown: '"Specifically praised" highlights that praise was given for a particular clear skill.',
        romanHindi: '"Mere manager ne khaas taur par taareef ki ki maine project roadmap kitne saaf tareeke se samjhaya."'
      },
      {
        sentence: 'It was the perfect way to recharge energy before a busy new work week.',
        breakdown: '"Recharge energy" is a natural collocation for getting refreshed before returning to work.',
        romanHindi: '"Busy naye hafte se pehle dobara taaza-dum hone ka yeh sabse behtareen tareeka tha."'
      }
    ],
    mcqQuestions: [
      {
        id: 'rq-1',
        question: 'Why was Aman thrilled for his friend Rohan?',
        options: [
          'Rohan won a holiday trip to London',
          'Rohan received a well-deserved promotion at work',
          'Rohan opened his own cafe in Mumbai',
          'Rohan bought a new sports car'
        ],
        correctIndex: 1,
        explanation: 'The passage explicitly states that Rohan received a promotion after months of hard work.',
        romanHindiTip: 'Passage mein bataya gaya hai ki Rohan ko office mein promotion mila.'
      },
      {
        id: 'rq-2',
        question: 'What habit helped Rohan overcome his hesitation on client calls?',
        options: [
          'Watching television late at night',
          'Practicing speaking English in short daily conversations',
          'Reading dictionaries for 5 hours without speaking',
          'Avoiding talking to his manager completely'
        ],
        correctIndex: 1,
        explanation: 'Rohan explained that practicing short conversations every day built his confidence.',
        romanHindiTip: 'Roz chhote English dialogues bolne se uski jhijhak door hui.'
      },
      {
        id: 'rq-3',
        question: 'What did Rohan\'s manager specifically praise him for?',
        options: [
          'Arriving 2 hours late to office',
          'How clearly he presented the project roadmap',
          'For cooking cappuccino at work',
          'Writing short poems'
        ],
        correctIndex: 1,
        explanation: 'His manager praised how clearly and articulately he presented the project roadmap.',
        romanHindiTip: 'Manager ne roadmap presentation ki taareef ki thi.'
      },
      {
        id: 'rq-4',
        question: 'What does the word "hesitate" mean in this story?',
        options: [
          'To run very fast',
          'To pause or hold back because of nervousness',
          'To speak loudly in anger',
          'To fall asleep suddenly'
        ],
        correctIndex: 1,
        explanation: 'To hesitate means to pause or feel reluctant because of lack of confidence.',
        romanHindiTip: 'Hesitate ka matlab hai hichkichana ya jhijhakna.'
      },
      {
        id: 'rq-5',
        question: 'How did Aman feel after listening to Rohan\'s story?',
        options: [
          'He felt jealous and left immediately',
          'He felt motivated to take his own daily learning more seriously',
          'He decided to quit his job',
          'He felt completely bored'
        ],
        correctIndex: 1,
        explanation: 'Hearing Rohan\'s success inspired Aman to commit to his own daily practice.',
        romanHindiTip: 'Aman ko bhi apni daily English learning ke liye prerna mili.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'cq-1',
        question: 'Where do Aman and Rohan usually meet on Sunday afternoons?',
        suggestedAnswer: 'They meet at a cozy little cafe near Aman\'s apartment.',
        romanHindiHint: 'Aman ke apartment ke paas wale chhote cafe mein.'
      },
      {
        id: 'cq-2',
        question: 'What specific problem was Rohan facing before he started practicing English daily?',
        suggestedAnswer: 'He used to hesitate and feel nervous during official client phone calls.',
        romanHindiHint: 'Client calls ke dauran woh hichkichata tha aur nervous hota tha.'
      },
      {
        id: 'cq-3',
        question: 'What metaphor or idiom is used to describe how fast his confidence increased?',
        suggestedAnswer: 'The word "skyrocketed" was used, meaning his confidence soared very high quickly.',
        romanHindiHint: '"Skyrocketed" shabd ka use hua hai jiska matlab achanak kafi tezi se badhna hai.'
      },
      {
        id: 'cq-4',
        question: 'How long did the two friends spend talking at the cafe?',
        suggestedAnswer: 'They spent about two hours chatting, laughing, and discussing their plans.',
        romanHindiHint: 'Unhone lagbhag 2 ghante cafe mein bitaye.'
      },
      {
        id: 'cq-5',
        question: 'What is the main lesson you can learn from Rohan\'s experience for your own English Journey?',
        suggestedAnswer: 'Consistent daily speaking practice in small doses removes fear and produces dramatic real-life results.',
        romanHindiHint: 'Rozana thodi-thodi bolne ki practice karne se darr nikal jata hai aur bada badlaav aata hai.'
      }
    ]
  },
  {
    id: 'rp-daily-workplace',
    title: 'Managing a Busy Morning at the Office',
    level: 'Medium',
    category: 'Work & Studies',
    readTimeMins: 4,
    passage: `Pooja works as a marketing coordinator at a rapidly growing design firm in Bengaluru. On Monday morning, she stepped into the office, carrying her laptop and a fresh cup of green tea. Her schedule for the day was completely packed with tasks.

First, she had to reply to fifteen client emails that had arrived over the weekend. Instead of panicking about the long list, she organized her priorities using simple color-coded sticky notes. She answered urgent queries first and scheduled the rest for the afternoon.

At 11:30 AM, her team gathered in the main conference room for their weekly project review. In the past, Pooja used to stay quiet in meetings because she worried about making small grammar errors. However, her team lead had encouraged her to focus on sharing her thoughts clearly rather than worrying about perfection. Taking a deep breath, Pooja spoke up:

"Actually, our recent Instagram campaign had an engagement rate of 12%, which is higher than last month. Probably, we should allocate more budget to video reels next quarter."

Her colleagues nodded in agreement, and the manager praised her analytical thinking. At that moment, Pooja realized that clear daily communication is about expressing valuable ideas, not using complex dictionary words. By the time 6:00 PM rolled around, she felt a strong sense of accomplishment.`,
    vocabularyList: [
      { id: 'v-coord', word: 'Coordinator', simpleMeaning: 'A person who organizes different tasks or people to work together smoothly', romanHindiMeaning: 'Samanvayak / Kaam ko manage karne wala', pronunciationGuide: 'koh-OR-di-nay-tər', dailyLifeExample: 'She works as an event coordinator.', practiceSentence: 'Our project coordinator sent the updated schedule.' },
      { id: 'v-pack', word: 'Packed', simpleMeaning: 'Completely full or crowded with tasks or people', romanHindiMeaning: 'Khaacha-khach bhara hua / Kafi busy', pronunciationGuide: 'PAKT', dailyLifeExample: 'My calendar is completely packed today.', practiceSentence: 'The evening metro train was packed with passengers.' },
      { id: 'v-prior', word: 'Priorities', simpleMeaning: 'Things that are regarded as more important than others', romanHindiMeaning: 'Pehle karne wale zaroori kaam', pronunciationGuide: 'pry-OR-i-teez', dailyLifeExample: 'Set your daily priorities before starting work.', practiceSentence: 'Health and family should always be our top priorities.' },
      { id: 'v-urg', word: 'Urgent', simpleMeaning: 'Requiring immediate action or attention', romanHindiMeaning: 'Atyant zaroori / Turant dhyan dene yogya', pronunciationGuide: 'UR-jənt', dailyLifeExample: 'I received an urgent phone call from home.', practiceSentence: 'Please reply to this urgent email by 2:00 PM.' },
      { id: 'v-conf', word: 'Conference', simpleMeaning: 'A formal meeting for discussion or consultation', romanHindiMeaning: 'Sammelan / Badi meeting', pronunciationGuide: 'KON-fər-əns', dailyLifeExample: 'The annual tech conference is in December.', practiceSentence: 'We held our discussion in the main conference room.' },
      { id: 'v-alloc', word: 'Allocate', simpleMeaning: 'To distribute resources or money for a specific purpose', romanHindiMeaning: 'Baantna / Tay karna', pronunciationGuide: 'AL-uh-kayt', dailyLifeExample: 'We allocated twenty thousand rupees for advertising.', practiceSentence: 'Try to allocate at least 30 minutes daily for learning English.' },
      { id: 'v-engag', word: 'Engagement', simpleMeaning: 'Active involvement or interaction from people', romanHindiMeaning: 'Judaav / Logo ka response', pronunciationGuide: 'en-GAYJ-mənt', dailyLifeExample: 'The post received high customer engagement.', practiceSentence: 'Direct interaction increases team engagement.' },
      { id: 'v-acc2', word: 'Accomplishment', simpleMeaning: 'Something successfully completed or achieved', romanHindiMeaning: 'Safalta / Shandar uplabdhi', pronunciationGuide: 'uh-KOM-plish-mənt', dailyLifeExample: 'Finishing a marathon is a massive accomplishment.', practiceSentence: 'She felt a strong sense of accomplishment after finishing her report.' },
      { id: 'v-roll', word: 'Rolled around', simpleMeaning: 'Happened or arrived naturally at a regular time', romanHindiMeaning: 'Waqt aate-aate / Samay hote-hote', pronunciationGuide: 'ROHLD uh-rownd', dailyLifeExample: 'By the time lunchtime rolled around, we were starving.', practiceSentence: 'When Friday rolled around, everyone was ready to celebrate.' },
      { id: 'v-perf', word: 'Perfection', simpleMeaning: 'The state of being complete and completely without flaws', romanHindiMeaning: 'Koshish ki bilkul 100% koi kami na ho', pronunciationGuide: 'pər-FEK-shun', dailyLifeExample: 'Focus on progress rather than perfection.', practiceSentence: 'Demanding absolute perfection causes unnecessary stress.' }
    ],
    explainedSentences: [
      {
        sentence: 'Her schedule for the day was completely packed with tasks.',
        breakdown: '"Packed with" is a natural idiom meaning having zero free time because of many duties.',
        romanHindi: '"Uska poora din kaamo se bhara hua tha aur bilkul fursat nahi thi."'
      },
      {
        sentence: 'Instead of panicking about the long list, she organized her priorities.',
        breakdown: '"Instead of [doing something]" shows choosing a smarter alternative behavior.',
        romanHindi: '"Ghabrane ke bajaay, usne apne zaroori kaamo ko pehle arrange kiya."'
      },
      {
        sentence: 'Her team lead had encouraged her to focus on sharing thoughts clearly rather than perfection.',
        breakdown: 'A key mindset rule: clarity in expressing thoughts matters much more than 100% grammar perfection.',
        romanHindi: '"Uski team lead ne usey samjhaya tha ki baatein saaf bolna zaroori hai, bina darr ke."'
      },
      {
        sentence: 'Probably, we should allocate more budget to video reels next quarter.',
        breakdown: '"Probably" softens a suggestion politely so it sounds collaborative, not bossy.',
        romanHindi: '"Shaayad humein agli timahi mein video reels par zyada budget lagana chahiye."'
      },
      {
        sentence: 'By the time 6:00 PM rolled around, she felt a strong sense of accomplishment.',
        breakdown: '"By the time [hour] rolled around" describes the natural passing of the workday.',
        romanHindi: '"Shaam ke 6:00 baje aate-aate usey apne kaam par kafi garv aur santushti mehsoos hui."'
      }
    ],
    mcqQuestions: [
      {
        id: 'rq2-1',
        question: 'How did Pooja handle fifteen client emails arriving on Monday morning?',
        options: [
          'She deleted all the emails without reading',
          'She organized them by priority and answered urgent ones first',
          'She left the office immediately',
          'She asked her colleague to do all her work'
        ],
        correctIndex: 1,
        explanation: 'She stayed calm and sorted urgent queries first using color-coded notes.',
        romanHindiTip: 'Usne priorities tay karke zaroori emails pehle solve kiye.'
      },
      {
        id: 'rq2-2',
        question: 'Why did Pooja hesitate to speak in office meetings previously?',
        options: [
          'She disliked her team lead',
          'She was afraid of making small grammatical mistakes',
          'She did not have a microphone',
          'She was always asleep'
        ],
        correctIndex: 1,
        explanation: 'In the past, she stayed quiet because she worried about minor grammar errors.',
        romanHindiTip: 'Woh chhoti grammar galtiyon ke darr se chup rehti thi.'
      },
      {
        id: 'rq2-3',
        question: 'What suggestion did Pooja confidently share during the meeting?',
        options: [
          'To cancel the marketing campaign',
          'To allocate more budget to video reels because engagement reached 12%',
          'To reduce working hours to 2 hours a day',
          'To close down the Instagram account'
        ],
        correctIndex: 1,
        explanation: 'She suggested investing more budget in video reels based on the 12% engagement metric.',
        romanHindiTip: 'Usne video reels par budget badhane ka sujhav diya.'
      },
      {
        id: 'rq2-4',
        question: 'What did Pooja realize about clear daily communication?',
        options: [
          'It requires memorizing very difficult Latin words',
          'It is about expressing valuable thoughts clearly, not using complex dictionary words',
          'You should only speak when spoken to',
          'Only managers are allowed to express opinions'
        ],
        correctIndex: 1,
        explanation: 'True communication is about clarity of ideas, not complicated vocabulary.',
        romanHindiTip: 'Sahi baat saaf tareeke se bolna zaroori hai, na ki bhaari-bharkam shabd.'
      },
      {
        id: 'rq2-5',
        question: 'How did Pooja feel at the end of her workday at 6:00 PM?',
        options: [
          'Angry and defeated',
          'She felt a strong sense of accomplishment and satisfaction',
          'Confused about her job',
          'Bored and sleepy'
        ],
        correctIndex: 1,
        explanation: 'The story concludes with her feeling proud and accomplished.',
        romanHindiTip: 'Shaam ko usey kafi santushti aur safalta ka ehsas hua.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'cq2-1',
        question: 'What role does Pooja have at her firm?',
        suggestedAnswer: 'She works as a marketing coordinator at a design firm in Bengaluru.',
        romanHindiHint: 'Bengaluru ki ek design firm mein marketing coordinator.'
      },
      {
        id: 'cq2-2',
        question: 'What method did she use to avoid feeling overwhelmed by emails?',
        suggestedAnswer: 'She used color-coded sticky notes to organize tasks by urgency.',
        romanHindiHint: 'Color-coded sticky notes se tasks arrange kiye.'
      },
      {
        id: 'cq2-3',
        question: 'What advice had her team lead given her about speaking up in meetings?',
        suggestedAnswer: 'To focus on sharing her thoughts clearly instead of worrying about perfection.',
        romanHindiHint: 'Perfection ki chinta chhod kar baat saaf bolne par dhyan dena.'
      },
      {
        id: 'cq2-4',
        question: 'How did her colleagues and manager react when Pooja shared her proposal?',
        suggestedAnswer: 'Her colleagues agreed with nods, and the manager praised her analytical thinking.',
        romanHindiHint: 'Colleagues ne haan mein sar hilaya aur manager ne taareef ki.'
      },
      {
        id: 'cq2-5',
        question: 'How can you apply Pooja\'s approach in your own workplace or studies?',
        suggestedAnswer: 'Speak up with confidence when you have a good idea, without letting fear of small mistakes hold you back.',
        romanHindiHint: 'Galti ke darr ko bhoolkar apni achhi baat ko aage rakhna chahiye.'
      }
    ]
  }
];
