import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { apply, tw } from 'twind';
export function SidebarHeader({ isCollapsed, app }) {
    const mainLogoAndHome = apply `
    grid place-items-center 
    p-3 rounded-md max-w-[3.5rem]
    bg-skin-primary
  `;
    return (_jsxs("div", Object.assign({ className: `h-24 flex-shrink-0 border-b-2 border-skin-base px-3 flex flex-row gap-4 justify-start ${isCollapsed && 'justify-center'} ${(isCollapsed && !app.description) || 'items-center'}` }, { children: [_jsx("div", Object.assign({ className: tw `${mainLogoAndHome}` }, { children: _jsx(app.icon, { className: "text-skin-standard" }) })), _jsx("div", Object.assign({ className: `text-skin-base-dark text-sm ${isCollapsed && 'hidden'}` }, { children: _jsxs(motion.div, Object.assign({ className: "text-md", animate: { scale: isCollapsed ? 0 : 1 }, transition: {
                        type: 'spring',
                        stiffness: 600,
                        damping: 90,
                    } }, { children: [_jsx("div", Object.assign({ className: "font-bold" }, { children: app.label })), _jsx("div", Object.assign({ className: app.description ? 'visible' : 'hidden' }, { children: app.description }))] })) }))] })));
}
export default SidebarHeader;
//# sourceMappingURL=SidebarHeader.js.map