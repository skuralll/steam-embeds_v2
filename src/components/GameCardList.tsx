import { PlayedGameData } from '../types/Game';
import GameCard from './card/GameCard';

type Props = {
  games: PlayedGameData[];
};

const GameCardList = ({ games }: Props) => {
  return (
    <div className="w-full h-full bg-[#16202d]">
      <ol className="list-none">
        {games.map((game) => (
          <li key={game.appid} className="border-t-[2px] border-[#1b2838]">
            <GameCard game={game} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GameCardList;
