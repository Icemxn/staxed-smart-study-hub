
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import ChapterCard from '../components/ChapterCard';
import { ArrowLeft } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const ChapterSelection = () => {
  const navigate = useNavigate();
  const { selectedSubject } = useAppContext();
  
  const chapters = [
    { number: 1, title: "Introduction to Subject" },
    { number: 2, title: "Basic Concepts" },
    { number: 3, title: "Advanced Topics I" },
    { number: 4, title: "Advanced Topics II" },
    { number: 5, title: "Practical Applications" },
    { number: 6, title: "Theory and Practice" },
    { number: 7, title: "Case Studies" },
    { number: 8, title: "Modern Developments" },
    { number: 9, title: "Future Directions" },
    { number: 10, title: "Comprehensive Review" }
  ];
  
  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <div className="staxed-container py-6">
        <div className="flex justify-between items-center">
          <Logo />
          <button 
            onClick={() => navigate('/subjects')}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Subjects</span>
          </button>
        </div>
      </div>
      
      <main className="flex-grow staxed-container py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-2">Chapters</h1>
          <p className="text-xl text-gray-300 mb-8">{selectedSubject}</p>
          
          <div className="space-y-4">
            {chapters.map((chapter) => (
              <ChapterCard 
                key={chapter.number}
                number={chapter.number}
                title={chapter.title}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChapterSelection;
