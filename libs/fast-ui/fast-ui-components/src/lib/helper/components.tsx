import { PartialStoryFn } from "@storybook/csf";
import { Args, ReactFramework } from "@storybook/react";
import React from "react";
import { FilterMenuMachineContext } from "../FilterMenu/machine";
import { useFilterMenuState } from "../FilterMenu/state";

export const FilterMenuStorybookComponent = ({
  story,
  ...props
}: {
  story: PartialStoryFn<ReactFramework, Args>;
} & FilterMenuMachineContext) => {
  const { send } = useFilterMenuState();

  React.useEffect(() => {
    send({ type: "OPEN", data: { context: props } });
  }, [props, send]);

  return (
    <div>
      <button
        onClick={() => {
          send("EVALUATE_FILTER");
        }}
      >
        click me
      </button>
      {story()}
    </div>
  );
};
