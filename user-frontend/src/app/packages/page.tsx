"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Package {
  id: number;
  name: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  capacity: string;
  size: string;
  cabins: string;
  price: string;
  priceUnit: string;
  highlights: string[];
  images: string[];
  category: string;
  icon: string;
}

// The 5 specific packages as requested
const DEMO_PACKAGES: Package[] = [
  {
    id: 1,
    name: "Speed Boat",
    title: "Speed Boat Mumbai Harbour Cruise",
    slug: "speed-boat-mumbai-harbour-cruise",
    description: "Experience Mumbai's iconic skyline from the water. Gateway of India, Taj Mahal Palace, and Naval Dockyard views with our expert guides.",
    duration: "1-2 hours",
    capacity: "8 guests",
    size: "15-20 Ft",
    cabins: "0 Cabins",
    price: "₹6,000",
    priceUnit: "/ hour",
    highlights: ["Sunset timing available", "Professional crew", "Safety gear included", "Best for photography"],
    images: [
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
    ],
    category: "speed-boat",
    icon: "🚤"
  },
  {
    id: 2,
    name: "Speed Boat",
    title: "Speed Boat Ride to Mandwa (Alibaug)",
    slug: "speed-boat-ride-to-mandwa-alibaug",
    description: "Quick 45-minute scenic transfer to Mandwa beach. Skip the ferry crowds and reach Alibaug in style and comfort.",
    duration: "45 min",
    capacity: "6 guests",
    size: "31 Ft",
    cabins: "0 Cabins",
    price: "₹7,000",
    priceUnit: "/ one way",
    highlights: ["Fastest route to Alibaug", "Comfortable seating", "Luggage assistance", "Flexible timing"],
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&h=600&fit=crop"
    ],
    category: "speed-boat",
    icon: "🚤"
  },
  {
    id: 3,
    name: "Luxury Yacht",
    title: "Yacht Hire for Mandwa (Alibaug)",
    slug: "yacht-hire-for-mandwa-alibaug",
    description: "Luxury yacht transfer with premium amenities. Travel like a VIP to Alibaug with refreshments, music, and spacious decks.",
    duration: "1 hour",
    capacity: "12 guests",
    size: "54 Ft",
    cabins: "3 Cabins",
    price: "₹25,000",
    priceUnit: "/ one way",
    highlights: ["Premium yacht experience", "Refreshments included", "Music system", "VIP service"],
    images: [
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549437982-8e216614e6a7?w=800&h=600&fit=crop"
    ],
    category: "luxury-yacht",
    icon: "⛵"
  },
  {
    id: 4,
    name: "Luxury Yacht",
    title: "Yacht Hire for Harbour Cruise",
    slug: "yacht-hire-for-harbour-cruise",
    description: "Ultimate luxury on Mumbai harbour. Panoramic views, attentive service, and unforgettable memories with premium amenities.",
    duration: "2-3 hours",
    capacity: "15 guests",
    size: "45 Ft",
    cabins: "2 Cabins",
    price: "₹35,000",
    priceUnit: "/ 2 hours",
    highlights: ["Luxury yacht", "Panoramic views", "Attentive crew", "Customizable duration"],
    images: [
      "https://images.unsplash.com/photo-1549437982-8e216614e6a7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=600&fit=crop"
    ],
    category: "luxury-yacht",
    icon: "⛵"
  },
  {
    id: 5,
    name: "Guided Tour",
    title: "Premium Guided Tour Packages for Elephanta Tours",
    slug: "premium-guided-tour-elephanta",
    description: "Premium guided tours to Elephanta Caves with expert historians. Explore ancient rock-cut temples with detailed insights.",
    duration: "3-4 hours",
    capacity: "10 guests",
    size: "25 Ft",
    cabins: "0 Cabins",
    price: "₹8,000",
    priceUnit: "/ tour",
    highlights: ["Expert historian guide", "Cave entrance tickets", "Boat transfer", "Light refreshments"],
    images: [
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
    ],
    category: "guided-tour",
    icon: "🏛️"
  }
];

const CATEGORIES = [
  { id: "all", name: "All Packages", icon: "📦" },
  { id: "speed-boat", name: "Speed Boats", icon: "🚤" },
  { id: "luxury-yacht", name: "Luxury Yachts", icon: "⛵" },
  { id: "guided-tour", name: "Guided Tours", icon: "🏛️" }
];

const WHATSAPP_NUMBER = "919876543210";

export default function PackagesPage() {
  const [packages, setPackages] = useState<Package[]>(DEMO_PACKAGES);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3004';
        const response = await fetch(`${API_URL}/api/v1/packages`);
        if (response.ok) {
          const data = await response.json();
          setPackages(data.data || DEMO_PACKAGES);
        }
      } catch (error) {
        console.log('Using demo packages - backend not available');
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchPackages();
  }, []);

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const filteredPackages = selectedCategory === "all"
    ? packages
    : packages.filter(pkg => pkg.category === selectedCategory);

  return (
    <>
      <Header />

      <main className="pt-[120px] min-h-screen bg-white">
        {/* Page Header */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-brand-primary text-sm font-semibold tracking-[0.2em] uppercase font-poppins">Our Packages</span>
              <h1 className="font-instrument text-4xl md:text-5xl font-semibold text-gray-900 mt-4 mb-4">
                Choose Your Adventure
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto font-poppins">
                Select from our 5 premium packages designed for unforgettable experiences on Mumbai waters
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 font-poppins ${
                    selectedCategory === category.id
                      ? "bg-brand-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
                <p className="mt-4 text-gray-600 font-poppins">Loading packages...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-brand-primary/30 overflow-hidden h-full">
                      {/* Image */}
                      <div className="aspect-video overflow-hidden bg-gray-100">
                        <img
                          src={pkg.images[0]}
                          alt={pkg.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-2">
                          <div className="text-3xl">{pkg.icon}</div>
                          <Badge variant="secondary" className="font-poppins text-xs">
                            {pkg.name}
                          </Badge>
                        </div>
                        <CardTitle className="font-poppins text-lg group-hover:text-brand-primary transition-colors line-clamp-2">
                          {pkg.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-3 flex-grow">
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-semibold text-brand-primary">{pkg.price}</div>
                          <div className="text-sm text-gray-600">{pkg.priceUnit}</div>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed font-poppins line-clamp-2">
                          {pkg.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 font-poppins">
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                            {pkg.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                            </svg>
                            {pkg.capacity}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs font-poppins">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="flex gap-2">
                        <Link
                          href={`/packages/${pkg.slug}`}
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white font-medium py-3 rounded-xl transition-all duration-300 font-poppins text-sm"
                        >
                          View Details
                        </Link>
                        <a
                          href={createWhatsAppLink(`Hi, I'm interested in ${pkg.title}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.P157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </a>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Floating WhatsApp */}
        <motion.a
          href={createWhatsAppLink("Hi, I'm interested in your boat charter services")}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.P157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </motion.a>
      </main>

      <Footer />
    </>
  );
}
