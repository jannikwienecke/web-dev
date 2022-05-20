import { Meta, Story } from "@storybook/react";
import { filterMenuProps } from "../FilterMenu/FilterMenu.stories";
import { FilterMenuProvider } from "../FilterMenu/state";
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
        {({ send }) => {
          send("OPEN");
          return story();
        }}
      </FilterMenuProvider>
    ),
  ],
} as Meta;

const Template: Story<FilterAndOrToggleProps> = (args) => (
  <FilterMenuAndOrToggle {...args} />
);

export const Enabled = Template.bind({});
Enabled.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
