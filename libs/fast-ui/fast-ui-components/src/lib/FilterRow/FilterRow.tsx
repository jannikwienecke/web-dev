import { useActor } from "@xstate/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useFilterMenuState } from "../FilterMenu/state";
import { FilterItem, FilterOption, FilterValue } from "../FilterMenu/types";
import { FilterMenuAndOrToggle } from "../FilterMenuAndOrToggle/FilterMenuAndOrToggle";
import { FilterMenuInput } from "../FilterMenuInput/FilterMenuInput";
import { isRelationalType } from "../helper/guards";
import { Select } from "../Select/Select";

export interface FilterRowProps extends FilterItem {
  index: number;
}

export const FilterRow: React.FC<FilterRowProps> = (filter) => {
  const { filterOption, validateKey, filterValue, index } = filter;

  const machine = useFilterMenuState();
  const [state, send] = useActor(machine);

  const { filterOptions, filterComparatorOptions, filterDateOptions } =
    state.context;

  const handleChangeFilterOption = (filterOption: FilterOption) => {
    send({
      type: "UPDATE_OPTION_FILTER",
      data: {
        filterItem: { ...filter, filterOption },
      },
    });
  };

  const handleChangeFilterBy = (filterComparator: string) => {
    send({
      type: "UPDATE_COMPARATOR_FILTER",
      data: {
        filterItem: {
          ...filter,
          validateKey: { label: filterComparator },
        },
      },
    });
  };

  const handleChangeFilterValue = (filterValue: FilterValue) => {
    send({
      type: "UPDATE_VALUE_FILTER",
      data: {
        filterItem: { ...filter, filterValue },
      },
    });
  };

  const handleChangeInputField = (filterValue: string | number) => {
    send({
      type: "UPDATE_VALUE_FILTER",
      data: {
        filterItem: { ...filter, filterValue },
      },
    });
  };

  const handleClickRemoveFilter = () => {
    send({ type: "REMOVE_FILTER", data: { filterItem: filter } });
  };

  if (isRelationalType(filterOption?.valueType)) {
    return null;
  }

  const filterByOptions = filterOption?.valueType
    ? filterComparatorOptions[filterOption.valueType]
    : null;

  const isStringOrNumberFilterOption =
    filterOption && ["string", "number"].includes(filterOption.valueType);

  const selectedDateOption = filterDateOptions.find(
    (option) => option.label === filterValue
  );

  const isInEvaluatingMode = state.matches("open.valuate-mode");

  return (
    <div className="flex flex-row items-center justify-between gap-2  ">
      {/* left side */}
      <div className="flex flex-row place-items-center gap-4">
        {/* filter name */}
        {index === 0 ? (
          <div className="text-skin-base-light w-12">{"Where"}</div>
        ) : (
          <FilterMenuAndOrToggle disabled={index !== 1} />
        )}

        {/* input filed */}
        <div className="w-48">
          <Select
            onChange={handleChangeFilterOption}
            value={filterOption}
            options={filterOptions}
            hasError={isInEvaluatingMode && !filterOption}
          />
        </div>

        {/* FILTER BY (e.g 'is' 'contains') */}
        {filterOption && filterByOptions ? (
          <div className="w-48">
            <Select
              onChange={(value) => {
                handleChangeFilterBy(value.label);
              }}
              value={
                validateKey
                  ? { id: validateKey.label, label: validateKey.label }
                  : {
                      id: filterByOptions[0],
                      label: filterByOptions[0],
                    }
              }
              options={filterByOptions.map((option) => {
                return {
                  id: option,
                  label: option,
                };
              })}
            />
          </div>
        ) : null}

        {/* VALUE INPUT TEXT FIELD DEPENDS ON THE VALUE TYPE */}
        {filterOption && isStringOrNumberFilterOption ? (
          <div className=" w-80">
            <FilterMenuInput
              value={
                typeof filterValue === "string" ||
                typeof filterValue === "number"
                  ? filterValue
                  : undefined
              }
              onChange={handleChangeInputField}
              hasError={isInEvaluatingMode && !filterValue}
              type={filterOption.valueType === "string" ? "text" : "number"}
            />
          </div>
        ) : null}

        {/* VALUE COMBOBOX FOR DATE  */}
        {filterOption &&
        filterOption.valueType === "date" &&
        !isStringOrNumberFilterOption ? (
          <div className=" w-80">
            <Select
              value={
                filterValue &&
                selectedDateOption &&
                typeof filterValue === "string"
                  ? { label: filterValue, id: selectedDateOption.id }
                  : undefined
              }
              options={filterDateOptions}
            />
          </div>
        ) : null}

        {/* VALUE COMBOBOX FOR boolean  */}
        {filterOption &&
        filterOption.valueType === "boolean" &&
        !isStringOrNumberFilterOption &&
        (typeof filterValue === "boolean" || filterValue === undefined) ? (
          <div className=" w-80">
            <Select
              onChange={(value) =>
                handleChangeFilterValue(value.label === "true" ? true : false)
              }
              value={
                filterValue !== undefined
                  ? { label: String(filterValue), id: String(filterValue) }
                  : undefined
              }
              options={[
                { id: "true", label: "true" },
                { id: "false", label: "false" },
              ]}
            />
          </div>
        ) : null}
      </div>

      {/* right side */}
      <div className="flex">
        <button aria-label="remove filter" onClick={handleClickRemoveFilter}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};
