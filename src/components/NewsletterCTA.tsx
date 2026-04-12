import { motion } from 'framer-motion';

export default function NewsletterCTA() {
  return (
    <>
      {/* Property Alerts Section - Separated with light grey background */}
      <section className="py-8 bg-[#F8FAFC] dark:bg-[#0a0a0f]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#16161a] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="md:w-1/2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8 block">
                Property Alerts
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#111827] dark:text-white mb-6 leading-tight">
                Get new listings before<br />everyone else.
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium text-lg leading-relaxed">
                Subscribe for fresh buy, rent, and shortlet opportunities delivered from verified agents in your preferred city.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B6BFF]"
                />
                <button className="bg-[#0B6BFF] hover:bg-[#0a5fd6] text-white font-semibold px-6 py-4 rounded-xl transition-colors shadow-sm shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ready to find next property */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#0a0a0f] transition-colors duration-500 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#111827] dark:text-white mb-6">
            Ready to find your next<br className="hidden sm:block" /> property?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-10 text-lg">
            Join thousands of others finding their perfect homes on our platform.
          </p>
          <button 
            onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#0B6BFF] hover:bg-[#0052d9] text-white font-semibold px-10 py-4 rounded-[8px] transition-colors shadow-lg"
          >
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}