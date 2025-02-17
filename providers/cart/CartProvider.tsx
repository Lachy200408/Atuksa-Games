'use client';

import { cartContext } from '@/contexts/cart/cart-context';
import { useNotificationsContext } from '@/contexts/notifications/notifications-context';
import { useState, useEffect } from 'react';

interface Props {
	children: React.ReactNode;
}

export default function CartProvider({ children }: Props) {
	const { addNotification } = useNotificationsContext();
	const [cart, setCart] = useState<string[]>([]);

	const addToCart = (gameId: string) => {
		addNotification({
			notification: 'Se agregó el juego al carrito exitosamente',
		});
		setCart([...cart, gameId]);
	};

	const removeFromCart = (gameId: string) => {
		addNotification({
			notification: 'Se eliminó el juego del carrito exitosamente',
		});
		setCart(cart.filter((id) => id !== gameId));
	};

	useEffect(() => {
		const storedCart = localStorage.getItem('cart');
		if (storedCart) setCart(JSON.parse(storedCart));
	}, []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	return (
		<cartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
			}}
		>
			{children}
		</cartContext.Provider>
	);
}
