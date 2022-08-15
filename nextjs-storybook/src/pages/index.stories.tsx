import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from "./index";

export default {
  title: "PAGE/TopPage",
  component: Home,
} as ComponentMeta<typeof Home>;

export const Case1: ComponentStory<typeof Home> = () => <Home />;
