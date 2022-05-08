import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { apply, tw } from 'twind';
export function SidebarAppDrawerItem({ isCollapsed, appdrawerItem, }) {
    const mainLogoAndHome = apply `
    grid place-items-center 
    p-3 rounded-md 
    group bg-skin-base relative
    `;
    const tooltip = `tooltiptext hidden absolute bg-skin-contrast p-1 px-3 text-skin-standard rounded-md top-3 left-16 text-white text-sm  group-hover:block whitespace-nowrap`;
    if (!appdrawerItem)
        return null;
    return (_jsx("div", Object.assign({ className: `px-3 py-3 mb-0 ${isCollapsed && 'border-b-2 border-skin-base'}` }, { children: _jsxs("div", Object.assign({ className: `cursor-pointer bg-skin-base text-skin-accent font-bold rounded-md flex flex-row items-center justify-center ${isCollapsed || 'px-3  justify-start'} ` }, { children: [_jsxs("div", Object.assign({ className: tw `${mainLogoAndHome}  ${isCollapsed || 'bg-transparent'}` }, { children: [_jsx(appdrawerItem.icon, { className: "text-skin-accent roun opacity-100" }), _jsx("div", Object.assign({ className: `${tooltip} block` }, { children: 'Home' }))] })), _jsx("div", Object.assign({ className: `${isCollapsed && 'hidden'}` }, { children: appdrawerItem.label }))] })) })));
}
export default SidebarAppDrawerItem;
//# sourceMappingURL=SidebarAppDrawerItem.js.map