import { Story, Meta } from "@storybook/react";
import { Listbox, ListboxProps } from "./Listbox";
import { screen, userEvent } from "@storybook/testing-library";

const listboxItemsGroupby = [
  { id: "1", label: "None", value: false },
  { id: "2", label: "Status", value: true },
  { id: "3", label: "Assigne", value: false },
  { id: "4", label: "Tags", value: false },
  { id: "5", label: "Due Date", value: false },
];

const listboxItemsSearchBy = [
  { id: "5", label: "ID", value: true },
  { id: "2", label: "First Name", value: true },
  { id: "3", label: "Last Name", value: true },
  { id: "4", label: "Department", value: true },
];

export default {
  component: Listbox,
  title: "Listbox",
} as Meta;

const Template: Story<ListboxProps> = (args) => <Listbox {...args} />;

export const SinlgeSelect = Template.bind({});
SinlgeSelect.args = {
  children: <button aria-label="open listbox">OPEN ME</button>,
  label: "Group By",
  options: { allowMultipleSelection: false },
  listItems: listboxItemsGroupby,
};

export const MultieSelect = Template.bind({});
MultieSelect.args = {
  children: <div aria-label="open listbox">OPEN ME</div>,
  label: "Find In",
  options: { allowMultipleSelection: true },
  listItems: listboxItemsSearchBy,
};

SinlgeSelect.play = async () => {
  setTimeout(() => {
    const submitButton = screen.getByRole("button", {
      name: /open listbox/i,
    });
    userEvent.click(submitButton);
  }, 300);
};

MultieSelect.play = async () => {
  setTimeout(() => {
    const submitButton = screen.getByRole("button", {
      name: /open listbox/i,
    });
    userEvent.click(submitButton);
  }, 300);
};
