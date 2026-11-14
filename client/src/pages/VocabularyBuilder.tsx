import React, { useState } from 'react';
import {
  Languages,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  Sparkles,
  Search,
  Filter,
  Layers,
  HelpCircle,
  RotateCw,
  ArrowRight,
  ArrowLeft,
  Volume2
} from 'lucide-react';
import { initialVocabularyBank, vocabularyCategories } from '../data/vocabularyData';
import { AudioButton } from '../components/AudioButton';
import { useLearning } from '../context/LearningContext';

export const VocabularyBuilder: React.FC = () => {
  const { profile, toggleSaveWord, toggleMasterWord, addXP } = useLearning();

  const [activeTab, setActiveTab] = useState<'browse' | 'flashcards' | 'revision'>('browse');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlySaved, setOnlySaved] = useState(false);

  // Flashcards mode state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Revision test state
  const [testQuestionIdx, setTestQuestionIdx] = useState(0);
  const [selectedTestAnswer, setSelectedTestAnswer] = useState<number | null>(null);
  const [testScore, setTestScore] = useState(0);
  const [testFinished, setTestFinished] = useState(false);

  // Filter words
  const filteredWords = initialVocabularyBank.filter(word => {
    const matchesCategory = selectedCategory === 'All' || word.category === selectedCategory;
    const matchesSaved = !onlySaved || profile.savedWordIds.includes(word.id);
    const matchesSearch =
      word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      word.simpleMeaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      word.romanHindiMeaning.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSaved && matchesSearch;
  });

  // Flashcards navigation
  const currentFlashcard = filteredWords[flashcardIndex] || filteredWords[0] || initialVocabularyBank[0];

  const handleNextFlashcard = () => {
    setIsFlipped(false);
    if (flashcardIndex < filteredWords.length - 1) {
      setFlashcardIndex(flashcardIndex + 1);
    } else {
      setFlashcardIndex(0);
    }
  };

  const handlePrevFlashcard = () => {
    setIsFlipped(false);
    if (flashcardIndex > 0) {
      setFlashcardIndex(flashcardIndex - 1);
    } else {
      setFlashcardIndex(filteredWords.length - 1);
    }
  };

  // Revision test setup (pool of 5 words)
  const testPool = initialVocabularyBank.slice(0, 5);
  const currentTestWord = testPool[testQuestionIdx];

  const handleAnswerTest = (answerIdx: number) => {
    setSelectedTestAnswer(answerIdx);
    if (answerIdx === 0) {
      setTestScore(prev => prev + 1);
    }

    setTimeout(() => {
      setSelectedTestAnswer(null);
      if (testQuestionIdx < testPool.length - 1) {
        setTestQuestionIdx(testQuestionIdx + 1);
      } else {
        setTestFinished(true);
        addXP(30, 'Daily Vocabulary Revision Test');
      }
    }, 900);
  };

  const handleRestartTest = () => {
    setTestQuestionIdx(0);
    setSelectedTestAnswer(null);
    setTestScore(0);
    setTestFinished(false);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Header Banner in Dark Navy & Sky Blue */}
      <div className="bg-gradient-to-r from-navy-dark via-navy to-[#1B3B66] text-white p-6 sm:p-8 rounded-2xl shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-sky-light border border-sky-DEFAULT/20">
            <Languages size={14} className="text-sky-DEFAULT" /> Daily High-Use Vocabulary • 10 Words / Day
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight">
            Daily Vocabulary Builder
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Every day, learn 10 practical words and expressions (Actually, Probably, Definitely, Honestly...). Each word includes simple English meaning, Roman Hindi meaning, pronunciation guide, natural daily example, and practice sentence.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-sky-DEFAULT/20 text-center flex-shrink-0 min-w-[200px]">
          <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold block mb-1">
            Personal Bank
          </span>
          <div className="text-3xl font-display font-black text-white">
            {profile.savedWordIds.length} <span className="text-sm font-medium text-sky-light">Saved Words</span>
          </div>
          <span className="text-[11px] text-sky-light mt-1 block font-medium">
            {profile.masteredWordIds.length} Mastered
          </span>
        </div>
      </div>

      {/* 2. Mode Tabs: Browse / Flashcards / Revision */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('browse')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'browse'
                ? 'bg-navy-DEFAULT text-white shadow-soft'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Daily Words Bank ({filteredWords.length})
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'flashcards'
                ? 'bg-navy-DEFAULT text-white shadow-soft'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Spaced Flashcards
          </button>
          <button
            onClick={() => setActiveTab('revision')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'revision'
                ? 'bg-navy-DEFAULT text-white shadow-soft'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Quick Revision Test
          </button>
        </div>

        {activeTab === 'browse' && (
          <div className="flex items-center gap-3 text-xs">
            <label className="flex items-center gap-1.5 cursor-pointer text-slate-700 font-semibold select-none">
              <input
                type="checkbox"
                checked={onlySaved}
                onChange={(e) => setOnlySaved(e.target.checked)}
                className="rounded border-slate-300 text-navy-DEFAULT focus:ring-sky-DEFAULT/40"
              />
              <span>Saved Only ({profile.savedWordIds.length})</span>
            </label>
          </div>
        )}
      </div>

      {/* 3. Browse Mode */}
      {activeTab === 'browse' && (
        <div className="space-y-6">
          {/* Search & Category Filter Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search words, English or Roman Hindi meanings..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-navy-dark focus:ring-2 focus:ring-sky-DEFAULT/40 outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-navy-DEFAULT text-white shadow-soft'
                    : 'bg-surface-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All
              </button>
              {vocabularyCategories.slice(0, 4).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-navy-DEFAULT text-white shadow-soft'
                      : 'bg-surface-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Words Grid - 6 Key Requirements per card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredWords.map((word) => {
              const isSaved = profile.savedWordIds.includes(word.id);
              const isMastered = profile.masteredWordIds.includes(word.id);

              return (
                <div
                  key={word.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm hover:border-sky-DEFAULT transition-all space-y-3"
                >
                  {/* Top Bar: Word, Pronunciation, Actions */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-extrabold text-lg text-navy-dark">
                          {word.word}
                        </h3>
                        <span className="text-xs text-slate-400 font-mono">
                          [{word.pronunciationGuide}]
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-light text-navy-dark inline-block mt-0.5">
                        {word.category || 'Everyday Expression'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <AudioButton text={word.word} size="sm" />
                      <button
                        onClick={() => toggleSaveWord(word.id)}
                        className={`p-1.5 rounded-full transition-colors ${
                          isSaved ? 'text-amber-500 hover:text-amber-600' : 'text-slate-300 hover:text-slate-500'
                        }`}
                        title={isSaved ? 'Remove from saved' : 'Save word'}
                      >
                        {isSaved ? <BookmarkCheck size={18} className="fill-amber-500" /> : <Bookmark size={18} />}
                      </button>
                      <button
                        onClick={() => toggleMasterWord(word.id)}
                        className={`p-1.5 rounded-full transition-colors ${
                          isMastered ? 'text-navy-DEFAULT hover:text-navy-dark' : 'text-slate-300 hover:text-slate-500'
                        }`}
                        title={isMastered ? 'Marked as Mastered' : 'Mark as Mastered'}
                      >
                        <CheckCircle2 size={18} className={isMastered ? 'fill-sky-light' : ''} />
                      </button>
                    </div>
                  </div>

                  {/* 2 & 3: English meaning & Roman Hindi meaning */}
                  <div className="p-3 rounded-xl bg-surface-100 border border-slate-100 space-y-1">
                    <p className="text-xs text-slate-800">
                      <strong>Simple Meaning:</strong> {word.simpleMeaning}
                    </p>
                    <p className="text-xs text-navy-DEFAULT font-bold">
                      🗣️ Roman Hindi: {word.romanHindiMeaning}
                    </p>
                  </div>

                  {/* 5 & 6: Daily Life Example & Practice Sentence */}
                  <div className="text-xs text-slate-600 space-y-1.5 pl-1">
                    <div>
                      <span className="font-bold text-navy-dark block text-[11px]">Daily-Life Example:</span>
                      <p className="italic text-slate-700">"{word.dailyLifeExample}"</p>
                    </div>
                    <div>
                      <span className="font-bold text-navy-dark block text-[11px]">Practice Sentence:</span>
                      <p className="text-slate-600">"{word.practiceSentence}"</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Flashcards Mode */}
      {activeTab === 'flashcards' && currentFlashcard && (
        <div className="max-w-xl mx-auto space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
            <span>Flashcard {flashcardIndex + 1} of {filteredWords.length}</span>
            <span>Click card to flip definition & Roman Hindi</span>
          </div>

          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[300px] bg-white rounded-2xl border-2 border-slate-200 hover:border-sky-DEFAULT shadow-soft p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 transform select-none"
          >
            {!isFlipped ? (
              // Front side
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Word / Expression</span>
                <h2 className="text-3xl font-display font-black text-navy-dark">{currentFlashcard.word}</h2>
                <span className="text-sm text-slate-400 font-mono">[{currentFlashcard.pronunciationGuide}]</span>
                <p className="text-xs text-navy-DEFAULT font-semibold pt-4">Click to reveal meaning & Roman Hindi ↻</p>
              </div>
            ) : (
              // Back side
              <div className="flex-1 flex flex-col justify-center space-y-3 animate-fadeIn">
                <div className="text-center pb-2 border-b border-slate-100">
                  <h3 className="font-display font-extrabold text-xl text-navy-dark">{currentFlashcard.word}</h3>
                  <p className="text-xs text-slate-400">[{currentFlashcard.pronunciationGuide}]</p>
                </div>
                <div className="space-y-1 text-xs text-slate-800">
                  <p><strong>Meaning:</strong> {currentFlashcard.simpleMeaning}</p>
                  <p className="text-navy-DEFAULT font-bold">🗣️ Roman Hindi: {currentFlashcard.romanHindiMeaning}</p>
                </div>
                <div className="text-xs text-slate-600 pt-2 border-t border-slate-100 space-y-1">
                  <p><strong>Example:</strong> "{currentFlashcard.dailyLifeExample}"</p>
                  <p className="text-slate-500"><strong>Practice:</strong> "{currentFlashcard.practiceSentence}"</p>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <AudioButton text={currentFlashcard.word} size="sm" />
              <span>Tap to Flip</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevFlashcard}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 flex items-center gap-1.5"
            >
              <ArrowLeft size={14} /> Previous
            </button>
            <button
              onClick={handleNextFlashcard}
              className="px-5 py-2 rounded-xl bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark flex items-center gap-1.5 shadow-soft"
            >
              Next Word <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* 5. Revision Test Mode */}
      {activeTab === 'revision' && currentTestWord && (
        <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-6">
          {!testFinished ? (
            <>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-navy-DEFAULT">
                  Question {testQuestionIdx + 1} of {testPool.length}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Score: {testScore}
                </span>
              </div>

              <div className="space-y-2 text-center py-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Choose the correct meaning for:
                </span>
                <h3 className="text-2xl font-display font-black text-navy-dark">
                  "{currentTestWord.word}"
                </h3>
                <p className="text-xs text-slate-500 font-mono">[{currentTestWord.pronunciationGuide}]</p>
              </div>

              <div className="space-y-2.5">
                {[
                  currentTestWord.simpleMeaning,
                  'Completely unrelated action or opposite meaning',
                  'To hesitate or delay without any reason',
                  'A very complicated technical definition'
                ].map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => handleAnswerTest(optIdx)}
                    disabled={selectedTestAnswer !== null}
                    className={`w-full p-3.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                      selectedTestAnswer === optIdx
                        ? optIdx === 0
                          ? 'bg-sky-light/50 border-sky-DEFAULT text-navy-dark font-bold'
                          : 'bg-rose-50 border-rose-300 text-rose-800'
                        : 'bg-surface-100 border-slate-200 hover:border-sky-DEFAULT text-slate-800'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center space-y-4 py-4">
              <div className="w-16 h-16 rounded-full bg-sky-light text-navy-dark flex items-center justify-center mx-auto text-2xl font-black">
                {testScore}/{testPool.length}
              </div>
              <h3 className="text-xl font-display font-black text-navy-dark">
                Revision Test Completed!
              </h3>
              <p className="text-xs text-slate-500">
                Great job reviewing your daily vocabulary words! You earned +30 XP.
              </p>
              <button
                onClick={handleRestartTest}
                className="px-6 py-2.5 rounded-xl bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark shadow-soft"
              >
                Retake Revision Test
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
