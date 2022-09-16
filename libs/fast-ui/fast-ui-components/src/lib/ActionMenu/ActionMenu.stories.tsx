import { Story, Meta } from "@storybook/react";
import { ActionMenu, ActionMenuProps } from "./ActionMenu";

export default {
  component: ActionMenu,
  title: "ActionMenu",
} as Meta;

const Template: Story<ActionMenuProps> = (args) => <ActionMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
