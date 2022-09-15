import { Story, Meta } from "@storybook/react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { SelectItem } from "../Select/Select";
import { FilterMenu, FilterMenuProps } from "./FilterMenu";
import { FilterComparatorOptions, FilterItem, FilterOption } from "./types";

export default {
  component: FilterMenu,
  title: "FilterMenu",
  excludeStories: /.*filterMenuProps$/,
} as Meta;

const Template: Story<FilterMenuProps> = (args) => (
  <FilterMenu {...args}>
    <button className="bg-skin-base-light flex grid place-items-center rounded border-2 p-2">
      Filter
      <AiOutlineCaretDown className="text-xs" />
    </button>
  </FilterMenu>
);

const filterList: FilterItem[] = [
  {
    id: "1",
    filterOption: { id: "1", label: "Name", valueType: "string" },
    validateKey: { label: "contains" },
    filterValue: "Jannik",
    index: 0,
  },
];

const filterByKeys: FilterOption[] = [
  {
    id: "1",
    label: "Name",
    valueType: "string",
  },

  {
    id: "2",
    label: "Id",
    valueType: "number",
  },
];

const filterComparatorOptions: FilterComparatorOptions = {
  string: ["contains"],
  number: ["equal", "not equal"],
  boolean: ["equal", "not equal"],
  relational: ["equal"],
  date: ["equal"],
};

const filterDateOptions: SelectItem[] = [
  { id: "1", label: "Today" },
  { id: "2", label: "Yesterday" },
  { id: "3", label: "Last 7 days" },
];

export const filterMenuProps: FilterMenuProps = {
  andOrFiltering: "AND",
  filterList: filterList,
  filterOptions: filterByKeys,
  children: null,
  filterComparatorOptions: filterComparatorOptions,
  filterDateOptions: filterDateOptions,
};

export const Primary = Template.bind({});
Primary.args = filterMenuProps;
