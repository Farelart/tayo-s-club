import React from 'react';
import { SERVICES } from '../constants';
import Button from './Button';
import ScrollReveal from './ScrollReveal';

const Services: React.FC = () => {
  return (
    <section id="experiences" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal animation="fade-up" duration={800}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <span className="text-tayo-terracotta uppercase tracking-widest text-sm font-semibold">Our Services</span>
              <h2 className="font-serif text-4xl md:text-5xl text-tayo-grey mt-2">Gallery of Experiences</h2>
              <p className="mt-4 text-tayo-grey/70 font-sans">
                Curated categories designed to elevate every aspect of your professional and personal life.
              </p>
            </div>
            <div className="hidden md:block">
               {/* Decorative element or secondary link could go here */}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} animation="fade-up" delay={index * 100} duration={800}>
              <div
                className="group relative h-[400px] overflow-hidden cursor-pointer"
              >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              ></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-tayo-grey via-tayo-grey/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-serif text-2xl text-white mb-2 transform translate-y-0 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-tayo-cream/90 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {service.description}
                </p>
                <div className="w-full h-[1px] bg-tayo-gold mb-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <button className="text-left text-xs uppercase tracking-widest text-tayo-gold font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  Explore
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;