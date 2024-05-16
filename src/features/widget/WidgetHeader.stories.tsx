import type { Meta, StoryObj } from '@storybook/react';
import WidgetHeader from './WidgetHeader';
import { dummyPlayer } from '../../test/dummy';

const meta = {
  title: 'Widget/WidgetHeader',
  component: WidgetHeader,
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
  },
} satisfies Meta<typeof WidgetHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Most Played Games',
    player: dummyPlayer,
  },
};
