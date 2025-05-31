
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution built with React and Node.js, featuring real-time inventory management and secure payment processing.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tags: ['Next.js', 'PostgreSQL', 'Socket.io', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics platform providing real-time insights with interactive charts and customizable reporting features.',
      tags: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            A collection of my recent work showcasing different technologies and design approaches
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tag}
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
