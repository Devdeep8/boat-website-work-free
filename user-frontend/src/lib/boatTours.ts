export type BoatTourPlace = {
  name: string;
  image: string;
  imageAlt: string;
  description: string;
};

export type BoatTourFaq = {
  question: string;
  answer: string;
};

export type RideHighlightItem = {
  title: string;
  image: string;
  description: string;
};

export type RideHighlights = {
  title: string;
  items: RideHighlightItem[];
};

export type BoatTour = {
  slug: string;
  /** Exact tour name — used as the H1 and in schema. */
  title: string;
  destination: string;
  /** Human-readable route, e.g. "Gateway of India → Mandwa Jetty". */
  routeLabel: string;
  routeFrom: string;
  routeTo: string;
  heroImage: string;
  heroImageAlt: string;
  /** Second image used beside the description section. */
  storyImage: string;
  storyImageAlt: string;
  description: string[];
  quickFacts: {
    duration: string;
    departure: string;
    timings: string;
    priceFrom?: string;
    capacity?: string;
    baggage?: string;
  };
  whyChoose: { icon: string; title: string; text: string }[];
  placesHeading: string;
  places: BoatTourPlace[];
  rideHighlights?: RideHighlights | null;
  includes?: { title: string; items: string[] } | null;
  faqHeading?: string;
  essentials: { title: string; items: string[] };
  faqs: BoatTourFaq[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

const ALIBAUG_SHARED_DIR = "/Speed Boat Shared Ride to Alibaug (Mandwa)";
const ALIBAUG_DIR = "/Alibaug ( Mandwa)";
const HARBOUR_SHARED_DIR = "/Shared Mumbai Harbour Cruise";
const ELEPHANTA_SHARED_DIR = "/Shared Speed Boat Tour to Elephanta Caves";
const ELEPHANTA_DIR = "/Elephanta Caves";
const MUMBAI_DIR = "/Mumbai Habour"

const SHARED_BOAT_FAQS: BoatTourFaq[] = [
  {
    question: "What is a Shared Speed Boat service from Mumbai to Alibaug?",
    answer:
      "A Shared Speed Boat (also known as a Pool Speed Boat) allows passengers to book individual seats instead of hiring the entire boat. It is one of the fastest and most affordable ways to travel from Gateway of India, Mumbai to Mandwa (Alibaug). Unlike public ferries, our shared speed boats carry only 10–12 passengers, offering a quicker, more comfortable, and less crowded journey. Vishal Boat Service operates scheduled departures throughout the day, making it a convenient option for tourists, business travellers, and daily commuters.",
  },
  {
    question: "How long does the Shared Speed Boat take from Mumbai to Mandwa?",
    answer:
      "The journey from Gateway of India to Mandwa Jetty takes approximately 20 to 23 minutes, depending on sea conditions and wind direction. It is one of the fastest sea routes between Mumbai and Alibaug, allowing you to save valuable travel time compared to conventional ferry services.",
  },
  {
    question: "How much does a Shared Speed Boat from Mumbai to Alibaug cost?",
    answer:
      "Shared Speed Boat tickets start from ₹1,200 per person (one way). Discounted fares are available for same-day return journeys, making it an economical choice for both leisure travellers and professionals commuting to Alibaug. For today's fares and availability, call or WhatsApp +91 87791 63152.",
  },
  {
    question: "Where does the Shared Speed Boat depart from?",
    answer:
      "All Shared Speed Boat services depart from Jetty No. 5, Gateway of India, Mumbai, and arrive at Mandwa Jetty, Alibaug. After confirming your booking, our team shares the exact boarding location, reporting time, and directions via WhatsApp for a smooth travel experience.",
  },
  {
    question: "What are the timings for the Shared Speed Boat service?",
    answer:
      "Vishal Boat Service operates scheduled departures between 9:00 AM and 6:30 PM, subject to weather and sea conditions. One of our most popular schedules is the 10:00 AM departure from Mumbai and the 3:00 PM return from Mandwa, making it ideal for guests visiting Alibaug for meetings, property visits, sightseeing, or lunch. Please contact us for the latest daily schedule.",
  },
  {
    question: "Who should use the Shared Speed Boat service?",
    answer:
      "Our Shared Speed Boat service is perfect for tourists visiting Alibaug, corporate professionals, architects and interior designers, property owners, real estate consultants, villa guests, weekend travellers, families and couples, and friends travelling together. It combines the affordability of a ferry with the speed and comfort of a private boat.",
  },
  {
    question: "Is a Shared Speed Boat faster than the ferry?",
    answer:
      "Yes, a Shared Speed Boat usually reaches Mandwa in just 20–23 minutes, while traditional ferry services generally take significantly longer. If you're looking for the fastest way to travel between Mumbai and Alibaug, a Shared Speed Boat is an excellent choice.",
  },
  {
    question: "Can I book only one seat on the speed boat?",
    answer:
      "Yes, you don't need to hire the entire boat. Simply book the number of seats you require. Whether you're travelling alone, as a couple, or with a small group, our Shared Speed Boat service allows you to enjoy fast sea travel without paying for a private charter.",
  },
  {
    question: "Is advance booking required for Shared Speed Boats?",
    answer:
      "Yes, seats are limited on every departure, and weekends, holidays, and peak travel periods often sell out quickly. We recommend booking in advance to secure your preferred departure time.",
  },
  {
    question: "Can I book a same-day return Shared Speed Boat?",
    answer:
      "Yes, many guests travel to Alibaug in the morning and return to Mumbai the same evening. Our same-day return option is especially popular among business travellers, architects, property buyers, resort guests, day tourists, and people visiting Alibaug for lunch or meetings. Special return fares may be available when both journeys are booked together.",
  },
  {
    question: "Is luggage allowed on Shared Speed Boats?",
    answer:
      "Yes, passengers can carry 1 cabin luggage each on board. If you're travelling with oversized bags, photography equipment, golf clubs, wedding items, or business materials, please let us know while booking so we can advise you accordingly.",
  },
  {
    question: "Are Shared Speed Boats safe?",
    answer:
      "Yes, passenger safety is our highest priority. Our boats are operated by experienced captains, equipped with life jackets for every passenger, and comply with applicable maritime safety requirements. Operations are also subject to weather and sea conditions to ensure safe travel.",
  },
  {
    question: "Can foreign tourists book Shared Speed Boats?",
    answer:
      "Absolutely. International visitors frequently use our Shared Speed Boat service to travel between Mumbai and Alibaug because it is fast, convenient, and offers a more comfortable experience than larger passenger ferries. Our team is experienced to assist foreign tourists with bookings and travel information. We have catered to over 3000+ foreign travellers on this route.",
  },
  {
    question: "Which is better: a Shared Speed Boat or a Private Speed Boat?",
    answer:
      "It depends on your travel requirements. A Shared Speed Boat is ideal if you're travelling alone or in a small group and want a cost-effective way to reach Alibaug. A Private Speed Boat Charter offers complete flexibility, privacy, and departure times of your choice, making it ideal for families, corporate groups, weddings, VIP guests, and special occasions. Our team can help you choose the best option based on your budget and group size.",
  },
  {
    question: "Can I use the Shared Speed Boat service for business travel?",
    answer:
      "Yes, many professionals use our Shared Speed Boat service for regular business travel between Mumbai and Alibaug. Our passengers include architects, interior designers, real estate developers, villa owners, construction consultants, corporate executives, resort managers, and event planners. The quick travel time makes it possible to complete meetings in Alibaug and return to Mumbai on the same day.",
  },
  {
    question: "Does the Shared Speed Boat operate during the monsoon?",
    answer:
      "Operations depend on weather forecasts and sea conditions. Passenger safety always comes first. If weather conditions are not suitable, departures may be delayed, rescheduled, or temporarily suspended. Please contact our team before travelling during the monsoon season to check the latest service status. Speed boat services are usually shut from May to September of every year due to monsoons and rough weather.",
  },
  {
    question: "Why choose Vishal Boat Service for a Shared Speed Boat to Alibaug?",
    answer:
      "Vishal Boat Service is a trusted provider of Shared Speed Boat services between Mumbai and Mandwa, offering fast travel, transparent pricing, and professional customer support. When you book with us, you enjoy daily scheduled departures, travel time of approximately 20–23 minutes, comfortable boats with limited passengers, easy WhatsApp booking, assistance at Jetty No. 5, Gateway of India, friendly and experienced crew, and reliable service for tourists and business travellers. Whether you're planning a weekend escape, a property visit, a corporate meeting, or a family outing, our Shared Speed Boat service is one of the quickest and most convenient ways to travel between Mumbai and Alibaug. Call or WhatsApp +91 87791 63152 to book your seats today.",
  },
  {
    question: "What is the Mumbai Harbour Shared Speed Boat Ride?",
    answer:
      "Vishal Boat Service offers an affordable Shared Speed Boat Mumbai Harbour Cruise every evening from Gateway of India. Instead of hiring an entire boat, you can book individual seats and enjoy a thrilling 30-minute speed boat ride across Mumbai Harbour. This experience is perfect for tourists, couples, families, photographers, and anyone looking to enjoy the Mumbai skyline from the sea. The ride operates every day from 4:00 PM to 7:00 PM, with departures every 30 minutes. Tickets start from ₹500 per person.",
  },
  {
    question: "How much does the Mumbai Harbour Speed Boat Ride cost?",
    answer:
      "Our Mumbai Harbour Shared Speed Boat Ride starts from just ₹500 per person. This is one of the most affordable ways to experience Mumbai Harbour by speed boat without booking an entire private boat. Advance booking is recommended, especially on weekends and holidays.",
  },
  {
    question: "Where does the Mumbai Harbour Speed Boat depart from?",
    answer:
      "All harbour cruises depart from Jetty No. 5, Gateway of India, Mumbai. After booking, you'll receive the exact boarding location and reporting time on WhatsApp.",
  },
  {
    question: "What can I see during the Mumbai Harbour Cruise?",
    answer:
      "During your cruise, you'll enjoy spectacular views of the Gateway of India, Taj Mahal Palace Hotel, Mumbai Harbour, Arabian Sea, luxury yachts, naval vessels (viewed from permitted areas), Mumbai skyline, and beautiful sunset views during evening departures.",
  },
  {
    question: "Is the Mumbai Harbour Cruise suitable for children?",
    answer:
      "Yes, our shared harbour cruise is popular with families, children, senior citizens, tourists, and couples. Life jackets are provided for all passengers.",
  },
  {
    question: "Why book the Shared Harbour Cruise with Vishal Boat Service?",
    answer:
      "₹500 per person, departures every 30 minutes, daily service, Gateway of India boarding, comfortable speed boats, easy WhatsApp booking, great sunset views, and a perfect experience for tourists and families.",
  },
  {
    question: "What is included in the Shared Speed Boat Elephanta Tour?",
    answer:
      "The package includes a Shared Speed Boat, return transfer, professional English-speaking guide, Elephanta sightseeing, small group experience, assistance at Gateway of India, and a comfortable shared journey. It is one of the quickest and most comfortable ways to visit Elephanta Caves.",
  },
  {
    question: "How long does the Shared Elephanta Tour take?",
    answer:
      "The complete experience takes approximately 4 hours, including travel time and sightseeing. The speed boat journey itself takes around 20–30 minutes each way, allowing you to spend more time exploring the caves.",
  },
  {
    question: "Is this tour suitable for foreign tourists?",
    answer:
      "Absolutely. Our Shared Speed Boat Elephanta Tour is designed with international travellers in mind. It is ideal for cruise ship passengers, luxury travellers, solo travellers, couples, families, overseas visitors, and business travellers with limited time. The guided experience helps visitors understand the fascinating history and architecture of the UNESCO-listed Elephanta Caves.",
  },
  {
    question: "Why choose a speed boat instead of the ferry?",
    answer:
      "Compared to the public ferry, a speed boat offers much faster travel, smaller groups, flexible departures, more comfortable seating, less waiting time, and a better overall experience. This makes it an excellent choice for visitors who want to maximize their sightseeing time.",
  },
  {
    question: "Why choose Vishal Boat Service?",
    answer:
      "Vishal Boat Service is trusted by tourists, travel agencies, luxury hotels, corporate travellers, and international visitors for premium boating experiences in Mumbai. Whether you're booking a Shared Speed Boat to Alibaug, a Mumbai Harbour Cruise, or a Guided Elephanta Caves Tour, you'll benefit from experienced captains and crew, well-maintained speed boats, transparent pricing, professional guides, easy WhatsApp booking, and convenient departures from Jetty No. 5, Gateway of India.",
  },
];

export const BOAT_TOURS: BoatTour[] = [
  {
    slug: "speed-boat-shared-ride-alibaug-mandwa",
    title: "Speed Boat Shared Ride to Alibaug (Mandwa)",
    destination: "Alibaug (Mandwa)",
    routeLabel: "Gateway of India → Mandwa Jetty",
    routeFrom: "Gateway of India, Jetty No. 5",
    routeTo: "Mandwa Jetty, Alibaug",
    heroImage: `${ALIBAUG_SHARED_DIR}/Speed boat shared ride to Alibaug from gateway of India in vishal boat service.png`,
    heroImageAlt:
      "Speed boat ride from Mumbai to Mandwa Alibaug departing Gateway of India",
    storyImage: `${ALIBAUG_SHARED_DIR}/mandwa-port-speed-boat-pool-shared-ride.jpg`,
    storyImageAlt: "Mandwa port arrival point for shared speed boat rides from Mumbai",
    description: [
      "Mumbai to Mandwa Shared Speed Boat Service Looking for the fastest and most affordable way to travel from Mumbai to Alibaug? Vishal Boat Service offers a Shared Speed Boat (Pool Ride) between Gateway of India and Mandwa Jetty, allowing you to book individual seats instead of hiring an entire boat.",
      "Our shared speed boats are perfect for professionals, tourists, families, and weekend travellers who want the speed and comfort of a private boat without paying for a full charter. Each boat accommodates a small group of 10–12 passengers, ensuring a comfortable and hassle-free journey.",
      "The journey takes just 20–23 minutes, making it one of the quickest ways to reach Alibaug from Mumbai. With fixed departures from 9:00 AM to 6:30 PM, including a popular 10:00 AM departure and 3:00 PM return, this service is ideal for architects, property consultants, villa owners, corporate executives, contractors, and anyone travelling to Alibaug for meetings, site visits, or even a leisurely lunch or dinner. Starting from ₹1,200 per person (one way), our same-day return fares offer even greater value.",
    ],
    quickFacts: {
      duration: "20–23 minutes",
      departure: "Gateway of India, Jetty No. 5",
      timings: "9:00 AM – 6:30 PM",
      priceFrom: "₹1,200 per person",
      capacity: "10–12 passengers",
      baggage: "One cabin bag per person",
    },
    whyChoose: [
      {
        icon: "shield",
        title: "Highest Safety Standards",
        text: "9+ years of experience with 20,000+ happy clients and every journey handled with care.",
      },
      {
        icon: "DAta",
        title: "9yr + experience with 20000+ happy clients.",
        text: "9+ years of experience with 20,000+ happy clients and every journey handled with care.",
      },
      {
        icon: "zap",
        title: "Fastest Mumbai↔Mandwa transfer",
        text: "Reach Mandwa in just 20–23 minutes for a quick, reliable sea commute from Mumbai to Alibaug.",
      },
      {
        icon: "users",
        title: "Caters to Small & Large groups with added comfort",
        text: "Comfortable shared rides are tailored for families, professionals and corporate groups alike.",
      },
      {
        icon: "clock",
        title: "Fixed daily departures",
        text: "Multiple daily departures make it easy to plan a same-day journey without waiting for long ferry slots.",
      },
      {
        icon: "whatsapp",
        title: "Easy WhatsApp booking",
        text: "Book your seat quickly and receive itinerary support directly on WhatsApp.",
      },
      {
        icon: "mapPin",
        title: "Trusted operators at Gateway of India",
        text: "Professional teams and helpful jetty support make boarding easy from the moment you arrive.",
      },
      {
        icon: "anchor",
        title: "Helper at jetty to guide the guest with boarding",
        text: "Our team assists with boarding and directions so your travel feels smooth and stress-free.",
      },
    ],
    placesHeading: "Places You Can Explore in Alibaug",
    rideHighlights: null,
    faqHeading: "FAQs about Alibaug (Mandwa)",
    places: [
      {
        name: "Alibaug (Mandwa)",
        image: `${ALIBAUG_SHARED_DIR}/mandwa-port-speed-boat-pool-shared-ride.jpg`,
        imageAlt: "Mandwa port where shared speed boat rides from Mumbai arrive",
        description:
          "Escape from mumbai into the nature of Alibaug, just 25 mins ride from Gateway of India.",
      },
      {
        name: "Elephanta Caves",
        image: `${ELEPHANTA_DIR}/mumbai-elephanta-caves-vishal-boat-service.jpg`,
        imageAlt: "Elephanta Caves near Alibaug reached by speed boat from Mumbai",
        description:
          "Explore the history of India with ancient rock carvings of monument of Elephanta Caves.",
      },
      {
        name: "Mumbai Harbour",
        image: `${MUMBAI_DIR}/Mumbai Harbour speed boat tour by vishal boat service.jpg`,
        imageAlt: "Alibaug fort sea tours near Mandwa jetty",
        description:
          "A historic sea fort a short ride from the jetty, best visited around low tide.",
      },
      {
        name: "Bird Feeding En Route",
        image: `${ALIBAUG_DIR}/FEED THE birds on the way to ALIBAUG MANDWA that fly around your boat. book from vishal boat service_.jpg`,
        imageAlt: "Seabirds flying around a speed boat on the Mumbai to Mandwa route",
        description:
          "Seabirds circle the boat mid-route — a favourite moment on the Mumbai to Mandwa crossing.",
      },
      {
        name: "Beachside Restaurants",
        image: `${ALIBAUG_DIR}/by the beach Restauants at alibaug for tourist-use speed boats to visit-book vishal boat service_.jpg`,
        imageAlt: "Beachside restaurants in Alibaug visited by speed boat travellers",
        description:
          "Alibaug's well-known coastal kitchens, an easy stop after arriving at Mandwa.",
      },
      {
        name: "Villas & Stays",
        image: `${ALIBAUG_DIR}/aura Alibaug villa saffron stays-book tourist alibaug- vishal boat service_.jpg`,
        imageAlt: "Villa stays in Alibaug reached by speed boat from Mumbai",
        description:
          "Weekend villas and resorts across Alibaug, a short drive from Mandwa Jetty.",
      },
    ],
    essentials: {
      title: "Shared Speed Boat Ride is Ideal for:",
      items: [
        "Business travellers",
        "Corporate employees",
        "Architects & interior designers",
        "Property buyers & developers",
        "Tourists visiting Alibaug",
        "Families & couples",
        "Weekend getaways",
        "Wedding groups",
        "VVIP clients looking for no-mistake luxury",
      ],
    },
    faqs: SHARED_BOAT_FAQS,
    seo: {
      title: "Speed Boat Ride from Mumbai to Alibaug (Mandwa) | Shared Boat",
      description:
        "Book a shared speed boat ride from Mumbai to Alibaug via Mandwa. 20–23 minutes from Gateway of India, Jetty 5, at ₹1,200 per person. Timings, route and FAQs inside.",
      keywords: [
        "Mumbai to Alibaug boat",
        "Mumbai to Mandwa speed boat",
        "Alibaug speed boat",
        "Mandwa boat ride",
        "Mumbai Alibaug ferry",
        "shared boat to Alibaug",
      ],
    },
  },
  {
    slug: "shared-mumbai-harbour-cruise",
    title: "Shared Mumbai Harbour Cruise",
    destination: "Mumbai Harbour",
    routeLabel: "Gateway of India → Mumbai Harbour (round trip)",
    routeFrom: "Gateway of India, Jetty No. 5",
    routeTo: "Mumbai Harbour (round trip)",
    heroImage: `${HARBOUR_SHARED_DIR}/Speed-boat-shared-ride-harbour-cruise-rs500.jpg`,
    heroImageAlt:
      "Gateway of India Mumbai harbour view from a shared speed boat cruise",
    storyImage: `${HARBOUR_SHARED_DIR}/sunset-view-harbour-cruise-mumbai-vishal-speed-boat-service.jpg`,
    storyImageAlt: "Sunset view on a shared Mumbai Harbour cruise speed boat ride",
    description: [
      "Experience Mumbai like never before with a Shared Speed Boat Harbour Cruise from the iconic Gateway of India. Instead of hiring an entire speed boat, you can simply book individual seats and enjoy one of Mumbai's most exciting boat rides at an affordable price.",
      "Whether you're a tourist visiting Mumbai, a couple looking for a romantic sunset ride, a family searching for a memorable evening activity, or a local wanting to experience Mumbai from the sea, our Mumbai Harbour Cruise offers breathtaking views of the city's famous waterfront.",
      "The cruise departs from Jetty No. 5, Gateway of India, every 30 minutes between 4:00 PM and 7:00 PM, making it one of the easiest and most affordable sightseeing experiences in Mumbai.",
      "For just ₹500 per person, enjoy a thrilling 30-minute speed boat ride across Mumbai Harbour while taking in spectacular views of the Arabian Sea.",
    ],
    quickFacts: {
      duration: "Approx. 30 minutes",
      departure: "Gateway of India, Jetty No. 5",
      timings: "4:00 PM – 8:00 PM, daily",
      priceFrom: "₹500 per person",
      capacity: "10 & 12 seats",
    },
    whyChoose: [
      {
        icon: "shield",
        title: "Highest Safety Standards",
        text: "9yr + experience with 20000+ happy clients.",
      },
      {
        icon: "zap",
        title: "Fastest Mumbai<->Mandwa transfer",
        text: "Quick, efficient and comfortable rides across the harbour.",
      },
      {
        icon: "users",
        title: "Caters to Small & Large groups with added comfort",
        text: "Suitable for compact groups and larger parties with a comfortable ride experience.",
      },
      {
        icon: "clock",
        title: "Fixed daily departures",
        text: "Regular departures make it easy to plan your trip without a long wait.",
      },
      {
        icon: "whatsapp",
        title: "Easy WhatsApp booking",
        text: "Quick and simple booking support through WhatsApp.",
      },
      {
        icon: "mapPin",
        title: "Trusted operators at Gateway of India",
        text: "Reliable service and experienced support at the departure point.",
      },
      {
        icon: "anchor",
        title: "Helper at jetty to guide the guest with boarding",
        text: "Helpful staff assist guests with boarding and a smooth start to the ride.",
      },
    ],
    placesHeading: "What all you see during the ride?",
    rideHighlights: {
      title: "What all you see during the ride?",
      items: [
        {
          title: "Gateway of India",
          image: `${HARBOUR_SHARED_DIR}/speed boat shared ride available from gateway of india for harbour cruise, alibaug , elephanta caves _.jpg`,
          description:
            "Enjoy iconic views of the Gateway of India from the sea during your harbour cruise.",
        },
        {
          title: "Iconic Taj hotel",
          image: `${HARBOUR_SHARED_DIR}/hotel-taj-view-mumbai-harbour-speed-boat-shared.avif`,
          description:
            "See the iconic Taj Mahal Palace from the waterfront as the city skyline opens up.",
        },
        {
          title: "Mumbai Harbour",
          image: `${HARBOUR_SHARED_DIR}/gateway-of-india-mumbai-harbour-view-speed-boat-service.jpg`,
          description:
            "Take in wide views of Mumbai Harbour and the working waterfront from the boat.",
        },
        {
          title: "Speed Thrill on Speed Boat",
          image: `${HARBOUR_SHARED_DIR}/speed-boat-thrill-ride-mumbai-harbour-ride-shared.jpg`,
          description:
            "Experience the excitement of a fast speed boat ride across the harbour.",
        },
        {
          title: "Naval Dock (permitted from a distance)",
          image: `${HARBOUR_SHARED_DIR}/Naval-dock-mumbai-view-harbour-cruise-speed-boat.jpg`,
          description:
            "Catch a distant view of the naval dock while cruising along the permitted harbour route.",
        },
        {
          title: "Sunset by the Harbour",
          image: `${HARBOUR_SHARED_DIR}/sunset-view-harbour-cruise-mumbai-vishal-speed-boat-service.jpg`,
          description:
            "Enjoy golden-hour sunset views over the harbour and the Mumbai skyline.",
        },
      ],
    },
    faqHeading: "FAQs about Speed Boat Shared Rides",
    places: [
      {
        name: "Alibaug (Mandwa)",
        image: `${ALIBAUG_SHARED_DIR}/mandwa-port-speed-boat-pool-shared-ride.jpg`,
        imageAlt: "Mandwa port where shared speed boat rides from Mumbai arrive",
        description:
          "Escape from mumbai into the nature of Alibaug, just 25 mins ride from Gateway of India.",
      },
      {
        name: "Elephanta Caves",
        image: `${ELEPHANTA_DIR}/mumbai-elephanta-caves-vishal-boat-service.jpg`,
        imageAlt: "Elephanta Caves near Alibaug reached by speed boat from Mumbai",
        description:
          "Explore the history of India with ancient rock carvings of monument of Elephanta Caves.",
      },
      {
        name: "Mumbai Harbour",
        image: `${MUMBAI_DIR}/Mumbai Harbour speed boat tour by vishal boat service.jpg`,
        imageAlt: "Alibaug fort sea tours near Mandwa jetty",
        description:
          "A historic sea fort a short ride from the jetty, best visited around low tide.",
      },
      {
        name: "Bird Feeding En Route",
        image: `${ALIBAUG_DIR}/FEED THE birds on the way to ALIBAUG MANDWA that fly around your boat. book from vishal boat service_.jpg`,
        imageAlt: "Seabirds flying around a speed boat on the Mumbai to Mandwa route",
        description:
          "Seabirds circle the boat mid-route — a favourite moment on the Mumbai to Mandwa crossing.",
      },
      {
        name: "Beachside Restaurants",
        image: `${ALIBAUG_DIR}/by the beach Restauants at alibaug for tourist-use speed boats to visit-book vishal boat service_.jpg`,
        imageAlt: "Beachside restaurants in Alibaug visited by speed boat travellers",
        description:
          "Alibaug's well-known coastal kitchens, an easy stop after arriving at Mandwa.",
      },
      {
        name: "Villas & Stays",
        image: `${ALIBAUG_DIR}/aura Alibaug villa saffron stays-book tourist alibaug- vishal boat service_.jpg`,
        imageAlt: "Villa stays in Alibaug reached by speed boat from Mumbai",
        description:
          "Weekend villas and resorts across Alibaug, a short drive from Mandwa Jetty.",
      },
    ],
    essentials: {
      title: "Our Shared Harbour Cruise is ideal for:",
      items: [
        "Domestic Tourists",
        "International Tourists",
        "Couples",
        "Families",
        "Solo Travellers",
        "Friends",
        "Students",
        "Senior Citizens",
        "Corporate Visitors",
        "Weekend Visitors",
        "Travel Bloggers",
        "Influencers",
        "Photographers",
        "Whether you're visiting Mumbai for the first time or rediscovering your own city, this cruise offers one of the best experiences on the waterfront.",
      ],
    },
    faqs: SHARED_BOAT_FAQS,
    seo: {
      title: "Shared Mumbai Harbour Cruise | ₹500 Speed Boat Ride, Gateway of India",
      description:
        "Book a shared Mumbai Harbour cruise speed boat ride from Gateway of India, Jetty 5. Approx. 30 minutes at ₹500 per person, daily 4–8 PM. Route, sights and FAQs inside.",
      keywords: [
        "Mumbai Harbour cruise",
        "Mumbai boat cruise",
        "Mumbai harbour boat ride",
        "Mumbai sightseeing cruise",
        "shared Mumbai harbour cruise",
      ],
    },
  },
  {
    slug: "shared-speed-boat-tour-elephanta-caves",
    title: "Shared Speed Boat Tour to Elephanta Caves",
    destination: "Elephanta Caves",
    routeLabel: "Gateway of India → Elephanta Island",
    routeFrom: "Gateway of India, Jetty No. 5",
    routeTo: "Elephanta Island, Mumbai Harbour",
    heroImage: `${ELEPHANTA_SHARED_DIR}/Speed boat shared ride to Alibaug from gateway of India in vishal boat service.png`,
    heroImageAlt: "Speed boat ride from Mumbai to Elephanta Caves",
    storyImage: `${ELEPHANTA_SHARED_DIR}/elephanta-caves-hindu-temple-hill-carved-india-vishal-boat-service.jpg.webp`,
    storyImageAlt:
      "Elephanta Caves rock-cut Hindu temple hill on Elephanta Island",
    description: [
      "Visit one of India's most famous UNESCO World Heritage Sites with our Shared Speed Boat Tour to Elephanta Caves.",
      "Designed especially for foreign tourists, cruise passengers, business travellers, solo travellers, couples, families, and cultural explorers, this premium experience combines fast sea travel with a professionally guided sightseeing tour.",
      "Unlike crowded public ferries, our Shared Speed Boat reaches Elephanta Island in approximately 20–30 minutes, allowing you to spend more time exploring the magnificent cave temples and less time travelling.",
      "The complete experience lasts approximately 4 hours, making it the perfect half-day tour while visiting Mumbai.",
      "Packages start from ₹8,000 per person excluding taxes.",
    ],
    quickFacts: {
      duration: "20–30 minutes each way",
      departure: "Gateway of India, Jetty No. 5",
      timings: "Daylight departures; caves 9:00 AM – 5:00 PM, closed Mondays",
      capacity: "6, 10 & 12 seats",
    },
    whyChoose: [
      {
        icon: "zap",
        title: "Much faster than the ferry",
        text: "Cross to Elephanta Island in 20–30 minutes instead of the one-hour public ferry each way.",
      },
      {
        icon: "landmark",
        title: "UNESCO World Heritage site",
        text: "Rock-cut Shiva temple caves from the 5th–8th centuries — one of Maharashtra's great monuments.",
      },
      {
        icon: "users",
        title: "Family-friendly tour",
        text: "Shared 6, 10 and 12-seater boats with life jackets for every passenger.",
      },
      {
        icon: "camera",
        title: "Harbour and Gateway views",
        text: "Mumbai Harbour on the crossing, and the Gateway of India skyline on your way back.",
      },
      {
        icon: "train",
        title: "Toy train on the island",
        text: "A short toy train ride connects Elephanta jetty to the steps below the caves.",
      },
      {
        icon: "shoppingBag",
        title: "Island market stop",
        text: "A small flee market lines the walk uphill — handy for snacks, water and souvenirs.",
      },
    ],
    placesHeading: "Places You Can Explore at Elephanta",
    rideHighlights: {
      title: "What all you see during the ride?",
      items: [
        {
          title: "Gateway of India",
          image: `${ELEPHANTA_SHARED_DIR}/speed boat shared ride available from gateway of india for harbour cruise, alibaug , elephanta caves _.jpg`,
          description:
            "Enjoy views of the iconic Gateway of India from the sea as you begin your journey.",
        },
        {
          title: "Iconic Taj Hotel",
          image: `${ELEPHANTA_SHARED_DIR}/iconic taj mahal hotel-view from boat ride to Elephanta Caves`,
          description:
            "See the iconic Taj Mahal Palace from the waterfront as the Mumbai skyline comes into view.",
        },
        {
          title: "Mumbai Harbour",
          image: `${HARBOUR_SHARED_DIR}/gateway-of-india-mumbai-harbour-view-speed-boat-service.jpg`,
          description:
            "Take in broad views of Mumbai Harbour and the coastline during the ride across the water.",
        },
        {
          title: "Speed Thrill on Speed Boat",
          image: `${ELEPHANTA_SHARED_DIR}/speed-boat-shared-ride-to-elephanta-caves.jpg`,
          description:
            "Experience the excitement of a fast crossing over Mumbai Harbour on a shared speed boat.",
        },
        {
          title: "Naval Dock",
          image: `${ELEPHANTA_SHARED_DIR}/naval base view from shared speed boat boat ride in mumbai_.jpg`,
          description:
            "Catch a glimpse of the harbour and naval dock area while travelling along the Mumbai coastline.",
        },
        {
          title: "Sunset by the Harbour",
          image: `${ELEPHANTA_SHARED_DIR}/beautiful-sunset-mumbai-speed-boat-ride-elephanta.jpg`,
          description:
            "Enjoy beautiful sunset scenes over Mumbai Harbour when the light turns golden on the water.",
        },
        {
          title: "Caves Tour",
          image: `${ELEPHANTA_SHARED_DIR}/elephanta-caves-hindu-temple-hill-carved-india-vishal-boat-service.jpg.webp`,
          description:
            "Explore the historic cave temples on Elephanta Island, a highlight of the trip.",
        },
        {
          title: "Elephanta Caves Market Shopping",
          image: `${ELEPHANTA_SHARED_DIR}/Elephanta-shopping-tour-vishal-boat-service.jpg.webp`,
          description:
            "Browse the market area near the caves and enjoy the island's local stops.",
        },
        {
          title: "Toy Train Ride",
          image: `${ELEPHANTA_SHARED_DIR}/Toy-train-vishal-boat-service-elephanta-speed-boat.jpg`,
          description:
            "Enjoy the toy train ride available on Elephanta Island during your visit.",
        },
      ],
    },
    includes: {
      title: "Your Shared Speed Boat Elephanta Tour includes:",
      items: [
        "Shared Speed Boat Transfer",
        "Return Journey",
        "Professional English-speaking Guide",
        "Guided Tour of Elephanta Caves",
        "Assistance at Gateway of India",
        "Small Group Experience",
        "Comfortable Seating",
        "Departure Timings (subject to schedule)",
      ],
    },
    faqHeading: "FAQs about Speed Boat Shared Rides",
    places: [
      {
        name: "Alibaug (Mandwa)",
        image: `${ALIBAUG_SHARED_DIR}/mandwa-port-speed-boat-pool-shared-ride.jpg`,
        imageAlt: "Mandwa port where shared speed boat rides from Mumbai arrive",
        description:
          "Escape from mumbai into the nature of Alibaug, just 25 mins ride from Gateway of India.",
      },
      {
        name: "Elephanta Caves",
        image: `${ELEPHANTA_DIR}/mumbai-elephanta-caves-vishal-boat-service.jpg`,
        imageAlt: "Elephanta Caves near Alibaug reached by speed boat from Mumbai",
        description:
          "Explore the history of India with ancient rock carvings of monument of Elephanta Caves.",
      },
      {
        name: "Mumbai Harbour",
        image: `${MUMBAI_DIR}/Mumbai Harbour speed boat tour by vishal boat service.jpg`,
        imageAlt: "Alibaug fort sea tours near Mandwa jetty",
        description:
          "A historic sea fort a short ride from the jetty, best visited around low tide.",
      },
      {
        name: "Bird Feeding En Route",
        image: `${ALIBAUG_DIR}/FEED THE birds on the way to ALIBAUG MANDWA that fly around your boat. book from vishal boat service_.jpg`,
        imageAlt: "Seabirds flying around a speed boat on the Mumbai to Mandwa route",
        description:
          "Seabirds circle the boat mid-route — a favourite moment on the Mumbai to Mandwa crossing.",
      },
      {
        name: "Beachside Restaurants",
        image: `${ALIBAUG_DIR}/by the beach Restauants at alibaug for tourist-use speed boats to visit-book vishal boat service_.jpg`,
        imageAlt: "Beachside restaurants in Alibaug visited by speed boat travellers",
        description:
          "Alibaug's well-known coastal kitchens, an easy stop after arriving at Mandwa.",
      },
      {
        name: "Villas & Stays",
        image: `${ALIBAUG_DIR}/aura Alibaug villa saffron stays-book tourist alibaug- vishal boat service_.jpg`,
        imageAlt: "Villa stays in Alibaug reached by speed boat from Mumbai",
        description:
          "Weekend villas and resorts across Alibaug, a short drive from Mandwa Jetty.",
      },
    ],
    essentials: {
      title: "This tour is highly recommended for:",
      items: [
        "International Tourists",
        "Cruise Ship Passengers",
        "Luxury Travellers",
        "Couples",
        "Families",
        "Solo Travellers",
        "Senior Citizens",
        "Travel Agencies",
        "Luxury Hotels & Concierge Services",
        "Corporate Guests",
        "Photography Enthusiasts",
        "History & Culture Lovers",
        "If you're staying in South Mumbai or arriving by cruise ship, this tour is an ideal way to experience one of Maharashtra's most iconic attractions.",
      ],
    },
    faqs: SHARED_BOAT_FAQS,
    seo: {
      title: "Speed Boat from Mumbai to Elephanta Caves | Shared Tour",
      description:
        "Take a shared speed boat tour from Gateway of India to Elephanta Caves. 20–30 minutes each way to the UNESCO island caves. Route, timings, what to carry and FAQs inside.",
      keywords: [
        "Elephanta Caves boat",
        "Mumbai to Elephanta Caves boat",
        "Elephanta Caves speed boat",
        "Elephanta Island boat ride",
        "Mumbai Elephanta boat tour",
      ],
    },
  },
];

export function getBoatTour(slug: string) {
  return BOAT_TOURS.find((tour) => tour.slug === slug);
}
