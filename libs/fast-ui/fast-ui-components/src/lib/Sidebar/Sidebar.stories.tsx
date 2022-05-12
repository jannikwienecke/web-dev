import { ComponentMeta, Story } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import { FaAddressBook, FaApple, FaHiking, FaUser } from 'react-icons/fa';
import { FiActivity, FiSettings } from 'react-icons/fi';
import {
  HiOutlineBell,
  HiOutlineCloud,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiStar,
} from 'react-icons/hi';
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
} as ComponentMeta<typeof Sidebar>;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

const user: User = { username: 'John Doe', imgSrc: '' };

const sideControlItems: SidebarItem[] = [
  {
    label: 'Select Apps',
    icon: HiOutlineHome,
    pathname: '#',
  },

  {
    label: 'Notifications',
    icon: HiOutlineBell,
    pathname: '#',
  },

  {
    label: 'Favorites',
    icon: HiStar,
    pathname: '#',
    isActive: true,
  },
];

const sidebarSecodaryItems: SidebarItem[] = [
  { icon: HiOutlineCloud, label: 'Plugins', pathname: '#' },
  {
    icon: HiOutlineShoppingCart,
    label: 'Marketplace',
    pathname: '#',
  },
  {
    icon: FiSettings,
    label: 'Settings',
    pathname: '#',
  },
];

const app: SidebarItem = {
  label: 'Hamann Erp System',
  icon: FiActivity,
  pathname: '#',
  description: 'Workspace',
};

export const module_test_1: Module = {
  title: 'Fast UI Components',
  navigationItems: [
    { icon: FaUser, label: 'User List', pathname: '#' },
    {
      icon: FaHiking,
      label: 'Hiking',
      pathname: '#',
    },
    {
      icon: FaAddressBook,
      label: 'Address Book',
      pathname: '#',
    },
    {
      icon: FaApple,
      label: 'Apple',
      pathname: '#',
    },
  ],
};

const modules: Module[] = [module_test_1];

export const Collapsed = Template.bind({});

Collapsed.args = {
  user,
  app,
  sideControlItems,
  sideControlSecondaryItems: sidebarSecodaryItems,
  modules,
  isCollapsed: true,
};

export const NotCollapsed = Template.bind({});

NotCollapsed.args = {
  user,
  app,
  sideControlItems,
  modules,
  isCollapsed: false,
  sideControlSecondaryItems: sidebarSecodaryItems,
};

export const Play = Template.bind({});

Play.args = {
  user,
  app,
  sideControlItems: [],
  modules,
  isCollapsed: true,
};

Play.play = async () => {
  setTimeout(() => {
    const submitButton = screen.getByRole('button', {
      name: /open sidebar button/i,
    });
    userEvent.click(submitButton);
  }, 300);

  setTimeout(() => {
    const submitButton = screen.getByRole('button', {
      name: /close sidebar button/i,
    });
    userEvent.click(submitButton);
  }, 1200);

  setTimeout(() => {
    const submitButton = screen.getByRole('button', {
      name: /user settings button/i,
    });
    userEvent.click(submitButton);
  }, 1400);
};
