import { motion } from 'framer-motion';
import React, { HTMLAttributes } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaUserCircle,
} from 'react-icons/fa';
import { apply, tw } from 'twind';
import SidebarAppDrawerItem from '../SidebarAppDrawerItem/SidebarAppDrawerItem';
import { SidebarNavItem } from '../SidebarItem';

export interface SidebarItem {
  icon: (props: HTMLAttributes<unknown>) => JSX.Element;
  label: string;
  path: string;
  description?: string;
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

  main?: SidebarItem;

  /** information about the actual app */
  app: SidebarItem;

  /** information about the actual app */
  user: User;

  /** whether the sidebar is collapsed or not */
  isCollapsed?: boolean;
}

export function Sidebar({
  modules,
  app,
  main,
  user,
  isCollapsed: isCollapsedDefult,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(
    Boolean(isCollapsedDefult) || true
  );

  const tooltip = `tooltiptext hidden  absolute bg-skin-contrast p-1 px-3 text-skin-standard rounded-md top-3 left-16 text-white text-sm  group-hover:block whitespace-nowrap`;

  const navContainerBase = apply`bg-skin-layer h-full border-skin-base border-2 flex flex-col rounded-l-md`;
  const navContainerCollapsed = apply`w-[64px]`;
  const navContainerNotCollapsed = apply`w-[256px]`;

  const mainLogoAndHome = apply`
    grid place-items-center 
    p-3 rounded-md max-w-[3.5rem]
    bg-skin-primary 
    `;

  const navItemContainer = apply`
      group relative grid place-content-center m-2 
      rounded-lg hover:bg-skin-base
      ${isCollapsed && 'p-4 m-0'}
  `;

  const sidebarRef = React.useRef<HTMLDivElement>(null);
  // collapse on click outside
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof Node)) return;
      if (!sidebarRef.current) return;

      if ((e.target as any).id === 'open-sidebar-btn') {
        setIsCollapsed(false);
        return;
      }

      if (!sidebarRef.current.contains(e.target)) {
        setIsCollapsed(true);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isCollapsed]);

  React.useEffect(() => {
    console.log('isCollapsed: ', isCollapsed);
  }, [isCollapsed]);

  return (
    // Logo element
    <motion.div
      ref={sidebarRef}
      initial={{ scale: 0 }}
      animate={{ width: isCollapsed ? '64px' : '256px', scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 40,
      }}
      className={tw`transition duration-500  ${navContainerBase}, ${
        isCollapsed ? navContainerCollapsed : navContainerNotCollapsed
      }`}
    >
      <div
        className={`ease-in-out  border-b-2 border-skin-base px-3 py-4 flex flex-row gap-4 justify-start ${
          isCollapsed && 'justify-center'
        } ${(isCollapsed && !app.description) || 'items-center'}`}
      >
        <div className={tw`${mainLogoAndHome}`}>
          <app.icon className="text-skin-standard" />
        </div>
        <div
          className={`text-skin-base-dark text-sm ${isCollapsed && 'hidden'}`}
        >
          <motion.div
            className="text-md"
            animate={{ scale: isCollapsed ? 0 : 1 }}
            transition={{
              type: 'spring',
              stiffness: 600,
              damping: 90,
            }}
          >
            <div className="font-bold">{app.label}</div>

            <div className={app.description ? 'visible' : 'hidden'}>
              {app.description}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Home app element */}
      <SidebarAppDrawerItem appdrawerItem={main} isCollapsed={isCollapsed} />

      {/* Navigation items */}
      <div className="flex flex-col justify-between h-full">
        <div className="grid grid-cols-1 cursor-pointer">
          {modules.map((module) => {
            return (
              <>
                {/* Module description for not collapsed screen */}
                <div
                  className={`mt-3 px-3 ${
                    isCollapsed &&
                    'border-b-2  mb-2 border-skin-base first:hidden'
                  }`}
                >
                  <div
                    className={`px-4 text-skin-base text-sm py-2 font-bold ${
                      isCollapsed && 'hidden'
                    }`}
                  >
                    {module.title}
                  </div>
                </div>

                {/* Module Seperator for collapsed screen */}

                {module.navigationItems.map((item) => (
                  <SidebarNavItem navItem={item} isCollapsed={isCollapsed} />
                ))}
              </>
            );
          })}
        </div>

        {/* User settings element */}
        {isCollapsed ? (
          <div className="border-t-[1px] relative ">
            <div
              onClick={() => {
                setIsCollapsed((prev) => !prev);
              }}
              className="absolute top-5 left-12 ml-1 border-skin-dark cursor-pointer "
            >
              <div className="bg-skin-layer border-2 py-2 mt-[1px]">
                <FaChevronRight
                  id="open-sidebar-btn"
                  className="text-sm text-skin-base  hover:bg-skin-layer"
                />
              </div>
            </div>

            <div className={tw`${navItemContainer} text-3xl `}>
              <FaUserCircle className="group-active:text-skin-primary relative block text-skin-primary" />

              <div className={`${tooltip}`}>{user.username}</div>
            </div>
          </div>
        ) : (
          <div className="flex flex-row text-skin-base justify-between px-2">
            <div className="flex items-center  px-2 py-4">
              <div className="flex flex-row items-center gap-2">
                <FaUserCircle
                  className={`text-3xl text-skin-primary ${
                    user.imgSrc && 'hidden'
                  } `}
                />

                <img
                  className={`${user.imgSrc || 'hidden'}`}
                  alt={`profile ${user.username}`}
                  src={user.imgSrc}
                  width="60px"
                />

                <div className="text-sm">{user.username} </div>
              </div>
            </div>
            <div className={`w-14 grid place-items-center `}>
              <div
                onClick={() => {
                  setIsCollapsed((prev) => !prev);
                }}
                className="border-skin-base border-2 p-1 cursor-pointer"
              >
                <FaChevronLeft className="text-sm border-skin-base  text-skin-base hover:bg-skin-layer" />
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Sidebar;
