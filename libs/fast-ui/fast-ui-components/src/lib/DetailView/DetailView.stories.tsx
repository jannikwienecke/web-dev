import { Story, Meta } from "@storybook/react";
import { actions } from "../ActionMenu/ActionMenu.stories";
import { TestModel } from "../SlideOver/SlideOver.stories";
import { DetailView, DetailViewProps } from "./DetailView";

export default {
  component: DetailView,
  title: "DetailView",
} as Meta;

const Template: Story<DetailViewProps> = (args) => <DetailView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  model: TestModel,
  actions: actions,
  mainAction: actions.find((action) => action.label === "Edit"),
};
