import React from 'react';
import ScrollReveal from './ScrollReveal';

// Curated images matching themes: African Excellence, Luxury Travel, Executive Business, High-end Service
// Strictly Black professionals and lifestyle - Updated list to ensure availability
const ABOUT_IMAGES = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80", // Professional Black Woman - Corporate
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80", // Professional Black Man - Suit
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80", // Black Woman - Portrait/Fashion
  "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=800&q=80", // Black Man - Portrait/Smile
  "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&q=80", // Black Woman - Lifestyle/Travel
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80", // Black Man - Executive/Leader
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-tayo-grey text-tayo-cream relative overflow-hidden">
      {/* Inline styles for custom animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-orbit {
          animation: spin-slow 50s linear infinite;
        }
        .animate-orbit-reverse {
          animation: spin-reverse-slow 50s linear infinite;
        }
      `}</style>

      {/* Decorative floral pattern hint (simulated with CSS circles) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tayo-gold/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tayo-green/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="space-y-8 order-2 lg:order-1">
          <ScrollReveal animation="fade-right" duration={800}>
            <span className="text-tayo-gold uppercase tracking-widest text-sm font-semibold">About Us</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100} duration={900}>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Designed by Africans, <br/>
              <span className="italic text-tayo-rosy">for the World.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200} duration={800}>
            <div className="space-y-6 font-sans text-lg text-tayo-cream/80 font-light">
              <p>
                We offer high-end concierge services, carefully designed to meet the unique needs of business leaders and high-net-worth individuals.
              </p>
              <p>
                Imagined and developed by Africans, our approach combines the efficiency of a dedicated personal assistant with the exclusive network and expertise of a concierge.
              </p>
              <p>
                Driven by a requirement for excellence and constant attention to detail, we offer incomparable personal and professional support, elevating every experience in Africa to the highest level of refinement.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="blur-in" delay={400} duration={1000}>
            <div className="pt-4">
               <div className="font-script text-4xl text-tayo-gold">Tayo's Club</div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Circular Animation */}
        <ScrollReveal animation="zoom-in" delay={300} duration={1200} className="relative order-1 lg:order-2 h-[600px] flex items-center justify-center">
          
          {/* Decorative concentric rings - Scaled up */}
          <div className="absolute border border-tayo-gold/10 rounded-full w-[400px] h-[400px]"></div>
          <div className="absolute border border-tayo-gold/5 rounded-full w-[550px] h-[550px]"></div>
          
          {/* Central static element (Logo or core image) */}
          <div className="absolute z-10 w-28 h-28 bg-tayo-grey border border-tayo-gold/30 rounded-full flex items-center justify-center shadow-2xl">
              <span className="font-serif text-4xl text-tayo-gold italic">T</span>
          </div>

          {/* Rotating Container */}
          <div className="absolute w-full h-full animate-orbit">
             {ABOUT_IMAGES.map((src, index) => {
               // Calculate position on the circle
               const total = ABOUT_IMAGES.length;
               const angle = (index / total) * 360;
               const radius = 230; // Increased distance from center to accommodate larger images
               
               return (
                 <div
                   key={index}
                   // Increased size from w-28 (112px) to w-40 (160px)
                   className="absolute top-1/2 left-1/2 w-40 h-40 -ml-20 -mt-20 rounded-full border-2 border-tayo-gold/40 overflow-hidden shadow-2xl transition-transform hover:scale-110 duration-300 bg-tayo-grey"
                   style={{
                     transform: `rotate(${angle}deg) translate(${radius}px)`,
                   }}
                 >
                   {/* Counter-rotate image to keep it upright */}
                   <div 
                      className="w-full h-full animate-orbit-reverse"
                      style={{
                        transform: `rotate(-${angle}deg)` // Initial correction
                      }}
                   >
                     <img 
                       src={src} 
                       alt="Luxury Lifestyle" 
                       className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                     />
                   </div>
                 </div>
               );
             })}
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;