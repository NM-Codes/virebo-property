import { useState } from 'react';

export default function StatsAndWhy() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const whyChooseUs = [
    { 
      title: 'Customer Service', 
      desc: 'Explore a simple interface for browsing properties and learning about available services.'
    },
    { 
      title: 'Reliable & Transparent', 
      desc: 'Review example listing details, categories, and property information.'
    },
    { 
      title: 'Independent Project', 
      desc: 'An NM Codes project showcasing a real-estate website concept.'
    }
  ];

  return (
    <section className="w-full bg-neutral-950 text-white py-20 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-red-500 text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
              Core Values
            </span>
            <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-white">
              Why Choose Us?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 text-center flex flex-col justify-center min-h-[160px] ${
                  hoveredCard === index
                    ? 'bg-white/0.02 border-white/20 shadow-[0_15px_30px_rgba(255,255,255,0.01)] scale-[1.01]'
                    : 'bg-white/0.005 border-white/5'
                }`}
              >
                <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="mission" className="bg-white/0.01 border border-white/5 p-8 sm:p-12 rounded-3xl backdrop-blur-md scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-red-500 text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">
                Our Mission
              </span>
              <p className="text-base sm:text-xl text-neutral-300 font-extralight leading-relaxed tracking-wide">
                Explore a sample property experience, from browsing categories to reviewing listing details.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="h-px w-8 bg-red-600" />
                <p className="text-xs uppercase tracking-[0.25em] text-red-500 font-semibold">Virebo Property · NM Codes</p>
              </div>
            </div>

            <div className="lg:col-span-6 w-full lg:border-l lg:border-white/5 lg:pl-12 space-y-6 divide-y divide-white/5">
              
              <div className="flex items-center justify-between pt-0 first:pt-0">
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-light text-white tracking-tight">01</span>
                  <p className="text-[11px] font-light tracking-wide text-neutral-400 mt-1 max-w-sm">
                    Browse a collection of sample property listings.
                  </p>
                </div>
                <span className="text-2xl opacity-60 select-none">🏢</span>
              </div>

              <div className="flex items-center justify-between pt-6">
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-light text-white tracking-tight">02</span>
                  <p className="text-[11px] font-light tracking-wide text-neutral-400 mt-1 max-w-sm">
                    Compare property types and listing details.
                  </p>
                </div>
                <span className="text-2xl opacity-60 select-none">🔑</span>
              </div>

              <div className="flex items-center justify-between pt-6">
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-light text-white tracking-tight">03</span>
                  <p className="text-[11px] font-light tracking-wide text-neutral-400 mt-1 max-w-sm">
                    Preview the contact form interface.
                  </p>
                </div>
                <span className="text-2xl opacity-60 select-none">🤝</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
