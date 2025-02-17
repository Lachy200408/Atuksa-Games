import { Game } from '@/types/game-type';

interface Props {
	games: Game[];
	ids: string[];
}

export const filterById = ({ games, ids }: Props) => {
	return games.filter((game) => ids.includes(game.id));
};
