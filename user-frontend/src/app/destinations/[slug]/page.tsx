import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DESTINATIONS, getDestination } from "@/lib/destinations";

type DestinationPageProps = {
  params: Promise<{ slug: string }>;
};

const WHATSAPP_NUMBER = "918779163152";

const publicPath = (p: string) => encodeURI(p);



const VISIT_CARDS = [
  {
    title: "Speed boat ride",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=500&h=500&fit=crop",
  },
  {
    title: "Family celebration",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&h=500&fit=crop",
  },
  {
    title: "Island trip",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500&h=500&fit=crop",
  },
  {
    title: "Photoshoot booking",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=500&fit=crop",
  },
  {
    title: "Corporate group",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=500&fit=crop",
  },
  {
    title: "Birthday party",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop",
  },
  {
    title: "Sunset cruise",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&h=500&fit=crop",
  },
  {
    title: "Before wedding",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=500&fit=crop",
  },
];

// Reviews removed — replaced by per-destination FAQs rendered below.

const MUMBAI_HOW_TO_REACH = [
  {
    title: "Wooden Ferry",
    duration: "30 mins & 1 Hour",
    boardingPoint: "Gateway of India, Jetty 3",
    capacity: "60-80 PAX",
    price: "Rs. 200/person (Return Fare)",
    timings: "4pm to 7pm",
    image: publicPath('/Mumbai Habour/Wooden ferry at Gateway of India for Harbour Cruise or a 30mins ride in Mumbai sea.jpg'),
  },
  {
    title: "Speed Boat Charter",
    duration: "30 mins & 1 Hour",
    boardingPoint: "Gateway of India, Jetty 5",
    capacity: "6, 10 & 12 PAX",
    price: "Starting Price: Rs. 5,000/boat",
    timings: "7am to 8pm",
    image: publicPath('/Mumbai Habour/Speed Boat Ride with vishal boat Service in Mumbai at gateway of india for harbour cruise or a boat ride in Mumbai sea_.jpg'),
  },
  {
    title: "Speed Boat Shared",
    duration: "30 mins & 1 Hour",
    boardingPoint: "Gateway of India, Jetty 5",
    capacity: "10 & 12 PAX",
    price: "Starting Price: Rs. 500/person",
    timings: "4pm to 7pm",
    image: publicPath('/Mumbai Habour/12 seater speed boat with best speed boat rental service vishal boat service for harbour cruise starting at rs 500 per person_.jpg'),
  },
  {
    title: "Yacht",
    duration: "2 Hour or more",
    boardingPoint: "Gateway of India, Jetty 5",
    capacity: "12-40 PAX",
    price: "Starting Price: Rs. 30,000/boat",
    timings: "7am to 8pm",
    image: publicPath('/Mumbai Habour/luxury yacht in Mumbai harbour for party or relaxing session hire from vishal boat service_.jpg'),
  },
  {
    title: "Sail Boat",
    duration: "2 Hour or more",
    boardingPoint: "Gateway of India, Jetty 5",
    capacity: "4-12 PAX",
    price: "Starting Price: Rs. 5,000/boat",
    timings: "7am to 8pm",
    image: publicPath('/Mumbai Habour/vishal boat service provides sail boats at Mumbai harbour for 2 hours packages rental at economical prices_.jpg'),
  },
];

const MUMBAI_ACTIVITIES = [
  { title: "Speed Thrill on speed Boat", image: publicPath('/Mumbai Habour/Speed boat provided by vishal boat service at Mumbai harbour_.jpg') },
  { title: "Party with Friends with sunset views", image: publicPath('/Mumbai Habour/Party with friends on boat. girls time at Mumbai seas.jpg') },
  { title: "Yacht Party", image: publicPath('/Mumbai Habour/vishal boat service get you the best yacht party with your friends. call to get a party arranged asap.jpg') },
  { title: "Pre-Wedding Photoshoot", image: publicPath('/Mumbai Habour/Pre-wedding photoshoot in yacht at Mumbai harbour-vishal boat service manages all for you at economical pricing_.jpg') },
  { title: "Corporate Team Evening Outing", image: publicPath('/Mumbai Habour/take your corporate team for a yacht party at the Mumbai sea. vishal boat service can arrange all for you in your budget. already caters to most of the big companies in Mumbai.jpg') },
  { title: "Birthday Party", image: publicPath('/Mumbai Habour/hire a yacht for birthday parties in the Mumbai harbour. vishal boat service provides end-to-end service from hiring to execution of the full party.jpg') },
  { title: "Relaxing time in sail boat", image: publicPath('/Mumbai Habour/vishal boat service provides romantic relaxing time with loved ones in a sail boat at Mumbai harbour.jpg') },
  { title: "Movie shooting", image: publicPath('/Mumbai Habour/movie gheraiya shooting in Mumbai. vishal boat service provides boats for the movie shooting. the actors and crew very happy with service_.jpg') },
  { title: "Marriage Proposal", image: publicPath('/Mumbai Habour/vishal boat service makes your Marriage proposal more special with the beautiful view of the calm sea.jpg') },
  { title: "Team building activity for corporates", image: publicPath('/Mumbai Habour/Corporate-Yacht-Sailing-team-building-activity with vishal boat service.jpg') },
];

const ALIBAGH_HOW_TO_REACH = [
  {
    title: "Speed Boat Shared",
    duration: "20-23 mins",
    boardingPoint: "Gateway of India, Jetty 5",
    capacity: "6, 10 & 12 PAX",
    price: "₹1,200/person",
    timings: "9am to 7pm",
    image: publicPath('/Alibaug ( Mandwa)/12 seater speed boat with best speed boat rental service vishal boat service for ALIBAUG MANDWA starting at rs 1200 per person_.jpg'),
  },
  {
    title: "Speed Boat Charter",
    duration: "20-23 mins",
    boardingPoint: "Gateway of India, Jetty 5",
    capacity: "6, 10 & 12 PAX",
    price: "₹7,000/boat",
    timings: "7am to 8pm",
    image: publicPath('/Alibaug ( Mandwa)/Speed Boat Ride with vishal boat Service in Mumbai at gateway of india for ALIBAUG MANDWA.jpg'),
  },
  {
    title: "Yacht",
    duration: "1 hour",
    boardingPoint: "Gateway of India, Jetty 5",
    capacity: "12-40 PAX",
    price: "₹60,000/boat",
    timings: "8am to 8pm",
    image: publicPath('/Alibaug ( Mandwa)/luxury yacht in Mumbai for a trip to ALBAUG MANDWA- hire from vishal boat service AND GET BEST SERVICE_.jpg'),
  },
  {
    title: "Wooden Ferry",
    duration: "1 hour",
    boardingPoint: "Gateway of India, Jetty 2",
    capacity: "60-80 PAX",
    price: "₹200/person (one way fare)",
    timings: "7am to 7pm",
    image: publicPath('/Alibaug ( Mandwa)/Wooden ferry at Gateway of India for ALIBAUG MANDWA 1 hour  ride in Mumbai sea.jpg'),
  },
  {
    title: "AC Ferry",
    duration: "45 mins",
    boardingPoint: "Gateway of India, Jetty 2",
    capacity: "80-200 PAX",
    price: "₹250/person (one way fare)",
    timings: "7am to 8pm",
    image: publicPath('/Alibaug ( Mandwa)/PNP FERRY TO ALIBAUG - AC FERRY.jpg'),
  },
];

const ALIBAGH_ACTIVITIES = [
  { title: "Speed Boat Ride", image: publicPath('/Alibaug ( Mandwa)/SPEED BOAT SHARING RIDE TO ALIBUAG- ECONOMICAL-rs1200 per person.jpg') },
  { title: "Beach Sunset / Sunrise", image: publicPath('/Alibaug ( Mandwa)/Alibaug-awas-beach-vishal-boat-service.jpg') },
  { title: "Fort Tours", image: publicPath('/Alibaug ( Mandwa)/Alibaug-fort-tours-vishal-boat-service.jpg') },
  { title: "Bird Feeding in sea", image: publicPath('/Alibaug ( Mandwa)/FEED THE birds on the way to ALIBAUG MANDWA that fly around your boat. book from vishal boat service_.jpg') },
  { title: "AirBNB Stays", image: publicPath('/Alibaug ( Mandwa)/aura Alibaug villa saffron stays-book tourist alibaug- vishal boat service_.jpg') },
  { title: "Restaurants By the Beach", image: publicPath('/Alibaug ( Mandwa)/by the beach Restauants at alibaug for tourist-use speed boats to visit-book vishal boat service_.jpg') },
];

const ELEPHANTA_ACTIVITIES = [
  { title: "Caves tour", image: publicPath('/Elephanta Caves/mumbai-elephanta-caves-vishal-boat-service.jpg') },
  { title: "Enroute Caves Market Shopping", image: publicPath('/Elephanta Caves/a flee market on the way uphill to the Elephanta caves- shopping for tourist- covered in the guided tours to elephanta caves by vishal boat service_.webp') },
  { title: "Toy Train Ride", image: publicPath('/Elephanta Caves/enjoy the tour train ride right after your speed boat ride at elephanta caves. tourist activity in elephanta caves_.jpg') },
  { title: "Bird Feeding in sea", image: publicPath('/Elephanta Caves/FEED THE birds on the way to Elephanta caves that fly around your boat. book from vishal boat service_.jpg') },
  { title: "Boat Ride", image: publicPath('/Elephanta Caves/Speed boat Ride to elephanta caves and enjoy the view at gateway of india on your way back-book from vishal boat service.jpg') },
];

const ELEPHANTA_HOW_TO_REACH = [
  {
    title: "Wooden Ferry",
    duration: "1 Hour each way",
    boardingPoint: "Gateway of India, Jetty 4",
    capacity: "60-80 PAX",
    price: "₹230/person",
    timings: "9am to 5pm",
    image: publicPath('/Elephanta Caves/Wooden ferry at Gateway of India for Elepahnata caves 1 hour  ride in Mumbai sea.jpg'),
  },
  {
    title: "Speed Boat Charter",
    duration: "3 Hours",
    boardingPoint: "Gateway of India, Jetty 5",
    capacity: "6, 10 & 12 PAX",
    price: "₹10,000/boat",
    timings: "8am to 2pm",
    image: publicPath('/Elephanta Caves/Speed Boat Ride with vishal boat Service in Mumbai at gateway of india for Elephanta caves_.jpg'),
  },
  {
    title: "Guided Tour in Speed Boat",
    duration: "4 Hours",
    boardingPoint: "Gateway of India, Jetty 5",
    capacity: "6, 10 & 12 PAX",
    price: "₹7,500/person",
    timings: "9am & 12pm",
    image: publicPath('/Elephanta Caves/12 seater speed boat with best speed boat rental service vishal boat service for Elephanta Caves starting at rs 8000 per person_.jpg'),
  },
  {
    title: "Yacht",
    duration: "3-4 Hours",
    boardingPoint: "Gateway of India, Jetty 5",
    capacity: "12-20 PAX",
    price: "₹70,000/boat",
    timings: "8am to 9pm",
    image: publicPath('/Elephanta Caves/luxury yacht in Mumbai for a trip to Elephanta caves- hire from vishal boat service_.jpg'),
  },
];

function createWhatsAppLink(destinationName: string) {
  const message = `Hi, I want to plan a boat booking for ${destinationName}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateStaticParams() {
  return DESTINATIONS.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    return { title: "Destination" };
  }

  return {
    title: destination.name,
    description: destination.summary,
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    notFound();
  }

  // available boats list removed (replaced by location-aware 'How to Reach' cards)

  // Prepare cards data: for Mumbai use exact provided data, otherwise derive from experiences
  const cardsToShowData = (() => {
    if (destination.slug === "mumbai") {
      return MUMBAI_HOW_TO_REACH;
    }
    if (destination.slug === "alibaug") {
      return ALIBAGH_HOW_TO_REACH;
    }
    if (destination.slug === "elephanta-caves") {
      return ELEPHANTA_HOW_TO_REACH;
    }

    const BOAT_INFO: Record<
      string,
      { title: string; image?: string; boardingPoint?: string; duration?: string; timings?: string; capacity?: string; price?: string }
    > = {
      "Wooden Ferry": {
        title: "Wooden Ferry",
        image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&h=420&fit=crop",
        boardingPoint: destination.startingPoint,
        duration: "30 mins & 1 Hour",
        timings: "4pm to 7pm",
        capacity: "60-80 PAX",
        price: "Rs. 200/person (Return Fare)",
      },
      "Speed Boat Charter": {
        title: "Speed Boat Charter",
        image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&h=420&fit=crop",
        boardingPoint: destination.startingPoint,
        duration: "30 mins & 1 Hour",
        timings: "7am to 8pm",
        capacity: "6, 10 & 12 PAX",
        price: "Starting Price: Rs. 5,000/boat",
      },
      "Speed Boat Shared": {
        title: "Speed Boat Shared",
        image: "https://images.unsplash.com/photo-1590608897129-79f6e8d8b3f1?w=600&h=420&fit=crop",
        boardingPoint: destination.startingPoint,
        duration: "30 mins & 1 Hour",
        timings: "4pm to 7pm",
        capacity: "10 & 12 PAX",
        price: "Starting Price: Rs. 500/person",
      },
      Yacht: {
        title: "Yacht",
        image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=420&fit=crop",
        boardingPoint: destination.startingPoint,
        duration: "2 Hour or more",
        timings: "7am to 8pm",
        capacity: "12-40 PAX",
        price: "Starting Price: Rs. 30,000/boat",
      },
      "Sail Boat": {
        title: "Sail Boat",
        image: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?w=600&h=420&fit=crop",
        boardingPoint: destination.startingPoint,
        duration: "2 Hour or more",
        timings: "7am to 8pm",
        capacity: "4-12 PAX",
        price: "Starting Price: Rs. 5,000/boat",
      },
    };

    const showTypes = destination.experiences.map((e) => {
      if (e.toLowerCase().includes("speed")) return "Speed Boat Shared";
      if (e.toLowerCase().includes("wooden")) return "Wooden Ferry";
      if (e.toLowerCase().includes("yacht")) return "Yacht";
      if (e.toLowerCase().includes("sail")) return "Sail Boat";
      if (e.toLowerCase().includes("ac ferry")) return "Wooden Ferry";
      if (e.toLowerCase().includes("ro-ro")) return "Wooden Ferry";
      return e;
    });

    const unique = Array.from(new Set(showTypes));

    return unique.map((type) => BOAT_INFO[type] || { title: type, boardingPoint: destination.startingPoint, duration: "Varies", timings: "Varies", capacity: "Varies", price: "Contact us" });
  })();

  return (
    <>
      <Header />
      <main className="bg-brand-secondary pt-[78px] md:pt-[110px]">
        <div className="w-full">
          <section className="w-full overflow-hidden bg-brand-primary shadow-brand-soft">
            <div className="relative min-h-[360px] w-full overflow-hidden md:min-h-[520px] lg:min-h-[640px]">
              <Image src={destination.image} alt={destination.imageAlt} fill priority className="object-cover" />
              <div className="absolute inset-0 bg-[rgba(30,41,59,0.12)]" />
              <div className="absolute inset-x-0 bottom-0 flex justify-center px-4 pb-4 md:px-8 md:pb-8">
                <div className="w-full max-w-[980px] border-[3px] border-[#b84ae5] bg-white/80 px-4 py-4 text-center shadow-[0_20px_45px_rgba(0,0,0,0.18)] backdrop-blur-sm md:px-8 md:py-6">
                  <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1d7d64] sm:text-xs md:text-sm">
                    {destination.eyebrow}
                  </p>
                  <h1 className="mt-2 text-3xl font-semibold text-[#1d7d64] sm:text-4xl md:text-5xl lg:text-7xl">
                    {destination.name}
                  </h1>
                </div>
              </div>
            </div>

            <section className="mx-auto max-w-7xl bg-[#7cbf8d] px-5 py-8 text-center text-brand-inverse sm:px-6 md:px-10 md:py-10 lg:px-14">
              <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">About {destination.name}</h2>
              <p className="mx-auto mt-4 max-w-3xl font-poppins text-sm leading-relaxed text-brand-inverse-muted sm:text-base md:text-lg">
                {destination.summary}
              </p>
            </section>
          </section>

      

          <section className="mx-auto max-w-7xl px-0 py-12 md:py-16">
            <div className="text-center">
              <p className="font-poppins text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent sm:text-sm">
                How to reach {destination.name}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-primary sm:text-4xl md:text-5xl">
                How to Reach ?
              </h2>
              <p className="mt-2 text-sm text-brand-primary-muted">Boarding Point: {destination.startingPoint}</p>
            </div>

            {/* Location-aware boat boarding cards */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {cardsToShowData.map((info) => (
                <article key={info.title} className="overflow-hidden rounded-[1.5rem] bg-brand-accent text-brand-inverse shadow-brand-soft">
                  <div className="relative h-48 sm:h-52 md:h-56">
                    <Image src={info.image || "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=420&fit=crop"} alt={info.title} fill className="object-cover" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-poppins text-xl font-semibold">{info.title}</h3>
                    <div className="mt-4 grid gap-2 font-poppins text-sm text-brand-inverse-muted">
                      <div><strong>Boarding Point:</strong> {info.boardingPoint}</div>
                      <div><strong>Ride Duration:</strong> {info.duration}</div>
                      <div><strong>Timings:</strong> {info.timings}</div>
                      <div><strong>Capacity:</strong> {info.capacity}</div>
                      <div><strong>Starting Price:</strong> {info.price}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Mobile-only collapsible dropdown with exact details */}
            <details className="mt-6 block md:hidden">
              <summary className="cursor-pointer rounded-md bg-brand-primary-translucent px-4 py-3 font-poppins font-semibold">See How to Reach details</summary>
              <div className="mt-3 space-y-4">
                {cardsToShowData.map((info) => (
                  <div key={info.title} className="rounded-md border border-brand-muted bg-brand-primary p-4">
                    <h4 className="font-poppins mb-2 text-lg font-semibold">{info.title}</h4>
                    <div className="grid gap-1 text-sm text-brand-inverse-muted">
                      <div><strong>Boarding Point:</strong> {info.boardingPoint}</div>
                      <div><strong>Ride Duration:</strong> {info.duration}</div>
                      <div><strong>Timings:</strong> {info.timings}</div>
                      <div><strong>Capacity:</strong> {info.capacity}</div>
                      <div><strong>Price:</strong> {info.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </details>

            {/* JSON-LD structured data for SEO */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "HowTo",
                  name: `How to reach ${destination.name}`,
                  description: `Options and boarding details to reach ${destination.name} by boat from ${destination.startingPoint}.`,
                  step: destination.experiences.map((exp) => ({
                    "@type": "HowToStep",
                    name: exp,
                    text: (() => {
                      const t = exp.toLowerCase();
                      if (t.includes("speed")) return `Fast transfers from ${destination.startingPoint} — ideal for quick trips and private charters.`;
                      if (t.includes("wooden")) return `Public and private ferry options from ${destination.startingPoint} for a relaxed harbour experience.`;
                      if (t.includes("yacht")) return `Premium yacht charters departing from ${destination.startingPoint}, suitable for celebrations and private groups.`;
                      if (t.includes("sail")) return `Leisure sail-boat options with flexible timing departing from ${destination.startingPoint}.`;
                      return `Boat transfer option departing from ${destination.startingPoint}.`;
                    })(),
                  })),
                }),
              }}
            />
          </section>
              <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
            <div className="text-center">
              <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">What To do at {destination.name} ?</h2>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {(() => {
                const activities =
                  destination.slug === "mumbai"
                    ? MUMBAI_ACTIVITIES
                    : destination.slug === "alibaug"
                      ? ALIBAGH_ACTIVITIES
                      : destination.slug === "elephanta-caves"
                        ? ELEPHANTA_ACTIVITIES
                        : VISIT_CARDS;
                return activities.map((act) => (
                  <article key={act.title} className="overflow-hidden rounded-[1.2rem] bg-brand-elevated shadow-brand-soft">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={act.image}
                        alt={act.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        quality={75}
                        loading="lazy"
                      />
                    </div>
                    <div className="bg-brand-accent px-3 py-3 text-center font-poppins text-xs font-semibold leading-snug text-brand-inverse sm:text-sm">
                      {act.title}
                    </div>
                  </article>
                ));
              })()}
            </div>
          </section>

          <section className="mx-auto max-w-7xl bg-brand-primary py-12 md:py-16">
            <div className="text-center">
              <p className="font-poppins text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent sm:text-sm">
                FAQs about {destination.name}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-primary sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-8 max-w-3xl mx-auto">
              {(destination.faqs || []).length === 0 ? (
                <p className="text-center text-sm text-brand-inverse-muted">No FAQs available for this location yet.</p>
              ) : (
                <div className="space-y-4">
                  {destination.faqs!.map((faq) => (
                    <details key={faq.question} className="rounded-md bg-brand-elevated p-4">
                      <summary className="cursor-pointer font-poppins font-semibold">{faq.question}</summary>
                      <div className="mt-2 whitespace-pre-line text-sm leading-6 text-black">{faq.answer}</div>
                    </details>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="mx-auto max-w-7xl bg-brand-accent px-5 py-10 text-center text-brand-inverse sm:px-6 md:px-10 md:py-12">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Book {destination.name}</h2>
            <p className="mx-auto mt-3 max-w-2xl font-poppins text-sm text-brand-inverse-muted sm:text-base">
              Send us your date, group size, and preferred boat. We will guide you with the best route and timing.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 font-poppins text-sm font-semibold sm:flex-row">
              <a href={createWhatsAppLink(destination.name)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-brand-primary transition hover:text-brand-accent">
                Book on WhatsApp
              </a>
              <Link href="/destinations" className="inline-flex items-center justify-center rounded-full border border-brand-muted px-6 py-3 text-brand-inverse transition hover:text-brand-inverse">
                See all locations
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
