import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Props {
	arrayLinks: { href: string; text: string }[];
}

export default function Breadcrumb({ arrayLinks }: Props) {
	return (
		<nav className="flex items-center gap-1.5 flex-wrap text-center text-sm text-primary-600">
			<Link
				href="/"
				className="text-primary-600 hover:text-primary-900 transition duration-300"
			>
				<HomeIcon className="size-6" />
			</Link>
			<span>/</span>
			{arrayLinks.map(({ href, text }, index) => (
				<span key={index} className="flex items-center gap-1.5">
					<Link
						href={href}
						className="text-primary-600 hover:text-primary-900 transition duration-300"
					>
						<span>{text}</span>
					</Link>
					{index !== arrayLinks.length - 1 && <span>/</span>}
				</span>
			))}
		</nav>
	);
}
