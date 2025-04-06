
import React from "react";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
      <GraduationCap className="h-8 w-8 text-staxed-blue" />
      <span>StaxED</span>
    </Link>
  );
};

export default Logo;
