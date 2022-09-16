import { Story, Meta } from "@storybook/react";
import { FaEdit, FaTrash, FaCommentDots } from "react-icons/fa";
import { ActionItemType, ActionMenu, ActionMenuProps } from "./ActionMenu";

export default {
  component: ActionMenu,
  title: "ActionMenu",
  excludeStories: /.*actions$/,
} as Meta;

const Template: Story<ActionMenuProps> = (args) => <ActionMenu {...args} />;

export const actions: ActionItemType[] = [
  {
    label: "Edit",
    Icon: FaEdit,
  },
  {
    label: "Delete",
    Icon: FaTrash,
  },
  {
    label: "Comment",
    Icon: FaCommentDots,
  },
];

export const Primary = Template.bind({});
Primary.args = {
  actions: actions,
  numberSelectedItems: 1,
};
