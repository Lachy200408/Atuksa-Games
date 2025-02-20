import { cn } from '@/lib/utils/cn';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export default function Badge({ children, className = '' }: Props) {
	return (
		<span
			className={cn(
				'flex items-center gap-2 rounded-full bg-primary-200/50 px-4 py-2 border border-primary-600/25 backdrop-blur-lg',
				className,
			)}
		>
			{children}
		</span>
	);
}
