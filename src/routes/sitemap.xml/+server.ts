import { services, projects } from '$lib/data/content';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const staticRoutes = [
		{ path: '/', changefreq: 'weekly', priority: '1.0' },
		{ path: '/diensten', changefreq: 'monthly', priority: '0.9' },
		...services.map((s) => ({ path: `/diensten/${s.slug}`, changefreq: 'monthly', priority: '0.8' })),
		{ path: '/portfolio', changefreq: 'monthly', priority: '0.8' },
		...projects.map((p) => ({ path: `/portfolio/${p.slug}`, changefreq: 'monthly', priority: '0.7' })),
		{ path: '/proces', changefreq: 'monthly', priority: '0.7' },
		{ path: '/contact', changefreq: 'monthly', priority: '0.8' },
		{ path: '/blog', changefreq: 'daily', priority: '0.8' }
	];

	// TODO: Fetch dynamic article slugs from Kontent.ai when configured
	const articleSlugs: string[] = [];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
	.map(
		(route) => `  <url>
    <loc>https://vdvtuinen.nl${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
	)
	.join('\n')}
${articleSlugs
	.map(
		(slug) => `  <url>
    <loc>https://vdvtuinen.nl/blog/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
