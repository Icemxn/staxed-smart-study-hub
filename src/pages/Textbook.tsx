
import React from 'react';
import BackButton from '../components/BackButton';
import TextbookViewer from '../components/TextbookViewer';
import { useAppContext } from '../contexts/AppContext';

const Textbook = () => {
  const { selectedSubject, selectedChapter, studentName, selectedGrade } = useAppContext();
  const textbookUrl = "https://res.cloudinary.com/dorxkjuvd/raw/upload/v1745483571/G7C1_science_wyiuwi.html";

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <div className="staxed-container py-6 flex justify-between items-center">
        <BackButton to="/study-mode" label="Back" />
        <div className="flex items-center gap-2 text-white">
          <span>{studentName}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-300">{selectedGrade} Grade</span>
        </div>
      </div>
      
      <main className="flex-grow staxed-container py-6">
        <TextbookViewer 
          url={textbookUrl} 
          title={`${selectedSubject} - Chapter ${selectedChapter}`}
        />
      </main>
    </div>
  );
};

export default Textbook;
