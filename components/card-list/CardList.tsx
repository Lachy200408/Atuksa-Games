import type { Game } from '@/types/game-type';
import Card from '@/components/card/Card';

interface Props {
	gamesData: Game[];
}

export default function CardList({ gamesData }: Props) {
	return (
		<ul className="flex flex-wrap justify-center items-center gap-8 max-w-5xl">
			{gamesData.map((game: Game) => (
				<li key={game.id} className="game-card">
					<Card
						name={game.name}
						image={game.image}
						id={game.id}
						price={game.price}
					/>
				</li>
			))}
		</ul>
	);
}
