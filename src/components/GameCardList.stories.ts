import type { Meta, StoryObj } from '@storybook/react';
import GameCardList from './GameCardList';
import { dummyGames } from '../test/dummy';

const meta = {
  title: 'Widget/GameCardList',
  component: GameCardList,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    games: dummyGames.slice(0, 8),
  },
} satisfies Meta<typeof GameCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    games: dummyGames.slice(0, 8),
  },
};
