import type { Meta, StoryObj } from '@storybook/react';
import GameCard from './GameCard';
import { dummyGame } from '../../test/dummy';

const meta = {
  title: 'Widget/GameCardList/GameCard',
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
    game: dummyGame,
  },
} satisfies Meta<typeof GameCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    game: dummyGame,
  },
};
