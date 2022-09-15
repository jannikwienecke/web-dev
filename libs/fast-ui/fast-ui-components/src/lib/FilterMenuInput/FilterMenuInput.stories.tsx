import { Story, Meta } from "@storybook/react";
import { FilterMenuInput, FilterMenuInputProps } from "./FilterMenuInput";

export default {
  component: FilterMenuInput,
  title: "FilterMenuInput",
} as Meta;

const Template: Story<FilterMenuInputProps> = (args) => (
  <FilterMenuInput {...args} />
);

export const Text = Template.bind({});
Text.args = {
  type: "text",
};

export const Number = Template.bind({});
Number.args = {
  type: "number",
};

export const NumberError = Template.bind({});
NumberError.args = {
  type: "number",
  hasError: true,
};
