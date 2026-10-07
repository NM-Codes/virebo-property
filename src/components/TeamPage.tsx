import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const focusAreas = [
    { title: 'Property search', description: 'Browse homes and land listings.' },
    { title: 'Buying guide', description: 'Explore the steps in a property purchase.' },
    { title: 'Rentals', description: 'Find rental options in one place.' },
    { title: 'New homes', description: 'Discover building and development ideas.' },
    { title: 'Renovation', description: 'Explore ways to improve a property.' },
    { title: 'Listing details', description: 'Review the information for each listing.' },
    { title: 'Market overview', description: 'Compare property types and locations.' },
    { title: 'Project inquiry', description: 'Use the contact form interface.' }
  ];

  return (
    <section className="w-full bg-neutral-950 text-white py-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-wide mb-4">
          How Virebo helps
        </h1>
        <p className="text-neutral-400 font-light text-xs uppercase tracking-[0.3em] mb-20">
          A simple way to explore property
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 max-w-5xl mx-auto mb-24">
          {focusAreas.map((area) => (
            <div key={area.title} className="flex flex-col items-center group">
              
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center mb-5 relative overflow-hidden group-hover:border-red-500/40 transition-colors duration-300">
                <svg className="w-12 h-12 text-neutral-500 group-hover:text-neutral-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-6h6v6" />
                </svg>
              </div>

              <h3 className="text-sm sm:text-base font-medium text-white tracking-wide">
                {area.title}
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-1">
                {area.description}
              </p>

            </div>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-white/5 max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-neutral-400 hover:text-white transition-colors group"
          >
            ← Back to home
          </Link>
        </div>

      </div>
    </section>
  );
}