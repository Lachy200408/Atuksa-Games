import { NEXT_PUBLIC_URL } from '@/lib/constants/env-data';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: NEXT_PUBLIC_URL,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: NEXT_PUBLIC_URL + '/games',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: NEXT_PUBLIC_URL + '/games/page/1',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: NEXT_PUBLIC_URL + '/cart',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	];
}
