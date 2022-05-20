import { Story, Meta } from "@storybook/react";
import { FilterRow, FilterRowProps } from "./FilterRow";

export default {
  component: FilterRow,
  title: "FilterRow",
} as Meta;

const Template: Story<FilterRowProps> = (args) => <FilterRow {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
