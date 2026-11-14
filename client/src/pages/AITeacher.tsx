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
  ShoppingBag
} from 'lucide-react';
import { apiService, ChatMessage, GrammarMistakeCorrection } from '../services/apiService';
import { speechService } from '../services/speechService';
import { useLearning } from '../context/LearningContext';

export const AITeacher: React.FC = () => {
  const { profile, addXP } = useLearning();

  const [messages, setMessages] = useState<Array<ChatMessage & { corrections?: GrammarMistakeCorrection[]; note?: string }>>([
    {
      role: 'assistant',
      content: `Hello ${profile.displayName}! 👋 I'm **Coach Sarah**, your personal English conversation tutor.\n\nWe're starting at the **Medium Level**—focusing entirely on **everyday English that people actually use**.\n\nI'm here to chat with you like a friendly native speaker, gently point out corrections in simple Roman Hindi, and help you speak with total confidence!\n\nHow was your day today? Or would you like to practice one of the daily topics below?`
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [serverHealth, setServerHealth] = useState<{ status: string; aiProvider?: string; apiKeyConfigured?: boolean } | null>(null);

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

  // Daily conversation topics requested by the user
  const dailyTopicPrompts = [
    { label: 'Daily Routine', text: "Let's talk about my daily routine and morning habits.", icon: Coffee },
    { label: 'Work & Studies', text: "Can we practice talking about my work and daily tasks?", icon: Briefcase },
    { label: 'Talking with Friends', text: "How do I naturally catch up with an old friend?", icon: Users },
    { label: 'Ordering Food', text: "Let's do a roleplay where I order coffee and lunch at a cafe.", icon: ShoppingBag },
    { label: 'Expressing Opinions', text: "How can I politely agree or disagree in a meeting?", icon: HelpCircle },
    { label: 'Phone Conversations', text: "Let's practice a realistic phone call asking for help.", icon: PhoneCall },
  ];

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
            Practice everyday spoken English. Coach Sarah converses in natural Medium-level English, gently explains mistakes with simple Roman Hindi, and asks engaging follow-up questions.
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

      {/* 2. Quick Conversation Topic Pills */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft-sm space-y-2">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
          Choose a Real-Life Conversation Topic:
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

      {/* 3. Main Chat Interface Card */}
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

                  {/* Message body with Markdown support */}
                  <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-normal">
                    {msg.content}
                  </div>

                  {/* Corrections Card if detected */}
                  {msg.corrections && msg.corrections.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-200/80 space-y-2 text-xs">
                      <span className="font-bold text-navy-DEFAULT flex items-center gap-1.5">
                        <Sparkles size={14} className="text-sky-DEFAULT" /> Friendly Phrasing Tip (Roman Hindi):
                      </span>
                      {msg.corrections.map((corr, cIdx) => (
                        <div key={cIdx} className="p-2.5 rounded-xl bg-white border border-slate-200 text-navy-dark space-y-1">
                          <p className="line-through text-slate-500">"{corr.original}"</p>
                          <p className="font-extrabold text-navy-DEFAULT">Say: "{corr.corrected}"</p>
                          {corr.romanHindiExplanation && (
                            <p className="text-[11px] text-slate-600">🗣️ <strong>Kyun:</strong> {corr.romanHindiExplanation}</p>
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
          {/* Voice dictation button */}
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

          {/* Text input */}
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            placeholder="Type your message to Coach Sarah in everyday English..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-navy-dark focus:ring-2 focus:ring-sky-DEFAULT/40 focus:border-navy-DEFAULT outline-none"
          />

          {/* Send button */}
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
  );
};
