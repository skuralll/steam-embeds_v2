import type { Meta, StoryObj } from '@storybook/react';
import Widget from './Widget';
import { dummyGame, dummyPlayer } from '../test/dummy';

const meta = {
  title: 'Widget',
  component: Widget,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    title: 'Most Played Games',
    player: dummyPlayer,
    games: Array(8).fill(dummyGame),
  },
} satisfies Meta<typeof Widget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Most Played Games',
    player: dummyPlayer,
    games: Array(8).fill(dummyGame),
  },
};
