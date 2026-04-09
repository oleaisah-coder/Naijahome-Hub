import { Search, MapPin, Building2, DollarSign, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-modern.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2b4a]/80 via-[#1a2b4a]/60 to-[#1a2b4a]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair leading-tight">
          Find Your Dream Home in{" "}
          <span className="text-[#c9a227]">Nigeria</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          We provide outstanding real estate services and offer top-notch
          investment opportunities for everyone
        </p>

        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-[#1a2b4a]" />
                <span className="text-sm font-semibold text-[#1a2b4a]">
                  Location
                </span>
              </div>
              <div className="relative">
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#c9a227] cursor-pointer">
                  <option>Select Location</option>
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Port Harcourt</option>
                  <option>Ibadan</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-4 h-4 text-[#1a2b4a]" />
                <span className="text-sm font-semibold text-[#1a2b4a]">
                  Property Type
                </span>
              </div>
              <div className="relative">
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#c9a227] cursor-pointer">
                  <option>All Types</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                  <option>Villa</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-[#1a2b4a]" />
                <span className="text-sm font-semibold text-[#1a2b4a]">
                  Price Range
                </span>
              </div>
              <div className="relative">
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#c9a227] cursor-pointer">
                  <option>Any Price</option>
                  <option>₦500K - ₦5M</option>
                  <option>₦5M - ₦20M</option>
                  <option>₦20M - ₦50M</option>
                  <option>₦50M+</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-end">
              <button className="w-full bg-[#c9a227] hover:bg-[#e8c547] text-[#1a2b4a] py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
