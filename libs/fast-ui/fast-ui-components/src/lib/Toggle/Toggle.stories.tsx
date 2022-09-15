import { Story, Meta } from "@storybook/react";
import { Toggle, ToggleProps } from "./Toggle";

export default {
  component: Toggle,
  title: "Toggle",
} as Meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const Active = Template.bind({});
Active.args = {
  onChange: () => {
    ("");
  },
  value: true,
};

export const NotActive = Template.bind({});
NotActive.args = {
  onChange: () => {
    ("");
  },
  value: false,
};
