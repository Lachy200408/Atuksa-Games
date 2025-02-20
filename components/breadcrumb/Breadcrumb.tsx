import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Props {
	arrayLinks: { href: string; text: string }[];
}

export default function Breadcrumb({ arrayLinks }: Props) {
	return (
		<nav className="flex items-center gap-1.5 flex-wrap text-center text-sm text-primary-600">
			<Link href="/">
				<HomeIcon className="size-6" />
			</Link>
			{arrayLinks.map(({ href, text }, index) => (
				<Link
					key={index}
					href={href}
					className="text-primary-600 hover:text-primary-900 transition duration-300 flex items-center gap-1.5 flex-nowrap"
				>
					<span>{text}</span>
					{index !== arrayLinks.length - 1 && <span>/</span>}
				</Link>
			))}
		</nav>
	);
}
