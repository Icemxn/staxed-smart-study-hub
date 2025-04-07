
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, PlusCircle, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizUploaderProps {
  onQuestionsUploaded: (questions: QuizQuestion[]) => void;
}

const QuizUploader: React.FC<QuizUploaderProps> = ({ onQuestionsUploaded }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([{
    question: '',
    options: ['', '', '', ''],
    correctAnswer: ''
  }]);
  
  const addQuestion = () => {
    setQuestions([...questions, {
      question: '',
      options: ['', '', '', ''],
      correctAnswer: ''
    }]);
  };
  
  const removeQuestion = (indexToRemove: number) => {
    setQuestions(questions.filter((_, index) => index !== indexToRemove));
  };
  
  const updateQuestion = (index: number, field: keyof QuizQuestion, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [field]: value };
    setQuestions(updatedQuestions);
  };
  
  const updateOption = (questionIndex: number, optionIndex: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };
  
  const handleSubmit = () => {
    // Validate questions
    const invalidQuestions = questions.filter(q => 
      !q.question.trim() || 
      q.options.some(opt => !opt.trim()) || 
      !q.correctAnswer.trim() ||
      !q.options.includes(q.correctAnswer)
    );
    
    if (invalidQuestions.length > 0) {
      toast({
        title: "Validation Error",
        description: "All questions must have text, 4 options, and a correct answer that matches one of the options.",
        variant: "destructive"
      });
      return;
    }
    
    onQuestionsUploaded(questions);
    toast({
      title: "Quiz Created",
      description: `Created a quiz with ${questions.length} questions.`,
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-staxed-darkBlue/60 p-4 rounded-lg flex items-center gap-3">
        <AlertCircle className="h-6 w-6 text-amber-400" />
        <p className="text-gray-300 text-sm">
          Create your quiz by adding questions, options, and selecting the correct answer.
        </p>
      </div>
      
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="p-6 bg-staxed-darkBlue/40 rounded-lg border border-gray-700 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Question {questionIndex + 1}</h3>
            {questions.length > 1 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => removeQuestion(questionIndex)}
                className="text-red-400 hover:text-red-300 hover:bg-red-900/20 p-2 h-auto"
              >
                <Trash2 size={18} />
              </Button>
            )}
          </div>
          
          <div className="space-y-3">
            <div>
              <Label htmlFor={`question-${questionIndex}`} className="text-gray-200">
                Question Text
              </Label>
              <Input
                id={`question-${questionIndex}`}
                value={question.question}
                onChange={(e) => updateQuestion(questionIndex, 'question', e.target.value)}
                placeholder="Enter your question"
                className="bg-staxed-navy/70 border-gray-700 text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-gray-200">Options</Label>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex gap-2">
                  <Input
                    value={option}
                    onChange={(e) => updateOption(questionIndex, optionIndex, e.target.value)}
                    placeholder={`Option ${optionIndex + 1}`}
                    className="bg-staxed-navy/70 border-gray-700 text-white"
                  />
                  <Button
                    type="button"
                    variant={question.correctAnswer === option ? "default" : "outline"}
                    className={question.correctAnswer === option ? 
                      "bg-green-600 hover:bg-green-700 w-28" : 
                      "border-gray-700 text-gray-300 w-28"
                    }
                    onClick={() => updateQuestion(questionIndex, 'correctAnswer', option)}
                  >
                    {question.correctAnswer === option ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-1" /> 
                        Correct
                      </>
                    ) : (
                      'Mark Correct'
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={addQuestion}
          variant="outline"
          className="border-dashed border-gray-600 text-gray-300 hover:bg-staxed-darkBlue flex-1 flex items-center justify-center gap-2"
        >
          <PlusCircle size={16} />
          Add Another Question
        </Button>
        
        <Button 
          onClick={handleSubmit}
          className="bg-staxed-blue hover:bg-blue-600 flex items-center gap-2 flex-1"
        >
          <FileText size={16} />
          Create Quiz
        </Button>
      </div>
    </div>
  );
};

export default QuizUploader;
