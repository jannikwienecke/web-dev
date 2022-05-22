import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useFilterMenuItem } from "../FilterMenu/hooks";
import { useFilterMenuState } from "../FilterMenu/state";
import {
  FilterItemBaseType,
  FilterItemRelationalType,
} from "../FilterMenu/types";
import { FilterMenuAndOrToggle } from "../FilterMenuAndOrToggle/FilterMenuAndOrToggle";
import { FilterMenuInput } from "../FilterMenuInput/FilterMenuInput";
import { Select } from "../Select/Select";

export type FilterRowProps = (FilterItemBaseType | FilterItemRelationalType) & {
  index: number;
};

export const FilterRow: React.FC<FilterRowProps> = (filter) => {
  const { index } = filter;

  const machine = useFilterMenuState();

  const handleClickRemoveFilter = () => {
    machine.send({ type: "REMOVE_FILTER", data: { filterItem: filter } });
  };

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

        {/* WILL ALWAYS BE RENDERED */}
        <FilterMenuOptionSelect {...filter} />

        {/* WILL BE RENDERERD IF AN OPTION IS SELECTED  */}
        <FilterMenuFilterBySelect {...filter} />

        {/* VALUE SELECT OR INPUT FIELDS - ONE OF THESE WILL BE RENDERERD */}
        <FilterMenuDateValueSelect {...filter} />
        <FilterMenuBooleanValueSelect {...filter} />
        <FilterMenuRelationValueSelect {...filter} />
        <FilterMenuValueInput {...filter} />
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

export const FilterMenuOptionSelect: React.FC<FilterRowProps> = (props) => {
  const {
    handleChangeFilterOption,
    context,
    filterOption,
    getElementProps,
    getElementWrapperClasses,
  } = useFilterMenuItem(props, "select-option");

  const { filterOptions } = context;

  return (
    <div className={getElementWrapperClasses()}>
      <Select
        onChange={handleChangeFilterOption}
        options={filterOptions}
        {...getElementProps({ value: filterOption })}
      />
    </div>
  );
};

export const FilterMenuFilterBySelect: React.FC<FilterRowProps> = ({
  ...props
}) => {
  const {
    handleChangeFilterBy,
    getElementProps,
    validateKey,
    filterByOptions,
    getElementWrapperClasses,
  } = useFilterMenuItem(props, "select-validate-key");

  if (!filterByOptions) return null;

  const value = validateKey
    ? { id: validateKey.label, label: validateKey.label }
    : {
        id: filterByOptions[0],
        label: filterByOptions[0],
      };

  const elementProps = getElementProps({ value });
  return (
    <div className={getElementWrapperClasses()}>
      <Select
        onChange={handleChangeFilterBy}
        options={filterByOptions.map((option) => {
          return {
            id: option,
            label: option,
          };
        })}
        {...elementProps}
      />
    </div>
  );
};

export const FilterMenuDateValueSelect: React.FC<FilterRowProps> = (props) => {
  const {
    getElementProps,
    handleChangeFilterValue,
    context,
    filterValue,
    getElementWrapperClasses,
  } = useFilterMenuItem(props, "select-value-date");

  const selectedDateOption = context.filterDateOptions.find(
    (option) => option.label === filterValue
  );

  const value =
    filterValue && selectedDateOption && typeof filterValue === "string"
      ? { label: filterValue, id: selectedDateOption.id }
      : undefined;

  const elementProps = getElementProps({ value });
  return (
    <div className={getElementWrapperClasses()}>
      <Select
        onChange={(value) => handleChangeFilterValue(value.label)}
        options={context.filterDateOptions}
        {...elementProps}
      />
    </div>
  );
};

export const FilterMenuBooleanValueSelect: React.FC<FilterRowProps> = (
  props
) => {
  const {
    getElementProps,
    handleChangeFilterValue,
    filterValue,
    getElementWrapperClasses,
  } = useFilterMenuItem(props, "select-value-boolean");

  const value =
    filterValue !== undefined
      ? { label: String(filterValue), id: String(filterValue) }
      : undefined;

  const elementProps = getElementProps({ value });
  return (
    <div className={getElementWrapperClasses()}>
      <Select
        onChange={(value) =>
          handleChangeFilterValue(value.label === "true" ? true : false)
        }
        options={[
          { id: "true", label: "true" },
          { id: "false", label: "false" },
        ]}
        {...elementProps}
      />
    </div>
  );
};

export const FilterMenuRelationValueSelect: React.FC<FilterRowProps> = (
  props
) => {
  const {
    getElementProps,
    handleChangeFilterValue,
    filterRelationalValue,
    handleQueryChange,
    relationalOptions,
    filterOptionConfig,
    getElementWrapperClasses,
  } = useFilterMenuItem(props, "select-value-relation");

  const value =
    filterRelationalValue !== undefined ? filterRelationalValue : undefined;

  const elementProps = getElementProps({ value });
  return (
    <div className={getElementWrapperClasses()}>
      <Select
        onChange={handleChangeFilterValue}
        onQueryChange={handleQueryChange}
        options={
          relationalOptions.length === 0
            ? filterOptionConfig?.defaultOptions || []
            : relationalOptions
        }
        {...elementProps}
      />
    </div>
  );
};

export const FilterMenuValueInput: React.FC<FilterRowProps> = (props) => {
  const {
    getElementProps,
    handleChangeFilterValue,
    filterOption,
    filterValue,
    getElementWrapperClasses,
  } = useFilterMenuItem(props, "input-value");

  const value =
    typeof filterValue === "string" || typeof filterValue === "number"
      ? filterValue
      : undefined;

  const elementProps = getElementProps({ value });

  return (
    <div className={getElementWrapperClasses()}>
      <FilterMenuInput
        onChange={handleChangeFilterValue}
        type={
          filterOption && filterOption.valueType === "string"
            ? "text"
            : "number"
        }
        {...elementProps}
      />
    </div>
  );
};
