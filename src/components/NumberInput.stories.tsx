import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useState } from "react";

import NumberInput from "./NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "Common/NumberInput",
  component: NumberInput,
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
    value: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const WithHooks = (args: ComponentProps<typeof NumberInput>) => {
  const [value, setValue] = useState(args.value);

  return <NumberInput {...args} value={value} setValue={setValue} />;
};

export const Primary: Story = {
  args: {
    label: "Label",
    placeholder: "Enter a number",
    value: 0,
  },
  render: WithHooks,
};
