import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import Button from '../Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    const updateTime = () => {
      const now = new Date();
      // Cotonou is GMT+1
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: 'Africa/Porto-Novo',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
      };
      setTime(now.toLocaleTimeString('en-GB', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <nav 
        className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] backdrop-blur-sm
          ${isScrolled 
            ? 'top-4 left-4 right-4 rounded-full shadow-lg bg-black/90 border border-tayo-cream/10 py-2 px-8' 
            : 'top-0 left-0 right-0 w-full bg-transparent border-b border-transparent py-6 px-6 md:px-10'
          }
        `}
      >
        <div className="w-full flex items-center justify-between">
          
          {/* 1. Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#" className="block group flex items-center gap-2">
              {/* Brand Logo SVG */}
              <svg viewBox="0 0 100 100" className="h-8 w-8 fill-current text-tayo-cream group-hover:text-tayo-gold transition-colors duration-300">
                <path d="M50 85 C50 85 45 95 35 100 M50 85 C50 85 55 95 65 100" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M50 85 C50 60 50 40 50 15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                {/* Central Leaf */}
                <path d="M50 15 C45 25 45 40 50 50 C55 40 55 25 50 15 Z" />
                {/* Leaves Left */}
                <path d="M48 60 Q30 55 20 40 C30 50 40 58 48 60 Z" />
                <path d="M48 70 Q25 65 15 50 C25 60 40 68 48 70 Z" />
                <path d="M48 50 Q35 40 25 25 C35 35 42 45 48 50 Z" />
                {/* Leaves Right */}
                <path d="M52 60 Q70 55 80 40 C70 50 60 58 52 60 Z" />
                <path d="M52 70 Q75 65 85 50 C75 60 60 68 52 70 Z" />
                <path d="M52 50 Q65 40 75 25 C65 35 58 45 52 50 Z" />
              </svg>
              <div className="font-serif text-2xl font-medium tracking-tight text-tayo-cream">
                tayo<span className="text-tayo-gold">'</span>s club
              </div>
            </a>
          </div>

          {/* 2. Tagline & Time (Visible on desktop) */}
          <div className="hidden lg:flex flex-col items-center text-sm font-sans text-tayo-cream transition-all duration-300">
            <span className="font-bold tracking-tight">Your lifestyle, our signature.</span>
            <span className="opacity-70 text-xs">Cotonou, {time}</span>
          </div>

          {/* 3. Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
             <div className="flex space-x-6 text-sm font-sans font-medium text-tayo-cream">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="hover:text-tayo-gold transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tayo-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
             </div>
          </div>

          {/* 4. CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button 
                variant="primary" 
                className="rounded-full py-2.5 px-6 text-xs font-bold uppercase tracking-wider" 
                onClick={() => window.location.href='#contact'}
              >
                Concierge Access ↗
              </Button>
            </div>
            
            <button onClick={() => setIsOpen(!isOpen)} className="text-tayo-cream p-1 md:hidden">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-[60] flex flex-col p-6 space-y-8 h-screen animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center">
             <div className="flex items-center gap-2">
               {/* Mobile Logo SVG */}
               <svg viewBox="0 0 100 100" className="h-8 w-8 fill-current text-tayo-cream">
                <path d="M50 85 C50 85 45 95 35 100 M50 85 C50 85 55 95 65 100" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M50 85 C50 60 50 40 50 15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                <path d="M50 15 C45 25 45 40 50 50 C55 40 55 25 50 15 Z" />
                <path d="M48 60 Q30 55 20 40 C30 50 40 58 48 60 Z" />
                <path d="M48 70 Q25 65 15 50 C25 60 40 68 48 70 Z" />
                <path d="M48 50 Q35 40 25 25 C35 35 42 45 48 50 Z" />
                <path d="M52 60 Q70 55 80 40 C70 50 60 58 52 60 Z" />
                <path d="M52 70 Q75 65 85 50 C75 60 60 68 52 70 Z" />
                <path d="M52 50 Q65 40 75 25 C65 35 58 45 52 50 Z" />
              </svg>
               <div className="font-serif text-2xl font-medium text-tayo-cream">
                  tayo<span className="text-tayo-gold">'</span>s club
                </div>
             </div>
             <button onClick={() => setIsOpen(false)} className="text-tayo-cream p-1">
               <X size={28} />
             </button>
          </div>
          
          <div className="flex flex-col space-y-6 mt-8">
             <div className="text-xs uppercase tracking-widest font-sans text-tayo-cream/60 border-b border-tayo-cream/10 pb-2">Menu</div>
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-serif text-tayo-cream hover:text-tayo-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="mt-auto pt-8 border-t border-tayo-cream/10 space-y-4">
             <div className="flex justify-between items-center text-sm font-sans text-tayo-cream">
               <span>Cotonou Local Time</span>
               <span className="font-bold">{time}</span>
             </div>
             <Button 
              variant="primary" 
              fullWidth 
              className="rounded-full py-4" 
              onClick={() => { setIsOpen(false); window.location.href='#contact'; }}
             >
              Concierge Access ↗
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;