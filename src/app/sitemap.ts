import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';

// Required for `output: export` — emit a static sitemap.xml at build time.
export const dynamic = 'force-static';

// Public routes only — the /admin area is intentionally excluded. Trailing
// slashes match `trailingSlash: true` in next.config.ts so URLs are canonical.
const ROUTES: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/programs/', priority: 0.9 },
  { path: '/programs/fashion-and-design/', priority: 0.8 },
  { path: '/programs/beauty-therapy/', priority: 0.8 },
  { path: '/programs/driving-mechanics/', priority: 0.8 },
  { path: '/programs/computer-training/', priority: 0.8 },
  { path: '/about/', priority: 0.7 },
  { path: '/impact/', priority: 0.7 },
  { path: '/get-involved/', priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }));
}
