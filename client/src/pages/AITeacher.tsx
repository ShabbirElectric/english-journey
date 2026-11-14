import React, { useState, useEffect, useRef } from 'react';
import {
  Bot,
  Send,
  Mic,
  MicOff,
  Volume2,
  Sparkles,
  Award,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  RotateCcw,
  Zap,
  Info,
  Coffee,
  Briefcase,
  Users,
  HelpCircle,
  PhoneCall,
  ShoppingBag,
  AlertTriangle,
  BookOpen,
  Trash2,
  ArrowRight
} from 'lucide-react';
import { apiService, ChatMessage, GrammarMistakeCorrection } from '../services/apiService';
import { speechService } from '../services/speechService';
import { useLearning } from '../context/LearningContext';

export const AITeacher: React.FC = () => {
  const { profile, addXP, recordMistake, clearMistake } = useLearning();

  const [activeTab, setActiveTab] = useState<'chat' | 'mistakes'>('chat');

  const [messages, setMessages] = useState<Array<ChatMessage & { corrections?: GrammarMistakeCorrection[]; note?: string }>>([
    {
      role: 'assistant',
      content: `Hello ${profile.displayName}! 👋 I'm **Coach Sarah**, your friendly AI English teacher.\n\nWe are starting right at the **Medium Level**—focusing entirely on **everyday English that people actually use in daily conversations**.\n\nHere is how we will practice:\n1. Speak or type to me naturally, just like with a friend or colleague.\n2. Don't worry about being perfect! I will gently explain any slip-ups in simple Roman Hindi.\n3. I will track your repeated mistakes so you can practice them until you feel 100% confident.\n\nHow was your day today? Or pick any topic below to get started!`
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [serverHealth, setServerHealth] = useState<{ status: string; aiProvider?: string; apiKeyConfigured?: boolean } | null>(null);

  // Personalized practice test state (in Mistakes tab)
  const [activeQuizQuestionIdx, setActiveQuizQuestionIdx] = useState(0);
  const [selectedPracticeOption, setSelectedPracticeOption] = useState<number | null>(null);
  const [practiceQuizScore, setPracticeQuizScore] = useState(0);
  const [practiceQuizFinished, setPracticeQuizFinished] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    apiService.checkHealth().then(setServerHealth);
  }, []);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const historyPayload = messages.map(m => ({ role: m.role, content: m.content }));
      const response = await apiService.sendChatMessage(text, historyPayload, profile.currentLevel || 'Medium');

      // Record any detected mistakes in user's profile
      if (response.corrections && response.corrections.length > 0) {
        response.corrections.forEach(corr => {
          recordMistake({
            original: corr.original,
            corrected: corr.corrected,
            whatWasWrong: corr.whatWasWrong,
            romanHindi: corr.romanHindiExplanation || 'Sahi bolne ke liye is rule ka dhyaan rakhein.'
          });
        });
      }

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: response.reply,
          corrections: response.corrections,
          note: response.note
        }
      ]);

      // Speak assistant message automatically if short
      if (response.reply.length < 220) {
        speechService.speak(response.reply.replace(/[*#]/g, ''), 0.95);
      }

      addXP(15, 'Daily Practice with Coach Sarah');
    } catch (err) {
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleVoiceDictation = () => {
    if (isListening) {
      speechService.stopListening();
      setIsListening(false);
    } else {
      const started = speechService.startListening(
        (transcript, isFinal) => {
          setInputMessage(transcript);
          if (isFinal) {
            speechService.stopListening();
            setIsListening(false);
          }
        },
        () => {
          setIsListening(false);
        }
      );
      if (started) {
        setIsListening(true);
      }
    }
  };

  const handleQuickPrompt = (promptText: string) => {
    setInputMessage(promptText);
    handleSendMessage(promptText);
  };

  // 14 Daily conversation topics requested by the user
  const dailyTopicPrompts = [
    { label: 'Daily Routine', text: "Let's talk about my daily routine and morning habits.", icon: Coffee },
    { label: 'Talking with Friends', text: "Hey! How was your day? What kept you busy today?", icon: Users },
    { label: 'Work & Studies', text: "Can we practice talking about my office tasks and meeting deadlines?", icon: Briefcase },
    { label: 'Ordering Food', text: "Let's do a roleplay where I order coffee and food at a cafe.", icon: ShoppingBag },
    { label: 'Expressing Opinions', text: "How can I politely agree or disagree in team discussions?", icon: HelpCircle },
    { label: 'Phone Conversations', text: "Let's practice a realistic phone call resolving a delayed delivery.", icon: PhoneCall },
  ];

  // Personalised practice questions based on common logged mistakes
  const personalisedQuestions = [
    {
      prompt: 'Which sentence correctly describes an action that happened yesterday?',
      options: [
        'I saw my college friend yesterday during lunch.',
        'I have seen my college friend yesterday during lunch.',
        'I seeing my college friend yesterday.',
        'I was saw my college friend yesterday.'
      ],
      correctIndex: 0,
      rule: 'With "yesterday" (finished past time), always use Past Simple (V2: saw), never Present Perfect (have seen).',
      romanHindi: 'Yesterday beete hue waqt ko darshata hai, isliye seedha "I saw" aayega.'
    },
    {
      prompt: 'How should you naturally state your agreement in everyday English?',
      options: [
        'I completely agree with your proposal.',
        'I am completely agree with your proposal.',
        'I am agreed with your proposal.',
        'Me also agree proposal.'
      ],
      correctIndex: 0,
      rule: '"Agree" is already an active verb. Do not place "am" before it.',
      romanHindi: '"Agree" khud ek kriya (verb) hai. "I agree" bolein, "I am agree" nahi.'
    },
    {
      prompt: 'Choose the correct negative sentence for a third-person singular subject:',
      options: [
        'She doesn\'t usually drink sweet tea.',
        'She don\'t usually drink sweet tea.',
        'She not drink sweet tea.',
        'She isn\'t drink sweet tea.'
      ],
      correctIndex: 0,
      rule: 'Use "doesn\'t" with He / She / It in Present Simple.',
      romanHindi: 'He / She ke sath negative mein "doesn\'t" lagta hai, "don\'t" nahi.'
    }
  ];

  const handlePracticeAnswer = (optionIdx: number) => {
    setSelectedPracticeOption(optionIdx);
    const q = personalisedQuestions[activeQuizQuestionIdx];
    if (optionIdx === q.correctIndex) {
      setPracticeQuizScore(prev => prev + 1);
    }
  };

  const handleNextPracticeQuestion = () => {
    setSelectedPracticeOption(null);
    if (activeQuizQuestionIdx < personalisedQuestions.length - 1) {
      setActiveQuizQuestionIdx(prev => prev + 1);
    } else {
      setPracticeQuizFinished(true);
      addXP(30, 'Completed Personalised Practice Session');
    }
  };

  const handleRestartPracticeQuiz = () => {
    setActiveQuizQuestionIdx(0);
    setSelectedPracticeOption(null);
    setPracticeQuizScore(0);
    setPracticeQuizFinished(false);
  };

  const currentMistakesList = profile.repeatedMistakes || [];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* 1. Header Banner in Dark Navy & Sky Blue */}
      <div className="bg-gradient-to-r from-navy-dark via-navy to-[#1B3B66] text-white p-6 sm:p-8 rounded-2xl shadow-soft-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-sky-light border border-sky-DEFAULT/20">
            <Bot size={14} className="text-sky-DEFAULT" /> 24/7 AI English Conversation Partner
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-black tracking-tight">
            Coach Sarah – AI English Teacher
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Practice everyday spoken English. Coach Sarah converses in natural Medium-level English, gently explains mistakes with simple Roman Hindi, tracks your repeated slips, and gives personalised practice!
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-sky-DEFAULT/20 text-center flex-shrink-0 min-w-[200px]">
          <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold block mb-1">
            Current Level
          </span>
          <div className="text-2xl font-display font-black text-white">
            {profile.currentLevel || 'Medium'}
          </div>
          <span className="text-[11px] text-sky-light mt-1 block font-medium">
            Roman Hindi Explanations Active
          </span>
        </div>
      </div>

      {/* Tabs: Live Chat vs Tracked Mistakes & Personalised Practice */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'chat'
                ? 'bg-navy-DEFAULT text-white shadow-soft'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Bot size={14} />
            <span>Live Chat with Coach Sarah</span>
          </button>
          <button
            onClick={() => setActiveTab('mistakes')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'mistakes'
                ? 'bg-navy-DEFAULT text-white shadow-soft border border-sky-DEFAULT'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <AlertTriangle size={14} className="text-amber-500" />
            <span>Tracked Mistakes & Personalised Practice</span>
            {currentMistakesList.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-sky-light text-navy-dark text-[10px] font-black">
                {currentMistakesList.length}
              </span>
            )}
          </button>
        </div>

        <span className="text-xs text-slate-500 font-medium">
          Diverse answers accepted when communicative & correct
        </span>
      </div>

      {/* ========================================================
          TAB 1: LIVE CHAT INTERFACE
      ======================================================== */}
      {activeTab === 'chat' && (
        <div className="space-y-6">
          {/* Quick Real-Life Conversation Topic Pills */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft-sm space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Choose a Real-Life Conversation Starter:
            </span>
            <div className="flex flex-wrap gap-2">
              {dailyTopicPrompts.map((topic, idx) => {
                const Icon = topic.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => handleQuickPrompt(topic.text)}
                    className="px-3 py-1.5 rounded-xl bg-surface-100 hover:bg-sky-light/50 border border-slate-200 text-xs font-bold text-navy-dark flex items-center gap-1.5 transition-colors"
                  >
                    <Icon size={14} className="text-navy-DEFAULT" />
                    <span>{topic.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Chat Interface Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-soft-sm overflow-hidden flex flex-col h-[560px]">
            {/* Chat Messages Log */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {messages.map((msg, index) => {
                const isUser = msg.role === 'user';

                return (
                  <div
                    key={index}
                    className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isUser && (
                      <div className="w-8 h-8 rounded-full bg-navy-dark text-sky-DEFAULT flex items-center justify-center flex-shrink-0 font-black text-xs shadow-soft">
                        <Bot size={16} />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 space-y-2 ${
                        isUser
                          ? 'bg-navy-DEFAULT text-white rounded-tr-none'
                          : 'bg-surface-100 text-navy-dark rounded-tl-none border border-slate-200'
                      }`}
                    >
                      {/* Speaker name label */}
                      <div className="flex items-center justify-between text-[11px] font-bold opacity-75">
                        <span>{isUser ? profile.displayName : 'Coach Sarah'}</span>
                        {!isUser && (
                          <button
                            onClick={() => speechService.speak(msg.content.replace(/[*#]/g, ''), 0.95)}
                            className="p-1 hover:text-sky-DEFAULT text-navy-dark"
                            title="Listen to this message"
                          >
                            <Volume2 size={14} />
                          </button>
                        )}
                      </div>

                      {/* Message body */}
                      <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-normal">
                        {msg.content}
                      </div>

                      {/* Friendly Corrections Card */}
                      {msg.corrections && msg.corrections.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-slate-200/80 space-y-2 text-xs">
                          <span className="font-bold text-navy-DEFAULT flex items-center gap-1.5">
                            <Sparkles size={14} className="text-sky-DEFAULT" /> Friendly Phrasing Tip (Roman Hindi):
                          </span>
                          {msg.corrections.map((corr, cIdx) => (
                            <div key={cIdx} className="p-2.5 rounded-xl bg-white border border-slate-200 text-navy-dark space-y-1">
                              <p className="line-through text-slate-500">"{corr.original}"</p>
                              <p className="font-extrabold text-navy-DEFAULT">Say: "{corr.corrected}"</p>
                              {corr.whatWasWrong && (
                                <p className="text-[11px] text-slate-600"><strong>Note:</strong> {corr.whatWasWrong}</p>
                              )}
                              {corr.romanHindiExplanation && (
                                <p className="text-[11px] text-navy-DEFAULT font-semibold">🗣️ <strong>Hindi:</strong> {corr.romanHindiExplanation}</p>
                              )}
                              {corr.naturalAlternative && (
                                <p className="text-[11px] text-sky-dark font-medium">✨ Natural: "{corr.naturalAlternative}"</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {isUser && (
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-navy-DEFAULT/40">
                        <img
                          src={profile.avatarUrl}
                          alt={profile.displayName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex items-center gap-3 text-slate-400 text-xs font-bold pl-2">
                  <div className="w-8 h-8 rounded-full bg-navy-dark text-sky-DEFAULT flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <span className="flex items-center gap-1.5 text-navy-dark">
                    <Sparkles size={14} className="animate-spin text-sky-DEFAULT" />
                    Coach Sarah is thinking...
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Controls Bar */}
            <div className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2">
              <button
                onClick={handleToggleVoiceDictation}
                className={`p-2.5 rounded-xl transition-all ${
                  isListening
                    ? 'bg-rose-500 text-white animate-pulse'
                    : 'bg-surface-100 text-navy-dark hover:bg-sky-light/50 border border-slate-200'
                }`}
                title={isListening ? 'Stop listening' : 'Speak your message'}
              >
                {isListening ? <MicOff size={18} /> : <Mic size={18} />}
              </button>

              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
                placeholder="Type your message to Coach Sarah in everyday English..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-navy-dark focus:ring-2 focus:ring-sky-DEFAULT/40 outline-none"
              />

              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isLoading}
                className="px-4 py-2.5 rounded-xl bg-navy-DEFAULT text-white font-bold text-xs flex items-center gap-1.5 hover:bg-navy-dark transition-colors shadow-soft disabled:opacity-50"
              >
                <Send size={15} />
                <span className="hidden sm:inline">Send</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 2: TRACKED REPEATED MISTAKES & PERSONALISED PRACTICE
      ======================================================== */}
      {activeTab === 'mistakes' && (
        <div className="space-y-6">
          {/* 1. Tracked Mistakes Log */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-navy-dark">
                <AlertTriangle size={18} className="text-amber-500" />
                <h3 className="font-display font-extrabold text-base">
                  My Tracked Slip-ups & Common Mistakes ({currentMistakesList.length})
                </h3>
              </div>
              <span className="text-xs text-slate-500">
                Automatically logged from your writing & speaking sessions
              </span>
            </div>

            {currentMistakesList.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentMistakesList.map((m) => (
                  <div key={m.id} className="p-4 rounded-xl bg-surface-100 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-extrabold">
                        Occurred {m.count}x
                      </span>
                      <button
                        onClick={() => clearMistake(m.id)}
                        className="text-slate-400 hover:text-rose-500 p-1"
                        title="Mark as Mastered / Remove"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>

                    <div className="space-y-1 text-xs">
                      <p className="line-through text-slate-500">"{m.original}"</p>
                      <p className="font-extrabold text-navy-DEFAULT">Correct: "{m.corrected}"</p>
                      {m.whatWasWrong && (
                        <p className="text-[11px] text-slate-600"><strong>Issue:</strong> {m.whatWasWrong}</p>
                      )}
                      <p className="text-[11px] text-navy-DEFAULT font-semibold">🗣️ <strong>Hindi:</strong> {m.romanHindi}</p>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab('chat');
                        handleQuickPrompt(`Coach Sarah, could we practice sentences to make sure I don't say "${m.original}"?`);
                      }}
                      className="w-full mt-2 py-1.5 rounded-lg bg-white border border-slate-200 text-navy-dark hover:border-sky-DEFAULT text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Practice this in Live Chat</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-slate-500 text-xs">
                <CheckCircle2 size={32} className="text-navy-DEFAULT mx-auto mb-2" />
                <p className="font-bold text-navy-dark">No repeated mistakes logged yet!</p>
                <p className="mt-1">As you chat and write, Coach Sarah will track any tricky patterns right here.</p>
              </div>
            )}
          </div>

          {/* 2. Interactive Personalised Practice Quiz */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-navy-dark">
                <Sparkles size={18} className="text-sky-DEFAULT" />
                <h3 className="font-display font-extrabold text-base">
                  Personalised Practice Drill
                </h3>
              </div>
              <span className="text-xs font-bold text-navy-DEFAULT">
                Question {activeQuizQuestionIdx + 1} of {personalisedQuestions.length}
              </span>
            </div>

            {!practiceQuizFinished ? (
              <div className="space-y-4">
                <p className="text-sm font-bold text-navy-dark">
                  {personalisedQuestions[activeQuizQuestionIdx].prompt}
                </p>

                <div className="space-y-2.5">
                  {personalisedQuestions[activeQuizQuestionIdx].options.map((opt, optIdx) => {
                    const isSelected = selectedPracticeOption === optIdx;
                    const isCorrect = optIdx === personalisedQuestions[activeQuizQuestionIdx].correctIndex;
                    const showFeedback = selectedPracticeOption !== null;

                    let btnClass = 'bg-surface-100 border-slate-200 text-slate-800 hover:border-sky-DEFAULT';
                    if (showFeedback) {
                      if (isCorrect) {
                        btnClass = 'bg-sky-light/50 border-sky-DEFAULT text-navy-dark font-extrabold';
                      } else if (isSelected) {
                        btnClass = 'bg-rose-50 border-rose-300 text-rose-800 font-bold';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handlePracticeAnswer(optIdx)}
                        disabled={selectedPracticeOption !== null}
                        className={`w-full p-3.5 rounded-xl border text-xs text-left transition-all ${btnClass}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {selectedPracticeOption !== null && (
                  <div className="p-4 rounded-xl bg-sky-light/30 border border-sky-DEFAULT/30 space-y-2 animate-fadeIn">
                    <p className="text-xs font-bold text-navy-dark">
                      {selectedPracticeOption === personalisedQuestions[activeQuizQuestionIdx].correctIndex
                        ? '✓ Correct! Excellent application of the rule.'
                        : '✕ Not quite. Review the golden rule below:'}
                    </p>
                    <p className="text-xs text-slate-700">
                      <strong>Rule:</strong> {personalisedQuestions[activeQuizQuestionIdx].rule}
                    </p>
                    <p className="text-xs text-navy-DEFAULT font-semibold">
                      🗣️ <strong>Hindi Tip:</strong> {personalisedQuestions[activeQuizQuestionIdx].romanHindi}
                    </p>

                    <button
                      onClick={handleNextPracticeQuestion}
                      className="w-full mt-2 py-2 rounded-xl bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark transition-colors shadow-soft"
                    >
                      {activeQuizQuestionIdx < personalisedQuestions.length - 1 ? 'Next Practice Question' : 'Finish Practice'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-sky-light text-navy-dark flex items-center justify-center mx-auto text-xl font-black">
                  {practiceQuizScore}/{personalisedQuestions.length}
                </div>
                <h4 className="font-display font-extrabold text-lg text-navy-dark">
                  Personalised Drill Complete!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  You earned +30 XP! Targeted practice on your common slip-ups is the fastest path to speaking without hesitation.
                </p>
                <button
                  onClick={handleRestartPracticeQuiz}
                  className="px-5 py-2.5 rounded-xl bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark shadow-soft"
                >
                  Retake Personalised Practice
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
