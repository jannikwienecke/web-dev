import { motion } from 'framer-motion';
import React from 'react';
import { apply, tw } from 'twind';
import { SidebarItem } from '../Sidebar/Sidebar';

export interface SidebarNavItemProps {
  navItem: SidebarItem;
  isCollapsed: boolean;
}

export function SidebarNavItem({ navItem, isCollapsed }: SidebarNavItemProps) {
  const tooltip = `
    z-10
    tooltiptext invisible absolute bg-skin-contrast 
    p-1 px-3 text-skin-standard rounded-md top-3
    left-16 text-white text-sm 
    whitespace-nowrap

    ${isCollapsed && tw`group-hover:(block, visible)`}
  `;

  const navItemContainer = `
    rounded-md flex flex-row items-center justify-center
    text-skin-base hover:text-skin-base-dark 
    group
 `;

  const navItemContainerCollapsed = `${
    isCollapsed || tw`hover:(bg-skin-base text-skin-base-dark) justify-start`
  }`;

  const navItemIconContainer = apply`
     text-skin-
      relative grid place-content-center m-2 
      rounded-lg hover:bg-skin-base
      ${isCollapsed && 'p-4 m-0'}
  `;

  const navItemIcon = `group-active:text-skin-primary group-hover:block`;

  return (
    <div className={`${isCollapsed || 'px-3'}`}>
      <div className={`${navItemContainer} ${navItemContainerCollapsed}`}>
        <div className={`max-w-[3.5rem] ${isCollapsed || 'px-3 p-1'}`}>
          {/* Containter for the nav item ICON  */}
          <div className={tw`${navItemIconContainer}`}>
            <navItem.icon className={navItemIcon} />
            <div className={`${tooltip}`}>{navItem.label}</div>
          </div>
        </div>

        {/* Container ffor the nav item TEXT - ONLY when Uncollapsed */}
        <motion.div
          className="text-md"
          animate={{ scale: isCollapsed ? 0 : 1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 40,
          }}
        >
          <div className={tw`text-md ${isCollapsed && 'hidden'}`}>
            {navItem.label}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SidebarNavItem;
