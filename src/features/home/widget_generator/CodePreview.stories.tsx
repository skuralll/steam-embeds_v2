import type { Meta, StoryObj } from '@storybook/react';

import CodePreview from './CodePreview';

const meta: Meta<typeof CodePreview> = {
  title: 'Home/WidgetGenerator/CodePreview',
  component: CodePreview,
  parameters: {
    backgrounds: {
      default: 'steam',
    },
  },
  tags: ['autodocs'],
  args: { code: '<div>Code Preview</div>' },
  argTypes: { code: { control: 'text' } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    code: '<iframe src="http://localhost:3000/widget?id=76561198424303465&num=8" width="400" height="500"></iframe>',
  },
};
