import { Box, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white pt-20 pb-8 border-t border-gray-100 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-gray-900 dark:text-white">
              <Box className="w-6 h-6" />
              <span className="text-xl font-bold tracking-tight">Naijahome Hub</span>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed max-w-xs text-sm">
              Nigeria's premier real estate platform connecting you with luxury properties and expert agents.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://facebook.com/naijahomehub" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-[#0B6BFF] group-hover:text-white group-hover:border-[#0B6BFF] transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]"><path d="M9.101 23.691l-3.78-4.388 1.625-7.218H.652v-4.565h6.461V6.515h4.406v4.096h4.406v5.741c0 1.032.225 2.072.653 2.915l-2.875.903z"/></svg>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-[#0B6BFF] transition-colors">Facebook</span>
              </a>
              <a href="https://twitter.com/naijahomehub" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-[#0B6BFF] group-hover:text-white group-hover:border-[#0B6BFF] transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-[#0B6BFF] transition-colors">X</span>
              </a>
              <a href="https://instagram.com/naijahomehub" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-[#0B6BFF] group-hover:text-white group-hover:border-[#0B6BFF] transition-all">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-[#0B6BFF] transition-colors">Instagram</span>
              </a>
              <a href="https://linkedin.com/company/naijahomehub" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-[#0B6BFF] group-hover:text-white group-hover:border-[#0B6BFF] transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-[#0B6BFF] transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Properties for Sale', 'Properties for Rent', 'Shortlets', 'Find an Agent', 'Post a Property', 'Market Guide'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 font-medium hover:text-blue-600 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-lg font-bold mb-6">Top Cities</h4>
            <ul className="space-y-4">
              {['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Enugu', 'Kano'].map((city) => (
                <li key={city}>
                  <a href="#" className="text-gray-500 font-medium hover:text-blue-600 transition-colors text-sm">
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 font-medium text-sm">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>142 Ahmadu Bello Way, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 font-medium text-sm">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>+234 (0) 800 000 0000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 font-medium text-sm">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>support@naijahome.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 font-medium text-sm">
            © {new Date().getFullYear()} Naijahome Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
