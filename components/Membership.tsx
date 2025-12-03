import React from 'react';
import { MEMBERSHIPS } from '../constants';
import { Check } from 'lucide-react';
import Button from './Button';
import ScrollReveal from './ScrollReveal';

const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-24 bg-tayo-cream">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal animation="fade-up" duration={800}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-tayo-grey mb-4">Membership</h2>
            <p className="font-sans text-tayo-grey/70 max-w-2xl mx-auto">
              Choose the level of access that fits your lifestyle.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {MEMBERSHIPS.map((tier, index) => (
            <ScrollReveal key={tier.name} animation="fade-up" delay={index * 150} duration={900}>
              <div
                className={`group relative p-10 rounded-sm border transition-all duration-500 flex flex-col h-full cursor-pointer ${
                  tier.isPrimary
                    ? 'bg-tayo-grey text-tayo-cream border-tayo-grey shadow-xl transform lg:-translate-y-4 hover:shadow-2xl hover:shadow-tayo-gold/20 hover:border-tayo-gold/50 hover:scale-[1.02]'
                    : 'bg-white text-tayo-grey border-tayo-grey/10 hover:border-tayo-gold hover:shadow-2xl hover:shadow-tayo-gold/15 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-tayo-gold/5'
                }`}
              >
              {tier.isPrimary && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-tayo-gold text-tayo-grey text-xs font-bold px-4 py-1 uppercase tracking-widest rounded-full">
                    Recommended
                  </span>
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className={`font-serif text-3xl mb-2 transition-colors duration-300 ${tier.isPrimary ? 'text-white group-hover:text-tayo-gold' : 'text-tayo-grey group-hover:text-tayo-gold'}`}>
                  {tier.name}
                </h3>
                <p className={`font-sans text-sm transition-colors duration-300 ${tier.isPrimary ? 'text-tayo-cream/70' : 'text-tayo-grey/70'}`}>
                  {tier.description}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 transition-transform duration-300 group-hover:translate-x-1">
                    <Check
                      size={18}
                      className={`mt-1 flex-shrink-0 transition-all duration-300 ${tier.isPrimary ? 'text-tayo-gold group-hover:scale-110' : 'text-tayo-terracotta group-hover:text-tayo-gold group-hover:scale-110'}`}
                    />
                    <span className="font-sans text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Button
                  variant={tier.isPrimary ? 'secondary' : 'outline'}
                  fullWidth
                  onClick={() => window.location.href='#contact'}
                >
                  Apply for {tier.name}
                </Button>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;