import type { Promotion } from '@/types/promotion-type';
import { discountForMoreThanTenGames } from '@/lib/discounts/discounts';
import { DISCOUNT_VALUES } from '@/lib/constants/discount-values';

export const PROMOTIONS: Promotion[] = [
	{
		id: 'promotion-1',
		title: 'Descuento del 5% por compra de más de 10 juegos',
		description:
			'Recibe un descuento del 5% sobre el importe de la compra de más de 10 juegos.',
		value: DISCOUNT_VALUES.FIVE_PERCENT,
		discountFn: discountForMoreThanTenGames,
	},
];
