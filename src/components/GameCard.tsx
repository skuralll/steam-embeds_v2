import { getDateString } from '../lib/utils';
import { PlayedGameData } from '../types/Game';
import GameImage from './GameImage';
import GameInfo from './GameInfo';

type Props = {
  game: PlayedGameData;
};

const GameCard = ({ game }: Props) => {
  const lastPlay = game.rtime_last_played == 0 ? '' : getDateString(game.rtime_last_played);
  return (
    <a href={`https://store.steampowered.com/app/${game.appid}/`} target="_blank">
      <div className="flex items-center px-[6px] py-[1.5px] border-solid border-[1px] border-[#16202d] hover:border-[#25303f] hover:bg-[#121821]">
        <GameImage
          src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/capsule_231x87.jpg`}
        />
        <div className="pl-[12px]">
          <GameInfo title={game.name} lastPlay={lastPlay} playTime={game.playtime_forever} />
        </div>
      </div>
    </a>
  );
};

export default GameCard;
