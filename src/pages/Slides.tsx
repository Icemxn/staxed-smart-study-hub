
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import PDFViewer from '../components/PDFViewer';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

const SlidesPage = () => {
  const navigate = useNavigate();
  const { selectedSubject, selectedChapter, studentName, selectedGrade } = useAppContext();
  const isMobile = useIsMobile();
  
  // URL for slides PDF (only for Science)
  const slidesPdfUrl = "https://drive.google.com/file/d/1cwq2TlFnaYkNsbVT51xRNDPdhSTXj0bv/view?usp=drive_link";
  
  // Determine if we should show "Coming Soon" based on subject
  const isComingSoon = selectedSubject !== "Science";
  
  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      {/* Enhanced Background elements */}
      <div className="fixed inset-0 -z-10">
        {/* Premium dynamic background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-green-900/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-900/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-green-600/5 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-emerald-600/5 animate-pulse delay-700"></div>
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMTUiIHI9IjEiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjE1IiByPSIxIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIzMCIgcj0iMSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjMwIiByPSIxIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSI0NSIgcj0iMSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iNDUiIHI9IjEiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjQ1IiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="staxed-container py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <BackButton to="/study-mode" label="Back" />
        <div className="flex items-center gap-2 text-white bg-staxed-darkBlue/40 px-3 py-1 rounded-full text-sm">
          <span>{studentName}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-300">{selectedGrade} Grade</span>
        </div>
      </div>
      
      <main className="flex-grow staxed-container py-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent mb-2 text-3xl md:text-4xl lg:text-5xl">
              Slides
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
              {selectedSubject} - Chapter {selectedChapter}
            </p>
          </div>
          
          <PDFViewer 
            pdfUrl={isComingSoon ? null : slidesPdfUrl} 
            title="Visual Presentation"
            isComingSoon={isComingSoon}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SlidesPage;
