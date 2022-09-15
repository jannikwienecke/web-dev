// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
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
  eventsCausingActions: {
    addFilter: "ADD_FILTER";
    removeFilter: "REMOVE_FILTER";
    resetError:
      | "ADD_FILTER"
      | "EDIT_FILTER"
      | "EVALUATE_FILTER"
      | "OPEN"
      | "REMOVE_FILTER"
      | "TOGGLE_AND_OR"
      | "UPDATE_COMPARATOR_FILTER"
      | "UPDATE_OPTION_FILTER"
      | "UPDATE_VALUE_FILTER";
    resetSave:
      | "ADD_FILTER"
      | "EDIT_FILTER"
      | "OPEN"
      | "REMOVE_FILTER"
      | "TOGGLE_AND_OR"
      | "UPDATE_COMPARATOR_FILTER"
      | "UPDATE_OPTION_FILTER"
      | "UPDATE_VALUE_FILTER";
    saveFilterData: "EVALUATE_FILTER";
    setError: "EVALUATE_FILTER";
    setInitContext: "OPEN";
    setReadyFilterList: "EVALUATE_FILTER";
    toggleAndOr: "TOGGLE_AND_OR";
    updateComparatorFilter: "UPDATE_COMPARATOR_FILTER";
    updateOptionFilter: "UPDATE_OPTION_FILTER";
    updateValueFilter: "UPDATE_VALUE_FILTER";
  };
  eventsCausingServices: {};
  eventsCausingGuards: {
    filterListHasError: "EVALUATE_FILTER";
  };
  eventsCausingDelays: {};
  matchesStates:
    | "closed"
    | "open"
    | "open.editing-mode"
    | "open.save-mode"
    | "open.valuate-mode"
    | { open?: "editing-mode" | "save-mode" | "valuate-mode" };
  tags: never;
}
