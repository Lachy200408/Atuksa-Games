'use client';

import CardList from '@/components/card-list/CardList';
import HeadingColorizedText from '@/components/heading-colorized-text/HeadingColorizedText';
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
			<div className="flex flex-col items-center w-full max-w-3xl gap-4 p-8 rounded-box border border-dashed border-primary-600/25">
				<HeadingColorizedText className="text-center">
					Importe de la compra
				</HeadingColorizedText>
				<h4 className="w-full">Juegos:</h4>
				{gamesData.map((game) => (
					<h5
						key={game.id}
						className="indent-4 flex justify-between w-full py-2 border-b border-primary-600/25 border-dashed"
					>
						<span>
							{game.name} ({game.code})
						</span>
						<span className="text-end">{game.price.toFixed(2)} CUP</span>
					</h5>
				))}
				<h4 className="flex justify-between w-full py-2 border-b border-primary-600/25 border-dashed">
					<span>Total:</span>
					<span className="text-end">
						{gamesData.reduce((acc, game) => acc + game.price, 0).toFixed(2)}{' '}
						CUP
					</span>
				</h4>
			</div>
		</>
	);
}
