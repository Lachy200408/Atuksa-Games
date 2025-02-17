import { Game } from '@/types/game-type';

export const getGameSlice = (games: Game[], index: number) => {
	if (index < 1) {
		return [];
	}
	const offset = (index - 1) * 6;
	const num = 6;
	const gameData = games.slice(offset, offset + num);
	return gameData;
};

export const getGameById = (games: Game[], id: string) => {
	const gameData = games.find((game) => game.id === id);
	return gameData;
};
