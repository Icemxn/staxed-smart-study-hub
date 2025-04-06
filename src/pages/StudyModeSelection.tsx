
import React from 'react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import StudyModeCard from '../components/StudyModeCard';
import BackButton from '../components/BackButton';
import { BookOpen, Presentation, FileText, HelpCircle } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const StudyModeSelection = () => {
  const { selectedSubject, selectedChapter } = useAppContext();
  
  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-900/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-900/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="staxed-container py-6">
        <div className="flex justify-between items-center">
          <Logo />
          <BackButton to="/chapters" label="Back to Chapters" />
        </div>
      </div>
      
      <main className="flex-grow staxed-container py-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-2">
              How would you like to study this chapter?
            </h1>
            <p className="text-xl text-gray-300">
              {selectedSubject} - Chapter {selectedChapter}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StudyModeCard 
              mode="Textbook"
              description="Read the chapter with every word clickable for AI explanations"
              icon={<BookOpen className="h-8 w-8 text-white" />}
              color="bg-blue-600/40"
            />
            <StudyModeCard 
              mode="Slides"
              description="Visual presentation with key concepts explained simply"
              icon={<Presentation className="h-8 w-8 text-white" />}
              color="bg-green-600/40"
            />
            <StudyModeCard 
              mode="Notes"
              description="Comprehensive notes highlighting important points"
              icon={<FileText className="h-8 w-8 text-white" />}
              color="bg-amber-600/40"
            />
            <StudyModeCard 
              mode="Quiz"
              description="Test your understanding with interactive questions"
              icon={<HelpCircle className="h-8 w-8 text-white" />}
              color="bg-purple-600/40"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudyModeSelection;
