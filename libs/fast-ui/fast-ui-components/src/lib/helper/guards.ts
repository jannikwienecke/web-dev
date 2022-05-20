import { FilterValueType, RelationalValueType } from "../FilterMenu/types";

export const isRelationalType = (
  valueType: FilterValueType | undefined
): valueType is RelationalValueType => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (valueType as any)?.options !== undefined;
};
