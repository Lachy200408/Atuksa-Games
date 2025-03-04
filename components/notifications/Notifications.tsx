'use client';

import { useNotificationsContext } from '@/contexts/notifications/notifications-context';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Badge from '@/components/badge/Badge';

export default function Notifications() {
	const { notifications, removeNotification } = useNotificationsContext();

	if (!notifications?.length) return null;

	return (
		<section className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1000] w-full px-4">
			<ul className="flex flex-col items-start gap-2 w-full">
				{notifications.map(({ notification, id }) => (
					<li key={id}>
						<Badge className="justify-between max-w-2xl text-wrap gap-4 max-lg:rounded-box">
							{notification}
							<button
								onClick={() => removeNotification({ id })}
								className="bg-none border-none"
							>
								<XMarkIcon className="size-5" />
							</button>
						</Badge>
					</li>
				))}
			</ul>
		</section>
	);
}
