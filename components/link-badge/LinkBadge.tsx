import Badge from '@/components/badge/Badge';
import { cn } from '@/lib/utils/cn';
import Link from 'next/link';

interface Props {
	children: React.ReactNode;
	href: string;
	className?: string;
}

export default function LinkBadge({ children, href, className = '' }: Props) {
	return (
		<Link href={href}>
			<Badge
				className={cn(
					'md:hover:brightness-150 md:hover:backdrop-blur-lg md:active:brightness-90 active:brightness-90 transition duration-300',
					className,
				)}
			>
				{children}
			</Badge>
		</Link>
	);
}
