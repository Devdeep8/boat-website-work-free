"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Calendar, User, Clock, ArrowLeft, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface BlogAuthor {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface BlogImage {
  url: string;
  altText?: string;
  isCover?: boolean;
  sortOrder?: number;
}

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  images: BlogImage[];
  status: string;
  author: BlogAuthor;
  publishedAt: string;
  createdAt: string;
}

const DEMO_BLOGS: Blog[] = [
  {
    id: "blog-1",
    title: "Top 5 Private Yachts for a Romantic Sunset Cruise in Mumbai",
    slug: "romantic-sunset-cruise-yachts-mumbai",
    excerpt: "Looking for the perfect way to celebrate a special occasion or propose to your partner? Here are the top 5 luxury yachts you can charter in Mumbai with Vishal Boat Service.",
    content: `A romantic sunset cruise in Mumbai is one of the most magical experiences you can share with your partner. Floating on the Arabian Sea, with the Gateway of India fading into the distance and the sun dipping below the horizon, paints a picture-perfect memory. 

Whether you are planning a surprise marriage proposal, celebrating an anniversary, or simply looking to escape the hustle of the city, choosing the right vessel is crucial. Here are the top 5 luxury yachts you can charter for a romantic sunset cruise in Mumbai with Vishal Boat Service.

### 1. Jeanneau 54 (Luxury Sailing Yacht)
If your idea of romance involves elegant sails, wood-paneled decks, and premium comfort, the Jeanneau 54 is unmatched. It is a premium French sailing yacht that combines performance and luxury. With a length of 54 feet, it features a spacious saloon, multiple sunbathing decks, and three private cabins.

### 2. Lagoon 560 (Luxury Catamaran)
For unmatched stability and space, a catamaran is the perfect choice. The Lagoon 560 is a double-hulled luxury catamaran that feels like a floating villa. It features a massive flybridge, front trampoline nets where you can sit and watch the waves pass beneath you, and a luxurious air-conditioned lounge.

### 3. Grand Soliel 45 (Sporty & Sleek)
For couples who love the classic feel of a monohull sailing yacht but still want a modern, fast boat, the Grand Soliel 45 is a great pick. Known as the "Italian styling on water," it features clean lines, a flush deck, and an intimate cockpit perfect for close conversations.

### 4. Majesty 66 (Luxury Motor Yacht)
If you prefer power, speed, and absolute opulence, the Majesty 66 is a premier motor yacht option. With multiple decks, a flybridge with seating, and a large indoor saloon, it's perfect for couples who want a VIP experience with butler service and customized dining options.

### 5. Macgregor 26 (Affordable Romance)
Romance doesn't always have to break the bank. The Macgregor 26 is a compact sailing yacht perfect for couples looking for an intimate, budget-friendly sunset sail. It features a cozy cabin and a nice deck area to watch the sunset together.

### Booking Your Sunset Sail
To make your sunset cruise truly unforgettable, you can customize your experience with special add-ons:
- **Decorations:** Red roses, helium balloons, or fairy lights.
- **Dining:** Customized multi-course menus or light appetizers with mocktails.
- **Photography:** Professional photographers to capture the moment.
- **Musicians:** A private violinist or guitarist playing your favorite tunes.

For bookings and customized packages, contact Vishal Boat Service via Call or WhatsApp at +91 87791 63152.`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&h=675&fit=crop",
        altText: "Luxury yacht sailing in Mumbai harbour at sunset",
        isCover: true,
        sortOrder: 1
      }
    ],
    status: "published",
    author: {
      id: "author-1",
      name: "Captain Ramesh",
      email: "ramesh@vishalboats.com",
      role: "Senior Yacht Captain"
    },
    publishedAt: "2026-08-15T12:00:00Z",
    createdAt: "2026-08-15T12:00:00Z"
  },
  {
    id: "blog-2",
    title: "Alibaug Travel Guide: Reach Mandwa Jetty by Speed Boat in 20 Minutes",
    slug: "alibaug-travel-guide-speed-boat-mandwa",
    excerpt: "Skip the crowded public ferries. Here is a complete guide to traveling from Mumbai to Alibaug using speed boats, with timing, routes, and FAQs.",
    content: `Alibaug has long been Mumbai's favorite weekend playground. Known for its quiet beaches, historic sea forts, and luxurious villas, it's the perfect escape from the daily grind. But the journey there used to be a tedious affair, involving crowded public ferries or long road trips.

Today, speed boats have completely transformed travel between Mumbai and Alibaug. Here is your ultimate travel guide to reaching Mandwa Jetty by speed boat in just 20 minutes with Vishal Boat Service.

### The Route: Gateway of India to Mandwa Jetty
All speed boats depart from **Jetty No. 5, located directly opposite the Gateway of India** in South Mumbai. The arrival point is **Mandwa Jetty in Alibaug**. 

While a conventional ferry takes about an hour or more to complete this crossing, our speed boats cruise across the harbour in just **20 to 23 minutes**, depending on the sea conditions.

### Private Charter vs. Shared Speed Boat
Depending on your group size and budget, you can choose between two service options:

#### 1. Shared Speed Boat (Pool Ride)
Ideal for solo travelers, couples, or small groups. Instead of hiring the entire boat, you book individual seats.
- **Cost:** Starts from ₹1,200 per person (one way).
- **Capacity:** 10–12 passengers.
- **Timings:** Fixed departures throughout the day between 9:00 AM and 6:30 PM.

#### 2. Private Speed Boat Charter
Best for families, corporate groups, weddings, or travelers who want complete privacy and flexible timings.
- **Cost:** Starts from ₹7,000 per boat (one way).
- **Capacity:** Options for 6, 10, or 12 passenger boats.
- **Timings:** Depart at any time of your choice during daylight hours.

### Exploring Alibaug from Mandwa Jetty
Once you land at Mandwa Jetty, you have several ways to reach Alibaug town and the surrounding beaches:
- **Taxis:** Local cabs are readily available outside the jetty.
- **Auto Rickshaws:** A budget-friendly way to reach nearby destinations.
- **Speed Boat Bus:** Some ferry operators run buses connecting Mandwa Jetty to Alibaug bus depot (usually included in ferry tickets, but speed boat guests can pay a small fee to board).
- **Self-Drive / Car Rental:** Pre-booked cars can be arranged to meet you directly at the jetty.

### Best Places to Visit in Alibaug
- **Kashid Beach:** Famous for its white sand and water sports.
- **Kolaba Fort:** A historic sea fort walkable from Alibaug beach during low tide.
- **Kihim Beach:** A quiet, sandy beach surrounded by coconut palms.
- **Mandwa Beach:** Located right next to the jetty, featuring water sports and cafes.

### Booking Your Ride
To secure your preferred departure time (especially on weekends and holidays), advance booking is highly recommended. 

Call or WhatsApp Vishal Boat Service at +91 87791 63152 to book your speed boat seats today!`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=675&fit=crop",
        altText: "Beautiful beach in Alibaug with palm trees",
        isCover: true,
        sortOrder: 1
      }
    ],
    status: "published",
    author: {
      id: "author-2",
      name: "Harshita Dewan",
      email: "harshita@vishalboats.com",
      role: "Travel Advisor"
    },
    publishedAt: "2026-08-10T10:00:00Z",
    createdAt: "2026-08-10T10:00:00Z"
  },
  {
    id: "blog-3",
    title: "Exploring Elephanta Caves: A Guided Tour of Ancient Heritage",
    slug: "exploring-elephanta-caves-guided-tour",
    excerpt: "Step back in time to the 6th century. A guided speed boat tour of the magnificent cave temples on Elephanta Island with expert historians.",
    content: `Located on a quiet island just 10 kilometers east of Mumbai Harbour, the Elephanta Caves are a spectacular collection of rock-cut temples dedicated to the Hindu Lord Shiva. Dating back to the 5th and 8th centuries, these caves represent some of the most impressive temple architecture in India, earning them a UNESCO World Heritage site status in 1987.

If you are visiting Mumbai, a trip to Elephanta Island is a must. Here is a complete guide to exploring this ancient heritage site with a premium guided speed boat tour.

### The Journey: Speeding Through the Harbour
Traditional ferries to Elephanta Island take over an hour and can be crowded and noisy. With our shared or private speed boat tour, you'll travel in comfort and reach the island in just **20 to 30 minutes**. 

On the way, you can enjoy stunning views of the Gateway of India, the Taj Mahal Palace Hotel, naval vessels, and the expansive Mumbai skyline.

### Arriving at Elephanta Island
Upon landing, you'll find a toy train that connects the jetty to the base of the hill where the caves are located. It's a fun and quick ride, especially popular with kids. From the base, it's a climb of approximately 120 stone steps to reach the main cave. The walkway is lined with local market stalls selling souvenirs, handicrafts, water, and snacks.

### The Main Attraction: Great Cave 1
The main cave is an open-air rock-cut temple carved directly out of basalt rock. The hall is supported by massive pillars and contains spectacular relief panels illustrating stories of Lord Shiva:

- **Trimurti (Three-Headed Shiva):** The crown jewel of the caves. This 20-foot sculpture depicts Shiva as the Creator (Vamadeva), Preserver (Tatpurusha), and Destroyer (Aghora).
- **Ardhanarishvara:** A representation of Shiva as half-man and half-woman, signifying the union of the masculine and feminine energies of the universe.
- **Shiva Tandava:** A dynamic carving depicting Shiva performing the cosmic dance of destruction.

### Why Book a Guided Tour?
The history of Elephanta is deep, complex, and full of archaeological mystery. Booking a guided tour with an expert historian makes a massive difference:
- **Historical Context:** Learn about the dynasties that commissioned the caves.
- **Iconography Decoded:** Understand the deep symbolic meanings behind each carving.
- **Stress-Free Coordination:** Enjoy pre-purchased tickets, guided transfers, and a seamless itinerary.

### Practical Tips for Visitors
- **Operating Days:** The caves are **closed on Mondays**.
- **Footwear:** Wear comfortable walking shoes, as there is a fair amount of climbing and walking.
- **Wildlife:** The island is home to a large population of monkeys. Avoid carrying food in your hands or bags openly.
- **Timing:** Morning tours are recommended to beat the midday heat.

To book your Guided Speed Boat Tour to Elephanta Caves, Call or WhatsApp Vishal Boat Service at +91 87791 63152.`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&h=675&fit=crop",
        altText: "Trimurti sculpture inside Elephanta Caves",
        isCover: true,
        sortOrder: 1
      }
    ],
    status: "published",
    author: {
      id: "author-3",
      name: "Amit Sharma",
      email: "amit@vishalboats.com",
      role: "Heritage Historian"
    },
    publishedAt: "2026-08-05T09:00:00Z",
    createdAt: "2026-08-05T09:00:00Z"
  }
];

const WHATSAPP_NUMBER = "918779163152";

export default function BlogDetailPage() {
  const params = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!params.slug) return;
      setLoading(true);
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3004';
        const response = await fetch(`${API_URL}/api/v1/blogs/${params.slug}`);
        if (response.ok) {
          const result = await response.json();
          setBlog(result.data);
        } else {
          // Fallback to local demo data
          const demoBlog = DEMO_BLOGS.find((b) => b.slug === params.slug);
          setBlog(demoBlog || null);
        }
      } catch (error) {
        console.log("Backend not reachable, using local demo article.");
        const demoBlog = DEMO_BLOGS.find((b) => b.slug === params.slug);
        setBlog(demoBlog || null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const getCategory = (slug?: string) => {
    if (!slug) return "Destinations";
    if (slug.includes("romantic") || slug.includes("yacht")) return "Yacht Experience";
    if (slug.includes("alibaug") || slug.includes("travel")) return "Travel Guide";
    return "Destinations";
  };

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  // Helper to parse content with titles and lists to render elegant JSX instead of raw text
  const renderFormattedContent = (text: string) => {
    if (!text) return null;

    // Check if the content contains HTML tags (e.g. from Tiptap or rich text editor)
    if (/<[a-z][\s\S]*>/i.test(text)) {
      return (
        <div 
          className="font-poppins text-slate-700 space-y-6 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h1]:mt-8 [&_h1]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:mb-4 [&_strong]:font-semibold [&_strong]:text-slate-950 [&_a]:text-brand [&_a]:hover:text-brand-dark"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      );
    }

    // Otherwise, parse it as standard text/markdown
    const lines = text.split("\n");
    let inList = false;
    const listItems: string[] = [];
    const elements: React.JSX.Element[] = [];

    const flushList = (key: number) => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${key}`} className="list-disc pl-6 mb-6 space-y-2 text-slate-700 font-poppins">
            {listItems.map((item, idx) => (
              <li key={`li-${idx}`}>{item}</li>
            ))}
          </ul>
        );
        listItems.length = 0;
      }
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) {
        if (inList) {
          flushList(idx);
          inList = false;
        }
        return;
      }

      // Check for headings
      if (trimmed.startsWith("###")) {
        if (inList) {
          flushList(idx);
          inList = false;
        }
        const headingText = trimmed.replace(/^###\s*/, "");
        elements.push(
          <h3 key={`h3-${idx}`} className="font-poppins text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4">
            {headingText}
          </h3>
        );
      } else if (trimmed.startsWith("####")) {
        if (inList) {
          flushList(idx);
          inList = false;
        }
        const headingText = trimmed.replace(/^####\s*/, "");
        elements.push(
          <h4 key={`h4-${idx}`} className="font-poppins text-lg md:text-xl font-bold text-slate-900 mt-6 mb-3">
            {headingText}
          </h4>
        );
      } else if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
        inList = true;
        const itemText = trimmed.replace(/^[-*]\s*/, "");
        // Handle nested/inline bold: **text**
        listItems.push(itemText);
      } else {
        if (inList) {
          flushList(idx);
          inList = false;
        }

        // Parse inline bolding for standard paragraphs: **text** -> <strong>text</strong>
        const boldRegex = /\*\*(.*?)\*\*/g;
        let match;
        const parts: (string | React.JSX.Element)[] = [];
        let lastIndex = 0;

        while ((match = boldRegex.exec(trimmed)) !== null) {
          const matchIndex = match.index;
          if (matchIndex > lastIndex) {
            parts.push(trimmed.substring(lastIndex, matchIndex));
          }
          parts.push(<strong key={`strong-${matchIndex}`} className="font-semibold text-slate-950">{match[1]}</strong>);
          lastIndex = boldRegex.lastIndex;
        }
        if (lastIndex < trimmed.length) {
          parts.push(trimmed.substring(lastIndex));
        }

        elements.push(
          <p key={`p-${idx}`} className="font-poppins text-slate-700 leading-relaxed mb-5 text-base">
            {parts.length > 0 ? parts : trimmed}
          </p>
        );
      }
    });

    if (inList) {
      flushList(lines.length);
    }

    return elements;
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-[120px] min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-2 border-brand border-t-transparent"></div>
            <p className="mt-4 text-slate-500 text-sm font-poppins">Loading article...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Header />
        <main className="pt-[120px] min-h-screen bg-slate-50 flex items-center justify-center px-4">
          <div className="text-center bg-white p-8 rounded-3xl border border-slate-200 shadow-xs max-w-md">
            <h1 className="font-instrument text-2xl font-semibold text-slate-900 mb-4">Article Not Found</h1>
            <p className="text-slate-500 font-poppins mb-6">
              The article you are trying to view does not exist or has been archived.
            </p>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-xl font-medium transition-colors font-poppins text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blogs
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

      <main className="pt-[120px] min-h-screen bg-slate-50/50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-slate-100 py-4 px-4">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-poppins text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-slate-900 transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium truncate max-w-xs">{blog.title}</span>
          </div>
        </div>

        {/* Article Container */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <motion.article
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl border border-slate-200/60 p-6 md:p-10 shadow-xs overflow-hidden"
              >
                {/* Back link */}
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-brand hover:text-brand-dark font-semibold text-sm mb-6 transition-colors font-poppins"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to all articles
                </Link>

                {/* Article Header info */}
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-brand/10 text-brand-dark border-0 hover:bg-brand/20 font-poppins text-xs px-3 py-1 font-medium">
                    {getCategory(blog.slug)}
                  </Badge>
                </div>

                <h1 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6">
                  {blog.title}
                </h1>

                {/* Meta list */}
                <div className="flex flex-wrap items-center gap-4 md:gap-6 border-b border-slate-100 pb-6 mb-8 text-xs font-poppins text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xs uppercase">
                      {blog.author.name.charAt(0)}
                    </div>
                    <span className="font-medium text-slate-800">{blog.author.name}</span>
                    <span className="text-slate-300">({blog.author.role})</span>
                  </div>
                  <div className="hidden sm:inline text-slate-200">|</div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-300" />
                    {formatDate(blog.publishedAt || blog.createdAt)}
                  </div>
                  <div className="hidden sm:inline text-slate-200">|</div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-300" />
                    5 min read
                  </div>
                </div>

                {/* Main Hero Image */}
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 mb-8 border border-slate-100">
                  <img
                    src={blog.images[0]?.url || "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&h=675&fit=crop"}
                    alt={blog.images[0]?.altText || blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rendered Body Content */}
                <div className="prose max-w-none prose-slate">
                  {renderFormattedContent(blog.content)}
                </div>
              </motion.article>
            </div>

            {/* Sidebar Columns */}
            <div className="space-y-8">
              
              {/* Call-to-action Charter Widget */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-brand-hero text-white p-8 rounded-3xl shadow-brand-soft border border-brand/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                
                <h3 className="font-instrument text-2xl font-medium mb-3 text-white">
                  Plan Your Luxury Water Adventure
                </h3>
                <p className="text-white/80 text-sm font-poppins mb-6 leading-relaxed">
                  Charter a private yacht or book speed boat transfers directly from Gateway of India to Alibaug or Elephanta Caves. Custom itineraries available.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs font-poppins text-slate-100 font-medium">9yr+ Experience & 20k+ Happy Clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-poppins text-slate-100 font-medium">Instant Booking Confirmation</span>
                  </div>
                </div>

                <a
                  href={createWhatsAppLink(`Hi, I read your blog "${blog.title}" and would like to inquire about booking/charters.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 font-poppins text-sm shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.P157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Inquire on WhatsApp
                </a>
              </motion.div>

              {/* Author Biography Info */}
              <Card className="rounded-3xl border border-slate-200/60 shadow-xs overflow-hidden bg-white">
                <CardContent className="pt-6">
                  <h4 className="font-poppins font-semibold text-slate-800 text-sm mb-4 border-b border-slate-100 pb-2">
                    Author Details
                  </h4>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand/15 text-brand flex items-center justify-center font-bold text-sm uppercase shrink-0">
                      {blog.author.name.charAt(0)}
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-slate-900 text-sm font-poppins">{blog.author.name}</div>
                      <div className="text-xs text-brand font-semibold font-poppins">{blog.author.role}</div>
                      <div className="text-xs text-slate-400 font-poppins">{blog.author.email}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <Card className="rounded-3xl border border-slate-200/60 shadow-xs overflow-hidden bg-white">
                <CardContent className="pt-6">
                  <h4 className="font-poppins font-semibold text-slate-800 text-sm mb-4 border-b border-slate-100 pb-2">
                    Recent Articles
                  </h4>
                  <div className="space-y-4">
                    {DEMO_BLOGS.filter(b => b.id !== blog.id).slice(0, 3).map((item) => (
                      <div key={item.id} className="group">
                        <Link href={`/blogs/${item.slug}`} className="block">
                          <span className="text-xs text-slate-400 font-poppins">
                            {formatDate(item.publishedAt)}
                          </span>
                          <h5 className="font-poppins text-sm font-medium text-slate-800 group-hover:text-brand transition-colors leading-snug mt-0.5 line-clamp-2">
                            {item.title}
                          </h5>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
