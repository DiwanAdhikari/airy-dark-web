
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
