
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {bew Date().getFullYear} Portfolio. Crafted with passion.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <button className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Privacy
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Terms
            </button>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
