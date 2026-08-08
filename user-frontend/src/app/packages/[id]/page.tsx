"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

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

const WHATSAPP_NUMBER = "919876543210";

export default function PackageDetailsPage() {
  const params = useParams();
  const [pkg, setPkg] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch package from backend
    const fetchPackage = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3004';
        const response = await fetch(`${API_URL}/api/v1/packages/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setPkg(data.data);
        } else {
          // Fallback to demo data if backend not available
          const demoPackages: Package[] = [
            {
              id: 1,
              name: "Harbour Cruise",
              title: "Speed Boat Mumbai Harbour Cruise",
              description: "Experience Mumbai's iconic skyline from the water. Cruise past the Gateway of India, Taj Mahal Palace, and Naval Dockyard with our professional crew. Perfect for sightseeing, photography, and romantic sunsets.",
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
              description: "Quick 45-minute scenic transfer to Mandwa beach. Skip the ferry crowds and reach Alibaug in style with our comfortable speed boats.",
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
              description: "Luxury yacht transfer with premium amenities. Travel like a VIP with refreshments, music, and spacious decks. The most elegant way to reach Alibaug.",
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
              description: "Ultimate luxury on Mumbai harbour. Panoramic views, attentive service, and unforgettable memories. Perfect for celebrations and special occasions.",
              duration: "2-3 hours",
              capacity: "15 guests",
              price: "₹35,000",
              priceUnit: "/ 2 hours",
              highlights: ["Luxury yacht", "Panoramic views", "Attentive crew", "Customizable duration"],
              gradient: "from-purple-500 via-pink-500 to-rose-600",
              icon: "🥂"
            }
          ];

          const found = demoPackages.find(p => p.id === parseInt(params.id as string));
          setPkg(found || null);
        }
      } catch (error) {
        console.error('Failed to fetch package:', error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [params.id]);

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a1628]">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a1628]">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Package not found</h1>
          <Link href="/" className="text-[#d4a574] hover:underline">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-[#0a1628] via-[#1a2744] to-[#0a1628]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-6xl mb-4">{pkg.icon}</div>
            <span className="text-[#d4a574] text-sm font-semibold tracking-wider uppercase">
              {pkg.name}
            </span>
            <h1 className="font-instrument text-4xl md:text-5xl font-semibold text-white mt-4 mb-6">
              {pkg.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                {pkg.duration}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
                {pkg.capacity}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 px-4 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-instrument text-2xl font-semibold text-white mb-4">About This Experience</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                {pkg.description}
              </p>

              <h3 className="font-instrument text-xl font-semibold text-white mb-4">What's Included</h3>
              <div className="grid grid-cols-2 gap-4">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-[#d4a574]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {highlight}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-[#162944] rounded-2xl p-8 border border-white/5 sticky top-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-semibold text-white mb-1">{pkg.price}</div>
                <div className="text-gray-400">{pkg.priceUnit}</div>
              </div>

              <a
                href={createWhatsAppLink(`Hi, I'm interested in booking ${pkg.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#d4a574] hover:bg-[#c49464] text-[#0a1628] font-semibold py-4 rounded-xl text-center transition-all mb-4"
              >
                Book via WhatsApp
              </a>

              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center justify-between">
                  <span>Duration</span>
                  <span className="text-white">{pkg.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Capacity</span>
                  <span className="text-white">{pkg.capacity}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0d1f3c]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-instrument text-3xl font-semibold text-white mb-6">
            Ready to Book This Experience?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Connect with us on WhatsApp for instant confirmation and any questions
          </p>
          <a
            href={createWhatsAppLink(`Hi, I'd like to book ${pkg.title}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#d4a574] hover:bg-[#c49464] text-[#0a1628] font-semibold px-10 py-4 rounded-full transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book via WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
