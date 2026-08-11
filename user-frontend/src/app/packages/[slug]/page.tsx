"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Package {
  id: number;
  name: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  duration: string;
  capacity: string;
  size: string;
  cabins: string;
  price: string;
  priceUnit: string;
  highlights: string[];
  features: string[];
  includes: string[];
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
    description: "Experience Mumbai's iconic skyline from the water. Gateway of India, Taj Mahal Palace, and Naval Dockyard views.",
    fullDescription: "Experience Mumbai's iconic skyline from the water with our Speed Boat Mumbai Harbour Cruise. Get breathtaking views of the Gateway of India, Taj Mahal Palace, and Naval Dockyard. This 1-2 hour cruise is perfect for photography enthusiasts and sightseers alike. Our professional crew ensures a safe and enjoyable journey through Mumbai Harbour, sharing interesting facts about the historic landmarks along the way.",
    duration: "1-2 hours",
    capacity: "8 guests",
    size: "15-20 Ft",
    cabins: "0 Cabins",
    price: "₹6,000",
    priceUnit: "/ hour",
    highlights: ["Sunset timing available", "Professional crew", "Safety gear included", "Best for photography"],
    features: ["Powerful engine", "Comfortable seating", "Music system", "Bluetooth speakers"],
    includes: ["Life jackets", "Soft drinks", "Professional captain", "Fuel"],
    images: [
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&h=600&fit=crop"
    ],
    category: "speed-boat",
    icon: "🚤"
  },
  {
    id: 2,
    name: "Speed Boat",
    title: "Speed Boat Ride to Mandwa (Alibaug)",
    slug: "speed-boat-ride-to-mandwa-alibaug",
    description: "Quick 45-minute scenic transfer to Mandwa beach. Skip the ferry crowds and reach Alibaug in style.",
    fullDescription: "Skip the long ferry queues and reach Alibaug in style with our Speed Boat Ride to Mandwa. This quick 45-minute scenic transfer takes you directly to Mandwa beach, where you can easily access Alibaug. Our 31-ft speed boat offers comfort, speed, and style. Enjoy the coastal views and arrive at your destination refreshed and ready to explore. Perfect for weekend getaways and quick trips to Alibaug.",
    duration: "45 min",
    capacity: "6 guests",
    size: "31 Ft",
    cabins: "0 Cabins",
    price: "₹7,000",
    priceUnit: "/ one way",
    highlights: ["Fastest route to Alibaug", "Comfortable seating", "Luggage assistance", "Flexible timing"],
    features: ["Speed up to 30 knots", "Shaded seating", "Storage for luggage", "Smooth ride"],
    includes: ["Life jackets", "Bottled water", "Experienced skipper", "Fuel"],
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=600&fit=crop"
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
    fullDescription: "Experience the ultimate luxury with our Yacht Hire for Mandwa transfer. Travel to Alibaug like a VIP aboard our premium 54-ft Jeanneau yacht with 3 elegant cabins. Enjoy refreshments, music, and spacious decks while taking in the scenic coastal views. This 1-hour luxury transfer is perfect for special occasions, corporate events, or those who demand the finest in maritime travel. Arrive at Alibaug in style and make your journey as memorable as the destination.",
    duration: "1 hour",
    capacity: "12 guests",
    size: "54 Ft",
    cabins: "3 Cabins",
    price: "₹25,000",
    priceUnit: "/ one way",
    highlights: ["Premium yacht experience", "Refreshments included", "Music system", "VIP service"],
    features: ["3 luxurious cabins", "Spacious saloon", "Flybridge seating", "Fully equipped galley"],
    includes: ["Welcome drinks", "Snacks", "Professional crew", "Fuel"],
    images: [
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549437982-8e216614e6a7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=600&fit=crop"
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
    fullDescription: "Indulge in the ultimate luxury experience with our Yacht Harbour Cruise. This 2-3 hour journey around Mumbai harbour offers panoramic views of the city skyline, attentive service, and unforgettable memories. Our 45-ft luxury yacht features 2 elegant cabins, spacious decks, and premium amenities. Perfect for celebrations, corporate events, romantic getaways, or special occasions. Create lasting memories as you cruise past iconic landmarks including the Gateway of India and Taj Mahal Palace.",
    duration: "2-3 hours",
    capacity: "15 guests",
    size: "45 Ft",
    cabins: "2 Cabins",
    price: "₹35,000",
    priceUnit: "/ 2 hours",
    highlights: ["Luxury yacht", "Panoramic views", "Attentive crew", "Customizable duration"],
    features: ["2 luxurious cabins", "Spacious decks", "Dining area", "Premium sound system"],
    includes: ["Welcome champagne", "Gourmet snacks", "Professional crew", "Decorations"],
    images: [
      "https://images.unsplash.com/photo-1549437982-8e216614e6a7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
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
    fullDescription: "Discover the ancient wonders of Elephanta Caves with our Premium Guided Tour Package. This comprehensive 3-4 hour experience includes a scenic boat ride to Elephanta Island, guided tour by expert historians, and cave entrance tickets. Explore magnificent rock-cut temples dating back to the 6th century, including the famous three-headed Shiva statue. Our knowledgeable guides bring history to life with detailed insights into the architecture, mythology, and cultural significance of this UNESCO World Heritage Site.",
    duration: "3-4 hours",
    capacity: "10 guests",
    size: "25 Ft",
    cabins: "0 Cabins",
    price: "₹8,000",
    priceUnit: "/ tour",
    highlights: ["Expert historian guide", "Cave entrance tickets", "Boat transfer", "Light refreshments"],
    features: ["UNESCO World Heritage Site", "Ancient rock-cut temples", "Expert guide", "Small group"],
    includes: ["Boat transfers", "Cave entrance fees", "Professional historian", "Light refreshments"],
    images: [
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&h=600&fit=crop"
    ],
    category: "guided-tour",
    icon: "🏛️"
  }
];

const WHATSAPP_NUMBER = "919876543210";

export default function PackageDetailPage() {
  const params = useParams();
  const [package_, setPackage] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3004';
        const response = await fetch(`${API_URL}/api/v1/packages/${params.slug}`);
        if (response.ok) {
          const data = await response.json();
          setPackage(data.data);
        } else {
          // Use demo data
          const demoPackage = DEMO_PACKAGES.find(p => p.slug === params.slug);
          setPackage(demoPackage || null);
        }
      } catch (error) {
        // Use demo data
        const demoPackage = DEMO_PACKAGES.find(p => p.slug === params.slug);
        setPackage(demoPackage || null);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchPackage();
    }
  }, [params.slug]);

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-[120px] min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            <p className="mt-4 text-gray-600">Loading package details...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!package_) {
    return (
      <>
        <Header />
        <main className="pt-[120px] min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">Package Not Found</h1>
            <Link href="/packages" className="text-brand-primary hover:underline">
              Back to Packages
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="pt-[120px] bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">Home</Link>
              <span>/</span>
              <Link href="/packages" className="hover:text-gray-900">Packages</Link>
              <span>/</span>
              <span className="text-gray-900">{package_.title}</span>
            </div>
          </div>
        </div>

        {/* Package Header */}
        <div className="bg-gray-50 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">{package_.icon}</span>
              <Badge className="font-poppins">{package_.name}</Badge>
            </div>
            <h1 className="font-instrument text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              {package_.title}
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl font-poppins">
              {package_.fullDescription}
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Main Image */}
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={package_.images[selectedImage] || package_.images[0]}
                  alt={package_.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-2 gap-4">
                {package_.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-video rounded-lg overflow-hidden bg-gray-100 ${
                      selectedImage === index ? 'ring-2 ring-brand-primary' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${package_.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specifications & Booking */}
        <div className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Specifications */}
              <Card className="md:col-span-2">
                <CardContent className="pt-6">
                  <h2 className="font-instrument text-2xl font-semibold text-gray-900 mb-6">Specifications</h2>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-poppins">Duration</div>
                        <div className="font-medium text-gray-900">{package_.duration}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-poppins">Capacity</div>
                        <div className="font-medium text-gray-900">{package_.capacity}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 4.5A2.5 2.5 0 014.5 2h11a2.5 2.5 0 010 5h-11A2.5 2.5 0 012 4.5zm2.5 5.5a2.5 2.5 0 012.5-2.5h6a2.5 2.5 0 010 5h-6a2.5 2.5 0 01-2.5-2.5z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-poppins">Size</div>
                        <div className="font-medium text-gray-900">{package_.size}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-poppins">Cabins</div>
                        <div className="font-medium text-gray-900">{package_.cabins}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 font-poppins">Highlights</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {package_.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="font-poppins">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 font-poppins">Features</h3>
                    <ul className="space-y-2 mb-6">
                      {package_.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 font-poppins">What's Included</h3>
                    <ul className="space-y-2">
                      {package_.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Booking Card */}
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900">{package_.price}</div>
                    <div className="text-sm text-gray-500">{package_.priceUnit}</div>
                  </div>

                  <a
                    href={createWhatsAppLink(`Hi, I'm interested in booking ${package_.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-xl transition-all duration-300 mb-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.P157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Book via WhatsApp
                  </a>

                  <a
                    href={`tel:+91${WHATSAPP_NUMBER.substring(2)}`}
                    className="w-full inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-gray-400 text-gray-900 font-medium py-3 rounded-xl transition-all duration-300 mb-6"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    Call to Book
                  </a>

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Need Help?</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Our team is available 24/7 to assist you with bookings and inquiries.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-600">Quick response guaranteed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Packages */}
        <div className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-instrument text-2xl font-semibold text-gray-900 mb-6">Related Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {DEMO_PACKAGES.filter(p => p.id !== package_?.id).slice(0, 3).map((pkg) => (
                <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <div className="aspect-video rounded-t-lg overflow-hidden bg-gray-100">
                      <img
                        src={pkg.images[0]}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{pkg.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">{pkg.price}</span>
                        <span className="text-sm text-gray-500">{pkg.priceUnit}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
