import * as games from '@/lib/mocks/games.json';

export const dynamic = 'force-static';

export async function GET(
	_: Request,
	{ params }: { params: Promise<{ index: number }> },
) {
	const { index } = await params;

	if (index < 1) {
		return Response.json([]);
	}

	const offset = (index - 1) * 6;
	const num = 6;

	const result = Array.from(games).slice(
		Number(offset),
		Number(offset) + Number(num),
	);

	return Response.json(result);
}
