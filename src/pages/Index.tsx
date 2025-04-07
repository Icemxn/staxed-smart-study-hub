
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import { Book, MessageCircle, Presentation, LineChart, Settings, ArrowRight, ChevronRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="animate-fade-in overflow-hidden relative">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-screen bg-gradient-to-br from-blue-900/30 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/4 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-screen bg-gradient-to-tl from-purple-900/30 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/4 opacity-50"></div>
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-staxed-blue/10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-purple-500/10 animate-pulse delay-500"></div>
      </div>

      <header className="py-6 relative z-10">
        <div className="staxed-container flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <Link to="/onboarding" className="staxed-button-primary">
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
          <Link to="/onboarding" className="staxed-button-primary md:hidden">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="staxed-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h1 className="mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">The AI-Powered Learning Platform for Your School</h1>
                <p className="text-xl text-gray-300 mb-8">Turn every textbook into a smart, interactive tutor</p>
                <Link to="/onboarding" className="staxed-button-primary text-lg group">
                  Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="flex justify-center lg:justify-end relative">
                <div className="hidden lg:block absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl transform rotate-6 animate-pulse"></div>
                <div className="w-full h-64 relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1074" 
                    alt="AI Learning Platform" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-staxed-darkBlue/80 to-transparent flex flex-col justify-end p-6">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm font-medium">AI Tutor Active</span>
                      </div>
                      <p className="text-white/90 text-sm">Converting static content into interactive learning...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating dots decoration */}
            <div className="absolute top-1/4 left-10 h-24 w-24 rounded-full bg-blue-500/5 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-10 h-16 w-16 rounded-full bg-purple-500/5 animate-pulse delay-300"></div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-staxed-darkBlue relative">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-staxed-blue/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-900/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-purple-500/5 animate-pulse delay-1000"></div>
          </div>
          
          <div className="staxed-container relative z-10">
            <div className="text-center mb-16">
              <h2 className="mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Supercharge Learning With AI</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our platform provides powerful tools for students and valuable insights for schools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                title="Clickable Textbooks" 
                description="Every word is AI-explained instantly. No more confusion or getting stuck on concepts."
                icon={<Book className="h-6 w-6 text-staxed-blue" />}
              />
              <FeatureCard 
                title="Live AI Tutor" 
                description="Get real-time answers to any question with our AI tutor that understands your curriculum."
                icon={<MessageCircle className="h-6 w-6 text-staxed-blue" />}
              />
              <FeatureCard 
                title="Slides, Notes & Quizzes" 
                description="Complete learning materials for every chapter, designed to help master concepts faster."
                icon={<Presentation className="h-6 w-6 text-staxed-blue" />}
              />
              <FeatureCard 
                title="Progress Tracking" 
                description="Monitor student engagement and performance with detailed analytics."
                icon={<LineChart className="h-6 w-6 text-staxed-blue" />}
              />
              <FeatureCard 
                title="Fully Customizable" 
                description="Adapt to your school's curriculum, textbooks, and teaching methodologies."
                icon={<Settings className="h-6 w-6 text-staxed-blue" />}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="staxed-container">
            <div className="staxed-card p-10 md:p-16 text-center relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-staxed-blue/10 via-purple-600/5 to-transparent"></div>
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xIDEtMSAyLTIgMS0xIDItMyAyLTUgMC0yLTEtNC0yLTUtMS0xLTItMS0yLTJzMC0xIDEtMWMxIDAgNCAxIDYgMyAzIDMgNCA2IDQgOXMtMSA2LTQgOWMtMiAyLTUgMy02IDMtMSAwLTEtMS0xLTF6TTI0IDM0YzAgMSAwIDEtMSAxLTEgMC00LTEtNi0zLTMtMy00LTYtNC05czEtNiA0LTljMi0yIDUtMyA2LTMgMSAwIDEgMSAxIDFzMCAxLTEgMmMtMSAxLTIgMy0yIDUgMCAyIDEgNCAyIDUgMSAxIDEgMSAxIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
              
              <div className="relative z-10">
                <h2 className="mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Ready to transform learning at your school?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the AI education revolution and give your students the tools they need to succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/onboarding" className="staxed-button-primary text-lg group">
                    Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="#" className="staxed-button-secondary text-lg">
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
