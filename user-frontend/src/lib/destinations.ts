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
    name: "Mumbai Harbour",
    eyebrow: "City harbour cruises",
    headline: "See Mumbai from its most cinematic side",
    summary:
      "Mumbai Harbour is one of India's most iconic waterfront destinations, offering panoramic views of the city's skyline, the Gateway of India, the Taj Mahal Palace Hotel, naval docks and historic coastal landmarks. A private speed boat or yacht cruise across the harbour provides a unique way to experience Mumbai away from the city's busy streets. Whether you are planning a romantic sunset cruise, family outing, corporate event or photography session, Mumbai Harbour offers a memorable experience on the Arabian Sea.",
    image: "/Mumbai Habour/Mumbai Harbour speed boat tour by vishal boat service.jpg",
    imageAlt: "Mumbai skyline and waterfront",
    duration: "1-3 hours",
    bestFor: "Harbour rides, photoshoots, celebrations",
    startingPoint: "Gateway of India",
    highlights: ["Gateway views", "Sunset slots", "Private charters", "Flexible route"],
    experiences: ["Speed Boat", "Yachts", "Sail boat"],
    faqs: [
      {
        question: "How long does a Mumbai Harbour Cruise take?",
        answer:
          "A Mumbai Harbour Cruise can be customized based on the experience you want. Most guests choose a 1-hour speed boat ride around Mumbai Harbour, while private yacht cruises usually last between 2 and 3 hours for a more relaxed experience. If you're short on time, 30-minute harbour rides are also available. All cruises depart from Jetty No. 5, Gateway of India, and our team can help you choose the best option based on your schedule and budget.",
      },
      {
        question: "What boat options are available for a Mumbai Harbour Cruise?",
        answer:
          "Vishal Boat Service offers a variety of boats for every budget and occasion, including:\n* Luxury Yacht Rentals\n* Private Speed Boats\n* Sail Boats\n* Traditional Wooden Boats\n* Corporate Charter Boats\n* Sunset Cruise Boats\nWhether you're planning a family outing, a romantic cruise, sightseeing, or a corporate event, we have the right boat for you. Contact us on +91 87791 63152 for recommendations and pricing.",
      },
      {
        question: "Can we book a corporate outing or team event on a yacht in Mumbai?",
        answer:
          "Yes. Vishal Boat Service specializes in corporate yacht rentals and speed boat experiences in Mumbai Harbour.\nPopular corporate activities include:\n* Team outings\n* Client entertainment\n* Leadership retreats\n* Employee rewards\n* Product launches\n* Networking events\n* Sunset yacht cruises\nOur team can recommend the ideal yacht or speed boat based on your group size, duration, and budget.",
      },
      {
        question: "What are the operating hours for Mumbai Harbour boat rides?",
        answer:
          "Most harbour cruises and private boat rentals operate daily between 7:00 AM and 8:00 PM, subject to weather and sea conditions.\nFor the best experience, evening departures between 4:00 PM and sunset are especially popular because they offer spectacular views of the Mumbai skyline and the Arabian Sea.",
      },
      {
        question: "Where do Mumbai Harbour Cruises start?",
        answer:
          "All private speed boats and yacht rentals operated by Vishal Boat Service depart from Jetty No. 5 at Gateway of India, Mumbai.\nTraditional wooden ferry rides usually depart from Jetty No. 3 and Jetty No. 4.\nSince Gateway of India is one of Mumbai's busiest tourist attractions, we recommend arriving 20–30 minutes early.",
      },
      {
        question: "Is parking available near Gateway of India?",
        answer:
          "Yes, paid parking is available around Gateway of India. However, the area can be extremely busy, especially on weekends and holidays.\nFor a hassle-free experience, we recommend arriving by taxi or app-based cab. Our team can also assist you with the exact boarding location after your booking is confirmed.",
      },
      {
        question: "What is Jetty No. 5 at Gateway of India?",
        answer:
          "Jetty No. 5 is the primary boarding point for private speed boats, luxury yachts, harbour cruises, and private boat transfers from Gateway of India.\nIt is located opposite the Taj Mahal Palace Hotel, near the white security container operated by the police.\nOnce your booking is confirmed, Vishal Boat Service shares the exact location along with boarding instructions.",
      },
      {
        question: "How much does a Mumbai Harbour Speed Boat ride cost?",
        answer:
          "Vishal Boat Service operates scheduled Mumbai Harbour Speed Boat Rides every day between 4:00 PM and 8:00 PM.\n* ₹500 per person\n* Approximately 30 minutes\n* Daily departures\n* Advance booking recommended on weekends and holidays\nPrivate speed boats and customized harbour cruises are also available for families, couples, and groups.",
      },
      {
        question: "How can I hire a private yacht for a Mumbai Harbour Cruise?",
        answer:
          "Hiring a yacht is simple with Vishal Boat Service.\nChoose your:\n* Yacht size\n* Cruise duration\n* Preferred departure time\n* Food & beverages (optional)\n* Decoration (optional)\n* DJ or entertainment (optional)\nOur team manages everything from boarding assistance to onboard arrangements, ensuring a smooth and memorable experience.\nWhether you're celebrating a birthday, anniversary, proposal, corporate event, or simply enjoying Mumbai's coastline, we'll help you select the perfect yacht for your occasion.",
      },
      {
        question: "Can I hire a boat or yacht for film shoots, advertisements, or Bollywood shooting in Mumbai?",
        answer:
          "Yes. Vishal Boat Service provides speed boats, luxury yachts, and private charter boats for Bollywood film shoots, TV commercials, music videos, web series, documentaries, fashion shoots, and brand campaigns in Mumbai Harbour, the Arabian Sea, and nearby coastal locations.\nOur experienced team works with production houses, advertising agencies, photographers, and event companies by providing suitable boats, flexible schedules, and professional coordination for on-water filming.\nWhether you need a luxury yacht for a commercial, a speed boat for an action sequence, or a private vessel for a pre-wedding or fashion shoot, we can arrange the right option to match your production requirements.",
      },
      {
        question: "Which is better for a Mumbai Harbour Cruise – a Speed Boat or a Yacht?",
        answer:
          "Both options offer a unique experience, and the best choice depends on your occasion and budget.\nA Speed Boat is ideal if you're looking for a quick, exciting ride around Mumbai Harbour or need fast transportation to destinations like Mandwa or Alibaug. It is perfect for families, small groups, and sightseeing.\nA Luxury Yacht is designed for celebrations and leisure. If you're planning a birthday, anniversary, proposal, corporate event, or simply want to relax with family and friends, a yacht offers spacious seating, music, washrooms, and a premium cruising experience.\nOur team at Vishal Boat Service can recommend the best option based on your group size, budget, and the experience you're looking for.",
      },
      {
        question: "What is the best time to enjoy a Mumbai Harbour Cruise?",
        answer:
          "Mumbai Harbour Cruises are available throughout the day, but the most popular time is between 4:30 PM and sunset. During this time, you can enjoy beautiful views of the Mumbai skyline, the Arabian Sea, and iconic landmarks such as the Gateway of India and the Taj Mahal Palace Hotel.\nMorning cruises are ideal for sightseeing and photography, while evening cruises offer cooler weather and spectacular sunset views.",
      },
      {
        question: "Can I book a private sunset cruise in Mumbai?",
        answer:
          "Yes, Vishal Boat Service offers private sunset cruises in Mumbai on both speed boats and luxury yachts.\nA private sunset cruise is perfect for:\n* Couples\n* Families\n* Birthday celebrations\n* Marriage proposals\n* Anniversary celebrations\n* Friends' get-togethers\n* Small private parties\nYou can also customize your cruise with decorations, music, refreshments, or catering to make the experience even more memorable.",
      },
      {
        question: "Can couples hire a private yacht in Mumbai?",
        answer:
          "Absolutely. A private yacht rental in Mumbai is one of the most popular experiences for couples celebrating anniversaries, birthdays, proposals, or simply spending quality time together.\nOur yachts provide privacy, beautiful views of Mumbai Harbour, comfortable seating, and optional services such as decorations, flowers, cakes, and photography.\nIf you're planning a surprise proposal or romantic celebration, our team can help organize every detail.",
      },
      {
        question: "Is a Mumbai Harbour Cruise safe for children and senior citizens?",
        answer:
          "Yes, Passenger safety is our highest priority.\nAll boats are equipped with life jackets and required safety equipment, and our experienced captains operate according to local maritime regulations.\nChildren, families, and senior citizens regularly enjoy Mumbai Harbour Cruises with us. If anyone in your group has special requirements, please let us know while booking so we can recommend the most suitable boat.",
      },
      {
        question: "Can I celebrate birthdays and anniversaries on a yacht in Mumbai?",
        answer:
          "Yes, Vishal Boat Service offers private yacht rentals for birthdays, anniversaries, engagements, and other special occasions.\nYou can personalize your experience with:\n* Balloon decorations\n* Floral arrangements\n* Birthday cakes\n* Romantic décor\n* Music systems\n* Professional photography\n* Catering (on selected yachts)\nWhether you're planning an intimate celebration or a larger gathering, we can help create a memorable experience on the waters of Mumbai Harbour.",
      },
      {
        question: "Can tourists book a private speed boat from Gateway of India?",
        answer:
          "Yes, Domestic and international tourists can easily book a private speed boat from Gateway of India.\nOur boats are popular for:\n* Mumbai Harbour sightseeing\n* Gateway of India boat rides\n* Sunset cruises\n* Private family outings\n* Photography tours\n* Transfers to Mandwa and Alibaug\n* Elephanta Island tours\nAdvance booking is recommended, especially on weekends and public holidays.",
      },
      {
        question: "What landmarks can I see during a Mumbai Harbour Cruise?",
        answer:
          "Depending on the duration of your cruise and sea conditions, you may enjoy views of:\n* Gateway of India\n* Taj Mahal Palace Hotel\n* Mumbai Port\n* Naval Dockyard (from permitted areas)\n* Arabian Sea coastline\n* Marine Drive skyline (from a distance)\n* Raj Bhavan coastline\n* Offshore vessels and cargo ships\n* Beautiful Mumbai sunset views\nEvery cruise offers a different perspective of Mumbai that cannot be experienced from land.",
      },
      {
        question: "Can I customize my Mumbai Harbour Cruise?",
        answer:
          "Yes, All private speed boat rides and yacht charters can be customized according to your requirements.\nYou can choose:\n* Cruise duration\n* Departure time\n* Boat type\n* Route (subject to permissions and sea conditions)\n* Decorations\n* Catering\n* Music\n* Photography and videography\n* Celebration arrangements\nOur team will help you plan an experience that matches your occasion and budget.",
      },
      {
        question: "Do you provide food, decorations, and music onboard?",
        answer:
          "Yes, Depending on the yacht or boat you select, we can arrange a range of optional onboard services, including:\n* Snacks and beverages\n* Full catering\n* Birthday cakes\n* Balloon and floral decorations\n* Romantic proposal setups\n* DJ and music systems (available on selected yachts)\n* Photography and videography\n* Event coordination\nPlease let us know your requirements while booking so we can prepare everything before your departure.",
      },
      {
        question: "Why should I book my Mumbai Harbour Cruise with Vishal Boat Service?",
        answer:
          "Vishal Boat Service is a trusted provider of speed boat rentals, luxury yacht charters, Mumbai Harbour Cruises, Elephanta tours, and Mandwa–Alibaug transfers.\nWhen you book with us, you benefit from:\n* Transparent pricing with no hidden charges\n* A wide selection of speed boats and luxury yachts\n* Experienced captains and trained crew\n* Easy WhatsApp booking and customer support\n* Custom packages for couples, families, tourists, corporate groups, and celebrations\n* Assistance at Jetty No. 5, Gateway of India\n* Flexible options for sightseeing, events, transfers, and private charters\nWhether you're planning a short harbour ride or a luxury yacht celebration, our goal is to provide a safe, comfortable, and memorable experience on Mumbai's waters.",
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
    image: "/Alibaug ( Mandwa)/mandwa-port-vishal-boat-serice.jpg",
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
    image: "/Elephanta Caves/mumbai-elephanta-caves-vishal-boat-service.jpg",
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
