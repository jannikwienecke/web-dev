import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { apply, tw } from 'twind';
import { navItemContainer, tooltipBase, tooltopActive } from '../styles';
export function SidebarControl({ isCollapsed, appdrawerItems, }) {
    if (!appdrawerItems || appdrawerItems.length === 0)
        return null;
    return (_jsx("div", Object.assign({ className: `py-3 mb-0 ${isCollapsed && 'border-b-[1px] border-skin-base-light'}` }, { children: appdrawerItems.map((appdrawerItem) => {
            return (_jsx(SideControlItem, { sideControlItem: appdrawerItem, isCollapsed: isCollapsed }));
        }) })));
}
export default SidebarControl;
export const SideControlItem = ({ isCollapsed, sideControlItem, }) => {
    const mainLogoAndHome = apply `
    grid place-items-center 
    p-2 rounded-md 
    group relative
  `;
    const item = 'text-xl';
    const itemHover = 'hover:text-skin-accent';
    const itemActive = 'bg-skin-accent text-skin-base-inverted ';
    if (!sideControlItem)
        return null;
    return (_jsxs("div", Object.assign({ className: `text-skin-base-dark px-4 gap-3 ${navItemContainer} ${isCollapsed ? 'justify-center' : 'justify-start'}
      ${sideControlItem.isActive || itemHover}
      ` }, { children: [_jsxs("div", Object.assign({ className: tw `${mainLogoAndHome}  ${sideControlItem.isActive && itemActive} ` }, { children: [_jsx(sideControlItem.icon, { className: `${item} ` }), _jsx("div", Object.assign({ style: { visibility: isCollapsed ? 'visible' : 'hidden' }, className: `${tooltipBase} ${tooltopActive}` }, { children: sideControlItem.label }))] })), _jsx("div", Object.assign({ className: `text-sm font-normal text-skin-base-light hover:text-skin-accent ${isCollapsed && 'hidden'}` }, { children: sideControlItem.label }))] })));
};
//# sourceMappingURL=SidebarControl.js.map