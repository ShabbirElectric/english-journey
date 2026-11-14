import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { NotificationToast } from './components/NotificationToast';

import { Dashboard } from './pages/Dashboard';
import { PlacementTest } from './pages/PlacementTest';
import { GrammarAcademy } from './pages/GrammarAcademy';
import { GrammarLessonView } from './pages/GrammarLessonView';
import { ThirtyDayChallenge } from './pages/ThirtyDayChallenge';
import { ChallengeDayView } from './pages/ChallengeDayView';
import { VocabularyBuilder } from './pages/VocabularyBuilder';
import { SpeakingStudio } from './pages/SpeakingStudio';
import { ReadingRoom } from './pages/ReadingRoom';
import { WritingStudio } from './pages/WritingStudio';
import { AITeacher } from './pages/AITeacher';
import { TestsAssessments } from './pages/TestsAssessments';
import { TestRunner } from './pages/TestRunner';
import { Profile } from './pages/Profile';

import { getLessonBySlug } from './data/grammarAcademyData';
import { getChallengeDay } from './data/challengeData';
import { TestCatalogItem } from './data/assessmentsData';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sub-view parameters
  const [selectedLessonSlug, setSelectedLessonSlug] = useState<string | null>(null);
  const [selectedChallengeDayNum, setSelectedChallengeDayNum] = useState<number | null>(null);
  const [selectedTest, setSelectedTest] = useState<TestCatalogItem | null>(null);

  const handleNavigate = (tab: string, slugOrDay?: string | number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (tab === 'grammar-lesson' && typeof slugOrDay === 'string') {
      setSelectedLessonSlug(slugOrDay);
      setActiveTab('grammar-lesson');
    } else if (tab === 'challenge' && typeof slugOrDay === 'number') {
      setSelectedChallengeDayNum(slugOrDay);
      setActiveTab('challenge-day');
    } else {
      setActiveTab(tab);
    }
  };

  const handleSelectGrammarLesson = (slug: string) => {
    setSelectedLessonSlug(slug);
    setActiveTab('grammar-lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectChallengeDay = (dayNum: number) => {
    setSelectedChallengeDayNum(dayNum);
    setActiveTab('challenge-day');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartTest = (test: TestCatalogItem) => {
    setSelectedTest(test);
    setActiveTab('test-runner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F8FC] text-slate-800 font-sans flex flex-col selection:bg-sky-light selection:text-navy-dark">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="flex-1 max-w-7xl w-full mx-auto flex">
        {/* Navigation Sidebar in Dark Navy */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={handleNavigate}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Main Content Pane */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {activeTab === 'dashboard' && (
            <Dashboard onNavigate={handleNavigate} />
          )}

          {activeTab === 'placement' && (
            <PlacementTest onNavigate={handleNavigate} />
          )}

          {activeTab === 'grammar' && (
            <GrammarAcademy onSelectLesson={handleSelectGrammarLesson} />
          )}

          {activeTab === 'grammar-lesson' && selectedLessonSlug && (
            <GrammarLessonView
              lesson={getLessonBySlug(selectedLessonSlug) || getLessonBySlug('sentence-structure')!}
              onBack={() => handleNavigate('grammar')}
            />
          )}

          {activeTab === 'challenge' && (
            <ThirtyDayChallenge onSelectDay={handleSelectChallengeDay} />
          )}

          {activeTab === 'challenge-day' && selectedChallengeDayNum && (
            <ChallengeDayView
              dayData={getChallengeDay(selectedChallengeDayNum) || getChallengeDay(1)!}
              onBack={() => handleNavigate('challenge')}
              onNavigateToNextDay={
                selectedChallengeDayNum < 30
                  ? () => handleSelectChallengeDay(selectedChallengeDayNum + 1)
                  : undefined
              }
            />
          )}

          {activeTab === 'vocabulary' && (
            <VocabularyBuilder />
          )}

          {activeTab === 'speaking' && (
            <SpeakingStudio onNavigateToAi={() => handleNavigate('ai-tutor')} />
          )}

          {activeTab === 'reading' && (
            <ReadingRoom />
          )}

          {activeTab === 'writing' && (
            <WritingStudio />
          )}

          {activeTab === 'ai-tutor' && (
            <AITeacher />
          )}

          {activeTab === 'assessments' && (
            <TestsAssessments onStartTest={handleStartTest} />
          )}

          {activeTab === 'test-runner' && selectedTest && (
            <TestRunner
              test={selectedTest}
              onBack={() => handleNavigate('assessments')}
              onNavigateToLesson={handleSelectGrammarLesson}
            />
          )}

          {activeTab === 'profile' && (
            <Profile />
          )}
        </main>
      </div>

      {/* Floating System Notifications */}
      <NotificationToast />
    </div>
  );
}
export default App;
