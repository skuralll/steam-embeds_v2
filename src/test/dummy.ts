import { PlayedGameData } from '../types/Game';
import { PlayerSummary } from '../types/Player';

export const dummyGame: PlayedGameData = {
  appid: '412830',
  name: 'STEINS;GATE',
  playtime_forever: 2364,
  img_icon_url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/412830/capsule_231x87.jpg',
  has_community_visible_stats: true,
  playtime_windows_forever: 0,
  playtime_mac_forever: 0,
  playtime_linux_forever: 0,
  has_leaderboards: false,
  rtime_last_played: 1610000000,
};

export const dummyPlayer: PlayerSummary = {
  steamid: '76561198424303465',
  personaname: 'skuralll',
  profileurl: 'https://steamcommunity.com/id/okabe/',
  avatar:
    'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5e/5e5b1e3f8e4e8b5f9c1e1f4f8e7f9e5e5e5e5e5e_full.jpg',
  avatarmedium:
    'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5e/5e5b1e3f8e4e8b5f9c1e1f4f8e7f9e5e5e5e5e5e_medium.jpg',
  avatarfull:
    'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5e/5e5b1e3f8e4e8b5f9c1e1f4f8e7f9e5e5e5e5e5e_full.jpg',
  communityvisibilitystate: 3,
  profilestate: 1,
  lastlogoff: 1610000000,
};
