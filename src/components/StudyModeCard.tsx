
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

interface StudyModeCardProps {
  mode: "Textbook" | "Slides" | "Notes" | "Quiz";
  description: string;
  icon: React.ReactNode;
  color: string;
  bgImage?: string;
}

const StudyModeCard: React.FC<StudyModeCardProps> = ({ mode, description, icon, color, bgImage }) => {
  const navigate = useNavigate();
  const { setSelectedStudyMode } = useAppContext();
  
  const handleClick = () => {
    setSelectedStudyMode(mode);
    // In a real app, you would navigate to the specific study mode
    // For now, we'll just alert that it's not implemented
    alert(`${mode} mode is coming soon!`);
  };

  // Define background images for each mode
  const getBgImage = () => {
    if (bgImage) return bgImage;
    
    switch (mode) {
      case "Textbook":
        return "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3";
      case "Slides":
        return "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3";
      case "Notes":
        return "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3";
      case "Quiz":
        return "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3";
      default:
        return "";
    }
  };
  
  return (
    <button 
      onClick={handleClick}
      className="relative group overflow-hidden rounded-2xl h-64 w-full"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" 
        style={{ backgroundImage: `url(${getBgImage()})` }}
      ></div>
      
      {/* Dark overlay */}
      <div className={`absolute inset-0 ${color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
        <div className="rounded-full bg-white/20 p-6 mb-6 backdrop-blur-sm">
          {icon}
        </div>
        <h3 className="text-2xl font-medium mb-3 drop-shadow-lg">{mode}</h3>
        <p className="text-center text-white/90 drop-shadow-md max-w-xs">{description}</p>
        
        {/* View button that appears on hover */}
        <div className="mt-6 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          Open {mode}
        </div>
      </div>
    </button>
  );
};

export default StudyModeCard;
