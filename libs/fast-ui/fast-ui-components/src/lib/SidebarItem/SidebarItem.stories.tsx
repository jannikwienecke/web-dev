import { Story, Meta } from '@storybook/react';
import { FaUser } from 'react-icons/fa';
import { SidebarItem } from '../Sidebar/Sidebar';
import { SidebarNavItem, SidebarNavItemProps } from './SidebarItem';

export default {
  component: SidebarNavItem,
  title: 'SidebarItem',
  decorators: [
    (Story) => (
      <div className="bg-skin-layer">
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<SidebarNavItemProps> = (args) => (
  <SidebarNavItem {...args} />
);

const navItem: SidebarItem = {
  label: 'User List',
  icon: FaUser,
  pathname: '#',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  navItem,
  isCollapsed: true,
};

export const NotCollapsed = Template.bind({});

NotCollapsed.args = {
  navItem,
  isCollapsed: false,
};
