import * as games from '@/lib/mocks/games.json';

export const dynamic = 'force-static';

export async function GET() {
	return Response.json(games);
}
