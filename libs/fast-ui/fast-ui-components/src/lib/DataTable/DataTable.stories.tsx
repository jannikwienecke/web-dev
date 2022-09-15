import { Story, Meta } from "@storybook/react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable, DataTableProps } from "./DataTable";

export default {
  component: DataTable,
  title: "DataTable",
} as Meta;

const Template: Story<DataTableProps<unknown, any[]>> = (args) => (
  <DataTable {...args} />
);

const persons: Person[] = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 3,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 4,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 5,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 6,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 7,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 8,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 9,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 10,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 11,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 12,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
];

const columns: ColumnDef<Person, unknown>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Age",
    accessorKey: "age",
  },
  {
    header: "Address",
    accessorKey: "address",
  },
  {
    header: "Role",
    accessorKey: "role",
  },
];

export const Primary = Template.bind({});
Primary.args = {
  columns: columns,
  data: persons,
};

interface Person {
  id: number;
  name: string;
  age: number;
  address: string;
  role: string;
}
