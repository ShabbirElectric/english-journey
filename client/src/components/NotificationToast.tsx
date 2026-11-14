import React from 'react';
import { Sparkles } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export const NotificationToast: React.FC = () => {
  const { recentNotification } = useLearning();

  if (!recentNotification) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="bg-navy-dark text-white px-4 py-3 rounded-xl shadow-soft-lg flex items-center gap-3 border border-sky-DEFAULT/30">
        <div className="w-8 h-8 rounded-lg bg-sky-DEFAULT/20 text-sky-DEFAULT flex items-center justify-center">
          <Sparkles size={18} />
        </div>
        <p className="text-sm font-medium pr-2">{recentNotification}</p>
      </div>
    </div>
  );
};
