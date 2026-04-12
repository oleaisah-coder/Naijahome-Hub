import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { properties } from '../data';
import PropertyCard from './PropertyCard';
import { useAppStore } from '../store/useAppStore';

export default function PropertiesSection() {
  const { location, category, mode } = useAppStore();

  const filteredProperties = properties.filter((property) => {
    const modeMatch = property.type === mode;
    const locationMatch = location === 'All Locations' || property.location.includes(location.split(',')[0].trim());
    const categoryMatch = category === 'All Types' || property.type.toLowerCase().includes(category.toLowerCase());
    return modeMatch && locationMatch && categoryMatch;
  });

  return (
    <section id="properties" className="py-24 bg-[#f4f6f8] dark:bg-[#0a0a0f] transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block exactly matching Figma */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 max-w-2xl"
          >
            <p className="text-[11px] font-bold text-[#64748b] dark:text-gray-400 uppercase tracking-widest mb-4">
              Featured Listings
            </p>
            <h2 className="font-sans text-4xl lg:text-[42px] font-bold text-[#111827] dark:text-white leading-[1.2] mb-6">
              Homes, rentals, and shortlets in<br />top Nigerian locations.
            </h2>
            <p className="text-[#64748b] dark:text-gray-400 font-medium text-[16px] max-w-xl leading-relaxed">
              Explore buy, rent, and shortlet opportunities from verified agents with clearly labeled prices<br className="hidden sm:block" /> and key property details.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-white/20 text-[#111827] dark:text-white font-semibold text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              View All Listings <ArrowRight className="w-4 h-4 ml-1 text-gray-500" />
            </button>
          </motion.div>
        </div>

        {/* Grid Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(filteredProperties.length > 0 ? filteredProperties : properties.slice(0, 6)).map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
