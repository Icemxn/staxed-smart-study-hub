
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import { useAppContext } from '../contexts/AppContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import BackButton from '../components/BackButton';

const Onboarding = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { setStudentName, setSelectedGrade } = useAppContext();
  
  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setStudentName(name);
      setStep(2);
    }
  };
  
  const handleGradeSelect = (grade: "6th" | "7th" | "8th" | "9th" | "10th" | "11th" | "12th") => {
    setSelectedGrade(grade);
    navigate('/subjects');
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center animate-fade-in">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-900/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-purple-900/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full staxed-container py-6 flex justify-between items-center">
        <Logo />
        {step === 2 && (
          <button 
            onClick={() => setStep(1)}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
        )}
      </div>
      
      <div className="flex-grow flex items-center justify-center w-full px-4">
        <div className="staxed-card max-w-md w-full relative overflow-hidden">
          {/* Card background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-staxed-blue/10 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/10 to-transparent rounded-full blur-xl"></div>
          </div>
          
          {step === 1 ? (
            <div className="animate-fade-in relative z-10">
              <h2 className="text-center mb-8">What's your name?</h2>
              <form onSubmit={handleNameSubmit}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="staxed-input w-full mb-6"
                  required
                />
                <button type="submit" className="staxed-button-primary w-full group">
                  Continue <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          ) : (
            <div className="animate-fade-in relative z-10">
              <h2 className="text-center mb-8">What grade are you in?</h2>
              <div className="grid grid-cols-2 gap-4">
                {["6th", "7th", "8th", "9th", "10th", "11th"].map((grade) => (
                  <button 
                    key={grade}
                    onClick={() => handleGradeSelect(grade as any)}
                    className="staxed-button-secondary border border-gray-700 hover:border-staxed-blue transition-colors"
                  >
                    {grade}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <button 
                  onClick={() => handleGradeSelect("12th")}
                  className="staxed-button-secondary w-full border border-gray-700 hover:border-staxed-blue transition-colors"
                >
                  12th
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Onboarding;
