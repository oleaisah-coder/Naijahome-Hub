import { Home, DollarSign, KeyRound, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Buy Property",
    description: "Find your perfect home from our extensive listings",
  },
  {
    icon: DollarSign,
    title: "Sell Property",
    description: "Get the best value for your property with us",
  },
  {
    icon: KeyRound,
    title: "Rent Property",
    description: "Discover rentals that fit your lifestyle",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4a] mb-4 font-playfair">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Premium real estate services tailored for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#faf8f5] rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="bg-[#c9a227]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-10 h-10 text-[#c9a227]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2b4a] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <button className="text-[#c9a227] font-semibold flex items-center gap-2 mx-auto hover:gap-3 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
