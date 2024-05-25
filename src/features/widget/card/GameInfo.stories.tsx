import type { Meta, StoryObj } from '@storybook/react';
import GameInfo from './GameInfo';

const meta = {
  title: 'Widget/GameCardList/GameInfo',
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
    supplement: {
      control: 'text',
    },
    playTime: {
      control: 'number',
    },
  },
  args: {
    title: 'STEINS;GATE',
    supplement: 'MAGES. Inc.',
    playTime: 30,
  },
} satisfies Meta<typeof GameInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
