import type { Meta, StoryObj } from "@storybook/react";

import BoxContents from "./BoxContents";

const meta: Meta<typeof BoxContents> = {
  title: "Common/BoxContents",
  component: BoxContents,
  tags: ["autodocs"],
  args: { children: "string" },
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
  args: {
    children: (
      <div>
        Hello
        <br />
        BoxContents
      </div>
    ),
  },
};
