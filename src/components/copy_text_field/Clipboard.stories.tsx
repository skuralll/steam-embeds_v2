import type { Meta, StoryObj } from "@storybook/react";

import { Clipboard } from "./Clipboard";

const meta: Meta<typeof Clipboard> = {
  title: "components/Clipboard",
  component: Clipboard,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
