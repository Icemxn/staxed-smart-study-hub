
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { LucideIcon } from 'lucide-react';

interface SubjectCardProps {
  subject: "Mathematics" | "Science" | "Social Studies" | "English" | "Hindi" | "Kannada";
  icon: React.ReactNode;
  color: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, icon, color }) => {
  const navigate = useNavigate();
  const { setSelectedSubject } = useAppContext();
  
  const handleClick = () => {
    setSelectedSubject(subject);
    navigate('/chapters');
  };
  
  return (
    <button 
      onClick={handleClick}
      className="staxed-card hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center py-8"
    >
      <div className={`rounded-full ${color} p-6 w-20 h-20 flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-medium text-center">{subject}</h3>
    </button>
  );
};

export default SubjectCard;
