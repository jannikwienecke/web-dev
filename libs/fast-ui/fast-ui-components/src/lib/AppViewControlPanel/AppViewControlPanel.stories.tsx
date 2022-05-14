import { Story, Meta } from "@storybook/react";
import {
  AppViewControlPanel,
  AppViewControlPanelProps,
} from "./AppViewControlPanel";

export default {
  component: AppViewControlPanel,
  title: "AppViewControlPanel",
} as Meta;

const Template: Story<AppViewControlPanelProps> = (args) => (
  <AppViewControlPanel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
