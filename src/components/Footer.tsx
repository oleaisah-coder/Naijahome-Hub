import { Home, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Properties", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Blog", href: "#" },
];

const contactInfo = [
  { icon: Phone, text: "+234 801 234 5678" },
  { icon: Mail, text: "info@naijahomehub.com" },
  { icon: MapPin, text: "Lagos, Nigeria" },
];

const socials = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a2b4a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Home className="w-8 h-8 text-[#c9a227]" />
              <span className="text-white text-xl font-semibold font-playfair">
                NaijaHome Hub
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner in finding the perfect home in Nigeria.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-white/10 px-3 py-2 rounded-full hover:bg-[#c9a227] transition-colors text-sm text-white font-medium"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#c9a227] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-3">
                  <info.icon className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-gray-400">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get latest updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#c9a227]"
              />
              <button className="bg-[#c9a227] hover:bg-[#e8c547] text-[#1a2b4a] px-6 py-3 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} NaijaHome Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
