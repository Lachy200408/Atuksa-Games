'use client';

import CardList from '@/components/card-list/CardList';
import Check from '@/components/check/Check';
import HorizontalSeparator from '@/components/separator/HorizontalSeparator';
import { useCartContext } from '@/contexts/cart/cart-context';
import { filterById } from '@/lib/filters/filter-by-id';
import { games } from '@/lib/mocks/games';
import { notFound } from 'next/navigation';

export default function CartPage() {
	const { cart } = useCartContext();
	const gamesData = filterById({ games, ids: cart });

	if (!gamesData?.length) notFound();

	return (
		<>
			<CardList gamesData={gamesData} />
			<HorizontalSeparator className="my-2 w-4/5 max-w-3xl" />
			<Check gamesData={gamesData} />
		</>
	);
}
