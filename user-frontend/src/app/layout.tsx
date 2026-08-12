import type { Metadata } from "next";
import { Instrument_Serif, Poppins, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Mumbai Boat Charters | Speed Boats & Yachts",
    template: "%s | Mumbai Boat Charters"
  },
  description: "Premium speed boat and yacht charters in Mumbai. Harbour cruises, Mandwa transfers, Elephanta tours. Book via WhatsApp - instant confirmation available.",
  icons: {
    icon: [{ url: "/logo/logo.png", type: "image/png" }],
    shortcut: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
  keywords: ["mumbai boat charter", "speed boat mumbai", "yacht hire mumbai", "mandwa boat transfer", "elephanta caves tour", "alibaug speed boat"],
  authors: [{ name: "Mumbai Boat Charters" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mumbaiboatcharters.com",
    siteName: "Mumbai Boat Charters",
    title: "Mumbai Boat Charters | Speed Boats & Yachts",
    description: "Premium speed boat and yacht charters in Mumbai. Book via WhatsApp for instant confirmation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumbai Boat Charters | Speed Boats & Yachts",
    description: "Premium speed boat and yacht charters in Mumbai. Book via WhatsApp for instant confirmation.",
  },
  alternates: {
    canonical: "https://mumbaiboatcharters.com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={cn("h-full", "antialiased",poppins.variable, "font-sans", geist.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Mumbai Boat Charters",
              "description": "Premium speed boat and yacht charters in Mumbai offering harbour cruises, Mandwa/Alibaug transfers, and Elephanta tours.",
              "url": "https://mumbaiboatcharters.com",
              "telephone": "+918779163152",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.9667",
                "longitude": "72.8333"
              },
              "areaServed": ["Mumbai", "Alibaug", "Mandwa", "Elephanta Island"],
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "06:00",
                "closes": "20:00"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Speed Boat Mumbai Harbour Cruise",
                  "description": "Scenic harbour cruise with city skyline views",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Speed Boat to Mandwa Alibaug",
                  "description": "Quick 45-minute transfer to Mandwa beach",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Yacht Hire for Mandwa Alibaug",
                  "description": "Luxury yacht transfer with premium amenities",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Yacht Harbour Cruise",
                  "description": "Ultimate luxury harbour experience",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
