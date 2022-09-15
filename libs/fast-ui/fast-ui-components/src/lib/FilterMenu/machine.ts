import { AssertionError } from "assert";
import { assign, createMachine } from "xstate";
import { isRelationalType, isRelationalValue } from "../helper/guards";
import { SelectItem } from "../Select/Select";
import { FilterMenuProps } from "./FilterMenu";
import {
  FilterItem,
  FilterItemReady,
  FilterValue,
  FilterValueType,
  ValidateBy,
} from "./types";

export type FilterMenuMachineContext = Pick<
  FilterMenuProps,
  | "filterOptions"
  | "filterList"
  | "andOrFiltering"
  | "filterComparatorOptions"
  | "filterDateOptions"
> & {
  hasError?: boolean;
  isSaved?: boolean;
  filterListReady?: FilterItemReady[];
};

export type Events =
  | { type: "OPEN"; data?: { context: FilterMenuMachineContext } }
  | { type: "CLOSE" }
  | { type: "ADD_FILTER" }
  | { type: "REMOVE_FILTER"; data: { filterItem: FilterItem } }
  | {
      type: "UPDATE_VALUE_FILTER";
      data: {
        filterValue: FilterValue | SelectItem;
        index: number;
      };
    }
  | {
      type: "UPDATE_COMPARATOR_FILTER";
      data: {
        filterItem: FilterItem;
      };
    }
  | {
      type: "UPDATE_OPTION_FILTER";
      data: {
        filterItem: FilterItem;
      };
    }
  | {
      type: "TOGGLE_AND_OR";
    }
  | {
      type: "EVALUATE_FILTER";
    }
  | {
      type: "EDIT_FILTER";
    };

export const filterMenuMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoDGmqskAxAPIAKAogHKKgAORAlss6gHb0gAeiAtABYAbAFYcATgAMwwYIBMARikAOQQHZFggDQgAngMXr5OFaIDMZwVq3zRU9QF9HutBmw5UDMBxyRWzBxQ-AC2qBBgJABKVACyZABqVAD6AGIAkgAyACpUUdxMsAGc3HwI-JZSODJiEvIa8lLmiiq6BggaKpKiKlI20irySs6u6Fi4Xj5+EAFBoeGRAIIAIstpWbn5SCCFxVzbZRWy1dYtFsIq6vaKbYjmEoqS0qISaleqourmIyBu457eXz+NhzMIREgAVQoy0WuWSCUWmQhKQyOTyBRYbBKBwEgikJmE+PuhIs5ikD1uCDJ4iJihailEokJSmEPz+HkmQJmIOCYMiUJhcMo2XSZBo6zRW0YmPY+1Ahzx6hwoi09jVghULXUwkpSi6UkZwnM6hU5mEdKsbLGHMB01mvIWkOhsJSAGEyLEKIsorCyFEJZsMUUsXLeLiyZIZHIlKoNFpKYpmtUVJqVK8zh8re4JrbgYEHeDsmQAOLFzIpRY0NZ+oN7UoCSyCHDyFMvKR4+TmQR1SlyHCKRrqay9VSvDWsly-a05qZ50GOqgIpEugPo7a7EP18oMpuNGQSdR1Yx9bW9pMSFXKTumz5MrP-Tk4ABuAENMABXF-IMDzcFUZbpNkq5SjsMrYvKiD2DgXzkhI5rmsYogspSRrmDgwgmj0jImnS7b3jaPgkK6mRkAAylQtabjiVIYTgChNBYlwSPcQyUs0TZ4gozQtGahLfD8HALPA2zsrgBBEJAlGyluXYSCch6WCahLCBh6iUvwWhyaSVxMuOcgGvhM5cvav5gFJ4FhuUlhyX0LQSBeGGdualIWI8EjWPu8h1AolyGQCUyvh+X4-ny5mhmUdjoReuHCHYB72bIvYtOhO6KLFTRkvcgh+ZyYVbkIohNtIsgKMobzxvoAgtqY6h9BYjSMcIEiGXl1FCGmkYlTG5U6JV5T1OIagaHIpIMpozjOEAA */
  createMachine(
    {
      tsTypes: {} as import("./machine.typegen").Typegen0,
      schema: { context: {} as FilterMenuMachineContext, events: {} as Events },
      id: "toggle",
      initial: "closed",
      on: {
        EVALUATE_FILTER: {
          actions: () => console.log("EVALUATE_FILTER"),
        },
      },
      states: {
        closed: {
          on: {
            OPEN: {
              actions: "setInitContext",
              target: "open",
            },
          },
        },

        open: {
          initial: "editing-mode",
          states: {
            "save-mode": {},

            "editing-mode": {
              entry: ["resetError", "resetSave"],
              on: {
                EVALUATE_FILTER: [
                  {
                    target: "#toggle.open.valuate-mode",
                    cond: "filterListHasError",
                    actions: ["setError"],
                  },
                  {
                    target: "#toggle.open.save-mode",
                    actions: [
                      "setReadyFilterList",
                      "saveFilterData",
                      "resetError",
                    ],
                  },
                ],
              },
            },
            "valuate-mode": {
              on: {
                EDIT_FILTER: {
                  target: "editing-mode",
                },
              },
            },
          },
          on: {
            CLOSE: {
              target: "closed",
            },
            REMOVE_FILTER: {
              actions: "removeFilter",
              target: "open.editing-mode",
            },
            ADD_FILTER: {
              actions: ["addFilter"],
              target: "open.editing-mode",
            },
            UPDATE_VALUE_FILTER: {
              actions: "updateValueFilter",
              target: "open.editing-mode",
            },
            UPDATE_OPTION_FILTER: {
              actions: "updateOptionFilter",
              target: "open.editing-mode",
            },
            UPDATE_COMPARATOR_FILTER: {
              actions: "updateComparatorFilter",
              target: "open.editing-mode",
            },
            TOGGLE_AND_OR: {
              actions: "toggleAndOr",
              target: "open.editing-mode",
            },
          },
        },
      },
    },
    {
      actions: {
        setInitContext: assign((context, event, state) => {
          const data = event?.data?.context || {};

          return {
            ...context,
            ...data,
          };
        }),

        addFilter: assign((context) => {
          return {
            ...context,
            filterList: [
              ...context.filterList,
              {
                index: context.filterList.length,
              },
            ],
          };
        }),

        updateComparatorFilter: assign((context, event) => {
          return {
            ...context,
            filterList: getUpdatedFilterList(
              context.filterList,
              event.data.filterItem
            ),
          };
        }),

        updateValueFilter: assign((context, event) => {
          const filterValue: FilterValue | SelectItem = event.data.filterValue;
          const index = event.data.index;

          const filterItem = context.filterList[index];

          if (isRelationalValue(filterValue)) {
            return {
              ...context,
              filterList: getUpdatedFilterList(context.filterList, {
                ...filterItem,
                filterRelationalValue: filterValue,
                filterValue: undefined,
              }),
            };
          } else {
            return {
              ...context,
              filterList: getUpdatedFilterList(context.filterList, {
                ...filterItem,
                filterRelationalValue: undefined,
                filterValue,
              }),
            };
          }
        }),

        updateOptionFilter: assign((context, event) => {
          const valueType = event.data.filterItem.filterOption?.valueType;
          const validateKey = event.data.filterItem.validateKey;

          const newValidateKey = getComparator({
            validateKey,
            valueType,
            context,
          });

          return {
            ...context,
            filterList: getUpdatedFilterList(context.filterList, {
              ...event.data.filterItem,
              validateKey: newValidateKey,
            }),
          };
        }),

        removeFilter: assign((context, event) => {
          const filterItem = event.data.filterItem;

          const newFilterList = removeFilterAndUpdateIndex(
            context.filterList,
            filterItem.index
          );

          return {
            ...context,
            filterList: newFilterList,
          };
        }),

        toggleAndOr: assign((context) => {
          const andOrFiltering: "AND" | "OR" =
            context.andOrFiltering === "AND" ? "OR" : "AND";

          return {
            ...context,
            andOrFiltering,
          };
        }),

        setError: assign((context) => {
          return {
            ...context,
            hasError: true,
          };
        }),

        resetError: assign((context) => {
          return {
            ...context,
            hasError: false,
          };
        }),

        resetSave: assign((context) => {
          return {
            ...context,
          };
        }),

        setReadyFilterList: assign((context) => {
          return {
            ...context,
            filterListReady: getReayFilterList(context),
          };
        }),
      },

      guards: {
        filterListHasError: (context) => {
          const hasError = filterListHasError({
            filterList: context.filterList,
          });

          return hasError;
        },
      },
    }
  );

export const getUpdatedFilterList = <T extends FilterItem>(
  filterList: T[],
  newFilterItem: T
): T[] => {
  return filterList.map((filterItem) => {
    if (filterItem.index === newFilterItem.index) {
      return {
        ...filterItem,
        ...newFilterItem,
      };
    } else {
      return filterItem;
    }
  });
};

/**
 * Function that get the correct comparator for when the filter option changes
 * if the old comparator is valid for the new filter option -> return the same
 * otherwise -> return find the first valid comparator
 */
export const getComparator = ({
  validateKey,
  valueType,
  context,
}: {
  validateKey: ValidateBy | undefined;
  valueType: FilterValueType | undefined;
  context: FilterMenuMachineContext;
}) => {
  if (!valueType || isRelationalType(valueType)) return validateKey;

  let newValidateKey: ValidateBy | undefined = undefined;
  const comparatorList = context.filterComparatorOptions[valueType];

  if (validateKey) {
    // comparatorlist => is a list with all comparators for a cetain valueType ['contains', ....]

    const isValidComparator = comparatorList.includes(validateKey.label);

    if (!isValidComparator) {
      newValidateKey = {
        label: comparatorList[0],
      };
    }
  } else {
    const comparatorList = context.filterComparatorOptions[valueType];

    newValidateKey = {
      label: comparatorList[0],
    };

    console.log("newValidateKey: ", newValidateKey);
  }

  return newValidateKey || validateKey;
};

const filterListHasError = ({
  filterList,
}: {
  filterList: FilterItem[] | undefined;
}) => {
  if (!filterList) return false;

  return Boolean(
    filterList.find((f) => {
      const hasError =
        (!f.filterValue && !f.filterRelationalValue) || !f.validateKey;
      hasError && console.log(f);
      return hasError;
    })
  );
};

export const getReayFilterList = (
  context: FilterMenuMachineContext
): FilterItemReady[] => {
  return context.filterList.map((filterItem) => {
    // we know they are all set due to the guard
    // but we make sure that all values are set before
    // letting the user save the filter
    //

    if (!filterItem.filterOption && !filterItem.filterRelationalValue) {
      throw new AssertionError({
        message: "filterOption and filterRelationalValue are undefined",
      });
    }

    if (!filterItem.validateKey) {
      throw new AssertionError({ message: "validateKey is undefined" });
    }

    if (!filterItem.filterOption) {
      throw new AssertionError({ message: "filterOption is undefined" });
    }

    const { filterOption, validateKey, filterValue, filterRelationalValue } =
      filterItem;

    const filter = {
      ...filterItem,
      filterOption,
      validateKey,
      filterValue,
      filterRelationalValue,
    };

    return filter as FilterItemReady;
  });
};

const removeFilterAndUpdateIndex = (
  filterList: FilterItem[],
  indexToRemove: number
) => {
  const newFilterList: FilterItem[] = [];

  filterList.forEach((filterItem, index) => {
    if (index !== indexToRemove) {
      if (filterItem.index > indexToRemove) {
        filterItem.index = filterItem.index - 1;
      }

      newFilterList.push(filterItem);
    }
  });

  return newFilterList;
};
