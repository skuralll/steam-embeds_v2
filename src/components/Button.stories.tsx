import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "string", onClick: undefined },
  argTypes: {
    children: {
      control: "select",
      options: [
        "string",
        "number",
        "false",
        "true",
        "React.ReactElement<any, string | React.JSXElementConstructor<any>>",
        "Iterable<React.ReactNode>",
        "React.ReactPortal",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Button", onClick: () => console.log("Button clicked") },
};