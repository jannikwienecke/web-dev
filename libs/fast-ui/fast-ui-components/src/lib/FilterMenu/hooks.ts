import { useActor } from "@xstate/react";
import React from "react";
import { FilterRowProps } from "../FilterRow/FilterRow";
import { SelectItem } from "../Select/Select";
import { getFilterMeta, validateIfShow } from "./helper";
import { useFilterMenuState } from "./state";
import { FilterMenuItemType, FilterListOption, FilterValue } from "./types";

export const useFilterMenuItemRelational = (filter: FilterRowProps) => {
  const [relationalOptions, setRelationalOptions] = React.useState<
    SelectItem[]
  >([]);

  const machine = useFilterMenuState();
  const [state] = useActor(machine);

  const filterOptionConfig = state.context.filterOptions.find(
    (option) => option.id === filter.filterOption?.id
  );

  const handleQueryChange = async (filterValue: string) => {
    if (!filterValue) {
      setRelationalOptions([]);
      return;
    }

    const relationalOptions = await filterOptionConfig?.getOptions?.(
      filterValue
    );

    setRelationalOptions(relationalOptions || []);
  };

  return { relationalOptions, handleQueryChange, filterOptionConfig };
};

export const useFilterMenuItem = (
  filter: FilterRowProps,
  type: FilterMenuItemType
) => {
  const machine = useFilterMenuState();
  const [state, send] = useActor(machine);

  const relationalProps = useFilterMenuItemRelational(filter);

  const handleChangeFilterOption = (filterOption: FilterListOption) => {
    send({
      type: "UPDATE_OPTION_FILTER",
      data: {
        filterItem: { ...filter, filterOption: filterOption },
      },
    });
  };

  const handleChangeFilterBy = (filterComparator: SelectItem) => {
    send({
      type: "UPDATE_COMPARATOR_FILTER",
      data: {
        filterItem: {
          ...filter,
          validateKey: { label: filterComparator.label },
        },
      },
    });
  };

  const handleChangeFilterValue = (filterValue: FilterValue | SelectItem) => {
    send({
      type: "UPDATE_VALUE_FILTER",
      data: {
        filterValue,
        index: filter.index,
      },
    });
  };

  const { filterByOptions, isInEvaluatingMode } = getFilterMeta(
    filter,
    machine
  );

  const getElementProps = <T>({ value }: { value: T }) => {
    return {
      hasError: isInEvaluatingMode && value === undefined,
      show: validateIfShow(filter, type, machine),
      value,
    };
  };

  const getElementWrapperClasses = () => {
    const show = validateIfShow(filter, type, machine);

    if (type === "select-option") return "w-48";

    if (show && type === "select-validate-key") return "w-48";

    if (!show) return "hidden";

    return "w-80";
  };

  return {
    handleChangeFilterOption,
    handleChangeFilterBy,
    handleChangeFilterValue,
    context: state.context,
    getElementProps,
    filterByOptions,
    getElementWrapperClasses,
    ...filter,
    ...relationalProps,
  };
};
