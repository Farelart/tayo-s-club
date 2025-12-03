import React from 'react';
import { MEMBERSHIPS } from '../constants';
import { Check } from 'lucide-react';
import Button from './Button';

const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-24 bg-tayo-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-tayo-grey mb-4">Membership</h2>
          <p className="font-sans text-tayo-grey/70 max-w-2xl mx-auto">
            Choose the level of access that fits your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {MEMBERSHIPS.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative p-10 rounded-sm border transition-all duration-300 flex flex-col ${
                tier.isPrimary 
                  ? 'bg-tayo-grey text-tayo-cream border-tayo-grey shadow-xl transform lg:-translate-y-4' 
                  : 'bg-white text-tayo-grey border-tayo-grey/10 hover:border-tayo-gold/50'
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
                <h3 className={`font-serif text-3xl mb-2 ${tier.isPrimary ? 'text-white' : 'text-tayo-grey'}`}>
                  {tier.name}
                </h3>
                <p className={`font-sans text-sm ${tier.isPrimary ? 'text-tayo-cream/70' : 'text-tayo-grey/70'}`}>
                  {tier.description}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check 
                      size={18} 
                      className={`mt-1 flex-shrink-0 ${tier.isPrimary ? 'text-tayo-gold' : 'text-tayo-terracotta'}`} 
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;