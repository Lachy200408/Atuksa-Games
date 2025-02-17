import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

interface Props {
	className?: string;
}

export default function HorizontalSeparator({ className = '' }: Props) {
	return (
		<Image
			src="/Separator.png"
			alt="Separator"
			width={1280}
			height={6}
			className={cn('object-contain opacity-75', className)}
		/>
	);
}
