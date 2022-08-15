import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "SAMPLE/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Basic1: ComponentStory<typeof Button> = () => (
//   <Button>ボタンA</Button>
// );
// export const Basic2: ComponentStory<typeof Button> = () => (
//   <>
//     <Button />
//     <Button />
//   </>
// );

export const Basic1 = Template.bind({});
Basic1.args = {
  primary: true,
  label: "ボタンAA",
};

export const Basic2 = Template.bind({});
Basic2.args = {
  primary: false,
  label: "ボタンB",
  size: "LL",
};
