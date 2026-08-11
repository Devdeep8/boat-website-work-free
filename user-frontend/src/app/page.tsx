"use client";

import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
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
  description: string;
  duration: string;
  capacity: string;
  price: string;
  priceUnit: string;
  highlights: string[];
  gradient: string;
  icon: string;
}

// Fallback demo packages if backend is not available
const DEMO_PACKAGES: Package[] = [
  {
    id: 1,
    name: "Speed Boat",
    title: "Bayliner 245 Speed Boat",
    description: "Experience Mumbai's iconic skyline from the water. Gateway of India, Taj Mahal Palace, and Naval Dockyard views.",
    duration: "1-2 hours",
    capacity: "8 guests",
    price: "₹6,000",
    priceUnit: "/ hour",
    highlights: ["15-20 Ft", "0 Cabins", "Best for photography", "Professional crew"],
    gradient: "from-amber-500 via-orange-500 to-red-600",
    icon: "🚤"
  },
  {
    id: 2,
    name: "Speed Boat",
    title: "Gulf Craft 31 - Aameli",
    description: "Quick 45-minute scenic transfer to Mandwa beach. Skip the ferry crowds and reach Alibaug in style.",
    duration: "45 min",
    capacity: "6 guests",
    price: "₹7,000",
    priceUnit: "/ one way",
    highlights: ["31 Ft", "Speed boat transfer", "Comfortable seating", "Flexible timing"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    icon: "🚤"
  },
  {
    id: 3,
    name: "Yacht",
    title: "Jeanneau 54 Luxury Yacht",
    description: "Luxury yacht transfer with premium amenities. Travel like a VIP with refreshments, music, and spacious decks.",
    duration: "1 hour",
    capacity: "12 guests",
    price: "₹25,000",
    priceUnit: "/ one way",
    highlights: ["54 Ft", "3 Cabins", "Premium yacht experience", "VIP service"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    icon: "⛵"
  },
  {
    id: 4,
    name: "Yacht",
    title: "Grand Soliel 45",
    description: "Ultimate luxury on Mumbai harbour. Panoramic views, attentive service, and unforgettable memories.",
    duration: "2-3 hours",
    capacity: "15 guests",
    price: "₹35,000",
    priceUnit: "/ 2 hours",
    highlights: ["45 Ft", "2 Cabins", "Panoramic views", "Customizable duration"],
    gradient: "from-purple-500 via-pink-500 to-rose-600",
    icon: "⛵"
  }
];

const YACHT_CATEGORIES = [
  {
    name: "Motor Yachts",
    description: "Luxury motor yachts for premium experiences",
    icon: "🛥️",
    href: "#packages"
  },
  {
    name: "Sail Yachts",
    description: "Experience the thrill of sailing",
    icon: "⛵",
    href: "#packages"
  },
  {
    name: "Sail Boats",
    description: "Perfect for learning to sail",
    icon: "🌊",
    href: "#packages"
  },
  {
    name: "Speed Boats",
    description: "Fast transfers and thrilling rides",
    icon: "🚤",
    href: "#packages"
  },
  {
    name: "House Boats",
    description: "Overnight stays on water",
    icon: "🏠",
    href: "#packages"
  }
];

const VALUE_PROPOSITIONS = [
  {
    title: "Premium Yachts",
    description: "Starting at ₹4,000",
    icon: "⭐"
  },
  {
    title: "Quality Services",
    description: "Professional crew & well-maintained fleet",
    icon: "👨‍✈️"
  },
  {
    title: "Easy Bookings",
    description: "WhatsApp instant booking",
    icon: "💬"
  }
];

const STATS = [
  { number: "50+", label: "Premium Yachts" },
  { number: "10,000+", label: "Happy Guests" },
  { number: "10+", label: "Years Experience" }
];

const WHATSAPP_NUMBER = "919876543210";

export default function HomePage() {
  const [packages, setPackages] = useState<Package[]>(DEMO_PACKAGES);

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
      }
    };

    fetchPackages();
  }, []);

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <Header />

      <main className="pt-[120px]">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
          {/* Hero Banner */}
          <HeroBanner
            media={[
              // Add your media here. Example:
              // { type: 'image', src: '/banner-1.jpg', alt: 'Yacht at sunset' },
            ]}
            autoplay={true}
            interval={5000}
          />

          {/* Hero content */}
          <div className="relative z-10 px-4 py-20 max-w-7xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Stats */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden md:block"
              >
                <div className="space-y-8">
                  {STATS.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="font-instrument text-5xl lg:text-6xl font-semibold text-white">{stat.number}</div>
                      <div className="text-sm text-white/80 font-poppins mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right side - Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-right"
              >
                <motion.span
                  className="inline-block text-white text-sm font-semibold tracking-[0.3em] uppercase mb-6 font-poppins"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Yacht Booking in Mumbai, Goa & Kerala
                </motion.span>
                <h1 className="font-instrument text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-[1.1]">
                  Find Your Favourite
                  <span className="block text-white">
                    Yacht With Us
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg ml-auto leading-relaxed font-poppins">
                  Celebrate your special moments with us. Premium boat and yacht charters for memorable experiences.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <a
                    href={createWhatsAppLink("Hi, I'm interested in booking a boat charter")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 font-poppins"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Book via WhatsApp
                  </a>
                  <Link
                    href="/packages"
                    className="inline-flex items-center justify-center text-white font-medium px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 font-poppins"
                  >
                    View All Packages
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Mobile Stats */}
            <div className="flex items-center justify-center gap-8 mt-12 md:hidden">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-instrument text-3xl font-semibold text-white">{stat.number}</div>
                  <div className="text-xs text-white/80 font-poppins">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Yacht Categories */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#59b280] text-sm font-semibold tracking-[0.2em] uppercase font-poppins">Our Fleet</span>
              <h2 className="font-instrument text-4xl md:text-5xl font-semibold text-gray-900 mt-4 mb-4">
                Choose Your Yacht Type
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto font-poppins">
                We have a wide range of yachts and boats to suit every occasion and budget
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-6">
              {YACHT_CATEGORIES.map((category, index) => (
                <Link
                  key={category.name}
                  href="/packages"
                  className="group bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-[#59b280] hover:shadow-lg transition-all duration-300 cursor-pointer block"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#59b280] transition-colors font-poppins">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-poppins">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="bg-[#59b280] border-y border-[#4a9a6d] py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-center">
              <span className="text-2xl">🎉</span>
              <p className="font-poppins font-medium text-white">
                Special Offer: Get 20% off on your first booking! Use code <span className="font-bold">FIRST20</span>
              </p>
              <span className="text-2xl">🎉</span>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#59b280] text-sm font-semibold tracking-[0.2em] uppercase font-poppins">Featured Yachts</span>
              <h2 className="font-instrument text-4xl md:text-6xl font-semibold text-gray-900 mt-4 mb-6">
                Our Premium Fleet
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto font-poppins">
                Experience luxury on water with our well-maintained fleet of yachts and speed boats
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-[#59b280]/30 overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="text-center mb-3">
                        <div className="text-4xl mb-2">{pkg.icon}</div>
                        <CardTitle className="font-poppins text-lg group-hover:text-[#59b280] transition-colors">
                          {pkg.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <div className="text-2xl font-semibold text-[#59b280]">{pkg.price}</div>
                        <div className="text-sm text-gray-600">{pkg.priceUnit}</div>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed font-poppins line-clamp-3">
                        {pkg.description}
                      </p>

                      <div className="flex items-center justify-center gap-4 text-sm text-gray-500 font-poppins">
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

                      <div className="flex flex-wrap gap-1 justify-center">
                        {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs font-poppins">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <a
                        href={createWhatsAppLink(`Hi, I'm interested in ${pkg.title}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#59b280] hover:bg-[#4a9a6d] text-white font-medium py-3 rounded-xl transition-all duration-300 font-poppins text-sm"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Book Now
                      </a>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-[#59b280] to-[#4a9a6d]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-instrument text-4xl md:text-5xl font-semibold text-white mb-6">
                Ready to Set Sail?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-poppins">
                Connect with us on WhatsApp for instant booking, custom quotes, and any questions about our services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={createWhatsAppLink("Hi, I'd like to book a boat charter")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#59b280] font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-poppins"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 font-poppins border-2 border-white/30"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Floating WhatsApp */}
        <motion.a
          href={createWhatsAppLink("Hi, I'm interested in your boat charter services")}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </motion.a>
      </main>

      <Footer />
    </>
  );
}
