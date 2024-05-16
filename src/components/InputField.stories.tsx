import type { Meta, StoryObj } from '@storybook/react';

import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Common/InputField',
  component: InputField,
  parameters: {
    backgrounds: {
      default: 'steam',
    },
  },
  tags: ['autodocs'],
  args: {
    label: undefined,
    error: undefined,
    validation: undefined,
    ref: undefined,
    key: undefined,
  },
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    ref: {
      control: 'select',
      options: ['string', '(instance: T) => void', 'React.RefObject<T>'],
    },
    key: { control: 'select', options: ['string', 'number', 'bigint'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Label',
    placeholder: 'PlaceHolder',
    value: '',
  },
};
