import { jsx as _jsx } from "react/jsx-runtime";
import { FaUser } from 'react-icons/fa';
import { SidebarNavItem } from './SidebarItem';
export default {
    component: SidebarNavItem,
    title: 'SidebarItem',
    decorators: [
        (Story) => (_jsx("div", Object.assign({ className: "bg-skin-layer" }, { children: _jsx(Story, {}) }))),
    ],
};
const Template = (args) => (_jsx(SidebarNavItem, Object.assign({}, args)));
const navItem = {
    label: 'User List',
    icon: FaUser,
    pathname: '#',
};
export const Collapsed = Template.bind({});
Collapsed.args = {
    navItem,
    isCollapsed: true,
};
export const NotCollapsed = Template.bind({});
NotCollapsed.args = {
    navItem,
    isCollapsed: false,
};
//# sourceMappingURL=SidebarItem.stories.js.map