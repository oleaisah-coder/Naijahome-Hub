import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAppStore } from './store/useAppStore';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import PropertiesSection from './components/PropertiesSection';
import CitiesSection from './components/CitiesSection';
import AgentsSection from './components/AgentsSection';
import TestimonialSection from './components/TestimonialSection';
import NewsletterCTA from './components/NewsletterCTA';
import Footer from './components/Footer';
import ListingDetail from './components/ListingDetail';
import PostProperty from './pages/PostProperty';
import Favorites from './pages/Favorites';

export default function App() {
  const { isDarkMode, selectedProperty, setSelectedProperty } = useAppStore();
  const [currentPage, setCurrentPage] = useState<'home' | 'post-property' | 'favorites'>('home');
  useEffect(() => {
    const handleNavigation = () => {
      if (window.location.hash === '#post-property') {
        setCurrentPage('post-property');
      } else if (window.location.hash === '#favorites') {
        setCurrentPage('favorites');
      } else {
        setCurrentPage('home');
      }
    };
    handleNavigation();
    window.addEventListener('hashchange', handleNavigation);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white transition-colors duration-300">
      <AnimatePresence>
        {selectedProperty && (
          <ListingDetail 
            property={selectedProperty} 
            onClose={() => setSelectedProperty(null)} 
          />
        )}
      </AnimatePresence>
      
      {currentPage === 'post-property' ? (
        <PostProperty />
      ) : currentPage === 'favorites' ? (
        <Favorites />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <StatsBar />
            <PropertiesSection />
            <CitiesSection />
            <AgentsSection />
            <TestimonialSection />
            <NewsletterCTA />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
