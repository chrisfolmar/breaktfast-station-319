import { Helmet } from "react-helmet-async";

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "";
}

export function RestaurantStructuredData() {
  const baseUrl = getBaseUrl();

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    name: "Breakfast Station #319",
    description:
      "A charming breakfast restaurant in a converted railroad station in Somersworth, NH. Serving classic breakfast favorites with international twists, signature mimosas, and more.",
    servesCuisine: ["American", "Breakfast", "Brunch", "International"],
    priceRange: "$$",
    image: `${baseUrl}/images/hero-exterior.png`,
    telephone: "+1-603-841-5567",
    url: baseUrl || "/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 Main St",
      addressLocality: "Somersworth",
      addressRegion: "NH",
      postalCode: "03878",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.2615,
      longitude: -70.8736,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "07:00",
        closes: "15:00",
      },
    ],
    hasMenu: {
      "@type": "Menu",
      name: "Breakfast & Brunch Menu",
      description:
        "Classic eggs Benedict, omelets, international specialties, pancakes, burgers, and signature mimosas.",
      url: `${baseUrl}/menu`,
    },
    acceptsReservations: true,
    paymentAccepted: "Cash, Credit Card",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Dog Friendly Patio", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kid Friendly", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor Seating", value: true },
    ],
    sameAs: [
      "https://www.facebook.com/p/Breakfast-Station-319-100084926203677/",
      "https://www.instagram.com/breakfaststation319/",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(restaurantSchema)}
      </script>
    </Helmet>
  );
}
