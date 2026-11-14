import React, { useState } from 'react';
import {
  UserCheck,
  Award,
  BookOpen,
  Languages,
  FileText,
  Trash2,
  Plus,
  Flame,
  Zap,
  CheckCircle2,
  Edit2,
  Save,
  Volume2,
  Mic,
  BookMarked
} from 'lucide-react';
import { initialVocabularyBank } from '../data/vocabularyData';
import { AudioButton } from '../components/AudioButton';
import { useLearning } from '../context/LearningContext';
import { LearningLevel } from '../types';

export const Profile: React.FC = () => {
  const {
    profile,
    updateProfile,
    setCurrentLevel,
    toggleSaveWord,
    addPersonalNote,
    deletePersonalNote
  } = useLearning();

  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(profile.displayName);
  const [dailyGoalMins, setDailyGoalMins] = useState(profile.dailyGoalMins);
  const [bio, setBio] = useState(profile.bio || 'Starting my English journey from Medium level. Focused on daily conversations.');

  // Note creation state
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [showAddNote, setShowAddNote] = useState(false);

  const handleSaveProfile = () => {
    updateProfile({
      displayName,
      dailyGoalMins,
      bio
    });
    setIsEditing(false);
  };

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle.trim() || !newNoteContent.trim()) return;
    addPersonalNote(newNoteTitle, newNoteContent);
    setNewNoteTitle('');
    setNewNoteContent('');
    setShowAddNote(false);
  };

  // Saved vocabulary words
  const savedWordsList = initialVocabularyBank.filter(w => profile.savedWordIds.includes(w.id));

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* 1. Profile Header Card */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full ring-4 ring-sky-DEFAULT/30 overflow-hidden flex-shrink-0">
              <img
                src={profile.avatarUrl}
                alt={profile.displayName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              {isEditing ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 text-base font-bold text-navy-dark"
                  />
                  <input
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-navy-dark"
                    placeholder="Short bio"
                  />
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-display font-black text-navy-dark">
                      {profile.displayName}
                    </h1>
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-light text-navy-dark text-xs font-bold">
                      Level: {profile.currentLevel || 'Medium'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{profile.email}</p>
                  <p className="text-xs text-slate-600 mt-1 max-w-md">{profile.bio}</p>
                </>
              )}
            </div>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
            {isEditing ? (
              <button
                onClick={handleSaveProfile}
                className="px-4 py-2 rounded-xl bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark flex items-center gap-1.5 shadow-soft"
              >
                <Save size={14} /> Save Profile
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 flex items-center gap-1.5"
              >
                <Edit2 size={13} /> Edit Profile
              </button>
            )}

            <div className="flex items-center gap-3 text-xs font-bold mt-2">
              <span className="flex items-center gap-1 text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                <Flame size={14} className="fill-amber-500 text-amber-500" /> {profile.streakCount} Days Streak
              </span>
              <span className="flex items-center gap-1 text-navy-dark bg-sky-light px-2.5 py-1 rounded-full border border-sky-DEFAULT/30">
                <Zap size={14} className="fill-navy-DEFAULT text-navy-DEFAULT" /> {profile.totalXP} XP
              </span>
            </div>
          </div>
        </div>

        {/* Level and Goal Settings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs">
          {/* Level Switcher */}
          <div className="p-4 rounded-xl bg-surface-100 border border-slate-200 space-y-2">
            <span className="font-bold text-navy-dark block">Learning Difficulty Level:</span>
            <div className="flex flex-wrap gap-2">
              {(['Medium', 'Upper Medium', 'Hard'] as LearningLevel[]).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setCurrentLevel(lvl)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    profile.currentLevel === lvl
                      ? 'bg-navy-DEFAULT text-white shadow-soft'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-sky-DEFAULT'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Daily Goal */}
          <div className="p-4 rounded-xl bg-surface-100 border border-slate-200 space-y-2">
            <span className="font-bold text-navy-dark block">Daily Goal (Minutes):</span>
            <div className="flex gap-2">
              {[15, 20, 30, 45].map((mins) => (
                <button
                  key={mins}
                  onClick={() => updateProfile({ dailyGoalMins: mins })}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    profile.dailyGoalMins === mins
                      ? 'bg-navy-DEFAULT text-white shadow-soft'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-sky-DEFAULT'
                  }`}
                >
                  {mins}m
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Saved Vocabulary Bank */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-navy-dark">
            <Languages size={20} className="text-navy-DEFAULT" />
            <h3 className="font-display font-bold text-base">
              My Saved Vocabulary ({savedWordsList.length})
            </h3>
          </div>
          <span className="text-xs text-slate-400">Words saved for daily revision</span>
        </div>

        {savedWordsList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {savedWordsList.map((w) => (
              <div key={w.id} className="p-3.5 rounded-xl bg-surface-100 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-xs text-navy-dark">{w.word}</span>
                  <div className="flex items-center gap-1">
                    <AudioButton text={w.word} size="sm" />
                    <button
                      onClick={() => toggleSaveWord(w.id)}
                      className="text-amber-500 hover:text-slate-400 p-1"
                      title="Remove"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600"><strong>Meaning:</strong> {w.simpleMeaning}</p>
                <p className="text-[11px] text-navy-DEFAULT font-semibold">🗣️ {w.romanHindiMeaning}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-400 py-2">
            No words saved yet. Click the bookmark icon in the Vocabulary Builder to save words here!
          </p>
        )}
      </div>

      {/* 3. Personal Study Notes */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-navy-dark">
            <FileText size={20} className="text-navy-DEFAULT" />
            <h3 className="font-display font-bold text-base">
              Personal Study Notes & Rules
            </h3>
          </div>
          <button
            onClick={() => setShowAddNote(!showAddNote)}
            className="px-3 py-1.5 rounded-lg bg-navy-DEFAULT text-white text-xs font-bold hover:bg-navy-dark flex items-center gap-1 shadow-soft-sm"
          >
            <Plus size={14} /> Add Note
          </button>
        </div>

        {showAddNote && (
          <form onSubmit={handleCreateNote} className="p-4 rounded-xl bg-surface-100 border border-slate-200 space-y-3">
            <input
              type="text"
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)}
              placeholder="Note title (e.g. Actually vs Probably)"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold text-navy-dark"
              required
            />
            <textarea
              value={newNoteContent}
              onChange={(e) => setNewNoteContent(e.target.value)}
              placeholder="Write your personal grammar rule or daily reminder..."
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-navy-dark"
              required
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAddNote(false)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg bg-navy-DEFAULT text-white text-xs font-bold"
              >
                Save Note
              </button>
            </div>
          </form>
        )}

        <div className="space-y-3">
          {profile.personalNotes.map((note) => (
            <div key={note.id} className="p-4 rounded-xl bg-surface-100 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-display font-extrabold text-xs text-navy-dark">{note.title}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400">{note.date}</span>
                  <button
                    onClick={() => deletePersonalNote(note.id)}
                    className="text-slate-400 hover:text-rose-500"
                    title="Delete note"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
