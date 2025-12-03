import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tayo-grey text-tayo-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-tayo-cream/20 pb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="font-serif text-4xl">tayo's club</div>
            <p className="font-sans text-sm opacity-80 leading-relaxed max-w-xs">
              Born from African expertise, dedicated to global excellence. We redefine luxury through personalized service and exclusive access.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-tayo-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-tayo-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-tayo-gold transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-tayo-gold">Explore</h4>
            <ul className="space-y-3 font-sans text-sm opacity-80">
              <li><a href="#experiences" className="hover:text-tayo-gold transition-colors">Experiences</a></li>
              <li><a href="#membership" className="hover:text-tayo-gold transition-colors">Membership</a></li>
              <li><a href="#corporate" className="hover:text-tayo-gold transition-colors">Corporate Solutions</a></li>
              <li><a href="#about" className="hover:text-tayo-gold transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-tayo-gold">Contact</h4>
            <div className="space-y-4 font-sans text-sm opacity-80">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-tayo-gold" />
                <p>
                  Ilôt 780, Parcelle T, Maison CONSTANCE<br/>
                  NOUNAHON, Kowegbo<br/>
                  Cotonou, Benin
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-tayo-gold" />
                <a href="mailto:contact@tayosclub.com" className="hover:underline">contact@tayosclub.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 font-sans">
          <p>&copy; {new Date().getFullYear()} Tayo's Club. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-tayo-cream">Privacy Policy</a>
            <a href="#" className="hover:text-tayo-cream">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;