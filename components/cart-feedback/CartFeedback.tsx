'use client';

import { useCartContext } from '@/contexts/cart/cart-context';

export default function CartFeedback() {
	const { cart } = useCartContext();

	return (
		<span className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 rounded-full bg-green-500 text-green-100 size-6 grid place-items-center">
			{cart.length}
		</span>
	);
}
