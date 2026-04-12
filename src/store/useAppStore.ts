import { create } from 'zustand';
import type { Property } from '../data';

export type PropertyMode = 'buy' | 'rent' | 'shortlet';

interface AppState {
  mode: PropertyMode;
  setMode: (mode: PropertyMode) => void;
  location: string;
  setLocation: (location: string) => void;
  category: string;
  setCategory: (category: string) => void;
  priceRange: string;
  setPriceRange: (range: string) => void;

  selectedProperty: Property | null;
  setSelectedProperty: (property: Property | null) => void;

  favorites: Property[];
  addFavorite: (property: Property) => void;
  removeFavorite: (propertyId: number) => void;
  isFavorite: (propertyId: number) => boolean;

  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;

  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  mode: 'buy',
  setMode: (mode) => set({ mode }),
  
  location: 'All Locations',
  setLocation: (location) => set({ location }),
  
  category: 'All Types',
  setCategory: (category) => set({ category }),
  
  priceRange: 'Any Price',
  setPriceRange: (priceRange) => set({ priceRange }),

  selectedProperty: null,
  setSelectedProperty: (selectedProperty) => set({ selectedProperty }),

  favorites: [],
  addFavorite: (property) => set((state) => ({ 
    favorites: state.favorites.some(f => f.id === property.id) 
      ? state.favorites 
      : [...state.favorites, property] 
  })),
  removeFavorite: (propertyId) => set((state) => ({ 
    favorites: state.favorites.filter(f => f.id !== propertyId) 
  })),
  isFavorite: (propertyId) => get().favorites.some(f => f.id === propertyId),

  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

  isDarkMode: localStorage.getItem('darkMode') === 'true',
  toggleDarkMode: () => set((state) => { 
    const newValue = !state.isDarkMode;
    localStorage.setItem('darkMode', String(newValue));
    return { isDarkMode: newValue };
  }),
}));
