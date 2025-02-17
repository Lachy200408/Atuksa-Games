import HeadingColorizedText from '@/components/heading-colorized-text/HeadingColorizedText';
import NotFoundComponent from '@/components/not-found/NotFound';

export default function CartNotFoundPage() {
	return (
		<NotFoundComponent>
			<HeadingColorizedText>Tu carrito está vacío</HeadingColorizedText>
		</NotFoundComponent>
	);
}
