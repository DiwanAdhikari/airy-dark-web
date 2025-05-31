
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Hello, I'm Alex
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A passionate developer crafting digital experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-border rounded-full hover:bg-accent transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="mt-16 animate-float">
          <div className="w-2 h-8 border-2 border-muted-foreground rounded-full mx-auto">
            <div className="w-0.5 h-3 bg-muted-foreground rounded-full mx-auto mt-1 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
