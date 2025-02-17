'use client';

import {
	notificationsContext,
	NotificationsContextType,
} from '@/contexts/notifications/notifications-context';
import { useEffect, useState } from 'react';

interface Props {
	children: React.ReactNode;
}

export default function NotificationsProviders({ children }: Props) {
	const [notifications, setNotifications] = useState<
		NotificationsContextType['notifications']
	>([]);

	const removeNotification = ({ id }: { id: string }) => {
		setNotifications((prevNotifications) =>
			prevNotifications.filter((notification) => notification.id !== id),
		);
	};

	const addNotification = ({ notification }: { notification: string }) => {
		const id = crypto.randomUUID();

		setNotifications((prevNotifications) => [
			...prevNotifications,
			{ notification, id },
		]);

		setTimeout(() => {
			removeNotification({ id });
		}, 5000);
	};

	useEffect(() => {
		const storedNotifications = localStorage.getItem('notifications');
		if (storedNotifications) setNotifications(JSON.parse(storedNotifications));
	}, []);

	useEffect(() => {
		localStorage.setItem('notifications', JSON.stringify(notifications));
	}, [notifications]);

	return (
		<notificationsContext.Provider
			value={{ notifications, addNotification, removeNotification }}
		>
			{children}
		</notificationsContext.Provider>
	);
}
