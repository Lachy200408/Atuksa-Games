import { NEXT_PUBLIC_URL } from '@/lib/constants/env-data';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/',
		},
		sitemap: NEXT_PUBLIC_URL + '/sitemap.xml',
	};
}
