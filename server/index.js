import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Gemini if API key is present
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '';
let genAI = null;
if (apiKey && apiKey !== 'your_gemini_api_key_here') {
  try {
    genAI = new GoogleGenerativeAI(apiKey);
  } catch (err) {
    console.warn('Gemini initialization warning:', err.message);
  }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'English Journey API',
    aiProvider: genAI ? 'Gemini 1.5/2.0' : 'Educational Fallback Engine',
    apiKeyConfigured: Boolean(genAI)
  });
});

// Detailed grammar mistakes detector with Roman Hindi explanations
function analyzeDetailedGrammarMistakes(text) {
  const mistakes = [];
  const lower = text.toLowerCase();

  // "I have seen him yesterday" -> "I saw him yesterday"
  if (/\bi\s+have\s+seen\s+him\s+yesterday\b/i.test(text) || /\bi\s+have\s+(saw|bought|went)\s+yesterday\b/i.test(text)) {
    mistakes.push({
      original: 'I have seen him yesterday',
      corrected: 'I saw him yesterday',
      whatWasWrong: 'Used Present Perfect with a finished past time word (yesterday).',
      romanHindiExplanation: 'Jab specific past time (jaise yesterday, last week, in 2022) bataya jaye, tab Past Simple (V2) use karte hain, Present Perfect nahi.',
      naturalAlternative: 'I saw him yesterday during lunch.'
    });
  }

  // "he go" / "she come"
  if (/\b(he|she|it)\s+(go|come|want|need|like|know)\b/i.test(text)) {
    const match = text.match(/\b(he|she|it)\s+(go|come|want|need|like|know)\b/i);
    if (match) {
      const subj = match[1];
      const verb = match[2];
      const verbWithS = verb === 'go' ? 'goes' : `${verb}s`;
      mistakes.push({
        original: `${subj} ${verb}`,
        corrected: `${subj} ${verbWithS}`,
        whatWasWrong: 'Missing third-person singular -s/-es ending in Present Simple.',
        romanHindiExplanation: 'Present Simple mein He, She, ya It ke sath verb mein "s" ya "es" judta hai.',
        naturalAlternative: `${subj} ${verbWithS} regularly.`
      });
    }
  }

  // "she don't"
  if (/\b(he|she|it)\s+don'?t\b/i.test(text)) {
    const match = text.match(/\b(he|she|it)\s+don'?t\b/i);
    mistakes.push({
      original: match[0],
      corrected: `${match[1]} doesn't`,
      whatWasWrong: 'Used "don\'t" instead of "doesn\'t" for a singular third-person subject.',
      romanHindiExplanation: 'He / She / It ke sath negative mein "doesn\'t" lagta hai, "don\'t" nahi.',
      naturalAlternative: `${match[1]} doesn't usually mind.`
    });
  }

  // "I am agree"
  if (/\bi\s+am\s+agree\b/i.test(text)) {
    mistakes.push({
      original: 'I am agree',
      corrected: 'I agree',
      whatWasWrong: 'Added "am" before the verb "agree".',
      romanHindiExplanation: '"Agree" khud ek verb hai. English mein "I agree" ya "I don\'t agree" bolte hain, "I am agree" nahi.',
      naturalAlternative: 'I completely agree with you.'
    });
  }

  // "I am having a car/problem"
  if (/\bi\s+am\s+having\s+(a\s+car|a\s+bike|a\s+house|two\s+brothers)\b/i.test(text)) {
    mistakes.push({
      original: 'I am having',
      corrected: 'I have',
      whatWasWrong: 'Used continuous form "having" for possession.',
      romanHindiExplanation: 'Possession (kisi cheez ke maalik hone) ke liye "I have" bolte hain. "Having" sirf khane/peene ya experience ke liye continuous hota hai.',
      naturalAlternative: 'I have a car.'
    });
  }

  // "peoples"
  if (/\bpeoples\b/i.test(text)) {
    mistakes.push({
      original: 'peoples',
      corrected: 'people',
      whatWasWrong: 'Added plural -s to "people", which is already plural.',
      romanHindiExplanation: '"Person" ka plural "people" hota hai. Isme alag se "s" lagane ki zarurat nahi hoti.',
      naturalAlternative: 'A lot of people think that way.'
    });
  }

  // "discuss about"
  if (/\bdiscuss\s+about\b/i.test(text)) {
    mistakes.push({
      original: 'discuss about',
      corrected: 'discuss',
      whatWasWrong: 'Added redundant preposition "about" after "discuss".',
      romanHindiExplanation: '"Discuss" ka matlab hi hota hai "kisi bare mein baat karna". Iske baad "about" nahi lagate.',
      naturalAlternative: 'Let us discuss this project tomorrow.'
    });
  }

  // "revert back"
  if (/\brevert\s+back\b/i.test(text)) {
    mistakes.push({
      original: 'revert back',
      corrected: 'revert / reply',
      whatWasWrong: 'Redundant phrasing ("revert" already means go back or reply).',
      romanHindiExplanation: '"Revert back" ke bajaye sirf "revert" ya "reply" boliye.',
      naturalAlternative: 'I will reply to your email shortly.'
    });
  }

  // "since 2 years"
  if (/\bsince\s+\d+\s+(years|months|days|hours)\b/i.test(text)) {
    const match = text.match(/\bsince\s+(\d+\s+(?:years|months|days|hours))\b/i);
    mistakes.push({
      original: match[0],
      corrected: `for ${match[1]}`,
      whatWasWrong: 'Used "since" instead of "for" with a duration/period of time.',
      romanHindiExplanation: 'Total duration (samay ki avadhi) ke liye "for" lagta hai (e.g., for 2 years). "Since" starting point ke liye lagta hai (e.g., since 2022).',
      naturalAlternative: `I have been working here for ${match[1]}.`
    });
  }

  // "did he went"
  if (/\bdid\s+(he|she|you|they|we|i)\s+(went|saw|came|bought|told)\b/i.test(text)) {
    const match = text.match(/\bdid\s+(he|she|you|they|we|i)\s+(went|saw|came|bought|told)\b/i);
    const verbBase = { went: 'go', saw: 'see', came: 'come', bought: 'buy', told: 'tell' }[match[2].toLowerCase()] || 'verb';
    mistakes.push({
      original: match[0],
      corrected: `did ${match[1]} ${verbBase}`,
      whatWasWrong: 'Used past tense (V2) after "did" instead of base form (V1).',
      romanHindiExplanation: 'Past questions mein "Did" aane ke baad main verb hamesha base form (V1) mein rehta hai.',
      naturalAlternative: `Did ${match[1]} ${verbBase} there yesterday?`
    });
  }

  return mistakes;
}

// AI Teacher Chat (Accepts both /api/ai/chat and /api/chat)
app.post(['/api/ai/chat', '/api/chat'], async (req, res) => {
  try {
    const { message, history = [], level = 'Medium' } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const detectedMistakes = analyzeDetailedGrammarMistakes(message);

    if (genAI) {
      try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const systemPrompt = `You are Coach Sarah, a friendly, encouraging, practical English teacher on "English Journey".
The learner is practicing daily-use English at the MEDIUM LEVEL.

Your core guidelines:
1. Speak in natural, everyday conversational English that people actually use.
2. Avoid unnecessary academic jargon or overly complicated words.
3. If the learner made a grammar or phrasing mistake, gently explain it using simple Roman Hindi (Hinglish) alongside simple English so they understand the reason intuitively.
4. Show:
   - What they said
   - A better, natural way to say it
   - Simple Roman Hindi explanation (e.g. "Jab hum...")
5. Keep the conversation engaging! Ask 1 friendly follow-up question related to everyday life (routine, work/study, friends, plans, food).
6. In roleplays, do not immediately give away the answer; let the learner try first and cheer them on.
Keep responses concise, warm, and formatted cleanly with markdown bolding and bullet points.`;

        const chat = model.startChat({
          history: history.map(h => ({
            role: h.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: h.content }]
          })),
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 600,
          }
        });

        const promptWithContext = `${systemPrompt}\n\nLearner: ${message}`;
        const result = await chat.sendMessage(promptWithContext);
        const reply = result.response.text();

        return res.json({
          reply,
          corrections: detectedMistakes,
          source: 'gemini'
        });
      } catch (geminiError) {
        console.warn('Gemini API call failed, using high-quality educational fallback:', geminiError.message);
      }
    }

    // High quality contextual educational fallback
    let reply = '';
    const lower = message.toLowerCase();

    if (detectedMistakes.length > 0) {
      reply += `Good try! Here is a quick, friendly tip to make your English sound more natural:\n\n`;
      detectedMistakes.forEach(m => {
        reply += `💡 **Correction:** Instead of "*${m.original}*", say "**${m.corrected}**".\n`;
        reply += `*Simple Reason (Roman Hindi):* ${m.romanHindiExplanation}\n`;
        reply += `*Natural Daily Example:* "${m.naturalAlternative}"\n\n`;
      });
      reply += `Now let's keep going! `;
    }

    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
      reply += `Hey there! Great to see you. I'm Coach Sarah. How was your day today? Did you have a busy schedule, or was it fairly relaxed?`;
    } else if (lower.includes('routine') || lower.includes('morning') || lower.includes('wake up')) {
      reply += `Talking about daily routines is fantastic practice! When you describe regular habits, remember we use the **Present Simple** (like "I wake up at 7 AM" or "I drink coffee").\n\nWhat is the very first thing you usually do right after waking up?`;
    } else if (lower.includes('work') || lower.includes('office') || lower.includes('meeting') || lower.includes('study')) {
      reply += `Work and studies are a big part of daily life. In meetings, useful everyday phrases include:\n- "*Could you please clarify that?*"\n- "*I agree with this point, but we should also consider...*"\n\nHow do you usually express your opinion when discussing ideas with colleagues or classmates?`;
    } else if (lower.includes('weekend') || lower.includes('plan') || lower.includes('future')) {
      reply += `Talking about plans is super common! For plans you've already decided, we often use **going to**:\n- "*I'm going to meet my friends this Saturday.*"\n\nWhat are you planning to do this coming weekend?`;
    } else if (lower.includes('food') || lower.includes('dinner') || lower.includes('order') || lower.includes('restaurant')) {
      reply += `Ordering food is fun and practical! In a cafe or restaurant, you can naturally say:\n- "*Could I please get a cappuccino?*"\n- "*May we have the check, please?*"\n\nImagine we are sitting at a cozy cafe right now. How would you order your favorite drink or snack?`;
    } else if (lower.includes('yesterday') || lower.includes('past') || lower.includes('last week')) {
      reply += `Great topic! For past experiences, always use the **Past Simple (V2)**:\n- "*Yesterday, I worked on my project and then relaxed at home.*"\n\nTell me: what was one interesting thing you did yesterday?`;
    } else {
      reply += `That sounds interesting! Expressing your thoughts in everyday English gets easier the more you practice.\n\nCould you tell me a little more about that? For example, how did that make you feel, or what happened next?`;
    }

    res.json({
      reply,
      corrections: detectedMistakes,
      source: 'offline_engine',
      note: 'Running on educational engine. Configure GEMINI_API_KEY in server/.env for live Gemini LLM responses.'
    });
  } catch (err) {
    console.error('AI chat error:', err);
    res.status(500).json({ error: 'Failed to process AI chat' });
  }
});

// Writing Evaluation API (Accepts both /api/ai/evaluate-writing and /api/evaluate-writing)
app.post(['/api/ai/evaluate-writing', '/api/evaluate-writing'], async (req, res) => {
  try {
    const { text, genre = 'Daily Activity', promptTitle = 'Writing Exercise', targetLevel = 'Medium' } = req.body;
    if (!text || text.trim().length === 0) {
      return res.status(400).json({ error: 'Text is required for evaluation' });
    }

    const wordCount = text.trim().split(/\s+/).length;
    const detectedMistakes = analyzeDetailedGrammarMistakes(text);

    if (genAI) {
      try {
        const model = genAI.getGenerativeModel({
          model: 'gemini-1.5-flash',
          generationConfig: { responseMimeType: 'application/json' }
        });

        const prompt = `You are a friendly, encouraging English writing teacher evaluating a learner's daily writing.
Target Level: Medium (everyday conversational English).
Genre: ${genre}
Topic: ${promptTitle}
Learner Text:
"""
${text}
"""

Evaluate the writing with a supportive tone. Explain mistakes simply in Roman Hindi (Hinglish) so the learner easily understands.
Return valid JSON matching this schema:
{
  "overallScore": number (1.0 to 10.0),
  "estimatedLevel": "Medium" | "Upper Medium" | "Hard",
  "wordCount": number,
  "writingCorrections": [
    {
      "original": "exact sentence or phrase from text",
      "corrected": "grammatically correct version",
      "whatWasWrong": "clear short reason in English",
      "romanHindiExplanation": "simple Roman Hindi explanation (e.g. Jab aap...)",
      "naturalAlternative": "a more natural, native-sounding daily English version"
    }
  ],
  "vocabularySuggestions": [
    {
      "originalWord": "word from text",
      "betterAlternative": "everyday useful phrase or natural synonym",
      "context": "example sentence in daily life"
    }
  ],
  "strengths": ["string", "string"],
  "areasForImprovement": ["string", "string"],
  "structureFeedback": "warm, encouraging paragraph of constructive feedback",
  "modelAnswer": "a clean, natural Medium-level version of the learner's idea that sounds like a native speaker chatting or writing naturally"
}`;

        const result = await model.generateContent(prompt);
        const data = JSON.parse(result.response.text());
        return res.json({ ...data, source: 'gemini' });
      } catch (geminiError) {
        console.warn('Gemini writing evaluation failed, falling back:', geminiError.message);
      }
    }

    // High quality deterministic evaluation fallback
    let score = 7.5;
    if (wordCount < 15) score -= 1.5;
    if (wordCount >= 30) score += 0.5;
    if (detectedMistakes.length > 0) score -= (detectedMistakes.length * 0.7);
    score = Math.max(5.0, Math.min(9.5, score));

    const writingCorrections = detectedMistakes.map(m => ({
      original: m.original,
      corrected: m.corrected,
      whatWasWrong: m.whatWasWrong,
      romanHindiExplanation: m.romanHindiExplanation,
      naturalAlternative: m.naturalAlternative
    }));

    // If no specific pattern mistake detected, add a helpful phrasing improvement
    if (writingCorrections.length === 0 && text.length > 10) {
      writingCorrections.push({
        original: text.slice(0, Math.min(text.length, 60)),
        corrected: text.slice(0, Math.min(text.length, 60)),
        whatWasWrong: 'Grammatically sound! Here is an even more natural daily phrasing.',
        romanHindiExplanation: 'Aapka sentence bilkul sahi hai! Isko aur jyada natural aur fluent banane ke liye aise bol sakte hain.',
        naturalAlternative: `Honestly, ${text.trim().toLowerCase().replace(/^\w/, c => c.toUpperCase())}`
      });
    }

    const vocabSuggestions = [
      {
        originalWord: 'good / nice',
        betterAlternative: 'pretty good / productive / enjoyable',
        context: '"I had a pretty good day" sounds very natural and conversational.'
      },
      {
        originalWord: 'very busy',
        betterAlternative: 'a bit hectic / caught up with work',
        context: '"Work was a bit hectic today" is widely used in everyday conversations.'
      }
    ];

    res.json({
      overallScore: Number(score.toFixed(1)),
      estimatedLevel: score >= 8.5 ? 'Upper Medium' : 'Medium',
      wordCount,
      writingCorrections,
      vocabularySuggestions: vocabSuggestions,
      strengths: [
        'Clear daily-use English sentence structure',
        'Good communicative clarity that people easily understand',
        'Realistic and relatable topic expression'
      ],
      areasForImprovement: [
        detectedMistakes.length > 0 ? 'Pay attention to tense consistency and simple verb endings' : 'Try connecting short sentences with "because", "although", or "instead"',
        'Practice reading your sentences aloud to check if they sound natural'
      ],
      structureFeedback: `Great job completing today's writing practice! Your message is clear and easy to understand. Keep writing 5-10 sentences every day about what you did, thought, or planned. That daily habit will quickly make your spoken English feel effortless.`,
      modelAnswer: `Today was a productive day for me. I woke up on time, finished my daily tasks, and made sure to spend a few minutes practicing English. It feels great to see steady progress!`,
      source: 'offline_engine'
    });
  } catch (err) {
    console.error('Writing evaluation error:', err);
    res.status(500).json({ error: 'Failed to evaluate writing' });
  }
});

app.listen(PORT, () => {
  console.log(`[English Journey Server] Running on http://localhost:${PORT}`);
  console.log(`[AI Mode]: ${genAI ? 'Gemini API Active' : 'Offline Educational Engine'}`);
});
