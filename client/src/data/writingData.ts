import { WritingPrompt } from '../types';

export const writingPromptsList: WritingPrompt[] = [
  {
    id: 'wp-daily-5',
    genre: 'Daily 5 Sentences',
    title: '5 Sentences About My Day',
    level: 'Medium',
    scenario: 'Write exactly 5 sentences describing what you did today from morning to evening.',
    instructions: [
      'Write about waking up and your morning routine (Use Past Simple: "I woke up...", "I had breakfast...")',
      'Mention your work or study tasks ("I worked on...", "I attended...")',
      'Add one pleasant or relaxing moment ("During lunch, I...", "In the evening, I...")',
      'Mention who you spoke with or spent time with',
      'End with your plan for winding down before sleep'
    ],
    vocabularySuggestions: ['Actually', 'Woke up', 'Managed to', 'Brilliant', 'Instead', 'Relaxed'],
    sampleStarter: 'Today I woke up at 7:30 AM and drank a warm cup of coffee. Then, I finished two important tasks for work...'
  },
  {
    id: 'wp-paragraph',
    genre: 'Short Paragraph',
    title: 'My Favorite Way to Unwind After a Busy Day',
    level: 'Medium',
    scenario: 'Write a short paragraph (50–90 words) explaining how you like to relax and recharge after a busy day.',
    instructions: [
      'Start with a topic sentence ("After a long busy day, I usually like to...")',
      'Explain what activities help you feel calm (listening to music, talking to family, reading, walking)',
      'Use natural connectors: "Usually", "Honestly", "Sometimes", "In addition"',
      'Explain why this activity helps clear your mind'
    ],
    vocabularySuggestions: ['Honestly', 'Unwind', 'Recharge', 'Helps me relax', 'Peaceful', 'Routine'],
    sampleStarter: 'After a busy day, honestly the best way for me to unwind is to go for a 20-minute walk outside...'
  },
  {
    id: 'wp-experience',
    genre: 'Experience Description',
    title: 'A Memorable Trip or Weekend Outing',
    level: 'Medium',
    scenario: 'Describe a memorable experience, such as a weekend trip, a family celebration, or an enjoyable dinner with friends.',
    instructions: [
      'State where you went and who accompanied you',
      'Use Past Simple (went, saw, ate, enjoyed, laughed) and Past Continuous (we were driving, the sun was shining)',
      'Describe what happened and why it was memorable',
      'Mention how you felt at the end of the day'
    ],
    vocabularySuggestions: ['Definitely', 'Memorable', 'Decided to', 'Atmosphere', 'Enjoyed thoroughly', 'Unforgettable'],
    sampleStarter: 'Last month, my friends and I decided to take a spontaneous road trip to the hills. We left early in the morning...'
  },
  {
    id: 'wp-opinion',
    genre: 'Express Opinion',
    title: 'Working From Home vs Working From the Office',
    level: 'Medium',
    scenario: 'Share your honest opinion on whether you prefer working from home or going to the office, and give 2 practical reasons.',
    instructions: [
      'Express your stance clearly ("In my opinion...", "Personally, I feel that...")',
      'Give reason 1 (e.g., saving commute time or collaborating in person with teammates)',
      'Give reason 2 (e.g., maintaining work-life balance or building professional friendships)',
      'Summarize your thought with a concluding sentence'
    ],
    vocabularySuggestions: ['In my opinion', 'Personally', 'Convenient', 'Commute', 'However', 'Productive'],
    sampleStarter: 'In my opinion, working from home has a lot of advantages, although going to the office also has benefits...'
  },
  {
    id: 'wp-message',
    genre: 'Message / Chat',
    title: 'Planning a Weekend Catch-Up with a Friend',
    level: 'Medium',
    scenario: 'Write an informal WhatsApp or SMS chat message to an old friend inviting them out for dinner or coffee this Saturday.',
    instructions: [
      'Start with a casual friendly greeting ("Hey! Long time no see...")',
      'Ask how they have been and mention that you want to catch up',
      'Suggest a specific day, time, or place ("How about we grab coffee this Saturday around 5 PM?")',
      'Ask for their availability naturally ("Let me know if that works for you!")'
    ],
    vocabularySuggestions: ['Catch up', 'Long time no see', 'Free this weekend', 'Grab coffee', 'Let me know', 'Sounds good'],
    sampleStarter: 'Hey! Hope you are doing well. It has been quite a while since we caught up! Are you free this Saturday around 5 PM? Let\'s grab coffee...'
  }
];
