import { SpeakingScenario } from '../types';

export const speakingScenariosList: SpeakingScenario[] = [
  {
    id: 'sp-daily-catchup',
    title: 'Talking With Friends: "How Was Your Day?"',
    category: 'Talking with Friends',
    level: 'Medium',
    description: 'A friendly, natural conversation between two friends catching up in the evening after work or college.',
    dialogue: [
      {
        id: 'd1',
        speaker: 'Person A',
        text: 'Hey Rohit! How was your day today?',
        romanHindi: 'Hey Rohit! Aaj ka din kaisa raha tumhara?'
      },
      {
        id: 'd2',
        speaker: 'Person B',
        text: 'It was pretty good! I had a busy day at work, but I managed to finish everything on time.',
        romanHindi: 'Kafi achha tha! Kaam par thoda busy din tha, lekin maine time par sab nipat liya.',
        isUserTurn: true,
        suggestedUserHints: ['It was pretty good...', 'I was busy at work...', 'I finished on time...']
      },
      {
        id: 'd3',
        speaker: 'Person A',
        text: 'Oh really? What kept you so busy?',
        romanHindi: 'Acha sach mein? Kis cheez ne tumhe itna busy rakha?'
      },
      {
        id: 'd4',
        speaker: 'Person B',
        text: 'We had an important client review meeting in the afternoon, so my team was preparing the presentation.',
        romanHindi: 'Dopahar mein hamari ek zaroori client review meeting thi, isliye meri team presentation taiyaar kar rahi thi.',
        isUserTurn: true,
        suggestedUserHints: ['We had a client meeting...', 'My team was preparing...', 'It took some time...']
      },
      {
        id: 'd5',
        speaker: 'Person A',
        text: 'That sounds intense. Did the presentation go smoothly?',
        romanHindi: 'Yeh toh kaafi serious lag raha hai. Kya presentation achhe se ho gayi?'
      },
      {
        id: 'd6',
        speaker: 'Person B',
        text: 'Yes, actually! The client was very satisfied with our progress and approved the next phase.',
        romanHindi: 'Haan, asal mein! Client hamari progress se kafi khush tha aur agla phase approve kar diya.',
        isUserTurn: true,
        suggestedUserHints: ['Yes, actually...', 'The client was satisfied...', 'They approved the next phase...']
      },
      {
        id: 'd7',
        speaker: 'Person A',
        text: 'That is awesome news! You must be feeling relieved now.',
        romanHindi: 'Yeh toh kamaal ki khabar hai! Ab toh tum kaafi sukoon mehsoos kar rahe hoge.'
      },
      {
        id: 'd8',
        speaker: 'Person B',
        text: 'Definitely. Honestly, I was quite stressed about it yesterday evening.',
        romanHindi: 'Bilkul. Sach kahoon toh, kal shaam ko main is baare mein kafi tension mein tha.',
        isUserTurn: true,
        suggestedUserHints: ['Definitely...', 'Honestly, I was stressed...', 'Now I can relax...']
      },
      {
        id: 'd9',
        speaker: 'Person A',
        text: 'I can understand. Are you planning to relax tonight or do you have other chores to run?',
        romanHindi: 'Main samajh sakta hoon. Kya aaj raat aaram karne ka plan hai ya ghar ke baaki kaam karne hain?'
      },
      {
        id: 'd10',
        speaker: 'Person B',
        text: 'I think I will just take a hot shower, order some light food, and watch a movie on Netflix.',
        romanHindi: 'Mujhe lagta hai main bas garam paani se nahaunga, halka-phulka khana mangaunga aur Netflix par movie dekhunga.',
        isUserTurn: true,
        suggestedUserHints: ['I will take a shower...', 'Order some food...', 'Watch a movie...']
      },
      {
        id: 'd11',
        speaker: 'Person A',
        text: 'Sounds like the perfect way to unwind. What movie are you thinking of watching?',
        romanHindi: 'Thakan utarne ka yeh sabse badhiya tareeka lagta hai. Kaunsi movie dekhne ka soch rahe ho?'
      },
      {
        id: 'd12',
        speaker: 'Person B',
        text: 'Probably that new mystery thriller everyone has been recommending lately. Have you seen it?',
        romanHindi: 'Shaayad woh nayi mystery thriller jiske baare mein sab log aaj kal bol rahe hain. Kya tumne dekhi hai?',
        isUserTurn: true,
        suggestedUserHints: ['Probably the new thriller...', 'People recommended it...', 'Have you seen it?']
      },
      {
        id: 'd13',
        speaker: 'Person A',
        text: 'Not yet, but I heard the climax is mind-blowing! Let me know if it\'s good.',
        romanHindi: 'Abhi tak toh nahi, par maine suna hai climax dhamakedaar hai! Mujhe batana agar achhi lagi toh.'
      },
      {
        id: 'd14',
        speaker: 'Person B',
        text: 'I will definitely let you know tomorrow morning. Take care and have a wonderful evening!',
        romanHindi: 'Main kal subah pakka bataunga. Apna khayal rakhna aur shaam achhi guzre!',
        isUserTurn: true,
        suggestedUserHints: ['I will definitely let you know...', 'Take care...', 'Talk to you tomorrow!']
      }
    ],
    difficultWords: [
      { word: 'Pretty good', meaning: 'Quite good / enjoyable', romanHindi: 'Kafi achha' },
      { word: 'What kept you busy?', meaning: 'What took up all your time?', romanHindi: 'Kis cheez ne tumhe busy rakha?' },
      { word: 'Relieved', meaning: 'Feeling happy because a worry has gone', romanHindi: 'Sukoon mehsoos karna / Chinta door hona' },
      { word: 'Unwind', meaning: 'To relax after a period of work or tension', romanHindi: 'Thakan mitana aur aaram karna' }
    ],
    naturalExpressions: [
      { phrase: 'What kept you busy?', explanation: 'Natural way of asking what tasks someone was occupied with', romanHindi: 'Aap kis kaam mein lage hue the?' },
      { phrase: 'Sounds like the perfect way to unwind', explanation: 'Complimenting someone\'s evening relaxation plan', romanHindi: 'Aaram karne ka kafi sahi plan lag raha hai' },
      { phrase: 'I will definitely let you know', explanation: 'Promising to update someone afterwards', romanHindi: 'Main pakka bataunga' }
    ],
    practicePrompt: 'Reply to your friend who asks: "Hey, what did you do today after coming back from office or college?" Speak for 45 seconds.'
  },
  {
    id: 'sp-daily-routine',
    title: 'Daily Routine & Morning Habits',
    category: 'Talking About Daily Routine',
    level: 'Medium',
    description: 'Talk naturally about how you spend your mornings, commute to work or college, and manage your daily hours.',
    dialogue: [
      {
        id: 'r1',
        speaker: 'Person A',
        text: 'What time do you usually wake up on weekdays?',
        romanHindi: 'Tum aamtaur par weekdays par kitne baje uthte ho?'
      },
      {
        id: 'r2',
        speaker: 'Person B',
        text: 'I usually set my alarm for 6:30 AM, but I realistically get out of bed around 6:45.',
        romanHindi: 'Main aamtaur par 6:30 ka alarm lagata hoon, par sach bolun toh 6:45 ke aas-paas bistar chhodta hoon.',
        isUserTurn: true,
        suggestedUserHints: ['I wake up around 6:30 AM...', 'I get out of bed at 6:45...', 'I drink water first...']
      },
      {
        id: 'r3',
        speaker: 'Person A',
        text: 'That\'s pretty early! What is the first thing you do in the morning?',
        romanHindi: 'Yeh toh kafi jaldi hai! Subah uthte hi sabse pehla kaam kya karte ho?'
      },
      {
        id: 'r4',
        speaker: 'Person B',
        text: 'The first thing I do is drink a large glass of warm water, and then I go for a short 20-minute walk.',
        romanHindi: 'Sabse pehle main ek bada glass gunguna paani peeta hoon, aur phir 20 minute ke liye walk par jata hoon.',
        isUserTurn: true,
        suggestedUserHints: ['First I drink water...', 'Then I go for a walk...', 'It freshens me up...']
      },
      {
        id: 'r5',
        speaker: 'Person A',
        text: 'Going for a morning walk is a great habit. Do you cook your own breakfast too?',
        romanHindi: 'Subah ki walk bahut achhi aadat hai. Kya tum apna nashta bhi khud banate ho?'
      },
      {
        id: 'r6',
        speaker: 'Person B',
        text: 'Yes, most days I make something simple like eggs with toast or a bowl of oats with fruits.',
        romanHindi: 'Haan, zyadatar din main kuch aasan banata hoon jaise eggs aur toast ya oats aur fruits.',
        isUserTurn: true,
        suggestedUserHints: ['Yes, I make eggs with toast...', 'Sometimes I have oats...', 'It takes 10 minutes...']
      },
      {
        id: 'r7',
        speaker: 'Person A',
        text: 'Nice and healthy. How long does it take you to commute to your office or college?',
        romanHindi: 'Badhiya aur healthy. Tumhe office ya college pahunchne mein kitna time lagta hai?'
      },
      {
        id: 'r8',
        speaker: 'Person B',
        text: 'It takes roughly 45 minutes by metro. The trains get crowded, but it is faster than driving through traffic.',
        romanHindi: 'Metro se lagbhag 45 minute lagte hain. Train mein bheed hoti hai, par traffic mein gaadi chalane se tez hai.',
        isUserTurn: true,
        suggestedUserHints: ['It takes 45 minutes by metro...', 'Trains are crowded...', 'It beats the traffic...']
      },
      {
        id: 'r9',
        speaker: 'Person A',
        text: 'What do you do to pass the time during your daily commute?',
        romanHindi: 'Raste mein time pass karne ke liye kya karte ho?'
      },
      {
        id: 'r10',
        speaker: 'Person B',
        text: 'I usually put on my earphones and listen to an English podcast or practice flashcards on English Journey!',
        romanHindi: 'Main aamtaur par earphones lagakar English podcast sunta hoon ya English Journey par flashcards practice karta hoon!',
        isUserTurn: true,
        suggestedUserHints: ['I put on earphones...', 'Listen to a podcast...', 'Practice vocabulary...']
      },
      {
        id: 'r11',
        speaker: 'Person A',
        text: 'That is such a productive way to use your travel time! What time do you wrap up your day?',
        romanHindi: 'Travel time ka use karne ka yeh kitna shaandaar tareeka hai! Tumhara din kitne baje khatam hota hai?'
      },
      {
        id: 'r12',
        speaker: 'Person B',
        text: 'I usually leave around 6:00 PM, reach home by 7:00, and spend quality time with my family.',
        romanHindi: 'Main aamtaur par 6:00 baje nikalta hoon, 7:00 tak ghar pahunchta hoon, aur family ke saath time bitata hoon.',
        isUserTurn: true,
        suggestedUserHints: ['I leave around 6 PM...', 'Reach home by 7...', 'Spend time with family...']
      }
    ],
    difficultWords: [
      { word: 'Commute', meaning: 'Travel regularly between home and work', romanHindi: 'Ghar se kaam par aana-jana' },
      { word: 'Productive', meaning: 'Producing good and effective results', romanHindi: 'Faydemand / Kaam ka' },
      { word: 'Pass the time', meaning: 'To do something while waiting or traveling', romanHindi: 'Waqt guzaarna' }
    ],
    naturalExpressions: [
      { phrase: 'I realistically get out of bed around...', explanation: 'Admitting the actual time you get up, not just your ideal time', romanHindi: 'Sach bolun toh main itne baje uthta hoon' },
      { phrase: 'It beats driving through traffic', explanation: 'Meaning one transport option is far better than sitting in traffic jams', romanHindi: 'Traffic mein phasne se yeh kahin behtar hai' }
    ],
    practicePrompt: 'Describe your own morning routine in 4 sentences: wake-up time, breakfast, and how you travel to work or college.'
  },
  {
    id: 'sp-shopping-cafe',
    title: 'Shopping & Ordering at a Restaurant',
    category: 'Shopping & Ordering Food',
    level: 'Medium',
    description: 'Practical English for ordering food at a cafe or restaurant, asking for modifications, and paying the bill.',
    dialogue: [
      {
        id: 's1',
        speaker: 'Server',
        text: 'Good afternoon! Welcome to Cafe Bistro. Table for two?',
        romanHindi: 'Namaste! Cafe Bistro mein swagat hai. Kya do logon ke liye table chahiye?'
      },
      {
        id: 's2',
        speaker: 'You',
        text: 'Yes please, a table for two. Could we get a table by the window if possible?',
        romanHindi: 'Haan please, do logon ke liye table. Kya khidki ke paas wali table mil sakti hai agar possible ho?',
        isUserTurn: true,
        suggestedUserHints: ['Yes please...', 'A table for two...', 'By the window please...']
      },
      {
        id: 's3',
        speaker: 'Server',
        text: 'Certainly, right this way! Here are your menus. Can I start you off with something to drink?',
        romanHindi: 'Bilkul, is taraf aaiye! Yeh rahe aapke menu. Kya peene ke liye kuch lau?'
      },
      {
        id: 's4',
        speaker: 'You',
        text: 'Could you bring us a bottle of regular water first, and two iced coffees with less ice?',
        romanHindi: 'Kya aap pehle normal paani ki bottle laa sakte hain, aur do iced coffee kam barf ke saath?',
        isUserTurn: true,
        suggestedUserHints: ['A bottle of water first...', 'Two iced coffees...', 'With less ice please...']
      },
      {
        id: 's5',
        speaker: 'Server',
        text: 'Sure thing, two iced coffees with less ice. Are you ready to order your main food, or do you need a few minutes?',
        romanHindi: 'Zaroor, do iced coffee kam barf ke saath. Kya aap khana order karne ke liye ready hain ya kuch minute chahiye?'
      },
      {
        id: 's6',
        speaker: 'You',
        text: 'I think we are ready. What do you recommend between the grilled sandwich and the pasta?',
        romanHindi: 'Mujhe lagta hai hum ready hain. Grilled sandwich aur pasta mein se aap kya recommend karenge?',
        isUserTurn: true,
        suggestedUserHints: ['We are ready...', 'What do you recommend?', 'Between sandwich and pasta...']
      },
      {
        id: 's7',
        speaker: 'Server',
        text: 'Our pesto pasta with garlic bread is our chef\'s special today. Customers absolutely love it!',
        romanHindi: 'Hamara pesto pasta garlic bread ke saath aaj chef\'s special hai. Customers ko kafi pasand aata hai!'
      },
      {
        id: 's8',
        speaker: 'You',
        text: 'That sounds delicious! We will take one pesto pasta and one vegetable grilled sandwich, please.',
        romanHindi: 'Yeh toh bahut lazeez lag raha hai! Hum ek pesto pasta aur ek veg grilled sandwich lenge, please.',
        isUserTurn: true,
        suggestedUserHints: ['That sounds delicious...', 'We will take one pasta...', 'And one sandwich please...']
      },
      {
        id: 's9',
        speaker: 'Server',
        text: 'Would you like French fries or a fresh side salad with the sandwich?',
        romanHindi: 'Sandwich ke saath aap French fries lena pasand karenge ya fresh salad?'
      },
      {
        id: 's10',
        speaker: 'You',
        text: 'French fries please, and make sure the sandwich is not too spicy.',
        romanHindi: 'French fries please, aur dhyaan rakhiyega ki sandwich zyada teekha na ho.',
        isUserTurn: true,
        suggestedUserHints: ['French fries please...', 'Not too spicy...', 'Thank you...']
      },
      {
        id: 's11',
        speaker: 'Server',
        text: 'Got it, not too spicy. Your drinks will be right out!',
        romanHindi: 'Samajh gaya, kam teekha. Aapki drinks abhi aati hain!'
      },
      {
        id: 's12',
        speaker: 'You',
        text: 'Excuse me, after we finish, could you also bring us the bill please?',
        romanHindi: 'Suniyega, khana khatam hone ke baad kya aap bill bhi laa sakte hain please?',
        isUserTurn: true,
        suggestedUserHints: ['Excuse me...', 'Could you bring the bill?', 'Whenever you are ready...']
      },
      {
        id: 's13',
        speaker: 'Server',
        text: 'Here is your bill, sir. You can pay by card, cash, or UPI scan code.',
        romanHindi: 'Yeh lijiye aapka bill, sir. Aap card, cash, ya UPI se pay kar sakte hain.'
      },
      {
        id: 's14',
        speaker: 'You',
        text: 'I will pay via UPI scan code. The food was wonderful, thank you so much!',
        romanHindi: 'Main UPI scan code se pay karunga. Khana bahut badhiya tha, shukriya!',
        isUserTurn: true,
        suggestedUserHints: ['I will pay via UPI...', 'The food was wonderful...', 'Thank you so much!']
      }
    ],
    difficultWords: [
      { word: 'Recommend', meaning: 'Advise as a good choice', romanHindi: 'Sifarish karna / Salah dena' },
      { word: 'Side salad', meaning: 'A small portion of salad served along with the main dish', romanHindi: 'Mukhya khane ke saath chhota salad' },
      { word: 'Not too spicy', meaning: 'Mild in chillies/spices', romanHindi: 'Zyada teekha nahi' }
    ],
    naturalExpressions: [
      { phrase: 'Can I start you off with something to drink?', explanation: 'Polite waiter question at the start of a meal', romanHindi: 'Peene ke liye pehle kuch laun?' },
      { phrase: 'Could we get a table by the window?', explanation: 'Polite restaurant seating request', romanHindi: 'Kya khidki wali table mil sakti hai?' },
      { phrase: 'Could you bring us the bill please?', explanation: 'Polite way to ask for the check', romanHindi: 'Kya aap bill laa sakte hain please?' }
    ],
    practicePrompt: 'Imagine you are at a cafe. Practice ordering one cold coffee and one toasted sandwich, asking for less sugar.'
  }
];
