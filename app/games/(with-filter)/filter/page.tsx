import { games } from '@/lib/mocks/games';
import { filterBySearch } from '@/lib/filters/filter-by-search';
import CardList from '@/components/card-list/CardList';
import Pagination from '@/components/pagination/Pagination';
import { getPagesArray } from '@/lib/utils/get-pages-array';
import { getGameSlice } from '@/lib/utils/get-games';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import HeadingColorizedText from '@/components/heading-colorized-text/HeadingColorizedText';
import HorizontalSeparator from '@/components/separator/HorizontalSeparator';

interface Props {
	searchParams: Promise<{ search: string; page: number }>;
}

export async function generateMetadata(
	{ searchParams }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const { search = '', page = 1 } = await searchParams;
	const arrayPageIndex = getPagesArray(games);
	const isInRange = page >= 1 && page <= arrayPageIndex.length;
	const prevTitle = (await parent).title?.absolute;

	const title =
		prevTitle +
		' | ' +
		(isInRange
			? `Buscando "${search}" - Página ${page}`
			: 'Juegos no encontrados');

	return {
		title,
	};
}

export default async function GamesFilterPage({ searchParams }: Props) {
	const { search = '', page = 1 } = await searchParams;

	if (page < 1 || page >= games.length) notFound();

	const filteredGames = filterBySearch({ games, search });
	const arrayPageIndex = getPagesArray(filteredGames);
	const gamesData = getGameSlice(filteredGames, page);

	if (!gamesData?.length) notFound();

	return (
		<section className="flex flex-col items-center justify-center gap-8 px-4 py-16">
			<HeadingColorizedText>
				Buscando &ldquo;{search}&rdquo;
			</HeadingColorizedText>
			<HorizontalSeparator className="max-w-3xl w-4/5" />
			<CardList gamesData={gamesData} />
			<Pagination
				arrayPageIndex={arrayPageIndex}
				index={page}
				urlCallback={(_index) =>
					`/games/filter?search=${search}&page=${_index}`
				}
			/>
		</section>
	);
}
