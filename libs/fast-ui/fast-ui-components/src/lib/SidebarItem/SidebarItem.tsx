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
    tooltiptext hidden absolute bg-skin-contrast 
    p-1 px-3 text-skin-standard rounded-md top-3
    left-16 text-white text-sm group-hover:block
    whitespace-nowrap
  `;

  const navItemContainer = apply`
     text-skin-
      group relative grid place-content-center m-2 
      rounded-lg hover:bg-skin-base
      ${isCollapsed && 'p-4 m-0'}
  `;

  return (
    <div className={`${isCollapsed || 'px-3'}`}>
      <div
        className={`rounded-md flex flex-row items-center justify-center
                    text-skin-base hover:text-skin-base-dark 
                    ${
                      isCollapsed ||
                      tw`hover:(bg-skin-base text-skin-base-dark) justify-start`
                    }`}
      >
        <div className={`max-w-[3.5rem] ${isCollapsed || 'px-3 p-1'}`}>
          <div className={tw`${navItemContainer} `}>
            <navItem.icon className="group-active:text-skin-primary group-hover:block" />
            <div className={`${tooltip}`}>{navItem.label}</div>
          </div>
        </div>
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
