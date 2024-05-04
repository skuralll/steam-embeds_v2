import type { Meta, StoryObj } from '@storybook/react';

import MinusIcon from './MinusIcon';

const meta: Meta<typeof MinusIcon> = {
  title: 'Common/NumberInput/MinusIcon',
  component: MinusIcon,
  parameters: {
    backgrounds: {
      default: 'steam',
    },
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
