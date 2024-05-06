import type { Meta, StoryObj } from "@storybook/react";

import CopyTextField from "./CopyTextField";

const meta: Meta<typeof CopyTextField> = {
  title: "Common/CopyTextField",
  component: CopyTextField,
  parameters: {
    backgrounds: {
      default: "steam",
    },
  },
  tags: ["autodocs"],
  args: { label: undefined, text: undefined },
  argTypes: { label: { control: "text" }, text: { control: "text" } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Label",
    text: "Text",
  },
};
