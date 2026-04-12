export interface Property {
  id: number;
  title: string;
  location: string;
  city?: string;
  price: string;
  priceLabel?: string;
  type: string;
  beds: number;
  baths: number;
  kitchens: number;
  parking: number;
  size?: string;
  image: string;
  images?: string[];
  verified?: boolean;
  featured?: boolean;
  description?: string;
  agentName?: string;
  agentImage?: string;
}

export const properties: Property[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
    ],
    title: "4 Bedroom Detached Duplex",
    location: "Osapa London, Lekki, Lagos",
    city: "Lekki",
    price: "₦185,000,000",
    priceLabel: "",
    beds: 4,
    baths: 5,
    kitchens: 1,
    parking: 4,
    type: "buy",
    verified: true,
    agentName: "Tunde Cole",
    agentImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
    ],
    title: "2 Bedroom Serviced Apartment",
    location: "Bourdillon Road, Ikoyi, Lagos",
    city: "Ikoyi",
    price: "₦14,000,000",
    priceLabel: " per year",
    beds: 2,
    baths: 3,
    kitchens: 1,
    parking: 2,
    type: "rent",
    verified: true,
    agentName: "Ada Nwosu",
    agentImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
    ],
    title: "Furnished Executive Shortlet",
    location: "Wuse 2, Abuja",
    city: "Wuse 2",
    price: "₦180,000",
    priceLabel: " / night",
    beds: 1,
    baths: 1,
    kitchens: 1,
    parking: 1,
    type: "shortlet",
    verified: true,
    agentName: "Halima Bello",
    agentImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    title: "3 Bedroom Smart Bungalow",
    location: "Abraham Adesanya, Ajah, Lagos",
    city: "Ajah",
    price: "₦72,000,000",
    priceLabel: "",
    beds: 3,
    baths: 4,
    kitchens: 1,
    parking: 3,
    type: "buy",
    verified: true,
    agentName: "Tunde Cole",
    agentImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    title: "Premium Open Plan Office",
    location: "Victoria Island, Lagos",
    city: "Victoria Island",
    price: "₦35,000,000",
    priceLabel: " per year",
    beds: 0,
    baths: 2,
    kitchens: 1,
    parking: 10,
    type: "rent",
    verified: true,
    agentName: "Ada Nwosu",
    agentImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    title: "2 Bedroom Apartment",
    location: "Ikeja GRA, Lagos",
    city: "GRA",
    price: "₦4,500,000",
    priceLabel: " per year",
    beds: 2,
    baths: 2,
    kitchens: 1,
    parking: 2,
    type: "rent",
    verified: true,
    agentName: "Halima Bello",
    agentImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  }
];

export const locations = ["All Locations", "Lagos", "Abuja", "Port Harcourt", "Ibadan"];
export const categories = ["All Types", "Apartment", "Duplex", "Bungalow", "Land"];
export const priceRanges = ["Any Price", "Under ₦5M", "₦5M - ₦20M", "₦20M - ₦50M", "Over ₦50M"];

export const cities = [
  {
    id: 1,
    name: "Lagos",
    image: "https://images.unsplash.com/photo-1590494493393-27eb844738fb?auto=format&fit=crop&q=80",
    properties: 4250,
  },
  {
    id: 2,
    name: "Abuja",
    image: "https://images.unsplash.com/photo-1523363023277-22d2f78bdf13?auto=format&fit=crop&q=80",
    properties: 1845,
  },
  {
    id: 3,
    name: "Port Harcourt",
    image: "https://images.unsplash.com/photo-1621252115160-59367301c296?auto=format&fit=crop&q=80",
    properties: 920,
  },
];

export const agents = [
  {
    id: 1,
    name: "Sarah Williams",
    title: "Senior Property Agent",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "David Adeleke",
    title: "Real Estate Consultant",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Grace Okafor",
    title: "Luxury Properties Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  }
];

export const stats = [
  { id: 1, value: "10k+", label: "Happy Customers" },
  { id: 2, value: "550+", label: "Properties" },
  { id: 3, value: "30", label: "Top Agents" },
  { id: 4, value: "24/7", label: "Support" },
];
