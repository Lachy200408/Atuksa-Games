'use client';

import type { Game } from '@/types/game-type';
import HeadingColorizedText from '@/components/heading-colorized-text/HeadingColorizedText';
import { PROMOTIONS } from '@/lib/constants/promotions';
import {
	MUNICIPALITIES,
	MUNICIPALITY_INCOME,
} from '@/lib/constants/municipalities';
import { useState } from 'react';

interface Props {
	gamesData: Game[];
}

export default function Check({ gamesData }: Props) {
	const [deliveryIncome, setDeliveryIncome] = useState<number>(
		MUNICIPALITY_INCOME[MUNICIPALITIES.HABANA_VIEJA],
	);

	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const select = event.currentTarget;
		setDeliveryIncome(+select.value);
	};

	const totalPrice = gamesData.reduce((acc, game) => acc + game.price, 0);
	const totalDiscountArray = PROMOTIONS.map(({ title, discountFn }) => ({
		title,
		value: discountFn(gamesData.length, totalPrice),
	}));
	const totalDiscountIncome = totalDiscountArray.reduce(
		(acc, discount) => acc + discount.value,
		0,
	);

	const totalIncome = totalPrice - totalDiscountIncome + deliveryIncome;

	return (
		<div className="flex flex-col items-center w-full max-w-3xl gap-4 p-8 rounded-box border border-dashed border-primary-600/25">
			<HeadingColorizedText className="text-center">
				Importe de la compra
			</HeadingColorizedText>

			{/** Juegos */}

			<h4 className="w-full">Juegos:</h4>
			{gamesData.map((game) => (
				<h5
					key={game.id}
					className="indent-4 flex justify-between w-full py-2 border-b border-primary-600/25 border-dashed opacity-75"
				>
					<span>
						{game.name} ({game.code})
					</span>
					<span className="text-end">{game.price.toFixed(2)} CUP</span>
				</h5>
			))}
			<h4 className="indent-2 flex justify-between w-full py-2 border-b border-primary-600/25 border-dashed">
				<span>Importe total de juegos:</span>
				<span className="text-end">{totalPrice.toFixed(2)} CUP</span>
			</h4>

			{/** Descuentos */}

			<h4 className="w-full">Descuentos:</h4>
			{totalDiscountArray.map((promotion, index) => (
				<h5
					key={index}
					className="indent-4 flex justify-between w-full py-2 border-b border-primary-600/25 border-dashed opacity-75"
				>
					<span>{promotion.title}</span>
					<span className="text-end">(-){promotion.value.toFixed(2)} CUP</span>
				</h5>
			))}
			<h4 className="indent-2 flex justify-between w-full py-2 border-b border-primary-600/25 border-dashed">
				<span>Importe total de descuentos:</span>
				<span className="text-end">{totalDiscountIncome.toFixed(2)} CUP</span>
			</h4>

			{/** Mensajería */}

			<h4 className="flex justify-between w-full py-2 border-b border-primary-600/25 border-dashed">
				Importe de mensajería (opcional):
			</h4>
			<div className="ps-4 flex justify-between w-full py-2 border-b border-primary-600/25 border-dashed opacity-75">
				<select
					onChange={onChange}
					className="bg-transparent after:bg-transparent focus:outline-none md:text-xl overflow-hidden text-ellipsis text-nowrap"
				>
					{Object.entries(MUNICIPALITY_INCOME).map(([municipality, income]) => (
						<option key={municipality} value={income}>
							{municipality}
						</option>
					))}
				</select>
				<span className="text-end">{deliveryIncome} CUP</span>
			</div>

			{/** Total */}

			<h4 className="flex justify-between w-full py-2 border-b border-primary-600/25 border-dashed">
				<span>Total:</span>
				<span className="text-end">{totalIncome.toFixed(2)} CUP</span>
			</h4>
		</div>
	);
}
