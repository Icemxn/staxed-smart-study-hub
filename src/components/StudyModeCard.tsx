
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
      {/* Enhanced background image with subtle zoom effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" 
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      
      {/* Gradient overlay with improved color blend */}
      <div className={`absolute inset-0 ${color} opacity-80 group-hover:opacity-75 transition-opacity duration-300`}></div>
      
      {/* Added texture pattern overlay for premium feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-40"></div>

      {/* Added subtle geometric shapes for visual interest */}
      <div className="absolute inset-0">
        <div className="absolute top-4 right-4 w-20 h-20 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/5 rounded-full"></div>
      </div>
      
      {/* Enhanced content section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
        {/* Improved icon container with better visual effects */}
        <div className="rounded-full bg-white/20 p-6 mb-6 backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform duration-300 border border-white/10">
          {icon}
        </div>
        <h3 className="text-2xl font-medium mb-3 drop-shadow-lg">{mode}</h3>
        <p className="text-center text-white/90 drop-shadow-md max-w-xs">{description}</p>
        
        {/* Enhanced hover button with better visual effects */}
        <div className="mt-6 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg border border-white/10">
          Open {mode}
        </div>
      </div>

      {/* Added subtle corner embellishments */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/10 to-transparent"></div>
    </button>
  );
};

export default StudyModeCard;
