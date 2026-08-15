import Image from "next/image";
import Link from "next/link";
import {
  Anchor,
  Camera,
  Check,
  Clock,
  Landmark,
  LifeBuoy,
  Lock,
  Luggage,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  Plus,
  ShieldCheck,
  Ship,
  ShoppingBag,
  Sun,
  Timer,
  Train,
  Users,
  Wallet,
  Waves,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { BoatTour } from "@/lib/boatTours";

const WHATSAPP_NUMBER = "918779163152";

const TOUR_ICONS = {
  anchor: Anchor,
  camera: Camera,
  clock: Clock,
  landmark: Landmark,
  lifeBuoy: LifeBuoy,
  mapPin: MapPin,
  shield: ShieldCheck,
  shoppingBag: ShoppingBag,
  sun: Sun,
  timer: Timer,
  train: Train,
  users: Users,
  wallet: Wallet,
  waves: Waves,
  whatsapp: MessageCircle,
  zap: Zap,
} as const;

const publicPath = (p: string) => encodeURI(p);

function createWhatsAppLink(tourTitle: string) {
  const message = `Hi, I want to book a seat on the ${tourTitle}. Please share availability and timings.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function RideHighlightsSection({ data, tourTitle }: { data: NonNullable<BoatTour["rideHighlights"]>; tourTitle: string }) {
  return (
    <section aria-labelledby="ride-highlights-title" className="bg-white px-4 py-8 sm:px-6 md:px-8 md:py-10">
      <h2 id="ride-highlights-title" className="text-center text-lg font-medium text-[#1a1a1a] md:text-xl">
        {data.title}
      </h2>

      <div className="mx-auto mt-5 grid max-w-5xl gap-3 md:grid-cols-3">
        {data.items.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-[14px] border border-[#e6eee9] bg-white"
          >
            <div className="relative h-36 w-full md:h-40">
              <Image
                src={publicPath(item.image)}
                alt={`${item.title} visible during ${tourTitle}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <div className="bg-[#55B77A] px-3 py-3 text-white">
              <h3 className="text-sm font-semibold md:text-[15px]">{item.title}</h3>
              <p className="mt-1 text-[11px] leading-5 text-white/90">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function BoatTourPage({ tour }: { tour: BoatTour }) {
  const facts = [
    { icon: MapPin, label: "Route", value: tour.routeLabel },
    { icon: Clock, label: "Duration", value: tour.quickFacts.duration },
    { icon: Ship, label: "Departs", value: tour.quickFacts.departure },
    ...(tour.quickFacts.priceFrom
      ? [{ icon: Wallet, label: "Starting price", value: tour.quickFacts.priceFrom }]
      : []),
  ];
  const isMandwaSharedRide = tour.slug === "speed-boat-shared-ride-alibaug-mandwa";
  const faqHeading = tour.faqHeading ?? "FAQs about Alibaug (Mandwa)";

  return (
    <>
      <Header />
      <main className="bg-[#f3f6f4] pt-19.5 md:pt-27.5">
        <div className="mx-auto max-w-295">
          <section className="relative w-full overflow-hidden rounded-none bg-[#dfeee9] md:rounded-none">
            <div className="relative w-full" style={{ minHeight: "420px" }}>
              <Image
                src={publicPath(tour.heroImage)}
                alt={tour.heroImageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>
          </section>

          <section className="bg-[#55B77A] px-4 py-8 text-center sm:px-6 md:px-8 md:py-10">
            <h1 className="text-2xl font-semibold text-white sm:text-3xl md:text-[2rem]">
              {tour.title}
            </h1>
           <div className="space-y-2 text-center mx-auto mt-4 max-w-2xl">
            {tour.description.map((line, index) => (
              <p
                key={index}
                className="text-[10px] sm:text-xs leading-normal text-white"
              >
                {line}
              </p>
            ))}
          </div>

            <div className="mx-auto mt-8 grid max-w-5xl gap-4 text-left md:grid-cols-2">
              <div className="rounded-[18px] bg-white p-5 shadow-sm">
                <h2 className="text-base font-semibold text-[#1d1d1d] md:text-lg">
                  {tour.essentials.title}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-[#2a2a2a]">
                  {tour.essentials.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d9f3e4] text-[10px] font-bold text-[#2f9d68]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[18px] bg-white p-5 shadow-sm">
                <h2 className="text-base font-semibold text-[#1d1d1d] md:text-lg">
                  {tour.includes?.title ?? "Why Choose Vishal Boat Service"}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-[#2a2a2a]">
                  {tour.includes
                    ? tour.includes.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d9f3e4] text-[10px] font-bold text-[#2f9d68]">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))
                    : tour.whyChoose.slice(0, 10).map((item) => (
                        <li key={item.title} className="flex items-start gap-2">
                          <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d9f3e4] text-[10px] font-bold text-[#2f9d68]">
                            ✓
                          </span>
                          <span>{item.title}</span>
                        </li>
                      ))}
                </ul>
              </div>
            </div>
          </section>

          {tour.rideHighlights && (
            <RideHighlightsSection data={tour.rideHighlights} tourTitle={tour.title} />
          )}

          <section className="bg-white px-4 py-8 sm:px-6 md:px-8 md:py-10">
            <h2 className="text-center text-xl font-semibold text-[#222222] md:text-2xl">
              Destinations you can travel to:
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {tour.places.slice(0, 3).map((place) => (
                <article
                  key={place.name}
                  className="overflow-hidden rounded-[18px] bg-white shadow-[0_2px_12px_rgba(10,22,40,0.08)]"
                >
                  <div className="relative h-40 w-full md:h-44">
                    <Image
                      src={publicPath(place.image)}
                      alt={place.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-[#55B77A] px-4 py-4">
                    <h3 className="text-base font-semibold text-white md:text-lg">{place.name}</h3>
                    <p className="mt-1 text-xs leading-5 text-white/90">{place.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-[#55B77A] px-4 py-8 sm:px-6 md:px-8 md:py-10">
            <h2 className="text-center text-xl font-semibold text-white md:text-2xl">
              {faqHeading}
            </h2>

            <div className="mx-auto mt-6 max-w-4xl space-y-3">
              {tour.faqs.slice(0, 5).map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[12px] border border-white/10 bg-white/8 p-3 text-left text-white open:bg-white/10"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white md:text-[15px]">
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/40 text-base leading-none text-white">
                        +
                      </span>
                      {faq.question}
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-white/90">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91A9.85 9.85 0 0 0 12.04 2Zm0 18.03h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.25c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}
