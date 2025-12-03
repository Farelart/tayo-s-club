import React, { useState } from 'react';
import Button from './Button';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Membership Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to send to backend would go here
    alert('Thank you for your inquiry. A concierge will contact you shortly.');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ScrollReveal animation="fade-right" duration={800}>
          <div>
            <span className="text-tayo-terracotta uppercase tracking-widest text-sm font-semibold">Contact Us</span>
            <h2 className="font-serif text-4xl md:text-5xl text-tayo-grey mt-2 mb-6">Begin Your Journey</h2>
            <p className="font-sans text-tayo-grey/70 mb-8 leading-relaxed">
              Whether you are interested in membership, booking an experience, or corporate solutions, our team is ready to assist you with the utmost discretion and efficiency.
            </p>

            <div className="bg-tayo-cream/50 p-8 rounded-sm border border-tayo-grey/5">
               <h4 className="font-serif text-xl text-tayo-grey mb-4">Direct Contact</h4>
               <p className="font-sans text-sm text-tayo-grey/80 mb-2">
                 <strong>Concierge Desk:</strong> +229 01 66 44 82 24
               </p>
               <p className="font-sans text-sm text-tayo-grey/80">
                 <strong>Email:</strong> concierge@tayosclub.com
               </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left" delay={200} duration={800}>
          <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-wider text-tayo-grey font-semibold">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-tayo-cream/20 border-b border-tayo-grey/30 p-3 focus:outline-none focus:border-tayo-gold transition-colors"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-xs uppercase tracking-wider text-tayo-grey font-semibold">Company (Optional)</label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full bg-tayo-cream/20 border-b border-tayo-grey/30 p-3 focus:outline-none focus:border-tayo-gold transition-colors"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-wider text-tayo-grey font-semibold">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-tayo-cream/20 border-b border-tayo-grey/30 p-3 focus:outline-none focus:border-tayo-gold transition-colors"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs uppercase tracking-wider text-tayo-grey font-semibold">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-tayo-cream/20 border-b border-tayo-grey/30 p-3 focus:outline-none focus:border-tayo-gold transition-colors"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="type" className="text-xs uppercase tracking-wider text-tayo-grey font-semibold">Inquiry Type</label>
            <select
              id="type"
              name="type"
              className="w-full bg-tayo-cream/20 border-b border-tayo-grey/30 p-3 focus:outline-none focus:border-tayo-gold transition-colors text-tayo-grey"
              onChange={handleChange}
            >
              <option>Membership Inquiry</option>
              <option>Book an Experience</option>
              <option>Corporate Solution</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs uppercase tracking-wider text-tayo-grey font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full bg-tayo-cream/20 border-b border-tayo-grey/30 p-3 focus:outline-none focus:border-tayo-gold transition-colors"
              onChange={handleChange}
            ></textarea>
          </div>

          <Button type="submit" variant="primary" fullWidth className="mt-8">
            Send Inquiry
          </Button>
        </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;