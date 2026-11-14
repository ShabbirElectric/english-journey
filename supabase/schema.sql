-- =====================================================================
-- ENGLISH JOURNEY - Comprehensive Supabase PostgreSQL Database Schema
-- "Learn English. Practice Daily. Speak Confidently."
-- =====================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name TEXT NOT NULL DEFAULT 'English Learner',
    email TEXT,
    avatar_url TEXT DEFAULT 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    cefr_level TEXT DEFAULT 'A2' CHECK (cefr_level IN ('A1', 'A2', 'B1', 'B2', 'C1')),
    daily_goal_mins INTEGER DEFAULT 25,
    streak_count INTEGER DEFAULT 1,
    total_xp INTEGER DEFAULT 120,
    lessons_completed_count INTEGER DEFAULT 0,
    bio TEXT DEFAULT 'On a journey to speak English fluently and confidently.',
    target_goal TEXT DEFAULT 'Professional fluency & workplace communication',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. GRAMMAR TOPICS (Categories / Units)
CREATE TABLE IF NOT EXISTS grammar_topics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    part_number INTEGER NOT NULL CHECK (part_number BETWEEN 1 AND 4),
    part_title TEXT NOT NULL,
    topic_name TEXT NOT NULL,
    description TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. LESSONS TABLE (Grammar Academy & 30-Day Modules)
CREATE TABLE IF NOT EXISTS lessons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    topic_id UUID REFERENCES grammar_topics(id) ON DELETE SET NULL,
    part INTEGER NOT NULL CHECK (part BETWEEN 1 AND 4),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT,
    order_index INTEGER DEFAULT 0,
    cefr_level TEXT DEFAULT 'A2',
    simple_explanation TEXT NOT NULL,
    formula_or_structure TEXT NOT NULL,
    hindi_explanation TEXT NOT NULL,
    examples JSONB NOT NULL DEFAULT '[]'::jsonb, -- Array of 5 real-life examples
    common_mistakes JSONB NOT NULL DEFAULT '[]'::jsonb, -- Array of {wrong, correct, reason}
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. EXERCISES & QUIZ QUESTIONS
CREATE TABLE IF NOT EXISTS quiz_questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
    module_type TEXT DEFAULT 'grammar' CHECK (module_type IN ('grammar', 'challenge', 'placement', 'assessment', 'reading', 'vocabulary')),
    question_text TEXT NOT NULL,
    question_type TEXT DEFAULT 'mcq' CHECK (question_type IN ('mcq', 'fill_blank', 'sentence_correction')),
    options JSONB NOT NULL DEFAULT '[]'::jsonb,
    correct_option_index INTEGER NOT NULL,
    explanation TEXT NOT NULL,
    hindi_tip TEXT,
    points INTEGER DEFAULT 10,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. QUIZ ATTEMPTS & TEST RESULTS
CREATE TABLE IF NOT EXISTS quiz_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    test_type TEXT NOT NULL, -- 'placement', 'grammar_lesson', 'weekly_unit', 'final_exam'
    test_title TEXT NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    percentage NUMERIC(5, 2) NOT NULL,
    cefr_result TEXT,
    weak_topics JSONB DEFAULT '[]'::jsonb,
    recommended_revision JSONB DEFAULT '[]'::jsonb,
    answers_summary JSONB DEFAULT '[]'::jsonb,
    completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. DAILY PROGRESS & ACTIVITY LOGS
CREATE TABLE IF NOT EXISTS daily_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    minutes_studied INTEGER DEFAULT 0,
    lessons_completed INTEGER DEFAULT 0,
    words_practiced INTEGER DEFAULT 0,
    xp_earned INTEGER DEFAULT 0,
    UNIQUE(user_id, date)
);

-- 7. VOCABULARY MASTER TABLE
CREATE TABLE IF NOT EXISTS vocabulary (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    word TEXT NOT NULL UNIQUE,
    phonetic TEXT NOT NULL,
    part_of_speech TEXT NOT NULL,
    cefr_level TEXT DEFAULT 'B1',
    definition TEXT NOT NULL,
    hindi_meaning TEXT NOT NULL,
    example_en TEXT NOT NULL,
    example_hi TEXT NOT NULL,
    synonyms JSONB DEFAULT '[]'::jsonb,
    antonyms JSONB DEFAULT '[]'::jsonb,
    category TEXT NOT NULL DEFAULT 'General',
    day_number INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. SAVED WORDS (Learner's Personal Vocabulary Bank)
CREATE TABLE IF NOT EXISTS saved_words (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    word_id UUID REFERENCES vocabulary(id) ON DELETE CASCADE,
    mastered BOOLEAN DEFAULT FALSE,
    review_count INTEGER DEFAULT 0,
    personal_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, word_id)
);

-- 9. LEARNING STREAKS
CREATE TABLE IF NOT EXISTS learning_streaks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
    current_streak INTEGER DEFAULT 1,
    longest_streak INTEGER DEFAULT 1,
    last_activity_date DATE DEFAULT CURRENT_DATE,
    freeze_available INTEGER DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. ACHIEVEMENTS & BADGES
CREATE TABLE IF NOT EXISTS achievements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    icon_name TEXT NOT NULL,
    xp_reward INTEGER DEFAULT 50,
    category TEXT DEFAULT 'general'
);

CREATE TABLE IF NOT EXISTS user_achievements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    achievement_code TEXT REFERENCES achievements(code) ON DELETE CASCADE,
    unlocked_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, achievement_code)
);

-- 11. WRITING SUBMISSIONS & AI EVALUATIONS
CREATE TABLE IF NOT EXISTS writing_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    prompt_title TEXT NOT NULL,
    genre TEXT NOT NULL, -- 'email', 'paragraph', 'story', 'diary', 'professional'
    submitted_text TEXT NOT NULL,
    word_count INTEGER NOT NULL,
    overall_score NUMERIC(3, 1), -- e.g. 8.5 / 10
    grammar_corrections JSONB DEFAULT '[]'::jsonb,
    vocabulary_improvements JSONB DEFAULT '[]'::jsonb,
    structure_feedback TEXT,
    improved_model_version TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. CHAT HISTORY (AI English Teacher Conversations)
CREATE TABLE IF NOT EXISTS chat_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
    content TEXT NOT NULL,
    detected_mistakes JSONB DEFAULT '[]'::jsonb,
    suggested_improvements JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 13. PERSONAL NOTES
CREATE TABLE IF NOT EXISTS personal_notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    tag TEXT DEFAULT 'General',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_words ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_streaks ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE writing_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE personal_notes ENABLE ROW LEVEL SECURITY;

-- Allow users to manage their own data
CREATE POLICY "Users can view and update own profile" ON profiles
    FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own quiz attempts" ON quiz_attempts
    FOR ALL USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = quiz_attempts.user_id));

CREATE POLICY "Users can manage own daily progress" ON daily_progress
    FOR ALL USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = daily_progress.user_id));

CREATE POLICY "Users can manage own saved words" ON saved_words
    FOR ALL USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = saved_words.user_id));

CREATE POLICY "Users can manage own streaks" ON learning_streaks
    FOR ALL USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = learning_streaks.user_id));

CREATE POLICY "Users can manage own submissions" ON writing_submissions
    FOR ALL USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = writing_submissions.user_id));

CREATE POLICY "Users can manage own chat" ON chat_history
    FOR ALL USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = chat_history.user_id));

CREATE POLICY "Users can manage own notes" ON personal_notes
    FOR ALL USING (auth.uid() = (SELECT user_id FROM profiles WHERE id = personal_notes.user_id));

-- Public read access for curriculum tables
CREATE POLICY "Public read for lessons" ON lessons FOR SELECT USING (true);
CREATE POLICY "Public read for grammar topics" ON grammar_topics FOR SELECT USING (true);
CREATE POLICY "Public read for quiz questions" ON quiz_questions FOR SELECT USING (true);
CREATE POLICY "Public read for vocabulary" ON vocabulary FOR SELECT USING (true);
CREATE POLICY "Public read for achievements" ON achievements FOR SELECT USING (true);

