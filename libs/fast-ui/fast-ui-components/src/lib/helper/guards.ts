import {
  FilterValue,
  FilterValueType,
  RelationalValueType,
} from "../FilterMenu/types";
import { SelectItem } from "../Select/Select";

export const isRelationalType = (
  valueType: FilterValueType | undefined
): valueType is RelationalValueType => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (valueType as any)?.options !== undefined;
};

export const isRelationalValue = (
  filterValue: FilterValue | SelectItem
): filterValue is SelectItem => {
  return typeof filterValue === "object" && "id" in filterValue;
};
