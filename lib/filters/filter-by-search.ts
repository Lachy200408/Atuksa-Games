import { type Game } from '@/types/game-type';

interface Props {
	games: Game[];
	search: string | null;
}

export const filterBySearch = ({ games, search }: Props) => {
	if (!search) return games;
	return games.filter((game) =>
		game.name.toLowerCase().includes(search.toLowerCase()),
	);
};
