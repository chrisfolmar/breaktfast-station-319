import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const SITE_NAME = "Breakfast Station #319";
const DEFAULT_IMAGE = "/images/hero-exterior.png";

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "";
}

export function SEO({ title, description, path = "", image }: SEOProps) {
  const baseUrl = getBaseUrl();
  const fullTitle = title === "Home"
    ? `${SITE_NAME} | Classic Breakfast & Brunch in Somersworth, NH`
    : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${baseUrl}${path}`;
  const ogImage = `${baseUrl}${image || DEFAULT_IMAGE}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="restaurant" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${SITE_NAME} - ${title}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} - ${title}`} />
    </Helmet>
  );
}
