// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    setInitContext: "OPEN";
    addFilter: "ADD_FILTER";
    updateValueFilter: "UPDATE_VALUE_FILTER";
    updateOptionFilter: "UPDATE_OPTION_FILTER";
    updateComparatorFilter: "UPDATE_COMPARATOR_FILTER";
    toggleAndOr: "TOGGLE_AND_OR";
  };
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {};
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: "closed" | "open";
  tags: never;
}
