import { Popover, Transition } from "@headlessui/react";
import { useActor } from "@xstate/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment } from "react";
import { IoMdAdd } from "react-icons/io";
import { FilterMenuAlert } from "../FilterMenuErrorAlert/FilterMenuAlert";
import { FilterRow } from "../FilterRow/FilterRow";
import { SelectItem } from "../Select/Select";
import { FilterMenuMachineContext } from "./machine";
import { FilterMenuProvider, useFilterMenuState } from "./state";
import {
  FilterComparatorOptions,
  FilterItem,
  FilterItemReady,
  FilterOption,
} from "./types";

export interface FilterMenuProps {
  children: React.ReactNode;
  filterList: FilterItem[];
  filterOptions: FilterOption[];
  filterComparatorOptions: FilterComparatorOptions;
  filterDateOptions: SelectItem[];
  andOrFiltering: "AND" | "OR";
  invalidFiterMessage?: string;
  onSave?: (
    filterMenuContext: FilterMenuMachineContext,
    filterList: FilterItemReady[]
  ) => void;
}

const filterListHasChanges = (old: FilterItem[], new_: FilterItem[]) => {
  return JSON.stringify(old) !== JSON.stringify(new_);
};

export const filterMenuHasChanges = (
  old: FilterMenuProps,
  new_: FilterMenuMachineContext
): boolean => {
  const filterListChanged = filterListHasChanges(
    old.filterList,
    new_.filterList
  );

  const andOrChnaged = old.andOrFiltering !== new_.andOrFiltering;

  return filterListChanged || andOrChnaged;
};

export function FilterMenu(props: FilterMenuProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <FilterMenuProvider onSave={props.onSave}>
      <div className="relative">
        <Popover ref={containerRef} className="relative">
          {({ open }) => {
            return (
              <>
                <FilterMenuButton open={open} {...props} />
                <FilterMenuContainer {...props} />
              </>
            );
          }}
        </Popover>
      </div>
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
  const machine = useFilterMenuState();
  const { send } = machine;

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

const FilterMenuContainer: React.FC<FilterMenuProps> = ({
  invalidFiterMessage,
  ...initContext
}) => {
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
      <div>
        <Popover.Panel className="absolute z-10 mt-3 min-w-[480px] transform">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="bg-skin-base-light relative relative flex flex-col gap-1 p-7 px-8 lg:grid-cols-2">
              <FilterMenuAlert
                hasError={state.context.hasError}
                invalidFiterMessage={invalidFiterMessage}
                isSaved={state.matches("open.save-mode")}
              />

              <div className="text-skin-base-dark text-xl font-semibold">
                Filters
              </div>

              {filterList?.map((item, index) => {
                return (
                  <AnimatePresence key={`${item.id}_${item.index}`}>
                    <motion.div
                      initial={{ opacity: 0, y: "-10px" }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <FilterRow {...item} index={index} />
                    </motion.div>
                  </AnimatePresence>
                );
              })}

              <div className="mt-4 flex flex-row justify-between p-2 ">
                {/* add filter */}
                <div className="text-skin-accent border-skin-base-light gap-1 text-xs ">
                  <div className="border-skin-base-light inline-flex rounded-md hover:border-[1px]">
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

                {/* Save Button */}
                {filterMenuHasChanges(initContext, state.context) ? (
                  <div className="flex place-items-center">
                    <button
                      onClick={() => send({ type: "EVALUATE_FILTER" })}
                      type="button"
                      className="text-skin-accent bg-skin-accent-light hover:text-skin-base-inverted hover:bg-skin-accent focus:ring-accent inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      Save Filter
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </div>
    </Transition>
  );
};
