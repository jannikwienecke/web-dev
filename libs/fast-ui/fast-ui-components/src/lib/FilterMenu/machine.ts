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
>;

export type Events =
  | { type: "OPEN"; data?: { context: FilterMenuMachineContext } }
  | { type: "CLOSE" }
  | { type: "ADD_FILTER" }
  | { type: "REMOVE_FILTER"; data: { index: number } }
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
    };

export const filterMenuMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoDGmqskAxAPIAKAogHKKgAORAlss6gHb0gAeiAtAEYATAE4cANmEAGaYNHCA7AFZlcwRIA0IAJ4CR0nAA5VAFgNKjR0QGZRAX3va0GbDlQMwHEgGEAMmQAylTcTLCs7FxIvPo2Njg2chKmEtJGpsJ2olq6+oo4gibCwiJq0oqiotISjs7oWLgeXiQASlQAsmQAalQA+gBiAJJ+ACpULaEsbJzcfAiCysLGJXYSKjbKgubaegj8Mso4lRkVVSnVyqa1IC4N7p7eAIIAIs8Dw2MT0WERM9Fz8WkNgkyjicTSphsijWOwEByOohOlWk5xBV2uHFQEDg3FubgIREgk3C0yioDm-Bs6QS1TERlSiOUiNheykNMUGw5dlMRhsgkU1zxjQexN+ZJi82EEhwi2UinKW2UEipwhZ-FMpkkwllQPlohUoJqThu9WwotJswEpjSNKkonp0kZzNye0sRxMGkKijETJs6McQA */
  createMachine(
    {
      tsTypes: {} as import("./machine.typegen").Typegen0,
      schema: {
        context: {} as FilterMenuMachineContext,
        events: {} as Events,
      },
      id: "toggle",
      initial: "closed",
      states: {
        closed: {
          on: {
            OPEN: {
              actions: ["setInitContext"],
              target: "open",
            },
          },
        },
        open: {
          on: {
            CLOSE: {
              target: "closed",
            },
            REMOVE_FILTER: {},
            ADD_FILTER: {
              actions: ["addFilter"],
            },
            UPDATE_VALUE_FILTER: {
              actions: ["updateValueFilter"],
            },
            UPDATE_OPTION_FILTER: {
              actions: ["updateOptionFilter"],
            },
            UPDATE_COMPARATOR_FILTER: {
              actions: ["updateComparatorFilter"],
            },
            TOGGLE_AND_OR: {
              actions: ["toggleAndOr"],
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

        toggleAndOr: assign((context) => {
          const andOrFiltering: "AND" | "OR" =
            context.andOrFiltering === "AND" ? "OR" : "AND";

          return {
            ...context,
            andOrFiltering,
          };
        }),
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

// js docs
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
  let newValidateKey: ValidateBy | undefined = undefined;

  if (valueType && validateKey && !isRelationalType(valueType)) {
    // comparatorlist => is a list with all comparators for a cetain valueType ['contains', ....]
    const comparatorList = context.filterComparatorOptions[valueType];

    const isValidComparator = comparatorList.includes(validateKey.label);

    if (!isValidComparator) {
      newValidateKey = {
        label: comparatorList[0],
      };
    }
  }

  return newValidateKey || validateKey;
};
