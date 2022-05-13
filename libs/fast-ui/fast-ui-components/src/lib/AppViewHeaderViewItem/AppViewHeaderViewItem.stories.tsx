import { Story, Meta } from '@storybook/react';
import {
  AppViewHeaderViewItem,
  AppViewHeaderViewItemProps,
} from './AppViewHeaderViewItem';

export default {
  component: AppViewHeaderViewItem,
  title: 'AppViewHeaderViewItem',
} as Meta;

const Template: Story<AppViewHeaderViewItemProps> = (args) => (
  <AppViewHeaderViewItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
