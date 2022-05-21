import { Meta, Story } from "@storybook/react";
import { FilterMenuAlert, FilterMenuErrorAlertProps } from "./FilterMenuAlert";

export default {
  component: FilterMenuAlert,
  title: "FilterMenuErrorAlert",
  decorators: [(story) => <div>{story()}</div>],
} as Meta;

const Template: Story<FilterMenuErrorAlertProps> = (args) => (
  <FilterMenuAlert {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  hasError: true,
  invalidFiterMessage: "Check your filter",
};
