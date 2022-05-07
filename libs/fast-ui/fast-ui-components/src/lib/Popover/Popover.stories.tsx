import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Popover, PopoverGroup, PopoverProps } from './Popover';

export default {
  component: Popover,
  title: 'Popover',

  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<PopoverProps> = (args) => {
  const [open, setOpen] = React.useState(true);
  const btn = <button onClick={() => setOpen(!open)}>OPEN</button>;

  return <Popover {...args} button={btn} isOpen={open} />;
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
  isOpen: true,
  groups: popoverGroups,
};
