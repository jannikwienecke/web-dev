import { Story, Meta } from '@storybook/react';
import { FiActivity } from 'react-icons/fi';
import { SidebarItem } from '../Sidebar/Sidebar';
import { SidebarHeader, SidebarHeaderProps } from './SidebarHeader';

export default {
  component: SidebarHeader,
  title: 'SidebarHeader',
  decorators: [(Story) => <div className="bg-skin-layer">{Story()}</div>],
} as Meta;

const Template: Story<SidebarHeaderProps> = (args) => (
  <SidebarHeader {...args} />
);

const app: SidebarItem = {
  description: 'Workspace',
  label: 'Hamann Erp System',
  pathname: '#',
  icon: FiActivity,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  isCollapsed: true,
  app,
};

export const NotCollapsed = Template.bind({});
NotCollapsed.args = {
  isCollapsed: false,
  app,
};
