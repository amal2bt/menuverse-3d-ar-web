import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  canonicalUrl?: string;
};

const SITE_URL = "https://menuverse.example.com";

export function Seo({ title, description, path = "/", canonicalUrl }: SeoProps) {
  const canonical = canonicalUrl ?? `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Menuverse" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

function jsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function SoftwareApplicationLd() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {jsonLd({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Menuverse",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "TRY",
          },
          description: "Turkey's 3D & AR QR menu platform for restaurants.",
        })}
      </script>
    </Helmet>
  );
}

export function OrganizationLd() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {jsonLd({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Menuverse",
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
          sameAs: [],
        })}
      </script>
    </Helmet>
  );
}

export function HowToLd() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {jsonLd({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Set up your 3D menu with Menuverse",
          step: [
            { "@type": "HowToStep", position: 1, name: "Prepare your menu content" },
            { "@type": "HowToStep", position: 2, name: "Activate QR & 3D" },
            { "@type": "HowToStep", position: 3, name: "Go live" },
          ],
        })}
      </script>
    </Helmet>
  );
}

export function FaqPageLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {jsonLd({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })}
      </script>
    </Helmet>
  );
}
