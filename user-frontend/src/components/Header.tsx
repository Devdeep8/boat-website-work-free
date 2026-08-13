"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { User, Trophy, Play, Camera } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavChild = string | { name: string; href: string };

type NavigationItem = {
  name: string;
  href: string;
  children?: NavChild[];
};

const NAVIGATION: NavigationItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Experiences",
    href: "#experiences",
    children: [
      "Corporate Packages",
      "Romantic Getaways",
      "Photoshoots & Video Shoots",
      "Gift a Sail",
      "Private Yacht Charters",
      "High Seas Cruising",
      "Thrilling Water Sports",
      "Learn to Sail",
      "Speedboat Transfers",
    ],
  },
  {
    name: "Speed Boat",
    href: "#packages",
    children: [
      "Bayliner 245",
      "Gulf Craft 31",
      "Speed Boat Blue Whale",
    ],
  },
  {
    name: "Yachts",
    href: "#packages",
    children: [
      "Jeanneau 54",
      "Grand Soliel 45",
      "Lagoon 560",
    ],
  },
  {
    name: "Destinations",
    href: "/destinations",
    children: [
      { name: "Mumbai", href: "/destinations/mumbai" },
      { name: "Alibaug", href: "/destinations/alibaug" },
      { name: "Elephanta Caves", href: "/destinations/elephanta-caves" },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const CONTACT_INFO = {
  phones: ["+91 87791 63152"],
};

const LOCATIONS = [
  {
    name: "Mumbai",
    href: "/destinations/mumbai",
  },
  {
    name: "Alibaug (Mandwa)",
    href: "/destinations/alibaug",
  },
  {
    name: "Elephanta Caves",
    href: "/destinations/elephanta-caves",
  },
];

const SOCIAL_LINKS: {
  name: string;
  icon: LucideIcon;
  href: string;
}[] = [
  { name: "Facebook", icon: User, href: "#" },
  { name: "Tripadvisor", icon: Trophy, href: "#" },
  { name: "YouTube", icon: Play, href: "#" },
  { name: "Instagram", icon: Camera, href: "#" },
];

function getChildName(child: NavChild) {
  return typeof child === "string" ? child : child.name;
}

function getChildHref(child: NavChild) {
  return typeof child === "string" ? "#" : child.href;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">

      {/* Top Bar - Locations & Phone */}
      <div className="bg-gradient-to-r from-[#59b280] to-[#4a9a6d] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">

            {/* Locations */}
            <div className="flex items-center gap-3 ">
              {LOCATIONS.map((location, index) => (
                <div
                  key={location.name}
                  className="flex items-center gap-3"
                >
                  <Link
                    href={location.href}
                    className="font-poppins hover:underline text-white  whitespace-nowrap"
                  >
                    {location.name}
                  </Link>

                  {index < LOCATIONS.length - 1 && (
                    <span className="text-white">|</span>
                  )}
                </div>
              ))}
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              {CONTACT_INFO.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="text-white font-semibold hover:underline font-poppins flex items-center gap-1.5"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>

                  {phone}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Logo variant="light" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAVIGATION.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-[#59b280] font-medium font-poppins text-sm transition-colors py-2"
                >
                  {item.name}

                  {item.children && (
                    <svg
                      className="inline-block w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={getChildName(child)}
                          href={getChildHref(child)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#59b280] font-poppins transition-colors"
                        >
                          {getChildName(child)}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#59b280] hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <nav className="px-4 py-6 space-y-4">

              {NAVIGATION.map((item) => (
                <div key={item.name}>

                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-[#59b280] font-medium font-poppins"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>

                  {item.children && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={getChildName(child)}
                          href={getChildHref(child)}
                          className="block text-sm text-gray-600 hover:text-[#59b280] font-poppins"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {getChildName(child)}
                        </Link>
                      ))}
                    </div>
                  )}

                </div>
              ))}

              {/* Mobile Locations */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-500 mb-3">
                  Locations
                </p>

                <div className="space-y-2">
                  {LOCATIONS.map((location) => (
                    <Link
                      key={location.name}
                      href={location.href}
                      className="block text-sm text-gray-700 hover:text-[#59b280] font-poppins"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              </div>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
