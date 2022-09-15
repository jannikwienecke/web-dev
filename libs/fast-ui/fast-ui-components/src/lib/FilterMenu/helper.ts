import { FilterMenuContext } from "./state";
import { FilterItem, FilterMenuItemType } from "./types";

export const getFilterMeta = (
  filter: FilterItem,
  context: FilterMenuContext["state"]["context"],
  isInEvaluatingMode: boolean
) => {
  const filterByOptions = filter.filterOption?.valueType
    ? context.filterComparatorOptions[filter.filterOption.valueType]
    : null;

  const isStringOrNumberFilterOption =
    filter.filterOption &&
    ["string", "number"].includes(filter.filterOption.valueType);

  return {
    filterByOptions,
    isStringOrNumberFilterOption,
    isInEvaluatingMode,
  };
};

export const validateIfShow = (
  filter: FilterItem,
  type: FilterMenuItemType,
  context: FilterMenuContext["state"]["context"]
): boolean => {
  const { filterByOptions, isStringOrNumberFilterOption } = getFilterMeta(
    filter,
    context,
    false
  );

  const { filterOption } = filter;

  if (type === "select-option") return true;
  if (!filterOption) return false;

  switch (type) {
    case "select-validate-key":
      return Boolean(filterByOptions);

    case "select-value-date":
      return Boolean(
        filterOption.valueType === "date" && !isStringOrNumberFilterOption
      );

    case "select-value-boolean":
      return Boolean(
        filterOption.valueType === "boolean" && !isStringOrNumberFilterOption
      );

    case "select-value-relation":
      return Boolean(filterOption?.valueType === "relational");

    case "input-value":
      return Boolean(isStringOrNumberFilterOption);

    default:
      return true;
  }
};
