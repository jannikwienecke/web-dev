import { Story, Meta } from '@storybook/react';
import { SidebarUser, SidebarUserProps } from './SidebarUser';

export default {
  component: SidebarUser,
  title: 'SidebarUser',
  decorators: [
    (Story) => (
      <div className="flex flex-col relative bg-skin-layer">{Story()}</div>
    ),
  ],
} as Meta;

const Template: Story<SidebarUserProps> = (args) => <SidebarUser {...args} />;

export const Collapsed = Template.bind({});
Collapsed.args = {
  isCollapsed: true,
  onToggle: () => null,
  user: {
    username: 'John Doe',
  },
};

export const NotCollapsed = Template.bind({});

NotCollapsed.args = {
  isCollapsed: false,
  onToggle: () => null,
  user: {
    username: 'John Doe',
  },
};
