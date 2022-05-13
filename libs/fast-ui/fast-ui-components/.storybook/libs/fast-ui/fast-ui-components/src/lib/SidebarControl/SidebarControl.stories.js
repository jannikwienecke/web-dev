import { jsx as _jsx } from "react/jsx-runtime";
import { FaUser } from 'react-icons/fa';
import { SidebarControl } from './SidebarControl';
export default {
    component: SidebarControl,
    title: 'SidebarAppDrawerItem',
    decorators: [
        (Story) => (_jsx("div", Object.assign({ className: "bg-skin-layer" }, { children: _jsx(Story, {}) }))),
    ],
};
const Template = (args) => (_jsx(SidebarControl, Object.assign({}, args)));
const navItem = {
    label: 'User List',
    icon: FaUser,
    pathname: '#',
};
export const Collapsed = Template.bind({});
Collapsed.args = {
    isCollapsed: true,
    appdrawerItems: [navItem],
};
export const NotCollapsed = Template.bind({});
NotCollapsed.args = {
    isCollapsed: false,
    appdrawerItems: [navItem],
};
//# sourceMappingURL=SidebarControl.stories.js.map