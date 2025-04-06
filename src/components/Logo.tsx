
import React from "react";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white group">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-70 blur-sm group-hover:opacity-100 transition-opacity"></div>
        <div className="relative bg-staxed-navy rounded-full p-2">
          <GraduationCap className="h-8 w-8 text-staxed-blue" />
        </div>
      </div>
      <span>StaxED</span>
    </Link>
  );
};

export default Logo;
