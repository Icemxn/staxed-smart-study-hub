
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { toast } from '@/hooks/use-toast';

interface StudyModeCardProps {
  mode: "Textbook" | "Slides" | "Notes" | "Quiz";
  description: string;
  icon: React.ReactNode;
  color: string;
}

const StudyModeCard: React.FC<StudyModeCardProps> = ({ mode, description, icon, color }) => {
  const navigate = useNavigate();
  const { setSelectedStudyMode, selectedSubject } = useAppContext();
  
  const handleClick = () => {
    setSelectedStudyMode(mode);
    
    if (mode === "Quiz") {
      navigate("/quiz");
    } else if (mode === "Notes") {
      navigate("/notes");
    } else if (mode === "Slides") {
      navigate("/slides");
    } else if (mode === "Textbook" && selectedSubject === "Science") {
      navigate("/textbook");
    } else if (mode === "Textbook") {
      toast({
        title: `${mode} Mode`,
        description: `${mode} mode is coming soon!`,
      });
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
      className="relative group overflow-hidden rounded-2xl h-64 w-full transition-all duration-300"
    >
      {/* Premium card with gradient background */}
      <div className={`absolute inset-0 ${color} shadow-lg`}></div>
      
      {/* Decorative elements for premium feel */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl opacity-50 -mr-8 -mt-8"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl opacity-30 -ml-10 -mb-10"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Geometric decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-5 right-5 w-20 h-20 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-5 left-5 w-16 h-16 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/4 left-1/3 w-8 h-8 border border-white/5 transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border border-white/5 rounded-lg transform rotate-12"></div>
      </div>
      
      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
        {/* Fixed icon container with proper sizing and padding to prevent clipping */}
        <div className="rounded-full bg-white/20 backdrop-blur-sm p-4 mb-6 shadow-xl transform group-hover:scale-105 transition-transform duration-300 border border-white/20 flex items-center justify-center">
          {/* Ensure consistent icon sizing */}
          <div className="text-white w-10 h-10 flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-medium mb-2 drop-shadow-lg">{mode}</h3>
        <p className="text-center text-white/90 drop-shadow-md max-w-xs text-sm">{description}</p>
        
        {/* Enhanced hover button */}
        <div className="mt-6 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl border border-white/20 font-medium text-sm">
          Open {mode}
        </div>
      </div>
    </button>
  );
};

export default StudyModeCard;
