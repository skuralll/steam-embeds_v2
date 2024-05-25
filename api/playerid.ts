import type { VercelRequest, VercelResponse } from '@vercel/node';

// カスタムIDからSteamIDを取得する
export default async function (req: VercelRequest, res: VercelResponse) {
  const { id = '' } = req.query;
  const steamResponse: Response = await fetch(
    `https://api.steampowered.com//ISteamUser/ResolveVanityURL/v0001/?key=${process.env.STEAM_TOKEN}&vanityurl=${id}`
  );
  const data: string = await steamResponse.json();
  res
    .setHeader('Content-Type', 'application/json; charset=utf-8')
    .setHeader('Cache-Control', 's-maxage=86400 immutable')
    .send(data);
}
