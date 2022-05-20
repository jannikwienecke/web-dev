import { useInterpret } from "@xstate/react";
import React from "react";
import { InterpreterFrom } from "xstate";
import { filterMenuMachine } from "./machine";

type Context = InterpreterFrom<typeof filterMenuMachine>;

export const GlobalStateContext = React.createContext<Context>(
  undefined as unknown as Context
);

type Props = {
  children: (x: Context) => React.ReactNode;
};

export const FilterMenuProvider: React.FC<Props> = ({ children }) => {
  const machine = useInterpret(filterMenuMachine);

  return (
    <GlobalStateContext.Provider value={machine}>
      {children(machine)}
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
