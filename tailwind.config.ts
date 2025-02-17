import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./lib/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				moving: 'moving 5s linear infinite alternate',
			},
			keyframes: {
				moving: {
					'0%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(50%)' },
				},
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				custom_blue: {
					600: 'var(--blue-600)',
				},
				custom_green: {
					600: 'var(--green-600)',
				},
				custom_red: {
					600: 'var(--red-600)',
				},
				primary: {
					100: 'var(--primary-100)',
					'100/5': 'color-mix(in srgb, var(--primary-100) 5%, transparent)',
					'100/10': 'color-mix(in srgb, var(--primary-100) 10%, transparent)',
					'100/25': 'color-mix(in srgb, var(--primary-100) 25%, transparent)',
					'100/50': 'color-mix(in srgb, var(--primary-100) 50%, transparent)',
					'100/75': 'color-mix(in srgb, var(--primary-100) 75%, transparent)',
					200: 'var(--primary-200)',
					'200/5': 'color-mix(in srgb, var(--primary-200) 5%, transparent)',
					'200/10': 'color-mix(in srgb, var(--primary-200) 10%, transparent)',
					'200/25': 'color-mix(in srgb, var(--primary-200) 25%, transparent)',
					'200/50': 'color-mix(in srgb, var(--primary-200) 50%, transparent)',
					'200/75': 'color-mix(in srgb, var(--primary-200) 75%, transparent)',
					400: 'var(--primary-400)',
					'400/5': 'color-mix(in srgb, var(--primary-400) 5%, transparent)',
					'400/10': 'color-mix(in srgb, var(--primary-400) 10%, transparent)',
					'400/25': 'color-mix(in srgb, var(--primary-400) 25%, transparent)',
					'400/50': 'color-mix(in srgb, var(--primary-400) 50%, transparent)',
					'400/75': 'color-mix(in srgb, var(--primary-400) 75%, transparent)',
					600: 'var(--primary-600)',
					'600/5': 'color-mix(in srgb, var(--primary-600) 5%, transparent)',
					'600/10': 'color-mix(in srgb, var(--primary-600) 10%, transparent)',
					'600/25': 'color-mix(in srgb, var(--primary-600) 25%, transparent)',
					'600/50': 'color-mix(in srgb, var(--primary-600) 50%, transparent)',
					'600/75': 'color-mix(in srgb, var(--primary-600) 75%, transparent)',
					800: 'var(--primary-800)',
					'800/5': 'color-mix(in srgb, var(--primary-800) 5%, transparent)',
					'800/10': 'color-mix(in srgb, var(--primary-800) 10%, transparent)',
					'800/25': 'color-mix(in srgb, var(--primary-800) 25%, transparent)',
					'800/50': 'color-mix(in srgb, var(--primary-800) 50%, transparent)',
					'800/75': 'color-mix(in srgb, var(--primary-800) 75%, transparent)',
					900: 'var(--primary-900)',
					'900/5': 'color-mix(in srgb, var(--primary-900) 5%, transparent)',
					'900/10': 'color-mix(in srgb, var(--primary-900) 10%, transparent)',
					'900/25': 'color-mix(in srgb, var(--primary-900) 25%, transparent)',
					'900/50': 'color-mix(in srgb, var(--primary-900) 50%, transparent)',
					'900/75': 'color-mix(in srgb, var(--primary-900) 75%, transparent)',
				},
			},
		},
	},
	plugins: [daisyui],
} satisfies Config;
