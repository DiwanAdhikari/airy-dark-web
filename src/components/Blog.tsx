
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Blog = () => {
  const posts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn the best practices for creating maintainable and scalable React applications with modern tooling.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging trends and technologies that will shape the future of web development.',
      date: 'March 10, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Optimizing Performance in Modern Apps',
      excerpt: 'Techniques and strategies for improving application performance and user experience.',
      date: 'March 5, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-center">Latest Articles</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Thoughts on technology, development, and the digital landscape
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
