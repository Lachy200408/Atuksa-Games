import { type NextRequest } from 'next/server';
import { type Game } from '@/types/game-type';
import * as games from '@/lib/mocks/games.json';
import { filterBySearch } from '@/lib/filters/filter-by-search';
import { filterByGenre } from '@/lib/filters/filter-by-genre';

export async function GET(request: NextRequest) {
	const arrayGames = Array.from(games);

	const { searchParams } = request.nextUrl;
	const search = searchParams.get('search');
	const genre = searchParams.get('genre');

	let resultGames: Game[] = [];
	resultGames = filterBySearch({ games: arrayGames, search });
	resultGames = filterByGenre({ games: resultGames, genre });

	return Response.json(resultGames);
}
