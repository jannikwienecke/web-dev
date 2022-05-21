import { assign, createMachine } from "xstate";
import { isRelationalType } from "../helper/guards";
import { FilterMenuProps } from "./FilterMenu";
import { FilterItem, FilterValueType, ValidateBy } from "./types";

export type FilterMenuMachineContext = Pick<
  FilterMenuProps,
  | "filterOptions"
  | "filterList"
  | "andOrFiltering"
  | "filterComparatorOptions"
  | "filterDateOptions"
> & { hasError?: boolean; isSaved?: boolean };

export type Events =
  | { type: "OPEN"; data?: { context: FilterMenuMachineContext } }
  | { type: "CLOSE" }
  | { type: "ADD_FILTER" }
  | { type: "REMOVE_FILTER"; data: { filterItem: FilterItem } }
  | {
      type: "UPDATE_VALUE_FILTER";
      data: {
        filterItem: FilterItem;
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
                    actions: ["saveFilterData", "resetError"],
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
            filterList: getUpdatedFilterList(context, {
              ...event.data.filterItem,
              filterValue: undefined,
            }),
          };
        }),

        updateValueFilter: assign((context, event) => {
          return {
            ...context,
            filterList: getUpdatedFilterList(context, event.data.filterItem),
          };
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
            filterList: getUpdatedFilterList(context, {
              ...event.data.filterItem,
              validateKey: newValidateKey,
            }),
          };
        }),

        removeFilter: assign((context, event) => {
          const filterItem = event.data.filterItem;
          return {
            ...context,
            filterList: context.filterList.filter(
              (item) => item.index !== filterItem.index
            ),
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
      },

      guards: {
        filterListHasError: (context) => {
          const hasError = filterListHasError({
            filterList: context.filterList,
          });

          console.log("hasError: ", hasError);

          return hasError;
        },
      },
    }
  );

export const getUpdatedFilterList = (
  context: FilterMenuMachineContext,
  newFilterItem: FilterItem
) => {
  const filterList = context.filterList.map((filterItem) => {
    if (filterItem.index === newFilterItem.index) {
      return {
        ...filterItem,
        ...newFilterItem,
      };
    } else {
      return filterItem;
    }
  });

  return filterList;
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
      const hasError = !f.filterValue || !f.validateKey;
      hasError && console.log(f);
      return hasError;
    })
  );
};
