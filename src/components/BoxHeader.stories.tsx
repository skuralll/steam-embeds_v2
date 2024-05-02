import type { Meta, StoryObj } from "@storybook/react";

import BoxHeader from "./BoxHeader";

const meta: Meta<typeof BoxHeader> = {
  title: "Common/BoxHeader",
  component: BoxHeader,
  parameters: {
    backgrounds: {
      default: "steam",
    },
  },
  tags: ["autodocs"],
  args: { title: undefined },
  argTypes: { title: { control: "text" } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { title: "Box Header" },
};
