import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, ShieldCheck, Heart, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import type { Property } from '../data';

interface Props {
  property: Property;
  index: number;
}

export default function PropertyCard({ property, index }: Props) {
  const { setSelectedProperty, addFavorite, removeFavorite, favorites } = useAppStore();
  const isFav = favorites.some(f => f.id === property.id);
  const propertyImages = property.images && property.images.length > 0 ? property.images : [property.image];
  const hasMultipleImages = propertyImages.length > 1;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFav) {
      removeFavorite(property.id);
    } else {
      addFavorite(property);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => setSelectedProperty(property)}
      className="bg-white dark:bg-[#16161a] rounded-[16px] overflow-hidden shadow-sm group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-white/5 cursor-pointer flex flex-col"
    >
      {/* Image Block */}
      <div className="relative h-[240px] overflow-hidden border-b border-gray-100 dark:border-white/5">
        <img
          src={propertyImages[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Price Pill */}
        <div className="absolute top-4 left-4 z-10">
          <div className="px-3 py-1.5 bg-[#1e293b]/95 backdrop-blur-sm shadow-sm text-white text-[13px] font-semibold rounded-lg flex items-center">
            {property.price}{property.priceLabel}
          </div>
        </div>

        {/* Location Pill */}
        <div className="absolute top-4 right-4 z-10">
          <div className="px-3 py-1.5 bg-white/95 dark:bg-[#1e293b]/95 backdrop-blur-sm shadow-sm text-[#111827] dark:text-white text-[12px] font-bold rounded-lg flex items-center">
            {property.city}
          </div>
        </div>

        {/* Image Navigation & Count */}
        {hasMultipleImages && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/95 dark:bg-[#1e293b]/95 backdrop-blur-sm shadow-sm rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={16} className="text-gray-600 dark:text-white" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-14 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/95 dark:bg-[#1e293b]/95 backdrop-blur-sm shadow-sm rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={16} className="text-gray-600 dark:text-white" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {hasMultipleImages && (
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full">
            <Images size={12} className="text-white" />
            <span className="text-white text-[10px] font-medium">{currentImageIndex + 1}/{propertyImages.length}</span>
          </div>
        )}

        {/* Heart Button */}
        <button 
          onClick={toggleFavorite}
          className="absolute bottom-4 right-4 z-10 p-2 bg-white/95 dark:bg-[#1e293b]/95 backdrop-blur-sm shadow-sm rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
        >
          <Heart 
            size={18} 
            className={isFav ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'} 
          />
        </button>
      </div>

      {/* Content Block */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[18px] font-bold text-[#111827] dark:text-white mb-2 line-clamp-1">
          {property.title}
        </h3>
        
        <p className="text-[#64748b] dark:text-gray-400 font-medium text-[13px] mb-4 line-clamp-1">
          {property.location}
        </p>

        {/* Verification Badge */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
             <ShieldCheck className="w-[14px] h-[14px] text-blue-600" />
             <span className="text-[11px] font-bold text-[#111827] dark:text-gray-300 uppercase tracking-wide">
               Verified Agent
             </span>
          </div>
        </div>

        {/* Specifications Row */}
        <div className="flex items-center gap-6 text-[#64748b] dark:text-gray-400 text-[13px] font-semibold mb-6">
          <div className="flex items-center gap-2">
             <Bed strokeWidth={2.5} size={16} className="text-gray-400" />
             <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
             <Bath strokeWidth={2.5} size={16} className="text-gray-400" />
             <span>{property.baths} Baths</span>
          </div>
        </div>

        {/* Footer Agent Row */}
        <div className="flex items-center justify-between mt-auto">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 shrink-0">
                 <img src={property.agentImage || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100"} className="w-full h-full object-cover" alt={property.agentName} />
              </div>
              <span className="text-[13px] font-semibold text-[#111827] dark:text-white line-clamp-1">
                {property.agentName || 'Tunde Cole'}
              </span>
           </div>
           
           <div className="shrink-0 px-3 py-1 rounded-[6px] border border-gray-200 dark:border-white/10 bg-[#f8fafc] dark:bg-white/5 text-[12px] font-bold text-[#334155] dark:text-gray-300 shadow-sm capitalize">
              {property.type}
           </div>
        </div>
      </div>
    </motion.article>
  );
}
