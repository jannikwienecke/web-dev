import { Story, Meta } from "@storybook/react";
import { Select, SelectProps } from "./Select";

export default {
  component: Select,
  title: "Select",
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: Story<SelectProps<any>> = (args) => <Select {...args} />;

export const NoOptions = Template.bind({});
NoOptions.args = {
  options: [],
};

export const UnControlled = Template.bind({});
UnControlled.args = {
  options: [
    { id: "1", label: "Option 1" },
    { id: "2", label: "Option 2" },
  ],
};

export const Conrolled = Template.bind({});
Conrolled.args = {
  options: [
    { id: "1", label: "Option 1" },
    { id: "2", label: "Option 2" },
  ],

  value: { id: "1", label: "Option 1" },
};
