import { useLocation } from 'react-router-dom';
import { PlayerSummary } from '../types/Player';
import { useEffect, useState } from 'react';
import { getOwnedGames, getPlayerSummary } from '../lib/steam';
import { PlayedGameData } from '../types/Game';
import Widget from '../features/widget/Widget';

const DEFAULT_NUM = 8;

const WidgetPage = () => {
  // State
  const [player, setPlayer] = useState<PlayerSummary | null>(null);
  const [games, setGames] = useState<PlayedGameData[] | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const playerPromise = getPlayerSummary(steamid!);
        const gamesPromise = getOwnedGames(steamid!);
        playerPromise.then(setPlayer).catch((error) => {
          console.error('Error fetching player summary:', error);
        });
        gamesPromise
          .then((games) => {
            setGames(games.sort((a, b) => b.playtime_forever - a.playtime_forever).slice(0, num));
          })
          .catch((error) => {
            console.error('Error fetching owned games:', error);
          });
        await Promise.all([playerPromise, gamesPromise]);
      } catch (e) {
        console.error('Error fetching data:', e);
      }
    }
    fetchData();
  }, []);
  // query params
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const steamid = query.get('id');
  if (steamid === null) {
    return <div className="px-2 py-1">Invalid Steam ID</div>;
  }
  const num = Number(query.get('num') ?? DEFAULT_NUM);
  // Render
  return (
    <Widget title={'Most Played Games'} player={player ?? undefined} games={games ?? undefined} />
  );
};

export default WidgetPage;
