"use client";

import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import { useEffect, useState } from "react";
import Link from "next/link";

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
    name: "Harbour Cruise",
    title: "Speed Boat Mumbai Harbour Cruise",
    description: "Experience Mumbai's iconic skyline from the water. Gateway of India, Taj Mahal Palace, and Naval Dockyard views.",
    duration: "1-2 hours",
    capacity: "8 guests",
    price: "₹6,000",
    priceUnit: "/ hour",
    highlights: ["Sunset timing available", "Professional crew", "Safety gear included", "Best for photography"],
    gradient: "from-amber-500 via-orange-500 to-red-600",
    icon: "🌅"
  },
  {
    id: 2,
    name: "Mandwa Express",
    title: "Speed Boat to Mandwa (Alibaug)",
    description: "Quick 45-minute scenic transfer to Mandwa beach. Skip the ferry crowds and reach Alibaug in style.",
    duration: "45 min",
    capacity: "6 guests",
    price: "₹7,000",
    priceUnit: "/ one way",
    highlights: ["Fastest route to Alibaug", "Comfortable seating", "Luggage assistance", "Flexible timing"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    icon: "🚤"
  },
  {
    id: 3,
    name: "Yacht to Alibaug",
    title: "Yacht Hire for Mandwa (Alibaug)",
    description: "Luxury yacht transfer with premium amenities. Travel like a VIP with refreshments, music, and spacious decks.",
    duration: "1 hour",
    capacity: "12 guests",
    price: "₹25,000",
    priceUnit: "/ one way",
    highlights: ["Premium yacht experience", "Refreshments included", "Music system", "VIP service"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    icon: "⛵"
  },
  {
    id: 4,
    name: "Luxury Harbour",
    title: "Yacht Hire for Harbour Cruise",
    description: "Ultimate luxury on Mumbai harbour. Panoramic views, attentive service, and unforgettable memories.",
    duration: "2-3 hours",
    capacity: "15 guests",
    price: "₹35,000",
    priceUnit: "/ 2 hours",
    highlights: ["Luxury yacht", "Panoramic views", "Attentive crew", "Customizable duration"],
    gradient: "from-purple-500 via-pink-500 to-rose-600",
    icon: "🥂"
  }
];

const EVENT_SERVICES = [
  {
    title: "Film Shoots",
    description: "Professional boat & yacht charters for filming",
    icon: "🎬"
  },
  {
    title: "Weddings",
    description: "Memorable boat transfers for wedding guests",
    icon: "💒"
  },
  {
    title: "Corporate Events",
    description: "Corporate retreat transportation & team events",
    icon: "👔"
  },
  {
    title: "Elephanta Tours",
    description: "Premium guided tours with expert historians",
    icon: "🏛️"
  }
];

const WHATSAPP_NUMBER = "919876543210";

export default function HomePage() {
  const [packages, setPackages] = useState<Package[]>(DEMO_PACKAGES);
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
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Banner with support for images, GIFs, videos */}
        <HeroBanner
          media={[
            // Add your media here. Example:
            // { type: 'image', src: '/banner-1.jpg', alt: 'Yacht at sunset' },
            // { type: 'video', src: '/banner-video.mp4' },
            // { type: 'gif', src: '/banner.gif', alt: 'Boat in action' },
          ]}
          autoplay={true}
          interval={5000}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 py-20 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              className="inline-block text-[#d4a574] text-sm font-semibold tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Premium Boat Charters
            </motion.span>
            <h1 className="font-instrument text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 leading-[1.1]">
              Mumbai From
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d4a574] via-[#c49464] to-[#b48454]">
                The Water
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Speed boats and luxury yachts for harbour cruises, Alibaug transfers, and special moments on Mumbai waters
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href={createWhatsAppLink("Hi, I'm interested in booking a boat charter")}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 bg-[#d4a574] hover:bg-[#c49464] font-semibold px-8 py-4 rounded-full transition-all duration-300 overflow-hidden font-poppins"
            >
              <span className="relative z-10 flex items-center gap-2 text-bg-primary">
                <svg className="w-5 h-5 text-bg-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book via WhatsApp
              </span>
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center text-white font-medium px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              View Packages
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 px-4 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#d4a574] text-sm font-semibold tracking-[0.2em] uppercase">Our Packages</span>
            <h2 className="font-instrument text-4xl md:text-6xl font-semibold text-white mt-4 mb-6">
              Choose Your Experience
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Four distinctive ways to experience Mumbai's waters. Each crafted for a different kind of adventure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-[#162944] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-3xl mb-2">{pkg.icon}</div>
                        <span className="text-xs text-[#d4a574] font-semibold tracking-wider uppercase">
                          {pkg.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-semibold text-white">{pkg.price}</div>
                        <div className="text-sm text-gray-400">{pkg.priceUnit}</div>
                      </div>
                    </div>

                    <h3 className="font-instrument text-xl font-semibold text-white mb-3 group-hover:text-[#d4a574] transition-colors">
                      {pkg.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
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

                    <div className="flex flex-wrap gap-2 mb-6">
                      {pkg.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <a
                      href={createWhatsAppLink(`Hi, I'm interested in ${pkg.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-[#d4a574] hover:text-[#0a1628] text-white font-medium py-3 rounded-xl transition-all duration-300 group-hover:bg-[#d4a574] group-hover:text-[#0a1628]"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Book This Package
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Event Services */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0a1628] to-[#0d1f3c]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#d4a574] text-sm font-semibold tracking-[0.2em] uppercase">Special Services</span>
            <h2 className="font-instrument text-4xl md:text-5xl font-semibold text-white mt-4 mb-6">
              Events & Occasions
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Custom charters for your special moments and professional requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENT_SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-[#162944] rounded-2xl p-8 text-center border border-white/5 hover:border-[#d4a574]/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-4 bg-[#0d1f3c]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#d4a574] text-sm font-semibold tracking-[0.2em] uppercase">Why Choose Us</span>
              <h2 className="font-instrument text-4xl md:text-5xl font-semibold text-white mt-4 mb-6">
                A Decade of Excellence
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                For over 10 years, we've been crafting memorable experiences on Mumbai waters. Our fleet of well-maintained vessels, professional crew, and commitment to safety has made us the trusted choice for thousands of happy customers.
              </p>
              <a
                href={createWhatsAppLink("Hi, I'd like to know more about your services")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#d4a574] hover:bg-[#c49464] text-[#0a1628] font-semibold px-6 py-3 rounded-full transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                { number: "10+", label: "Years Experience" },
                { number: "200+", label: "Happy Customers" },
                { number: "100%", label: "Safety Record" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-[#162944] rounded-xl p-6 text-center border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="font-instrument text-3xl text-[#d4a574] mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#d4a574] to-[#c49464]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl font-semibold text-[#0a1628] mb-6">
              Ready to Set Sail?
            </h2>
            <p className="text-[#0a1628]/80 text-lg mb-8 max-w-2xl mx-auto">
              Connect with us on WhatsApp for instant booking, custom quotes, and any questions about our services
            </p>
            <a
              href={createWhatsAppLink("Hi, I'd like to book a boat charter")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#0a1628] hover:bg-[#1a2744] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-white/5 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="font-instrument text-xl text-white">Mumbai Boat Charters</h3>
              <p className="text-sm text-gray-500 mt-1">Premium experiences on Mumbai waters</p>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="#packages" className="hover:text-white transition-colors">Packages</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </footer>

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
  );
}
