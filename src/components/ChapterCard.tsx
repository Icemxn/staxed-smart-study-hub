
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { Book } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface ChapterCardProps {
  number: number;
  title: string;
  progress?: number;
  isRecent?: boolean;
  isSuggested?: boolean;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ 
  number, 
  title, 
  progress = 0, 
  isRecent = false,
  isSuggested = false
}) => {
  const navigate = useNavigate();
  const { setSelectedChapter } = useAppContext();
  
  const handleClick = () => {
    setSelectedChapter(number);
    navigate('/study-mode');
  };
  
  return (
    <button 
      onClick={handleClick}
      className="staxed-card hover:shadow-lg hover:bg-opacity-80 transition-all duration-300 text-left flex flex-col relative overflow-hidden group"
    >
      {/* Badge for Recent or Suggested */}
      {isRecent && (
        <div className="absolute top-0 right-0 bg-blue-500 text-xs font-semibold px-2 py-1 rounded-bl-lg">
          Recent
        </div>
      )}
      {isSuggested && (
        <div className="absolute top-0 right-0 bg-amber-500 text-xs font-semibold px-2 py-1 rounded-bl-lg">
          Suggested
        </div>
      )}
      
      {/* Gradient hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-staxed-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex items-start gap-4 relative z-10">
        <div className="rounded-full bg-staxed-blue/20 p-3 h-12 w-12 flex items-center justify-center">
          <Book className="h-5 w-5 text-staxed-blue" />
        </div>
        <div className="flex-1">
          <div className="text-sm text-staxed-blue mb-1">Chapter {number}</div>
          <h3 className="font-medium">{title}</h3>
          
          {/* Progress bar only shown if there's progress or it's a recent chapter */}
          {(progress > 0 || isRecent) && (
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-1.5" />
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default ChapterCard;
