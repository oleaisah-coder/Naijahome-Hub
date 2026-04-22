import { motion } from 'framer-motion';
import { stats } from '../data';

export default function StatsBar() {
  return (
    <section className="relative z-10 pt-8 pb-12 sm:pt-16 sm:pb-20 bg-gray-50/50 dark:bg-[#0a0a0f] transition-colors duration-500">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#16161a] rounded-xl p-4 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 dark:border-white/5"
            >
              <div className="text-xl sm:text-2xl lg:text-4xl font-sans font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
