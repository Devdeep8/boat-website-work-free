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
    faqs: [
      {
        question: "What is the speed boat route from Mumbai to Mandwa?",
        answer:
          "The shared speed boat runs from Jetty No. 5 at the Gateway of India, Mumbai, directly across Mumbai Harbour to Mandwa Jetty — the main sea gateway to Alibaug. It is the shortest Mumbai–Alibaug sea route.",
      },
      {
        question: "How long does the shared speed boat ride take?",
        answer:
          "The crossing takes roughly 20–23 minutes, depending on sea conditions. A regular ferry covers the same Mumbai to Mandwa route in about an hour, so the shared speed boat saves significant travel time.",
      },
      {
        question: "Where does the boat depart from in Mumbai?",
        answer:
          "All shared speed boats to Mandwa depart from Jetty No. 5 at the Gateway of India, located opposite the Taj Mahal Palace Hotel. We recommend arriving at least 20 minutes before departure. After booking, we share the exact location and a Google Maps link on WhatsApp.",
      },
      {
        question: "How much does a shared speed boat seat to Mandwa cost?",
        answer:
          "A shared seat on the Mumbai to Mandwa speed boat costs ₹1,200 per person. If you prefer a private boat for your own group, exclusive speed boat charters are also available.",
      },
      {
        question: "How can I reach Alibaug from Mandwa Jetty?",
        answer:
          "Mandwa Jetty is approximately 20 km from Alibaug town, and taxis, shuttle buses and private vehicles complete the journey in about 25–35 minutes. Many popular beaches and resorts lie between Mandwa and Alibaug, so Mandwa works as the arrival point for the whole region.",
      },
      {
        question: "Is the shared speed boat suitable for families?",
        answer:
          "Yes. Families with children and senior citizens regularly travel on this route. Every passenger gets a life jacket, and our experienced captains operate according to local maritime regulations. If someone in your group needs special assistance, tell us while booking.",
      },
      {
        question: "What should I carry for the boat journey?",
        answer:
          "Carry a government ID, sunscreen, sunglasses and a cap. Shared-ride passengers are allowed one cabin bag each, so pack light. Water is advisable in summer.",
      },
      {
        question: "What are the timings, and how do I book?",
        answer:
          "Shared speed boats to Mandwa operate between 9:00 AM and 7:00 PM, subject to weather and sea conditions. Bookings are easiest over WhatsApp or phone on +91 87791 63152 — advance booking is recommended on weekends and holidays.",
      },
    ],
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
    heroImage: `${HARBOUR_SHARED_DIR}/gateway-of-india-mumbai-harbour-view-speed-boat-service.jpg`,
    heroImageAlt:
      "Gateway of India Mumbai harbour view from a shared speed boat cruise",
    storyImage: `${HARBOUR_SHARED_DIR}/sunset-view-harbour-cruise-mumbai-vishal-speed-boat-service.jpg`,
    storyImageAlt: "Sunset view on a shared Mumbai Harbour cruise speed boat ride",
    description: [
      "The Shared Mumbai Harbour Cruise is a 30-minute speed boat ride around Mumbai Harbour, departing from Jetty No. 5 at the Gateway of India. A shared seat costs ₹500 per person, making it one of the most affordable ways to see Mumbai from the water.",
      "The cruise passes the Gateway of India, the Taj Mahal Palace Hotel and the naval docks, and glides through the working harbour with cargo ships and offshore vessels on the horizon. Evening departures between 4:00 PM and sunset are the most popular, when the Mumbai skyline turns gold over the Arabian Sea.",
      "It is a relaxed, family-friendly ride — no charter, no planning: you buy a seat, wear a life jacket, and enjoy the city's most cinematic viewpoint. The cruise is also an easy add-on if you are already visiting the Gateway of India or Colaba.",
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
        icon: "wallet",
        title: "Mumbai's most affordable cruise",
        text: "A shared seat on the harbour cruise costs ₹500 per person — the easiest way onto Mumbai's water.",
      },
      {
        icon: "camera",
        title: "Skyline photo viewpoints",
        text: "Photograph the Gateway of India, the Taj Mahal Palace and the harbour skyline from angles no land spot offers.",
      },
      {
        icon: "sun",
        title: "Sunset departures",
        text: "Evening slots between 4:00 PM and sunset catch the Mumbai skyline at its golden best.",
      },
      {
        icon: "users",
        title: "Family-friendly ride",
        text: "Life jackets for every passenger and experienced captains on shared 10 and 12-seater speed boats.",
      },
      {
        icon: "mapPin",
        title: "Easy boarding at Jetty 5",
        text: "One clearly marked departure point at the Gateway of India, opposite the Taj Mahal Palace Hotel.",
      },
      {
        icon: "timer",
        title: "Fits any schedule",
        text: "A 30-minute loop that slots easily between sightseeing plans around Colaba and the Gateway.",
      },
    ],
    placesHeading: "What all you see during the ride?",
    rideHighlights: null,
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
      title: "Good to know before you board",
      items: [
        "Report at Jetty No. 5, Gateway of India, at least 20 minutes before departure.",
        "Life jackets are provided for all passengers and worn throughout the ride.",
        "Evening departures between 4:30 PM and sunset offer the best skyline views.",
        "Rides operate daily, subject to weather and sea conditions.",
        "Weekends and holidays are busy — book your seat in advance on +91 87791 63152.",
      ],
    },
    faqs: [
      {
        question: "What is included in the shared Mumbai Harbour cruise?",
        answer:
          "The cruise includes a shared seat on an approximately 30-minute speed boat ride around Mumbai Harbour with a life jacket for every passenger. The route covers harbour views of the Gateway of India, the Taj Mahal Palace Hotel and the naval docks from the water.",
      },
      {
        question: "Where does the harbour cruise depart from?",
        answer:
          "The cruise departs from Jetty No. 5 at the Gateway of India, opposite the Taj Mahal Palace Hotel. Arrive 20–30 minutes early — the Gateway is one of Mumbai's busiest tourist areas, and taxis or app cabs are easier than parking.",
      },
      {
        question: "How long is the Mumbai Harbour cruise?",
        answer:
          "The shared harbour cruise lasts approximately 30 minutes. Private speed boat rides of 30 minutes or one hour, and longer yacht charters, are available if you want more time on the water.",
      },
      {
        question: "What can I see during the harbour cruise?",
        answer:
          "Depending on the route and sea conditions, you get water-level views of the Gateway of India, the Taj Mahal Palace Hotel, the naval docks, Mumbai Port, offshore vessels and cargo ships — with the Mumbai skyline behind them.",
      },
      {
        question: "How much does the shared harbour cruise cost?",
        answer:
          "A shared seat on the Mumbai Harbour speed boat cruise costs ₹500 per person for approximately 30 minutes on the water.",
      },
      {
        question: "Is the cruise suitable for families?",
        answer:
          "Yes. Children, families and senior citizens regularly join the harbour cruise. All passengers wear life jackets, and our experienced captains follow local maritime regulations. Tell us while booking if anyone in your group needs special assistance.",
      },
      {
        question: "What is the best time for the harbour cruise?",
        answer:
          "Departures run daily between 4:00 PM and 8:00 PM. The most popular slot is between 4:30 PM and sunset, when the light on the Mumbai skyline and the Arabian Sea is at its best.",
      },
    ],
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
    heroImage: `${ELEPHANTA_SHARED_DIR}/speed-boat-shared-ride-to-elephanta-caves.jpg`,
    heroImageAlt: "Speed boat ride from Mumbai to Elephanta Caves",
    storyImage: `${ELEPHANTA_SHARED_DIR}/elephanta-caves-hindu-temple-hill-carved-india-vishal-boat-service.jpg.webp`,
    storyImageAlt:
      "Elephanta Caves rock-cut Hindu temple hill on Elephanta Island",
    description: [
      "The Shared Speed Boat Tour to Elephanta Caves takes you from the Gateway of India across Mumbai Harbour to Elephanta Island, home of the UNESCO World Heritage rock-cut cave temples dedicated to Lord Shiva.",
      "A speed boat covers the roughly 10 km crossing in about 20–30 minutes — far quicker than the one-hour public ferry — and a shared seat keeps the journey economical. Boats depart from Jetty No. 5 during the day, giving you time on the island while the caves are open.",
      "On the island, steps lead up past a small market to the 5th–8th century cave temples with their celebrated sculptures. A toy train runs between the jetty and the steps. Most visitors spend 4–6 hours on the full experience including the crossings, making it an easy half-day trip from Mumbai.",
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
          image: `${ELEPHANTA_SHARED_DIR}/mumbai-elephanta-caves-speed-boat-shared-ride.jpg`,
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
      title: "Good to know before you go",
      items: [
        "Report at Jetty No. 5, Gateway of India, at least 20 minutes before departure.",
        "The caves are open 9:00 AM – 5:00 PM and remain closed on Mondays.",
        "Reaching the caves involves steps — comfortable shoes are essential.",
        "Carry water, a hat, sunscreen and cash for entry tickets and island purchases.",
        "Book at least two days ahead where possible — weekends and holidays are busy.",
      ],
    },
    faqs: [
      {
        question: "How do I travel from Mumbai to Elephanta Caves by boat?",
        answer:
          "Shared and private speed boats to Elephanta Island depart from Jetty No. 5 at the Gateway of India. The shared speed boat tour is the quickest option, crossing Mumbai Harbour in about 20–30 minutes, while public ferries take around an hour each way.",
      },
      {
        question: "Where does the boat to Elephanta Caves depart from?",
        answer:
          "From Jetty No. 5 at the Gateway of India, opposite the Taj Mahal Palace Hotel. After your booking is confirmed, we share the exact boarding location and a Google Maps pin on WhatsApp.",
      },
      {
        question: "How long does the journey to Elephanta Island take?",
        answer:
          "The speed boat crossing takes roughly 20–30 minutes each way, depending on sea conditions. Public ferries take about one hour each way.",
      },
      {
        question: "How much time should I spend at Elephanta Caves?",
        answer:
          "Most visitors spend 4–6 hours in total, including both crossings, the walk up to the caves, exploring the sculptures, and the toy train and market on the island. Travelling by speed boat leaves you more time on the island than the ferry does.",
      },
      {
        question: "Are Elephanta Caves suitable for families?",
        answer:
          "Yes, families with children regularly visit by speed boat, and life jackets are provided for all passengers. Note that the island involves walking and climbing steps, so wear comfortable footwear; the site is not recommended for wheelchair users or those with serious walking difficulties.",
      },
      {
        question: "What should I carry when visiting Elephanta Island?",
        answer:
          "Comfortable walking shoes, a hat or cap, sunglasses, sunscreen, drinking water, a camera or phone, and cash or digital payment for cave entry tickets and island purchases. Food stalls and restaurants are available on the island.",
      },
      {
        question: "How do I book, and how far in advance?",
        answer:
          "Book over WhatsApp or phone on +91 87791 63152. Same-day bookings are sometimes possible, but booking at least two days ahead is recommended, especially on weekends and public holidays.",
      },
    ],
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
