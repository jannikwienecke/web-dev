import { Popover, Transition } from "@headlessui/react";
import { useActor } from "@xstate/react";
import React, { Fragment } from "react";
import { IoMdAdd } from "react-icons/io";
import { FilterRow } from "../FilterRow/FilterRow";
import { SelectItem } from "../Select/Select";
import { FilterMenuProvider, useFilterMenuState } from "./state";
import { FilterComparatorOptions, FilterItem, FilterOption } from "./types";

export interface FilterMenuProps {
  children: React.ReactNode;
  filterList: FilterItem[];
  filterOptions: FilterOption[];
  filterComparatorOptions: FilterComparatorOptions;
  filterDateOptions: SelectItem[];
  andOrFiltering: "AND" | "OR";
}

export function FilterMenu(props: FilterMenuProps) {
  return (
    <FilterMenuProvider>
      {(stateMachine) => {
        return (
          <div className="relative">
            <Popover className="relative">
              {({ open }) => {
                return (
                  <>
                    <FilterMenuButton open={open} {...props} />
                    <FilterMenuContainer />
                  </>
                );
              }}
            </Popover>
          </div>
        );
      }}
    </FilterMenuProvider>
  );
}

interface FilterMenuButtonProps extends FilterMenuProps {
  open: boolean;
}

const FilterMenuButton: React.FC<FilterMenuButtonProps> = ({
  children,
  open,
  ...props
}) => {
  const { send } = useFilterMenuState();

  React.useEffect(() => {
    send({
      type: open ? "OPEN" : "CLOSE",
      data: {
        context: props,
      },
    });
  }, [open, props, send]);

  return <Popover.Button className="relative">{children}</Popover.Button>;
};

const FilterMenuContainer = () => {
  const machine = useFilterMenuState();

  const [state, send] = useActor(machine);

  const filterList = state.context.filterList;

  const handleClickAddNewFilter = () => {
    send({
      type: "ADD_FILTER",
    });
  };

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="test absolute z-10 mt-3 min-w-[480px]  transform">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="bg-skin-base-light relative flex flex-col gap-1 p-7 px-8 lg:grid-cols-2">
            <div className="text-skin-base-dark text-xl font-semibold">
              Filters
            </div>

            {filterList?.map((item, index) => {
              return <FilterRow {...item} index={index} />;
            })}

            {/* add filter */}
            <div className="text-skin-accent border-skin-base-light mt-4 gap-1 text-xs ">
              <div className="border-skin-base-light inline-flex rounded-md  p-2 hover:border-[1px]">
                <div className="flex place-items-center">
                  <IoMdAdd />
                </div>
                <div
                  onClick={handleClickAddNewFilter}
                  className="flex place-items-center"
                >
                  Add filter
                </div>
              </div>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};
