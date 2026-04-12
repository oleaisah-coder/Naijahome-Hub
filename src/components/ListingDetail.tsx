import { motion } from 'framer-motion';
import { Bed, Bath, Info, MapPin, Check, X, Share, Heart, Star } from 'lucide-react';
import Badge from './Badge';
import type { Property } from '../data';

interface Props {
  property: Property;
  onClose: () => void;
}

export default function ListingDetail({ property, onClose }: Props) {
  const isEnsuite = property.beds === property.baths;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8 bg-charcoal-900/40 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white dark:bg-[#16161a] w-full max-w-6xl h-full max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative transition-colors duration-500"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-50 w-12 h-12 bg-white dark:bg-[#16161a] hover:bg-gray-100 dark:hover:bg-white/10 text-slate-500 dark:text-gray-400 rounded-full flex items-center justify-center transition-all shadow-md border border-gray-100 dark:border-white/10"
        >
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="lg:w-3/5 h-[300px] lg:h-full relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 flex flex-col gap-3">
             {property.verified && (
                <Badge 
                  label="Verified Property" 
                  variant="emerald" 
                  icon={<Check size={14} />} 
                />
             )}
             {isEnsuite && (
                <Badge 
                  label="100% En-suite" 
                  variant="royal" 
                  icon={<Star size={14} />} 
                />
             )}
          </div>
          <div className="absolute top-6 right-24 lg:right-6 flex items-center gap-3">
             <button className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-royal-500 transition-all border border-white/20 shadow-lg">
                <Share size={20} />
             </button>
             <button className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-red-500 transition-all border border-white/20 shadow-lg">
                <Heart size={20} />
             </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-2/5 p-8 lg:p-14 overflow-y-auto no-scrollbar">
          <div className="flex items-center justify-between mb-4">
            <span className="text-royal-500 font-bold text-sm uppercase tracking-widest">{property.type}</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-900 dark:text-white mb-4">{property.title}</h2>
          
          <div className="flex items-center gap-2 text-charcoal-500 dark:text-charcoal-300 font-bold mb-8">
            <MapPin size={20} className="text-royal-500" />
            <span className="text-lg">{property.location}</span>
          </div>

          <div className="text-4xl font-black text-royal-500 mb-10">
            {property.price}{property.priceLabel}
          </div>

          {/* Specifications Row */}
          <div className="flex items-center justify-between py-8 border-y border-charcoal-100 dark:border-white/5 flex-nowrap overflow-x-auto no-scrollbar gap-4 mb-10">
            <div className="flex flex-col items-center gap-2 min-w-[60px]">
               <div className="w-11 h-11 rounded-2xl bg-charcoal-50 dark:bg-white/5 flex items-center justify-center text-charcoal-400 dark:text-charcoal-300">
                  <Bed size={18} />
               </div>
               <span className="text-sm font-bold text-charcoal-500 dark:text-charcoal-400">{property.beds} Beds</span>
            </div>

            <div className="flex flex-col items-center gap-2 min-w-[60px]">
               <div className="w-11 h-11 rounded-2xl bg-charcoal-50 dark:bg-white/5 flex items-center justify-center text-charcoal-400 dark:text-charcoal-300">
                  <Bath size={18} />
               </div>
               <span className="text-sm font-bold text-charcoal-500 dark:text-charcoal-400">{property.baths} Baths</span>
            </div>

            <div className="flex flex-col items-center gap-2 min-w-[60px]">
               <div className="w-11 h-11 rounded-2xl bg-charcoal-50 dark:bg-white/5 flex items-center justify-center text-charcoal-400 dark:text-charcoal-300">
                  <Info size={18} />
               </div>
               <span className="text-sm font-bold text-charcoal-500 dark:text-charcoal-400">{property.kitchens} Kit</span>
            </div>

            <div className="flex flex-col items-center gap-2 min-w-[60px]">
               <div className="w-11 h-11 rounded-2xl bg-charcoal-50 dark:bg-white/5 flex items-center justify-center text-charcoal-400 dark:text-charcoal-300">
                  <Info size={18} />
               </div>
               <span className="text-sm font-bold text-charcoal-500 dark:text-charcoal-400">{property.parking} Park</span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-charcoal-900 dark:text-white">Description</h3>
            <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed font-semibold">
              {property.description || "This luxury property offers modern amenities, premium finishes, and a prestigious location in one of Nigeria's most sought-after neighborhoods."}
            </p>
          </div>

<div className="mt-12 flex gap-4">
              <button 
                onClick={() => window.open('https://wa.me/2349012949580?text=Hello, I would like to book a tour for this property. Please let me know the available dates.', '_blank')}
                className="flex-1 bg-[#0B6BFF] hover:bg-[#0052d9] text-white font-bold py-5 rounded-[1.5rem] shadow-lg transition-all"
              >
                 Book a Tour
              </button>
              <button 
                onClick={() => window.open('https://wa.me/2349012949580?text=Hello, I am interested in this property. Please contact me with more details.', '_blank')}
                className="px-8 border-2 border-gray-200 dark:border-white/20 hover:border-[#0B6BFF] text-[#111827] dark:text-white font-bold rounded-[1.5rem] transition-all"
              >
                 Contact Agent
              </button>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
