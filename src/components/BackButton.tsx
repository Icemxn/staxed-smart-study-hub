
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  to?: string;
  label: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to, label }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };
  
  return (
    <button 
      onClick={handleClick}
      className="flex items-center gap-2 text-gray-300 hover:text-white transition-all group"
    >
      <div className="bg-staxed-darkBlue/80 p-1.5 rounded-full group-hover:bg-staxed-blue/20 transition-colors">
        <ArrowLeft size={16} className="text-gray-300 group-hover:text-white transition-colors" />
      </div>
      <span>{label}</span>
    </button>
  );
};

export default BackButton;
