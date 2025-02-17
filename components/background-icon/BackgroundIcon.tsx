import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

interface Props {
	className?: string;
}

export default function BackgroundIcon({ className = '' }: Props) {
	return (
		<Image
			src="/IconBackground.png"
			alt="BackgroundIcon"
			width={424}
			height={478}
			className={cn(
				'object-contain opacity-5 brightness-75 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50 scale-50',
				className,
			)}
		/>
	);
}
