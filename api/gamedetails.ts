import type { VercelRequest, VercelResponse } from '@vercel/node';

// SteamAPIから指定したゲームの詳細情報を取得する
export default async function (req: VercelRequest, res: VercelResponse) {
  const { appid = '438100' } = req.query;
  const steamResponse: Response = await fetch(
    `https://store.steampowered.com/api/appdetails?appids=${appid}`
  );
  const data: string = await steamResponse.json();
  res
    .setHeader('Content-Type', 'application/json; charset=utf-8')
    .setHeader('Cache-Control', 's-maxage=86400 immutable')
    .send(data);
}
