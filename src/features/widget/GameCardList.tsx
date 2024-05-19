import { useEffect, useRef, useState } from 'react';
import { PlayedGameData } from '../../types/Game';
import GameCard from './card/GameCard';

type Props = {
  games: PlayedGameData[];
};

const GameCardList = ({ games }: Props) => {
  // スクロール検知
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isBottom, setIsBottom] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current;
      if (element) {
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
          setIsBottom(true);
        } else {
          setIsBottom(false);
        }
      }
    };
    const element = scrollRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
    }
    // クリーンアップ関数
    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div ref={scrollRef} className="w-full h-full bg-[#16202d] overflow-y-scroll">
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
