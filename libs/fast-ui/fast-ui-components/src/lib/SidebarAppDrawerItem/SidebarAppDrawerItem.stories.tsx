import { Story, Meta } from '@storybook/react';
import { FaUser } from 'react-icons/fa';
import { SidebarItem } from '../Sidebar/Sidebar';
import {
  SidebarAppDrawerItem,
  SidebarAppDrawerItemProps,
} from './SidebarAppDrawerItem';

export default {
  component: SidebarAppDrawerItem,
  title: 'SidebarAppDrawerItem',
  decorators: [
    (Story) => (
      <div className="bg-skin-layer">
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<SidebarAppDrawerItemProps> = (args) => (
  <SidebarAppDrawerItem {...args} />
);

const navItem: SidebarItem = {
  label: 'User List',
  icon: FaUser,
  pathname: '#',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  isCollapsed: true,
  appdrawerItem: navItem,
};

export const NotCollapsed = Template.bind({});

NotCollapsed.args = {
  isCollapsed: false,
  appdrawerItem: navItem,
};
