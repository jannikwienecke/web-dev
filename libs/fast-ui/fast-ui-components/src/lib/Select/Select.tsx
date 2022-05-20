import { Combobox } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import React from "react";

export interface SelectItem {
  id: string | number;
  label: string;
}

export interface SelectProps<T extends SelectItem> {
  options: T[];
  value?: T | undefined;
  onChange?: (value: T) => void;
}

export function Select<T extends SelectItem>({
  options,
  value,
  onChange,
}: SelectProps<T>) {
  const [query, setQuery] = React.useState("");
  const [selected, setSelected] = React.useState<T | undefined>();

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });

  const _value = value || selected;

  const handleValueChange = (value: T) => {
    // make controlled as soon has onChange function passed
    if (onChange) {
      onChange?.(value);
    } else {
      setSelected(value);
    }
  };

  return (
    <Combobox as="div" value={_value} onChange={handleValueChange}>
      <div className="relative mt-1">
        <Combobox.Input
          className="focus:border-skin-accent focus:ring-accent w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10   shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(option: any) => option?.label}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredOptions.length > 0 && (
          <Combobox.Options
            style={{
              boxShadow:
                "10px -10px 15px -3px rgb(0 0 0 / 0.1), 0px 10px 6px -4px rgb(0 0 0 / 0.1)",
            }}
            className="bg-skin-base-light absolute top-12 z-10 mt-1 max-h-60 w-auto min-w-[12rem] overflow-auto rounded-md py-1 text-base shadow-xl shadow-2xl shadow-lg shadow-slate-900 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {filteredOptions.map((option) => (
              <Combobox.Option
                key={option.id}
                value={option}
                className={({ active }) =>
                  `relative max-w-[18rem] cursor-default select-none text-ellipsis py-2  pl-3 pr-9
                    ${
                      active
                        ? "bg-skin-accent text-skin-base-inverted"
                        : "text-skin-base-light"
                    }`
                }
              >
                {({ active }) => {
                  const selected = _value?.id === option.id;

                  return (
                    <>
                      <span
                        className={`block truncate
                        ${selected && "font-semibold"}`}
                      >
                        {option.label}
                      </span>

                      {selected && (
                        <span
                          className={`absolute inset-y-0 right-0 flex items-center pr-4
                         
                          ${
                            active
                              ? "text-skin-base-inverted"
                              : "text-skin-accent"
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  );
                }}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}