
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import StudyModeCard from '../components/StudyModeCard';
import { BookOpen, Presentation, FileText, HelpCircle, ArrowLeft } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const StudyModeSelection = () => {
  const navigate = useNavigate();
  const { selectedSubject, selectedChapter } = useAppContext();
  
  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <div className="staxed-container py-6">
        <div className="flex justify-between items-center">
          <Logo />
          <button 
            onClick={() => navigate('/chapters')}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Chapters</span>
          </button>
        </div>
      </div>
      
      <main className="flex-grow staxed-container py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-4">How would you like to study this chapter?</h1>
          <p className="text-center text-xl text-gray-300 mb-12">
            {selectedSubject} - Chapter {selectedChapter}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StudyModeCard 
              mode="Textbook"
              description="Read the chapter with every word clickable for AI explanations"
              icon={<BookOpen className="h-7 w-7 text-white" />}
              color="bg-blue-600/30"
            />
            <StudyModeCard 
              mode="Slides"
              description="Visual presentation with key concepts explained simply"
              icon={<Presentation className="h-7 w-7 text-white" />}
              color="bg-green-600/30"
            />
            <StudyModeCard 
              mode="Notes"
              description="Comprehensive notes highlighting important points"
              icon={<FileText className="h-7 w-7 text-white" />}
              color="bg-amber-600/30"
            />
            <StudyModeCard 
              mode="Quiz"
              description="Test your understanding with interactive questions"
              icon={<HelpCircle className="h-7 w-7 text-white" />}
              color="bg-purple-600/30"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudyModeSelection;
