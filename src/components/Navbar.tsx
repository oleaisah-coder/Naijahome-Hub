import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function Navbar() {
  const { isDarkMode, toggleDarkMode, isMobileMenuOpen, toggleMobileMenu, setMode } = useAppStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label: string, href: string) => {
    if (label === 'Buy') setMode('buy');
    else if (label === 'Rent') setMode('rent');
    else if (label === 'Shortlet') setMode('shortlet');
    else if (label === 'Favorites') {
      window.location.hash = '#favorites';
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Buy', href: '#properties' },
    { label: 'Rent', href: '#properties' },
    { label: 'Shortlet', href: '#properties' },
    { label: 'Favorites', href: '#favorites' },
    { label: 'Agents', href: '#agents' },
    { label: 'Insights', href: '#insights' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0a0a0f]/90 backdrop-blur-md shadow-sm py-3 sm:py-4 border-b border-gray-100 dark:border-white/5'
          : 'bg-white dark:bg-[#0a0a0f] py-3 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group transition-colors shrink-0">
            <img src="/images/LUXURY DWELLING ESTATES AND PROPERTY.png" alt="Naijahome Hub" className="h-20 w-auto object-contain rounded-[24px]" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.label === 'Favorites') {
                      window.location.hash = '#favorites';
                    } else {
                      handleNavClick(link.label, link.href);
                    }
                  }}
                  className="text-[14px] font-medium transition-all text-[#64748b] hover:text-[#0B6BFF] dark:text-gray-400 dark:hover:text-white"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 shrink-0">
            <button 
              onClick={toggleDarkMode}
              className="text-gray-400 hover:text-[#0B6BFF] dark:hover:text-white transition-colors p-2"
            >
              {isDarkMode ? <Sun size={18} className="text-white" /> : <Moon size={18} />}
            </button>
            <button onClick={() => window.location.hash = 'post-property'} className="hidden sm:block text-[14px] font-semibold text-[#111827] hover:text-blue-600 dark:text-white/70 dark:hover:text-white transition-colors">
              Post Property
            </button>
            <button 
              onClick={() => window.open('https://wa.me/2349012949580?text=Hello, I am interested in your properties. Could you please help me find my ideal home?', '_blank')}
              className="hidden sm:flex bg-[#0B6BFF] hover:bg-[#0a5fd6] text-white px-5 py-2.5 rounded-[8px] text-[14px] font-semibold transition-colors shadow-sm items-center"
            >
              Chat Agent
            </button>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg transition-colors text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-[#0a0a0f] border-t border-gray-100 dark:border-white/5 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.label === 'Favorites') {
                      window.location.hash = '#favorites';
                      if (toggleMobileMenu) toggleMobileMenu();
                    } else {
                      handleNavClick(link.label, link.href);
                    }
                  }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#0B6BFF] dark:hover:text-white font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 mt-3 border-t border-gray-100 dark:border-white/5 space-y-3">
                  <button onClick={() => { window.location.hash = 'post-property'; toggleMobileMenu(); }} className="block w-full text-center px-4 py-3 text-gray-700 dark:text-white/80 font-medium">Post Property</button>
                <button 
                  onClick={() => window.open('https://wa.me/2349012949580?text=Hello, I am interested in your properties. Could you please help me find my ideal home?', '_blank')}
                  className="w-full bg-[#0B6BFF] hover:bg-[#0a5fd6] text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
                >
                  Chat Agent
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
