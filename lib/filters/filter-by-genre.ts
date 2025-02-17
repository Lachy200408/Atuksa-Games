import { type Game } from '@/types/game-type';

interface Props {
	games: Game[];
	genre: string | null;
}

export const filterByGenre = ({ games, genre }: Props) => {
	if (!genre || genre === 'all') return games;
	return games.filter((game) => game.genres.includes(genre));
};
