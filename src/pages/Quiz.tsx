
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import QuizQuestion from '../components/QuizQuestion';
import QuizResults from '../components/QuizResults';
import { Button } from '@/components/ui/button';
import { ArrowRight, Upload } from 'lucide-react';
import QuizUploader from '../components/QuizUploader';

const Quiz = () => {
  const navigate = useNavigate();
  const { selectedSubject, selectedChapter, studentName, selectedGrade } = useAppContext();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [questions, setQuestions] = useState<{
    question: string;
    options: string[];
    correctAnswer: string;
  }[]>([]);
  const [isUploading, setIsUploading] = useState(questions.length === 0);
  
  const handleAnswer = (answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answer;
    setUserAnswers(newAnswers);
  };
  
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };
  
  const handleQuestionsUploaded = (newQuestions: typeof questions) => {
    setQuestions(newQuestions);
    setUserAnswers(new Array(newQuestions.length).fill(''));
    setIsUploading(false);
  };
  
  const handleRetake = () => {
    setUserAnswers(new Array(questions.length).fill(''));
    setCurrentQuestion(0);
    setShowResults(false);
  };
  
  const handleUploadMore = () => {
    setIsUploading(true);
    setShowResults(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="staxed-container py-6 flex justify-between items-center">
        <BackButton to="/study-mode" label="Back to Study Modes" />
        <div className="flex items-center gap-2 text-white">
          <span>{studentName}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-300">{selectedGrade} Grade</span>
        </div>
      </div>
      
      <main className="flex-grow staxed-container py-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-2">
              {isUploading ? "Create Your Quiz" : showResults ? "Quiz Results" : "Quiz"}
            </h1>
            <p className="text-xl text-gray-300">
              {selectedSubject} - Chapter {selectedChapter}
            </p>
          </div>
          
          <div className="staxed-card">
            {isUploading ? (
              <QuizUploader onQuestionsUploaded={handleQuestionsUploaded} />
            ) : showResults ? (
              <QuizResults 
                questions={questions} 
                userAnswers={userAnswers} 
                score={calculateScore()} 
                onRetake={handleRetake}
                onUploadMore={handleUploadMore}
              />
            ) : (
              <>
                <div className="mb-4 flex justify-between items-center">
                  <span className="text-gray-300">Question {currentQuestion + 1} of {questions.length}</span>
                  <span className="px-4 py-1 bg-staxed-darkBlue/50 rounded-full text-sm text-gray-300">
                    {selectedSubject}
                  </span>
                </div>
                
                <QuizQuestion 
                  question={questions[currentQuestion]}
                  selectedAnswer={userAnswers[currentQuestion] || ''}
                  onAnswer={handleAnswer}
                />
                
                <div className="mt-8 flex justify-end">
                  <Button 
                    onClick={handleNext} 
                    disabled={!userAnswers[currentQuestion]}
                    className="bg-staxed-blue hover:bg-blue-600 text-white"
                  >
                    {currentQuestion < questions.length - 1 ? 'Next Question' : 'Show Results'}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
