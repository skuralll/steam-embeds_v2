import type { Meta, StoryObj } from "@storybook/react";

import HomeHeader from "./HomeHeader";

const meta: Meta<typeof HomeHeader> = {
  title: "components/HomeHeader",
  component: HomeHeader,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
