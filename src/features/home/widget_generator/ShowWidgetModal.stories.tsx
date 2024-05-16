import type { Meta, StoryObj } from "@storybook/react";

import ShowWidgetModal from "./ShowWidgetModal";
import { ComponentProps, useState } from "react";

const meta: Meta<typeof ShowWidgetModal> = {
  title: "Home/WidgetGenerator/ShowWidgetModal",
  component: ShowWidgetModal,
  tags: ["autodocs"],
  args: { isOpen: true, setIsOpen: undefined, params: undefined },
  argTypes: { isOpen: { control: "boolean" } },
};

export default meta;
type Story = StoryObj<typeof meta>;

const WithHooks = (args: ComponentProps<typeof ShowWidgetModal>) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <>
      <ShowWidgetModal {...args} isOpen={isOpen} setIsOpen={setIsOpen} />
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 p-2 rounded-lg"
      >
        Open Modal
      </button>
    </>
  );
};

export const Primary: Story = {
  args: {
    isOpen: true,
    params: {
      steamId: "76561198424303465",
      num: 8,
      width: 400,
      height: 500,
    },
  },
  render: WithHooks,
};
