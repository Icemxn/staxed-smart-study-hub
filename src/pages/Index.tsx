
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import { Book, MessageCircle, Presentation, LineChart, Settings, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="animate-fade-in">
      <header className="py-6">
        <div className="staxed-container flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <Link to="/onboarding" className="staxed-button-primary">
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
          <Link to="/onboarding" className="staxed-button-primary md:hidden">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="staxed-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h1 className="mb-6">The AI-Powered Learning Platform for Your School</h1>
                <p className="text-xl text-gray-300 mb-8">Turn every textbook into a smart, interactive tutor</p>
                <Link to="/onboarding" className="staxed-button-primary text-lg">
                  Get Started <ArrowRight size={20} />
                </Link>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img 
                  src="/lovable-uploads/011c4ca9-bb12-4653-a841-276b0462f834.png" 
                  alt="StaxED Interface" 
                  className="rounded-2xl shadow-xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-staxed-darkBlue">
          <div className="staxed-container">
            <div className="text-center mb-16">
              <h2 className="mb-4">Supercharge Learning With AI</h2>
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

        {/* School Logos Section */}
        <section id="testimonials" className="py-16">
          <div className="staxed-container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Trusted by Leading Schools</h2>
              <p className="text-gray-300">Join the schools already enhancing their educational experience</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
              {/* These would be replaced with actual school logos */}
              <div className="bg-staxed-darkBlue p-4 rounded-lg w-32 h-16 flex items-center justify-center">
                <div className="text-lg font-bold">School A</div>
              </div>
              <div className="bg-staxed-darkBlue p-4 rounded-lg w-32 h-16 flex items-center justify-center">
                <div className="text-lg font-bold">School B</div>
              </div>
              <div className="bg-staxed-darkBlue p-4 rounded-lg w-32 h-16 flex items-center justify-center">
                <div className="text-lg font-bold">School C</div>
              </div>
              <div className="bg-staxed-darkBlue p-4 rounded-lg w-32 h-16 flex items-center justify-center">
                <div className="text-lg font-bold">School D</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="staxed-container">
            <div className="staxed-card p-10 md:p-16 text-center">
              <h2 className="mb-6">Ready to transform learning at your school?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the AI education revolution and give your students the tools they need to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/onboarding" className="staxed-button-primary text-lg">
                  Get Started <ArrowRight size={20} />
                </Link>
                <a href="#" className="staxed-button-secondary text-lg">
                  Book a Demo
                </a>
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
