import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function CitiesSection() {
  const cities = [
    {
      id: 1,
      name: "Lagos",
      properties: "4,250",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      name: "Abuja",
      properties: "1,845",
      image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      name: "Port Harcourt",
      properties: "920",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0f] transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-sans font-bold text-gray-900 dark:text-white"
          >
            Explore Key Markets
          </motion.h2>
          
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <ArrowLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent z-10" />
              <img 
                src={city.image} 
                alt={city.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
                <p className="text-gray-300 font-medium text-sm">{city.properties} Properties</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="w-full h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
          <div className="w-1/3 h-full bg-gray-900 dark:bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
