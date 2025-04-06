
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { LucideIcon } from 'lucide-react';

interface StudyModeCardProps {
  mode: "Textbook" | "Slides" | "Notes" | "Quiz";
  description: string;
  icon: React.ReactNode;
  color: string;
}

const StudyModeCard: React.FC<StudyModeCardProps> = ({ mode, description, icon, color }) => {
  const navigate = useNavigate();
  const { setSelectedStudyMode } = useAppContext();
  
  const handleClick = () => {
    setSelectedStudyMode(mode);
    // In a real app, you would navigate to the specific study mode
    // For now, we'll just alert that it's not implemented
    alert(`${mode} mode is coming soon!`);
  };
  
  return (
    <button 
      onClick={handleClick}
      className="staxed-card flex flex-col items-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 p-8"
    >
      <div className={`rounded-full ${color} p-5 w-16 h-16 flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{mode}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </button>
  );
};

export default StudyModeCard;
