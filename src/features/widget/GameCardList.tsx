import { useEffect, useRef, useState } from 'react';
import { PlayedGameData } from '../../types/Game';
import GameCard from './card/GameCard';
import ArrowDown from '@/components/ArrowDown';

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
    <div ref={scrollRef} className="static w-full h-full bg-[#16202d] overflow-y-scroll">
      <ol className="list-none">
        {games.map((game) => (
          <li key={game.appid} className="border-t-[2px] border-[#1b2838]">
            <GameCard game={game} />
          </li>
        ))}
      </ol>
      {!isBottom && (
        <div className="absolute pointer-events-none inset-x-0 bottom-1 flex justify-center opacity-40">
          <div className="h-5 w-5">
            <ArrowDown />
          </div>
        </div>
      )}
    </div>
  );
};

export default GameCardList;
