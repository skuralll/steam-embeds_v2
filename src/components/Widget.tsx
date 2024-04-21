import { PlayerSummary } from '../types/Player';
import { PlayedGameData } from '../types/Game';
import WidgetHeader from './WidgetHeader';
import GameCardList from './GameCardList';

type Props = {
  title: string;
  player: PlayerSummary;
  games: PlayedGameData[];
};

const Widget = ({ title, player, games }: Props) => {
  return (
    <div className="w-screen h-screen rounded-[0.25rem] overflow-hidden">
      <WidgetHeader title={title} player={player} />
      <GameCardList games={games} />
    </div>
  );
};

export default Widget;
