import { Story, Meta } from '@storybook/react';
import { AppViewHeader, AppViewHeaderProps } from './AppViewHeader';

export default {
  component: AppViewHeader,
  title: 'AppViewHeader',
} as Meta;

const Template: Story<AppViewHeaderProps> = (args) => (
  <AppViewHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
