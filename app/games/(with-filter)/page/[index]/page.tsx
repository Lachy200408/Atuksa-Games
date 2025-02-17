import Pagination from '@/components/pagination/Pagination';
import CardList from '@/components/card-list/CardList';
import { getPagesArray } from '@/lib/utils/get-pages-array';
import { getGameSlice } from '@/lib/utils/get-games';
import { notFound } from 'next/navigation';
import { games } from '@/lib/mocks/games';
import { Metadata, ResolvingMetadata } from 'next';

interface Props {
	params: Promise<{ index: number }>;
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const { index = 1 } = await params;
	const arrayPageIndex = getPagesArray(games);
	const isInRange = index >= 1 && index <= arrayPageIndex.length;
	const prevTitle = (await parent).title?.absolute;

	const title =
		prevTitle +
		' | ' +
		(isInRange ? `Juegos - Página ${index}` : 'Juegos no encontrados');

	return {
		title,
	};
}

export default async function GamesPage({ params }: Props) {
	const { index = 1 } = await params;

	const arrayPageIndex = getPagesArray(games);
	const gamesData = getGameSlice(games, index);

	if (!gamesData?.length) notFound();

	return (
		<section className="flex flex-col items-center justify-center gap-8 px-4 py-16">
			<CardList gamesData={gamesData} />
			<Pagination
				arrayPageIndex={arrayPageIndex}
				index={index}
				urlCallback={(_index) => `/games/page/${_index}`}
			/>
		</section>
	);
}
