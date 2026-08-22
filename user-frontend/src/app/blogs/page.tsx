"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, User, Search, ArrowRight, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
    content: "A romantic sunset cruise in Mumbai is one of the most magical experiences you can share with your partner...",
    images: [
      {
        url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&h=500&fit=crop",
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
    content: "Alibaug has long been Mumbai's favorite weekend playground...",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop",
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
    content: "Located on a quiet island just 10 kilometers east of Mumbai Harbour, the Elephanta Caves are a spectacular collection of rock-cut temples...",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&h=500&fit=crop",
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

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>(DEMO_BLOGS);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setCurrentPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3004';
        const queryParams = new URLSearchParams({
          page: currentPage.toString(),
          limit: '6',
          ...(debouncedQuery ? { q: debouncedQuery } : {})
        });

        const response = await fetch(`${API_URL}/api/v1/blogs?${queryParams.toString()}`);
        if (response.ok) {
          const result = await response.json();
          if (result.data && result.data.items && result.data.items.length > 0) {
            setBlogs(result.data.items);
            setTotalPages(result.data.pagination.totalPages || 1);
          } else {
            // If API returned empty search results, set empty list
            if (debouncedQuery) {
              setBlogs([]);
              setTotalPages(1);
            } else {
              setBlogs(DEMO_BLOGS);
              setTotalPages(1);
            }
          }
        } else {
          // Fallback to local demo list
          filterLocalBlogs();
        }
      } catch (error) {
        console.log('Backend not reachable, using demo blogs.');
        filterLocalBlogs();
      } finally {
        setLoading(false);
      }
    };

    const filterLocalBlogs = () => {
      let filtered = [...DEMO_BLOGS];
      if (debouncedQuery) {
        filtered = filtered.filter(blog =>
          blog.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(debouncedQuery.toLowerCase())
        );
      }
      setBlogs(filtered);
      setTotalPages(1);
    };

    fetchBlogs();
  }, [debouncedQuery, currentPage]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  // Helper to determine category dynamically
  const getCategory = (slug: string) => {
    if (slug.includes("romantic") || slug.includes("yacht")) return "Yacht Experience";
    if (slug.includes("alibaug") || slug.includes("travel")) return "Travel Guide";
    return "Destinations";
  };

  return (
    <>
      <Header />

      <main className="pt-[120px] min-h-screen bg-slate-50/50">
        {/* Hero Section */}
        <section className="bg-white border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-brand hover:bg-brand-dark text-white font-medium px-4 py-1 text-xs rounded-full uppercase tracking-wider mb-4 font-poppins">
                Blogs & Articles
              </Badge>
              <h1 className="font-instrument text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mt-2 mb-6">
                Our Travel & Boating Blog
              </h1>
              <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-poppins font-light leading-relaxed">
                Insights, guides, and stories about cruising, yacht charters, and speed boat transfers in Mumbai & Alibaug.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/60 shadow-xs">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all font-poppins"
              />
            </div>
            <div className="text-xs text-slate-500 font-poppins whitespace-nowrap">
              Showing {blogs.length} {blogs.length === 1 ? 'article' : 'articles'}
            </div>
          </div>
        </section>

        {/* Blog Post Grid */}
        <section className="pb-24 px-4 max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-2 border-brand border-t-transparent"></div>
              <p className="mt-4 text-slate-500 text-sm font-poppins">Loading articles...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/60 shadow-xs max-w-lg mx-auto px-6">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-poppins text-lg font-semibold text-slate-800">No articles found</h3>
              <p className="text-slate-500 text-sm font-poppins mt-2 mb-6">
                We couldn't find any blog posts matching "{searchQuery}". Try using different keywords.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="bg-brand hover:bg-brand-dark text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors font-poppins"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group h-full flex flex-col overflow-hidden border border-slate-200/60 hover:border-brand/20 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300 rounded-2xl bg-white">
                      {/* Image Scrim & Cover */}
                      <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                        <img
                          src={blog.images[0]?.url || "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop"}
                          alt={blog.images[0]?.altText || blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 backdrop-blur-xs text-slate-800 hover:bg-white border-0 font-poppins font-medium shadow-sm text-xs">
                            {getCategory(blog.slug)}
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <CardHeader className="pb-2 pt-6 px-6">
                        <div className="flex items-center gap-3 text-slate-400 text-xs font-poppins mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-300" />
                            {formatDate(blog.publishedAt || blog.createdAt)}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-300" />
                            5 min read
                          </span>
                        </div>
                        <CardTitle className="font-poppins text-lg md:text-xl font-semibold text-slate-900 group-hover:text-brand transition-colors leading-snug line-clamp-2">
                          <Link href={`/blogs/${blog.slug}`}>
                            {blog.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="px-6 flex-grow">
                        <p className="text-slate-500 text-sm font-poppins line-clamp-3 leading-relaxed">
                          {blog.excerpt}
                        </p>
                      </CardContent>

                      <CardFooter className="px-6 pb-6 pt-4 border-t border-slate-50 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-brand/10 text-brand-dark flex items-center justify-center font-bold text-xs uppercase border border-brand/20">
                            {blog.author.name.charAt(0)}
                          </div>
                          <div className="text-xs">
                            <div className="font-semibold text-slate-800 font-poppins">{blog.author.name}</div>
                            <div className="text-slate-400 font-poppins">{blog.author.role}</div>
                          </div>
                        </div>

                        <Link
                          href={`/blogs/${blog.slug}`}
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 group-hover:bg-brand text-slate-500 group-hover:text-white transition-all duration-300"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Pagination (Only show if multiple pages exist) */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-16 font-poppins">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-xl border text-sm font-medium transition-all ${
                        currentPage === page
                          ? "bg-brand border-brand text-white"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}