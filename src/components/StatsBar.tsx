import { Building, Users, MapPinned } from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      icon: Building,
      value: "10K+",
      label: "Properties",
    },
    {
      icon: Users,
      value: "5K+",
      label: "Happy Customers",
    },
    {
      icon: MapPinned,
      value: "50+",
      label: "Cities Covered",
    },
  ];

  return (
    <div className="bg-[#1a2b4a] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4"
            >
              <div className="bg-[#c9a227]/20 p-4 rounded-full">
                <stat.icon className="w-8 h-8 text-[#c9a227]" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
