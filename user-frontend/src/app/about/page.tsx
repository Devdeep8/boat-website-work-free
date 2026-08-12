"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-[96px] md:pt-[120px] min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-[#59b280] to-[#7bc49a]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="font-instrument text-5xl md:text-6xl font-semibold text-[#064e3b] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-xl text-[#065f46] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Premium boat charter experiences on Mumbai waters since 2014
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#d4a574] text-sm font-semibold tracking-[0.2em] uppercase">Our Story</span>
              <h2 className="font-instrument text-4xl font-semibold text-[#064e3b] mt-4 mb-6">
                A Decade on Mumbai Waters
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Founded in 2014, Mumbai Boat Charters has been crafting unforgettable experiences on the Arabian Sea. What started as a small fleet of two boats has grown into one of Mumbai's most trusted boat charter services.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our commitment to safety, luxury, and personalized service has earned us the trust of over 10,000 happy customers – from tourists seeking iconic views of the Gateway of India to couples creating wedding memories, and filmmakers capturing the perfect shot.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="font-instrument text-4xl text-[#59b280] mb-2">10+</div>
                  <div className="text-sm text-[#065f46]">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-instrument text-4xl text-[#d4a574] mb-2">50+</div>
                  <div className="text-sm text-gray-400">Vessels</div>
                </div>
                <div className="text-center">
                  <div className="font-instrument text-4xl text-[#d4a574] mb-2">10K+</div>
                  <div className="text-sm text-gray-400">Happy Guests</div>
                </div>
                <div className="text-center">
                  <div className="font-instrument text-4xl text-[#d4a574] mb-2">100%</div>
                  <div className="text-sm text-gray-400">Safety Record</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#59b280] text-sm font-semibold tracking-[0.2em] uppercase">What We Believe</span>
            <h2 className="font-instrument text-4xl font-semibold text-[#064e3b] mt-4">Our Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                description: "Every vessel is equipped with life jackets, emergency equipment, and insurance. Our captains are licensed and trained.",
                icon: "🛡️"
              },
              {
                title: "Personalized Service",
                description: "From custom routes to special celebrations, we tailor every experience to your needs.",
                icon: "✨"
              },
              {
                title: "Transparent Pricing",
                description: "No hidden costs. What you see is what you pay – clear communication on all inclusions.",
                icon: "💎"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-instrument text-xl font-semibold text-[#064e3b] mb-3">{value.title}</h3>
                <p className="text-[#065f46]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#59b280] to-[#4a9a6d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-instrument text-4xl font-semibold text-white mb-6">
            Ready to Experience Mumbai's Waters?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Browse our packages or connect with us for a custom experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#064e3b] font-semibold px-8 py-4 rounded-full transition-all"
            >
              View Packages
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#064e3b] hover:bg-[#0a1628] text-white font-semibold px-8 py-4 rounded-full transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>

      <Footer />
    </>
  );
}
