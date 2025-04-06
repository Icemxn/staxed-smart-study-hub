
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import ChapterCard from '../components/ChapterCard';
import BackButton from '../components/BackButton';
import { useAppContext } from '../contexts/AppContext';

const ChapterSelection = () => {
  const navigate = useNavigate();
  const { selectedSubject } = useAppContext();
  
  const recentChapters = [
    { number: 3, title: "Advanced Topics I", progress: 75 },
    { number: 5, title: "Practical Applications", progress: 30 },
  ];
  
  const suggestedChapters = [
    { number: 4, title: "Advanced Topics II" },
    { number: 6, title: "Theory and Practice" },
  ];
  
  const allChapters = [
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
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-900/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-900/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="staxed-container py-6">
        <div className="flex justify-between items-center">
          <Logo />
          <BackButton to="/subjects" label="Back to Subjects" />
        </div>
      </div>
      
      <main className="flex-grow staxed-container py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">{selectedSubject}</h1>
          
          {/* Recently Studied */}
          {recentChapters.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-medium mb-4 flex items-center">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Recently Studied
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentChapters.map((chapter) => (
                  <ChapterCard 
                    key={chapter.number}
                    number={chapter.number}
                    title={chapter.title}
                    progress={chapter.progress}
                    isRecent={true}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Suggested Chapters */}
          {suggestedChapters.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-medium mb-4 flex items-center">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Suggested Next
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {suggestedChapters.map((chapter) => (
                  <ChapterCard 
                    key={chapter.number}
                    number={chapter.number}
                    title={chapter.title}
                    isSuggested={true}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* All Chapters */}
          <div>
            <h2 className="text-xl font-medium mb-4 flex items-center">
              <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
              All Chapters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allChapters.map((chapter) => (
                <ChapterCard 
                  key={chapter.number}
                  number={chapter.number}
                  title={chapter.title}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChapterSelection;
