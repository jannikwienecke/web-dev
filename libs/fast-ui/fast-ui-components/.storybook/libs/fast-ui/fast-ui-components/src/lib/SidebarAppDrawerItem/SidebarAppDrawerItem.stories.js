import { jsx as _jsx } from "react/jsx-runtime";
import { FaUser } from 'react-icons/fa';
import { SidebarAppDrawerItem, } from './SidebarAppDrawerItem';
export default {
    component: SidebarAppDrawerItem,
    title: 'SidebarAppDrawerItem',
    decorators: [
        (Story) => (_jsx("div", Object.assign({ className: "bg-skin-layer" }, { children: _jsx(Story, {}) }))),
    ],
};
const Template = (args) => (_jsx(SidebarAppDrawerItem, Object.assign({}, args)));
const navItem = {
    label: 'User List',
    icon: FaUser,
    pathname: '#',
};
export const Collapsed = Template.bind({});
Collapsed.args = {
    isCollapsed: true,
    appdrawerItem: navItem,
};
export const NotCollapsed = Template.bind({});
NotCollapsed.args = {
    isCollapsed: false,
    appdrawerItem: navItem,
};
//# sourceMappingURL=SidebarAppDrawerItem.stories.js.map