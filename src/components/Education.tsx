
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      institution: 'Patan Nist College',
      degree: 'Bachelors in Computer Application',
      location: 'Lalitpur, Nepal',
      period: 'Current'
    },
    {
      institution: 'Nepal Banepa Polytechnic Institute',
      degree: 'Diploma in Information Technology',
      location: 'Banepa, Kavre',
      period: 'Completed'
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-center">Education</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            My academic journey in computer science and information technology
          </p>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
                      <p className="text-muted-foreground mb-1">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
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

export default Education;
