
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="staxed-card hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 overflow-hidden relative group">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-staxed-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="rounded-full bg-gradient-to-br from-staxed-blue/30 to-staxed-blue/5 p-3 w-14 h-14 flex items-center justify-center mb-5 shadow-md">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
