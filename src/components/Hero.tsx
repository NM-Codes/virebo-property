import { useTranslation } from 'react-i18next';
import heroImage from '../assets/House1.jpg';
import { brandMark } from '../brand';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="" className="h-full w-full object-cover object-center opacity-35" />
        <div className="absolute inset-0 bg-linear-to-b from-neutral-950/65 via-neutral-950/55 to-neutral-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(120,74,42,0.18),transparent_55%)]" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center w-full flex flex-col items-center justify-center pt-24">
        
        <div className="mb-6 animate-fade-in">
          <img src={brandMark} alt="" className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]" />
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-wide text-white mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          <span className="text-red-600">Virebo</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-white/90 font-light max-w-xl mx-auto tracking-wide mb-3 drop-shadow-md">
          {t('Let us guide you home')}
        </p>
        
        <p className="text-xs sm:text-sm text-neutral-300/60 font-extralight tracking-widest lowercase mb-12">
          #findyourplace
        </p>

        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-3 border border-white/20 hover:border-white text-white text-xs font-semibold tracking-widest uppercase py-4 px-10 rounded-full transition-all duration-300 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black hover:scale-105 shadow-lg"
        >
          Our Expertise
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-neutral-950 via-neutral-950/50 to-transparent z-10 pointer-events-none" />
    </section>
  );
}