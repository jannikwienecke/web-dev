import { jsx as _jsx } from "react/jsx-runtime";
import { Popover } from './Popover';
export default {
    component: Popover,
    title: 'Popover',
    excludeStories: /.*popoverGroups$/,
    parameters: {
        layout: 'centered',
    },
};
const Template = (args) => {
    const btn = _jsx("button", { children: "Toggle Menu" });
    return _jsx(Popover, Object.assign({}, args, { button: btn }));
};
export const popoverGroups = [
    {
        label: 'Group 1',
        items: [
            { label: 'New Tab', shortCut: '⌘+T' },
            { label: 'New Window', shortCut: '⌘+N' },
        ],
    },
    {
        label: 'Group 2',
        items: [{ label: 'Settings', disabled: true }, { label: 'Profile' }],
    },
];
export const Primary = Template.bind({});
Primary.args = {
    groups: popoverGroups,
};
//# sourceMappingURL=Popover.stories.js.map