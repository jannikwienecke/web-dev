import { InterpreterFrom } from "xstate";
import { PartialBy, WithRequired } from "../helper/typescript-helpers";
import { SelectItem } from "../Select/Select";
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

export type RelationalValueType = "relational";

export interface FilterListOptionBaseType {
  id: string;
  label: string;
  valueType: FilterValueType;
}

export interface FilterListOptionRelationalType {
  id: string;
  label: string;
  valueType: RelationalValueType;
}

export type FilterListOption =
  | FilterListOptionBaseType
  | FilterListOptionRelationalType;

export type FilterOption = FilterListOption & {
  defaultOptions?: SelectItem[];
  getOptions?: (searchValue: string) => Promise<FilterListOption[]>;
};

export type FilterComparatorOptions = {
  [key in FilterComparatorKeys]: string[];
};

export interface FilterItemBaseType {
  filterOption?: FilterListOption | undefined;
  id?: string;
  validateKey?: ValidateBy;
  filterValue?: FilterValue;
  filterRelationalValue?: never;
  index: number;
}

// relational filter item has a different filter value type -> needs an id
// (e.g for department =>  label: office, id: 1)
export interface FilterItemRelationalType {
  filterOption?: FilterListOption | undefined;
  id?: string;
  validateKey?: ValidateBy;
  filterValue?: never;
  filterRelationalValue?: SelectItem;
  index: number;
}

export type FilterItem = FilterItemBaseType | FilterItemRelationalType;

export type FilterItemBaseTypeReady = PartialBy<
  Required<FilterItemBaseType>,
  "id" | "filterRelationalValue"
>;
export type FilterItemRelationalTypeReady = PartialBy<
  Required<FilterItemBaseType>,
  "id" | "filterValue"
>;

// ready filter means that everthing must be complete but the id -> comes from the db for example
export type FilterItemReady =
  | FilterItemBaseTypeReady
  | FilterItemRelationalTypeReady;

// done filter is the filter type that we get from the db fro example
export type FilterItemDone =
  | WithRequired<FilterItemBaseTypeReady, "id" | "filterValue">
  | WithRequired<FilterItemRelationalType, "id" | "filterRelationalValue">;

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
