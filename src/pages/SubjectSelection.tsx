
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import SubjectCard from '../components/SubjectCard';
import { Calculator, Atom, GraduationCap, BookOpen, BookText, Pencil } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const SubjectSelection = () => {
  const navigate = useNavigate();
  const { studentName, selectedGrade } = useAppContext();
  
  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <div className="staxed-container py-6">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="text-gray-300">
            {studentName && `${studentName}, `}{selectedGrade} Grade
          </div>
        </div>
      </div>
      
      <main className="flex-grow staxed-container py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-12">Choose a Subject</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SubjectCard 
              subject="Mathematics"
              icon={<Calculator className="h-8 w-8 text-white" />}
              color="bg-blue-600/30"
            />
            <SubjectCard 
              subject="Science"
              icon={<Atom className="h-8 w-8 text-white" />}
              color="bg-green-600/30"
            />
            <SubjectCard 
              subject="Social Studies"
              icon={<GraduationCap className="h-8 w-8 text-white" />}
              color="bg-amber-600/30"
            />
            <SubjectCard 
              subject="English"
              icon={<BookOpen className="h-8 w-8 text-white" />}
              color="bg-purple-600/30"
            />
            <SubjectCard 
              subject="Hindi"
              icon={<BookText className="h-8 w-8 text-white" />}
              color="bg-red-600/30"
            />
            <SubjectCard 
              subject="Kannada"
              icon={<Pencil className="h-8 w-8 text-white" />}
              color="bg-teal-600/30"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubjectSelection;
