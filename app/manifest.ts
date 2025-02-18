import { SITE_DESCRIPTION } from '@/lib/constants/site-metadata';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Atuksa Games Website',
		short_name: 'Atuksa Games',
		description: `${SITE_DESCRIPTION}`,
		start_url: '/',
		display: 'standalone',
		background_color: '#282525',
		theme_color: '#282525',
		icons: [
			{
				src: '/icon.svg',
				sizes: 'any',
				type: 'image/svg+xml',
			},
		],
	};
}
