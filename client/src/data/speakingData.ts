import { SpeakingScenario } from '../types';

export const speakingScenariosList: SpeakingScenario[] = [
  // 1. TALKING WITH FRIENDS
  {
    id: 'sp-friends-catchup',
    title: 'Talking With Friends: "How Was Your Day?"',
    category: 'Talking with Friends',
    level: 'Medium',
    description: 'A friendly, natural evening catch-up between two friends discussing their workday, client meetings, and relaxing at night.',
    dialogue: [
      {
        id: 'fc-1',
        speaker: 'Person A',
        text: 'Hey Rohit! How was your day today?',
        romanHindi: 'Hey Rohit! Aaj ka din kaisa raha tumhara?'
      },
      {
        id: 'fc-2',
        speaker: 'Person B',
        text: 'It was pretty good! I had a busy day at work, but I managed to finish everything on time.',
        romanHindi: 'Kafi achha tha! Kaam par thoda busy din tha, lekin maine time par sab nipat liya.',
        isUserTurn: true,
        suggestedUserHints: ['It was pretty good...', 'I had a busy day at work...', 'I managed to finish on time...']
      },
      {
        id: 'fc-3',
        speaker: 'Person A',
        text: 'What kept you so busy?',
        romanHindi: 'Aisa kya tha jisne tumhe itna busy rakha?'
      },
      {
        id: 'fc-4',
        speaker: 'Person B',
        text: 'I had a few important tasks to finish, and our team had a client review meeting in the afternoon.',
        romanHindi: 'Mujhe kuch zaroori kaam khatam karne the, aur dopahar mein hamari ek client review meeting thi.',
        isUserTurn: true,
        suggestedUserHints: ['I had a few important tasks...', 'Our team had a client meeting...', 'We were preparing slides...']
      },
      {
        id: 'fc-5',
        speaker: 'Person A',
        text: 'That sounds intense. Did the presentation go smoothly?',
        romanHindi: 'Yeh toh kafi serious lag raha hai. Kya presentation achhe se ho gayi?'
      },
      {
        id: 'fc-6',
        speaker: 'Person B',
        text: 'Yes, actually! The client was very satisfied with our progress and approved the next phase.',
        romanHindi: 'Haan, asal mein! Client hamari progress se kafi khush tha aur agla phase approve kar diya.',
        isUserTurn: true,
        suggestedUserHints: ['Yes, actually...', 'The client was satisfied...', 'They approved the next phase...']
      },
      {
        id: 'fc-7',
        speaker: 'Person A',
        text: 'That is awesome news! You must be feeling so relieved right now.',
        romanHindi: 'Yeh toh kamaal ki khabar hai! Ab toh tum kaafi sukoon mehsoos kar rahe hoge.'
      },
      {
        id: 'fc-8',
        speaker: 'Person B',
        text: 'Definitely. Honestly, I was quite stressed about it yesterday evening.',
        romanHindi: 'Bilkul. Sach kahoon toh, kal shaam ko main is baare mein kafi tension mein tha.',
        isUserTurn: true,
        suggestedUserHints: ['Definitely...', 'Honestly, I was stressed yesterday...', 'Now I can breathe easy...']
      },
      {
        id: 'fc-9',
        speaker: 'Person A',
        text: 'I can totally understand. Are you planning to relax tonight or do you have errands to run?',
        romanHindi: 'Main bilkul samajh sakta hoon. Kya aaj raat aaram karne ka plan hai ya koi kaam karna hai?'
      },
      {
        id: 'fc-10',
        speaker: 'Person B',
        text: 'I think I will just take a hot shower, order some light food, and watch a movie on Netflix.',
        romanHindi: 'Mujhe lagta hai main bas garam paani se nahaunga, halka khana mangaunga aur Netflix par movie dekhunga.',
        isUserTurn: true,
        suggestedUserHints: ['I will take a hot shower...', 'Order some food...', 'Watch a movie...']
      },
      {
        id: 'fc-11',
        speaker: 'Person A',
        text: 'Sounds like the perfect way to unwind. What movie are you thinking of watching?',
        romanHindi: 'Thakan utarne ka yeh sabse badhiya tareeka lagta hai. Kaunsi movie dekhne ka soch rahe ho?'
      },
      {
        id: 'fc-12',
        speaker: 'Person B',
        text: 'Probably that new thriller everyone has been recommending lately. Have you seen it?',
        romanHindi: 'Shaayad woh nayi thriller jiske baare mein sab log bol rahe hain. Kya tumne dekhi hai?',
        isUserTurn: true,
        suggestedUserHints: ['Probably the new thriller...', 'People have been recommending it...', 'Have you seen it?']
      },
      {
        id: 'fc-13',
        speaker: 'Person A',
        text: 'Not yet, but I heard the climax is brilliant! Let me know if it\'s worth watching.',
        romanHindi: 'Abhi tak nahi, par maine suna hai climax dhamakedaar hai! Mujhe batana agar achhi lagi toh.'
      },
      {
        id: 'fc-14',
        speaker: 'Person B',
        text: 'I will definitely let you know tomorrow morning. Take care and have a wonderful evening!',
        romanHindi: 'Main kal subah pakka bataunga. Apna khayal rakhna aur shaam achhi guzre!',
        isUserTurn: true,
        suggestedUserHints: ['I will definitely let you know...', 'Take care...', 'Talk to you tomorrow!']
      }
    ],
    difficultWords: [
      { word: 'Pretty good', meaning: 'Quite good / positive', romanHindi: 'Kafi achha' },
      { word: 'What kept you busy?', meaning: 'What occupied all your time?', romanHindi: 'Kis cheez ne tumhe busy rakha?' },
      { word: 'Relieved', meaning: 'Feeling happy because a worry has passed', romanHindi: 'Sukoon mehsoos karna / Chinta door hona' },
      { word: 'Unwind', meaning: 'To relax after hard work', romanHindi: 'Thakan mitana aur aaram karna' }
    ],
    naturalExpressions: [
      { phrase: 'What kept you busy?', explanation: 'Natural conversational way of asking what tasks someone was doing', romanHindi: 'Aap kis kaam mein lage hue the?' },
      { phrase: 'Sounds like the perfect way to unwind', explanation: 'Polite way to validate someone\'s evening relaxation plans', romanHindi: 'Aaram karne ka kafi sahi plan lag raha hai' },
      { phrase: 'I will definitely let you know', explanation: 'Friendly promise to update someone later', romanHindi: 'Main pakka bataunga' }
    ],
    practicePrompt: 'Tell your friend how your workday was in 4 sentences: mention what tasks kept you busy and how you plan to relax tonight.'
  },

  // 2. TALKING ABOUT DAILY ROUTINE
  {
    id: 'sp-daily-routine',
    title: 'Talking About My Daily Routine & Morning Habits',
    category: 'Talking about my daily routine',
    level: 'Medium',
    description: 'Discussing morning alarms, commute to work or college, breakfast choices, and managing your daily hours.',
    dialogue: [
      {
        id: 'dr-1',
        speaker: 'Person A',
        text: 'What time do you usually wake up on weekdays?',
        romanHindi: 'Tum aamtaur par weekdays par kitne baje uthte ho?'
      },
      {
        id: 'dr-2',
        speaker: 'Person B',
        text: 'I usually set my alarm for 6:30 AM, but I realistically get out of bed around 6:45.',
        romanHindi: 'Main aamtaur par 6:30 ka alarm lagata hoon, par sach bolun toh 6:45 ke aas-paas bistar chhodta hoon.',
        isUserTurn: true,
        suggestedUserHints: ['I set alarm for 6:30 AM...', 'I get out of bed around 6:45...', 'I drink water first...']
      },
      {
        id: 'dr-3',
        speaker: 'Person A',
        text: 'That\'s pretty early! What is the first thing you do in the morning?',
        romanHindi: 'Yeh toh kafi jaldi hai! Subah uthte hi sabse pehla kaam kya karte ho?'
      },
      {
        id: 'dr-4',
        speaker: 'Person B',
        text: 'The first thing I do is drink a large glass of warm water, and then I go for a short 20-minute walk.',
        romanHindi: 'Sabse pehle main ek bada glass gunguna paani peeta hoon, aur phir 20 minute ke liye walk par jata hoon.',
        isUserTurn: true,
        suggestedUserHints: ['First I drink warm water...', 'Then I go for a walk...', 'It freshens me up...']
      },
      {
        id: 'dr-5',
        speaker: 'Person A',
        text: 'Going for a walk is a great habit. Do you cook your own breakfast too?',
        romanHindi: 'Subah ki walk bahut achhi aadat hai. Kya tum apna nashta bhi khud banate ho?'
      },
      {
        id: 'dr-6',
        speaker: 'Person B',
        text: 'Yes, most days I make something simple like eggs with toast or a bowl of oats with fresh fruits.',
        romanHindi: 'Haan, zyadatar din main kuch aasan banata hoon jaise eggs aur toast ya oats aur fruits.',
        isUserTurn: true,
        suggestedUserHints: ['Yes, I make eggs with toast...', 'Sometimes oats with fruits...', 'It takes only 10 minutes...']
      },
      {
        id: 'dr-7',
        speaker: 'Person A',
        text: 'Nice and healthy. How long does it take you to commute to your office or college?',
        romanHindi: 'Badhiya aur healthy. Tumhe office ya college pahunchne mein kitna time lagta hai?'
      },
      {
        id: 'dr-8',
        speaker: 'Person B',
        text: 'It takes roughly 45 minutes by metro. The trains get crowded, but it is faster than driving through traffic.',
        romanHindi: 'Metro se lagbhag 45 minute lagte hain. Train mein bheed hoti hai, par traffic se tez hai.',
        isUserTurn: true,
        suggestedUserHints: ['It takes roughly 45 minutes...', 'The metro gets crowded...', 'It is faster than driving...']
      },
      {
        id: 'dr-9',
        speaker: 'Person A',
        text: 'What do you do to pass the time during your daily commute?',
        romanHindi: 'Raste mein time pass karne ke liye kya karte ho?'
      },
      {
        id: 'dr-10',
        speaker: 'Person B',
        text: 'I usually put on my earphones and listen to an English podcast or review daily vocabulary flashcards.',
        romanHindi: 'Main aamtaur par earphones lagakar English podcast sunta hoon ya daily vocabulary flashcards dekhta hoon.',
        isUserTurn: true,
        suggestedUserHints: ['I put on earphones...', 'Listen to a podcast...', 'Review flashcards...']
      },
      {
        id: 'dr-11',
        speaker: 'Person A',
        text: 'That is such a productive way to use your travel time! What time do you wrap up your day?',
        romanHindi: 'Travel time ka use karne ka yeh kitna shaandaar tareeka hai! Tumhara din kitne baje khatam hota hai?'
      },
      {
        id: 'dr-12',
        speaker: 'Person B',
        text: 'I usually leave around 6:00 PM, reach home by 7:00, and spend quality time with my family.',
        romanHindi: 'Main aamtaur par 6:00 baje nikalta hoon, 7:00 tak ghar pahunchta hoon, aur family ke saath time bitata hoon.',
        isUserTurn: true,
        suggestedUserHints: ['I leave around 6 PM...', 'Reach home by 7...', 'Spend time with family...']
      },
      {
        id: 'dr-13',
        speaker: 'Person A',
        text: 'Do you usually sleep early too?',
        romanHindi: 'Kya tum aamtaur par jaldi so bhi jaate ho?'
      },
      {
        id: 'dr-14',
        speaker: 'Person B',
        text: 'I try to be in bed by 11:00 PM so that I get at least seven hours of restful sleep.',
        romanHindi: 'Main koshish karta hoon ki 11:00 baje tak so jaun taaki kam se kam saat ghante ki achhi neend mile.',
        isUserTurn: true,
        suggestedUserHints: ['I try to sleep by 11 PM...', 'I need seven hours of sleep...', 'It helps me wake up fresh...']
      }
    ],
    difficultWords: [
      { word: 'Realistically', meaning: 'In truth / in reality', romanHindi: 'Sach bolun toh / Haqeeqat mein' },
      { word: 'Commute', meaning: 'Travel regularly between home and work', romanHindi: 'Ghar se kaam aana-jana' },
      { word: 'Productive', meaning: 'Yielding effective results', romanHindi: 'Faydemand / Kaam ka' }
    ],
    naturalExpressions: [
      { phrase: 'I realistically get out of bed around...', explanation: 'Admitting your actual time rather than just when the alarm rings', romanHindi: 'Sach bolun toh main itne baje uthta hoon' },
      { phrase: 'To pass the time', explanation: 'Doing an activity while waiting or traveling', romanHindi: 'Waqt guzaarna' }
    ],
    practicePrompt: 'Describe your typical morning routine in 4 sentences: wake-up time, breakfast, and how you commute to work or college.'
  },

  // 3. TALKING ABOUT WORK AND STUDIES
  {
    id: 'sp-work-studies',
    title: 'Talking About Work and Studies: Projects & Deadlines',
    category: 'Talking about work and studies',
    level: 'Medium',
    description: 'Talking about daily job responsibilities, managing assignments, coordinating with team members, and meeting deadlines.',
    dialogue: [
      {
        id: 'ws-1',
        speaker: 'Person A',
        text: 'How are things going with your new project at work?',
        romanHindi: 'Kaam par tumhare naye project ke saath sab kaisa chal raha hai?'
      },
      {
        id: 'ws-2',
        speaker: 'Person B',
        text: 'It is going quite well, although the workload has increased significantly this week.',
        romanHindi: 'Kafi achha chal raha hai, halaanki is hafte kaam ka bojh kafi badh gaya hai.',
        isUserTurn: true,
        suggestedUserHints: ['It is going quite well...', 'Workload has increased...', 'We have tight deadlines...']
      },
      {
        id: 'ws-3',
        speaker: 'Person A',
        text: 'What kind of responsibilities are you handling right now?',
        romanHindi: 'Abhi tum kis tarah ki zimmewariyan sambhal rahe ho?'
      },
      {
        id: 'ws-4',
        speaker: 'Person B',
        text: 'I am mainly coordinating between the design team and the developers to ensure tasks stay on track.',
        romanHindi: 'Main mukhya roop se design team aur developers ke beech coordination sambhal raha hoon taaki kaam sahi chale.',
        isUserTurn: true,
        suggestedUserHints: ['I am coordinating with the team...', 'Ensuring tasks stay on track...', 'Writing daily updates...']
      },
      {
        id: 'ws-5',
        speaker: 'Person A',
        text: 'That requires a lot of communication. Do you have to attend many meetings every day?',
        romanHindi: 'Isme toh kafi communication ki zarurat hoti hai. Kya tumhe roz bahut saari meetings attend karni padti hain?'
      },
      {
        id: 'ws-6',
        speaker: 'Person B',
        text: 'Usually two or three. We have a 15-minute morning standup, and then client updates as needed.',
        romanHindi: 'Aamtaur par do ya teen. Ek 15 minute ka subah ka standup hota hai, aur phir zarurat padne par client updates.',
        isUserTurn: true,
        suggestedUserHints: ['Usually two or three meetings...', 'We have a morning standup...', 'Client calls as needed...']
      },
      {
        id: 'ws-7',
        speaker: 'Person A',
        text: 'How do you prioritize your tasks when everything seems urgent?',
        romanHindi: 'Jab har kaam urgent lagta hai, tab tum priorities kaise tay karte ho?'
      },
      {
        id: 'ws-8',
        speaker: 'Person B',
        text: 'I write down a top-three list every morning and finish the most crucial item before checking emails.',
        romanHindi: 'Main har subah top 3 kaamo ki list banata hoon aur emails check karne se pehle sabse zaroori kaam poora karta hoon.',
        isUserTurn: true,
        suggestedUserHints: ['I make a top-three list...', 'Finish crucial items first...', 'Avoid distractions...']
      },
      {
        id: 'ws-9',
        speaker: 'Person A',
        text: 'That is a very pragmatic technique. What is the deadline for this phase?',
        romanHindi: 'Yeh kafi vyavaharik tareeka hai. Is phase ki deadline kab tak ki hai?'
      },
      {
        id: 'ws-10',
        speaker: 'Person B',
        text: 'We are aiming to wrap up everything by next Friday afternoon so we can test over the weekend.',
        romanHindi: 'Hamara irada agle shukravaar dopahar tak sab khatam karne ka hai taaki weekend par test kar sakein.',
        isUserTurn: true,
        suggestedUserHints: ['Aiming to wrap up by Friday...', 'Test over the weekend...', 'We are on schedule...']
      },
      {
        id: 'ws-11',
        speaker: 'Person A',
        text: 'Do you feel confident that you will hit the target date?',
        romanHindi: 'Kya tumhe lagta hai ki tum target date tak kaam poora kar loge?'
      },
      {
        id: 'ws-12',
        speaker: 'Person B',
        text: 'Yes, definitely. The whole team is aligned and working smoothly together.',
        romanHindi: 'Haan, bilkul. Poori team ek saath milkar kafi achhe se kaam kar rahi hai.',
        isUserTurn: true,
        suggestedUserHints: ['Yes, definitely...', 'The team is aligned...', 'We are working smoothly...']
      },
      {
        id: 'ws-13',
        speaker: 'Person A',
        text: 'Best of luck with the delivery! I\'m sure you\'ll do great.',
        romanHindi: 'Delivery ke liye shubhkaamnayein! Mujhe yakeen hai tum achha karoge.'
      }
    ],
    difficultWords: [
      { word: 'Crucial', meaning: 'Extremely important or necessary', romanHindi: 'Atyant zaroori' },
      { word: 'Standup', meaning: 'A short daily status meeting where team members stand', romanHindi: 'Chhoti daily team meeting' },
      { word: 'Aligned', meaning: 'In full agreement and working towards the same goal', romanHindi: 'Ek sath sahmat hona' }
    ],
    naturalExpressions: [
      { phrase: 'To stay on track', explanation: 'Continuing according to the planned schedule without delay', romanHindi: 'Sahi time par chalna' },
      { phrase: 'Hit the target date', explanation: 'Meeting a deadline successfully', romanHindi: 'Time par kaam poora karna' }
    ],
    practicePrompt: 'Describe a project or study assignment you are currently working on. Explain one challenge and how you plan to finish it.'
  },

  // 4. EXPRESSING OPINIONS
  {
    id: 'sp-expressing-opinions',
    title: 'Expressing Opinions: Remote Work vs Office Work',
    category: 'Expressing opinions',
    level: 'Medium',
    description: 'Politely sharing your perspective on work-life balance, giving reasons, and validating others.',
    dialogue: [
      {
        id: 'eo-1',
        speaker: 'Person A',
        text: 'Do you prefer working remotely from home or going into the office every day?',
        romanHindi: 'Tum ghar se remote kaam karna pasand karte ho ya roz office jana?'
      },
      {
        id: 'eo-2',
        speaker: 'Person B',
        text: 'In my opinion, a hybrid model is the best balance between convenience and team bonding.',
        romanHindi: 'Meri raye mein, hybrid model suvidha aur team ke sath judne ke beech sabse behtar balance hai.',
        isUserTurn: true,
        suggestedUserHints: ['In my opinion, hybrid is best...', 'Saves commute time...', 'Good for team bonding...']
      },
      {
        id: 'eo-3',
        speaker: 'Person A',
        text: 'Why do you think hybrid is better than 100% remote work?',
        romanHindi: 'Tumhe kyun lagta hai ki hybrid poori tarah remote se behtar hai?'
      },
      {
        id: 'eo-4',
        speaker: 'Person B',
        text: 'Working from home saves two hours of daily commute; however, meeting teammates in person helps resolve issues faster.',
        romanHindi: 'Ghar se kaam karne se roz ke do ghante ka safar bachta hai; lekin teammates se aamne-saamne milne se batein jaldi sulajhti hain.',
        isUserTurn: true,
        suggestedUserHints: ['Saves two hours of commute...', 'However, in-person meetings help...', 'It avoids isolation...']
      },
      {
        id: 'eo-5',
        speaker: 'Person A',
        text: 'That is a fair point. But don\'t you get distracted easily when working at home?',
        romanHindi: 'Yeh sahi baat hai. Lekin kya ghar par kaam karte waqt aasani se dhyan nahi bhatakta?'
      },
      {
        id: 'eo-6',
        speaker: 'Person B',
        text: 'Not really, as long as you have a dedicated quiet desk and set strict working hours.',
        romanHindi: 'Sach kahoon toh nahi, bas aapke paas ek shaant desk honi chahiye aur kaam ke ghante tay hone chahiye.',
        isUserTurn: true,
        suggestedUserHints: ['Not really...', 'You need a dedicated desk...', 'Set strict working hours...']
      },
      {
        id: 'eo-7',
        speaker: 'Person A',
        text: 'I suppose you are right. Having clear boundaries makes a big difference.',
        romanHindi: 'Mujhe lagta hai tum sahi keh rahe ho. Saaf seemayein tay karne se bada fark padta hai.'
      },
      {
        id: 'eo-8',
        speaker: 'Person B',
        text: 'Exactly! Without boundaries, you end up answering work emails even at 10:00 PM.',
        romanHindi: 'Wahi toh! Agar boundary na ho toh raat ko 10:00 baje bhi office ke emails ka jawab dena padta hai.',
        isUserTurn: true,
        suggestedUserHints: ['Exactly...', 'Without boundaries you overwork...', 'Disconnecting is crucial...']
      },
      {
        id: 'eo-9',
        speaker: 'Person A',
        text: 'How many days a week would you ideally like to visit the office?',
        romanHindi: 'Tum aamtaur par hafte mein kitne din office jana pasand karoge?'
      },
      {
        id: 'eo-10',
        speaker: 'Person B',
        text: 'I feel that two days in the office and three days from home is the sweet spot.',
        romanHindi: 'Mujhe lagta hai do din office aur teen din ghar se sabse ideal combination hai.',
        isUserTurn: true,
        suggestedUserHints: ['Two days in office...', 'Three days from home...', 'It gives the perfect balance...']
      },
      {
        id: 'eo-11',
        speaker: 'Person A',
        text: 'I completely agree with your perspective. That sounds ideal.',
        romanHindi: 'Main tumhari baat se poori tarah sahmat hoon. Yeh kafi sahi lagta hai.'
      },
      {
        id: 'eo-12',
        speaker: 'Person B',
        text: 'Glad to hear that! What does your own company follow currently?',
        romanHindi: 'Yeh sunkar achha laga! Tumhari company abhi kya follow karti hai?',
        isUserTurn: true,
        suggestedUserHints: ['Glad to hear that...', 'What does your company do?', 'Are you remote?']
      },
      {
        id: 'eo-13',
        speaker: 'Person A',
        text: 'We are currently three days in office, which works out reasonably well for us.',
        romanHindi: 'Hum log abhi hafte mein teen din office jate hain, jo hamare liye kafi theek chal raha hai.'
      }
    ],
    difficultWords: [
      { word: 'Sweet spot', meaning: 'The ideal or most effective balance point', romanHindi: 'Sabse behtareen santulan' },
      { word: 'Dedicated', meaning: 'Set apart for one specific purpose', romanHindi: 'Khaas taur par usi kaam ke liye tay' },
      { word: 'Boundaries', meaning: 'Limits separating personal life and work duties', romanHindi: 'Seemayein' }
    ],
    naturalExpressions: [
      { phrase: 'In my opinion', explanation: 'Polite way to express a personal viewpoint', romanHindi: 'Meri raye mein' },
      { phrase: 'That is a fair point', explanation: 'Politely acknowledging someone\'s logical argument', romanHindi: 'Yeh baat samajh aati hai' }
    ],
    practicePrompt: 'Share your personal opinion in 4 sentences: Do you prefer shopping online or visiting physical retail stores?'
  },

  // 5. ASKING QUESTIONS NATURALLY
  {
    id: 'sp-asking-questions',
    title: 'Asking Questions Naturally: Getting to Know a New Colleague',
    category: 'Asking questions naturally',
    level: 'Medium',
    description: 'How to ask polite, open-ended conversational questions without sounding like an interrogator.',
    dialogue: [
      {
        id: 'aq-1',
        speaker: 'Person A',
        text: 'Hi there! I noticed you recently joined our marketing department. Welcome to the team!',
        romanHindi: 'Namaste! Maine dekha aapne haal hi mein marketing department join kiya hai. Team mein swagat hai!'
      },
      {
        id: 'aq-2',
        speaker: 'Person B',
        text: 'Thank you so much! It has been an exciting first couple of days so far.',
        romanHindi: 'Bahut bahut shukriya! Abhi tak ke pehle do-teen din kafi romanchak rahe hain.',
        isUserTurn: true,
        suggestedUserHints: ['Thank you so much...', 'Exciting first days...', 'Everyone has been helpful...']
      },
      {
        id: 'aq-3',
        speaker: 'Person A',
        text: 'How are you settling in? Has everyone helped you get set up with your laptop and tools?',
        romanHindi: 'Aap kaisa settle ho rahe hain? Kya sabne aapka laptop aur tools setup karne mein madad ki?'
      },
      {
        id: 'aq-4',
        speaker: 'Person B',
        text: 'Yes, the IT team was very helpful. How long have you been working here yourself?',
        romanHindi: 'Haan, IT team ne kafi madad ki. Aap khud yahan kitne samay se kaam kar rahe hain?',
        isUserTurn: true,
        suggestedUserHints: ['IT team was helpful...', 'How long have you worked here?', 'What department are you in?']
      },
      {
        id: 'aq-5',
        speaker: 'Person A',
        text: 'I have been here for about three years now. Did you relocate to this city for the job?',
        romanHindi: 'Mujhe yahan lagbhag teen saal ho gaye hain. Kya aap is naukri ke liye doosre shahar se yahan shift hue hain?'
      },
      {
        id: 'aq-6',
        speaker: 'Person B',
        text: 'Yes, I actually moved here from Pune two weeks ago. Do you know of any good food spots nearby?',
        romanHindi: 'Haan, main asal mein do hafte pehle Pune se yahan shift hua hoon. Kya aapko paas mein koi achhe khane ke spots pata hain?',
        isUserTurn: true,
        suggestedUserHints: ['Yes, I moved from Pune...', 'Do you know good food spots nearby?', 'Any lunch recommendations?']
      },
      {
        id: 'aq-7',
        speaker: 'Person A',
        text: 'There is a fantastic South Indian cafe right across the street. Would you like to join us for lunch today?',
        romanHindi: 'Sadak ke bilkul uss taraf ek zabardast South Indian cafe hai. Kya aap aaj hamare sath lunch ke liye chalna pasand karenge?'
      },
      {
        id: 'aq-8',
        speaker: 'Person B',
        text: 'I would love to! What time does your team usually head out for lunch?',
        romanHindi: 'Mujhe kafi khushi hogi! Aapki team aamtaur par kitne baje lunch ke liye nikalti hai?',
        isUserTurn: true,
        suggestedUserHints: ['I would love to...', 'What time do you head out?', 'I will meet you at reception...']
      },
      {
        id: 'aq-9',
        speaker: 'Person A',
        text: 'We usually head out around 1:15 PM. What kind of projects did you handle at your previous company?',
        romanHindi: 'Hum aamtaur par 1:15 baje nikalte hain. Aapne apni pichhli company mein kis tarah ke projects sambhale the?'
      },
      {
        id: 'aq-10',
        speaker: 'Person B',
        text: 'I handled social media marketing and brand partnerships for an e-commerce startup.',
        romanHindi: 'Maine ek e-commerce startup ke liye social media marketing aur brand partnerships sambhali thi.',
        isUserTurn: true,
        suggestedUserHints: ['I handled social media...', 'Brand partnerships...', 'Learned a lot there...']
      },
      {
        id: 'aq-11',
        speaker: 'Person A',
        text: 'That sounds like very relevant experience for our team. Are you finding your way around the office floor okay?',
        romanHindi: 'Yeh toh hamari team ke liye kafi kaam ka anubhav lagta hai. Kya aapko office ke floors aur rooms dhoondhne mein koi pareshani toh nahi ho rahi?'
      },
      {
        id: 'aq-12',
        speaker: 'Person B',
        text: 'I still get a little confused about where the cafeteria stairs are, but I will figure it out soon!',
        romanHindi: 'Mujhe abhi bhi cafeteria ki seedhiyan dhoondhne mein thoda confusion hota hai, par main jaldi samajh jaunga!',
        isUserTurn: true,
        suggestedUserHints: ['Still a bit confused about stairs...', 'I will figure it out soon...', 'Thanks for showing me around...']
      },
      {
        id: 'aq-13',
        speaker: 'Person A',
        text: 'Don\'t worry at all! I will stop by your desk at 1:15 and show you the way.',
        romanHindi: 'Bilkul chinta mat kijiye! Main 1:15 baje aapke desk par aaunga aur rasta dikha doonga.'
      }
    ],
    difficultWords: [
      { word: 'Settling in', meaning: 'Becoming comfortable in a new home or workplace', romanHindi: 'Naye mahol mein set hona' },
      { word: 'Relocate', meaning: 'Move to a new city or country for work', romanHindi: 'Shahar badalna' },
      { word: 'Partnerships', meaning: 'Working relationships with other companies', romanHindi: 'Saajhedari' }
    ],
    naturalExpressions: [
      { phrase: 'How are you settling in?', explanation: 'Polite question to ask someone new at office or college', romanHindi: 'Aap naye mahol mein kaise dhal rahe hain?' },
      { phrase: 'I would love to!', explanation: 'Enthusiastic and polite acceptance of an invitation', romanHindi: 'Mujhe chalne mein kafi khushi hogi!' }
    ],
    practicePrompt: 'Imagine meeting a new colleague. Ask them 3 natural questions: how long they have lived here, what they do, and invite them for coffee.'
  },

  // 6. TALKING ABOUT PAST EXPERIENCES
  {
    id: 'sp-past-experiences',
    title: 'Talking About Past Experiences: A Memorable Weekend Road Trip',
    category: 'Talking about past experiences',
    level: 'Medium',
    description: 'Narrating past events, using Past Simple and Past Continuous naturally, and sharing funny travel moments.',
    dialogue: [
      {
        id: 'pe-1',
        speaker: 'Person A',
        text: 'Did you do anything exciting over the long weekend?',
        romanHindi: 'Kya tumne lambe weekend par kuch mazedaar kiya?'
      },
      {
        id: 'pe-2',
        speaker: 'Person B',
        text: 'Yes! My college friends and I went on a spontaneous road trip to the hills.',
        romanHindi: 'Haan! Main aur mere college ke dost achanak pahaadon ke road trip par gaye the.',
        isUserTurn: true,
        suggestedUserHints: ['Yes, we took a road trip...', 'Went to the hills with friends...', 'It was spontaneous...']
      },
      {
        id: 'pe-3',
        speaker: 'Person A',
        text: 'That sounds amazing! Who drove the car, and what time did you leave?',
        romanHindi: 'Yeh toh bahut shaandar lag raha hai! Gaadi kisne chalayi, aur kitne baje nikle the?'
      },
      {
        id: 'pe-4',
        speaker: 'Person B',
        text: 'My friend Rohit drove the first half, and we left home early around 5:30 AM to beat the city traffic.',
        romanHindi: 'Mere dost Rohit ne pehla aadha rasta chalaya, aur hum subah 5:30 baje nikle the taaki traffic se bach sakein.',
        isUserTurn: true,
        suggestedUserHints: ['My friend Rohit drove...', 'Left early at 5:30 AM...', 'To beat the city traffic...']
      },
      {
        id: 'pe-5',
        speaker: 'Person A',
        text: 'Smart decision. How was the weather once you reached the mountains?',
        romanHindi: 'Samajhdari bhara faisla. Pahaadon par pahunchte hi mausam kaisa tha?'
      },
      {
        id: 'pe-6',
        speaker: 'Person B',
        text: 'The weather was pleasantly cool and misty. It was such a welcome break from the humid city heat.',
        romanHindi: 'Mausam kafi thanda aur dhundhla tha. Shahar ki garmi se yeh kafi sukoon bhara badlav tha.',
        isUserTurn: true,
        suggestedUserHints: ['Pleasantly cool and misty...', 'A welcome break from city heat...', 'Fresh mountain air...']
      },
      {
        id: 'pe-7',
        speaker: 'Person A',
        text: 'Did you guys go trekking or did you just relax at a resort?',
        romanHindi: 'Kya tum log trekking par gaye the ya bas resort mein aaram kiya?'
      },
      {
        id: 'pe-8',
        speaker: 'Person B',
        text: 'We hiked up a gentle nature trail to a hidden waterfall on Saturday afternoon.',
        romanHindi: 'Hum shanivaar dopahar ko ek aasan raste se ek chhupe hue jharne tak paidal gaye the.',
        isUserTurn: true,
        suggestedUserHints: ['We hiked to a waterfall...', 'The scenery was gorgeous...', 'Took lots of photos...']
      },
      {
        id: 'pe-9',
        speaker: 'Person A',
        text: 'Did anything unexpected or funny happen along the way?',
        romanHindi: 'Kya raste mein koi anokhi ya mazedaar baat hui?'
      },
      {
        id: 'pe-10',
        speaker: 'Person B',
        text: 'Actually, yes! We lost mobile internet signal completely, so we had to ask local villagers for directions using hand gestures!',
        romanHindi: 'Asal mein haan! Hamara mobile network poori tarah chala gaya tha, isliye gaon walon se hath ke isharon se rasta poochna pada!',
        isUserTurn: true,
        suggestedUserHints: ['We lost mobile signal...', 'Asked villagers for directions...', 'It turned out fun...']
      },
      {
        id: 'pe-11',
        speaker: 'Person A',
        text: 'Haha, that is what makes road trips so memorable! Did you try any local food?',
        romanHindi: 'Haha, aisi baaton se hi toh road trips yaadgar bante hain! Kya wahan ka koi local khana try kiya?'
      },
      {
        id: 'pe-12',
        speaker: 'Person B',
        text: 'We had steaming hot Maggi and ginger tea at a roadside stall overlooking the deep valley.',
        romanHindi: 'Humne ghaati ke kinare ek roadside dhabe par garma-garam Maggi aur adrak wali chai pi.',
        isUserTurn: true,
        suggestedUserHints: ['Hot Maggi and ginger tea...', 'At a roadside stall...', 'Overlooking the valley...']
      },
      {
        id: 'pe-13',
        speaker: 'Person A',
        text: 'Nothing beats hot tea in the mountains! When did you return back home?',
        romanHindi: 'Pahaadon mein garam chai ka koi muqabla nahi! Ghar wapas kab aaye?'
      },
      {
        id: 'pe-14',
        speaker: 'Person B',
        text: 'We drove back on Sunday evening and reached home by 9:00 PM, feeling refreshed and ready for the week.',
        romanHindi: 'Hum ravivaar shaam ko wapas gaadi chala kar aaye aur 9:00 baje tak pahunche, bilkul taaza-dum hokar.',
        isUserTurn: true,
        suggestedUserHints: ['Drove back Sunday evening...', 'Reached by 9 PM...', 'Feeling refreshed...']
      }
    ],
    difficultWords: [
      { word: 'Spontaneous', meaning: 'Done naturally on impulse without long prior planning', romanHindi: 'Achanak banaya gaya plan' },
      { word: 'Misty', meaning: 'Filled with light fog or water droplets', romanHindi: 'Dhundhla / Kohre wala' },
      { word: 'Hand gestures', meaning: 'Using hand movements to communicate without words', romanHindi: 'Haath ke ishaare' }
    ],
    naturalExpressions: [
      { phrase: 'To beat the traffic', explanation: 'Leaving early to avoid sitting in traffic jams', romanHindi: 'Traffic shuru hone se pehle nikalna' },
      { phrase: 'Nothing beats...', explanation: 'Idiom meaning that something is the absolute best', romanHindi: 'Iska koi muqabla nahi' }
    ],
    practicePrompt: 'Describe a memorable trip or celebration you enjoyed in the past. Where did you go, who was with you, and what made it special?'
  },

  // 7. DISCUSSING FUTURE PLANS
  {
    id: 'sp-future-plans',
    title: 'Discussing Future Plans: Upcoming Vacations & Career Goals',
    category: 'Discussing future plans',
    level: 'Medium',
    description: 'Using "going to" and "will" to discuss travel plans, budgeting, and career milestones for the upcoming year.',
    dialogue: [
      {
        id: 'fp-1',
        speaker: 'Person A',
        text: 'Have you made any holiday plans for the upcoming festive season?',
        romanHindi: 'Kya tumne aane wale tyohar ke season ke liye koi chhutti ka plan banaya hai?'
      },
      {
        id: 'fp-2',
        speaker: 'Person B',
        text: 'Yes! My family and I are going to visit Kerala for a week in December.',
        romanHindi: 'Haan! Main aur meri family December mein ek hafte ke liye Kerala ghoomne jane wale hain.',
        isUserTurn: true,
        suggestedUserHints: ['Yes, we are going to Kerala...', 'Visiting in December for a week...', 'Already booked flights...']
      },
      {
        id: 'fp-3',
        speaker: 'Person A',
        text: 'Kerala is stunning! Have you already booked your flight tickets and hotel stays?',
        romanHindi: 'Kerala bahut sundar hai! Kya tumne flight tickets aur hotel pehle hi book kar liye hain?'
      },
      {
        id: 'fp-4',
        speaker: 'Person B',
        text: 'We have already booked our flights, but we are still comparing a few homestays near the tea plantations.',
        romanHindi: 'Humne flights book kar li hain, lekin chai ke bagano ke paas ke kuch homestays ko compare kar rahe hain.',
        isUserTurn: true,
        suggestedUserHints: ['Flights are booked...', 'Comparing homestays...', 'Looking near tea plantations...']
      },
      {
        id: 'fp-5',
        speaker: 'Person A',
        text: 'Staying in a homestay will give you authentic homemade meals. Are you planning to rent a car there?',
        romanHindi: 'Homestay mein rehne se tumhe ghar jaisa asli khana milega. Kya wahan gaadi rent karne ka plan hai?'
      },
      {
        id: 'fp-6',
        speaker: 'Person B',
        text: 'Probably not; I think we will hire a local driver who knows the winding mountain roads safely.',
        romanHindi: 'Shaayad nahi; mujhe lagta hai hum ek local driver hire karenge jise ghumavdaar pahaadi raaste achhe se pata hon.',
        isUserTurn: true,
        suggestedUserHints: ['Probably not...', 'We will hire a local driver...', 'Safer on mountain roads...']
      },
      {
        id: 'fp-7',
        speaker: 'Person A',
        text: 'That is much safer. Aside from travel, do you have any professional goals for next year?',
        romanHindi: 'Woh kahin zyada safe hai. Travel ke alawa, kya agle saal ke liye koi career goal hai?'
      },
      {
        id: 'fp-8',
        speaker: 'Person B',
        text: 'I am planning to earn a certification in cloud computing and improve my public speaking confidence.',
        romanHindi: 'Main cloud computing mein certification lene aur public speaking confidence sudharne ki planning kar raha hoon.',
        isUserTurn: true,
        suggestedUserHints: ['Earning a certification...', 'Improving public speaking...', 'Taking an online course...']
      },
      {
        id: 'fp-9',
        speaker: 'Person A',
        text: 'Both of those will open up tremendous career opportunities for you.',
        romanHindi: 'Yeh dono cheezein tumhare career mein bade mauke khol dengi.'
      },
      {
        id: 'fp-10',
        speaker: 'Person B',
        text: 'I really hope so. I am dedicating 30 minutes every evening to studying for the exam.',
        romanHindi: 'Mujhe poori umeed hai. Main exam ki taiyari ke liye har shaam 30 minute de raha hoon.',
        isUserTurn: true,
        suggestedUserHints: ['I hope so...', 'Dedicating 30 minutes daily...', 'Consistency is key...']
      },
      {
        id: 'fp-11',
        speaker: 'Person A',
        text: 'Consistency always pays off. When do you expect to take the certification test?',
        romanHindi: 'Regular mehnat ka phal hamesha milta hai. Test dene ka irada kab tak ka hai?'
      },
      {
        id: 'fp-12',
        speaker: 'Person B',
        text: 'I will probably schedule the test towards the end of January after returning from vacation.',
        romanHindi: 'Main chhuttiyon se wapas aane ke baad shaayad January ke aakhiri hafte mein test schedule karunga.',
        isUserTurn: true,
        suggestedUserHints: ['Probably in late January...', 'After vacation...', 'I will let you know how it goes...']
      },
      {
        id: 'fp-13',
        speaker: 'Person A',
        text: 'Sounds like a solid, realistic plan. I\'m rooting for your success!',
        romanHindi: 'Kafi pakka aur practical plan lagta hai. Meri shubhkaamnayein tumhare sath hain!'
      }
    ],
    difficultWords: [
      { word: 'Plantations', meaning: 'Large agricultural estates where crops like tea or coffee grow', romanHindi: 'Bagaan' },
      { word: 'Winding', meaning: 'Having many curves and turns', romanHindi: 'Ghumavdaar' },
      { word: 'Rooting for', meaning: 'Cheering and hoping for someone\'s victory or success', romanHindi: 'Dil se dua karna' }
    ],
    naturalExpressions: [
      { phrase: 'Consistency always pays off', explanation: 'Wisdom that regular daily efforts bring big rewards', romanHindi: 'Rozana ki aadat se hamesha bada fayda milta hai' },
      { phrase: 'I\'m rooting for your success', explanation: 'Warm expression wishing someone good fortune', romanHindi: 'Main tumhari safalta ke liye cheer kar raha hoon' }
    ],
    practicePrompt: 'Describe your personal plans for next weekend or the upcoming month in 4 sentences using "going to" and "will".'
  },

  // 8. SHOPPING AND ORDERING FOOD
  {
    id: 'sp-shopping-food',
    title: 'Shopping & Ordering Food: Cafe & Restaurant Dining',
    category: 'Shopping and ordering food',
    level: 'Medium',
    description: 'Polite ways to request a table, ask for menu recommendations, customize spice levels, and pay the bill.',
    dialogue: [
      {
        id: 'sf-1',
        speaker: 'Server',
        text: 'Good afternoon! Welcome to Cafe Bistro. Table for two?',
        romanHindi: 'Namaste! Cafe Bistro mein swagat hai. Kya do logon ke liye table chahiye?'
      },
      {
        id: 'sf-2',
        speaker: 'You',
        text: 'Yes please, a table for two. Could we get a table by the window if possible?',
        romanHindi: 'Haan please, do logon ke liye table. Kya khidki ke paas wali table mil sakti hai agar possible ho?',
        isUserTurn: true,
        suggestedUserHints: ['Yes please, table for two...', 'By the window please...', 'Is outdoor seating available?']
      },
      {
        id: 'sf-3',
        speaker: 'Server',
        text: 'Certainly, right this way! Here are your menus. Can I start you off with something to drink?',
        romanHindi: 'Bilkul, is taraf aaiye! Yeh rahe aapke menu. Kya peene ke liye kuch lau?'
      },
      {
        id: 'sf-4',
        speaker: 'You',
        text: 'Could you bring us a bottle of regular water first, and two iced coffees with less sugar?',
        romanHindi: 'Kya aap pehle normal paani ki bottle laa sakte hain, aur do iced coffee kam cheeni ke saath?',
        isUserTurn: true,
        suggestedUserHints: ['A bottle of regular water...', 'Two iced coffees...', 'With less sugar please...']
      },
      {
        id: 'sf-5',
        speaker: 'Server',
        text: 'Sure thing, two iced coffees with less sugar. Are you ready to order food or do you need a few minutes?',
        romanHindi: 'Zaroor, do iced coffee kam cheeni ke saath. Kya khana order karne ke liye ready hain ya kuch minute chahiye?'
      },
      {
        id: 'sf-6',
        speaker: 'You',
        text: 'What do you recommend between the grilled vegetable sandwich and the creamy pasta?',
        romanHindi: 'Grilled veg sandwich aur creamy pasta mein se aap kya recommend karenge?',
        isUserTurn: true,
        suggestedUserHints: ['What do you recommend?', 'Between the sandwich and pasta...', 'Is the pasta heavy?']
      },
      {
        id: 'sf-7',
        speaker: 'Server',
        text: 'Our pesto pasta with garlic bread is our chef\'s special today. Customers absolutely love it!',
        romanHindi: 'Hamara pesto pasta garlic bread ke saath aaj chef\'s special hai. Customers ko kafi pasand aata hai!'
      },
      {
        id: 'sf-8',
        speaker: 'You',
        text: 'That sounds delicious! We will take one pesto pasta and one toasted vegetable sandwich, please.',
        romanHindi: 'Yeh toh lazeez lag raha hai! Hum ek pesto pasta aur ek toasted veg sandwich lenge, please.',
        isUserTurn: true,
        suggestedUserHints: ['Sounds delicious...', 'One pesto pasta...', 'One toasted sandwich please...']
      },
      {
        id: 'sf-9',
        speaker: 'Server',
        text: 'Would you like potato fries or a fresh side salad with the sandwich?',
        romanHindi: 'Sandwich ke saath aap fries lena pasand karenge ya fresh side salad?'
      },
      {
        id: 'sf-10',
        speaker: 'You',
        text: 'Potato fries please, and please ensure that the food is not overly spicy.',
        romanHindi: 'Potato fries please, aur dhyaan rakhiyega ki khana zyada teekha na ho.',
        isUserTurn: true,
        suggestedUserHints: ['Potato fries please...', 'Not overly spicy...', 'Thank you...']
      },
      {
        id: 'sf-11',
        speaker: 'Server',
        text: 'Got it, mild spice! Your drinks will be served in just three minutes.',
        romanHindi: 'Samajh gaya, kam teekha! Aapki drinks bas teen minute mein aati hain.'
      },
      {
        id: 'sf-12',
        speaker: 'You',
        text: 'Excuse me, whenever you have a moment, could you please bring us the bill?',
        romanHindi: 'Suniyega, jab bhi aapke paas waqt ho, kya aap bill laa sakte hain please?',
        isUserTurn: true,
        suggestedUserHints: ['Excuse me...', 'Could you bring the bill?', 'We are ready to pay...']
      },
      {
        id: 'sf-13',
        speaker: 'Server',
        text: 'Here is your bill, sir. You can pay by card, cash, or UPI scan code.',
        romanHindi: 'Yeh lijiye aapka bill, sir. Aap card, cash, ya UPI se pay kar sakte hain.'
      },
      {
        id: 'sf-14',
        speaker: 'You',
        text: 'I will pay via UPI scan code. The food was wonderful, thank you so much!',
        romanHindi: 'Main UPI scan code se pay karunga. Khana bahut badhiya tha, shukriya!',
        isUserTurn: true,
        suggestedUserHints: ['I will pay via UPI...', 'The food was wonderful...', 'Thank you so much!']
      }
    ],
    difficultWords: [
      { word: 'Recommend', meaning: 'Suggest as a good option', romanHindi: 'Salah dena / Sifarish karna' },
      { word: 'Mild spice', meaning: 'Low chilli content / not hot', romanHindi: 'Kam teekha' },
      { word: 'Ensure', meaning: 'Make sure that something happens', romanHindi: 'Dhyaan rakhna / Pakka karna' }
    ],
    naturalExpressions: [
      { phrase: 'Can I start you off with something to drink?', explanation: 'Polite server inquiry at the beginning of a meal', romanHindi: 'Peene ke liye pehle kuch lau?' },
      { phrase: 'Whenever you have a moment', explanation: 'Courteous way to request a waiter\'s attention without sounding bossy', romanHindi: 'Jab bhi aapko thoda waqt mile' }
    ],
    practicePrompt: 'Practice ordering your favourite meal at a cafe: ask for a table by the window, request less ice in your drink, and ask for the bill.'
  },

  // 9. PHONE CONVERSATIONS
  {
    id: 'sp-phone-conversations',
    title: 'Phone Conversations: Calling Customer Support & Leaving Messages',
    category: 'Phone conversations',
    level: 'Medium',
    description: 'Practical phone phrases for handling bad connections, clarifying information, and getting help over the phone.',
    dialogue: [
      {
        id: 'pc-1',
        speaker: 'Agent',
        text: 'Good morning, you have reached QuickNet Broadband support. My name is Kevin. How may I assist you today?',
        romanHindi: 'Shubh prabhat, aap QuickNet Broadband support par hain. Mera naam Kevin hai. Aaj main aapki kya madad kar sakta hoon?'
      },
      {
        id: 'pc-2',
        speaker: 'You',
        text: 'Hi Kevin. I am calling because my home wifi has been disconnected since this morning.',
        romanHindi: 'Hi Kevin. Main isliye phone kar raha hoon kyunki mera home wifi aaj subah se band hai.',
        isUserTurn: true,
        suggestedUserHints: ['Hi Kevin...', 'My home wifi has been disconnected...', 'Since this morning...']
      },
      {
        id: 'pc-3',
        speaker: 'Agent',
        text: 'I am sorry to hear that. Could you please share your registered telephone number or customer ID?',
        romanHindi: 'Yeh sunkar khed hua. Kya aap apna registered phone number ya customer ID share kar sakte hain?'
      },
      {
        id: 'pc-4',
        speaker: 'You',
        text: 'Sure, my registered mobile number is 98765-43210 under the name Shabbir.',
        romanHindi: 'Zaroor, mera registered mobile number 98765-43210 hai Shabbir ke naam par.',
        isUserTurn: true,
        suggestedUserHints: ['Sure, my number is...', 'Under the name Shabbir...', 'Let me confirm...']
      },
      {
        id: 'pc-5',
        speaker: 'Agent',
        text: 'Thank you, Shabbir. Hang on for just a moment while I pull up your account details on my system.',
        romanHindi: 'Shukriya Shabbir. Ek pal ke liye line par baniye jab tak main system par aapki details check karta hoon.'
      },
      {
        id: 'pc-6',
        speaker: 'You',
        text: 'No problem, please take your time.',
        romanHindi: 'Koi baat nahi, aaram se check kar lijiye.',
        isUserTurn: true,
        suggestedUserHints: ['No problem...', 'Take your time...', 'I am on the line...']
      },
      {
        id: 'pc-7',
        speaker: 'Agent',
        text: 'Hello? Sir, your line is breaking up a bit. Could you hear me okay?',
        romanHindi: 'Hello? Sir, aapki aawaz thodi kat rahi hai. Kya aapko meri aawaz saaf aa rahi hai?'
      },
      {
        id: 'pc-8',
        speaker: 'You',
        text: 'Yes, I can hear you clearly now. I moved closer to the balcony.',
        romanHindi: 'Haan, ab mujhe aapki aawaz bilkul saaf sunayi de rahi hai. Main balcony ke paas aa gaya hoon.',
        isUserTurn: true,
        suggestedUserHints: ['I can hear you clearly now...', 'Moved closer to balcony...', 'Is this better?']
      },
      {
        id: 'pc-9',
        speaker: 'Agent',
        text: 'Much better! I see there is an ongoing cable maintenance in your sector. It will be restored by 4:00 PM.',
        romanHindi: 'Kahin behtar! Main dekh raha hoon aapke sector mein cable maintenance chal rahi hai. Shaam 4:00 baje tak theek ho jayega.'
      },
      {
        id: 'pc-10',
        speaker: 'You',
        text: 'Understood. Will I receive a confirmation text message once the connection is back online?',
        romanHindi: 'Samajh gaya. Kya connection wapas aane par mujhe confirmation SMS milega?',
        isUserTurn: true,
        suggestedUserHints: ['Will I receive a text message?', 'Once it is back online?', 'Thank you for checking...']
      },
      {
        id: 'pc-11',
        speaker: 'Agent',
        text: 'Yes, our automated system will drop an SMS to your registered number with a ticket closure confirmation.',
        romanHindi: 'Haan, hamara automated system aapke registered number par ticket closure ka SMS bhej dega.'
      },
      {
        id: 'pc-12',
        speaker: 'You',
        text: 'Thank you for your prompt assistance, Kevin. I really appreciate it.',
        romanHindi: 'Turant madad ke liye shukriya, Kevin. Mujhe kafi achha laga.',
        isUserTurn: true,
        suggestedUserHints: ['Thank you for prompt assistance...', 'Really appreciate it...', 'Have a good day!']
      },
      {
        id: 'pc-13',
        speaker: 'Agent',
        text: 'You are most welcome, sir. Have a wonderful rest of your day!',
        romanHindi: 'Aapka bahut swagat hai, sir. Aapka din shubh ho!'
      }
    ],
    difficultWords: [
      { word: 'Assist', meaning: 'To help someone', romanHindi: 'Madad karna' },
      { word: 'Prompt', meaning: 'Done without delay / fast and responsive', romanHindi: 'Turant / Tezi se' },
      { word: 'Restored', meaning: 'Brought back to its normal state', romanHindi: 'Wapas theek ho jana' }
    ],
    naturalExpressions: [
      { phrase: 'Your line is breaking up', explanation: 'Informing someone that their voice is glitching due to poor cellular signal', romanHindi: 'Aapki aawaz kat-kat kar aa rahi hai' },
      { phrase: 'Pull up your account details', explanation: 'Searching and opening customer files on a computer screen', romanHindi: 'Aapki details computer screen par kholna' }
    ],
    practicePrompt: 'Imagine calling an airline or hotel customer service to check on your booking. Practice asking your question and confirming your confirmation number.'
  },

  // 10. ASKING FOR HELP
  {
    id: 'sp-asking-help',
    title: 'Asking for Help: Seeking Assistance from a Colleague',
    category: 'Asking for help',
    level: 'Medium',
    description: 'How to ask a coworker or classmate for help politely, without disrupting their workflow or feeling awkward.',
    dialogue: [
      {
        id: 'ah-1',
        speaker: 'Person A',
        text: 'Hey Priya, do you have a quick minute, or are you in the middle of something urgent?',
        romanHindi: 'Hey Priya, kya tumhare paas ek minute ka waqt hai, ya tum kisi zaroori kaam mein lagi hui ho?'
      },
      {
        id: 'ah-2',
        speaker: 'Person B',
        text: 'I just finished my email, so I have a couple of minutes. How can I help you?',
        romanHindi: 'Maine abhi apna email khatam kiya hai, isliye mere paas do minute hain. Main tumhari kya madad kar sakti hoon?',
        isUserTurn: true,
        suggestedUserHints: ['I have a couple of minutes...', 'Just finished my email...', 'How can I help you?']
      },
      {
        id: 'ah-3',
        speaker: 'Person A',
        text: 'Could you do me a favour and take a quick look at this spreadsheet formula? It keeps showing an error.',
        romanHindi: 'Kya tum meri ek madad karke is spreadsheet formula ko dekh sakti ho? Isme lagatar error aa raha hai.'
      },
      {
        id: 'ah-4',
        speaker: 'Person B',
        text: 'Sure, let me see! Ah, you forgot to lock the cell reference with a dollar sign here.',
        romanHindi: 'Zaroor, mujhe dekhne do! Ah, tum yahan cell reference ko dollar sign se lock karna bhool gaye the.',
        isUserTurn: true,
        suggestedUserHints: ['Let me see...', 'You forgot the cell reference...', 'Here is the fix...']
      },
      {
        id: 'ah-5',
        speaker: 'Person A',
        text: 'Oh, wow, you spotted that in two seconds! I was struggling with that for twenty minutes.',
        romanHindi: 'Arrey wah, tumne toh do second mein pakad liya! Main pichhle bees minute se isme pareshan ho raha tha.'
      },
      {
        id: 'ah-6',
        speaker: 'Person B',
        text: 'Don\'t worry at all; I made the exact same mistake when I first started using this software.',
        romanHindi: 'Bilkul chinta mat karo; jab maine pehli baar yeh software shuru kiya tha toh maine bhi bilkul yahi galti ki thi.',
        isUserTurn: true,
        suggestedUserHints: ['Don\'t worry at all...', 'I made the exact same mistake...', 'Happens to everyone...']
      },
      {
        id: 'ah-7',
        speaker: 'Person A',
        text: 'Do you mind if I ask where you learned all these handy shortcut tricks?',
        romanHindi: 'Kya tumhe bura toh nahi lagega agar main poochhun ki tumne yeh saare handy shortcut kahan se seekhe?'
      },
      {
        id: 'ah-8',
        speaker: 'Person B',
        text: 'I watched a free YouTube crash course on productivity hacks last month. I can share the link with you!',
        romanHindi: 'Maine pichhle mahine YouTube par productivity hacks ka free crash course dekha tha. Main link share kar sakti hoon!',
        isUserTurn: true,
        suggestedUserHints: ['Watched a YouTube crash course...', 'I can share the link...', 'Very easy to follow...']
      },
      {
        id: 'ah-9',
        speaker: 'Person A',
        text: 'That would be super helpful. Please send it over Slack whenever you get some free time.',
        romanHindi: 'Yeh toh bahut faydemand hoga. Jab bhi fursat mile Slack par bhej dena please.'
      },
      {
        id: 'ah-10',
        speaker: 'Person B',
        text: 'I will definitely send it across right after my 3:00 PM team call.',
        romanHindi: 'Main 3:00 baje wali team call ke turant baad bhej doongi.',
        isUserTurn: true,
        suggestedUserHints: ['I will send it across...', 'Right after my call...', 'Glad to help!']
      },
      {
        id: 'ah-11',
        speaker: 'Person A',
        text: 'Thanks a million, Priya. Let me know if you ever need any help with presentations.',
        romanHindi: 'Lakh-lakh shukriya, Priya. Kabhi presentation mein madad chahiye ho toh zaroor batana.'
      },
      {
        id: 'ah-12',
        speaker: 'Person B',
        text: 'I appreciate the offer! Good luck with finalizing the report.',
        romanHindi: 'Offer ke liye shukriya! Report poori karne ke liye best of luck.',
        isUserTurn: true,
        suggestedUserHints: ['I appreciate the offer...', 'Good luck with the report...', 'Talk to you soon!']
      },
      {
        id: 'ah-13',
        speaker: 'Person A',
        text: 'Thank you! Catch you later.',
        romanHindi: 'Shukriya! Baad mein milte hain.'
      }
    ],
    difficultWords: [
      { word: 'Struggling', meaning: 'Having a hard time trying to accomplish a difficult task', romanHindi: 'Jaddojahad karna / Pareshan hona' },
      { word: 'Spotted', meaning: 'Noticed or identified quickly', romanHindi: 'Fatafat pakad liya' },
      { word: 'Handy', meaning: 'Convenient and useful in daily life', romanHindi: 'Kafi kaam aane wala' }
    ],
    naturalExpressions: [
      { phrase: 'Do you have a quick minute?', explanation: 'Polite way to approach someone without interrupting their deep focus', romanHindi: 'Kya aapke paas ek chhota sa pal hai?' },
      { phrase: 'Thanks a million', explanation: 'Warm, enthusiastic expression of gratitude between friends or peers', romanHindi: 'Lakh-lakh shukriya' }
    ],
    practicePrompt: 'Politely ask a friend or colleague for help with moving furniture or reviewing an email in 3 natural sentences.'
  },

  // 11. EXPLAINING PROBLEMS
  {
    id: 'sp-explaining-problems',
    title: 'Explaining Problems: Reporting a Delay or Technical Glitch',
    category: 'Explaining problems',
    level: 'Medium',
    description: 'Explaining why an issue happened clearly, taking responsibility, and proposing a solution calmly.',
    dialogue: [
      {
        id: 'ep-1',
        speaker: 'Manager',
        text: 'Hi Shabbir. I noticed the monthly sales figures haven\'t been uploaded to the shared folder yet. Is there an issue?',
        romanHindi: 'Hi Shabbir. Maine dekha monthly sales figures abhi tak shared folder par upload nahi hue hain. Kya koi pareshani hai?'
      },
      {
        id: 'ep-2',
        speaker: 'You',
        text: 'Hi sir. Yes, I apologise for the delay. We ran into an unexpected database synchronization error this morning.',
        romanHindi: 'Namaste sir. Haan, deri ke liye maafi chahta hoon. Aaj subah database synchronization mein ek anpekkshit error aa gaya tha.',
        isUserTurn: true,
        suggestedUserHints: ['Apologise for the delay...', 'Ran into a database error...', 'Working to resolve it...']
      },
      {
        id: 'ep-3',
        speaker: 'Manager',
        text: 'I see. Did any raw customer data get corrupted or lost?',
        romanHindi: 'Achha. Kya koi zaroori customer data kharab hua ya gayab hua?'
      },
      {
        id: 'ep-4',
        speaker: 'You',
        text: 'No, all the raw data is completely safe. The issue is only with the automated calculation script.',
        romanHindi: 'Nahi, saara raw data bilkul surakshit hai. Samasya sirf automated calculation script mein aayi thi.',
        isUserTurn: true,
        suggestedUserHints: ['All raw data is safe...', 'Only the calculation script failed...', 'We have backups...']
      },
      {
        id: 'ep-5',
        speaker: 'Manager',
        text: 'Good to know. What steps are being taken to sort it out?',
        romanHindi: 'Yeh sunkar achha laga. Isko theek karne ke liye kya kadam uthaye ja rahe hain?'
      },
      {
        id: 'ep-6',
        speaker: 'You',
        text: 'Our backend engineer is currently restarting the server instance and manually verifying the numbers.',
        romanHindi: 'Hamara backend engineer abhi server restart kar raha hai aur manually numbers verify kar raha hai.',
        isUserTurn: true,
        suggestedUserHints: ['Engineer is restarting server...', 'Manually verifying numbers...', 'Fixing the glitch...']
      },
      {
        id: 'ep-7',
        speaker: 'Manager',
        text: 'How much more time do you realistically need before the report is ready for leadership?',
        romanHindi: 'Leadership ko report bhejne ke liye sach bolun toh tumhe kitna aur waqt chahiye?'
      },
      {
        id: 'ep-8',
        speaker: 'You',
        text: 'We realistically need another 45 minutes. I will personally upload the finalized PDF by 2:30 PM.',
        romanHindi: 'Humein lagbhag 45 minute aur chahiye. Main khud 2:30 baje tak finalized PDF upload kar doonga.',
        isUserTurn: true,
        suggestedUserHints: ['Realistically need 45 minutes...', 'Will upload by 2:30 PM...', 'I will keep you updated...']
      },
      {
        id: 'ep-9',
        speaker: 'Manager',
        text: '2:30 PM works. Please send me a quick ping on Slack as soon as it is posted.',
        romanHindi: '2:30 baje chalega. Jaise hi upload ho jaye mujhe Slack par message kar dena please.'
      },
      {
        id: 'ep-10',
        speaker: 'You',
        text: 'I will definitely ping you the moment it is uploaded, sir.',
        romanHindi: 'Jaise hi upload hoga main aapko turant message kar doonga, sir.',
        isUserTurn: true,
        suggestedUserHints: ['I will definitely ping you...', 'The moment it is uploaded...', 'Thank you for understanding...']
      },
      {
        id: 'ep-11',
        speaker: 'Manager',
        text: 'Thank you for taking ownership and explaining the root cause clearly.',
        romanHindi: 'Zimmewari lene aur wajah saaf-saaf samjhane ke liye shukriya.'
      },
      {
        id: 'ep-12',
        speaker: 'You',
        text: 'Thank you for your understanding and patience, sir.',
        romanHindi: 'Aapke samajhne aur sabr ke liye bahut shukriya, sir.',
        isUserTurn: true,
        suggestedUserHints: ['Thank you for your understanding...', 'Appreciate your patience...', 'Right on it!']
      },
      {
        id: 'ep-13',
        speaker: 'Manager',
        text: 'Keep up the good work. Let\'s get this wrapped up.',
        romanHindi: 'Achha kaam jaari rakho. Chalo ise jaldi khatam karte hain.'
      }
    ],
    difficultWords: [
      { word: 'Synchronization', meaning: 'Operating or updating at the same rate and time', romanHindi: 'Ek sath milkar chalna' },
      { word: 'Corrupted', meaning: 'Damaged or altered so it no longer works', romanHindi: 'Kharab ho gaya' },
      { word: 'Taking ownership', meaning: 'Accepting full responsibility for solving a problem', romanHindi: 'Khud aage badhkar zimmewari lena' }
    ],
    naturalExpressions: [
      { phrase: 'Ran into an unexpected error', explanation: 'Encountered a sudden software or technical obstacle', romanHindi: 'Achanak ek pareshani aa gayi' },
      { phrase: 'Drop a quick ping', explanation: 'Sending a brief instant message to alert someone', romanHindi: 'Chhota sa message bhej kar alert karna' }
    ],
    practicePrompt: 'Explain a problem to a client or teacher: mention that a task will be 30 minutes late due to a power outage, and promise an exact delivery time.'
  },

  // 12. AGREEING AND DISAGREEING
  {
    id: 'sp-agree-disagree',
    title: 'Agreeing and Disagreeing: Constructive Debate in Team Meetings',
    category: 'Agreeing and disagreeing',
    level: 'Medium',
    description: 'Expressing disagreement diplomatically using phrases like "I see your point, but...", "Not necessarily", and finding common ground.',
    dialogue: [
      {
        id: 'ad-1',
        speaker: 'Person A',
        text: 'I think we should spend our entire quarterly marketing budget on TV advertisements instead of digital social ads.',
        romanHindi: 'Mujhe lagta hai humein apna poora quarterly marketing budget digital ads ke bajaay TV ads par lagana chahiye.'
      },
      {
        id: 'ad-2',
        speaker: 'Person B',
        text: 'I see where you are coming from, but isn\'t digital advertising much easier to track and measure?',
        romanHindi: 'Main samajh sakta hoon aap kya keh rahe hain, lekin kya digital advertising ko track aur measure karna kahin zyada aasan nahi hai?',
        isUserTurn: true,
        suggestedUserHints: ['I see your point, but...', 'Digital ads are measurable...', 'TV ads are expensive...']
      },
      {
        id: 'ad-3',
        speaker: 'Person A',
        text: 'TV has massive brand reach. Everyone watches evening television broadcasts.',
        romanHindi: 'TV ki brand reach bahut badi hoti hai. Shaam ko har koi TV broadcast dekhta hai.'
      },
      {
        id: 'ad-4',
        speaker: 'Person B',
        text: 'That is true for older audiences; however, our target customers are between 20 and 35 years old.',
        romanHindi: 'Bade buzurgon ke liye yeh baat sahi hai; lekin hamare target customers 20 se 35 saal ke beech ke hain.',
        isUserTurn: true,
        suggestedUserHints: ['That is true for some audiences...', 'However our target is 20-35...', 'They use Instagram and YouTube...']
      },
      {
        id: 'ad-5',
        speaker: 'Person A',
        text: 'Are you suggesting that younger people don\'t watch television at all?',
        romanHindi: 'Kya aapka matlab yeh hai ki naujawan bilkul TV nahi dekhte?'
      },
      {
        id: 'ad-6',
        speaker: 'Person B',
        text: 'Not necessarily, but most of them consume short video content on their mobile smartphones instead.',
        romanHindi: 'Zaroori nahi hai, lekin unme se zyadatar log apne smartphones par short video content dekhte hain.',
        isUserTurn: true,
        suggestedUserHints: ['Not necessarily...', 'Most watch on smartphones...', 'Engagement is much higher on mobile...']
      },
      {
        id: 'ad-7',
        speaker: 'Person A',
        text: 'Fair enough. But wouldn\'t doing both build stronger credibility?',
        romanHindi: 'Sahi baat hai. Lekin kya dono karne se credibility aur vishwas nahi badhega?'
      },
      {
        id: 'ad-8',
        speaker: 'Person B',
        text: 'I completely agree with that! If we split the budget 70% digital and 30% TV, we get the best of both worlds.',
        romanHindi: 'Main is baat se poori tarah sahmat hoon! Agar hum budget ko 70% digital aur 30% TV mein baant lein toh dono ka fayda milega.',
        isUserTurn: true,
        suggestedUserHints: ['I completely agree with that...', 'Split the budget 70-30...', 'Best of both worlds...']
      },
      {
        id: 'ad-9',
        speaker: 'Person A',
        text: 'That is actually a brilliant compromise. That way we don\'t gamble all our money in one place.',
        romanHindi: 'Asal mein yeh bahut shaandar samjhauta hai. Is tarah hum apna saara paisa ek hi jagah daav par nahi lagayenge.'
      },
      {
        id: 'ad-10',
        speaker: 'Person B',
        text: 'Exactly! Let\'s draft a budget proposal with this 70-30 split for the manager to review.',
        romanHindi: 'Wahi toh! Chaliye manager ke review ke liye is 70-30 split ke sath ek budget proposal taiyaar karte hain.',
        isUserTurn: true,
        suggestedUserHints: ['Exactly...', 'Let us draft a proposal...', 'Manager will appreciate it...']
      },
      {
        id: 'ad-11',
        speaker: 'Person A',
        text: 'I will prepare the slides for the TV part if you can assemble the digital analytics.',
        romanHindi: 'Main TV part ke slides taiyaar kar deta hoon agar tum digital analytics jama kar sako.'
      },
      {
        id: 'ad-12',
        speaker: 'Person B',
        text: 'Deal! I will have the digital metrics ready by 4:00 PM today.',
        romanHindi: 'Pakka! Main aaj shaam 4:00 baje tak digital metrics taiyaar rakhunga.',
        isUserTurn: true,
        suggestedUserHints: ['Deal...', 'I will have metrics ready by 4 PM...', 'Great teamwork!']
      },
      {
        id: 'ad-13',
        speaker: 'Person A',
        text: 'Sounds great. Thanks for having a constructive debate!',
        romanHindi: 'Badhiya. Ek faayedemand aur suljhi hui behas ke liye shukriya!'
      }
    ],
    difficultWords: [
      { word: 'Compromise', meaning: 'An agreement where both sides give up a little to reach a middle ground', romanHindi: 'Aapas ka samjhauta' },
      { word: 'Credibility', meaning: 'The quality of being trusted and believed in', romanHindi: 'Vishwasniyata / Bharosa' },
      { word: 'Assemble', meaning: 'Gather together in one place', romanHindi: 'Ek jagah ikattha karna' }
    ],
    naturalExpressions: [
      { phrase: 'I see where you are coming from, but...', explanation: 'Courteous way to validate someone\'s thought before presenting an opposite argument', romanHindi: 'Main samajhta hoon aap kya keh rahe hain, lekin...' },
      { phrase: 'Best of both worlds', explanation: 'Enjoying the advantages of two different options simultaneously', romanHindi: 'Dono taraf ka behtareen fayda milna' }
    ],
    practicePrompt: 'Practice disagreeing politely with a friend who says "AI will replace all teachers within two years". Share your perspective in 3 sentences.'
  },

  // 13. EXPRESSING FEELINGS
  {
    id: 'sp-expressing-feelings',
    title: 'Expressing Feelings: Managing Stress & Celebrating Wins',
    category: 'Expressing feelings',
    level: 'Medium',
    description: 'Talking honestly about feeling overwhelmed, celebrating accomplishments, and asking friends for emotional encouragement.',
    dialogue: [
      {
        id: 'ef-1',
        speaker: 'Person A',
        text: 'You look a bit quiet today, Shabbir. Is everything going okay with you?',
        romanHindi: 'Tum aaj thode shaant lag rahe ho Shabbir. Kya sab theek chal raha hai?'
      },
      {
        id: 'ef-2',
        speaker: 'Person B',
        text: 'To be honest, I have been feeling a little overwhelmed with all the upcoming exam deadlines.',
        romanHindi: 'Sach bolun toh, aane wale exam ki deadlines ki wajah se thoda dabav mehsoos ho raha hai.',
        isUserTurn: true,
        suggestedUserHints: ['To be honest, I feel overwhelmed...', 'Lots of deadlines...', 'Hard to keep up...']
      },
      {
        id: 'ef-3',
        speaker: 'Person A',
        text: 'I completely understand. It is natural to feel anxious when so many deadlines arrive all at once.',
        romanHindi: 'Main bilkul samajh sakta hoon. Jab ek sath bahut saari deadlines aati hain toh ghabrahat hona aam baat hai.'
      },
      {
        id: 'ef-4',
        speaker: 'Person B',
        text: 'Yes, exactly. I kept worrying that I wouldn\'t be able to finish all the chapters in time.',
        romanHindi: 'Haan, wahi toh. Mujhe lagatar tension ho rahi thi ki main samay par saare chapters khatam nahi kar paunga.',
        isUserTurn: true,
        suggestedUserHints: ['Kept worrying about chapters...', 'Afraid of running out of time...', 'Mind feels cluttered...']
      },
      {
        id: 'ef-5',
        speaker: 'Person A',
        text: 'What helps me when I feel overwhelmed is breaking tasks down into tiny 20-minute chunks.',
        romanHindi: 'Jab mujhe dabav lagta hai toh main kaamo ko 20-20 minute ke chhote hisson mein baant leta hoon, isse kafi madad milti hai.'
      },
      {
        id: 'ef-6',
        speaker: 'Person B',
        text: 'That makes total sense. Focusing on one single step reduces the mental pressure.',
        romanHindi: 'Yeh baat bilkul sahi hai. Ek waqt par ek kadam par dhyan dene se dimaag ka pressure kam ho jata hai.',
        isUserTurn: true,
        suggestedUserHints: ['Makes total sense...', 'Reduces mental pressure...', 'Focusing on one step...']
      },
      {
        id: 'ef-7',
        speaker: 'Person A',
        text: 'Have you taken any short breaks to breathe fresh air or listen to music today?',
        romanHindi: 'Kya tumne aaj taaza hawa lene ya gaane sunne ke liye koi chhota break liya?'
      },
      {
        id: 'ef-8',
        speaker: 'Person B',
        text: 'Not yet. I think I will step outside for a 15-minute walk right now to clear my head.',
        romanHindi: 'Abhi tak toh nahi. Mujhe lagta hai main dimaag halka karne ke liye abhi 15 minute ki walk par jata hoon.',
        isUserTurn: true,
        suggestedUserHints: ['Not yet...', 'Step outside for a walk...', 'Clear my head...']
      },
      {
        id: 'ef-9',
        speaker: 'Person A',
        text: 'Please do! A quick walk works wonders. And remember how well you handled last semester\'s finals.',
        romanHindi: 'Zaroor jao! Chhoti si walk kamaal ka asar karti hai. Aur yaad karo pichhle semester ke finals tumne kitne achhe se sambhale the.'
      },
      {
        id: 'ef-10',
        speaker: 'Person B',
        text: 'Thank you for reminding me of that. I feel much more encouraged and motivated now.',
        romanHindi: 'Yeh yaad dilane ke liye shukriya. Ab mujhe kafi himmat aur prerana mehsoos ho rahi hai.',
        isUserTurn: true,
        suggestedUserHints: ['Thank you for reminding me...', 'Feel much more encouraged...', 'Ready to tackle it...']
      },
      {
        id: 'ef-11',
        speaker: 'Person A',
        text: 'Anytime! We are in this together. Once exams are over, we will celebrate with a grand dinner.',
        romanHindi: 'Kabhi bhi! Hum sab sath hain. Ek baar exams khatam ho jayein toh shandar dinner ke sath celebrate karenge.'
      },
      {
        id: 'ef-12',
        speaker: 'Person B',
        text: 'I am definitely looking forward to that celebration! Thank you for listening to me.',
        romanHindi: 'Main us celebration ka besabri se intezar karunga! Meri baat sunne ke liye bahut shukriya.',
        isUserTurn: true,
        suggestedUserHints: ['Looking forward to celebrating...', 'Thank you for listening...', 'You are a great friend!']
      },
      {
        id: 'ef-13',
        speaker: 'Person A',
        text: 'Take care of yourself, and enjoy your fresh air walk!',
        romanHindi: 'Apna khayal rakhna, aur taaza hawa ki walk enjoy karo!'
      }
    ],
    difficultWords: [
      { word: 'Overwhelmed', meaning: 'Feeling completely swamped by too many emotions or duties', romanHindi: 'Bohat zyada dabav mehsoos karna' },
      { word: 'Anxious', meaning: 'Worried, nervous, or uneasy about something with an uncertain outcome', romanHindi: 'Ghabraya hua / Chintit' },
      { word: 'Encouraged', meaning: 'Filled with renewed confidence and optimism', romanHindi: 'Hosla badhna / Himmat aana' }
    ],
    naturalExpressions: [
      { phrase: 'To clear my head', explanation: 'Taking a mental pause to relieve stress and think clearly again', romanHindi: 'Dimaag halka karna' },
      { phrase: 'Works wonders', explanation: 'Produces a surprisingly powerful, positive effect', romanHindi: 'Kamaal ka asar dikhana' }
    ],
    practicePrompt: 'Describe how you felt after completing a difficult task or clearing an interview in 3 sentences: mention your initial worry and ultimate relief.'
  },

  // 14. TALKING CONFIDENTLY IN MEETINGS
  {
    id: 'sp-confident-meetings',
    title: 'Talking Confidently in Meetings: Presenting Ideas & Clarifying Action Items',
    category: 'Talking confidently in meetings',
    level: 'Medium',
    description: 'How to introduce your project update, contribute an idea without interrupting rudely, and confirm deliverables.',
    dialogue: [
      {
        id: 'cm-1',
        speaker: 'Meeting Lead',
        text: 'Good morning everyone. Let\'s get started with our weekly project status meeting. Shabbir, could you kick us off with the marketing update?',
        romanHindi: 'Shubh prabhat sabhi ko. Chaliye hamari weekly status meeting shuru karte hain. Shabbir, kya aap marketing update se shuruat kar sakte hain?'
      },
      {
        id: 'cm-2',
        speaker: 'You',
        text: 'Good morning everyone. Sure, I would be happy to share our team\'s progress for this week.',
        romanHindi: 'Shubh prabhat sabhi ko. Zaroor, is hafte ki hamari team ki progress share karke mujhe khushi hogi.',
        isUserTurn: true,
        suggestedUserHints: ['Good morning everyone...', 'Happy to share our progress...', 'Let me bring up the numbers...']
      },
      {
        id: 'cm-3',
        speaker: 'Meeting Lead',
        text: 'The floor is yours. Go right ahead.',
        romanHindi: 'Stage aapka hai. Shuru kijiye.'
      },
      {
        id: 'cm-4',
        speaker: 'You',
        text: 'Over the past seven days, we launched our new newsletter campaign, and our open rate reached 34%, which exceeds our initial target.',
        romanHindi: 'Pichhle saat dino mein, humne naya newsletter campaign launch kiya, aur open rate 34% raha, jo hamare target se zyada hai.',
        isUserTurn: true,
        suggestedUserHints: ['Over the past seven days...', 'Open rate reached 34%...', 'Exceeds our initial target...']
      },
      {
        id: 'cm-5',
        speaker: 'Colleague',
        text: 'That is impressive! Did you notice which subject lines performed best?',
        romanHindi: 'Yeh toh kafi prabhavshali hai! Kya aapne dekha kaunse subject lines ne sabse achha perform kiya?'
      },
      {
        id: 'cm-6',
        speaker: 'You',
        text: 'Actually, yes. Subject lines framed as practical questions had a 40% higher click-through rate than regular announcements.',
        romanHindi: 'Asal mein haan. Sawaal ke roop mein likhe gaye subject lines mein regular announcements ke muqable 40% zyada clicks mile.',
        isUserTurn: true,
        suggestedUserHints: ['Actually, yes...', 'Framed as practical questions...', 'Had a 40% higher click rate...']
      },
      {
        id: 'cm-7',
        speaker: 'Meeting Lead',
        text: 'That is valuable customer insight. What do you recommend we focus on for next week?',
        romanHindi: 'Yeh kafi kaam ka customer insight hai. Agle hafte ke liye aap kya recommend karte hain?'
      },
      {
        id: 'cm-8',
        speaker: 'You',
        text: 'Probably, we should double down on these educational question formats for our upcoming product feature launch.',
        romanHindi: 'Shaayad humein aane wale product feature launch ke liye bhi aise educational formats par zyada focus karna chahiye.',
        isUserTurn: true,
        suggestedUserHints: ['Probably we should double down...', 'On educational question formats...', 'For the feature launch...']
      },
      {
        id: 'cm-9',
        speaker: 'Meeting Lead',
        text: 'I think that is a very pragmatic suggestion. Are there any bottlenecks holding your team back right now?',
        romanHindi: 'Mujhe lagta hai yeh kafi vyavaharik sujhav hai. Kya koi aisi rukawat hai jo aapki team ko rok rahi hai?'
      },
      {
        id: 'cm-10',
        speaker: 'You',
        text: 'We just need final sign-off on the graphics from the design team by Thursday 2:00 PM.',
        romanHindi: 'Humein bas guruvaar dopahar 2:00 baje tak design team se graphics par aakhiri approval chahiye.',
        isUserTurn: true,
        suggestedUserHints: ['We just need sign-off...', 'From the design team...', 'By Thursday 2:00 PM...']
      },
      {
        id: 'cm-11',
        speaker: 'Design Lead',
        text: 'I can confirm our team will have all graphic assets finalized and delivered before noon on Thursday.',
        romanHindi: 'Main confirm karta hoon ki hamari team guruvaar dopahar se pehle saare graphics taiyaar karke de degi.'
      },
      {
        id: 'cm-12',
        speaker: 'You',
        text: 'Fantastic! That gives us plenty of buffer time to schedule the launch smoothly.',
        romanHindi: 'Shandar! Isse humein launch smoothly schedule karne ke liye kaafi samay mil jayega.',
        isUserTurn: true,
        suggestedUserHints: ['Fantastic...', 'Gives plenty of buffer time...', 'To schedule smoothly...']
      },
      {
        id: 'cm-13',
        speaker: 'Meeting Lead',
        text: 'Great collaboration everyone. Let\'s wrap up and get back to work. Thank you Shabbir for the clear presentation.',
        romanHindi: 'Sabhi ka kafi achha coordination raha. Chaliye meeting samapt karte hain aur kaam par laut-te hain. Clear presentation ke liye shukriya Shabbir.'
      },
      {
        id: 'cm-14',
        speaker: 'You',
        text: 'Thank you everyone for your time and feedback. Have a productive week ahead!',
        romanHindi: 'Aap sabhi ke waqt aur feedback ke liye shukriya. Aage ka hafta kafi faydemand rahe!',
        isUserTurn: true,
        suggestedUserHints: ['Thank you everyone...', 'Appreciate your time...', 'Have a productive week ahead!']
      }
    ],
    difficultWords: [
      { word: 'Double down', meaning: 'To strengthen your commitment to a successful strategy', romanHindi: 'Kisi safal tareeke par aur zyada zor lagana' },
      { word: 'Bottleneck', meaning: 'A point of congestion or delay in a workflow', romanHindi: 'Kaam mein rukawat ya rukna' },
      { word: 'Buffer time', meaning: 'Extra time kept aside in case of unforeseen delays', romanHindi: 'Aapda ke liye rakha gaya extra waqt' }
    ],
    naturalExpressions: [
      { phrase: 'The floor is yours', explanation: 'Formal invitation giving someone permission to speak to the audience', romanHindi: 'Ab bolne ki baari aapki hai' },
      { phrase: 'Kick us off', explanation: 'Casual business idiom meaning to start or begin the meeting', romanHindi: 'Meeting ki shuruat karna' }
    ],
    practicePrompt: 'Imagine giving a 4-sentence update in a morning team huddle: state what you accomplished yesterday, what you will do today, and any help you need.'
  }
];
