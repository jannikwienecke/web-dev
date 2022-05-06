import { Story, Meta } from '@storybook/react';
import { module_test_1 } from '../Sidebar/Sidebar.stories';
import { SidebarGroupItem, SidebarGroupItemProps } from './SidebarGroupItem';

export default {
  component: SidebarGroupItem,
  title: 'SidebarGroupItem',
  decorators: [(Story) => <div className="bg-skin-layer">{Story()}</div>],
} as Meta;

const Template: Story<SidebarGroupItemProps> = (args) => (
  <SidebarGroupItem {...args} />
);

export const Collapsed = Template.bind({});
Collapsed.args = {
  module: module_test_1,
  isCollapsed: true,
};

export const NotCollapsed = Template.bind({});
NotCollapsed.args = {
  module: module_test_1,
  isCollapsed: false,
};
