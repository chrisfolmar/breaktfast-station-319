import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export function SEO({ title, description, path = "" }: SEOProps) {
  const fullTitle = `${title} | Breakfast Station #319`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="restaurant" />
      <meta property="og:locale" content="en_US" />
    </Helmet>
  );
}
