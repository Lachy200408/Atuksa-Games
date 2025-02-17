import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils/cn';

interface Props {
	arrayPageIndex: number[];
	index: number;
	urlCallback: (pageIndex: number) => string;
}

export default function Pagination({
	arrayPageIndex,
	index,
	urlCallback,
}: Props) {
	const { length } = arrayPageIndex;
	const displayableArray =
		+index <= 2
			? arrayPageIndex.slice(0, 3)
			: +index === length
			? arrayPageIndex.slice(index - 3)
			: arrayPageIndex.slice(index - 2, index + 1);
	const prevIndex = +index === 1 ? 1 : +index - 1;
	const nextIndex = +index === length ? length : +index + 1;

	return (
		<div className="sticky bottom-16 mx-auto flex items-center justify-center gap-4">
			<Link
				href={urlCallback(prevIndex)}
				className="brightness-100 md:brightness-90 md:hover:brightness-150 active:brightness-90 transition duration-300 rounded-full grid place-items-center aspect-square w-10 bg-primary-600/5 border border-primary-600/25 backdrop-blur-lg"
			>
				<ArrowLeftIcon className="size-4" />
			</Link>
			<ul className="flex items-center justify-center gap-4 p-2 bg-primary-600/5 border border-primary-600/25 backdrop-blur-lg rounded-full w-max">
				{displayableArray.map((pageIndex) => (
					<li key={pageIndex}>
						<Link
							href={urlCallback(pageIndex)}
							className={cn(
								'brightness-100 md:brightness-90 md:hover:brightness-150 active:brightness-90 transition duration-300 rounded-full grid place-items-center aspect-square w-10',
								pageIndex === +index &&
									'bg-primary-600/5 border border-primary-600/25 backdrop-blur-lg',
							)}
						>
							{pageIndex}
						</Link>
					</li>
				))}
			</ul>
			<Link
				href={urlCallback(nextIndex)}
				className="brightness-100 md:brightness-90 md:hover:brightness-150 active:brightness-90 transition duration-300 rounded-full grid place-items-center aspect-square w-10 bg-primary-600/5 border border-primary-600/25 backdrop-blur-lg"
			>
				<ArrowRightIcon className="size-4" />
			</Link>
		</div>
	);
}
