import {
	GAME_GENRES,
	GAME_GENRES_DISPLAYABLE,
} from '@/lib/constants/games-genres';
import Pagination from '@/components/pagination/Pagination';
import CardList from '@/components/card-list/CardList';
import { getPagesArray } from '@/lib/utils/get-pages-array';
import { getGameSlice } from '@/lib/utils/get-games';
import { notFound } from 'next/navigation';
import { games } from '@/lib/mocks/games';
import { filterByGenre } from '@/lib/filters/filter-by-genre';
import { Metadata, ResolvingMetadata } from 'next';
import HeadingColorizedText from '@/components/heading-colorized-text/HeadingColorizedText';
import HorizontalSeparator from '@/components/separator/HorizontalSeparator';

interface Props {
	params: Promise<{ genre: GAME_GENRES; index: number }>;
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const { genre = '', index = 1 } = await params;
	const arrayPageIndex = getPagesArray(games);
	const isInRange = index >= 1 && index <= arrayPageIndex.length;
	const prevTitle = (await parent).title?.absolute;

	const title =
		prevTitle +
		' | ' +
		(isInRange
			? `${GAME_GENRES_DISPLAYABLE[genre as GAME_GENRES]} - Página ${index}`
			: 'Juegos no encontrados');

	return {
		title,
	};
}

export default async function GamesPage({ params }: Props) {
	const { genre = '', index = 1 } = await params;

	if (!genre) notFound();

	const filteredGames = filterByGenre({ games, genre });
	const arrayPageIndex = getPagesArray(filteredGames);
	const gamesData = getGameSlice(filteredGames, index);

	if (!gamesData?.length) notFound();

	return (
		<section className="flex flex-col items-center justify-center gap-8 px-4 py-16">
			<HeadingColorizedText>
				Juegos de {GAME_GENRES_DISPLAYABLE[genre as GAME_GENRES]}
			</HeadingColorizedText>
			<HorizontalSeparator className="max-w-3xl w-4/5" />
			<CardList gamesData={gamesData} />
			<Pagination
				arrayPageIndex={arrayPageIndex}
				index={index}
				urlCallback={(_index) => `/games/genre/${genre}/page/${_index}`}
			/>
		</section>
	);
}
