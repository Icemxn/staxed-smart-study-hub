
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { Book } from 'lucide-react';

interface ChapterCardProps {
  number: number;
  title: string;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ number, title }) => {
  const navigate = useNavigate();
  const { setSelectedChapter } = useAppContext();
  
  const handleClick = () => {
    setSelectedChapter(number);
    navigate('/study-mode');
  };
  
  return (
    <button 
      onClick={handleClick}
      className="staxed-card hover:shadow-lg hover:bg-opacity-80 transition-all duration-300 text-left flex items-center gap-4"
    >
      <div className="rounded-full bg-staxed-blue/20 p-3 h-12 w-12 flex items-center justify-center">
        <Book className="h-5 w-5 text-staxed-blue" />
      </div>
      <div>
        <div className="text-sm text-staxed-blue mb-1">Chapter {number}</div>
        <h3 className="font-medium">{title}</h3>
      </div>
    </button>
  );
};

export default ChapterCard;
