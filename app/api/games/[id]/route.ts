import * as games from '@/lib/mocks/games.json';

export const dynamic = 'force-static';

export async function GET(
	_: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;
	const result = Array.from(games).find((game) => game.id === id);
	return Response.json(result);
}
