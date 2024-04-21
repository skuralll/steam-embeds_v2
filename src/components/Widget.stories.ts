import type { Meta, StoryObj } from '@storybook/react';
import Widget from './Widget';
import { dummyGames, dummyPlayer } from '../test/dummy';

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
    title: 'This is Title',
    player: dummyPlayer,
    games: dummyGames.slice(0, 8),
  },
} satisfies Meta<typeof Widget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Most Played Games',
    player: dummyPlayer,
    games: dummyGames.slice(0, 8),
  },
};
