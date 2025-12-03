import React from 'react';
import ScrollReveal from './ScrollReveal';

const LOGOS = [
  './logos/WhatsApp Image 2025-12-03 at 16.45.50.jpeg',
  './logos/WhatsApp Image 2025-12-03 at 16.45.50 (1).jpeg',
  './logos/WhatsApp Image 2025-12-03 at 16.45.51.jpeg',
];

const SocialProof: React.FC = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="py-16 bg-tayo-cream relative overflow-hidden">
      {/* Inline styles for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tayo-gold/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tayo-gold/30 to-transparent"></div>

      <ScrollReveal animation="fade-up" duration={800}>
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <span className="text-tayo-gold uppercase tracking-[0.3em] text-xs font-semibold">
            Trusted By
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-tayo-grey mt-3">
            World-Class <span className="italic text-tayo-terracotta">Partners</span>
          </h3>
        </div>
      </ScrollReveal>

      {/* Gradient fade edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-tayo-cream to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-tayo-cream to-transparent z-10 pointer-events-none"></div>

        {/* Marquee container */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 md:mx-12 group"
              >
                <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-tayo-gold/10 shadow-sm hover:shadow-lg hover:border-tayo-gold/30 transition-all duration-300 hover:scale-105">
                  <img
                    src={logo}
                    alt="Partner Logo"
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom tagline */}
      <ScrollReveal animation="fade-up" delay={200}>
        <div className="max-w-7xl mx-auto px-6 mt-12 text-center">
          <p className="text-tayo-grey/60 text-sm font-light tracking-wide">
            Delivering excellence to Africa's most distinguished organizations
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default SocialProof;

