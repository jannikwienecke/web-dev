import { Story, Meta } from "@storybook/react";
import {
  TablePaginationButton,
  TablePaginationButtonProps,
} from "./table-pagination-button";

export default {
  component: TablePaginationButton,
  title: "TablePaginationButton",
  decorators: [
    (Story) => (
      <div className="bg-skin-layer relative flex flex-col">{Story()}</div>
    ),
  ],
} as Meta;

const Template: Story<TablePaginationButtonProps> = (args) => (
  <TablePaginationButton {...args}>Next</TablePaginationButton>
);

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
};

export const enabled = Template.bind({});
enabled.args = {
  disabled: false,
};
