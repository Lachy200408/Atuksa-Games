export interface Promotion {
	id: string;
	title: string;
	description: string;
	value: number;
	discountFn: (totalItems: number, totalPrice: number) => number;
}
