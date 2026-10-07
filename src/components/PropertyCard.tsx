import { Bed, Maximize, MapPin, ArrowUpRight } from 'lucide-react';
import { type Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group bg-neutral-900/30 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 flex flex-col h-full shadow-lg">
      
      <div className="relative aspect-16/10 bg-neutral-950 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        
        <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[9px] uppercase font-bold tracking-widest text-red-400 shadow-md">
          {property.type}
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between grow space-y-4">
        
        <div className="space-y-2">
          <h3 className="text-sm md:text-base font-semibold tracking-wide text-white group-hover:text-red-400 transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-light">
            <MapPin className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-neutral-400 pt-2">
          <div className="flex items-center gap-1.5 bg-neutral-900/60 border border-white/5 px-2.5 py-1 rounded-md">
            <Bed className="w-3.5 h-3.5 text-neutral-500" />
            <span>{property.rooms} rum</span>
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-900/60 border border-white/5 px-2.5 py-1 rounded-md">
            <Maximize className="w-3.5 h-3.5 text-neutral-500" />
            <span>{property.kvm} m²</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center text-emerald-400 font-bold text-sm md:text-base tracking-wide">
            <span className="text-emerald-500 opacity-70 text-xs font-medium mr-0.5">$</span>
            {property.price}
          </div>
          
          <button className="text-[10px] font-bold uppercase tracking-widest text-white bg-white/5 group-hover:bg-red-600 px-4 py-2.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer shadow-md">
            Visa <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </div>
  );
}