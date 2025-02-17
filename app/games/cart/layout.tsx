import HeadingColorizedText from '@/components/heading-colorized-text/HeadingColorizedText';
import HorizontalSeparator from '@/components/separator/HorizontalSeparator';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Atuksa Games | Carrito',
	description:
		'Agrega tus juegos deseados al carrito de la compra y verifica el monto total para confirmar la compra.',
};

export default function CartLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center size-full gap-8 px-4 py-16">
			<HeadingColorizedText>Carrito de la compra</HeadingColorizedText>
			<HorizontalSeparator className="max-w-3xl w-4/5" />
			{children}
		</section>
	);
}
