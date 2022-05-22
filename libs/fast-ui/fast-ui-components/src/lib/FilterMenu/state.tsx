import { useInterpret } from "@xstate/react";
import { AssertionError } from "assert";
import React from "react";
import { InterpreterFrom } from "xstate";
import { filterMenuMachine, FilterMenuMachineContext } from "./machine";
import { FilterItemReady } from "./types";

type Context = InterpreterFrom<typeof filterMenuMachine>;

export const GlobalStateContext = React.createContext<Context>(
  undefined as unknown as Context
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

export const useFilterMenuState = () => {
  const state = React.useContext(GlobalStateContext);

  if (!state) {
    throw new Error(
      "useFilterMenuState must be used within a FilterMenuProvider"
    );
  }

  return state;
};
