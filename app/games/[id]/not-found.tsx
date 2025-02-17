import HeadingColorizedText from '@/components/heading-colorized-text/HeadingColorizedText';
import NotFoundComponent from '@/components/not-found/NotFound';

export default function SpecificGameNotFoundPage() {
	return (
		<NotFoundComponent>
			<HeadingColorizedText>No se ha encontrado el juego</HeadingColorizedText>
		</NotFoundComponent>
	);
}
