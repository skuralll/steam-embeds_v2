import type { Meta, StoryObj } from '@storybook/react';
import GameImage from './GameImage';

const meta = {
  title: 'Widget/GameCardList/GameImage',
  component: GameImage,

  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'steam',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
    },
  },
  args: {
    src: 'https://steam-embeds.vercel.app/_next/image?url=https%3A%2F%2Fcdn.cloudflare.steamstatic.com%2Fsteam%2Fapps%2F412830%2Fcapsule_231x87.jpg&w=256&q=75',
  },
} satisfies Meta<typeof GameImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
