
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Project Management System',
      description: 'Developed an advanced platform for technical interview preparation, featuring real-time coding challenges and mock interview simulations. Implemented user authentication and session management for secure access.',
      features: [
        'User authentication and session management for secure access',
        'Architected scalable solutions using ASP.NET Core MVC',
        'Comprehensive coding challenge platform'
      ],
      technologies: ['ASP.NET Core MVC', 'JavaScript', 'Bootstrap'],
      githubLink: true
    },
    {
      title: 'Meeting Management System',
      description: 'Developed a system for municipalities to streamline meeting scheduling, document management, and secure workflows, enhancing efficiency, transparency, and compliance with robust security and multilingual support.',
      features: [
        'Streamlined meeting scheduling and document management',
        'Enhanced workflow automation, security, and transparency',
        'Seamless integration across layers with multilingual support'
      ],
      technologies: ['ASP.NET Core', 'SQL Server', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'],
      githubLink: true
    },
    {
      title: 'Planning Management System',
      description: 'Developed a system for municipalities to streamline urban and rural planning processes, including project tracking, resource allocation, and compliance monitoring.',
      features: [
        'Secure user login system with role-based authorization',
        'Personalized access to user-specific forms and reports',
        'Robust database schema with MS SQL for effective data handling'
      ],
      technologies: ['ASP.NET Core MVC', 'SQL Server', 'JavaScript', 'jQuery', 'HTML', 'CSS'],
      githubLink: true
    },
    {
      title: 'SDIMS (System Delivery and Information Management System)',
      description: 'Worked on the development of an API module, responsible for designing, implementing, and integrating APIs to support various functionalities with efficient data communication between systems.',
      features: [
        'Designed database for API module ensuring efficient data storage',
        'Seamless integration and optimal performance across systems',
        'Maintained security, scalability, and performance standards'
      ],
      technologies: ['ASP.NET Core API', 'SQL Server'],
      githubLink: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            A collection of professional projects showcasing expertise in full-stack development
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {project.githubLink && (
                      <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
