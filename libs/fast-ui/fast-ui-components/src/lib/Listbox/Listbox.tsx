import { Listbox as ListBoxHeadlessUi, Transition } from "@headlessui/react";
import { CheckIcon } from "@radix-ui/react-icons";
import React, { Fragment, useState } from "react";
import Toggle from "../Toggle/Toggle";

export interface ListboxItem {
  label: string;
  id: string;
  value: boolean;
}

export interface ListboxOptions {
  allowMultipleSelection?: boolean;
}

export interface ListboxProps {
  label: string;
  listItems: ListboxItem[];
  children?: React.ReactNode;
  options?: ListboxOptions;
  onChange?: (selectedItem: ListboxItem) => void;
}

type ToggleDict = Record<string | number, boolean>;

export const Listbox: React.FC<ListboxProps> = ({
  label,
  listItems,
  children,
  options,
  onChange,
}) => {
  const [selected, setSelected] = useState(
    !options?.allowMultipleSelection
      ? listItems.find((item) => item.value)
      : undefined
  );

  const [toggleDict, setToggleDict] = React.useState<ToggleDict>(
    options?.allowMultipleSelection
      ? listItems.reduce((acc, item) => ({ ...acc, [item.id]: item.value }), {})
      : {}
  );

  React.useEffect(() => {
    if (!selected) return;
    onChange?.(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const handleToggle = (id: string, isToggled: boolean) => {
    setToggleDict({
      ...toggleDict,
      [id]: isToggled,
    });
  };

  const handleSelect = (id: string | number | undefined) => {
    if (!id) {
      setSelected(undefined);
      return;
    }

    setSelected(listItems.find((item) => item.id === id));
  };

  return (
    <div className="w-64">
      <ListBoxHeadlessUi value={selected?.id} onChange={handleSelect}>
        <div className="relative mt-1">
          <ListBoxHeadlessUi.Button>{children}</ListBoxHeadlessUi.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListBoxHeadlessUi.Options className="bg-skin-base-dark absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <div className="text-skin-base-dark p-2 pb-4  pl-10 text-xs uppercase">
                {label}
              </div>
              {listItems.map((listItem, personIdx) => (
                <ListBoxHeadlessUi.Option
                  key={personIdx}
                  className={({ active }) =>
                    `hover:th relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-skin-accent-light text-skin-base-inverted"
                        : "text-skin-base-dark"
                    }`
                  }
                  value={listItem.id}
                >
                  {({ selected }) => (
                    // CONTENT OF LISTBOX
                    <div className="flex flex-row place-items-center gap-3">
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {listItem.label}
                      </span>

                      {/* TOGGLE FOR WHEN YOU CAN SELECT MULTIPLE */}
                      {options?.allowMultipleSelection ? (
                        <span className="absolute inset-y-0 right-4 flex items-center pl-3  ">
                          <Toggle
                            value={toggleDict[listItem.id]}
                            onChange={(state) =>
                              handleToggle(listItem.id, state)
                            }
                          />
                        </span>
                      ) : null}

                      {/* CHECK WHEN YOU CAN SELECT ONLY ONE */}
                      {selected && !options?.allowMultipleSelection ? (
                        <span className="text-skin-accent absolute inset-y-0 right-4 flex items-center pl-3">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </div>
                  )}
                </ListBoxHeadlessUi.Option>
              ))}
            </ListBoxHeadlessUi.Options>
          </Transition>
        </div>
      </ListBoxHeadlessUi>
    </div>
  );
};
