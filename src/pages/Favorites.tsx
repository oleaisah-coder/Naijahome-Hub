import { useAppStore } from '../store/useAppStore';
import Navbar from '../components/Navbar';
import PropertyCard from '../components/PropertyCard';

export default function Favorites() {
  const { favorites } = useAppStore();

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0a0a0f]">
      <Navbar />
      
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#111827] dark:text-white mb-8">
          My Favorites
        </h1>

        {favorites.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
              You haven't saved any properties yet.
            </p>
            <a 
              href="#properties" 
              className="inline-block px-6 py-3 bg-[#0B6BFF] text-white font-semibold rounded-xl hover:bg-[#0a5fd6] transition-colors"
            >
              Browse Properties
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}