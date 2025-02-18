import { cn } from '@/lib/utils/cn';
import { oswald } from '@/lib/fonts/fonts';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export default function HeadingColorizedText({ children, className }: Props) {
	return (
		<hgroup
			className={cn(
				'relative grid place-items-center z-[5] max-w-3xl w-full',
				className,
			)}
		>
			<h1 className={cn(oswald.className, 'z-30 text-wrap text-center')}>
				{children}
			</h1>
			<h1
				className={cn(
					oswald.className,
					'absolute bg-gradient-to-r from-custom_blue-600 via-custom_green-600 to-custom_red-600 blur-md opacity-90 text-transparent bg-clip-text z-20 text-wrap text-center',
				)}
			>
				{children}
			</h1>
		</hgroup>
	);
}
