
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
        {/* Premium dynamic background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-staxed-blue/10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-purple-600/10 animate-pulse delay-700"></div>
        
        {/* Abstract shapes for premium feel */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl">
          <div className="absolute top-0 left-0 w-32 h-32 border border-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 border border-white/5 rounded-full transform translate-x-1/3 translate-y-1/4"></div>
        </div>
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMTUiIHI9IjEiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjE1IiByPSIxIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIzMCIgcj0iMSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjMwIiByPSIxIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSI0NSIgcj0iMSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iNDUiIHI9IjEiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjQ1IiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
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
              bgImage="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1074"
            />
            <StudyModeCard 
              mode="Slides"
              description="Visual presentation with key concepts explained simply"
              icon={<Presentation className="h-8 w-8 text-white" />}
              color="bg-gradient-to-br from-green-600/50 to-emerald-800/50"
              bgImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1470"
            />
            <StudyModeCard 
              mode="Notes"
              description="Comprehensive notes highlighting important points"
              icon={<FileText className="h-8 w-8 text-white" />}
              color="bg-gradient-to-br from-amber-600/50 to-amber-800/50"
              bgImage="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1470"
            />
            <StudyModeCard 
              mode="Quiz"
              description="Test your understanding with interactive questions"
              icon={<HelpCircle className="h-8 w-8 text-white" />}
              color="bg-gradient-to-br from-purple-600/50 to-purple-800/50"
              bgImage="https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?auto=format&fit=crop&q=80&w=1470"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudyModeSelection;
