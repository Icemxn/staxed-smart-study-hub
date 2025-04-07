
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface QuizQuestionProps {
  question: {
    question: string;
    options: string[];
    correctAnswer: string;
  };
  selectedAnswer: string;
  onAnswer: (answer: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswer,
}) => {
  return (
    <div className="py-4">
      <h3 className="text-xl font-medium mb-6 text-white">{question.question}</h3>
      
      <RadioGroup 
        value={selectedAnswer} 
        onValueChange={onAnswer}
        className="flex flex-col gap-4"
      >
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 p-4 rounded-lg transition-all ${
              selectedAnswer === option
                ? "bg-staxed-blue/20 border border-staxed-blue/40"
                : "bg-staxed-navy/50 hover:bg-staxed-navy/80 border border-gray-700"
            }`}
          >
            <RadioGroupItem
              value={option}
              id={`option-${index}`}
              className="text-staxed-blue"
            />
            <Label
              htmlFor={`option-${index}`}
              className="flex-grow cursor-pointer text-white"
            >
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default QuizQuestion;
