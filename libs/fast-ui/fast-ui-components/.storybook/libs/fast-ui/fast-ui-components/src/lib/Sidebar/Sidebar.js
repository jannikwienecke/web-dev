import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import React from 'react';
import { apply, tw } from 'twind';
import SidebarAppDrawerItem from '../SidebarAppDrawerItem/SidebarAppDrawerItem';
import SidebarGroupItem from '../SidebarGroupItem/SidebarGroupItem';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarUser from '../SidebarUser/SidebarUser';
export const navContainerBase = apply `
  h-full border-skin-base border-2
  flex flex-col
  border-l-0
  
  `;
const navContainerCollapsed = apply `w-[64px]`;
const navContainerNotCollapsed = apply `w-[256px]`;
export function Sidebar({ modules, app, main, user, isCollapsed: isCollapsedDefult, }) {
    const isCollapsed_ = Boolean(isCollapsedDefult === undefined ? true : isCollapsedDefult);
    const [isCollapsed, setIsCollapsed] = React.useState(isCollapsed_);
    const handleToggle = () => {
        setIsCollapsed((prev) => !prev);
    };
    React.useEffect(() => {
        setIsCollapsed(isCollapsed_);
    }, [isCollapsed_]);
    return (_jsxs(motion.div, Object.assign({ initial: { scale: 0 }, animate: { width: isCollapsed ? '72px' : '256px', scale: 1 }, transition: {
            type: 'spring',
            stiffness: 500,
            damping: 40,
        }, className: tw `relative  ${navContainerBase} bg-skin-layer rounded-l-md ${isCollapsed ? navContainerCollapsed : navContainerNotCollapsed}` }, { children: [_jsx(SidebarHeader, { app: app, isCollapsed: isCollapsed }), _jsx(SidebarAppDrawerItem, { appdrawerItem: main, isCollapsed: isCollapsed }), _jsxs("div", Object.assign({ className: "flex flex-col justify-between h-full" }, { children: [_jsx("div", Object.assign({ className: "grid grid-cols-1 cursor-pointer" }, { children: modules.map((module, index) => {
                            return (_jsx(SidebarGroupItem, { module: module, isCollapsed: isCollapsed }, module.title + '_' + index));
                        }) })), _jsx(SidebarUser, { onToggle: handleToggle, user: user, isCollapsed: isCollapsed })] }))] })));
}
export default Sidebar;
//# sourceMappingURL=Sidebar.js.map