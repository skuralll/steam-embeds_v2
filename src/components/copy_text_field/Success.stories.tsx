import type { Meta, StoryObj } from '@storybook/react';

import Success from './Success';

const meta: Meta<typeof Success> = {
  title: 'components/Success',
  component: Success,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
