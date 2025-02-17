import HeadingColorizedText from '@/components/heading-colorized-text/HeadingColorizedText';
import NotFoundComponent from '@/components/not-found/NotFound';

export default function GamesPageNotFound() {
	return (
		<NotFoundComponent>
			<HeadingColorizedText>
				No se han encontrado juegos de esta categoría
			</HeadingColorizedText>
		</NotFoundComponent>
	);
}
