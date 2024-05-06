import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';
import { ComponentProps, useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Common/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: { children: 'string', isOpen: true, setIsOpen: undefined },
  argTypes: {
    children: {
      control: 'select',
      options: [
        'string',
        'number',
        'false',
        'true',
        'React.ReactElement<any, string | React.JSXElementConstructor<any>>',
        'Iterable<React.ReactNode>',
        'React.ReactPortal',
      ],
    },
    isOpen: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const WithHooks = (args: ComponentProps<typeof Modal>) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <>
      <Modal {...args} isOpen={isOpen} setIsOpen={setIsOpen}>
        <h1 className="text-[22px]">タイトル</h1>
      </Modal>
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 p-2 rounded-lg">
        Open Modal
      </button>
    </>
  );
};

export const Primary: Story = {
  args: {
    isOpen: true,
  },
  render: WithHooks,
};
