import { Story, Meta } from '@storybook/react';
import { AppSideMenuItem, AppSideMenuItemProps } from './AppSideMenuItem';

export default {
  component: AppSideMenuItem,
  title: 'AppSideMenuItem',
} as Meta;

const Template: Story<AppSideMenuItemProps> = (args) => (
  <AppSideMenuItem {...args} />
);

export const InActive = Template.bind({});
InActive.args = {
  label: 'Home',
  pathname: '#',
  description: 'Home page',
  isActive: false,
};

export const Active = Template.bind({});
Active.args = {
  label: 'Home',
  pathname: '#',
  description: 'Home page',
  isActive: true,
};
