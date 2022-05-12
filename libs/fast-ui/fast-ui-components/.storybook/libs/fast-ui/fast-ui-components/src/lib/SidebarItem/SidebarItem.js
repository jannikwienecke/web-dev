import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { apply, tw } from 'twind';
import { borderIcons, iconWrapperSidebar, navItemContainer, tooltipBase, tooltopActive, } from '../styles';
export function SidebarNavItem({ navItem, isCollapsed }) {
    const navItemIconContainer = apply `
    text-skin-base-light
      ${iconWrapperSidebar}
      ${borderIcons}
      ${isCollapsed && 'm-0'}
  `;
    const itemWrapperHover = `hover:text-skin-base-dark hover:bg-skin-base-dark`;
    const navItemIcon = `group-active:text-skin-accent group-hover:block`;
    //   const tooltipBase = `
    // z-10
    // tooltiptext hidden absolute
    // p-1 px-3 rounded-md top-1
    // left-16  text-sm
    // whitespace-nowrap
    // text-white bg-skin-accent-light
    // `;
    //   const tooltopActive = tw`group-hover:(block)`;
    return (_jsx("div", Object.assign({ className: `${isCollapsed || 'px-3'}` }, { children: _jsxs("div", Object.assign({ className: `group relative ${isCollapsed ? 'justify-center' : 'justify-start'} ${navItemContainer}  bg-skin-base-light py-1 mx-1  hover:bg-skin-base-dark` }, { children: [_jsx("div", Object.assign({ className: tw `${navItemIconContainer} ${itemWrapperHover}` }, { children: _jsx(navItem.icon, { className: `${navItemIcon} ` }) })), _jsx("div", Object.assign({ style: { visibility: isCollapsed ? 'visible' : 'hidden' }, className: `${tooltipBase} ${tooltopActive}` }, { children: navItem.label })), _jsx(motion.div, Object.assign({ className: `text-sm text-skin-base-dark font-semibold ${isCollapsed && 'hidden'} `, initial: { opacity: 0 }, animate: { scale: isCollapsed ? 0 : 1, opacity: isCollapsed ? 0 : 1 }, transition: {
                        type: 'spring',
                        stiffness: 500,
                        damping: 40,
                    } }, { children: _jsx("div", Object.assign({ className: tw `${isCollapsed && 'hidden'} text-sm` }, { children: navItem.label })) }))] })) })));
}
export default SidebarNavItem;
//# sourceMappingURL=SidebarItem.js.map