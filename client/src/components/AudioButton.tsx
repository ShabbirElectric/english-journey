import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { speechService } from '../services/speechService';

interface AudioButtonProps {
  text: string;
  rate?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  rate = 0.92,
  className = '',
  size = 'md',
  label
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      speechService.stopSpeaking();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    await speechService.speak(text, rate);
    setIsPlaying(false);
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22
  };

  return (
    <button
      onClick={handlePlay}
      title={isPlaying ? 'Stop listening' : 'Listen to natural pronunciation'}
      type="button"
      className={`inline-flex items-center gap-1.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-DEFAULT/40 ${
        isPlaying
          ? 'bg-navy-dark text-sky-DEFAULT shadow-sm ring-2 ring-sky-DEFAULT/50'
          : 'bg-sky-light text-navy-dark hover:bg-sky-DEFAULT/30 border border-sky-DEFAULT/30'
      } ${
        size === 'sm'
          ? 'px-2 py-1 text-[11px] font-semibold'
          : size === 'lg'
          ? 'px-4 py-2 text-sm font-bold'
          : 'px-3 py-1.5 text-xs font-semibold'
      } ${className}`}
    >
      {isPlaying ? (
        <VolumeX size={iconSizes[size]} className="animate-pulse text-sky-DEFAULT" />
      ) : (
        <Volume2 size={iconSizes[size]} className="text-navy-DEFAULT" />
      )}
      {label && <span>{isPlaying ? 'Playing...' : label}</span>}
    </button>
  );
};
