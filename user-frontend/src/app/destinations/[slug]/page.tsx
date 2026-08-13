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

const BOAT_CARDS = [
  {
    name: "Wooden Ferry",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&h=420&fit=crop",
    details: ["Classic harbour ride", "Best for sightseeing", "Group friendly"],
  },
  {
    name: "AC Ferry",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=420&fit=crop",
    details: ["Comfortable seating", "Cool cabin travel", "Family friendly"],
  },
  {
    name: "Speed Boat",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&h=420&fit=crop",
    details: ["Quick transfers", "Private route", "Flexible timing"],
  },
  {
    name: "Yachts",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&h=420&fit=crop",
    details: ["Premium charter", "Celebration ready", "Crew assisted"],
  },
  {
    name: "Sail boat",
    image: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?w=600&h=420&fit=crop",
    details: ["Calm sailing", "Photo friendly", "Relaxed pace"],
  },
  {
    name: "Ro-Ro Ship",
    image: "https://images.unsplash.com/photo-1575376194708-31aef9d9388f?w=600&h=420&fit=crop",
    details: ["Large transfer", "Vehicle route", "Mandwa option"],
  },
];

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

const REVIEWS = [
  {
    name: "Amit Shah",
    quote: "Clean boat, helpful crew, and the route was planned nicely for our group.",
  },
  {
    name: "Neha Mehta",
    quote: "Booking on WhatsApp was simple and the harbour ride felt smooth from start to finish.",
  },
  {
    name: "Rohan Dsouza",
    quote: "Great views, punctual pickup, and a very comfortable experience for the family.",
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

  const availableBoats = BOAT_CARDS.filter((boat) => destination.experiences.includes(boat.name));

  return (
    <>
      <Header />
      <main className="bg-brand-secondary pt-[78px] md:pt-[110px]">
        <div className="w-full">
          <section className="w-full overflow-hidden bg-brand-primary shadow-brand-soft">
            <div className="relative min-h-[360px] w-full overflow-hidden md:min-h-[520px] lg:min-h-[640px]">
              <Image src={destination.image} alt={destination.imageAlt} fill priority className="object-cover" />
              <div className="absolute inset-0 bg-brand-image-scrim" />
              <div className="absolute inset-x-4 bottom-4 md:inset-x-8 md:bottom-8 lg:inset-x-10 lg:bottom-10">
                <div className="mx-auto max-w-5xl rounded-[1.5rem] bg-brand-primary-translucent px-5 py-4 text-center backdrop-blur-sm md:px-8 md:py-6">
                  <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-accent sm:text-xs md:text-sm">
                    {destination.eyebrow}
                  </p>
                  <h1 className="mt-2 text-3xl font-semibold text-brand-primary sm:text-4xl md:text-5xl lg:text-7xl">
                    {destination.name}
                  </h1>
                </div>
              </div>
            </div>

            <section className="mx-auto max-w-7xl bg-brand-accent px-5 py-8 text-center text-brand-inverse sm:px-6 md:px-10 md:py-10 lg:px-14">
              <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">About {destination.name}</h2>
              <p className="mx-auto mt-4 max-w-3xl font-poppins text-sm leading-relaxed text-brand-inverse-muted sm:text-base md:text-lg">
                {destination.summary}
              </p>
              <div className="mt-7 grid gap-3 text-left font-poppins text-sm md:grid-cols-3">
                <div className="rounded-[1.25rem] bg-brand-primary-translucent p-4 text-brand-primary">
                  <span className="mb-2 block font-semibold">Duration</span>
                  {destination.duration}
                </div>
                <div className="rounded-[1.25rem] bg-brand-primary-translucent p-4 text-brand-primary">
                  <span className="mb-2 block font-semibold">Start point</span>
                  {destination.startingPoint}
                </div>
                <div className="rounded-[1.25rem] bg-brand-primary-translucent p-4 text-brand-primary">
                  <span className="mb-2 block font-semibold">Best for</span>
                  {destination.bestFor}
                </div>
              </div>
            </section>
          </section>

          <section className="mx-auto max-w-7xl px-0 py-12 md:py-16">
            <div className="text-center">
              <p className="font-poppins text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent sm:text-sm">
                Boats available at {destination.name}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-primary sm:text-4xl md:text-5xl">
                Choose your boat type
              </h2>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {availableBoats.map((boat) => (
                <article key={boat.name} className="overflow-hidden rounded-[1.5rem] bg-brand-accent text-brand-inverse shadow-brand-soft">
                  <div className="relative h-48 sm:h-52 md:h-56">
                    <Image src={boat.image} alt={boat.name} fill className="object-cover" />
                  </div>
                  <div className="p-5 text-center sm:p-6">
                    <h3 className="font-poppins text-xl font-semibold">{boat.name}</h3>
                    <ul className="mt-4 space-y-2 font-poppins text-xs leading-relaxed text-brand-inverse-muted sm:text-sm">
                      {boat.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl bg-brand-primary py-12 md:py-16">
            <div className="text-center">
              <p className="font-poppins text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent sm:text-sm">
                Want to do at {destination.name}?
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-primary sm:text-4xl md:text-5xl">
                Plan your experience
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {VISIT_CARDS.map((card) => (
                <article key={card.title} className="overflow-hidden rounded-[1.2rem] bg-brand-elevated shadow-brand-soft">
                  <div className="relative aspect-square">
                    <Image src={card.image} alt={card.title} fill className="object-cover" />
                  </div>
                  <div className="bg-brand-accent px-3 py-3 text-center font-poppins text-xs font-semibold leading-snug text-brand-inverse sm:text-sm">
                    {card.title}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl bg-brand-primary py-12 md:py-16">
            <div className="text-center">
              <p className="font-poppins text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent sm:text-sm">
                Review of our clients
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-primary sm:text-4xl md:text-5xl">
                Guests love the ride
              </h2>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {REVIEWS.map((review) => (
                <article key={review.name} className="rounded-[1.5rem] border border-brand-muted bg-brand-primary p-5 text-center shadow-brand-soft md:p-6">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-elevated font-poppins text-xl font-bold text-brand-accent">
                    &ldquo;
                  </div>
                  <p className="mt-4 font-poppins text-sm leading-relaxed text-brand-secondary sm:text-base">
                    {review.quote}
                  </p>
                  <p className="mt-4 font-poppins text-sm font-semibold text-brand-primary">{review.name}</p>
                </article>
              ))}
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
