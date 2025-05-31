
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">hello@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                    <button
                      key={social}
                      className="px-4 py-2 border border-border rounded-full hover:bg-accent transition-colors duration-200"
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Subject" />
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-3 py-2 border border-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <Button className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
