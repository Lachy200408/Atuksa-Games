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

export const metadata: Metadata = {
	title: SITE_NAME,
	description: SITE_DESCRIPTION,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-background text-foreground">
			<body className={cn('flex flex-col min-h-screen', inter.className)}>
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
