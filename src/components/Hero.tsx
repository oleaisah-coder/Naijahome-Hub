import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { MapPin, Home, ChevronDown, Search } from 'lucide-react';

export default function Hero() {
  const { mode, setMode, setLocation, setCategory, setPriceRange } = useAppStore();

  const [searchLocation, setSearchLocation] = useState('Lagos, Nigeria');
  const [searchType, setSearchType] = useState('Apartment');
  const [searchBudget, setSearchBudget] = useState('₦25M - ₦120M');
  const [isLoading, setIsLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const locations = ['Lagos, Nigeria', 'Abuja, Nigeria', 'Port Harcourt, Nigeria', 'Ibadan, Nigeria', 'Benin City, Nigeria'];
  const propertyTypes = ['Apartment', 'House', 'Villa', 'Duplex', 'Studio'];
  const budgets = ['₦25M - ₦120M', '₦120M - ₦250M', '₦250M - ₦500M', '₦500M+', 'Any Price'];

  const modes: { key: 'buy' | 'rent' | 'shortlet'; label: string }[] = [
    { key: 'buy', label: 'Buy' },
    { key: 'rent', label: 'Rent' },
    { key: 'shortlet', label: 'Shortlet' },
  ];

  const handleBrowseListings = () => {
    setIsLoading(true);
    setLocation(searchLocation);
    setCategory(searchType);
    setPriceRange(searchBudget);
    
    setTimeout(() => {
      const element = document.getElementById('featured-listings') || document.getElementById('properties');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsLoading(false);
    }, 300);
  };

  const handleSearchListings = () => {
    setIsLoading(true);
    setLocation(searchLocation);
    setCategory(searchType);
    setPriceRange(searchBudget);
    setOpenDropdown(null);
    
    setTimeout(() => {
      const element = document.getElementById('featured-listings') || document.getElementById('properties');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsLoading(false);
    }, 300);
  };

  const handleSelect = (type: string, value: string) => {
    if (type === 'location') setSearchLocation(value);
    if (type === 'type') setSearchType(value);
    if (type === 'budget') setSearchBudget(value);
    setOpenDropdown(null);
  };

  return (
    <section id="hero" className="relative pt-44 sm:pt-52 lg:pt-60 pb-16 sm:pb-24 lg:pb-32 bg-[#f8fafc] dark:bg-[#0a0a0f] transition-colors duration-500">
      <div className="max-w-[1300px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Hero Text - Above image on desktop, below on mobile */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 sm:order-1 pt-4 sm:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-[11px] font-bold text-[#64748b] dark:text-gray-400 uppercase tracking-widest mb-6 sm:mb-8">
              Nigeria Property Portal
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-6 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center p-1.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-sm"
            >
              {modes.map((m) => (
                <button
                  key={m.key}
                  onClick={() => setMode(m.key)}
                  className={`px-6 sm:px-12 py-2 sm:py-2.5 rounded-lg text-[12px] sm:text-[13px] font-semibold transition-all ${
                    mode === m.key
                      ? 'bg-[#0B6BFF] text-white shadow-sm'
                      : 'bg-transparent text-[#64748b] hover:text-[#111827] dark:text-gray-400 dark:hover:text-white'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-sans font-bold text-[#111827] dark:text-white leading-[1.1] tracking-tight mb-6 sm:mb-8">
              {['Find', 'Your', 'Ideal', 'Home', 'in', 'Nigeria'].map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>
          
          <p className="text-[#64748b] dark:text-gray-400 font-medium mb-6 sm:mb-12 mx-auto text-[14px] sm:text-[16px] leading-[1.6] max-w-[800px]">
            Search verified homes, apartments, and workspaces across Lagos, Abuja, Port Harcourt,<br className="hidden sm:block" /> and beyond with trusted local agents.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-[90%] mx-auto pb-4 sm:pb-0">
            <motion.button
              onClick={handleBrowseListings}
              whileTap={{ scale: 0.97 }}
              className="bg-[#0B6BFF] hover:bg-[#0a5fd6] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-[8px] font-semibold transition-colors shadow-sm text-[14px] sm:text-[15px] flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              {isLoading && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
              )}
              Browse Listings
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open('https://wa.me/2349012949580?text=Hello, I am interested in your properties. Could you please help me find my ideal home?', '_blank')}
              className="bg-white border border-gray-200 dark:bg-white/5 dark:border-white/10 hover:border-gray-300 hover:bg-gray-50 dark:hover:border-white/20 dark:hover:bg-white/10 text-[#111827] dark:text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-[8px] font-semibold transition-colors text-[14px] sm:text-[15px] w-full sm:w-auto"
            >
              Talk To An Agent
            </motion.button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[200px] sm:h-[320px] lg:h-[500px] overflow-hidden bg-gray-200 rounded-xl sm:rounded-[32px] mb-0 sm:mb-0 sm:order-2">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000&v=2"
            alt="Premium property exterior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Search Bar - Overlaps image on desktop */}
        <div className="relative sm:-mt-16 lg:-mt-20 mx-0 sm:mx-4 lg:mx-8 z-10 sm:order-3">
          <div className="bg-white dark:bg-[#1a1a1f] rounded-xl sm:rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between border border-gray-100 dark:border-white/10 px-4 sm:px-10 py-3 sm:py-0 h-auto sm:h-24">
            
            {/* Location */}
            <div className="relative flex items-center gap-3 px-4 sm:px-8 py-4 sm:py-0 border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-white/10 cursor-pointer w-full sm:w-auto flex-1" onClick={() => setOpenDropdown(openDropdown === 'location' ? null : 'location')}>
              <MapPin className="w-5 h-5 text-[#0B6BFF] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-gray-400 font-semibold tracking-wide">Location</span>
                <div className="flex items-center gap-1">
                  <span className="text-[14px] font-bold text-[#111827] dark:text-white">{searchLocation}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              {openDropdown === 'location' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-[#1a1a1f] border border-gray-200 dark:border-white/10 rounded-xl shadow-xl z-[9999] py-2 max-h-60 overflow-auto">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={(e) => { e.stopPropagation(); handleSelect('location', loc); }}
                      className="w-full text-left px-4 py-3 text-[14px] text-[#111827] dark:text-white hover:bg-[#f0f4ff] dark:hover:bg-white/10 font-medium"
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Type */}
            <div className="relative flex items-center gap-3 px-4 sm:px-8 py-4 sm:py-0 border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-white/10 cursor-pointer w-full sm:w-auto flex-1" onClick={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}>
              <Home className="w-5 h-5 text-[#0B6BFF] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-gray-400 font-semibold tracking-wide">Property Type</span>
                <div className="flex items-center gap-1">
                  <span className="text-[14px] font-bold text-[#111827] dark:text-white">{searchType}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              {openDropdown === 'type' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-[#1a1a1f] border border-gray-200 dark:border-white/10 rounded-xl shadow-xl z-[9999] py-2 max-h-60 overflow-auto">
                  {propertyTypes.map((type) => (
                    <button
                      key={type}
                      onClick={(e) => { e.stopPropagation(); handleSelect('type', type); }}
                      className="w-full text-left px-4 py-3 text-[14px] text-[#111827] dark:text-white hover:bg-[#f0f4ff] dark:hover:bg-white/10 font-medium"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Budget */}
            <div className="relative flex items-center gap-3 px-4 sm:px-8 py-4 sm:py-0 cursor-pointer w-full sm:w-auto flex-1" onClick={() => setOpenDropdown(openDropdown === 'budget' ? null : 'budget')}>
              <div className="w-5 h-5 rounded-full bg-[#0B6BFF]/20 flex items-center justify-center shrink-0">
                <span className="text-[#0B6BFF] text-[10px] font-bold">₦</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-gray-400 font-semibold tracking-wide">Budget</span>
                <div className="flex items-center gap-1">
                  <span className="text-[14px] font-bold text-[#111827] dark:text-white">{searchBudget}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              {openDropdown === 'budget' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-[#1a1a1f] border border-gray-200 dark:border-white/10 rounded-xl shadow-xl z-[9999] py-2 max-h-60 overflow-auto">
                  {budgets.map((budget) => (
                    <button
                      key={budget}
                      onClick={(e) => { e.stopPropagation(); handleSelect('budget', budget); }}
                      className="w-full text-left px-4 py-3 text-[14px] text-[#111827] dark:text-white hover:bg-[#f0f4ff] dark:hover:bg-white/10 font-medium"
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <motion.button
              onClick={handleSearchListings}
              whileTap={{ scale: 0.97 }}
              className="bg-[#0066FF] hover:bg-[#0052d9] text-white px-5 py-4 sm:px-6 sm:py-4 rounded-[10px] font-semibold transition-colors text-[14px] whitespace-nowrap flex items-center justify-center gap-2 flex-shrink-0 w-full sm:w-48 mt-4 sm:mt-0"
            >
              <Search className="w-4 h-4" />
              Search
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}