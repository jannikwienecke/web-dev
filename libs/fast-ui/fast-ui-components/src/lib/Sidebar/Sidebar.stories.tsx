import { ComponentMeta, Story } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
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
} as ComponentMeta<typeof Sidebar>;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

const user: User = { username: 'John Doe', imgSrc: '' };
const main: SidebarItem = {
  label: 'Select Apps',
  icon: FaHome,
  pathname: '#',
};
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

const modules: Module[] = [
  module_test_1,
  {
    title: 'Settings',
    navigationItems: [
      { icon: FaPuzzlePiece, label: 'Plugins', pathname: '#' },
      {
        icon: FaShoppingCart,
        label: 'Marketplace',
        pathname: '#',
      },
      {
        icon: FiSettings,
        label: 'Settings',
        pathname: '#',
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

export const Play = Template.bind({});

Play.args = {
  user,
  app,
  main,
  modules,
  isCollapsed: true,
};

Play.play = async () => {
  // const toggleBtn = await screen.findByRole('button', {
  //   name: /open sidebar/i,
  // });

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
