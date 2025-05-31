
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hello, I'm <span className="text-gradient">Diwan Adhikari</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate full-stack developer specializing in .NET Core and modern web technologies
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
            >
              View My Work
            </button>
          </div>
        </div>
        
        <div className="mt-16 animate-float">
          <div className="w-2 h-8 border-2 border-white/70 rounded-full mx-auto">
            <div className="w-0.5 h-3 bg-white/70 rounded-full mx-auto mt-1 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
