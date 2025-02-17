'use client';

import ButtonBadge from '@/components/button-badge/ButtonBadge';
import CartFeedback from '../cart-feedback/CartFeedback';
import { useCartContext } from '@/contexts/cart/cart-context';
import { useNotificationsContext } from '@/contexts/notifications/notifications-context';
import { filterById } from '@/lib/filters/filter-by-id';
import { games } from '@/lib/mocks/games';

interface Props {
	className?: string;
}

export default function OrderBuy({ className }: Props) {
	const { cart } = useCartContext();
	const { addNotification } = useNotificationsContext();
	const gamesCodeArray = filterById({ games, ids: cart }).map(
		(game) => game.code,
	);

	const orderBuy = () => {
		if (!cart?.length) {
			return addNotification({
				notification: 'No hay juegos para comprar, añádelos al carrito primero',
			});
		}

		const text = `
		Hola, quisiera pedir los siguientes juegos:\n${gamesCodeArray
			.map((name) => `- ${name}`)
			.join('\n')}\nMis datos:\n
	`;
		const url = 'https://wa.me/+5353299466?text=' + encodeURIComponent(text);

		window.open(url, '_blank');
	};

	return (
		<ButtonBadge onClick={orderBuy} className={className}>
			Ordena tu compra
			<CartFeedback />
		</ButtonBadge>
	);
}
