"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "919876543210";
const EMAIL = "info@mumbaiboatcharters.com";

export default function ContactPage() {
  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <Header />
      <main className="pt-[120px] min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-[#0a1628] via-[#1a2744] to-[#0a1628]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="font-instrument text-5xl md:text-6xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Have questions? We're here to help you plan your perfect boat charter experience
          </motion.p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-4 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "WhatsApp",
                description: "Fastest response time",
                value: "+91 " + WHATSAPP_NUMBER.slice(2, 12),
                icon: "💬",
                link: createWhatsAppLink("Hi, I have a question about boat charters"),
                color: "from-green-500 to-green-600"
              },
              {
                title: "Email",
                description: "Detailed inquiries",
                value: EMAIL,
                icon: "📧",
                link: `mailto:${EMAIL}`,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Location",
                description: "Our departure point",
                value: "Gateway of India, Mumbai",
                icon: "📍",
                link: "https://maps.google.com/?q=Gateway+of+India,Mumbai",
                color: "from-purple-500 to-purple-600"
              }
            ].map((contact, index) => (
              <motion.a
                key={contact.title}
                href={contact.link}
                target={contact.title !== "Location" ? "_blank" : undefined}
                rel={contact.title !== "Location" ? "noopener noreferrer" : undefined}
                className="group relative bg-[#162944] rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 from-white/5 to-transparent" />
                <div className="relative">
                  <div className="text-4xl mb-4">{contact.icon}</div>
                  <h3 className="font-instrument text-xl font-semibold text-white mb-2">{contact.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{contact.description}</p>
                  <p className="text-[#d4a574] font-medium">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#0d1f3c]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#d4a574] text-sm font-semibold tracking-[0.2em] uppercase">FAQ</span>
            <h2 className="font-instrument text-4xl font-semibold text-white mt-4">Common Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How do I book a boat?",
                answer: "Simply click on any WhatsApp button on our website or call us directly. We'll check availability and confirm your booking instantly."
              },
              {
                question: "What's included in the price?",
                answer: "Our prices include the boat, captain, crew, and safety equipment. Food and beverages can be arranged at additional cost."
              },
              {
                question: "Is it safe for children?",
                answer: "Yes! We have life jackets for all ages including children. Our captains are experienced and prioritize safety above all."
              },
              {
                question: "What's the cancellation policy?",
                answer: "Full refund if cancelled 24 hours before the trip. 50% refund for cancellations within 24 hours due to weather."
              },
              {
                question: "Can I bring my own food and drinks?",
                answer: "Yes, you're welcome to bring your own food and non-alcoholic beverages. We can also arrange catering for you."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-[#162944] rounded-xl p-6 border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#d4a574] to-[#c49464]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-instrument text-4xl font-semibold text-[#0a1628] mb-6">
            Ready to Book?
          </h2>
          <p className="text-[#0a1628]/80 text-lg mb-8">
            Connect with us on WhatsApp for instant booking confirmation
          </p>
          <a
            href={createWhatsAppLink("Hi, I'd like to book a boat charter")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0a1628] hover:bg-[#1a2744] text-white font-semibold px-10 py-4 rounded-full transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book via WhatsApp
          </a>
        </div>
      </section>
    </main>

      <Footer />
    </>
  );
}
