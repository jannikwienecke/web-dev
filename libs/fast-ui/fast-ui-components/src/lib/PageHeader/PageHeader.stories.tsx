import { Story, Meta } from '@storybook/react';
import { PageHeader, PageHeaderProps } from './PageHeader';

export default {
  component: PageHeader,
  title: 'PageHeader',
} as Meta;

const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
