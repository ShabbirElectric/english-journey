# English Journey 🌍
> **"Learn English. Practice Daily. Speak Confidently."**

A complete, modern educational SaaS platform for English language mastery, engineered from foundational grammar to advanced professional fluency.

---

## 🌟 Architecture & Features

### 1. Design & Branding
- **Color Palette:** Modern Green (`#258255`), White, Very Light Green/Grey (`#F6F9F7`), Emerald accents.
- **Typography:** `Manrope` (Display headings) & `DM Sans` (Clean body text).
- **Icons:** Lucide React.
- **Layout:** Responsive on Desktop, Tablet, and Mobile with light-theme SaaS aesthetics, rounded cards, and subtle elevation shadows.

### 2. Main Dashboard
- Daily welcome with motivational quote and CEFR level indicator.
- Daily learning goals progress tracker.
- Current streak counter with fire indicators.
- Total XP points and rank progression.
- Weekly activity performance chart powered by **Recharts**.
- Today's schedule and 1-click continuation of the next 30-Day challenge or grammar lesson.

### 3. Placement Test
- Calibrated assessment across **5 core competencies**:
  1. Grammar
  2. Vocabulary
  3. Reading Comprehension
  4. Sentence Formation
  5. Writing Skills
- Calculates suggested CEFR level: **A1, A2, B1, B2, or C1**.
- Detailed diagnostic report with breakdown by category and recommended curriculum roadmap.
- Transparent disclaimer: *This placement assessment is designed for learning personalization on English Journey and is not an officially certified CEFR examination.*

### 4. Complete Grammar Academy (38 Comprehensive Lessons)
Every grammar lesson contains all 10 required pedagogical components:
1. Simple explanation
2. Formula or structure
3. Hindi explanation where useful (हिंदी में अर्थ व नियम)
4. 5 real-life examples with audio pronunciation
5. Common mistakes (❌ Incorrect vs ✅ Correct with reasoning)
6. Interactive practice exercises
7. MCQ mastery quiz
8. Correct answers with immediate feedback
9. Detailed answer explanations
10. Lesson completion tracking (+XP)

- **Part 1 – Grammar Foundations (11 Lessons):** Sentence structure, Parts of speech, Nouns, Pronouns, Verbs, Helping verbs, Adjectives, Adverbs, Articles, Prepositions, Conjunctions.
- **Part 2 – Tenses Mastery (12 Lessons):** Present Simple, Present Continuous, Present Perfect, Present Perfect Continuous, Past Simple, Past Continuous, Past Perfect, Past Perfect Continuous, Future Simple, Future Continuous, Future Perfect, Future Perfect Continuous.
- **Part 3 – Intermediate Grammar (8 Lessons):** Modal verbs, Subject-verb agreement, Question formation, Negative sentences, Active and passive voice, Direct and indirect speech, Comparatives and superlatives, Conditionals.
- **Part 4 – Advanced Grammar & Fluency (7 Lessons):** Gerunds and infinitives, Relative clauses, Phrasal verbs, Clauses, Advanced sentence structures (Inversion & Clefts), Common grammatical mistakes, Formal and informal English.

### 5. 30-Day English Challenge
A fully structured 30-day curriculum:
- **Day 1–7:** Grammar foundations.
- **Day 8–14:** Tenses and sentence formation.
- **Day 15–21:** Intermediate grammar and communication.
- **Day 22–25:** Vocabulary and reading.
- **Day 26–27:** Writing practice.
- **Day 28–29:** Speaking and conversation.
- **Day 30:** Final examination.
- Each day includes learning objectives, grammar rule, 2 curated vocabulary words with Hindi, reading/writing task, speaking prompt, and daily mastery quiz.

### 6. Vocabulary Builder & Flashcards
- High-yield words categorized into Business, Daily Life, Academic, Emotions & Character, and Idioms.
- Phonetic transcriptions, English definitions, Hindi meanings, example sentences, synonyms, and antonyms.
- Interactive **Flashcard Trainer** with flip animation and Leitner-style spaced repetition marking.
- Vocabulary Revision Tests and personal saved favorites bank.

### 7. Speaking Studio
- Everyday and workplace scenarios (Self-introduction, Job interview with the STAR method, Daily standups, Ordering at a cafe, Expressing opinions).
- Real-life dialogues with user turn-taking.
- **Web Speech API**: Text-to-speech native accents, Speech-to-text live transcription, and MediaRecorder voice recording & playback.
- Graceful error handling for unsupported browsers.

### 8. Reading Room
- Graded passages from A2 to C1 level.
- Interactive difficult word annotations with definitions and Hindi translations on click.
- Native read-aloud audio player with speed controls (0.8x, 1.0x, 1.2x).
- Reading comprehension tests with explanations.

### 9. Writing Studio
- Prompts for formal emails, paragraphs, essays, story writing, and personal diary entries.
- Word counter and real-time draft saving.
- **AI Writing Evaluator**: Analyzes text for overall score (out of 10), estimated CEFR level, grammar corrections, vocabulary upgrades, constructive feedback, and a polished native model version.

### 10. AI English Teacher (Coach Sarah)
- Dedicated conversational tutor interface.
- Adapts vocabulary and depth to selected CEFR level (A1 to C1).
- Built-in Grammar Inspector: catches errors and explains corrections inline.
- Connected to Google Gemini API with intelligent educational fallback engine when API key is unconfigured.
- Speech dictation and text-to-speech audio buttons.

### 11. Tests & Assessments
- Diagnostic Grammar MCQs, Sentence Correction tests, and the **Day 30 Final Examination**.
- Performance score percentage, question-by-question review with explanations, and identified weak topics with direct links to review lessons in the Grammar Academy.

### 12. Progress & Gamification
- Daily streaks, total XP, and rank titles.
- Milestone achievement badges.
- Weekly learning velocity chart.

### 13. My Profile
- Learner profile management (name, bio, target level, daily study goal).
- Saved vocabulary bank with audio and delete controls.
- Assessment attempt history and writing portfolio.
- Personal study notebook.

### 14. Database Architecture (Supabase / PostgreSQL)
- Complete SQL schema at `supabase/schema.sql` covering `profiles`, `lessons`, `grammar_topics`, `exercises`, `quiz_questions`, `quiz_attempts`, `daily_progress`, `vocabulary`, `saved_words`, `learning_streaks`, `achievements`, `writing_submissions`, `chat_history`, and `personal_notes` with Row Level Security (RLS) policies.

---

## 🚀 Running the Project

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+)

### Installation
```bash
# In the client directory
cd client
npm install

# In the server directory
cd ../server
npm install
```

### Starting the Development Servers

1. **Start the Express Backend API (Port 5000):**
   ```bash
   cd server
   npm run dev
   ```

2. **Start the React Frontend (Port 5173):**
   ```bash
   cd client
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

### Optional: Configure Live Gemini AI
Add your Gemini API key in `server/.env`:
```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key_here
```
*(If left blank, English Journey automatically runs on its built-in high-quality educational fallback engine!)*

---

## 📁 Project Directory Structure
```
english-journey/
├── client/
│   ├── src/
│   │   ├── components/      # Navbar, Sidebar, AudioButton, NotificationToast
│   │   ├── context/         # LearningContext (state, streaks, XP, persistent profile)
│   │   ├── data/            # 38 Grammar lessons, 30-Day curriculum, Vocab, Reading, Speaking
│   │   ├── pages/           # All 11 platform modules + subviews
│   │   ├── services/        # speechService, apiService, storageService, supabaseClient
│   │   ├── types/           # Central TypeScript definitions
│   │   ├── App.tsx          # Main application & routing
│   │   └── main.tsx         # Root entry point
│   ├── index.html
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
├── server/
│   ├── index.js             # Express API with Gemini & Educational Fallback
│   ├── package.json
│   ├── .env.example
│   └── .env
├── supabase/
│   └── schema.sql           # Complete Supabase PostgreSQL schema with RLS & indexes
├── package.json
└── README.md
```

