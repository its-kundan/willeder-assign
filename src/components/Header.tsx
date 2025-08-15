import React from 'react';
import { Zap, Users, Target, Heart, Globe, Lightbulb, Shield, TrendingUp, Star } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-white rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-white rounded-full translate-y-24"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center">
          {/* Logo with Whirlwind Concept */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/15 rounded-full mb-6 backdrop-blur-sm border border-white/20">
              <div className="relative">
                <Zap className="w-12 h-12 text-white whirlwind-animation" />
                <div className="absolute inset-0 w-12 h-12 border-2 border-white/30 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-12 h-12 border-2 border-white/20 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-3 gradient-text">
              Willeder
            </h1>
            <p className="text-xl text-primary-100 font-medium">Where your Dreams Soar!</p>
            <p className="text-primary-200 mt-2">Individuals with strong determination and resolve</p>
          </div>

          {/* Company Mission */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-primary-100 leading-relaxed">
              We aim to be the partner of choice for business startups and IT-related problem solving, 
              and to be the company that maximizes business results through our work.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center space-y-2 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <Users className="w-6 h-6 text-primary-200" />
              <span className="text-sm text-primary-100 font-medium text-center">Action-oriented</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <Shield className="w-6 h-6 text-primary-200" />
              <span className="text-sm text-primary-100 font-medium text-center">Accountability</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <Target className="w-6 h-6 text-primary-200" />
              <span className="text-sm text-primary-100 font-medium text-center">Leadership</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <TrendingUp className="w-6 h-6 text-primary-200" />
              <span className="text-sm text-primary-100 font-medium text-center">Efficiency</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <Globe className="w-6 h-6 text-primary-200" />
              <span className="text-sm text-primary-100 font-medium text-center">Diversity</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <Lightbulb className="w-6 h-6 text-primary-200" />
              <span className="text-sm text-primary-100 font-medium text-center">Proactiveness</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <Heart className="w-6 h-6 text-primary-200" />
              <span className="text-sm text-primary-100 font-medium text-center">Social contribution</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
              <Star className="w-6 h-6 text-primary-200" />
              <span className="text-sm text-primary-100 font-medium text-center">Curiosity</span>
            </div>
          </div>

          {/* Job Title */}
          <div className="mt-12">
            <h2 className="text-4xl font-bold mb-4">Frontend Developer</h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Join our whirlwind of innovation and help us create amazing digital experiences 
              that energize society as a whole
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
