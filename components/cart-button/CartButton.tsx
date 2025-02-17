'use client';

import { useCartContext } from '@/contexts/cart/cart-context';
import ButtonBadge from '@/components/button-badge/ButtonBadge';
import CartPlusIcon from '@/components/icons/CartPlusIcon';
import CartCrossIcon from '@/components/icons/CartCrossIcon';

interface Props {
	id: string;
}

export default function CartButton({ id }: Props) {
	const { cart, addToCart, removeFromCart } = useCartContext();
	const isInCart = cart.includes(id);
	const handleClick = () => {
		if (isInCart) removeFromCart(id);
		else addToCart(id);
	};

	return (
		<ButtonBadge onClick={handleClick}>
			{!isInCart ? (
				<>
					Añadir <CartPlusIcon className="size-4 text-green-400" />
				</>
			) : (
				<>
					Descartar
					<CartCrossIcon className="size-4 text-red-400" />
				</>
			)}
		</ButtonBadge>
	);
}
