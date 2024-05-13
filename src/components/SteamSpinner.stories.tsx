import type { Meta, StoryObj } from '@storybook/react';
import SteamSpinner from './SteamSpinner';

const meta = {
  title: 'Common/SteamSpinner',
  component: SteamSpinner,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'steam',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SteamSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
