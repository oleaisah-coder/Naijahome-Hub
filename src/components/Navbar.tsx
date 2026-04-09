import { Home } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-[#1a2b4a] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Home className="w-8 h-8 text-[#c9a227]" />
            <span className="text-white text-xl font-semibold font-playfair">
              NaijaHome Hub
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-white hover:text-[#c9a227] transition-colors font-medium">
              Sign In
            </button>
            <button className="bg-[#c9a227] hover:bg-[#e8c547] text-[#1a2b4a] px-5 py-2 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
