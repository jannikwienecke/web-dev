import { Story, Meta } from '@storybook/react';
import { FaUser } from 'react-icons/fa';
import { SidebarItem } from '../Sidebar/Sidebar';
import { SidebarControl, SidebarControlProps } from './SidebarAppDrawerItem';

export default {
  component: SidebarControl,
  title: 'SidebarAppDrawerItem',
  decorators: [
    (Story) => (
      <div className="bg-skin-layer">
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<SidebarControlProps> = (args) => (
  <SidebarControl {...args} />
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
