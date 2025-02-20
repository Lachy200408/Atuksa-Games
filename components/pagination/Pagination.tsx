import Link from 'next/link';
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
			? arrayPageIndex.slice(+index - 3)
			: arrayPageIndex.slice(+index - 2, +index + 1);

	return (
		<div className="sticky bottom-16 mx-auto flex items-center justify-center gap-4">
			<ul className="flex items-center justify-center gap-4 p-2 bg-primary-200/50 border border-primary-600/25 backdrop-blur-lg rounded-full w-max">
				{+index >= length - 1 && (
					<>
						<li>
							<Link
								href={urlCallback(1)}
								className={cn(
									'brightness-100 md:brightness-90 md:hover:brightness-150 active:brightness-90 transition duration-300 rounded-full grid place-items-center aspect-square w-10',
									1 === +index &&
										'bg-primary-600/5 border border-primary-600/25 backdrop-blur-lg',
								)}
							>
								1
							</Link>
						</li>
						<li>
							<div className="brightness-100 rounded-full grid place-items-center aspect-square w-10 bg-primary-600/5 border border-primary-600/25 backdrop-blur-lg">
								...
							</div>
						</li>
					</>
				)}
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
				{+index < length - 1 && (
					<>
						<li>
							<div className="brightness-100 rounded-full grid place-items-center aspect-square w-10 bg-primary-600/5 border border-primary-600/25 backdrop-blur-lg">
								...
							</div>
						</li>
						<li>
							<Link
								href={urlCallback(length)}
								className={cn(
									'brightness-100 md:brightness-90 md:hover:brightness-150 active:brightness-90 transition duration-300 rounded-full grid place-items-center aspect-square w-10',
									length === +index &&
										'bg-primary-600/5 border border-primary-600/25 backdrop-blur-lg',
								)}
							>
								{length}
							</Link>
						</li>
					</>
				)}
			</ul>
		</div>
	);
}
