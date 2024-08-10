// src/stories/Button.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  onClick: () => alert("Button clicked!"),
};
