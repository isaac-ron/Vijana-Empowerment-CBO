/**
 * Centralized SEO helpers. Next.js merges metadata *shallowly* — a page that
 * sets its own `openGraph`/`twitter` object replaces the root one entirely
 * (see node_modules/next/dist/docs/.../generate-metadata.md "Merging"). So we
 * build complete per-page objects here to keep the shared image, site name,
 * and card type consistent across every route.
 */
import type { Metadata } from 'next';

export const SITE = {
  name: 'Vijana Empowerment Initiative',
  url: 'https://www.vijanaempowerment.org',
  description:
    'A community-based organization in Sotik Sub-County, Bomet County, providing vocational training, mentorship, and entrepreneurship support to vulnerable youth.',
  locale: 'en_US',
  email: 'hello@vijanaempowerment.org',
} as const;

/** Build a 1200×630 social-share image URL from an Unsplash photo id. */
export function ogImg(id: string): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&h=630&q=80`;
}

// Default share image: the hero portrait (IMG.portrait).
export const DEFAULT_OG_IMAGE = ogImg('1531123897727-8f129e1688ce');

type PageMetaInput = {
  /** Short page title; the brand suffix is added by the root title template. */
  title: string;
  description: string;
  /** Route path with trailing slash to match `trailingSlash: true`, e.g. '/about/'. */
  path: string;
  /** Absolute share-image URL; defaults to the site hero. */
  image?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: PageMetaInput): Metadata {
  const ogTitle = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale: SITE.locale,
      url: path,
      title: ogTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [image],
    },
  };
}

/**
 * Organization (NGO) structured data, rendered once site-wide in the root
 * layout. Helps search engines associate the name, logo, location, and contact
 * for a richer result / knowledge panel.
 */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: SITE.name,
  alternateName: 'Vijana Empowerment',
  url: SITE.url,
  logo: `${SITE.url}/apple-icon.png`,
  image: DEFAULT_OG_IMAGE,
  description: SITE.description,
  email: SITE.email,
  foundingLocation: 'Sotik Sub-County, Bomet County, Kenya',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Bomet County, Kenya',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sotik Town Center',
    addressRegion: 'Bomet County',
    addressCountry: 'KE',
  },
  knowsAbout: [
    'Vocational training',
    'Youth empowerment',
    'Fashion and design',
    'Beauty therapy',
    'Computer training',
    'Driving and mechanics',
  ],
} as const;
