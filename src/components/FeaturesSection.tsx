import { Home, DollarSign, KeyRound, MapPin } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Buy Property",
    description: "Find your perfect home",
  },
  {
    icon: DollarSign,
    title: "Sell Property",
    description: "Get best value",
  },
  {
    icon: KeyRound,
    title: "Rent Property",
    description: "Discover rentals",
  },
  {
    icon: MapPin,
    title: "Land & Plots",
    description: "Prime land available",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-[#0a0a0f] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] dark:text-white mb-3 sm:mb-4">
            Popular Categories
          </h2>
          <p className="text-gray-500 sm:text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Browse properties by category
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f8fafc] dark:bg-[#16161a] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow border border-gray-100 dark:border-white/5 cursor-pointer"
            >
              <div className="bg-[#0B6BFF]/10 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B6BFF]" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#111827] dark:text-white mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
