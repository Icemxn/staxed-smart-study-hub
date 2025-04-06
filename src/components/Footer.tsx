
import React from "react";
import Logo from "./Logo";
import { Mail, PhoneCall, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 mt-16 py-10">
      <div className="staxed-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              AI-powered learning platform for schools that turns textbooks into interactive tutors.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-staxed-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-staxed-blue transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-staxed-blue transition-colors">
                  Book Demo
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="mailto:info@staxed.ai" className="flex items-center gap-2 text-gray-400 hover:text-staxed-blue transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@staxed.ai</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-400 hover:text-staxed-blue transition-colors">
                <PhoneCall className="h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
            
            <div className="mt-4 flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-staxed-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-staxed-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-staxed-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-staxed-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>© 2025 StaxED AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
