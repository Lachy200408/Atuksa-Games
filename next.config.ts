import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'atuksa-catalog.onrender.com',
				port: '',
				pathname: '/images/webp/**',
			},
		],
	},

	redirects: async () => [
		{
			source: '/',
			destination: '/games/page/1',
			permanent: true,
		},
	],
};

export default nextConfig;
