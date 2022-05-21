import { Meta, Story } from "@storybook/react";
import React from "react";
import { filterMenuProps } from "../FilterMenu/FilterMenu.stories";
import { FilterMenuProvider } from "../FilterMenu/state";
import { FilterMenuStorybookComponent } from "../helper/components";
import {
  FilterAndOrToggleProps,
  FilterMenuAndOrToggle,
} from "./FilterMenuAndOrToggle";

export default {
  component: FilterMenuAndOrToggle,
  title: "FilterAndOrToggle",
  decorators: [
    (story) => (
      <FilterMenuProvider {...filterMenuProps}>
        <FilterMenuStorybookComponent {...filterMenuProps} story={story} />
      </FilterMenuProvider>
    ),
  ],
} as Meta;

const Template: Story<FilterAndOrToggleProps> = (args) => {
  return <FilterMenuAndOrToggle {...args} />;
};

export const Enabled = Template.bind({});
Enabled.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
