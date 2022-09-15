import { Story, Meta } from "@storybook/react";
import { TablePaginationButton } from "../TablePaginationButton/table-pagination-button";
import { TablePagination, TablePaginationProps } from "./table-pagination";

export default {
  component: TablePagination,
  title: "TablePagination",
  decorators: [
    (Story) => (
      <div className="bg-skin-layer relative flex flex-col">{Story()}</div>
    ),
  ],
} as Meta;

const Template: Story<TablePaginationProps> = (args) => (
  <TablePagination {...args}>
    <button>click me</button>
  </TablePagination>
);

export const Primary = Template.bind({});
Primary.args = {
  totalItems: 100,
  index: 0,
  pageSize: 10,
  buttons: [
    <TablePaginationButton
      disabled={true}
      onClick={() => {
        //
      }}
    >
      Previous
    </TablePaginationButton>,

    <TablePaginationButton
      disabled={false}
      onClick={() => {
        //
      }}
    >
      Next
    </TablePaginationButton>,
  ],
};
