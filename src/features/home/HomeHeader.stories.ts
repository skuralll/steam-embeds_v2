import type { Meta, StoryObj } from '@storybook/react';
import HomeHeader from './HomeHeader';

const meta = {
  title: 'Home/HomeHeader',
  component: HomeHeader,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof HomeHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
