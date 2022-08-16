import { ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

export const Basic1 = {
  args: { primary: true, label: "ボタンAA" },
};
export const Basic2 = {
  args: { primary: false, label: "ボタンB", size: "LL" },
};
