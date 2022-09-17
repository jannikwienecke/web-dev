import { Meta, Story } from "@storybook/react";
import { actions } from "../ActionMenu/ActionMenu.stories";
import DetailView, { ModelType } from "../DetailView/DetailView";
import { SlideOver, SlideOverProps } from "./SlideOver";

export default {
  component: SlideOver,
  title: "SlideOver",
  excludeStories: /.*TestModel$/,
} as Meta;

const Template: Story<SlideOverProps> = (args) => <SlideOver {...args} />;

export const TestModel: ModelType = {
  items: [
    {
      name: "id",
      type: "string",
      value: "1",
    },
    {
      name: "name",
      type: "string",
      value: "Test",
    },
  ],
  description: "Model description",
  model: "Model name",
};

export const Primary = Template.bind({});
Primary.args = {
  model: TestModel,
  children: (model) => (
    <div
      className="border-skin-base-dark m-8 h-full border border-dashed p-4"
      style={{ margin: "1rem" }}
    >
      Content
    </div>
  ),
};

export const Secondary = Template.bind({});
Secondary.args = {
  model: TestModel,
  children: (model) => (
    <DetailView model={model} actions={actions} mainAction={actions[0]} />
  ),
};
