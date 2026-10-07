import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, ChevronRight, ArrowUpRight, Globe, Mail, Home } from 'lucide-react';
import { brandMark } from '../brand';
import menuIcon from '../assets/menu.png';     
import closeIcon from '../assets/close-menu.png';   

interface MegaMenuLink {
  label: string;
  isHash?: boolean;
  hashTarget?: string;
  href: string;
}

interface StaticSectionItem {
  label: string;
}

export default function Navbar() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  
  const [mobilePropertiesOpen, setMobilePropertiesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const closeAllMenus = () => {
    setActiveMega(null);
    setIsOpen(false);
    setMobilePropertiesOpen(false);
    setMobileCompanyOpen(false);
    setMobilePartnersOpen(false);
    setMobileLangOpen(false);
  };

  useEffect(() => {
    window.addEventListener('popstate', closeAllMenus);
    return () => window.removeEventListener('popstate', closeAllMenus);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMega(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    if (i18n) i18n.changeLanguage(lng);
  };

  const megaMenuData = {
    properties: [
      { label: 'Buy House', href: '/properties?category=buy-house' },
      { label: 'Buy Land', href: '/properties?category=buy-land' },
      { label: 'Rent House', href: '/properties?category=rent-house' },
      { label: 'Build New Houses', href: '/properties?category=build-new' },
      { label: 'Renovate', href: '/properties?category=renovate' }
    ] as MegaMenuLink[],

    company: [
      { label: 'Our Mission & Vision', href: '/#mission', isHash: true, hashTarget: 'mission' },
      { label: 'Project preview', href: '/#testimonials', isHash: true, hashTarget: 'testimonials' },
      { label: 'Our approach', href: '/founder' },
      { label: 'How we help', href: '/meet-our-team' },
      { label: 'Work With Us', href: '/careers' }
    ] as MegaMenuLink[],

    partners: [
      { label: 'Property resources' },
      { label: 'Buying guide' },
      { label: 'Market overview' },
      { label: 'Project information' }
    ] as StaticSectionItem[]
  };

  const handleLinkClick = (link: MegaMenuLink) => {
    closeAllMenus();
    
    if (link.isHash && link.hashTarget) {
      const targetId = link.hashTarget.replace('#', '');
      
      if (location.pathname === '/') {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(link.href);
        setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
      return;
    }

    navigate(link.href);
  };

  const handleExpertiseClick = () => {
    closeAllMenus();
    if (location.pathname === '/') {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const handlePropertiesClick = () => {
    closeAllMenus();
    if (location.pathname === '/') {
      document.getElementById('current-listings')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('current-listings')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <>
      <nav 
        ref={menuRef}
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between h-20 transition-all duration-300 ${
          isScrolled || activeMega || isOpen
            ? 'bg-neutral-950 border-b border-white/5 shadow-xl shadow-black/40' 
            : 'bg-transparent border-b border-transparent' 
        }`}
      >
        <Link to="/" onClick={closeAllMenus} aria-label="Virebo Property home" className="flex items-center gap-2 sm:gap-3 cursor-pointer z-50 shrink-0 min-w-0 max-w-[35%] md:max-w-[25%] lg:max-w-none">
          <img src={brandMark} alt="" className="h-8 sm:h-10 md:h-11 lg:h-12 w-auto object-contain transition-all duration-300 shrink-0" />
          <h2 className="text-white font-medium tracking-widest uppercase hidden sm:block drop-shadow-md transition-all duration-300 select-none leading-tight min-w-0 truncate sm:overflow-visible sm:whitespace-normal text-[10px] md:text-[calc(9px+0.3vw)] lg:text-base xl:text-lg">
            Virebo <span className="text-red-600 font-bold drop-shadow-[0_2px_8px_rgba(220,38,38,0.4)] block lg:inline">Property</span>
          </h2>
        </Link>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-3 lg:gap-6 xl:gap-12 max-w-[40%] justify-center min-w-0">
          <Link to="/" onClick={closeAllMenus} className="text-[9px] lg:text-xs font-semibold uppercase tracking-widest text-white/90 hover:text-red-500 transition-colors whitespace-nowrap">
            Home
          </Link>

          <button 
            onClick={() => setActiveMega(activeMega === 'explore' ? null : 'explore')}
            className={`flex items-center gap-1 text-[9px] lg:text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer whitespace-nowrap ${
              activeMega === 'explore' ? 'text-red-500' : 'text-white/90 hover:text-red-500'
            }`}
          >
            <span className="truncate">Explore properties</span>
            <ChevronDown className={`w-3 h-3 lg:w-3.5 lg:h-3.5 transition-transform duration-300 shrink-0 ${activeMega === 'explore' ? 'rotate-180 text-red-500' : 'text-white/40'}`} />
          </button>

          <button 
            onClick={handlePropertiesClick}
            className="text-[9px] lg:text-xs font-semibold uppercase tracking-widest text-white/90 hover:text-red-500 transition-colors cursor-pointer whitespace-nowrap"
          >
            Properties
          </button>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 z-50 shrink-0">
          
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-2 lg:px-3 py-1.5 lg:py-2 rounded-full text-xs text-neutral-300 shrink-0">
            <Globe className="w-3 h-3 lg:w-3.5 lg:h-3.5 opacity-60 text-white shrink-0" />
            <select 
              onChange={(e) => changeLanguage(e.target.value)} 
              value={i18n?.language || 'en'}
              className="bg-transparent border-none outline-none cursor-pointer uppercase font-medium tracking-wider text-[9px] lg:text-[11px] text-white focus:bg-neutral-950 max-w-17.5 lg:max-w-none"
            >
              <option value="en" className="bg-neutral-950 text-white">EN</option>
              <option value="so" className="bg-neutral-950 text-white">SO</option>
              <option value="sv" className="bg-neutral-950 text-white">SV</option>
              <option value="ar" className="bg-neutral-950 text-white">AR</option>
            </select>
          </div>

          <Link 
            to="/contact"
            onClick={closeAllMenus}
            className="hidden md:flex bg-red-600 hover:bg-red-700 text-[9px] lg:text-[11px] font-bold tracking-widest uppercase px-3 lg:px-6 py-2 lg:py-3 rounded-lg shadow-lg shadow-red-600/20 transition-all text-white items-center gap-1 whitespace-nowrap shrink-0"
          >
            Contact
            <ArrowUpRight className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
          </Link>

          <div className="md:hidden flex items-center gap-3">
            {!isOpen && (
              <Link 
                to="/contact" 
                onClick={closeAllMenus} 
                className="w-8 h-8 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 transition-all active:scale-95 shadow-md shadow-red-600/5 hover:bg-red-600/20"
              >
                <Mail className="w-4 h-4 stroke-[2.5]" />
              </Link>
            )}
            
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-8 h-8 flex items-center justify-center focus:outline-none transition-all active:scale-95"
            >
              <img src={isOpen ? closeIcon : menuIcon} alt="Menu" className="w-full h-full object-contain" />
            </button>
          </div>

        </div>

        <div 
          className={`absolute top-20 left-0 right-0 bg-neutral-950 border-b border-white/5 transition-all duration-300 ease-in-out shadow-2xl overflow-hidden ${
            activeMega === 'explore' ? 'max-h-120 opacity-100 py-12' : 'max-h-0 opacity-0 pointer-events-none py-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 border-b border-white/5 pb-2">Properties</h3>
              <ul className="space-y-2.5">
                {megaMenuData.properties.map((link, idx) => (
                  <li key={idx}><button onClick={() => handleLinkClick(link)} className="text-red-400/90 hover:text-white text-xs font-medium transition-all block text-left cursor-pointer hover:translate-x-1">{link.label}</button></li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 border-b border-white/5 pb-2">Our Company</h3>
              <ul className="space-y-2.5">
                {megaMenuData.company.map((link, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => handleLinkClick(link)} 
                      className="text-xs font-light text-neutral-400 hover:text-red-500 transition-all block text-left cursor-pointer hover:translate-x-1"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 border-b border-white/5 pb-2">Network & Partners</h3>
              <ul className="space-y-2.5">
                {megaMenuData.partners.map((partner, idx) => (
                  <li key={idx}>
                    <span className="text-neutral-500 text-xs font-light block select-none cursor-default">
                      {partner.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-900/40 border border-white/5 p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-red-500 mb-2">
                  <Home className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-bold tracking-[0.25em] uppercase block">Current Listings</span>
                </div>
                <h4 className="text-white text-xs font-normal mb-1.5 tracking-wide">Explore Available Real Estate</h4>
                <p className="text-[10px] text-neutral-400 font-light leading-relaxed">Browse sample property types and example listings in this student-project demo.</p>
              </div>
              <Link to="/properties" onClick={closeAllMenus} className="text-[11px] font-medium text-white hover:text-red-500 transition-colors flex items-center gap-1 mt-4 group">
                View All Listings <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-x-0 top-20 bottom-0 bg-neutral-950 z-40 flex flex-col justify-between transition-all duration-500 ease-in-out md:hidden overflow-y-auto border-t border-white/5 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="w-full text-neutral-200">
          
          <Link 
            to="/" 
            onClick={closeAllMenus}
            className="w-full flex items-center justify-between py-5 px-6 border-b border-white/5 text-sm font-normal tracking-wide hover:bg-white/5"
          >
            <span>Home</span>
            <ChevronRight className="w-4 h-4 text-neutral-500" />
          </Link>

          <button 
            onClick={handleExpertiseClick}
            className="w-full flex items-center justify-between py-5 px-6 border-b border-white/5 text-sm font-normal tracking-wide hover:bg-white/5 text-left bg-transparent cursor-pointer"
          >
            <span>Our Expertise</span>
            <ChevronRight className="w-4 h-4 text-neutral-500" />
          </button>

          <div>
            <div className="w-full py-4 px-6 border-b border-white/5 text-xs font-bold uppercase tracking-widest text-neutral-500 bg-neutral-900/10">
              Property resources
            </div>

            <div className="border-b border-white/5">
              <button 
                onClick={() => setMobilePropertiesOpen(!mobilePropertiesOpen)}
                className="w-full flex items-center justify-between py-4 px-8 text-xs font-semibold uppercase tracking-wider text-red-400"
              >
                <span>Properties</span>
                {mobilePropertiesOpen ? <ChevronUp className="w-3.5 h-3.5 text-red-500" /> : <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />}
              </button>
              <div className={`bg-neutral-900/30 transition-all duration-200 overflow-hidden ${mobilePropertiesOpen ? 'max-h-75 pb-3' : 'max-h-0'}`}>
                {megaMenuData.properties.map((link, idx) => (
                  <button key={idx} onClick={() => handleLinkClick(link)} className="w-full text-left py-3 px-12 text-xs text-neutral-300 font-medium hover:text-white block">→ {link.label}</button>
                ))}
              </div>
            </div>

            <div className="border-b border-white/5">
              <button 
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                className="w-full flex items-center justify-between py-4 px-8 text-xs font-semibold uppercase tracking-wider text-white"
              >
                <span>Our Company</span>
                {mobileCompanyOpen ? <ChevronUp className="w-3.5 h-3.5 text-red-500" /> : <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />}
              </button>
              <div className={`bg-neutral-900/30 transition-all duration-200 overflow-hidden ${mobileCompanyOpen ? 'max-h-75 pb-3' : 'max-h-0'}`}>
                {megaMenuData.company.map((link, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleLinkClick(link)} 
                    className="w-full text-left py-3 px-12 text-xs font-light text-neutral-400 hover:text-red-500 block"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-b border-white/5">
              <button 
                onClick={() => setMobilePartnersOpen(!mobilePartnersOpen)}
                className="w-full flex items-center justify-between py-4 px-8 text-xs font-semibold uppercase tracking-wider text-white"
              >
                <span>Network & Partners</span>
                {mobilePartnersOpen ? <ChevronUp className="w-3.5 h-3.5 text-red-500" /> : <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />}
              </button>
              <div className={`bg-neutral-900/30 transition-all duration-200 overflow-hidden ${mobilePartnersOpen ? 'max-h-75 pb-3' : 'max-h-0'}`}>
                {megaMenuData.partners.map((partner, idx) => (
                  <span key={idx} className="w-full text-left py-3 px-12 text-xs text-neutral-500 block select-none">{partner.label}</span>
                ))}
              </div>
            </div>

          </div>

          <button 
            onClick={handlePropertiesClick}
            className="w-full flex items-center justify-between py-5 px-6 border-b border-white/5 text-sm font-semibold tracking-wide hover:bg-white/5 text-neutral-200 text-left bg-transparent cursor-pointer"
          >
            <span>Current Listings</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400" />
          </button>

          <Link 
            to="/contact" 
            onClick={closeAllMenus}
            className="w-full flex items-center justify-between py-5 px-6 border-b border-white/5 text-sm font-normal tracking-wide hover:bg-white/5 text-red-500"
          >
            <span>Contact Elite Support</span>
            <ArrowUpRight className="w-4 h-4 text-red-500" />
          </Link>

          <div className="border-b border-white/5">
            <button 
              onClick={() => setMobileLangOpen(!mobileLangOpen)}
              className="w-full flex items-center justify-between py-5 px-6 text-sm font-normal tracking-wide text-neutral-400 hover:bg-white/5"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-neutral-500" />
                <span>Change Language ({i18n?.language?.toUpperCase() || 'EN'})</span>
              </div>
              {mobileLangOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            <div className={`bg-neutral-900/40 transition-all duration-200 overflow-hidden grid grid-cols-2 gap-2 px-6 ${mobileLangOpen ? 'max-h-37.5 py-4' : 'max-h-0'}`}>
              {[ {c:'en', n:'English'}, {c:'so', n:'Soomaali'}, {c:'sv', n:'Svenska'}, {c:'ar', n:'العربية'} ].map((lng) => (
                <button 
                  key={lng.c} 
                  onClick={() => changeLanguage(lng.c)} 
                  className={`py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider text-center font-medium border border-white/5 ${i18n?.language === lng.c ? 'bg-red-600 text-white border-red-600' : 'bg-neutral-950 text-neutral-400'}`}
                >
                  {lng.n}
                </button>
              ))}
            </div>
          </div>

        </div>

        <div className="p-8 text-center bg-linear-to-t from-neutral-900/60 to-transparent border-t border-white/5 shrink-0">
          <span className="text-red-500 text-[10px] font-bold tracking-[0.3em] uppercase block mb-1">Virebo Property</span>
          <p className="text-[9px] text-neutral-600 uppercase tracking-widest">A student project</p>
        </div>
      </div>
    </>
  );
}