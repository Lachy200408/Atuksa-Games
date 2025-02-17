import * as games from '@/lib/mocks/games.json';

export const dynamic = 'force-static';

export async function GET() {
	const { length } = games;
	return Response.json({
		length:
			length % 6 !== 0 ? Math.floor(length / 6) + 1 : Math.floor(length / 6),
	});
}
