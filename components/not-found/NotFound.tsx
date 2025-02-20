'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import LinkBadge from '@/components/link-badge/LinkBadge';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams, useParams } from 'next/navigation';
import HeadingColorizedText from '../heading-colorized-text/HeadingColorizedText';
import {
	GAME_GENRES,
	GAME_GENRES_DISPLAYABLE,
} from '@/lib/constants/games-genres';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export default function NotFoundComponent({ children, className }: Props) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { genre } = useParams();

	return (
		<section
			className={cn(
				'flex-1 grid content-center justify-items-center gap-4 p-4',
				className,
			)}
		>
			{pathname.includes('filter') && (
				<HeadingColorizedText>
					Buscando &ldquo;{searchParams.get('search')}&rdquo;
				</HeadingColorizedText>
			)}
			{pathname.includes('genre') && (
				<HeadingColorizedText>
					Buscando juegos de {GAME_GENRES_DISPLAYABLE[genre as GAME_GENRES]}
				</HeadingColorizedText>
			)}
			<Image src="/Super-Mario.webp" alt="" width={96} height={179.1} />
			{children}
			<div className="max-w-72 grid place-items-center gap-4 rounded-box border border-dashed border-primary-600/25 p-8 my-4">
				<h4 className="text-center">
					Explora los catálogos y escoge los juegos que deseas comprar
				</h4>
				<LinkBadge href="/games/page/1">
					Navegar <ArrowUpRightIcon className="size-4" />
				</LinkBadge>
			</div>
		</section>
	);
}
