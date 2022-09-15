import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { FilterMenu } from "../FilterMenu/FilterMenu";
import { FilterMenuMachineContext } from "../FilterMenu/machine";
import {
  FilterComparatorOptions,
  FilterItem,
  FilterItemDone,
  FilterItemReady,
  FilterListOption,
  FilterOption,
} from "../FilterMenu/types";
import { Listbox } from "../Listbox/Listbox";
import { Popover } from "../Popover/Popover";
import { popoverGroups } from "../Popover/Popover.stories";
import { SelectItem } from "../Select/Select";

const listboxItemsGroupby = [
  { id: "1", label: "None", value: false },
  { id: "2", label: "Status", value: true },
  { id: "3", label: "Assigne", value: false },
  { id: "4", label: "Tags", value: false },
  { id: "5", label: "Due Date", value: false },
];

const listboxItemsSearchBy = [
  { id: "5", label: "ID", value: true },
  { id: "2", label: "First Name", value: true },
  { id: "3", label: "Last Name", value: true },
  { id: "4", label: "Department", value: true },
];

const filterList: FilterItemDone[] = [
  {
    id: "1",
    filterOption: { id: "1", label: "Name", valueType: "string" },
    validateKey: { label: "contains" },
    filterValue: "Jannik",
    index: 0,
  },

  {
    id: "2",
    filterOption: { id: "3", label: "Created", valueType: "date" },
    validateKey: { label: "is" },
    filterValue: "Today",
    index: 1,
  },

  {
    id: "3",
    filterOption: { id: "4", label: "Done", valueType: "boolean" },
    validateKey: { label: "equal" },
    filterValue: true,
    index: 2,
  },
  {
    id: "4",
    filterOption: {
      id: "5",
      label: "Department",
      valueType: "relational",
    },
    filterRelationalValue: { label: "Sales", id: "sales" },
    validateKey: { label: "equal" },
    index: 3,
  },
];

export const filterByKeys: FilterOption[] = [
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

  {
    id: "3",
    label: "Created",
    valueType: "date",
  },

  {
    id: "4",
    label: "When was it created? A very long name",
    valueType: "date",
  },

  {
    id: "5",
    label: "Deparment",
    valueType: "relational",
    getOptions: () =>
      Promise.resolve<FilterListOption[]>([
        { label: "Office", id: "2", valueType: "relational" },
      ]),
    defaultOptions: [{ label: "German Driver", id: 1 }],
  },
];

export const filterComparatorOptions: FilterComparatorOptions = {
  string: ["contains", "starts with"],
  number: ["equal", "not equal"],
  boolean: ["equal", "not equal"],
  relational: ["equal", "not equal"],
  date: ["equal"],
};

export const filterDateOptions: SelectItem[] = [
  { id: "1", label: "Today" },
  { id: "2", label: "Yesterday" },
  { id: "3", label: "Last 7 days" },
];

/* eslint-disable-next-line */
export interface AppViewControlPanelProps {}

export function AppViewControlPanel(props: AppViewControlPanelProps) {
  const [filterContext, setFilterContext] =
    React.useState<FilterMenuMachineContext>({
      andOrFiltering: "AND",
      filterOptions: filterByKeys,
      filterList,
      filterComparatorOptions,
      hasError: false,
      filterDateOptions,
    });

  const handleSave = (
    filterMenuContext: FilterMenuMachineContext,
    filterList: FilterItemReady[]
  ) => {
    setFilterContext({
      ...filterMenuContext,
      filterList,
    });
  };

  return (
    <div className="text-skin-base-light my-4 mx-2 flex flex-row justify-between bg-red-50 p-4 text-sm">
      {/* left side */}
      <div className="flex flex-row gap-2">
        <div className=" relative flex cursor-pointer flex-row place-items-center gap-[1px]">
          <FaFilter />
          <div className="relative top-1">
            <FilterMenu {...filterContext} onSave={handleSave}>
              <AiOutlineCaretDown className="text-xs" />
            </FilterMenu>
          </div>
        </div>
        <div className="flex flex-row place-items-center">
          {/* Search Input */}
          <div>
            <label htmlFor="control-panel-search" className="sr-only" />
            <div className="focus-within:border-skin-accent mt-1">
              <input
                type="text"
                name="control-panel-search"
                id="control-panel-serach"
                // eslint-disable-next-line
                className="focus:ring-accent focus:border-accent outline-accent block w-full rounded-none rounded-l-md bg-transparent p-2 px-4 sm:text-sm"
                placeholder="Search in employees"
              />
            </div>
          </div>

          {/* GROUP BY LIST BOX */}
          <div>
            <Listbox
              options={{ allowMultipleSelection: true }}
              listItems={listboxItemsSearchBy}
              label="Search In"
            >
              <div className="flex flex-row">
                <AiOutlineCaretDown />
              </div>
            </Listbox>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-row gap-8">
        <div className="flex flex-row place-items-center">
          <div className="mr-1">Group by: </div>

          {/* GROUP BY LIST BOX */}
          <div className="text-skin-base-dark hover:text-skin-accent relative flex cursor-pointer flex-row">
            <Listbox
              options={{ allowMultipleSelection: false }}
              listItems={listboxItemsGroupby}
              label="Group By"
            >
              <div className="flex flex-row">
                <div className="">Tags</div>

                <div className="flex flex-row place-items-center">
                  <AiOutlineCaretDown />
                </div>
              </div>
            </Listbox>
          </div>
        </div>

        <div className="flex place-items-center">
          <Popover
            groups={popoverGroups}
            button={
              <button>
                <HiDotsHorizontal className=" cursor-pointer text-xl" />
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AppViewControlPanel;
