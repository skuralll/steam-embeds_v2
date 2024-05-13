import type { Meta, StoryObj } from "@storybook/react";

import PlusIcon from "./PlusIcon";

const meta: Meta<typeof PlusIcon> = {
  title: "Common/NumberInput/PlusIcon",
  component: PlusIcon,
  parameters: {
    backgrounds: {
      default: "steam",
    },
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
