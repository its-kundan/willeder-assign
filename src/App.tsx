import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Zap, Users, Target, Heart, Shield, TrendingUp, Star } from 'lucide-react';
import Header from './components/Header';
import JobApplicationForm from './components/JobApplicationForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <Zap className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Whirlwind of Innovation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Willeder, we believe in the power of individuals with strong determination and resolve. 
            Our whirlwind approach brings together diverse perspectives to create solutions that energize 
            society as a whole. As a Frontend Developer, you'll be at the heart of creating digital 
            experiences that make a difference.
          </p>
        </div>

        {/* Why Join Willeder Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 float-animation">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
              <Target className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Purpose-Driven Work</h3>
            <p className="text-gray-600">
              Work on projects that solve real problems and create meaningful impact in the startup ecosystem.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 float-animation" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
              <Users className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Culture</h3>
            <p className="text-gray-600">
              Join a team that values diversity, accountability, and mutual growth through shared experiences.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 float-animation" style={{ animationDelay: '1s' }}>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
              <TrendingUp className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Growth</h3>
            <p className="text-gray-600">
              Embrace our culture of curiosity and continuous learning in a fast-paced, innovative environment.
            </p>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Soar with Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Take the first step towards joining our whirlwind of innovation. 
            Fill out the application form below and let's create amazing digital experiences together.
          </p>
        </div>
        
        <JobApplicationForm />
      </main>
      
      {/* Footer with Willeder Values */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Willeder</h3>
              <p className="text-gray-400 mb-4">
                Where your Dreams Soar! We are individuals with strong determination and resolve, 
                working together to energize society through innovative solutions.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Zap className="w-4 h-4" />
                  <span>Action-oriented</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>Accountable</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Mission</h4>
              <p className="text-gray-400 mb-4">
                To be the partner of choice for business startups and IT-related problem solving, 
                maximizing business results through our work.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Heart className="w-4 h-4" />
                  <span>Social contribution</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Star className="w-4 h-4" />
                  <span>Curiosity</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Willeder. All rights reserved. Where your Dreams Soar! 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
