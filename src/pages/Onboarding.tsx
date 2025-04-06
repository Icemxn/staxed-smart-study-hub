
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { useAppContext } from '../contexts/AppContext';
import { ArrowRight } from 'lucide-react';

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
      <div className="pt-10 pb-6">
        <Logo />
      </div>
      
      <div className="flex-grow flex items-center justify-center w-full px-4">
        <div className="staxed-card max-w-md w-full">
          {step === 1 ? (
            <div className="animate-fade-in">
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
                <button type="submit" className="staxed-button-primary w-full">
                  Continue <ArrowRight size={18} />
                </button>
              </form>
            </div>
          ) : (
            <div className="animate-fade-in">
              <h2 className="text-center mb-8">What grade are you in?</h2>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => handleGradeSelect("6th")}
                  className="staxed-button-secondary"
                >
                  6th
                </button>
                <button 
                  onClick={() => handleGradeSelect("7th")}
                  className="staxed-button-secondary"
                >
                  7th
                </button>
                <button 
                  onClick={() => handleGradeSelect("8th")}
                  className="staxed-button-secondary"
                >
                  8th
                </button>
                <button 
                  onClick={() => handleGradeSelect("9th")}
                  className="staxed-button-secondary"
                >
                  9th
                </button>
                <button 
                  onClick={() => handleGradeSelect("10th")}
                  className="staxed-button-secondary"
                >
                  10th
                </button>
                <button 
                  onClick={() => handleGradeSelect("11th")}
                  className="staxed-button-secondary"
                >
                  11th
                </button>
              </div>
              <div className="mt-4">
                <button 
                  onClick={() => handleGradeSelect("12th")}
                  className="staxed-button-secondary w-full"
                >
                  12th
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
