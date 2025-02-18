import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

interface Props {
	className?: string;
}

export default function BackgroundLines({ className = '' }: Props) {
	return (
		<Image
			src="/Lines-background.webp"
			alt="BackgroundLines"
			width={1536}
			height={281}
			className={cn(
				'object-cover opacity-25 fixed bottom-4 md:-bottom-2 left-1/2 -translate-x-1/2 translate-y-1/2 -z-[100] max-w-7xl',
				className,
			)}
		/>
	);
}
