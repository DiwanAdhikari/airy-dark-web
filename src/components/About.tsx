
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
                I'm Diwan Adhikari, a passionate full-stack developer specializing in .NET Core, JavaScript, 
                and modern web technologies. With expertise in developing scalable solutions 
                for project management, meeting coordination, and system integration.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Based in Kathmandu, Nepal, I have hands-on experience in building secure, efficient applications with 
                robust authentication systems, database design, and API development. 
                My focus is on creating solutions that enhance efficiency, transparency, 
                and collaboration across teams.
              </p>
              <div className="flex flex-wrap gap-3">
                {['ASP.NET Core MVC', 'JavaScript', 'SQL Server', 'Bootstrap', 'jQuery', 'HTML/CSS', 'Git', 'Visual Studio'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/80 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
