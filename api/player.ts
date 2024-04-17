import type { VercelRequest, VercelResponse } from '@vercel/node';

// SteamAPIからプレイヤー情報を取得する
export default async function (req: VercelRequest, res: VercelResponse) {
  const { steamid = '76561198424303465' } = req.query;
  const steamResponse: Response = await fetch(
    `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_TOKEN}&steamids=${steamid}`
  );
  const data: string = await steamResponse.json();
  res.setHeader('Content-Type', 'application/json; charset=utf-8').send(data);
}
