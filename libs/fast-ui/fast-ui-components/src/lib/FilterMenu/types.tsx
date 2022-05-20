import { InterpreterFrom } from "xstate";
import { filterMenuMachine } from "./machine";

export type FilterValue = string | number | boolean | Date;

export type FilterValueType =
  | "string"
  | "number"
  | "boolean"
  | "date"
  | RelationalValueType;

export interface ValidateBy {
  label: string;
}

export interface RelationalValueType {
  options: string[];
}

export interface FilterOption {
  id: string;
  label: string;
  valueType: FilterValueType;
}

export type FilterComparatorOptions = {
  [key in FilterComparatorKeys]: string[];
};

export interface FilterItem {
  filterOption?: FilterOption | undefined;
  id?: string;
  validateKey?: ValidateBy;
  filterValue?: FilterValue;
  index: number;
}

type TextFilterByOptions = (
  | "contains"
  | "Does not contain"
  | "is set"
  | "is not set"
)[];
type NumberFilterOptions = (
  | "equals"
  | "not equals"
  | "greater than"
  | "less than"
  | "greater than or equal to"
  | "less than or equal to"
)[];
type DateFilterOptions = ("is" | "in not" | "is set" | "is not set")[];
type BooleanFilterOptions = ("is" | "is not")[];
type RelationalFilterOptions = DateFilterOptions;

export type FilterOptionType =
  | TextFilterByOptions
  | NumberFilterOptions
  | DateFilterOptions
  | BooleanFilterOptions
  | RelationalFilterOptions;

export interface FilterByOptions {
  string: TextFilterByOptions;
  number: NumberFilterOptions;
  date: DateFilterOptions;
  boolean: BooleanFilterOptions;
  relational: RelationalFilterOptions;
}

export type FilterMenuMachineType = InterpreterFrom<typeof filterMenuMachine>;

export type FilterComparatorKeys =
  | "string"
  | "number"
  | "date"
  | "boolean"
  | "relational";
