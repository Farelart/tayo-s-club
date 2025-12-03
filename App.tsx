import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Services from './components/Services';
import About from './components/About';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Corporate from './components/Corporate';

function App() {
  return (
    <div className="min-h-screen bg-[#fff] font-sans selection:bg-tayo-gold selection:text-tayo-grey">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <About />
        <Services />
        <Corporate />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;