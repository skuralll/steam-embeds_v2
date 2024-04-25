import type { Meta, StoryObj } from '@storybook/react';
import AppLogo from './AppLogo';

const meta = {
  title: 'Common/AppLogo',
  component: AppLogo,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'steam',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof AppLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
