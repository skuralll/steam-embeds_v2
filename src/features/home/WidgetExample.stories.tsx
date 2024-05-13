import type { Meta, StoryObj } from "@storybook/react";

import WidgetExample from "./WidgetExample";

const meta: Meta<typeof WidgetExample> = {
  title: "components/WidgetExample",
  component: WidgetExample,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
