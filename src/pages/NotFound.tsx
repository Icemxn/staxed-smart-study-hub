
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../components/Logo";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="staxed-container py-6">
        <Logo />
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold mb-6">404</h1>
          <p className="text-xl text-gray-300 mb-8">Oops! We couldn't find that page</p>
          <Link to="/" className="staxed-button-primary inline-flex">
            <Home className="mr-2" size={20} /> Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
