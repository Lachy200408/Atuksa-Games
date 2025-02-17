import { createContext, useContext } from 'react';

export interface NotificationsContextType {
	notifications: { notification: string; id: string }[];
	addNotification: ({ notification }: { notification: string }) => void;
	removeNotification: ({ id }: { id: string }) => void;
}

const notificationsContextDefaultValue: NotificationsContextType = {
	notifications: [],
	addNotification: () => {},
	removeNotification: () => {},
};

export const notificationsContext = createContext<NotificationsContextType>(
	notificationsContextDefaultValue,
);
export const useNotificationsContext = () => useContext(notificationsContext);
