'use client';

import { cn } from '@/lib/utils/cn';
import Badge from '@/components/badge/Badge';

interface Props {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	tabIndex?: number;
}

export default function ButtonBadge({
	children,
	className = '',
	onClick = () => {},
	tabIndex = 0,
	...props
}: Props) {
	return (
		<button
			{...props}
			onClick={onClick}
			tabIndex={tabIndex}
			className={cn('active:scale-90 transition duration-300', className)}
		>
			<Badge>{children}</Badge>
		</button>
	);
}
