
import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  category: string;
  index: number;
  imageUrl?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, category, index, imageUrl }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className="w-full border-t border-gray-200 py-10 flex justify-between items-center hover:bg-gray-50 transition-all duration-500 cursor-pointer opacity-0 translate-y-6"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-6">
        {imageUrl && (
          <div className="hidden md:block h-16 w-16 overflow-hidden">
            <div className="h-full w-full bg-gray-100 rounded-sm overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
            </div>
          </div>
        )}
        <div>
          <h3 className="text-xl md:text-2xl font-medium">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{category}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm font-medium group">
        <span>View</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.1 }
    );
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const projects = [
    { title: "Minimalist Brand Identity", category: "Branding", imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=200&q=80" },
    { title: "Modern Photography Collection", category: "Photography", imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&h=200&q=80" },
    { title: "Typography Exploration", category: "Design", imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=200&h=200&q=80" },
    { title: "Architectural Visualization", category: "3D Rendering", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&h=200&q=80" }
  ];

  return (
    <section id="work" className="w-full py-24 px-6 md:px-12">
      <h2 
        ref={headingRef}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 opacity-0 translate-y-6 transition-all duration-700"
      >
        Selected Work
      </h2>
      <div>
        {projects.map((project, index) => (
          <PortfolioItem 
            key={index}
            title={project.title}
            category={project.category}
            index={index}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
      <div className="mt-16 flex justify-center">
        <a href="/projects" className="text-sm uppercase tracking-wide font-medium hover:text-gray-600 transition-colors relative group">
          View All Projects
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
