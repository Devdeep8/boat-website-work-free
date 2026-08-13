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
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "mumbai",
    name: "Mumbai",
    eyebrow: "City harbour cruises",
    headline: "See Mumbai from its most cinematic side",
    summary:
      "Cruise past the Gateway of India, Taj Mahal Palace, naval docks, and skyline views with private boats for couples, families, and corporate groups.",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1400&h=1100&fit=crop",
    imageAlt: "Mumbai skyline and waterfront",
    duration: "1-3 hours",
    bestFor: "Harbour rides, photoshoots, celebrations",
    startingPoint: "Gateway of India",
    highlights: ["Gateway views", "Sunset slots", "Private charters", "Flexible route"],
    experiences: ["Speed Boat", "Yachts", "Sail boat"],
  },
  {
    slug: "alibaug",
    name: "Alibaug (Mandwa)",
    eyebrow: "Fast coastal transfers",
    headline: "Skip the road and arrive at Mandwa by sea",
    summary:
      "Reach Mandwa and Alibaug with comfortable sea transfers, luggage assistance, flexible timings, and private options for weekend escapes.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1400&h=1100&fit=crop",
    imageAlt: "Coastal beach waves near Alibaug",
    duration: "45-60 minutes",
    bestFor: "Mandwa transfers, weekend trips, private groups",
    startingPoint: "Gateway of India",
    highlights: ["Direct Mandwa route", "Luggage support", "Family friendly", "Private pickup"],
    experiences: ["Speed Boat", "Yachts", "AC Ferry", "Ro-Ro Ship"],
  },
  {
    slug: "elephanta-caves",
    name: "Elephanta Caves",
    eyebrow: "Heritage island tours",
    headline: "Make the journey to Elephanta feel special",
    summary:
      "Plan a smoother trip to Elephanta Island with boat transfers, guided tour options, and scenic harbour time before or after the caves.",
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=1400&h=1100&fit=crop",
    imageAlt: "Historic stone architecture in India",
    duration: "3-4 hours",
    bestFor: "Sightseeing, heritage tours, family day trips",
    startingPoint: "Gateway of India",
    highlights: ["Island transfer", "Guide options", "Cave visit", "Harbour views"],
    experiences: ["Wooden Ferry", "AC Ferry", "Speed Boat"],
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
  },
];

export function getDestination(slug: string) {
  return DESTINATIONS.find((destination) => destination.slug === slug);
}
