import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { About } from "./About";

export default {
  title: "PAGE/About",
  component: About,
} as ComponentMeta<typeof About>;

export const Case1: ComponentStory<typeof About> = () => <About />;
