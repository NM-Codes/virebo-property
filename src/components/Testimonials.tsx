import { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      text: "Browse sample listings and review their key details in one place.",
      author: "PROJECT FEATURE",
      location: "LISTINGS"
    },
    {
      text: "Explore property categories and see how an online browsing experience could work.",
      author: "PROJECT FEATURE",
      location: "DISCOVERY"
    }
  ];

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="w-full bg-white text-neutral-950 py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-red-500 text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
            Project preview
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-neutral-950 tracking-wide">
            Explore the experience
          </h2>
          <div className="w-8 h-0.5 bg-red-500 mx-auto mt-4 opacity-60" />
        </div>

        <div className="bg-neutral-950/92 backdrop-blur-2xl border border-white/10 p-8 sm:p-16 rounded-3xl text-center relative min-h-75 flex flex-col justify-center items-center max-w-4xl mx-auto shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
          
          <span className="text-5xl font-serif text-red-600/30 block mb-4 select-none leading-none">“</span>
          
          <div className="transition-all duration-500 max-w-2xl">
            <p className="text-sm sm:text-lg text-neutral-300 font-light leading-relaxed tracking-wide italic mb-8">
              "{reviews[activeIndex].text}"
            </p>
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-red-500">
              {reviews[activeIndex].author} <span className="text-neutral-500 font-normal">, {reviews[activeIndex].location}</span>
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white/3 border border-white/5 hover:border-white/20 text-white flex items-center justify-center text-xs transition-all cursor-pointer active:scale-95 hover:bg-white/8"
          >
            ←
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white/3 border border-white/5 hover:border-white/20 text-white flex items-center justify-center text-xs transition-all cursor-pointer active:scale-95 hover:bg-white/8"
          >
            →
          </button>

          <div className="flex gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeIndex === i ? 'w-6 bg-red-600' : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>

        </div>

      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.02),transparent)] pointer-events-none" />
    </section>
  );
}