import { Meta, Story } from "@storybook/react";
import { TestModel } from "../SlideOver/SlideOver.stories";
import { EditView, EditViewProps } from "./EditView";

export default {
  component: EditView,
  title: "EditView",
} as Meta;

const Template: Story<EditViewProps> = (args) => <EditView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  model: TestModel,
};
