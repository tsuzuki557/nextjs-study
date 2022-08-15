import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// ref. CSF3.0 https://storybook.js.org/blog/component-story-format/
export default {
  title: "SAMPLE/Button", // CSF3.0ではtitl自動付与されるため、任意
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// CSF2.0

//const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Basic1 = Template.bind({});
// Basic1.args = {
//   primary: true,
//   label: "ボタンAA",
// };

// export const Basic2 = Template.bind({});
// Basic2.args = {
//   primary: false,
//   label: "ボタンB",
//   size: "LL",
// };

// CSF3.0
export const Basic1 = {
  args: { primary: true, label: "ボタンAA" },
};
export const Basic2 = {
  args: { primary: false, label: "ボタンB", size: "LL" },
};
