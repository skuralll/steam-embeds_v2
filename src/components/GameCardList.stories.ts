import type { Meta, StoryObj } from '@storybook/react';
import GameCardList from './GameCardList';
import { dummyGame } from '../test/dummy';

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
    games: Array(8).fill(dummyGame),
  },
} satisfies Meta<typeof GameCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    games: Array(8).fill(dummyGame),
  },
};
