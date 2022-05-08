import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Popover, PopoverGroup, PopoverProps } from './Popover';

export default {
  component: Popover,
  title: 'Popover',
  excludeStories: /.*popoverGroups$/,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<PopoverProps> = (args) => {
  const btn = <button>Toggle Menu</button>;

  return <Popover {...args} button={btn} />;
};

export const popoverGroups: PopoverGroup[] = [
  {
    label: 'Group 1',
    items: [
      { label: 'New Tab', shortCut: '⌘+T' },
      { label: 'New Window', shortCut: '⌘+N' },
    ],
  },

  {
    label: 'Group 2',
    items: [{ label: 'Settings', disabled: true }, { label: 'Profile' }],
  },
];

export const Primary = Template.bind({});
Primary.args = {
  groups: popoverGroups,
};
