
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, RefreshCw, Upload } from 'lucide-react';

interface QuizResultsProps {
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
  userAnswers: string[];
  score: number;
  onRetake: () => void;
  onUploadMore: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  questions,
  userAnswers,
  score,
  onRetake,
  onUploadMore
}) => {
  const percentage = Math.round((score / questions.length) * 100);
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="relative inline-block">
          <svg className="w-32 h-32">
            <circle
              className="text-gray-700"
              strokeWidth="6"
              stroke="currentColor"
              fill="transparent"
              r="58"
              cx="64"
              cy="64"
            />
            <circle
              className={`${percentage >= 70 ? 'text-green-500' : percentage >= 40 ? 'text-amber-500' : 'text-red-500'}`}
              strokeWidth="6"
              strokeDasharray={`${percentage * 3.64} 364`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="58"
              cx="64"
              cy="64"
              transform="rotate(-90 64 64)"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-3xl font-bold">{percentage}%</p>
            <p className="text-sm text-gray-300">{score}/{questions.length}</p>
          </div>
        </div>
        
        <h3 className="mt-4 text-xl font-bold">
          {percentage >= 70 ? 'Great job!' : percentage >= 40 ? 'Good effort!' : 'Keep practicing!'}
        </h3>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium border-b border-gray-700 pb-2">Review Your Answers</h3>
        {questions.map((question, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg border ${
              userAnswers[index] === question.correctAnswer 
                ? 'border-green-500/30 bg-green-500/10' 
                : 'border-red-500/30 bg-red-500/10'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium">{question.question}</h4>
              {userAnswers[index] === question.correctAnswer ? (
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 text-red-500 flex-shrink-0" />
              )}
            </div>
            
            <div className="text-sm">
              <p>Your answer: <span className={userAnswers[index] === question.correctAnswer ? 'text-green-400' : 'text-red-400'}>{userAnswers[index]}</span></p>
              {userAnswers[index] !== question.correctAnswer && (
                <p>Correct answer: <span className="text-green-400">{question.correctAnswer}</span></p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-4 justify-center pt-4">
        <Button 
          onClick={onRetake}
          className="bg-staxed-blue hover:bg-blue-600 flex items-center gap-2"
        >
          <RefreshCw size={16} />
          Retake Quiz
        </Button>
        <Button 
          onClick={onUploadMore}
          variant="outline"
          className="border-gray-600 text-white hover:bg-staxed-darkBlue flex items-center gap-2"
        >
          <Upload size={16} />
          Upload New Questions
        </Button>
      </div>
    </div>
  );
};

export default QuizResults;
