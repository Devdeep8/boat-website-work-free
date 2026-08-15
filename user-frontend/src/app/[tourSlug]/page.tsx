import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BoatTourPage from "@/components/BoatTourPage";
import { BOAT_TOURS, getBoatTour } from "@/lib/boatTours";

type TourPageProps = {
  params: Promise<{ tourSlug: string }>;
};

const SITE_URL = "https://vishalboatservice.com";

export function generateStaticParams() {
  return BOAT_TOURS.map((tour) => ({ tourSlug: tour.slug }));
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const { tourSlug } = await params;
  const tour = getBoatTour(tourSlug);

  if (!tour) {
    return { title: "Boat tour" };
  }

  return {
    title: tour.seo.title,
    description: tour.seo.description,
    keywords: tour.seo.keywords,
    alternates: { canonical: `${SITE_URL}/${tour.slug}` },
    openGraph: {
      title: tour.seo.title,
      description: tour.seo.description,
      images: [{ url: encodeURI(tour.heroImage), alt: tour.heroImageAlt }],
    },
  };
}

export default async function TourPage({ params }: TourPageProps) {
  const { tourSlug } = await params;
  const tour = getBoatTour(tourSlug);

  if (!tour) {
    notFound();
  }

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: tour.title,
      description: tour.seo.description,
      touristType: ["Families", "Tourists", "Weekend travellers"],
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: tour.routeFrom },
          { "@type": "ListItem", position: 2, name: tour.routeTo },
        ],
      },
      provider: {
        "@type": "TravelAgency",
        name: "Vishal Boat Service",
        telephone: "+91 87791 63152",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE_URL}/destinations` },
        { "@type": "ListItem", position: 3, name: tour.title, item: `${SITE_URL}/${tour.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: tour.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  // Product/Offer schema only when real pricing is available for this tour.
  if (tour.quickFacts.priceFrom) {
    const priceValue = Number(
      tour.quickFacts.priceFrom.replace(/[^\d]/g, ""),
    );
    if (Number.isFinite(priceValue) && priceValue > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Product",
        name: tour.title,
        description: tour.seo.description,
        brand: { "@type": "Brand", name: "Vishal Boat Service" },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: priceValue,
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/${tour.slug}`,
        },
      });
    }
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <BoatTourPage tour={tour} />
    </>
  );
}
