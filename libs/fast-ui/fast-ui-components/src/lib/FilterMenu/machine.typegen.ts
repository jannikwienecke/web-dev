// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    setInitContext: "OPEN";
    removeFilter: "REMOVE_FILTER";
    addFilter: "ADD_FILTER";
    updateValueFilter: "UPDATE_VALUE_FILTER";
    updateOptionFilter: "UPDATE_OPTION_FILTER";
    updateComparatorFilter: "UPDATE_COMPARATOR_FILTER";
    toggleAndOr: "TOGGLE_AND_OR";
    setError: "EVALUATE_FILTER";
    saveFilterData: "EVALUATE_FILTER";
    resetError:
      | "EVALUATE_FILTER"
      | "REMOVE_FILTER"
      | "ADD_FILTER"
      | "UPDATE_VALUE_FILTER"
      | "UPDATE_OPTION_FILTER"
      | "UPDATE_COMPARATOR_FILTER"
      | "TOGGLE_AND_OR"
      | "EDIT_FILTER";
    resetSave:
      | "REMOVE_FILTER"
      | "ADD_FILTER"
      | "UPDATE_VALUE_FILTER"
      | "UPDATE_OPTION_FILTER"
      | "UPDATE_COMPARATOR_FILTER"
      | "TOGGLE_AND_OR"
      | "EDIT_FILTER";
  };
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: "saveFilterData";
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {};
  eventsCausingGuards: {
    filterListHasError: "EVALUATE_FILTER";
  };
  eventsCausingDelays: {};
  matchesStates:
    | "closed"
    | "open"
    | "open.save-mode"
    | "open.editing-mode"
    | "open.valuate-mode"
    | { open?: "save-mode" | "editing-mode" | "valuate-mode" };
  tags: never;
}
