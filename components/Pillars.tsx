import React, { useEffect, useRef } from 'react';
import { Gem, UserCheck, Compass } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Pillars: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force play on mount to bypass some browser restrictions
    if (videoRef.current) {
      videoRef.current.defaultMuted = true; // Crucial for autoplay policy
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const pillars = [
    {
      icon: <Gem className="w-5 h-5 text-tayo-gold" />,
      title: "African Expertise",
      text: "Rooted in heritage, delivered with world-class standards."
    },
    {
      icon: <UserCheck className="w-5 h-5 text-tayo-gold" />,
      title: "Personalised Experience",
      text: "Tailored to your unique preferences, schedule, and desires."
    },
    {
      icon: <Compass className="w-5 h-5 text-tayo-gold" />,
      title: "360° Approach",
      text: "Comprehensive lifestyle management from travel to daily tasks."
    }
  ];

  return (
    <section id="essence" className="py-12 md:py-24 bg-tayo-cream">
      <div className="max-w-[98%] mx-auto relative h-[85vh] min-h-[600px] rounded-3xl overflow-hidden shadow-2xl group transform transition-all duration-700">
        
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] ease-in-out group-hover:scale-110"
        >
          {/* Optimized HD Luxury Water/Pool Abstract Video */}
          <source src="https://videos.pexels.com/video-files/5091624/5091624-hd_1920_1080_24fps.mp4" type="video/mp4" />
          <img src="https://picsum.photos/id/435/1600/900" alt="Luxury Ambience" className="w-full h-full object-cover" />
        </video>

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-tayo-grey/20 via-transparent to-tayo-grey/90"></div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-16 z-10">
          
          {/* Header Area */}
          <ScrollReveal animation="fade-up" duration={1000}>
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                 <span className="w-8 h-[1px] bg-tayo-gold shadow-[0_0_8px_rgba(220,174,88,0.8)]"></span>
                 <span className="text-tayo-gold uppercase tracking-[0.2em] text-xs font-bold drop-shadow-md">Our Essence</span>
              </div>
              <h2 className="font-serif text-4xl md:text-7xl text-white leading-[0.9] drop-shadow-lg">
                The Art of <br />
                <span className="italic font-light text-tayo-cream/90">Living Well.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Pillars Cards (Glassmorphism) - Horizontal Scroll on Mobile, Grid on Desktop */}
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {pillars.map((pillar, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 150} duration={800}>
                <div
                  className="min-w-[85%] md:min-w-0 snap-center group/card relative bg-white/10 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-tayo-grey/60 transition-all duration-500 overflow-hidden cursor-default flex flex-col justify-between h-full"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-20 transition-opacity">
                      <div className="scale-150 transform rotate-12">{pillar.icon}</div>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-tayo-gold/20 text-tayo-gold border border-tayo-gold/30 group-hover/card:scale-110 transition-transform duration-300">
                      {pillar.icon}
                    </div>
                    <h3 className="font-serif text-2xl text-white mb-2 group-hover/card:text-tayo-gold transition-colors">{pillar.title}</h3>
                    <p className="font-sans text-sm text-tayo-cream/80 leading-relaxed border-l border-white/20 pl-3">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pillars;