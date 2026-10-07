import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { brandMark } from '../brand';

export default function FounderStory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full bg-neutral-950 text-white py-32 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-red-600/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-red-500 text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
            THE PROJECT
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-wide mb-4">
            Our approach
          </h1>
          <p className="text-neutral-500 font-light text-xs uppercase tracking-[0.25em]">
            Virebo Property
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="md:col-span-4 flex flex-col items-center text-center p-8 bg-white/1 border border-white/5 rounded-3xl backdrop-blur-md">
            <div className="w-32 h-32 rounded-full border border-white/10 bg-neutral-900 flex items-center justify-center mb-6 overflow-hidden shadow-xl">
              <img src={brandMark} alt="" className="w-16 h-16 object-contain opacity-80" />
            </div>
            <h2 className="text-lg font-medium text-white tracking-wide">An NM Codes project</h2>
            <p className="text-xs text-red-500 uppercase tracking-widest mt-1">Property website demo</p>
            
            <div className="w-full h-px bg-white/5 my-6" />
            <p className="text-[11px] font-light text-neutral-400 italic leading-relaxed">
              "An interface concept for browsing sample property listings."
            </p>
          </div>

          <div className="md:col-span-8 space-y-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed tracking-wide">
            <p>
              Virebo is an NM Codes project exploring how a property website can present listings, services, and useful information in one place.
            </p>
            <p>
              The pages are a design and functionality demo. Property information, testimonials, contact details, and career content are examples only; they do not represent active listings, verified services, or a real estate business.
            </p>
            
            <div className="border-l-2 border-red-600 pl-6 my-8 italic text-neutral-400 text-sm sm:text-base">
              "The goal is to make it easy to explore a property listing and see how the browsing experience could work."
            </div>

            <p>
              No employees, founders, partner organizations, or real-world contact channels are represented here. The project is not affiliated with the company or people whose identity appeared in the original template.
            </p>
          </div>

        </div>

        <div className="text-center pt-8 border-t border-white/5">
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
