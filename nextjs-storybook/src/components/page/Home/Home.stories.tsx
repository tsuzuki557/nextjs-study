import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Home } from "./Home";

export default {
  title: "PAGE/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

export const Case1: ComponentStory<typeof Home> = () => <Home />;
