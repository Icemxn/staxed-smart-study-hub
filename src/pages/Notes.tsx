
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import PDFViewer from '../components/PDFViewer';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

const NotesPage = () => {
  const navigate = useNavigate();
  const { selectedSubject, selectedChapter, studentName, selectedGrade } = useAppContext();
  
  // URL for notes PDF
  const notesPdfUrl = "https://drive.google.com/file/d/1HdTo5-TgTaPa66U1qf4pdy-g75xaDsbD/view?usp=drive_link";
  
  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      {/* Enhanced Background elements */}
      <div className="fixed inset-0 -z-10">
        {/* Premium dynamic background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-900/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-900/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-staxed-blue/5 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-purple-600/5 animate-pulse delay-700"></div>
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMTUiIHI9IjEiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjE1IiByPSIxIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIzMCIgcj0iMSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjMwIiByPSIxIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSI0NSIgcj0iMSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iNDUiIHI9IjEiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjQ1IiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="staxed-container py-6 flex justify-between items-center">
        <BackButton to="/study-mode" label="Back" />
        <div className="flex items-center gap-2 text-white">
          <span>{studentName}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-300">{selectedGrade} Grade</span>
        </div>
      </div>
      
      <main className="flex-grow staxed-container py-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-2">
              Notes
            </h1>
            <p className="text-xl text-gray-300 max-w-xl mx-auto">
              {selectedSubject} - Chapter {selectedChapter}
            </p>
          </div>
          
          <PDFViewer 
            pdfUrl={notesPdfUrl} 
            title="Comprehensive Notes"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotesPage;
