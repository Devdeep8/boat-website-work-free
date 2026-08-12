import Link from "next/link";
import Logo from "@/components/Logo";
import { User, Trophy, Play, Camera } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const FOOTER_DATA = {
  company: {
    name: "Mumbai Boat Charters",
    tagline: "Premium experiences on Mumbai waters",
    address: "Jetty No. 5, next to Gateway of India, opposite main entrance of The Taj Mahal Hotel. Mumbai",
    email: "enquiry@boatbooking.com",
    phones: ["+91 88792 93803", "+91 98923 80138"]
  },
  quickLinks: [
    { name: "About", href: "/about" },
    { name: "FAQs", href: "/faq" },
    { name: "Events", href: "/events" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ],
  yachtCategories: [
    { name: "Motor Yachts", href: "#packages" },
    { name: "Sail Yachts", href: "#packages" },
    { name: "Sail Boats", href: "#packages" },
    { name: "Speed Boats", href: "#packages" },
    { name: "House Boats", href: "#packages" }
  ],
  experiences: [
    { name: "Corporate Events", href: "#experiences" },
    { name: "Romantic Getaways", href: "#experiences" },
    { name: "Gift A Sail", href: "#experiences" },
    { name: "Speed Boat Transfers", href: "#experiences" },
    { name: "High Seas Cruising", href: "#experiences" },
    { name: "Photo & Video Shoots", href: "#experiences" },
    { name: "Private Yacht Charters", href: "#experiences" },
    { name: "Thrilling Water Sports", href: "#experiences" }
  ],
  socialLinks: ([
    { name: "Facebook", icon: User, href: "#" },
    { name: "Tripadvisor", icon: Trophy, href: "#" },
    { name: "YouTube", icon: Play, href: "#" },
    { name: "Instagram", icon: Camera, href: "#" }
  ] as { name: string; icon: LucideIcon; href: string }[])
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo variant="dark" />
            </div>
            <p className="text-sm text-gray-400 mb-4 font-poppins">
              Premium boat and yacht charters in Mumbai, Goa & Kerala. Creating unforgettable memories on the water.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-1 text-[#59b280] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="font-poppins">{FOOTER_DATA.company.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#59b280] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href={`mailto:${FOOTER_DATA.company.email}`} className="hover:text-[#59b280] font-poppins">
                  {FOOTER_DATA.company.email}
                </a>
              </div>
              {FOOTER_DATA.company.phones.map((phone, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#59b280] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-[#59b280] font-poppins">
                    {phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_DATA.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#59b280] transition-colors font-poppins">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yacht Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-poppins">Yachts</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_DATA.yachtCategories.map((category) => (
                <li key={category.name}>
                  <Link href={category.href} className="hover:text-[#59b280] transition-colors font-poppins">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-poppins">Experiences</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_DATA.experiences.map((experience) => (
                <li key={experience.name}>
                  <Link href={experience.href} className="hover:text-[#59b280] transition-colors font-poppins">
                    {experience.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3 mt-8 pt-8 border-t border-gray-800">
          {FOOTER_DATA.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#59b280] hover:text-white transition-colors"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-8 p-6 bg-gray-800 rounded-lg">
          <h3 className="text-white font-semibold mb-2 font-poppins">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-4 font-poppins">
            Subscribe to our newsletter for exclusive offers and updates
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#59b280] font-poppins"
            />
            <button className="px-6 py-2 bg-[#59b280] hover:bg-[#4a9a6d] text-white rounded-lg font-medium transition-colors font-poppins">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="font-poppins">
              © {new Date().getFullYear()} {FOOTER_DATA.company.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 font-poppins">
              <Link href="/privacy" className="hover:text-[#59b280] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#59b280] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-xs text-gray-500 text-center font-poppins">
            Sailing services are subject to weather conditions. Booking confirmation requires 100% payment in advance.
            Guests must adhere to all safety measures provided and follow guidance from the captain/skipper.
            All guests agree to indemnify the company against any future claims related to sailing activities.
          </p>
        </div>
      </div>
    </footer>
  );
}
