// Frontend API Service - Communicates with Express Backend

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface GrammarMistakeCorrection {
  original: string;
  corrected: string;
  whatWasWrong?: string;
  romanHindiExplanation?: string;
  naturalAlternative?: string;
  explanation?: string;
}

export interface ChatResponse {
  reply: string;
  corrections?: GrammarMistakeCorrection[];
  source?: string;
  note?: string;
}

export interface WritingEvaluationResponse {
  overallScore: number;
  estimatedLevel?: string;
  estimatedCefr?: string;
  wordCount: number;
  writingCorrections?: {
    original: string;
    corrected: string;
    whatWasWrong: string;
    romanHindiExplanation: string;
    naturalAlternative: string;
  }[];
  grammarCorrections?: GrammarMistakeCorrection[];
  vocabularySuggestions: {
    originalWord: string;
    betterAlternative: string;
    context: string;
  }[];
  strengths: string[];
  areasForImprovement: string[];
  structureFeedback: string;
  modelAnswer: string;
  source?: string;
}

const API_BASE = import.meta.env.VITE_API_URL || '/api';

export const apiService = {
  // Check backend server health
  async checkHealth(): Promise<{ status: string; aiProvider?: string; apiKeyConfigured?: boolean }> {
    try {
      const res = await fetch(`${API_BASE}/health`);
      if (!res.ok) throw new Error('Backend response not OK');
      return await res.json();
    } catch (err) {
      return {
        status: 'offline',
        aiProvider: 'Local Smart Assistant',
        apiKeyConfigured: false
      };
    }
  },

  // Send message to AI Tutor Coach Sarah
  async sendChatMessage(
    message: string,
    history: ChatMessage[] = [],
    level: string = 'Medium'
  ): Promise<ChatResponse> {
    try {
      const res = await fetch(`${API_BASE}/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history, level }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      return await res.json();
    } catch (error) {
      console.warn('API call failed; using local educational engine:', error);
      return {
        reply: `That is a great thought! Practicing expressing your thoughts clearly in English is the fastest route to natural fluency. Can you tell me a little bit more about how you practice this in your daily life?`,
        corrections: [],
        source: 'client_fallback',
        note: 'Operating in self-contained mode.'
      };
    }
  },

  // Submit writing for AI evaluation
  async evaluateWriting(
    text: string,
    genre: string,
    promptTitle: string,
    targetLevel: string = 'Medium'
  ): Promise<WritingEvaluationResponse> {
    try {
      const res = await fetch(`${API_BASE}/ai/evaluate-writing`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, genre, promptTitle, targetLevel }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      return await res.json();
    } catch (error) {
      console.warn('Writing eval API failed, generating local assessment:', error);
      const sentences = text
        .split(/(?<=[.?!])\s+/)
        .map(s => s.trim())
        .filter(s => s.length > 0);

      const wordCount = text.trim().split(/\s+/).length;

      // Smart sentence analysis
      const corrections = sentences.slice(0, 5).map((sentence, idx) => {
        let whatWasWrong = 'Grammatically clear and communicative.';
        let romanHindiExplanation = 'Yeh sentence bilkul sahi hai aur daily baatcheet mein naturally use hota hai.';
        let corrected = sentence;
        let naturalAlternative = sentence;

        if (/\bi\s+have\s+seen\s+.*yesterday\b/i.test(sentence) || /\bi\s+have\s+(saw|bought|went)\s+yesterday\b/i.test(sentence)) {
          corrected = sentence.replace(/\bi\s+have\s+seen\b/gi, 'I saw').replace(/\bi\s+have\s+bought\b/gi, 'I bought').replace(/\bi\s+have\s+went\b/gi, 'I went');
          whatWasWrong = 'Used Present Perfect (have + V3) with a finished past time word (yesterday).';
          romanHindiExplanation = 'Jab specific past time (jaise yesterday, last week) bataya jaye, tab Past Simple (V2) lagta hai, Present Perfect nahi.';
          naturalAlternative = corrected;
        } else if (/\bi\s+am\s+agree\b/i.test(sentence)) {
          corrected = sentence.replace(/\bi\s+am\s+agree\b/gi, 'I agree');
          whatWasWrong = 'Placed "am" before the active verb "agree".';
          romanHindiExplanation = '"Agree" khud ek verb hai. English mein "I agree" ya "I don\'t agree" bolte hain, "I am agree" nahi.';
          naturalAlternative = sentence.replace(/\bi\s+am\s+agree\b/gi, 'I completely agree');
        } else if (/\b(he|she)\s+don'?t\b/i.test(sentence)) {
          corrected = sentence.replace(/\b(he|she)\s+don'?t\b/gi, '$1 doesn\'t');
          whatWasWrong = 'Used "don\'t" instead of "doesn\'t" for third-person singular.';
          romanHindiExplanation = 'He / She / It ke sath negative mein "doesn\'t" lagta hai, "don\'t" nahi.';
          naturalAlternative = corrected;
        } else if (/\bpeoples\b/i.test(sentence)) {
          corrected = sentence.replace(/\bpeoples\b/gi, 'people');
          whatWasWrong = 'Added plural -s to "people", which is already plural.';
          romanHindiExplanation = '"People" pehle se hi plural hai, isme alag se "s" nahi judta.';
          naturalAlternative = corrected;
        } else if (/\bdiscuss\s+about\b/i.test(sentence)) {
          corrected = sentence.replace(/\bdiscuss\s+about\b/gi, 'discuss');
          whatWasWrong = 'Added unnecessary preposition "about" after "discuss".';
          romanHindiExplanation = '"Discuss" ka matlab hi hota hai kisi bare mein baat karna; iske baad "about" nahi lagate.';
          naturalAlternative = corrected;
        } else {
          // Provide an enriching natural phrasing
          naturalAlternative = sentence.replace(/\bvery good\b/gi, 'fantastic')
                                       .replace(/\bvery busy\b/gi, 'packed with tasks')
                                       .replace(/\breally happy\b/gi, 'thrilled')
                                       .replace(/\bi woke up\b/gi, 'I woke up and started my morning');
        }

        return {
          original: sentence,
          corrected,
          whatWasWrong,
          romanHindiExplanation,
          naturalAlternative: naturalAlternative !== sentence ? naturalAlternative : `Naturally: "${sentence}"`
        };
      });

      return {
        overallScore: wordCount >= 25 ? 8.8 : 7.5,
        estimatedLevel: targetLevel,
        wordCount,
        writingCorrections: corrections,
        vocabularySuggestions: [
          {
            originalWord: 'good',
            betterAlternative: 'pretty good / productive / rewarding',
            context: 'In daily conversation, saying "I had a pretty good day" or "a productive morning" sounds natural.'
          },
          {
            originalWord: 'busy',
            betterAlternative: 'packed / occupied / tied up',
            context: 'Instead of repetitive "busy", use "My schedule was packed with tasks" or "I was tied up in meetings".'
          }
        ],
        strengths: [
          'Communicates everyday thoughts clearly and naturally',
          'Good use of daily chronological flow and routine words',
          'Appropriate Medium-level conversational tone'
        ],
        areasForImprovement: [
          'Connect sentences smoothly using words like "because", "although", "instead", or "so"',
          'Pay close attention to past tense verbs when narrating yesterday\'s events'
        ],
        structureFeedback: 'Great job practicing daily writing! Your sentences express your real-life experiences clearly. Review Coach Sarah\'s sentence-by-sentence Roman Hindi explanations below to polish your natural flow.',
        modelAnswer: text,
        source: 'smart_client_engine'
      };
    }
  }
};
