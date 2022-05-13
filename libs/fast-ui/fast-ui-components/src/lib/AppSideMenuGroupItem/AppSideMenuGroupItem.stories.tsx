import { Story, Meta } from '@storybook/react';
import {
  AppSideMenuGroupItem,
  AppSideMenuGroupItemProps,
} from './AppSideMenuGroupItem';

export default {
  component: AppSideMenuGroupItem,
  title: 'AppSideMenuGroupItem',
} as Meta;

const Template: Story<AppSideMenuGroupItemProps> = (args) => (
  <AppSideMenuGroupItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
