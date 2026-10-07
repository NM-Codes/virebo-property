import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { mockProperties } from './data/mockProperties';
import { type Property } from '../src/types/property';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedProperties from './components/FeaturedProperties'; 
import StatsAndWhy from './components/StatsAndWhy'; 
import Testimonials from './components/Testimonials';
import TeamPage from './components/TeamPage'; 
import FounderStory from './components/FounderStory'; 
import Careers from './components/Careers';
import Contact from './components/Contact';
import PropertiesPage from './components/FeaturedProperties';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);

      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function HomePage({ properties }: { properties: Property[] }) {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProperties properties={properties} />
      <StatsAndWhy />
      <Testimonials />
    </>
  );
}

export default function App() {
  const [properties] = useState<Property[]>(mockProperties);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      
      <div className="min-h-screen bg-neutral-950 text-white transition-all duration-300">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage properties={properties} />} />
          <Route path="/properties" element={<PropertiesPage properties={properties} />} />
          <Route path="/meet-our-team" element={<TeamPage />} />
          <Route path="/founder" element={<FounderStory />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}