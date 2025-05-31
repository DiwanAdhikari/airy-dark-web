
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

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
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-muted-foreground">diwan.adhikari@example.com</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-muted-foreground">+977 98XXXXXXXX</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-muted-foreground">Kathmandu, Nepal</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                    <button
                      key={social}
                      className="px-4 py-2 border border-border rounded-full hover:bg-accent hover:border-accent-foreground transition-all duration-300 transform hover:scale-105"
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input 
                        name="firstName"
                        placeholder="First Name" 
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? 'border-red-500' : ''}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <Input 
                        name="lastName"
                        placeholder="Last Name" 
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? 'border-red-500' : ''}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div>
                    <Input 
                      name="email"
                      placeholder="Email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Input 
                      name="subject"
                      placeholder="Subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? 'border-red-500' : ''}
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`resize-none ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full transition-all duration-300 transform hover:scale-105" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
