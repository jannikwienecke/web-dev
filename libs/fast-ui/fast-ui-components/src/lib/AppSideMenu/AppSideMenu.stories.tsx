import { Story, Meta } from '@storybook/react';
import {
  AppSideMenu,
  AppSideMenuGroupItemProps,
  AppSideMenuProps,
} from './AppSideMenu';

import { screen, userEvent } from '@storybook/testing-library';

export default {
  component: AppSideMenu,
  title: 'AppSideMenu',
  excludeStories: /.*appTestGroups$/,
  decorators: [
    (Story) => (
      <div style={{ height: '900px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<AppSideMenuProps> = (args) => <AppSideMenu {...args} />;

export const appTestGroups: AppSideMenuGroupItemProps[] = [
  {
    title: 'Employee Views',
    appItems: [
      { label: 'All Employee', pathname: '#' },
      { label: 'Active Employee', pathname: '#' },
      { label: 'Left Employee', pathname: '#' },
    ],
  },

  {
    title: 'Employee Settings',
    appItems: [
      { label: 'Settings', pathname: '#' },
      { label: 'Views', pathname: '#' },
      { label: 'Drivers', pathname: '#', isActive: true },
      { label: 'TImes', pathname: '#' },
    ],
  },
];

export const Opened = Template.bind({});
Opened.args = {
  isOpen: true,
  appGroups: appTestGroups,
  appName: 'User Management',
  appDescription: 'Create, update, and delete users',
};

export const OpenedFolder = Template.bind({});
OpenedFolder.args = {
  isOpen: true,
  appGroups: appTestGroups,
  appName: 'User Management',
  appDescription: 'CRUD Methods',
};

OpenedFolder.play = async () => {
  setTimeout(() => {
    const submitButton = screen.getByRole('button', {
      name: /folder toggle/i,
    }).firstElementChild;

    submitButton && userEvent.click(submitButton);
  }, 300);

  setTimeout(() => {
    const submitButton = screen.getByRole('button', {
      name: /search open/i,
    });
    userEvent.click(submitButton);
  }, 600);
};
