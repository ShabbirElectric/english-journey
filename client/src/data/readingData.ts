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
    passage: `Pooja works as a marketing coordinator at a rapidly growing design firm in Bengaluru. On Monday morning, she stepped into the office, carrying her laptop and a fresh cup of warm herbal tea. Her schedule for the day was completely packed with tasks.

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
  },
  {
    id: 'rp-road-trip',
    title: 'A Spontaneous Road Trip to the Western Ghats',
    level: 'Medium',
    category: 'Past Experiences & Friendship',
    readTimeMins: 4,
    passage: `Last Saturday, Shabbir and three of his closest college friends decided to take a spontaneous road trip toward the scenic Western Ghats. They packed two small duffel bags, loaded a playlist of retro songs, and departed the city at 5:30 AM to beat the chaotic morning traffic.

As the sun crested over the misty mountain passes, the air grew noticeably cooler. After three hours of smooth highway driving, they stopped at a charming roadside diner overlooking a lush mountain valley. They ordered steaming cups of ginger tea and hot potato parathas served with homemade butter. Sitting together by the wooden railing, they laughed heartily as they reminisced about funny college mishaps and discussed their upcoming career plans.

Later that afternoon, they hiked down a gentle rocky trail toward a secluded waterfall. The sound of cascading water was deeply relaxing. They spent two hours soaking their feet in the refreshing crystal-clear stream. Nobody looked at their smartphones or checked work emails. By the time they drove back into the city lights at 9:00 PM, Shabbir felt completely revitalized. It reminded him that taking regular breaks with genuine friends is essential for mental clarity and long-term well-being.`,
    vocabularyList: [
      { id: 'v-spon', word: 'Spontaneous', simpleMeaning: 'Done naturally on impulse without long prior planning', romanHindiMeaning: 'Achanak banaya gaya plan', pronunciationGuide: 'spon-TAY-nee-us', dailyLifeExample: 'We took a spontaneous weekend trip.', practiceSentence: 'Spontaneous decisions often create the best memories.' },
      { id: 'v-scenic', word: 'Scenic', simpleMeaning: 'Having beautiful, natural views and scenery', romanHindiMeaning: 'Sundar / Nazaron se bhara hua', pronunciationGuide: 'SEE-nik', dailyLifeExample: 'The train journey along the coast was very scenic.', practiceSentence: 'We stopped several times to photograph the scenic mountain peaks.' },
      { id: 'v-chaotic', word: 'Chaotic', simpleMeaning: 'In a state of complete confusion and lack of order', romanHindiMeaning: 'Asta-vyasta / Bheed-bhadak', pronunciationGuide: 'kay-OT-ik', dailyLifeExample: 'The city center gets chaotic during festival days.', practiceSentence: 'Leaving early helped us avoid the chaotic rush hour.' },
      { id: 'v-crested', word: 'Crested', simpleMeaning: 'Reached the top of a hill or mountain ridge', romanHindiMeaning: 'Pahaad ki choti par pahuncha', pronunciationGuide: 'KRES-tid', dailyLifeExample: 'The rising sun crested the horizon.', practiceSentence: 'As we crested the hill, a magnificent valley appeared.' },
      { id: 'v-reminisce', word: 'Reminisced', simpleMeaning: 'Talked or thought with pleasure about past experiences', romanHindiMeaning: 'Puraani khush-gawar yaadein taaza karna', pronunciationGuide: 'rem-i-NIST', dailyLifeExample: 'We reminisced about our childhood school days.', practiceSentence: 'They spent the evening reminiscing over old photo albums.' },
      { id: 'v-mishap', word: 'Mishap', simpleMeaning: 'An unlucky but minor accident or mistake', romanHindiMeaning: 'Chhoti-moti gadbadi ya durghatna', pronunciationGuide: 'MIS-hap', dailyLifeExample: 'Despite a minor flat tire mishap, the trip went great.', practiceSentence: 'Double-checking your documents prevents unnecessary travel mishaps.' },
      { id: 'v-secluded', word: 'Secluded', simpleMeaning: 'Quiet, private, and sheltered from view or crowds', romanHindiMeaning: 'Shaant aur bheed se door', pronunciationGuide: 'si-KLOO-did', dailyLifeExample: 'They rented a secluded cottage in the woods.', practiceSentence: 'We found a secluded corner in the library to study peacefully.' },
      { id: 'v-cascading', word: 'Cascading', simpleMeaning: 'Pouring or rushing downwards in large quantities like a waterfall', romanHindiMeaning: 'Jharna bankar tezi se girta hua', pronunciationGuide: 'kas-KAY-ding', dailyLifeExample: 'Cascading water echoed through the gorge.', practiceSentence: 'The mountain path offered views of cascading streams.' },
      { id: 'v-revital', word: 'Revitalized', simpleMeaning: 'Imbued with fresh life, energy, and strength', romanHindiMeaning: 'Nayi taazgi aur urja se bhar gaya', pronunciationGuide: 'ree-VY-tuh-lyzd', dailyLifeExample: 'A weekend in nature leaves you revitalized.', practiceSentence: 'After a restful sleep, she felt totally revitalized.' },
      { id: 'v-wellbeing', word: 'Well-being', simpleMeaning: 'The state of being comfortable, healthy, or happy', romanHindiMeaning: 'Sehat aur kalyan', pronunciationGuide: 'WEL-bee-ing', dailyLifeExample: 'Regular exercise is vital for physical well-being.', practiceSentence: 'Mindful breathing promotes emotional well-being.' }
    ],
    explainedSentences: [
      {
        sentence: 'They departed the city at 5:30 AM to beat the chaotic morning traffic.',
        breakdown: '"Beat the traffic" is an idiomatic phrase meaning to leave early enough to avoid peak rush-hour jams.',
        romanHindi: '"Shehar ke subah ke bheed-bhadak wale traffic se bachne ke liye woh 5:30 baje nikle."'
      },
      {
        sentence: 'As the sun crested over the misty mountain passes, the air grew noticeably cooler.',
        breakdown: '"Noticeably cooler" describes an observable drop in temperature as elevation rises.',
        romanHindi: '"Jaise hi suraj pahaadon ke upar aaya, hawa mein saaf taur par thandak badh gayi."'
      },
      {
        sentence: 'Sitting together by the wooden railing, they laughed heartily as they reminisced.',
        breakdown: '"Laughed heartily" and "reminisced" are natural collocational pairings for warm friendship storytelling.',
        romanHindi: '"Lakdi ki railing ke paas baithkar, unhone purani yaadein taaza karte hue khul kar thahake lagaye."'
      },
      {
        sentence: 'Nobody looked at their smartphones or checked work emails.',
        breakdown: 'A simple, powerful sentence illustrating total presence and digital disconnection.',
        romanHindi: '"Kisi ne bhi apne smartphones nahi dekhe aur na hi office ke emails check kiye."'
      },
      {
        sentence: 'Taking regular breaks with genuine friends is essential for mental clarity.',
        breakdown: '"Mental clarity" refers to a calm, focused mindset free of anxiety and overthinking.',
        romanHindi: '"Sache doston ke sath regular break lena dimaagi sukoon aur spashtata ke liye bahut zaroori hai."'
      }
    ],
    mcqQuestions: [
      {
        id: 'rq3-1',
        question: 'Why did the friends decide to leave at 5:30 AM?',
        options: [
          'Because the petrol pumps close at 6:00 AM',
          'To beat the chaotic morning traffic in the city',
          'Because they wanted to catch a morning flight',
          'Because their hotel check-in was at 6:00 AM'
        ],
        correctIndex: 1,
        explanation: 'They left at 5:30 AM specifically to avoid morning city traffic jams.',
        romanHindiTip: 'Subah ke bheed wale traffic se bachne ke liye 5:30 baje nikle the.'
      },
      {
        id: 'rq3-2',
        question: 'What did the friends do at the roadside diner?',
        options: [
          'They complained about the road conditions',
          'They had hot ginger tea, parathas, and reminisced about college days',
          'They worked on their laptops for four hours',
          'They had a heated business argument'
        ],
        correctIndex: 1,
        explanation: 'They enjoyed breakfast and shared funny college memories together.',
        romanHindiTip: 'Unhone nashta kiya aur purani yaadein taaza karke hansi-mazaak kiya.'
      },
      {
        id: 'rq3-3',
        question: 'What made the afternoon hike to the waterfall so refreshing?',
        options: [
          'They found free wifi at the waterfall',
          'They soaked their feet in the clear stream without looking at phones',
          'They purchased new hiking shoes',
          'They attended a client presentation outdoors'
        ],
        correctIndex: 1,
        explanation: 'The natural scenery and digital disconnect allowed them to relax deeply.',
        romanHindiTip: 'Pahaadi jharne ke saaf paani aur phone se door rehne se sukoon mila.'
      },
      {
        id: 'rq3-4',
        question: 'What does the word "reminisce" mean in the passage?',
        options: [
          'To forget past memories completely',
          'To talk and recall enjoyable past memories with fondness',
          'To argue about future dates',
          'To repair a broken automobile engine'
        ],
        correctIndex: 1,
        explanation: 'To reminisce means to recall past shared moments with happiness.',
        romanHindiTip: 'Reminisce ka matlab purani achhi yaadon ko yaad karna hota hai.'
      },
      {
        id: 'rq3-5',
        question: 'What key takeaway did Shabbir reflect upon on his drive back home?',
        options: [
          'Never travel without checking emails every 10 minutes',
          'Taking regular breaks with genuine friends is essential for mental clarity',
          'Always avoid taking road trips in cars',
          'Mountain highways are too difficult to drive on'
        ],
        correctIndex: 1,
        explanation: 'He realized the immense value of genuine friendship and nature breaks.',
        romanHindiTip: 'Achhe doston ke sath waqt bitana aur break lena dimaag ke liye zaroori hai.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'cq3-1',
        question: 'Where did the group travel for their spontaneous getaway?',
        suggestedAnswer: 'They traveled toward the scenic Western Ghats mountain passes.',
        romanHindiHint: 'Western Ghats pahaadon ki taraf gaye the.'
      },
      {
        id: 'cq3-2',
        question: 'What food and beverages did they enjoy at the roadside cafe?',
        suggestedAnswer: 'They enjoyed steaming hot ginger tea and potato parathas with homemade butter.',
        romanHindiHint: 'Adrak wali chai aur aloo ke parathe.'
      },
      {
        id: 'cq3-3',
        question: 'What notable habit did all the friends practice at the waterfall?',
        suggestedAnswer: 'Nobody looked at their smartphones or checked work emails, staying fully present.',
        romanHindiHint: 'Kisi ne bhi phone ya office ke email check nahi kiye.'
      },
      {
        id: 'cq3-4',
        question: 'What time did they arrive back in the city?',
        suggestedAnswer: 'They returned back home around 9:00 PM in the evening.',
        romanHindiHint: 'Shaam ke 9:00 baje shehar wapas pahunche.'
      },
      {
        id: 'cq3-5',
        question: 'How does digital disconnection during weekend trips help your English learning mindset?',
        suggestedAnswer: 'It clears mental fatigue, reduces stress, and sharpens focus for productive daily study during the week.',
        romanHindiHint: 'Dimaagi thakan door hoti hai jisse naye hafte mein behtar focus milta hai.'
      }
    ]
  },
  {
    id: 'rp-feedback-dialogue',
    title: 'Navigating Constructive Feedback and Team Communication',
    level: 'Upper Medium',
    category: 'Work & Studies',
    readTimeMins: 5,
    passage: `In contemporary workplaces, receiving constructive feedback is an indispensable catalyst for career advancement. Last Thursday, Tariq, a talented junior software analyst at a fintech enterprise, attended his mid-year performance review with his engineering director, Sunita.

Initially, Tariq felt slightly apprehensive. He had invested long hours into refactoring the payment gateway, yet several unexpected test failures had surfaced prior to deployment. When Sunita sat down, however, her demeanor was encouraging and pragmatic.

"Tariq, your architectural design was exceptionally innovative," Sunita began. "However, what distinguished the senior contributors on this project was their proactive communication when unforeseen roadblocks emerged. Instead of attempting to rectify the database bottleneck in isolation, reaching out to the infrastructure team 48 hours earlier would have eliminated the launch delay entirely."

Tariq absorbed her critique thoughtfully without becoming defensive. Rather than offering excuses, he nodded and responded: "I see your point completely, Sunita. I was so focused on solving the dilemma independently that I overlooked the broader project schedule. Moving forward, I will flag dependencies immediately in our morning standup."

Sunita smiled in appreciation of his emotional maturity. She emphasized that genuine professionals view constructive criticism not as personal condemnation, but as pragmatic coaching. By cultivating receptivity and transparent communication, Tariq demonstrated that he was fully prepared to transition toward leadership responsibilities.`,
    vocabularyList: [
      { id: 'v-indisp', word: 'Indispensable', simpleMeaning: 'Absolutely necessary and essential', romanHindiMeaning: 'Atyant zaroori / Jiske bina kaam na chale', pronunciationGuide: 'in-di-SPEN-suh-bəl', dailyLifeExample: 'Clear communication is indispensable for teamwork.', practiceSentence: 'A reliable dictionary is indispensable when learning a new language.' },
      { id: 'v-catalyst', word: 'Catalyst', simpleMeaning: 'Something that causes an important change or event to happen', romanHindiMeaning: 'Badlaav lane wala madhyam', pronunciationGuide: 'KAT-uh-list', dailyLifeExample: 'Constructive feedback acts as a catalyst for growth.', practiceSentence: 'Her encouraging words were the catalyst for his renewed confidence.' },
      { id: 'v-appreh', word: 'Apprehensive', simpleMeaning: 'Anxious or fearful that something unpleasant might happen', romanHindiMeaning: 'Ashankit / Thoda ghabraya hua', pronunciationGuide: 'ap-ri-HEN-siv', dailyLifeExample: 'He felt apprehensive before meeting his manager.', practiceSentence: 'She was slightly apprehensive about speaking in front of 200 people.' },
      { id: 'v-demeanor', word: 'Demeanor', simpleMeaning: 'Outward behavior, bearing, or facial expression', romanHindiMeaning: 'Chal-dhal / Vyavahar', pronunciationGuide: 'di-MEE-nər', dailyLifeExample: 'The doctor had a calm, reassuring demeanor.', practiceSentence: 'Her professional demeanor instilled confidence in the anxious client.' },
      { id: 'v-innov', word: 'Innovative', simpleMeaning: 'Featuring new, creative, and advanced methods', romanHindiMeaning: 'Naveen / Naye tareeke wala', pronunciationGuide: 'IN-uh-vay-tiv', dailyLifeExample: 'The app offers an innovative approach to language mastery.', practiceSentence: 'Our team developed an innovative solution to reduce page load times.' },
      { id: 'v-proactive', word: 'Proactive', simpleMeaning: 'Taking action to control a situation rather than just reacting to it after it happens', romanHindiMeaning: 'Pehle se aage badhkar kadam uthane wala', pronunciationGuide: 'proh-AK-tiv', dailyLifeExample: 'Be proactive in reporting delays early.', practiceSentence: 'Proactive customer service solves problems before users even complain.' },
      { id: 'v-rectify', word: 'Rectify', simpleMeaning: 'To correct something that is wrong or put an error right', romanHindiMeaning: 'Sudhaarna / Theek karna', pronunciationGuide: 'REK-ti-fy', dailyLifeExample: 'Please rectify the calculation error before emailing the client.', practiceSentence: 'We took swift measures to rectify the software defect.' },
      { id: 'v-defensive', word: 'Defensive', simpleMeaning: 'Quick to protect yourself from criticism and unwilling to admit fault', romanHindiMeaning: 'Bachaav karne wala / Galti na maanne wala', pronunciationGuide: 'di-FEN-siv', dailyLifeExample: 'Don\'t become defensive when receiving friendly suggestions.', practiceSentence: 'He responded politely without getting defensive or angry.' },
      { id: 'v-recept', word: 'Receptivity', simpleMeaning: 'Willingness to consider or accept new ideas and feedback', romanHindiMeaning: 'Nayi baatein aur feedback sweekar karne ki aadat', pronunciationGuide: 'ree-sep-TIV-i-tee', dailyLifeExample: 'Receptivity to feedback is the trademark of great leaders.', practiceSentence: 'Her receptivity to advice helped her adapt rapidly to the company.' },
      { id: 'v-condemn', word: 'Condemnation', simpleMeaning: 'Strong expression of severe disapproval or blame', romanHindiMeaning: 'Kadi ninda / Arop lagana', pronunciationGuide: 'kon-dem-NAY-shun', dailyLifeExample: 'Feedback is coaching, not personal condemnation.', practiceSentence: 'Constructive review focuses on process improvements rather than personal condemnation.' }
    ],
    explainedSentences: [
      {
        sentence: 'Receiving constructive feedback is an indispensable catalyst for career advancement.',
        breakdown: 'An advanced topic sentence combining "indispensable" (essential) with "catalyst" (driver of change).',
        romanHindi: '"Sujhav aur feedback lena career mein aage badhne ke liye sabse zaroori zariya hai."'
      },
      {
        sentence: 'What distinguished the senior contributors was their proactive communication.',
        breakdown: 'A cleft structure ("What distinguished X was Y") highlighting the exact skill that separates senior professionals.',
        romanHindi: '"Senior logon ko jo baat alag banati thi, woh thi mushkil aane par pehle se aage badhkar batana."'
      },
      {
        sentence: 'Instead of attempting to rectify the bottleneck in isolation, reaching out earlier would have eliminated the delay.',
        breakdown: 'Use of "in isolation" (alone) contrasted with "reaching out earlier" using a conditional hypothetical.',
        romanHindi: '"Akele pareshani suljhane ke bajaay, pehle madad maangne se deri poori tarah tal sakti thi."'
      },
      {
        sentence: 'Rather than offering excuses, he nodded and acknowledged the broader schedule.',
        breakdown: 'Highlights mature professional behavior: active listening without justifying shortcomings.',
        romanHindi: '"Bahana banane ke bajaay, usne baat ko samjha aur poore schedule ki ahmiyat ko maana."'
      },
      {
        sentence: 'Genuine professionals view constructive criticism not as personal condemnation, but as pragmatic coaching.',
        breakdown: 'A parallel "not X, but Y" rhetorical structure contrasting negative emotion with practical growth.',
        romanHindi: '"Asli professionals sallaah ko arop nahi, balki behtar banne ki practical training maante hain."'
      }
    ],
    mcqQuestions: [
      {
        id: 'rq4-1',
        question: 'Why did Tariq initially feel apprehensive before his performance review?',
        options: [
          'He arrived one hour late for the review',
          'He knew that unexpected test failures had surfaced before deployment',
          'He wanted to quit his engineering role immediately',
          'He did not get along with Sunita'
        ],
        correctIndex: 1,
        explanation: 'He was worried because technical hiccups had occurred despite his hard work.',
        romanHindiTip: 'Deployment se pehle test fail hone ki wajah se woh thoda chintit tha.'
      },
      {
        id: 'rq4-2',
        question: 'What specific improvement did Sunita suggest to Tariq?',
        options: [
          'To work 18 hours every day without sleeping',
          'To communicate proactively with infrastructure teammates rather than troubleshooting alone',
          'To stop coding and switch to sales',
          'To hide future technical errors from management'
        ],
        correctIndex: 1,
        explanation: 'She emphasized proactive cross-team communication rather than isolated problem-solving.',
        romanHindiTip: 'Akele phanse rehne ke bajaay baaki team se pehle sampark karne ki sallaah di.'
      },
      {
        id: 'rq4-3',
        question: 'How did Tariq respond to Sunita\'s critique?',
        options: [
          'He became angry and walked out of the room',
          'He made numerous excuses blaming other departments',
          'He listened thoughtfully, admitted his blindspot, and committed to flagging blockers in standups',
          'He refused to speak for the rest of the day'
        ],
        correctIndex: 2,
        explanation: 'He demonstrated maturity by accepting the advice and offering an immediate solution.',
        romanHindiTip: 'Usne bina bahana banaye baat samjhi aur daily standup mein updates dene ka wada kiya.'
      },
      {
        id: 'rq4-4',
        question: 'What does "proactive" mean in the context of this workplace scenario?',
        options: [
          'Waiting until a disaster occurs before taking action',
          'Taking initiative early to address dependencies before they create bottlenecks',
          'Writing lengthy complaints on social media',
          'Ignoring deadlines until someone notices'
        ],
        correctIndex: 1,
        explanation: 'Proactive means taking initiative early to prevent complications.',
        romanHindiTip: 'Proactive ka matlab hai samasya aane se pehle hi aage badhkar kadam uthana.'
      },
      {
        id: 'rq4-5',
        question: 'What mindset distinguishes genuine professionals according to the passage?',
        options: [
          'Viewing feedback as personal condemnation',
          'Viewing constructive feedback as pragmatic coaching and an opportunity to evolve',
          'Believing they already know everything',
          'Avoiding all meetings with management'
        ],
        correctIndex: 1,
        explanation: 'Professionals treat feedback as practical coaching that fuels their career growth.',
        romanHindiTip: 'Feedback ko arop na samajhkar seekhne aur behtar banne ka mauka samjhna.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'cq4-1',
        question: 'What role and department does Tariq hold in his organization?',
        suggestedAnswer: 'He works as a junior software analyst at a fintech enterprise.',
        romanHindiHint: 'Ek fintech company mein junior software analyst.'
      },
      {
        id: 'cq4-2',
        question: 'What positive aspect of Tariq\'s work did Sunita praise upfront?',
        suggestedAnswer: 'She praised his payment gateway architectural design as exceptionally innovative.',
        romanHindiHint: 'Uske architectural design ki creativity aur innovation ki taareef ki.'
      },
      {
        id: 'cq4-3',
        question: 'How much earlier should Tariq have alerted the infrastructure team according to Sunita?',
        suggestedAnswer: 'Reaching out 48 hours earlier would have eliminated the project delay completely.',
        romanHindiHint: '48 ghante pehle sampark kar lena chahiye tha.'
      },
      {
        id: 'cq4-4',
        question: 'What commitment did Tariq make for his upcoming daily work habits?',
        suggestedAnswer: 'He promised to immediately flag project dependencies and bottlenecks during morning standup calls.',
        romanHindiHint: 'Daily morning standup mein blockers ko turant batane ka wada kiya.'
      },
      {
        id: 'cq4-5',
        question: 'How can you apply Tariq\'s response when receiving corrections on your English speaking from Coach Sarah?',
        suggestedAnswer: 'Listen without defensiveness, acknowledge the rule with curiosity, and practice the corrected sentence immediately.',
        romanHindiHint: 'Galti par bura maane bina, sallaah ko samjhein aur turant sahi sentence bolne ki practice karein.'
      }
    ]
  },
  {
    id: 'rp-negotiation-diplomacy',
    title: 'Negotiating Project Priorities and Finding Pragmatic Compromises',
    level: 'Hard',
    category: 'Work & Studies',
    readTimeMins: 5,
    passage: `In multifaceted professional environments, negotiating divergent stakeholder priorities requires exceptional diplomatic tact and linguistic precision. When international cross-functional squads collaborate under stringent regulatory deadlines, conflicts regarding resource allocation are virtually inevitable.

Yesterday afternoon, Devika, lead product strategist for a global telecommunications consortium, chaired a high-stakes alignment summit with the regional compliance director, Marcus. The engineering squad had determined that fulfilling all sixty requested feature modifications before the statutory November deadline was mathematically unfeasible without compromising cybersecurity architecture.

Rather than adopting a confrontational posture, Devika opened the proceedings with an empathetic reframing of their collective objective: "Marcus, our overarching imperative is delivering an impeccably secure, compliant platform that inspires user trust. We share identical aspirations; our sole divergence pertains to sequence and scheduling."

Through methodical negotiation, Devika proposed a tiered deployment paradigm: thirty mission-critical compliance protocols would be deployed in Phase One, while supplementary administrative dashboards would be deferred to Phase Two in mid-December. Marcus scrutinized the revised Gantt roadmap and concurred that this pragmatic compromise safeguarded regulatory adherence without jeopardizing infrastructure stability.

By orchestrating the dialogue with analytical clarity, respectful active listening, and unambiguous English articulation, Devika averted an executive impasse. The summit demonstrated that masterly communication is fundamentally rooted not in eloquent rhetoric, but in bridging disparate viewpoints toward actionable consensus.`,
    vocabularyList: [
      { id: 'v-multifaceted', word: 'Multifaceted', simpleMeaning: 'Having many different aspects or sides to consider', romanHindiMeaning: 'Bahu-mukhi / Kai pehluon wala', pronunciationGuide: 'mul-tee-FAS-i-tid', dailyLifeExample: 'Handling global projects is a multifaceted challenge.', practiceSentence: 'Urban planning is a multifaceted discipline requiring social and technical insight.' },
      { id: 'v-divergent', word: 'Divergent', simpleMeaning: 'Developing in different directions; having differing opinions', romanHindiMeaning: 'Bhinna / Alag-alag raye wala', pronunciationGuide: 'dy-VUR-jənt', dailyLifeExample: 'The two departments held divergent opinions on budget allocations.', practiceSentence: 'Divergent viewpoints often spark healthy debates when managed respectfully.' },
      { id: 'v-stringent', word: 'Stringent', simpleMeaning: 'Extremely strict, precise, and firmly enforced regulations', romanHindiMeaning: 'Kade / Sakht niyam', pronunciationGuide: 'STRIN-jənt', dailyLifeExample: 'Aviation safety adheres to stringent inspection standards.', practiceSentence: 'The bank introduced stringent cybersecurity protocols.' },
      { id: 'v-unfeasible', word: 'Unfeasible', simpleMeaning: 'Incapable of being carried out or achieved practically', romanHindiMeaning: 'Asambhav / Vyavaharik roop se na ho pane yogya', pronunciationGuide: 'un-FEE-zuh-bəl', dailyLifeExample: 'Building a subway in three months is unfeasible.', practiceSentence: 'Given our current staffing, finishing all sixty tasks this week was unfeasible.' },
      { id: 'v-imperative', word: 'Imperative', simpleMeaning: 'An essential, urgent, and unavoidable obligation', romanHindiMeaning: 'Anivarya zimmewari / Ati-aavashyak kaam', pronunciationGuide: 'im-PER-uh-tiv', dailyLifeExample: 'Patient confidentiality is a medical imperative.', practiceSentence: 'Delivering bug-free software remains our highest organizational imperative.' },
      { id: 'v-methodical', word: 'Methodical', simpleMeaning: 'Done in an orderly, systematic, and carefully planned way', romanHindiMeaning: 'Vyavasthit / Step-by-step', pronunciationGuide: 'muh-THOD-i-kəl', dailyLifeExample: 'Her methodical research uncovered hidden discrepancies.', practiceSentence: 'A methodical study schedule ensures comprehensive revision.' },
      { id: 'v-paradigm', word: 'Paradigm', simpleMeaning: 'A typical example, framework, or model of something', romanHindiMeaning: 'Mool dharana / Framework', pronunciationGuide: 'PAR-uh-dym', dailyLifeExample: 'Cloud storage created a new paradigm in data accessibility.', practiceSentence: 'The team adopted an agile workflow paradigm to accelerate releases.' },
      { id: 'v-scrutinize', word: 'Scrutinized', simpleMeaning: 'Examined or inspected very closely and thoroughly', romanHindiMeaning: 'Bariki se jaanch karna', pronunciationGuide: 'SKROO-ti-nyzd', dailyLifeExample: 'The auditor scrutinized every expense receipt.', practiceSentence: 'Marcus scrutinized the milestone timeline before agreeing.' },
      { id: 'v-impasse', word: 'Impasse', simpleMeaning: 'A deadlock or situation where no progress is possible due to disagreement', romanHindiMeaning: 'Gatya-avrodh / Deadlock', pronunciationGuide: 'AM-pas (/ˈæm.pɑːs/)', dailyLifeExample: 'Diplomatic talks reached an impasse over tariff rates.', practiceSentence: 'Devika\'s clever compromise broke the budget impasse.' },
      { id: 'v-consensus', word: 'Consensus', simpleMeaning: 'A general agreement reached by everyone in a group', romanHindiMeaning: 'Sarva-sammati / Sabki aapsi sahmat', pronunciationGuide: 'kən-SEN-səs', dailyLifeExample: 'After long deliberation, the committee reached a consensus.', practiceSentence: 'Building consensus among team leaders guarantees smoother execution.' }
    ],
    explainedSentences: [
      {
        sentence: 'Negotiating divergent stakeholder priorities requires exceptional diplomatic tact and linguistic precision.',
        breakdown: 'A high-register opening pairing "diplomatic tact" (handling people sensitively) with "linguistic precision" (choosing exact words).',
        romanHindi: '"Alag-alag logon ki priorities ko suljhane ke liye kafi samajhdaari aur sahi shabdon ke chunav ki zarurat hoti hai."'
      },
      {
        sentence: 'Rather than adopting a confrontational posture, Devika opened with an empathetic reframing of their collective objective.',
        breakdown: '"Confrontational posture" (aggressive stance) contrasted with "empathetic reframing" (aligning goals constructively).',
        romanHindi: '"Takraav ka rasta apnane ke bajaay, Devika ne sabko yaad dilaya ki unka aakhiri maqsad ek hi hai."'
      },
      {
        sentence: 'We share identical aspirations; our sole divergence pertains to sequence and scheduling.',
        breakdown: 'A masterclass in diplomatic framing: affirming common goals while isolating conflict strictly to dates and order.',
        romanHindi: '"Hamare maqsad bilkul ek jaise hain; fark sirf itna hai ki kaunsa kaam pehle karein aur kaunsa baad mein."'
      },
      {
        sentence: 'This pragmatic compromise safeguarded regulatory adherence without jeopardizing infrastructure stability.',
        breakdown: 'Parallel verb phrasing: "safeguarded adherence" (protected legal rules) "without jeopardizing stability" (without risking crashes).',
        romanHindi: '"Is vyavaharik samjhoute ne kanooni niyamon ko bhi nibhaya aur system ki suraksha ko bhi khatre mein nahi daala."'
      },
      {
        sentence: 'Masterly communication is fundamentally rooted not in eloquent rhetoric, but in bridging disparate viewpoints.',
        breakdown: 'Reflective conclusion summarizing the essence of advanced English fluency: clarity of thought over fancy speeches.',
        romanHindi: '"Behtareen communication bhaari-bharkam bhashano mein nahi, balki do alag vicharon ko aapas mein jodkar rasta nikalne mein hoti hai."'
      }
    ],
    mcqQuestions: [
      {
        id: 'rq5-1',
        question: 'What fundamental dilemma triggered the high-stakes summit between Devika and Marcus?',
        options: [
          'The marketing budget was spent on television commercials',
          'Fulfilling all sixty modification requests by November was unfeasible without risking cybersecurity stability',
          'Marcus wanted to cancel the telecommunications contract completely',
          'The engineering squad refused to work on weekends'
        ],
        correctIndex: 1,
        explanation: 'The core conflict was between a strict regulatory deadline and system stability.',
        romanHindiTip: 'November tak saare 60 features poore karna system stability ke liye khatarnaak tha.'
      },
      {
        id: 'rq5-2',
        question: 'How did Devika diplomatically open the negotiation summit?',
        options: [
          'By demanding that Marcus reduce the regulations',
          'By reframing their shared aspirations and clarifying that the only disagreement was about sequence',
          'By threatening to postpone the entire platform until next year',
          'By accusing the compliance department of being unrealistic'
        ],
        correctIndex: 1,
        explanation: 'She emphasized their shared goal of platform trust and focused on schedule prioritization.',
        romanHindiTip: 'Usne yeh batakar shuruat ki ki dono ka maqsad ek hi hai, bas sequence tay karna hai.'
      },
      {
        id: 'rq5-3',
        question: 'What tiered deployment paradigm did Devika propose as a solution?',
        options: [
          'Deploying non-essential features first and deferring security protocols',
          'Deploying 30 mission-critical compliance protocols in Phase One and administrative dashboards in Phase Two',
          'Canceling both phases and outsourcing the work to a third party',
          'Ignoring the compliance requirements completely'
        ],
        correctIndex: 1,
        explanation: 'She split the release into Phase 1 (critical compliance) and Phase 2 (secondary dashboards).',
        romanHindiTip: 'Zaroori compliance Phase 1 mein aur bache hue dashboards Phase 2 mein baante.'
      },
      {
        id: 'rq5-4',
        question: 'What does the term "impasse" mean in the concluding paragraph?',
        options: [
          'A rapid acceleration of engineering work',
          'A deadlock where negotiations stall and no progress can be made',
          'A celebration party after product release',
          'A temporary technical server outage'
        ],
        correctIndex: 1,
        explanation: 'An impasse is a standoff or deadlock between conflicting parties.',
        romanHindiTip: 'Impasse ka matlab hai aisi sthiti jahan aapsi matbhed ki wajah se aage na badha ja sake (deadlock).'
      },
      {
        id: 'rq5-5',
        question: 'What is the ultimate definition of masterly communication expressed at the end of the text?',
        options: [
          'Memorizing long Latin vocabulary words and dazzling people with rhetoric',
          'Bridging disparate viewpoints through active listening and linguistic precision toward actionable consensus',
          'Dominating conversations so opponents have no chance to speak',
          'Avoiding difficult conversations with tough stakeholders'
        ],
        correctIndex: 1,
        explanation: 'True fluency is about clarity, empathy, and uniting differing viewpoints into solutions.',
        romanHindiTip: 'Asli communication do alag vicharon ko aapas mein jodkar samjhauta nikalne mein hai.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'cq5-1',
        question: 'What leadership roles did Devika and Marcus hold in their respective divisions?',
        suggestedAnswer: 'Devika was lead product strategist, and Marcus was the regional compliance director.',
        romanHindiHint: 'Devika lead product strategist thi aur Marcus compliance director.'
      },
      {
        id: 'cq5-2',
        question: 'What statutory deadline was the international consortium facing?',
        suggestedAnswer: 'They were constrained by a strict statutory regulatory deadline in November.',
        romanHindiHint: 'November ki kanooni regulatory deadline.'
      },
      {
        id: 'cq5-3',
        question: 'How did Devika\'s proposed compromise protect both parties\' core interests?',
        suggestedAnswer: 'It satisfied the critical compliance regulations on time while protecting the platform architecture from overload.',
        romanHindiHint: 'Zaroori kanooni niyam bhi time par poore hue aur platform crash hone se bhi bach gaya.'
      },
      {
        id: 'cq5-4',
        question: 'What visual project management tool did Marcus examine before giving his approval?',
        suggestedAnswer: 'He scrutinized the revised Gantt roadmap and milestone schedule.',
        romanHindiHint: 'Usne revised Gantt roadmap aur milestone schedule ki jaanch ki.'
      },
      {
        id: 'cq5-5',
        question: 'How can you apply Devika\'s phrase "We share identical aspirations; our divergence pertains to sequence" in daily disagreements?',
        suggestedAnswer: 'Remind friends or colleagues that you want the same outcome, and only need to agree on timing or methods.',
        romanHindiHint: 'Doston ya colleagues ko yaad dilayein ki hamara maqsad ek hai, bas tareeka aur samay tay karna hai.'
      }
    ]
  }
];
