import { useState, useEffect } from 'react';
import sellIcon from '../assets/sell-icon.png';
import landIcon from '../assets/land-icon.png';
import rentIcon from '../assets/rent-icon.png';
import buildIcon from '../assets/build-icon.png';
import renIcon from '../assets/renovate-icon.png';

type TabType = 'sales' | 'land' | 'rentals' | 'development' | 'renovations';

const servicesData = {
  sales: {
    title: 'Sales',
    icon: sellIcon,
    subtitle: 'Exclusive Property Brokerage',
    description: 'Maximizing asset value through bespoke, high-end marketing campaigns and our private global buyer networks. We ensure your luxury estate reaches qualified investors with absolute discretion.',
    features: ['Off-Market Placements', 'International Marketing', 'Premium Photography & Cinematography']
  },
  land: {
    title: 'Land',
    icon: landIcon,
    subtitle: 'Strategic Land & Plot Acquisitions',
    description: 'Strategic acquisition and brokerage of prime raw land, commercial plots, and development rights. We identify high-yield locations with tremendous future growth potential.',
    features: ['Zoning & Feasibility Studies', 'Prime Plot Sourcing', 'Joint Venture Structuring']
  },
  rentals: {
    title: 'Rentals',
    icon: rentIcon,
    subtitle: 'High-End Leasing & Asset Management',
    description: 'Premium property leasing and comprehensive asset management designed for discerning landlords. We secure elite tenants and manage everything with flawless execution.',
    features: ['Rigorous Tenant Screening', 'Bespoke Lease Agreements', 'Full-Service Property Care']
  },
  development: {
    title: 'Development',
    icon: buildIcon,
    subtitle: 'Luxury Turnkey Construction',
    description: 'From initial architectural masterpieces to finished, breathtaking luxury real estate. We manage elite residential and commercial development projects from foundation to finishing touch.',
    features: ['Architectural Tailoring', 'Project Management', 'Sustainable Premium Materials']
  },
  renovations: {
    title: 'Renovations',
    icon: renIcon,
    subtitle: 'Bespoke Refurbishment & Tailoring',
    description: 'Value-adding transformation and high-end refurbishment of premium properties. Focused on exquisite European materials, intelligent home integration, and timeless architecture.',
    features: ['Custom Interior Architecture', 'Premium Material Sourcing', 'Structural Property Optimization']
  }
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<TabType>('sales');

  useEffect(() => {
    const handleTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<TabType>;
      if (customEvent.detail in servicesData) {
        setActiveTab(customEvent.detail);
      }
    };

    window.addEventListener('changeServiceTab', handleTabChange);
    return () => window.removeEventListener('changeServiceTab', handleTabChange);
  }, []);

  return (
    <section id="services" className="w-full bg-neutral-950 text-white py-28 border-b border-neutral-900 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-extralight tracking-wide text-white">
            Premium Real Estate Services
          </h2>
        </div>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 bg-neutral-900/40 p-2 rounded-2xl border border-neutral-900 max-w-4xl mx-auto mb-16 backdrop-blur-sm">
          {(Object.keys(servicesData) as Array<keyof typeof servicesData>).map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 min-w-35 text-center uppercase text-xs font-semibold tracking-widest py-4 px-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/20 font-bold scale-100' 
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60'
                }`}
              >
                {servicesData[key].title}
              </button>
            );
          })}
        </div>

        <div className="bg-neutral-900/20 border border-neutral-900 p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 shadow-2xl transition-all duration-500">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center p-6 shrink-0 shadow-inner">
            <img 
              src={servicesData[activeTab].icon} 
              alt={servicesData[activeTab].title} 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <span className="text-red-500 text-xs font-bold tracking-widest uppercase block mb-1">
              {servicesData[activeTab].title} Service
            </span>
            <h3 className="text-xl sm:text-2xl font-light tracking-wide text-white mb-4">
              {servicesData[activeTab].subtitle}
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
              {servicesData[activeTab].description}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {servicesData[activeTab].features.map((feature, i) => (
                <span key={i} className="bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-300 px-3 py-1.5 rounded-md font-medium tracking-wide">
                  • {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}