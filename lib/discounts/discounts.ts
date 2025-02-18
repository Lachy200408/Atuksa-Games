import { DISCOUNT_VALUES } from '@/lib/constants/discount-values';

export const discountForMoreThanTenGames = (
	totalItems: number,
	totalPrice: number,
) => {
	return totalItems > 10 ? totalPrice * DISCOUNT_VALUES.FIVE_PERCENT : 0;
};
