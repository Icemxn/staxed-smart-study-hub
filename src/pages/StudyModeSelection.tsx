
import React from 'react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import StudyModeCard from '../components/StudyModeCard';
import BackButton from '../components/BackButton';
import { BookOpen, Presentation, FileText, HelpCircle } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const StudyModeSelection = () => {
  const { selectedSubject, selectedChapter, studentName, selectedGrade } = useAppContext();
  
  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      {/* Enhanced Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-staxed-blue/10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-purple-600/10 animate-pulse delay-700"></div>
      </div>
      
      <div className="staxed-container py-6 flex justify-between items-center">
        <BackButton to="/chapters" label="Back" />
        <div className="flex items-center gap-2 text-white">
          <span>{studentName}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-300">{selectedGrade} Grade</span>
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
              color="bg-gradient-to-br from-blue-600/50 to-blue-800/50"
              bgImage="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1074"
            />
            <StudyModeCard 
              mode="Slides"
              description="Visual presentation with key concepts explained simply"
              icon={<Presentation className="h-8 w-8 text-white" />}
              color="bg-gradient-to-br from-green-600/50 to-emerald-800/50"
              bgImage="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1470"
            />
            <StudyModeCard 
              mode="Notes"
              description="Comprehensive notes highlighting important points"
              icon={<FileText className="h-8 w-8 text-white" />}
              color="bg-gradient-to-br from-amber-600/50 to-amber-800/50"
              bgImage="https://images.unsplash.com/photo-1606326608690-4e0281b1e588?auto=format&fit=crop&q=80&w=1470"
            />
            <StudyModeCard 
              mode="Quiz"
              description="Test your understanding with interactive questions"
              icon={<HelpCircle className="h-8 w-8 text-white" />}
              color="bg-gradient-to-br from-purple-600/50 to-purple-800/50"
              bgImage="https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&q=80&w=1470"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudyModeSelection;
