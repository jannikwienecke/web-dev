import { Story, Meta } from "@storybook/react";
import { basename } from "path";
import { FaSearch } from "react-icons/fa";
import { Button, ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    icon: { action: "icon executed!" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  icon: FaSearch,
  variant: "primary",
};

export const Base = Template.bind({});
Base.args = {
  children: "Button",
  icon: FaSearch,
  variant: "base",
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: "Button",
  icon: FaSearch,
  variant: "primary",
  rounded: true,
};

export const Circular = Template.bind({});
Circular.args = {
  children: "Button",
  icon: FaSearch,
  variant: "primary",
  circular: true,
};

export const Fit = Template.bind({});
Fit.args = {
  children: "Button",
  icon: FaSearch,
  variant: "primary",
  size: "fit",
};
