import { useState } from "react";
import { MapPin, Bed, Bath, Maximize, Heart } from "lucide-react";

const properties = [
  {
    id: 1,
    image: "/images/hero-modern.jpg",
    title: "Luxury 3 Bedroom Apartment",
    location: "Victoria Island, Lagos",
    price: "₦45,000,000",
    beds: 3,
    baths: 2,
    size: "2,500 sqft",
    type: "sale",
  },
  {
    id: 2,
    image: "/images/hero-master.jpg",
    title: "Modern Studio Apartment",
    location: "Maitama, Abuja",
    price: "₦8,500,000",
    beds: 1,
    baths: 1,
    size: "800 sqft",
    type: "sale",
  },
  {
    id: 3,
    image: "/images/hero-home.png",
    title: "Spacious 4 Bedroom Duplex",
    location: "Ikeja, Lagos",
    price: "₦2,500,000/mo",
    beds: 4,
    baths: 3,
    size: "3,200 sqft",
    type: "rent",
  },
  {
    id: 4,
    image: "/images/hero-modern.jpg",
    title: "Cozy 2 Bedroom Flat",
    location: "Port Harcourt",
    price: "₦850,000/mo",
    beds: 2,
    baths: 1,
    size: "1,200 sqft",
    type: "rent",
  },
];

const filters = ["All", "For Sale", "For Rent", "Shortlets"];

export default function PropertiesSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="py-16 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4a] mb-4 font-playfair">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the best properties across Nigeria
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-[#c9a227] text-[#1a2b4a]"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
                <span className="absolute top-3 left-3 bg-[#c9a227] text-[#1a2b4a] px-3 py-1 rounded-full text-xs font-semibold">
                  {property.type === "sale" ? "For Sale" : "For Rent"}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-[#1a2b4a] mb-2 line-clamp-1">
                  {property.title}
                </h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </div>
                <p className="text-xl font-bold text-[#c9a227] mb-4">
                  {property.price}
                </p>
                <div className="flex items-center justify-between text-gray-600 text-sm border-t pt-4">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    {property.beds} Beds
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    {property.baths} Baths
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    {property.size}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
