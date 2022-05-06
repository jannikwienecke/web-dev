import { Story, Meta } from '@storybook/react';
import {
  FaAddressBook,
  FaApple,
  FaHiking,
  FaHome,
  FaPuzzlePiece,
  FaShoppingCart,
  FaUser,
} from 'react-icons/fa';
import { FiActivity, FiSettings } from 'react-icons/fi';
import { Module, Sidebar, SidebarItem, SidebarProps, User } from './Sidebar';

export default {
  component: Sidebar,
  title: 'Sidebar',
  excludeStories: /.*module_test_1$/,
  decorators: [
    (Story) => (
      <div style={{ height: '900px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

const user: User = { username: 'John Doe', imgSrc: '' };
const main: SidebarItem = {
  label: 'Select Apps',
  icon: FaHome,
  path: '#',
};
const app: SidebarItem = {
  label: 'Hamann Erp System',
  icon: FiActivity,
  path: '#',
  description: 'Workspace',
};

export const module_test_1: Module = {
  title: 'Fast UI Components',
  navigationItems: [
    { icon: FaUser, label: 'User List', path: '#' },
    {
      icon: FaHiking,
      label: 'Hiking',
      path: '#',
    },
    {
      icon: FaAddressBook,
      label: 'Address Book',
      path: '#',
    },
    {
      icon: FaApple,
      label: 'Apple',
      path: '#',
    },
  ],
};

const modules: Module[] = [
  module_test_1,
  {
    title: 'Settings',
    navigationItems: [
      { icon: FaPuzzlePiece, label: 'Plugins', path: '#' },
      {
        icon: FaShoppingCart,
        label: 'Marketplace',
        path: '#',
      },
      {
        icon: FiSettings,
        label: 'Settings',
        path: '#',
      },
    ],
  },
];

export const Collapsed = Template.bind({});

Collapsed.args = {
  user,
  app,
  main,
  modules,
  isCollapsed: true,
};

export const NotCollapsed = Template.bind({});

NotCollapsed.args = {
  user,
  app,
  main,
  modules,
  isCollapsed: false,
};
