import { motion } from 'framer-motion';
import React, { HTMLAttributes } from 'react';
import { apply, tw } from 'twind';
import SidebarAppDrawerItem from '../SidebarAppDrawerItem/SidebarAppDrawerItem';
import SidebarGroupItem from '../SidebarGroupItem/SidebarGroupItem';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarUser from '../SidebarUser/SidebarUser';

export interface SidebarItem {
  icon: (props: HTMLAttributes<unknown>) => JSX.Element;
  label: string;
  pathname: string;
  description?: string;
  isActive?: boolean;
}

export interface Module {
  navigationItems: SidebarItem[];
  title: string;
}

export interface User {
  username: string;
  imgSrc?: string;
}

export interface SidebarProps {
  /** which modules; the navigation items */

  modules: Module[];

  /** A app module which will be shown in a highlighted fashion  */
  sideControlItems?: SidebarItem[];

  /** A app module which will be shown in a highlighted fashion  */
  sideControlSecondaryItems?: SidebarItem[];

  /** information about the actual app */
  app: SidebarItem;

  /** information about the actual app */
  user: User;

  /** whether the sidebar is collapsed or not */
  isCollapsed?: boolean;
}

export const navContainerBase = `
  h-full
  flex flex-col
  border-l-0
  `;

const navContainerCollapsed = apply`w-[64px]`;
const navContainerNotCollapsed = apply`w-[256px]`;

export function Sidebar({
  modules,
  app,
  sideControlItems,
  sideControlSecondaryItems,
  user,
  isCollapsed: isCollapsedDefult,
}: SidebarProps) {
  const isCollapsed_ = Boolean(
    isCollapsedDefult === undefined ? true : isCollapsedDefult
  );

  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(isCollapsed_);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  React.useEffect(() => {
    setIsCollapsed(isCollapsed_);
  }, [isCollapsed_]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ width: isCollapsed ? '64px' : '256px', scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 40,
      }}
      className={tw`relative  ${navContainerBase} border-skin-base-light border-[1px] bg-skin-base-light rounded-l-md ${
        isCollapsed ? navContainerCollapsed : navContainerNotCollapsed
      } `}
    >
      <SidebarHeader app={app} isCollapsed={isCollapsed} />

      <SidebarAppDrawerItem
        appdrawerItems={sideControlItems || []}
        isCollapsed={isCollapsed}
      />

      {/* Navigation modules with items */}
      <div className="flex flex-col justify-between h-full mt-3">
        <div className="grid grid-cols-1 cursor-pointer">
          {modules.map((module, index) => {
            return (
              <SidebarGroupItem
                key={module.title + '_' + index}
                module={module}
                isCollapsed={isCollapsed}
              />
            );
          })}
        </div>

        <div>
          <SidebarAppDrawerItem
            appdrawerItems={sideControlSecondaryItems || []}
            isCollapsed={isCollapsed}
          />

          <SidebarUser
            onToggle={handleToggle}
            user={user}
            isCollapsed={isCollapsed}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
