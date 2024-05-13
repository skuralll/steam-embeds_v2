import type { Meta, StoryObj } from "@storybook/react";

import LoadingButton from "./LoadingButton";

const meta: Meta<typeof LoadingButton> = {
  title: "Common/LoadingButton",
  component: LoadingButton,
  tags: ["autodocs"],
  args: { isLoading: true, children: "string", ref: undefined, key: undefined },
  argTypes: {
    isLoading: { control: "boolean" },
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

export const NotLoading: Story = {
  args: {
    isLoading: false,
    children: "This is not loading",
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: "This is loading",
  },
};
