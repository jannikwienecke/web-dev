import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { SidebarNavItem } from '../SidebarItem';
export function SidebarGroupItem({ isCollapsed, module, }) {
    return (_jsxs(_Fragment, { children: [_jsx("div", Object.assign({ className: `mt-3 px-3 first:mt-0 ${isCollapsed && 'border-b-2  mb-2 border-skin-base first:hidden'}` }, { children: _jsx("div", Object.assign({ className: `px-4 text-skin-base text-sm py-2 font-bold ${isCollapsed && 'hidden'}` }, { children: module.title })) })), module.navigationItems.map((item, index) => (_jsx(SidebarNavItem, { navItem: item, isCollapsed: isCollapsed }, item.label + '_' + index)))] }));
}
export default SidebarGroupItem;
//# sourceMappingURL=SidebarGroupItem.js.map