import type { Meta, StoryObj } from "@storybook/react";

import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Common/InputField",
  component: InputField,
  parameters: {
    backgrounds: {
      default: "steam",
    },
  },
  tags: ["autodocs"],
  args: {
    label: undefined,
    placeholder: undefined,
    value: undefined,
    setValue: undefined,
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Label",
    placeholder: "PlaceHolder",
    value: "",
    setValue: () => {},
  },
};
