export type PlayedGameData = {
  appid: number;
  name: string;
  img_icon_url: string;
  has_community_visible_stats?: boolean;
  has_leaderboards?: boolean;
  content_descriptorids?: number[];
  playtime_2weeks?: number;
  playtime_forever: number;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
  playtime_deck_forever: number;
  playtime_disconnected: number;
  rtime_last_played: number;
};

export type GameDetails = {
  developers: string[];
  publishers: string[];
};
