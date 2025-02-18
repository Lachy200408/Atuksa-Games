import type { Metadata } from 'next';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants/site-metadata';
import Header from '@/components/header/Header';
import BackgroundIcon from '@/components/background-icon/BackgroundIcon';
import NotificationsProviders from '@/providers/notifications/NotificationsProviders';
import CartProvider from '@/providers/cart/CartProvider';
import { inter } from '@/lib/fonts/fonts';
import './globals.css';
import { cn } from '@/lib/utils/cn';
import Notifications from '@/components/notifications/Notifications';
import BackgroundLines from '@/components/background-lines/BackgroundLines';
import { NEXT_PUBLIC_URL } from '@/lib/constants/env-data';

export const metadata: Metadata = {
	title: SITE_NAME,
	description: SITE_DESCRIPTION,
	authors: [
		{
			name: 'Lázaro Parra González',
			url: 'https://lazaroparradev.onrender.com',
		},
	],
	icons: {
		icon: '/icon.svg',
		shortcut: '/icon.svg',
	},
	category: 'games, ecommerce, shopping',
	referrer: 'origin',
	openGraph: {
		type: 'website',
		locale: 'es',
		url: NEXT_PUBLIC_URL,
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-background text-foreground">
			<body className={cn('flex flex-col min-h-screen', inter.className)}>
				<BackgroundLines />
				<BackgroundIcon />
				<NotificationsProviders>
					<Notifications />
					<CartProvider>
						<Header />
						<main className="flex-1 flex flex-col">{children}</main>
					</CartProvider>
				</NotificationsProviders>
			</body>
		</html>
	);
}
