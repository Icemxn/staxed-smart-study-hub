
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

interface SubjectCardProps {
  subject: "Mathematics" | "Science" | "Social Studies" | "English" | "Hindi" | "Kannada";
  icon: React.ReactNode;
  color: string;
  bgImage?: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, icon, color, bgImage }) => {
  const navigate = useNavigate();
  const { setSelectedSubject } = useAppContext();
  
  const handleClick = () => {
    setSelectedSubject(subject);
    navigate('/chapters');
  };
  
  return (
    <button 
      onClick={handleClick}
      className="relative group overflow-hidden rounded-2xl h-44 w-full"
    >
      {/* Background gradient layer */}
      <div className={`absolute inset-0 ${color} opacity-90 group-hover:opacity-80 transition-opacity duration-300`}></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xIDEtMSAyLTIgMS0xIDItMyAyLTUgMC0yLTEtNC0yLTUtMS0xLTItMS0yLTJzMC0xIDEtMWMxIDAgNCAxIDYgMyAzIDMgNCA2IDQgOXMtMSA2LTQgOWMtMiAyLTUgMy02IDMtMSAwLTEtMS0xLTF6TTI0IDM0YzAgMSAwIDEtMSAxLTEgMC00LTEtNi0zLTMtMy00LTYtNC05czEtNiA0LTljMi0yIDUtMyA2LTMgMSAwIDEgMSAxIDFzMCAxLTEgMmMtMSAxLTIgMy0yIDUgMCAyIDEgNCAyIDUgMSAxIDEgMSAxIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 transform group-hover:scale-105 transition-transform duration-300">
        <div className={`rounded-full ${color} bg-white/10 p-5 w-20 h-20 flex items-center justify-center backdrop-blur-sm shadow-lg`}>
          {icon}
        </div>
        <h3 className="text-2xl font-medium text-center text-white drop-shadow-md">{subject}</h3>
      </div>
      
      {/* Bottom shine effect on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>
    </button>
  );
};

export default SubjectCard;
