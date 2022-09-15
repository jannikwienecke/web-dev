import { useInterpret, useSelector } from "@xstate/react";
import { AssertionError } from "assert";
import React from "react";
import { InterpreterFrom } from "xstate";
import { filterMenuMachine, FilterMenuMachineContext } from "./machine";
import { FilterItemReady } from "./types";

export type FilterMenuContext = InterpreterFrom<typeof filterMenuMachine>;

export const GlobalStateContext = React.createContext<FilterMenuContext>(
  undefined as unknown as FilterMenuContext
);

type Props = {
  children: React.ReactNode;
  onSave?: (
    filterContext: FilterMenuMachineContext,
    filterList: FilterItemReady[]
  ) => void;
};

export const FilterMenuProvider: React.FC<Props> = ({ children, onSave }) => {
  const machine = useInterpret(filterMenuMachine, {
    actions: {
      saveFilterData: (context) => {
        if (!context.filterListReady) {
          throw new AssertionError({
            message: "filterListReady is not defined",
            actual: context.filterListReady,
            expected: [],
          });
        }

        if (onSave) {
          onSave(context, context.filterListReady);
        }
      },
    },
  });

  return (
    <GlobalStateContext.Provider value={machine}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useFilterMenuService = () => {
  const state = React.useContext(GlobalStateContext);

  if (!state) {
    throw new Error(
      "useFilterMenuService must be used within a FilterMenuProvider"
    );
  }

  const context = useSelector(state, (state) => state.context);

  const isInSaveMode = useSelector(state, (state) =>
    state.matches("open.save-mode")
  );
  const isInEvaluatingMode = useSelector(state, (state) =>
    state.matches("open.valuate-mode")
  );

  return { service: state, context, isInEvaluatingMode, isInSaveMode };
};
