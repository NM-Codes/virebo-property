import { Link, useNavigate } from 'react-router-dom';
import { brandMark } from '../brand';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Sales', tab: 'sales' },
        { label: 'Land', tab: 'land' },
        { label: 'Rentals', tab: 'rentals' },
        { label: 'Development', tab: 'development' },
        { label: 'Renovations', tab: 'renovations' }
      ]
    },
    {
      title: 'Our Company',
      links: [
        { label: 'Our Mission & Vision', href: '/#mission' },
        { label: 'Our approach', href: '/founder' },
        { label: 'How we help', href: '/meet-our-team' },
        { label: 'Work With Us', href: '/careers' },
        { label: 'Contact Us', href: '/contact' }
      ]
    },
    {
      title: 'Network & Partners',
      links: [
        { label: 'Property resources', href: '/' },
        { label: 'Buying guide', href: '/' },
        { label: 'Market overview', href: '/' },
        { label: 'Project information', href: '/' }
      ]
    }
  ];

  return (
    <footer className="w-full bg-neutral-950 text-white pt-16 pb-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 items-start">
          
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={brandMark} alt="" className="h-10 w-auto object-contain" />
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white">Virebo Property</h4>
            </Link>
            <p className="text-[11px] text-neutral-400 font-light leading-relaxed text-center md:text-left max-w-sm">
              An independent student project exploring a clear, simple way to browse property listings.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-3 gap-4 w-full">
            {footerSections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  {section.title}
                </h5>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link, lIdx) => {
                    if ('tab' in link) {
                      return (
                        <li key={lIdx}>
                          <button
                            onClick={() => {
                              navigate('/#services');
                              const event = new CustomEvent('changeServiceTab', { detail: link.tab });
                              window.dispatchEvent(event);
                              const element = document.getElementById('services');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            className="text-[11px] text-neutral-500 hover:text-white transition-colors duration-200 font-light block text-left cursor-pointer"
                          >
                            {link.label}
                          </button>
                        </li>
                      );
                    }

                    if (link.href?.startsWith('/#')) {
                      return (
                        <li key={lIdx}>
                          <button
                            onClick={() => {
                              const targetId = link.href!.replace('/#', '');
                              navigate(link.href!);
                              setTimeout(() => {
                                const element = document.getElementById(targetId);
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                              }, 100);
                            }}
                            className="text-[11px] text-neutral-500 hover:text-white transition-colors duration-200 font-light block text-left cursor-pointer"
                          >
                            {link.label}
                          </button>
                        </li>
                      );
                    }

                    return (
                      <li key={lIdx}>
                        <Link
                          to={link.href || '/'}
                          className="text-[11px] text-neutral-500 hover:text-white transition-colors duration-200 font-light block whitespace-nowrap"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-3 flex justify-center md:justify-end gap-3 pt-4 md:pt-0">
            {['facebook', 'instagram', 'linkedin'].map((platform) => (
              <a
                key={platform}
                href={`https://${platform}.com`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/0.02 border border-white/5 flex items-center justify-center text-xs text-neutral-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
              >
                {platform[0].toUpperCase()}
              </a>
            ))}
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] text-neutral-600 uppercase tracking-widest text-center sm:text-left gap-4">
          <p>© {currentYear} Virebo Property · <a href="https://github.com/NM-Codes" target="_blank" rel="noopener noreferrer">NM Codes</a></p>
        </div>

      </div>
    </footer>
  );
}