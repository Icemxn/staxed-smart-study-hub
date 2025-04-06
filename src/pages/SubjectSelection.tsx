
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import SubjectCard from '../components/SubjectCard';
import BackButton from '../components/BackButton';
import { Calculator, Atom, GraduationCap, BookOpen, BookText, Pencil } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const SubjectSelection = () => {
  const navigate = useNavigate();
  const { studentName, selectedGrade } = useAppContext();
  
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
          <div className="flex items-center gap-4">
            <div className="text-gray-300 hidden md:block">
              {studentName && `${studentName}, `}{selectedGrade} Grade
            </div>
            <BackButton to="/onboarding" label="Back" />
          </div>
        </div>
      </div>
      
      <main className="flex-grow staxed-container py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-3">Choose a Subject</h1>
            <p className="text-gray-300 text-lg">
              Select a subject to explore chapters and learning materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SubjectCard 
              subject="Mathematics"
              icon={<Calculator className="h-8 w-8 text-white" />}
              color="bg-blue-600/70"
            />
            <SubjectCard 
              subject="Science"
              icon={<Atom className="h-8 w-8 text-white" />}
              color="bg-green-600/70"
            />
            <SubjectCard 
              subject="Social Studies"
              icon={<GraduationCap className="h-8 w-8 text-white" />}
              color="bg-amber-600/70"
            />
            <SubjectCard 
              subject="English"
              icon={<BookOpen className="h-8 w-8 text-white" />}
              color="bg-purple-600/70"
            />
            <SubjectCard 
              subject="Hindi"
              icon={<BookText className="h-8 w-8 text-white" />}
              color="bg-red-600/70"
            />
            <SubjectCard 
              subject="Kannada"
              icon={<Pencil className="h-8 w-8 text-white" />}
              color="bg-teal-600/70"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubjectSelection;
