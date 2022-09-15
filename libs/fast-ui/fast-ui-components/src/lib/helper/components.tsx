import { PartialStoryFn } from "@storybook/csf";
import { Args, ReactFramework } from "@storybook/react";
import React from "react";
import { FilterMenuMachineContext } from "../FilterMenu/machine";
import { useFilterMenuService } from "../FilterMenu/state";

export const FilterMenuStorybookComponent = ({
  story,
  ...props
}: {
  story: PartialStoryFn<ReactFramework, Args>;
} & FilterMenuMachineContext) => {
  const { send } = useFilterMenuService();

  React.useEffect(() => {
    send({ type: "OPEN", data: { context: props } });
  }, [props, send]);

  return <div>{story()}</div>;
};
