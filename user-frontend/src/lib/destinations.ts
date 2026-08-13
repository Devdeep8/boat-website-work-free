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
        question: "What is the fastest way to travel from Mumbai to Alibaug?",
        answer:
          "The fastest and most convenient way to travel from Mumbai to Alibaug is by a private speed boat from Gateway of India to Mandwa Jetty. The journey usually takes 20–30 minutes, depending on sea conditions.\nUnlike public ferries, private speed boats offer flexible departure timings, faster travel, and a comfortable experience for families, corporate groups, and tourists.\nTo check today's availability or book a private speed boat, call or WhatsApp +91 87791 63152.",
      },
      {
        question: "How long does a speed boat take from Mumbai to Mandwa?",
        answer:
          "A speed boat from Mumbai to Mandwa generally takes around 20 to 30 minutes. Travel time may vary depending on weather and sea conditions.\nOur private speed boats depart from Jetty No. 5, Gateway of India, making them one of the quickest ways to reach Mandwa and Alibaug.",
      },
      {
        question: "How much does a private speed boat from Mumbai to Alibaug cost?",
        answer:
          "The cost of a private speed boat to Alibaug depends on:\n* Number of passengers\n* Boat size\n* Travel date\n* Departure time\nVishal Boat Service offers a range of boats to suit different budgets and group sizes. Contact us on +91 87791 63152 for the latest pricing and availability.",
      },
      {
        question: "Where do speed boats to Mandwa depart from?",
        answer:
          "All our private speed boats and yacht transfers to Mandwa depart from Jetty No. 5, Gateway of India, Mumbai.\nAfter your booking is confirmed, we'll send you the exact boarding location, Google Maps link, and easy-to-follow directions via WhatsApp.",
      },
      {
        question: "Is a speed boat better than the ferry to Alibaug?",
        answer:
          "If you're looking for speed, comfort, and flexibility, then yes.\nA private speed boat is much faster than a ferry and allows you to choose your own departure time. It's ideal for families, business travellers, wedding guests, and anyone wanting a hassle-free journey.\nPublic ferries are more economical but operate on fixed schedules and usually take longer.",
      },
      {
        question: "Can I book a same-day speed boat to Alibaug?",
        answer:
          "Yes, same-day bookings are often available, subject to boat availability and weather conditions.\nHowever, weekends, holidays, and long weekends are in high demand. We recommend booking in advance to secure your preferred departure time.\nCall or WhatsApp +91 87791 63152 for instant assistance.",
      },
      {
        question: "Do you provide private boat transfers for Alibaug resorts?",
        answer:
          "Yes, Vishal Boat Service provides private speed boat transfers to Mandwa for guests staying at popular Alibaug resorts and villas.\nOnce you arrive at Mandwa Jetty, we can also help coordinate local transport to your destination, making your journey smooth from Mumbai to your resort.",
      },
      {
        question: "Can families and senior citizens travel by speed boat?",
        answer:
          "Absolutely.\nOur speed boats are regularly used by families with children, senior citizens, and international tourists.\nAll passengers are provided with life jackets, and our experienced captains prioritize safety throughout the journey.\nIf anyone in your group requires special assistance, please let us know while booking.",
      },
      {
        question: "Can I hire an entire speed boat for my family or group?",
        answer:
          "Yes, you can book an exclusive private speed boat for your family, friends, or corporate group.\nPrivate charters offer:\n* Flexible departure timings\n* Complete privacy\n* Comfortable seating\n* Direct transfers\n* No waiting for other passengers\nIt's the perfect option for vacations, celebrations, and business travel.\nPrice starting from Rs. 8000/-",
      },
      {
        question: "Can I hire a luxury yacht to Alibaug?",
        answer:
          "Yes, in addition to speed boats, Vishal Boat Service also offers luxury yacht charters from Mumbai to Alibaug.\nMany guests choose yachts for:\n* Birthday celebrations\n* Destination weddings\n* Corporate outings\n* Family gatherings\n* Bachelor and bachelorette parties\n* Weekend getaways\nOur team can recommend the best yacht based on your group size and budget.\nStarting Price Rs. 70,000/-",
      },
      {
        question: "Do you provide speed boats for Alibaug weddings?",
        answer:
          "Yes. We specialize in speed boat transportation for destination weddings in Alibaug.\nOur services include:\n* Guest transfers\n* Bride and groom arrivals\n* Family transportation\n* Wedding logistics\n* VIP guest transfers\nWe work closely with wedding planners to ensure smooth and timely transportation throughout the event.\nIn 2026 we have already catered to 50+ wedding transportation in Alibaug for the guest. We are well aware of the arrangements required for wedding groups.",
      },
      {
        question: "Can corporate groups hire boats to Alibaug?",
        answer:
          "Yes, many companies choose our private speed boat and yacht services for:\n* Corporate offsites\n* Team outings\n* Leadership retreats\n* Client meetings\n* Incentive trips\n* Company events\nWe can arrange multiple boats and customized schedules based on your event requirements.\nWith a client base of companies like Morgan Stanley, Dharma Productions, Reliance Group, Microsoft, Bank of America, Zerodha, Taj Group, Tata Group, Godrej, Nappa Dori, Star Group, Essel Group and many more. All these companies being a regular client of ours.",
      },
      {
        question: "Which resorts can I reach easily from Mandwa Jetty?",
        answer:
          "Mandwa Jetty is the main gateway to Alibaug and offers convenient access to many popular resorts, beach villas, and holiday homes.\nIf you're unsure about the best transfer option, our team can guide you based on your accommodation and arrival time.",
      },
      {
        question: "Is luggage allowed on speed boats to Alibaug?",
        answer:
          "Yes, guests can carry reasonable luggage on our private speed boats.\nIf you're travelling with extra baggage, golf equipment, wedding items, or production equipment, please inform us while booking so we can recommend the most suitable boat.\nIn the shared ride, guests are restricted to one cabin bag per person as we also need to look at comfort and safety of all the clients in the boat.",
      },
      {
        question: "Can I take my pet on a private speed boat?",
        answer:
          "Yes, pets may be allowed on private charters, subject to prior approval and safety requirements.\nPlease inform us in advance so we can make suitable arrangements and ensure a comfortable journey for both you and your pet.\nWe charge Rs. 500/pet one way.",
      },
      {
        question: "What happens if the weather is bad?",
        answer:
          "Passenger safety is our highest priority.\nIf sea conditions are unsafe, departures may be delayed or rescheduled in accordance with local maritime regulations.\nOur team will keep you informed and help arrange the next available departure or discuss suitable alternatives.",
      },
      {
        question: "What is the best time to visit Alibaug?",
        answer:
          "Alibaug is a year-round destination, but the best months are October to March, when the weather is pleasant for beaches, sightseeing, and water activities.\nWeekday travel is generally less crowded than weekends and public holidays.",
      },
      {
        question: "Can I book a return speed boat from Alibaug to Mumbai?",
        answer:
          "Yes, we offer one-way and return private speed boat transfers between Mumbai, Mandwa, and Alibaug.\nOur team can schedule your return journey according to your travel plans, ensuring a convenient and stress-free experience.",
      },
      {
        question: "Why should I choose Vishal Boat Service for my Mumbai to Alibaug transfer?",
        answer:
          "Vishal Boat Service is trusted by tourists, families, corporate clients, wedding planners, and international visitors for safe and reliable private boat transfers.\nWhen you book with us, you benefit from:\n* Fast and comfortable speed boats\n* Luxury yacht options\n* Flexible departure timings\n* Experienced captains and trained crew\n* Transparent pricing\n* Easy WhatsApp booking\n* Assistance at Jetty No. 5, Gateway of India\n* Personalized service from booking to arrival\nWhether you're travelling for leisure, a wedding, or business, we aim to make your journey smooth and memorable.\n📞 Call or WhatsApp: +91 87791 63152",
      },
      {
        question: "Is Mandwa the same as Alibaug?",
        answer:
          "No. Mandwa and Alibaug are different locations, although they are closely connected. Mandwa is the main jetty where speed boats and ferries from Mumbai arrive, while Alibaug town is approximately 20 km from Mandwa Jetty.\nMost visitors travelling from Mumbai first reach Mandwa by speed boat or ferry and then continue to Alibaug by taxi, shuttle bus, or private vehicle. Vishal Boat Service can also guide you on the best onward transport based on your destination.",
      },
      {
        question: "How far is Mandwa Jetty from Alibaug town?",
        answer:
          "Mandwa Jetty is approximately 20 kilometres from Alibaug town, and the road journey usually takes 25 to 35 minutes, depending on traffic.\nMany popular resorts, villas, and beaches are located between Mandwa and Alibaug, making Mandwa the main gateway for visitors arriving by sea.",
      },
      {
        question: "What is the difference between Mandwa and Alibaug?",
        answer:
          "Mandwa is the arrival point for passengers travelling from Mumbai by boat, while Alibaug is the main town known for its beaches, resorts, restaurants, and tourist attractions.\nMost travellers choose a private speed boat from Gateway of India to Mandwa because it is the fastest sea route, followed by a short drive to Alibaug.",
      },
      {
        question: "Can I take a speed boat directly from Gateway of India to Alibaug?",
        answer:
          "Yes. Private speed boats can be arranged from Gateway of India based on your destination and sea conditions. Most services arrive at Mandwa Jetty, which offers easy road access to Alibaug and nearby resorts.\nIf you're staying at a specific resort or villa, our team can advise you on the most convenient drop-off point and onward transport.\nCall or WhatsApp +91 87791 63152 for route options and bookings.",
      },
      {
        question: "Are speed boats available 24 hours?",
        answer:
          "No. Speed boat services operate during daylight hours and are subject to weather, visibility, sea conditions, and local maritime regulations.\nThe best departure times are generally between 7:00 AM and 8pm. If you have an early morning or late evening travel requirement, contact our team and we'll suggest the most suitable schedule.",
      },
      {
        question: "Which is better – a speed boat or the RoRo ferry to Alibaug?",
        answer:
          "It depends on your travel needs.\nA private speed boat is ideal if you want the fastest journey, flexible departure timings, privacy, and a premium travel experience. It is especially popular with families, corporate travellers, wedding guests, and tourists.\nA RoRo ferry allows passengers to travel with their vehicles and is suitable for those planning to drive around Alibaug. However, it operates on fixed schedules and the overall journey is usually longer than a speed boat.\nIf you're unsure which option is best for you, Vishal Boat Service can help you choose the right travel mode.",
      },
      {
        question: "Can I hire a private boat for a one-day trip to Alibaug?",
        answer:
          "Yes. Many guests book a private speed boat for a same-day return trip to Alibaug.\nA typical day trip includes:\n* Morning departure from Gateway of India\n* Visit to beaches, forts, or resorts in Alibaug\n* Lunch at a beachside restaurant\n* Evening return to Mumbai\nWe can also arrange return timings that suit your itinerary.",
      },
      {
        question: "Is parking available at Gateway of India?",
        answer:
          "Yes, paid parking is available near Gateway of India. However, the area is one of Mumbai's busiest tourist destinations, and parking can be limited on weekends, holidays, and during peak tourist seasons.\nFor a more convenient experience, we recommend using a taxi or app-based cab. Once your booking is confirmed, we'll share the exact boarding location and directions via WhatsApp.",
      },
      {
        question: "How early should I reach Jetty No. 5?",
        answer:
          "We recommend arriving at Jetty No. 5, Gateway of India, at least 20 minutes before your scheduled departure.\nThis allows enough time for boarding, safety instructions, and a relaxed start to your journey. After booking, our team will share your reporting time and the exact location on WhatsApp.",
      },
      {
        question: "Can I book a speed boat for a large group?",
        answer:
          "Yes, Vishal Boat Service can arrange multiple speed boats or larger charter vessels for families, corporate groups, weddings, school trips, and special events.\nWhether you're travelling with 10 guests or over 200 guests, we'll recommend the most suitable boats and departure plan for your group.",
      },
      {
        question: "Do you provide GST invoices for corporate bookings?",
        answer:
          "Yes, GST invoices can be provided for eligible corporate bookings upon request.\nMany companies choose Vishal Boat Service for business travel, corporate offsites, client entertainment, and team outings between Mumbai and Alibaug.\nPlease share your billing details while making the booking so we can prepare the invoice accordingly.",
      },
      {
        question: "Can you arrange multiple boats for weddings and events?",
        answer:
          "Absolutely. Vishal Boat Service regularly manages transportation for destination weddings, corporate events, film shoots, and large private celebrations.\nDepending on your guest count, we can arrange multiple speed boats, luxury yachts, or a combination of both to ensure smooth transportation between Mumbai and Alibaug.\nOur team coordinates boarding schedules and guest movement so your event runs seamlessly.",
      },
      {
        question: "Which beaches are closest to Mandwa Jetty?",
        answer:
          "Several beautiful beaches are located close to Mandwa Jetty, making it a great starting point for exploring Alibaug.\nPopular nearby beaches include:\n* Mandwa Beach\n* Kihim Beach\n* Awas Beach\n* Varsoli Beach\n* Alibaug Beach\n* Nagaon Beach\nOur team can suggest the best beach based on whether you're looking for water sports, peaceful relaxation, family outings, or beach resorts.",
      },
      {
        question: "Do you provide transfers to resorts and private villas in Alibaug?",
        answer:
          "Yes. Vishal Boat Service assists guests travelling to resorts, beach villas, farmhouses, and private holiday homes across Alibaug.\nIf you share your accommodation details while booking, we'll guide you on the most convenient arrival point and available transport options from Mandwa Jetty.\nThis makes your journey from Mumbai to your destination smooth and hassle-free.",
      },
      {
        question: "Can I carry luggage on a private speed boat?",
        answer:
          "Yes. Passengers are welcome to carry reasonable luggage on private speed boats.\nIf you're travelling with extra baggage, wedding decorations, photography equipment, musical instruments, or production gear, please inform us before your trip. We'll recommend the most suitable boat to ensure a comfortable journey for both passengers and luggage.\nIn shared speed boat rides, passengers are allowed to carry one cabin bag each.",
      },
      {
        question: "Why book your Mumbai to Mandwa or Alibaug transfer with Vishal Boat Service?",
        answer:
          "Vishal Boat Service is a trusted name for private speed boat transfers, yacht charters, and luxury travel between Mumbai, Mandwa, and Alibaug.\nWhen you book with us, you enjoy:\n* Fast and comfortable speed boats\n* Luxury yacht options\n* Experienced captains and trained crew\n* Flexible departure timings\n* Transparent pricing\n* Easy WhatsApp booking\n* Assistance at Jetty No. 5, Gateway of India\n* Customized travel for families, tourists, weddings, corporate groups, and special events\nWhether you're travelling for a weekend getaway, a destination wedding, a business meeting, or a family holiday, our goal is to make your journey safe, comfortable, and memorable.\n📞 Call or WhatsApp +91 87791 63152 today to check availability and book your private speed boat or yacht.",
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
        answer:
          "A full Elephanta trip usually takes around 3–4 hours, including the boat ride to the island, time to explore the caves, and the return trip. If you are taking a private speed boat or yacht charter, you may have more flexibility in timing and can stay longer for photography, sightseeing, or a relaxed visit.",
      },
      {
        question: "Which boats are available from Gateway of India to Elephanta Caves?",
        answer:
          "You can travel by:\n* Wooden Ferry\n* AC Ferry\n* Private Speed Boat\n* Speed Boat Charter\n* Yacht Charter\nDepending on your travel style and budget, we can help you choose between a quick ride, a guided tour, or a private premium experience.",
      },
      {
        question: "Where do the Elephanta boat rides start from?",
        answer:
          "Most Elephanta boat rides begin from Gateway of India, Mumbai. The boarding point depends on the type of boat you choose, but our team can guide you to the exact jetty and timing after booking confirmation. We recommend arriving 20–30 minutes before departure.",
      },
      {
        question: "Is the Elephanta trip suitable for families and tourists?",
        answer:
          "Yes. Elephanta Caves is a popular destination for families, students, tourists, and photography enthusiasts. The island trip is enjoyable for both casual visitors and those looking for a historical and cultural experience. The boat ride itself adds to the excitement and gives you a scenic view of Mumbai Harbour.",
      },
      {
        question: "Can I book a private speed boat to Elephanta Caves?",
        answer:
          "Absolutely. Private speed boats are one of the most convenient ways to visit Elephanta Caves, especially if you want to avoid crowding and travel on your own time. This option is ideal for families, groups, and travellers who want a shorter, more comfortable journey with more flexibility.",
      },
      {
        question: "What can I see at Elephanta Caves?",
        answer:
          "The Elephanta Caves are famous for their rock-cut sculptures and temple structures dedicated to Lord Shiva. Visitors can explore the cave complex, admire the carved architecture, and enjoy the island's scenic surroundings. The site is especially appealing to history lovers, cultural travellers, and photographers.",
      },
      {
        question: "Are guided tours available at Elephanta Caves?",
        answer:
          "Yes. Guided tours can be arranged for travellers who want a more informative and structured visit. A guide helps you understand the historical and spiritual significance of the carvings and gives better context to the island's heritage.",
      },
      {
        question: "Why choose Vishal Boat Service for Elephanta Caves?",
        answer:
          "Vishal Boat Service provides reliable transfer options, knowledgeable support, and flexible schedules for Elephanta trips. Whether you want a shared ferry, a private speed boat, or a premium yacht charter, we help you plan a smooth and memorable day trip from Mumbai to the island.",
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
