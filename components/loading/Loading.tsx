import Image from 'next/image';
import HeadingColorizedText from '@/components/heading-colorized-text/HeadingColorizedText';

export default function LoadingComponent() {
	return (
		<section className="flex-1 grid content-center justify-items-center gap-4 p-4">
			<Image
				src="/super-mario-world-yoshi.gif"
				alt=""
				width={192}
				height={192}
			/>
			<HeadingColorizedText>Cargando...</HeadingColorizedText>
		</section>
	);
}
