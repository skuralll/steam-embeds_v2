import type { Meta, StoryObj } from '@storybook/react';
import GameCard from './GameCard';
import { PlayedGameData } from '../types/Game';

// dummy data
const gameDummy: PlayedGameData = {
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

const meta = {
  title: 'Card/GameCard',
  component: GameCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'steam',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    game: gameDummy,
  },
} satisfies Meta<typeof GameCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    game: gameDummy,
  },
};
