import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "string", ref: undefined, key: undefined },
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
    ref: {
      control: "select",
      options: ["string", "(instance: T) => void", "React.RefObject<T>"],
    },
    key: { control: "select", options: ["string", "number", "bigint"] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Button", onClick: () => console.log("Button clicked") },
};
