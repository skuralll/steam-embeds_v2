import { GameDetails, PlayedGameData } from '../types/Game';
import { PlayerSummary } from '../types/Player';

export async function getPlayerSummary(steamid: string): Promise<PlayerSummary | null> {
  try {
    const data = await fetch(`/api/player?steamid=${steamid}`);
    const json = await data.json();
    // レスポンス検証
    if (json.response['players'].length === 0) {
      // console.log('❗️Error on fetching player summary. SteamID may be incorrect');
      return null;
    }
    // うまく取得できていれば返す
    return json.response.players[0] as PlayerSummary;
  } catch (e) {
    console.log('❗️Error on fetching player summary');
    console.error(e);
    return null;
  }
}

export async function existsPlayer(steamid: string): Promise<boolean> {
  const player = await getPlayerSummary(steamid);
  return player !== null;
}

export async function getOwnedGames(steamid: string): Promise<PlayedGameData[]> {
  try {
    const data = await fetch(`/api/games?steamid=${steamid}`);
    const json = await data.json();
    return json.response.games as PlayedGameData[];
  } catch (e) {
    console.log('❗️Error on fetching owned games');
    console.error(e);
    return [];
  }
}

export async function getGameDetails(appid: string): Promise<GameDetails | null> {
  try {
    const data = await fetch(`/api/gamedetails?appid=${appid}`);
    const json = await data.json();
    if (json[appid]?.success) {
      return json[appid].data as GameDetails;
    }
    console.log('❗️Error on decoding game details');
    return null;
  } catch (e) {
    console.log('❗️Error on fetching game details');
    console.error(e);
    return null;
  }
}

export function getGameHeaderURL(appid: string): string {
  return `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/header.jpg`;
}

export function getGameSearchHeaderURL(appid: string): string {
  return `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/capsule_231x87.jpg`;
}
