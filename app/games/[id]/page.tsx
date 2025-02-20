import type { Metadata, ResolvingMetadata } from 'next';
import {
	GAME_GENRES,
	GAME_GENRES_DISPLAYABLE,
} from '@/lib/constants/games-genres';
import { games } from '@/lib/mocks/games';
import Image from 'next/image';
import HorizontalSeparator from '@/components/separator/HorizontalSeparator';
import LinkBadge from '@/components/link-badge/LinkBadge';
import CartButton from '@/components/cart-button/CartButton';
import { notFound } from 'next/navigation';
import { getGameById } from '@/lib/utils/get-games';
import { cn } from '@/lib/utils/cn';
import { oswald } from '@/lib/fonts/fonts';
import HeadingColorizedText from '@/components/heading-colorized-text/HeadingColorizedText';
import Badge from '@/components/badge/Badge';
import {
	GAMES_LANGS,
	GAMES_LANGS_DISPLAYABLE,
} from '@/lib/constants/games-langs';

interface Props {
	params: Promise<{ id: string }>;
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const { id } = await params;

	const game = games.find((game) => game.id === id);
	const prevTitle = (await parent).title?.absolute;

	const title =
		prevTitle +
		' | ' +
		(game?.name ? `Comprar - ${game.name}` : 'Juego no encontrado');
	const description = game?.description ?? '';

	return {
		title,
		description,
	};
}

export default async function SpecificGamePage({ params }: Props) {
	const id = (await params).id;
	const gamedata = getGameById(games, id);

	if (!gamedata) notFound();

	return (
		<section className="w-full flex flex-col items-center justify-center gap-4 px-4 py-16">
			<picture className="relative my-12 grid gap-8">
				<div>
					<Image
						src={gamedata.image}
						alt={gamedata.name}
						width={200}
						height={275}
						className="rounded-md"
					/>
					<Image
						src={gamedata.image}
						alt={gamedata.name}
						width={200}
						height={275}
						className="scale-125 blur-md opacity-25 absolute top-0 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 -z-10 rounded-md"
					/>
				</div>
				<hgroup className="grid place-items-center gap-4 min-w-52 md:absolute top-1/2 -left-3/4 md:-translate-x-1/3 md:-translate-y-1/2 rounded-box border border-dashed border-primary-600/25 p-8">
					<h4
						className={cn(
							'grid place-items-center rounded-box bg-gradient-to-tr from-green-500 to-custom_green-600 py-2 px-4 text-green-100 shadow-green-900/50 shadow-[inset_0_0_16px_0]',
							oswald.className,
						)}
					>
						{gamedata.price} - CUP
					</h4>
					<h4
						className={cn(
							'grid place-items-center rounded-box bg-gradient-to-tr from-green-500 to-custom_green-600 py-2 px-4 text-green-100 shadow-green-900/50 shadow-[inset_0_0_16px_0]',
							oswald.className,
						)}
					>
						Código - {gamedata.code}
					</h4>
					<CartButton id={gamedata.id} />
				</hgroup>
			</picture>

			<HeadingColorizedText>{gamedata.name}</HeadingColorizedText>
			<HorizontalSeparator className="w-full max-w-3xl my-4" />
			<p className="text-center w-full max-w-3xl text-balance">
				{gamedata.description}
			</p>
			<HorizontalSeparator className="w-full max-w-3xl my-4" />
			<ul className="flex flex-wrap gap-4 justify-center items-center">
				{gamedata.genres.map((genre) => (
					<li key={genre}>
						<LinkBadge href={`/games/genre/${genre}/page/1`}>
							{GAME_GENRES_DISPLAYABLE[genre as GAME_GENRES]}
						</LinkBadge>
					</li>
				))}
			</ul>
			<p>
				Tamaño:{' '}
				{gamedata.size > 1024
					? `${(gamedata.size / 1024).toFixed(2)} GB`
					: `${gamedata.size} MB`}
			</p>
			<ul className="flex flex-wrap w-full max-w-3xl gap-2 justify-center items-center">
				{gamedata.lang.map((lang) => (
					<li key={lang}>
						<Badge>{GAMES_LANGS_DISPLAYABLE[lang as GAMES_LANGS]}</Badge>
					</li>
				))}
			</ul>
		</section>
	);
}
