import type { VercelRequest, VercelResponse } from '@vercel/node';

// SteamAPIからプレイしたゲームの一覧を取得する
export default async function (req: VercelRequest, res: VercelResponse) {
  const { steamid = '76561198424303465' } = req.query;
  const steamResponse: Response = await fetch(
    `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_TOKEN}&steamid=${steamid}&format=json&include_appinfo=1&include_played_free_games=1`
  );
  const data: string = await steamResponse.json();
  res
    .setHeader('Content-Type', 'application/json; charset=utf-8')
    .setHeader('Cache-Control', 's-maxage=86400 immutable')
    .send(data);
}
