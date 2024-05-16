import type { Meta, StoryObj } from '@storybook/react';
import GameCard from './GameCard';
import { dummyGames } from '../../../test/dummy';

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
    game: dummyGames[0],
  },
} satisfies Meta<typeof GameCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    game: dummyGames[0],
  },
};
