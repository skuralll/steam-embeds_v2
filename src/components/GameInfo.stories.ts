import type { Meta, StoryObj } from '@storybook/react';
import GameInfo from './GameInfo';

const meta = {
  title: 'Card/GameInfo',
  component: GameInfo,

  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'steam',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    lastPlay: {
      control: 'text',
    },
    playTime: {
      control: 'number',
    },
  },
  args: {
    title: 'STEINS;GATE',
    lastPlay: '3 March, 2021',
    playTime: 30,
  },
} satisfies Meta<typeof GameInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
