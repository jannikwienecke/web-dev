import { Story, Meta } from '@storybook/react';
import { Sidebar, SidebarProps } from './Sidebar';

export default {
  component: Sidebar,
  title: 'FastUiFastUiComponents',
  decorators: [
    (Story) => (
      <div style={{ height: '900px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
