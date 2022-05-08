import { jsx as _jsx } from "react/jsx-runtime";
import { SidebarUser } from './SidebarUser';
export default {
    component: SidebarUser,
    title: 'SidebarUser',
    decorators: [
        (Story) => (_jsx("div", Object.assign({ className: "flex flex-col relative bg-skin-layer" }, { children: Story() }))),
    ],
};
const Template = (args) => _jsx(SidebarUser, Object.assign({}, args));
export const Collapsed = Template.bind({});
Collapsed.args = {
    isCollapsed: true,
    onToggle: () => null,
    user: {
        username: 'John Doe',
    },
};
export const NotCollapsed = Template.bind({});
NotCollapsed.args = {
    isCollapsed: false,
    onToggle: () => null,
    user: {
        username: 'John Doe',
    },
};
//# sourceMappingURL=SidebarUser.stories.js.map