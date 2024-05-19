import type { Meta, StoryObj } from "@storybook/react";

import ArrowDown from "./ArrowDown";

const meta: Meta<typeof ArrowDown> = {
  title: "Common/ArrowDown",
  component: ArrowDown,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
