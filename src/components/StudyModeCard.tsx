
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { toast } from '@/hooks/use-toast';

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
    
    if (mode === "Quiz") {
      navigate("/quiz");
    } else {
      toast({
        title: `${mode} Mode`,
        description: `${mode} mode is coming soon!`,
      });
    }
  };
  
  return (
    <button 
      onClick={handleClick}
      className="relative group overflow-hidden rounded-2xl h-64 w-full"
    >
      {/* Background image with enhanced overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" 
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${color} opacity-90 group-hover:opacity-80 transition-opacity duration-300`}></div>
      
      {/* Pattern overlay for texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-40"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
        <div className="rounded-full bg-white/30 p-6 mb-6 backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-medium mb-3 drop-shadow-lg">{mode}</h3>
        <p className="text-center text-white drop-shadow-md max-w-xs">{description}</p>
        
        {/* View button that appears on hover */}
        <div className="mt-6 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          Open {mode}
        </div>
      </div>
    </button>
  );
};

export default StudyModeCard;
