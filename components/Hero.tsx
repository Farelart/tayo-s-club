import React, { useState, useEffect } from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const IMAGES = [
  "https://picsum.photos/id/42/1600/900",   // Culinary - High Res
  "https://picsum.photos/id/164/1600/900",  // Accommodation - High Res
  "https://picsum.photos/id/435/1600/900",  // Events - High Res
];

const SCATTERED_IMAGES = [
  // Left Side
  { src: "https://picsum.photos/id/338/400/500", rotation: "-6deg", top: "5%", left: "5%" },
  { src: "https://picsum.photos/id/366/400/500", rotation: "12deg", top: "40%", left: "12%" },
  { src: "https://picsum.photos/id/452/400/500", rotation: "-8deg", bottom: "10%", left: "3%" },
  
  // Right Side
  { src: "https://picsum.photos/id/28/400/500", rotation: "8deg", top: "10%", right: "6%" },
  { src: "https://picsum.photos/id/48/400/500", rotation: "-12deg", top: "45%", right: "10%" },
  { src: "https://picsum.photos/id/3/400/500", rotation: "5deg", bottom: "12%", right: "4%" },
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 350); // Fast animation speed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center pt-24">
      
      {/* Scattered Side Images (Visible on Large Screens) */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block overflow-hidden">
        {SCATTERED_IMAGES.map((img, index) => (
          <div
            key={index}
            className="absolute w-36 h-48 shadow-lg border border-tayo-gold/30 transform transition-transform duration-500 hover:scale-105 opacity-50 hover:opacity-100 z-0"
            style={{
              top: img.top,
              bottom: img.bottom,
              left: img.left,
              right: img.right,
              rotate: img.rotation,
              backgroundImage: `url(${img.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      {/* Central Content */}
      <div className="flex-grow flex flex-col items-center justify-center w-full px-6 z-10 relative space-y-8">
        
        {/* Image Carousel Container - Reduced Size */}
        <div className="relative w-full max-w-2xl aspect-[16/9] bg-black overflow-hidden shadow-2xl border border-tayo-cream/20">
          {IMAGES.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-200 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
               <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
            </div>
          ))}
        </div>

        {/* Text & Call to Action */}
        <div className="flex flex-col items-center space-y-6 text-center">
          <p className="font-serif text-2xl md:text-3xl text-tayo-cream italic tracking-wide">
            Designed for executives and teams
          </p>
          
          <Button 
            variant="primary" 
            onClick={() => window.location.href='#experiences'}
            className="bg-tayo-cream text-tayo-grey hover:bg-tayo-gold hover:text-tayo-grey border-transparent rounded-full px-12 py-4 uppercase tracking-widest text-xs md:text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            Discover the Club
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;