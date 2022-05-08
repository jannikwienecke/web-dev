import { Story, Meta } from '@storybook/react';
import { AppGroup, AppSideMenu, AppSideMenuProps } from './AppSideMenu';

export default {
  component: AppSideMenu,
  title: 'AppSideMenu',
  decorators: [
    (Story) => (
      <div style={{ height: '900px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<AppSideMenuProps> = (args) => <AppSideMenu {...args} />;

export const appTestGroups: AppGroup[] = [
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

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
};
