import type { Meta, StoryObj } from "@storybook/react";

import CheckMark from "./CheckMark";

const meta: Meta<typeof CheckMark> = {
  title: "Home/WidgetGenerator/CheckMark",
  component: CheckMark,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
