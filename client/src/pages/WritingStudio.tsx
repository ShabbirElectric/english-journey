import React, { useState } from 'react';
import {
  PenTool,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Award,
  Layers,
  RotateCcw,
  BookOpen,
  ArrowRight,
  MessageSquare,
  Bot
} from 'lucide-react';
import { writingPromptsList } from '../data/writingData';
import { apiService, WritingEvaluationResponse } from '../services/apiService';
import { useLearning } from '../context/LearningContext';

export const WritingStudio: React.FC = () => {
  const { profile, saveWritingSubmission, unlockBadge, recordMistake } = useLearning();

  const [selectedPromptId, setSelectedPromptId] = useState(writingPromptsList[0].id);
  const activePrompt = writingPromptsList.find(p => p.id === selectedPromptId) || writingPromptsList[0];

  const [text, setText] = useState(activePrompt.sampleStarter);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<WritingEvaluationResponse | null>(null);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  const handleSelectPrompt = (id: string) => {
    setSelectedPromptId(id);
    const p = writingPromptsList.find(item => item.id === id);
    if (p) {
      setText(p.sampleStarter);
    }
    setEvaluationResult(null);
  };

  const handleEvaluate = async () => {
    if (!text.trim() || wordCount < 5) return;
    setIsEvaluating(true);

    try {
      const result = await apiService.evaluateWriting(
        text,
        activePrompt.genre,
        activePrompt.title,
        profile.currentLevel || 'Medium'
      );

      setEvaluationResult(result);
      if (result.writingCorrections && result.writingCorrections.length > 0) {
        result.writingCorrections.forEach(c => {
          if (c.original !== c.corrected && c.whatWasWrong && !c.whatWasWrong.includes('sound') && !c.whatWasWrong.includes('clear')) {
            recordMistake({
              original: c.original,
              corrected: c.corrected,
              whatWasWrong: c.whatWasWrong,
              romanHindi: c.romanHindiExplanation
            });
          }
        });
      }
      saveWritingSubmission({
        promptTitle: activePrompt.title,
        genre: activePrompt.genre,
        text,
        score: result.overallScore,
        feedback: result.structureFeedback,
        corrections: result.writingCorrections
      });
      unlockBadge('writing_craftsman');
    } catch (err) {
      console.error('Writing submission error:', err);
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Header Banner in Dark Navy & Sky Blue */}
      <div className="bg-gradient-to-r from-navy-dark via-navy to-[#1B3B66] text-white p-6 sm:p-8 rounded-2xl shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-sky-light border border-sky-DEFAULT/20">
            <PenTool size={14} className="text-sky-DEFAULT" /> Daily Writing Practice • AI Teacher Corrections
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight">
            Writing Studio & Daily Reflection
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Practice 5 sentences about your day, short paragraphs, experiences, opinions, and casual messages. Coach Sarah will check your writing and show: original, corrected, what was wrong, Roman Hindi explanation, and a natural alternative.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-sky-DEFAULT/20 text-center flex-shrink-0 min-w-[200px]">
          <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold block mb-1">
            Writing Submissions
          </span>
          <div className="text-3xl font-display font-black text-white">
            {profile.writingSubmissions.length} <span className="text-sm font-medium text-sky-light">Evaluated</span>
          </div>
          <span className="text-[11px] text-sky-light mt-1 block font-semibold">
            +40 XP per daily submission
          </span>
        </div>
      </div>

      {/* 2. Daily Writing Activities Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {writingPromptsList.map((prompt) => (
          <button
            key={prompt.id}
            onClick={() => handleSelectPrompt(prompt.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              selectedPromptId === prompt.id
                ? 'bg-navy-DEFAULT text-white shadow-soft border border-sky-DEFAULT'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>{prompt.title}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded ${
              selectedPromptId === prompt.id ? 'bg-sky-DEFAULT text-navy-dark font-extrabold' : 'bg-slate-100 text-slate-600'
            }`}>
              {prompt.genre}
            </span>
          </button>
        ))}
      </div>

      {/* 3. Editor & Instructions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-navy-DEFAULT block">
                  {activePrompt.genre} • Level {activePrompt.level}
                </span>
                <h3 className="font-display font-black text-lg text-navy-dark">
                  {activePrompt.title}
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-bold">
                {wordCount} words
              </span>
            </div>

            {/* Prompt instructions preview */}
            <div className="p-3.5 rounded-xl bg-surface-100 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <span className="font-bold text-navy-dark block">Activity Goal:</span>
              <p>{activePrompt.scenario}</p>
            </div>

            {/* Writing Textarea */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 block uppercase tracking-wider">
                Your Draft:
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={8}
                placeholder="Write your sentences here in English..."
                className="w-full p-4 rounded-xl border border-slate-200 text-sm leading-relaxed text-navy-dark focus:ring-2 focus:ring-sky-DEFAULT/40 focus:border-navy-DEFAULT outline-none transition-all resize-y"
              />
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setText(activePrompt.sampleStarter)}
                className="text-xs font-bold text-navy-DEFAULT hover:underline flex items-center gap-1"
              >
                <RotateCcw size={13} /> Reset to starter text
              </button>

              <button
                onClick={handleEvaluate}
                disabled={isEvaluating || wordCount < 5}
                className="px-6 py-3 rounded-xl bg-navy-DEFAULT text-white font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-navy-dark transition-all shadow-soft disabled:opacity-50"
              >
                {isEvaluating ? (
                  <>
                    <Sparkles size={16} className="animate-spin text-sky-DEFAULT" />
                    <span>Coach Sarah is reviewing...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Submit to AI Teacher for Feedback</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* AI Teacher Feedback Card (when submitted) */}
          {evaluationResult && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-dark text-sky-DEFAULT flex items-center justify-center font-black">
                    <Bot size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-navy-dark">
                      Coach Sarah's Writing Review
                    </h3>
                    <p className="text-xs text-slate-500">
                      Evaluated for everyday conversational clarity & natural flow
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-display font-black text-navy-DEFAULT">
                    {evaluationResult.overallScore} <span className="text-xs font-semibold text-slate-400">/ 10</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-light text-navy-dark font-bold">
                    {evaluationResult.estimatedLevel || 'Medium'} Level
                  </span>
                </div>
              </div>

              {/* 5-Item Detailed Corrections Section (User Requirement: Original, Corrected, What was wrong, Roman Hindi, Natural version) */}
              {evaluationResult.writingCorrections && evaluationResult.writingCorrections.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-display font-extrabold text-sm text-navy-dark flex items-center gap-2">
                    <AlertCircle size={16} className="text-navy-DEFAULT" />
                    Sentence-by-Sentence Breakdown & Corrections:
                  </h4>

                  <div className="space-y-3">
                    {evaluationResult.writingCorrections.map((corr, cIdx) => (
                      <div key={cIdx} className="p-4 rounded-xl border border-slate-200 bg-surface-100 space-y-2">
                        {/* 1. Original sentence */}
                        <div className="text-xs">
                          <span className="font-bold text-slate-500 block text-[10px] uppercase tracking-wider">1. Your Original Sentence:</span>
                          <p className="text-slate-800 line-through mt-0.5">"{corr.original}"</p>
                        </div>

                        {/* 2. Corrected sentence */}
                        <div className="text-xs pt-1 border-t border-slate-200">
                          <span className="font-bold text-navy-DEFAULT block text-[10px] uppercase tracking-wider">2. Corrected Sentence:</span>
                          <p className="text-navy-dark font-extrabold mt-0.5">"{corr.corrected}"</p>
                        </div>

                        {/* 3. What was wrong */}
                        <div className="text-xs pt-1 border-t border-slate-200">
                          <span className="font-bold text-slate-600 block text-[10px] uppercase tracking-wider">3. What was wrong:</span>
                          <p className="text-slate-700 mt-0.5">{corr.whatWasWrong}</p>
                        </div>

                        {/* 4. Simple Roman Hindi explanation */}
                        <div className="text-xs pt-1 border-t border-slate-200">
                          <span className="font-bold text-navy-DEFAULT block text-[10px] uppercase tracking-wider">4. Roman Hindi Explanation:</span>
                          <p className="text-navy-DEFAULT font-semibold mt-0.5">🗣️ {corr.romanHindiExplanation}</p>
                        </div>

                        {/* 5. More natural English version */}
                        <div className="text-xs pt-1 border-t border-slate-200">
                          <span className="font-bold text-sky-dark block text-[10px] uppercase tracking-wider">5. More Natural English Version:</span>
                          <p className="text-navy-dark font-bold mt-0.5">✨ "{corr.naturalAlternative}"</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Constructive feedback paragraph */}
              <div className="p-4 rounded-xl bg-sky-light/30 border border-sky-DEFAULT/30 space-y-1">
                <span className="text-xs font-bold text-navy-dark block">Coach Sarah's Summary:</span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {evaluationResult.structureFeedback}
                </p>
              </div>

              {/* Model Polished Answer */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Model Everyday Version:
                </span>
                <div className="p-4 rounded-xl bg-navy-dark text-white text-xs sm:text-sm leading-relaxed border border-navy-light/40 font-medium">
                  {evaluationResult.modelAnswer}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Instructions, Vocabulary Suggestions & Tips */}
        <div className="lg:col-span-1 space-y-6">
          {/* Prompt Guidelines */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm space-y-3">
            <div className="flex items-center gap-2 text-navy-dark">
              <BookOpen size={18} className="text-navy-DEFAULT" />
              <h3 className="font-display font-bold text-sm">
                Guidelines for this Activity
              </h3>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              {activePrompt.instructions.map((inst, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-navy-DEFAULT flex-shrink-0 mt-0.5" />
                  <span>{inst}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vocabulary Suggestions */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm space-y-3">
            <div className="flex items-center gap-2 text-navy-dark">
              <Sparkles size={18} className="text-sky-DEFAULT" />
              <h3 className="font-display font-bold text-sm">
                Useful Daily Expressions to Use
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Try including some of these words to make your sentences sound natural:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {activePrompt.vocabularySuggestions.map((vocab, vIdx) => (
                <button
                  key={vIdx}
                  onClick={() => setText(prev => `${prev} ${vocab}`)}
                  className="px-2.5 py-1 rounded-lg bg-surface-100 hover:bg-sky-light/50 border border-slate-200 text-xs font-bold text-navy-dark transition-colors"
                  title="Click to insert into your text"
                >
                  + {vocab}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Writing Strategy */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-navy-dark to-navy text-white space-y-2 border border-navy-light/40 shadow-soft">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-DEFAULT block">Daily Writing Habit:</span>
            <p className="text-xs text-slate-200 leading-relaxed">
              Writing just 5 sentences every evening forces your brain to recall everyday verbs, connectors, and tenses. If you do this for 30 days, your spoken confidence will skyrocket!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
