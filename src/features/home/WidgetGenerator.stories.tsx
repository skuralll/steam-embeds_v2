import type { Meta, StoryObj } from "@storybook/react";

import WidgetGenerator from "./WidgetGenerator";

const meta: Meta<typeof WidgetGenerator> = {
  title: "Home/WidgetGenerator",
  component: WidgetGenerator,
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
