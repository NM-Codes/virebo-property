import { Link } from 'react-router-dom';
import { Home, ArrowUpRight } from 'lucide-react';
import PropertyCard from './PropertyCard';
import { type Property } from '../types/property';

interface FeaturedPropertiesProps {
  properties: Property[];
}

export default function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  const featured = properties.slice(0, 3);

  return (
    <div id="current-listings" className="bg-neutral-950 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          <div className="space-y-1">
            <h2 className="text-lg md:text-xl font-bold tracking-wider uppercase flex items-center gap-2 text-white">
              <Home className="w-4 h-4 text-red-500" />               Sample properties
            </h2>
            <p className="text-xs text-neutral-400 font-light">
              Example listings in this NM Codes project; not real properties or offers.
            </p>
          </div>
          
          <Link 
            to="/properties" 
            className="w-fit text-[11px] font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-red-600 px-5 py-3 rounded-xl transition-all flex items-center gap-1.5 shadow-md shrink-0"
          >
            Explore All <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

      </div>
    </div>
  );
}
