import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DESTINATIONS } from "@/lib/destinations";

export const metadata = {
  title: "Destinations",
  description: "Explore Mumbai Boat Charters destinations including Mumbai, Alibaug, Elephanta Caves, Goa, and Kerala.",
};

export default function DestinationsPage() {
  const featured = DESTINATIONS[0];

  return (
    <>
      <Header />
      <main className="pt-[96px] md:pt-[120px] bg-brand-primary">
        <section className="bg-brand-hero px-4 py-16 md:py-24 text-brand-inverse">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="font-poppins text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
                Locations
              </p>
              <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
                Pick the water route that fits your day.
              </h1>
              <p className="mt-6 max-w-2xl font-poppins text-lg leading-relaxed text-brand-inverse-muted">
                From Mumbai harbour rides to Mandwa transfers and island tours, every location page is designed to help guests understand the route, timing, and best boat option quickly.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 font-poppins text-sm font-semibold">
                <Link href="/contact" className="rounded-full bg-brand-accent px-6 py-3 text-brand-inverse hover:bg-brand-accent-hover hover:text-brand-inverse">
                  Plan a Booking
                </Link>
                <Link href="/packages" className="rounded-full border border-brand-muted px-6 py-3 text-brand-inverse hover:text-brand-inverse">
                  View Packages
                </Link>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-brand-soft md:min-h-[520px]">
              <Image src={featured.image} alt={featured.imageAlt} fill priority className="object-cover" />
              <div className="absolute inset-0 bg-brand-image-scrim" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] bg-brand-primary-translucent p-5 backdrop-blur font-poppins text-brand-primary">
                <p className="text-sm font-semibold text-brand-accent">Featured route</p>
                <p className="mt-1 text-2xl font-semibold">{featured.name}</p>
                <p className="mt-2 text-sm text-brand-secondary">{featured.bestFor}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-panel px-4 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="font-poppins text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
                Available now
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-brand-primary md:text-5xl">
                Location pages
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {DESTINATIONS.map((destination) => (
                <Link
                  key={destination.slug}
                  href={`/destinations/${destination.slug}`}
                  className="group overflow-hidden rounded-[1.75rem] border border-brand-muted bg-brand-primary shadow-brand-soft"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image src={destination.image} alt={destination.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="font-poppins text-xs font-semibold uppercase tracking-[0.24em] text-brand-accent">
                      {destination.eyebrow}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold text-brand-primary">{destination.name}</h3>
                    <p className="mt-3 font-poppins text-sm leading-relaxed text-brand-secondary">
                      {destination.summary}
                    </p>
                    <p className="mt-5 font-poppins text-sm font-semibold text-brand-accent">
                      Explore destination
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
