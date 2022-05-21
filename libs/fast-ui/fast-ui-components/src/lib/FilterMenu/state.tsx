import { useInterpret } from "@xstate/react";
import React from "react";
import { InterpreterFrom } from "xstate";
import { filterMenuMachine, FilterMenuMachineContext } from "./machine";

type Context = InterpreterFrom<typeof filterMenuMachine>;

export const GlobalStateContext = React.createContext<Context>(
  undefined as unknown as Context
);

type Props = {
  children: React.ReactNode;
  onSave?: (filterContext: FilterMenuMachineContext) => void;
};

export const FilterMenuProvider: React.FC<Props> = ({ children, onSave }) => {
  const machine = useInterpret(filterMenuMachine, {
    actions: {
      saveFilterData: (context) => onSave?.(context),
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
