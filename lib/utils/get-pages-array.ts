import { type Game } from '@/types/game-type';

export const getPagesArray = (games: Game[]) => {
	const { length } = games;
	const pagesCount =
		length % 6 !== 0 ? Math.floor(length / 6) + 1 : Math.floor(length / 6);
	return new Array(pagesCount).fill(0).map((_, i) => i + 1);
};
