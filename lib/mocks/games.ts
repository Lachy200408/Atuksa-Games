import { type Game } from '@/types/game-type';
import * as gamesJson from './games.json';

export const games: Game[] = Array.from(gamesJson);
