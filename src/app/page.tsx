import { Hero } from "@/components/home/Hero";
import { FeatureRibbon } from "@/components/home/FeatureRibbon";
import { SenseOfPlace } from "@/components/home/SenseOfPlace";
import { CottagesShowcase } from "@/components/home/CottagesShowcase";
import { PoolFeatureBand } from "@/components/home/PoolFeatureBand";
import { WeddingsEvents } from "@/components/home/WeddingsEvents";
import { OccasionTiles } from "@/components/home/OccasionTiles";
import { MarqueeRibbon } from "@/components/home/MarqueeRibbon";
import { AmenitiesGrid } from "@/components/home/AmenitiesGrid";
import { Experiences } from "@/components/home/Experiences";
import { DiningTeaser } from "@/components/home/DiningTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { LocationSection } from "@/components/home/LocationSection";
import { BookingFormSection } from "@/components/home/BookingFormSection";
import { RESORT_FACTS } from "@/lib/constants";

export const metadata = {
  title: "Royal Forest Resort — Nature Resort & Wedding Destination in Kanpur",
  description: "Experience Kanpur's premier nature resort and destination wedding venue on Bithoor Road. Featuring garden cottages, a massive swimming pool, and grand lawns.",
  openGraph: {
    title: "Royal Forest Resort | Nature & Weddings",
    description: "Kanpur's premier nature resort and destination wedding venue.",
    url: "https://royalforestresort.com",
    siteName: "Royal Forest Resort",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Royal Forest Resort Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Resort",
        "name": RESORT_FACTS.name,
        "description": "Premium Nature Resort and Wedding Destination in Kanpur",
        "url": "https://royalforestresort.com",
        "telephone": RESORT_FACTS.phoneRaw,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bithoor Road",
          "addressLocality": "Kanpur",
          "addressRegion": "UP",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "26.4499", // Placeholder
          "longitude": "80.3319" // Placeholder
        },
        "starRating": {
          "@type": "Rating",
          "ratingValue": "4.5"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Swimming Pool",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Garden Cottages",
            "value": true
          }
        ],
        "priceRange": "₹₹₹"
      },
      {
        "@type": "EventVenue",
        "name": "Royal Forest Resort Weddings & Events",
        "description": "Grand open-air lawns and elegant banquets for destination weddings.",
        "url": "https://royalforestresort.com/weddings",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bithoor Road",
          "addressLocality": "Kanpur",
          "addressRegion": "UP",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <FeatureRibbon />
      <SenseOfPlace />
      <CottagesShowcase />
      <PoolFeatureBand />
      <WeddingsEvents />
      <OccasionTiles />
      <MarqueeRibbon />
      
      <AmenitiesGrid />
      <Experiences />
      <DiningTeaser />
      <Testimonials />
      
      <LocationSection />
      <BookingFormSection />
      
      <FaqAccordion />
      
    </div>
  );
}
