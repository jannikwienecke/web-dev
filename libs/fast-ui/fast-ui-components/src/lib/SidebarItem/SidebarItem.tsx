import { motion } from "framer-motion";
import React from "react";
import { apply, tw } from "twind";
import { SidebarItem } from "../Sidebar/Sidebar";
import {
  borderIcons,
  iconWrapperSidebar,
  navItemContainer,
  tooltipBase,
  tooltopActive,
} from "../styles";

export interface SidebarNavItemProps {
  navItem: SidebarItem;
  isCollapsed: boolean;
}

export function SidebarNavItem({ navItem, isCollapsed }: SidebarNavItemProps) {
  const navItemIconContainer = apply`
    text-skin-base-light
      ${iconWrapperSidebar}
      ${borderIcons}
      ${isCollapsed && "m-0"}
  `;
  const itemWrapperHover = `hover:text-skin-base-dark hover:bg-skin-base-dark`;

  const navItemIcon = `group-active:text-skin-accent group-hover:block`;

  return (
    <div className={`${isCollapsed || "px-3"}`}>
      <div
        className={`group relative ${
          isCollapsed ? "justify-center" : "justify-start"
        } ${navItemContainer}  bg-skin-base-light hover:bg-skin-base-dark mx-1  py-1`}
      >
        {/* Containter for the nav item ICON  */}
        <div className={tw`${navItemIconContainer} ${itemWrapperHover}`}>
          <navItem.icon className={`${navItemIcon} `} />
        </div>
        <div
          style={{ visibility: isCollapsed ? "visible" : "hidden" }}
          className={`${tooltipBase} ${tooltopActive}`}
        >
          {navItem.label}
        </div>

        {/* Container ffor the nav item TEXT - ONLY when Uncollapsed */}
        <motion.div
          className={`text-skin-base-dark text-sm font-semibold ${
            isCollapsed && "hidden"
          } `}
          initial={{ opacity: 0 }}
          animate={{ scale: isCollapsed ? 0 : 1, opacity: isCollapsed ? 0 : 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 40,
          }}
        >
          <div className={tw`${isCollapsed && "hidden"} text-sm`}>
            {navItem.label}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SidebarNavItem;
