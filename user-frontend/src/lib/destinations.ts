export type Destination = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  image: string;
  imageAlt: string;
  duration: string;
  bestFor: string;
  startingPoint: string;
  highlights: string[];
  experiences: string[];
  faqs?: { question: string; answer: string }[];
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "mumbai",
    name: "Mumbai",
    eyebrow: "City harbour cruises",
    headline: "See Mumbai from its most cinematic side",
    summary:
      "Mumbai Harbour is one of India's most iconic waterfront destinations, offering panoramic views of the city's skyline, the Gateway of India, the Taj Mahal Palace Hotel, naval docks and historic coastal landmarks. A private speed boat or yacht cruise across the harbour provides a unique way to experience Mumbai away from the city's busy streets. Whether you are planning a romantic sunset cruise, family outing, corporate event or photography session, Mumbai Harbour offers a memorable experience on the Arabian Sea.",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1400&h=1100&fit=crop",
    imageAlt: "Mumbai skyline and waterfront",
    duration: "1-3 hours",
    bestFor: "Harbour rides, photoshoots, celebrations",
    startingPoint: "Gateway of India",
    highlights: ["Gateway views", "Sunset slots", "Private charters", "Flexible route"],
    experiences: ["Speed Boat", "Yachts", "Sail boat"],
    faqs: [
      {
        question: "How much time does it take to go around Mumbai Harbour?",
        answer:
          "Typical harbour rides range from 30 minutes to 1 hour for short sightseeing trips. Private charters such as yachts or extended harbour tours can take 1–3 hours depending on the route.",
      },
      {
        question: "What all boat options do I have for Mumbai Harbour?",
        answer:
          "We offer wooden ferries, AC ferries, speed boats (shared and private charters), yachts and sail boats — suitable for sightseeing, transfers, parties and photoshoots.",
      },
      {
        question: "I am a corporate, can we do any outing for staff in Mumbai Harbour?",
        answer:
          "Yes — Vishal Boat Service provides a wide range of corporate outing options. A yacht experience or a one-hour speed boat ride are common time-bound activities for corporate groups.",
      },
    ],
  },
  {
    slug: "alibaug",
    name: "Alibaug (Mandwa)",
    eyebrow: "Fast coastal transfers",
    headline: "Skip the road and arrive at Mandwa by sea",
    summary:
      "Mandwa is the gateway to Alibaug and one of Maharashtra's most popular coastal destinations. Known for its beaches, luxury villas, resorts and scenic landscapes, Mandwa attracts weekend travellers, wedding guests and corporate groups from Mumbai. A private speed boat transfer from Gateway of India offers the fastest and most comfortable way to reach Mandwa while avoiding road traffic. Luxury yacht transfers are also available for guests looking for a premium travel experience. Takes about 20-23 mins in a speed boat and about 1 hour in a ferry to reach from Gateway of India.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1400&h=1100&fit=crop",
    imageAlt: "Coastal beach waves near Alibaug",
    duration: "20-23 minutes by speed boat",
    bestFor: "Mandwa transfers, weekend trips, private groups",
    startingPoint: "Gateway of India",
    highlights: ["Direct Mandwa route", "Luggage support", "Family friendly", "Private pickup"],
    experiences: ["Speed Boat", "Yachts", "AC Ferry", "Ro-Ro Ship"],
    faqs: [
      {
        question: "How long does it take to reach Mandwa (Alibaug) from Gateway of India?",
        answer: "A speed boat takes about 20–23 minutes. Ferries and other transfers can take up to an hour depending on the service.",
      },
      {
        question: "What boat options are available for Alibaug transfers?",
        answer: "You can choose speed boat transfers, yachts for private groups, AC ferries and Ro-Ro services for vehicles where available.",
      },
      {
        question: "Can I bring luggage or equipment?",
        answer: "Yes — most transfer services allow luggage; please mention large items during booking so we can arrange appropriate handling.",
      },
    ],
  },
  {
    slug: "elephanta-caves",
    name: "Elephanta Caves",
    eyebrow: "Heritage island tours",
    headline: "Make the journey to Elephanta feel special",
    summary:
      "The Elephanta Caves are a UNESCO World Heritage Site famous for their magnificent rock-cut cave temples dedicated to Lord Shiva. Located on Elephanta Island in Mumbai Harbour, the caves showcase intricate sculptures dating back to the 5th–8th centuries and are among Maharashtra's most celebrated historical attractions. A private guided speed boat tour allows visitors to enjoy a flexible schedule, avoid crowded ferries and experience the island with personalized service, making it ideal for families, international tourists and premium travellers. Multiple options are available depending on budget and experience required.",
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=1400&h=1100&fit=crop",
    imageAlt: "Historic stone architecture in India",
    duration: "3-4 hours",
    bestFor: "Sightseeing, heritage tours, family day trips",
    startingPoint: "Gateway of India",
    highlights: ["Island transfer", "Guide options", "Cave visit", "Harbour views"],
    experiences: ["Wooden Ferry", "AC Ferry", "Speed Boat"],
    faqs: [
      {
        question: "How long should I plan for a visit to Elephanta Caves?",
        answer: "Plan for a 3–4 hour trip including transfer time, cave visit and a short walk to/from the site; guided tours often take longer.",
      },
      {
        question: "What boat options are available to reach Elephanta?",
        answer: "You can take public ferries, wooden ferries, AC ferries or private speed boat charters depending on your preference and budget.",
      },
      {
        question: "Are guided visits available on Elephanta Island?",
        answer: "Yes — guided tours can be arranged and are recommended if you want expert historical context for the caves.",
      },
    ],
  },
  {
    slug: "goa",
    name: "Goa",
    eyebrow: "Coastal celebrations",
    headline: "Take your Goa plans onto the water",
    summary:
      "Arrange relaxed yacht moments, sunset cruises, and group-friendly water experiences along Goa's coast for parties and private outings.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1400&h=1100&fit=crop",
    imageAlt: "Goa coastline with palms and sea",
    duration: "2-4 hours",
    bestFor: "Sunset cruises, birthdays, private parties",
    startingPoint: "Goa marina or local jetty",
    highlights: ["Sunset routes", "Music friendly", "Group plans", "Custom timing"],
    experiences: ["Yachts", "Sail boat", "Speed Boat"],
    faqs: [
      { question: "Can I book private sunset cruises?", answer: "Yes — private sunset cruises and yacht charters are available and popular in Goa." },
      { question: "Is food allowed on board?", answer: "Yes — catering can be arranged on most private charters; check our booking options." },
      { question: "Are safety briefings provided?", answer: "Yes — all charters include a safety briefing and lifejackets for all guests." },
    ],
  },
  {
    slug: "kerala",
    name: "Kerala",
    eyebrow: "Backwater escapes",
    headline: "Slow down on Kerala's peaceful waters",
    summary:
      "Create calm backwater journeys with boat options for families, small groups, and relaxed celebrations across Kerala's scenic waterways.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1400&h=1100&fit=crop",
    imageAlt: "Kerala backwaters and palm trees",
    duration: "2-6 hours",
    bestFor: "Backwater rides, family outings, scenic cruising",
    startingPoint: "Local jetty by route",
    highlights: ["Backwater routes", "Calm cruising", "Family plans", "Scenic stops"],
    experiences: ["Wooden Ferry", "AC Ferry", "Yachts"],
    faqs: [
      { question: "Are the backwater routes family-friendly?", answer: "Yes — backwater cruises are calm and well-suited to families and small groups." },
      { question: "Can we book overnight backwater stays?", answer: "Some providers offer overnight houseboat stays; please contact us for details and availability." },
      { question: "Is transport included to the jetty?", answer: "We can arrange local transfers on request; include transfer requirements when booking." },
    ],
  },
];

export function getDestination(slug: string) {
  return DESTINATIONS.find((destination) => destination.slug === slug);
}
