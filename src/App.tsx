import { useAppStore } from './store/useAppStore';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import PropertiesSection from './components/PropertiesSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const { isDarkMode } = useAppStore();

  return (
    <div className={`min-h-screen font-sans selection:bg-royal-100 selection:text-royal-900 bg-white ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <PropertiesSection />
        <FeaturesSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
