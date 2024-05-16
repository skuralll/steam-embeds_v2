import type { Meta, StoryObj } from "@storybook/react";

import HomeFooter from "./HomeFooter";

const meta: Meta<typeof HomeFooter> = {
  title: "Home/HomeFooter",
  component: HomeFooter,
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
