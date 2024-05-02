import type { Meta, StoryObj } from "@storybook/react";

import WhatIsThis from "./ WhatIsThis";

const meta: Meta<typeof WhatIsThis> = {
  title: "Home/ WhatIsThis",
  component: WhatIsThis,
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
