import React, { useState } from 'react';
import { Building2, Plane, Users, Award, ArrowRight } from 'lucide-react';
import Button from './Button';
import ScrollReveal from './ScrollReveal';

const CASE_STUDY_IMAGES = [
  "https://picsum.photos/id/435/800/600", // Event setup
  "https://picsum.photos/id/3/800/600",   // Meeting
  "https://picsum.photos/id/164/800/600"  // Villa/Location
];

const Corporate: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % CASE_STUDY_IMAGES.length);
  };

  const services = [
    {
      icon: <Plane className="w-8 h-8 text-tayo-gold" />,
      title: "Executive Travel",
      description: "Seamless logistics for leadership teams. Private aviation, fast-track customs, and secure ground transport in Cotonou and beyond."
    },
    {
      icon: <Users className="w-8 h-8 text-tayo-gold" />,
      title: "Offsites & Retreats",
      description: "Bespoke team-building experiences in Benin. From coastal villas to cultural immersions, we handle every detail of your agenda."
    },
    {
      icon: <Award className="w-8 h-8 text-tayo-gold" />,
      title: "VIP Guest Management",
      description: "Hosting important investors or partners? We act as their personal concierge, ensuring their stay reflects your company's prestige."
    },
    {
      icon: <Building2 className="w-8 h-8 text-tayo-gold" />,
      title: "Board Meeting Logistics",
      description: "Secure, high-end venues for sensitive strategic meetings, complete with catering and technical support."
    }
  ];

  return (
    <section id="corporate" className="py-24 bg-tayo-grey text-tayo-cream relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={800}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-tayo-gold uppercase tracking-widest text-sm font-semibold">Corporate Solutions</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">
                Elevate Your <br/><span className="italic text-white">Business Standards.</span>
              </h2>
              <p className="font-sans text-tayo-cream/70 mt-6 text-lg">
                We extend the Tayo's Club philosophy to the corporate world, streamlining operations for executives and creating unforgettable moments for teams and clients.
              </p>
            </div>
            <Button variant="white" className="rounded-full">
              Contact for Business
            </Button>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100} duration={800}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors duration-300 h-full">
                <div className="mb-6">{service.icon}</div>
                <h3 className="font-serif text-xl text-white mb-3">{service.title}</h3>
                <p className="font-sans text-sm text-tayo-cream/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mini Case Study Module */}
        <ScrollReveal animation="fade-up" delay={200} duration={1000}>
          <div className="bg-gradient-to-r from-tayo-gold/10 to-transparent border border-tayo-gold/20 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tayo-gold/20 text-tayo-gold text-xs uppercase tracking-wider font-bold">
                Case Study
              </div>
              <h3 className="font-serif text-3xl text-white">
                FinTech Africa Board Retreat
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-24 flex-shrink-0 text-xs text-tayo-gold font-bold uppercase tracking-wide pt-1">Challenge</div>
                  <p className="text-tayo-cream/80 text-sm">Last-minute organization of a 3-day strategic offsite for 12 board members in Cotonou.</p>
                </div>
                <div className="w-full h-[1px] bg-white/10"></div>
                <div className="flex gap-4">
                  <div className="w-24 flex-shrink-0 text-xs text-tayo-gold font-bold uppercase tracking-wide pt-1">Solution</div>
                  <p className="text-tayo-cream/80 text-sm">Secured a private coastal villa, arranged private chefs, and coordinated secure transport for all VIP arrivals.</p>
                </div>
                <div className="w-full h-[1px] bg-white/10"></div>
                <div className="flex gap-4">
                  <div className="w-24 flex-shrink-0 text-xs text-tayo-gold font-bold uppercase tracking-wide pt-1">Result</div>
                  <p className="text-tayo-cream/80 text-sm">A seamless, distraction-free environment allowing the board to focus entirely on strategy.</p>
                </div>
              </div>
            </div>

            {/* Visual/Image for Case Study - Interactive Carousel */}
            <div 
              className="flex-1 w-full max-w-lg relative group cursor-pointer"
              onClick={handleNextImage}
            >
              {/* Decorative back card */}
              <div className="absolute inset-0 bg-tayo-gold/20 transform rotate-3 rounded-lg transition-transform group-hover:rotate-6"></div>
              
              {/* Image Container */}
              <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden aspect-[4/3] bg-tayo-grey">
                {CASE_STUDY_IMAGES.map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt={`Case Study Image ${index + 1}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                      index === currentImageIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
                
                {/* Image Counter/Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {CASE_STUDY_IMAGES.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 rounded-full transition-all duration-300 shadow-md ${
                        idx === currentImageIndex ? 'w-6 bg-tayo-gold' : 'w-1.5 bg-white/70'
                      }`}
                    />
                  ))}
                </div>

                {/* Hover Overlay with Arrow */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-black/60 backdrop-blur-md p-4 rounded-full text-white border border-white/10 transform scale-90 group-hover:scale-100 transition-all shadow-xl">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Corporate;