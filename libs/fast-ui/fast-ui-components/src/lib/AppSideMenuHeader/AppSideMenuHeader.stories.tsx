import { Story, Meta } from '@storybook/react';
import { AppSideMenuHeader, AppSideMenuHeaderProps } from './AppSideMenuHeader';

export default {
  component: AppSideMenuHeader,
  title: 'AppSideMenuHeader',
} as Meta;

const Template: Story<AppSideMenuHeaderProps> = (args) => (
  <AppSideMenuHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  appName: 'Time Tracking',
  appDescription: 'Track your time',
};

export const Overflow = Template.bind({});
Overflow.args = {
  appName: 'Time Tracking',
  appDescription:
    'Gets Event Longer and longer and longer. Track your time. A very long description that will overflow. How long is this?',
};
