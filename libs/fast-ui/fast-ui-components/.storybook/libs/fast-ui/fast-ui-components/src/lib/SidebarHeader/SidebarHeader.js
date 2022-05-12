import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { apply, tw } from 'twind';
import { borderIcons, iconWrapperSidebar } from '../styles';
export function SidebarHeader({ isCollapsed, app }) {
    const mainLogoAndHome = apply `
    bg-skin-accent ${borderIcons}
    ${iconWrapperSidebar} text-xl
  `;
    return (_jsxs("div", Object.assign({ className: `h-20 flex-shrink-0 border-b-[1px] border-skin-base-light px-3 flex flex-row gap-4 justify-start ${isCollapsed && 'justify-center'} ${(isCollapsed && !app.description) || 'items-center'}` }, { children: [_jsx("div", Object.assign({ className: tw `${mainLogoAndHome}` }, { children: _jsx(app.icon, { className: "text-skin-base-inverted" }) })), _jsx("div", Object.assign({ className: `${isCollapsed && 'hidden'}` }, { children: _jsxs(motion.div, Object.assign({ animate: { scale: isCollapsed ? 0 : 1 }, transition: {
                        type: 'spring',
                        stiffness: 600,
                        damping: 90,
                    } }, { children: [_jsx("div", Object.assign({ className: "font-bold text-skin-base-light text-md" }, { children: app.label })), _jsx("div", Object.assign({ className: `text-sm text-skin-base-dark ${app.description ? 'visible' : 'hidden'}` }, { children: app.description }))] })) }))] })));
}
export default SidebarHeader;
//# sourceMappingURL=SidebarHeader.js.map