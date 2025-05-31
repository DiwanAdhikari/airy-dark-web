
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="animate-slide-in">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference. I specialize in 
                modern web technologies and love turning complex problems into simple, 
                beautiful designs.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the 
                developer community.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
