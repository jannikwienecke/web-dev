import { Story, Meta } from "@storybook/react";
import { filterMenuProps } from "../FilterMenu/FilterMenu.stories";
import { FilterMenuProvider } from "../FilterMenu/state";
import { FilterMenuStorybookComponent } from "../helper/components";
import { FilterRow, FilterRowProps } from "./FilterRow";

export default {
  component: FilterRow,
  title: "FilterRow",
  decorators: [
    (story) => (
      <FilterMenuProvider {...filterMenuProps}>
        <FilterMenuStorybookComponent {...filterMenuProps} story={story} />
      </FilterMenuProvider>
    ),
  ],
} as Meta;

const Template: Story<FilterRowProps> = (args) => {
  return <FilterRow {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  ...filterMenuProps.filterList[0],
  index: 0,
};
