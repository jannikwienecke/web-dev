import { motion } from 'framer-motion';
import React, { HTMLAttributes } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaUserCircle,
} from 'react-icons/fa';
import { FiActivity } from 'react-icons/fi';
import { apply, tw } from 'twind';
import { animation } from 'twind/css';

export interface SidebarItem {
  icon: (props: HTMLAttributes<unknown>) => JSX.Element;
  label: string;
  path: string;
}

export interface SidebarProps {
  items: SidebarItem[];
}

export function Sidebar({ items }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [start, setStart] = React.useState(true);

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

  React.useEffect(() => {
    if (start) {
      setIsCollapsed(true);
    }

    setTimeout(() => {
      setIsCollapsed(start);
    }, 150);
  }, [start]);

  console.log('isCollapsed: ', isCollapsed);

  return (
    // Logo element
    <motion.div
      initial={{ scale: 0 }}
      animate={{ width: start ? '64px' : '256px', scale: 1 }}
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
        }`}
      >
        <div className={tw`${mainLogoAndHome}`}>
          <FiActivity className="text-skin-standard" />
        </div>
        <div
          className={`text-skin-base-dark text-sm ${isCollapsed && 'hidden'}`}
        >
          <div className="font-bold">Hamann ERP System</div>
          <div>Workspace</div>
        </div>
      </div>

      {/* Home app element */}
      <div
        className={`px-3 py-4 ${isCollapsed && 'border-b-2 border-skin-base'}`}
      >
        <div
          className={`  cursor-pointer text-skin-primary font-bold bg-skin-primary-light rounded-md flex flex-row items-center ${
            isCollapsed || 'px-3 p-2 justify-start'
          } `}
        >
          <div
            className={tw`${mainLogoAndHome} group bg-skin-base relative ${
              isCollapsed || 'bg-transparent'
            }`}
          >
            <FaHome className="text-skin-primary roun opacity-100" />
            <div className={`${tooltip} block`}>{'Home'}</div>
          </div>
          <div className={`${isCollapsed && 'hidden'}`}>Select Apps</div>
        </div>
      </div>

      {/* Navigation items */}
      <div className="flex flex-col justify-between h-full mt-4">
        <div className="grid grid-cols-1 cursor-pointer">
          <div className={`px-3 ${isCollapsed && 'hidden'}`}>
            <div className="px-4 text-skin-base text-sm py-2 font-bold">
              Apps
            </div>
          </div>
          {items.map((item) => {
            return (
              <div className={`${isCollapsed || 'px-3'}`}>
                <div
                  className={`rounded-md flex flex-row items-center justify-center text-skin-base 
                      hover:text-skin-base-dark
                      
                  ${
                    isCollapsed ||
                    tw`hover:(bg-skin-base text-skin-base-dark) justify-start`
                  }`}
                >
                  <div
                    className={`max-w-[3.5rem] ${isCollapsed || 'px-3 p-1'}`}
                  >
                    <div className={tw`${navItemContainer} `}>
                      <item.icon className="group-active:text-skin-primary" />
                      <div className={`${tooltip}`}>{item.label}</div>
                    </div>
                  </div>
                  <div className={tw`text-md ${isCollapsed && 'hidden'}`}>
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* User settings element */}
        {isCollapsed ? (
          <div className="border-t-[1px] relative ">
            <div
              onClick={() => {
                setStart((prev) => !prev);
              }}
              className="absolute top-5 left-12 ml-1 border-skin-dark cursor-pointer "
            >
              <div className="bg-skin-layer border-2 py-2 mt-[1px]">
                <FaChevronRight className="text-sm text-skin-base  hover:bg-skin-layer" />
              </div>
            </div>

            <div className={tw`${navItemContainer} text-3xl `}>
              <FaUserCircle className="group-active:text-skin-primary relative block text-skin-primary" />

              <div className={`${tooltip}`}>Settings</div>
            </div>
          </div>
        ) : (
          <div className="flex flex-row text-skin-base justify-between px-2">
            <div className="flex items-center  px-2 py-4">
              <div className="flex flex-row items-center gap-2">
                <FaUserCircle className="text-3xl text-skin-primary" />
                <div className="text-sm">Jannik Wienecke </div>
              </div>
            </div>
            <div className={`w-14 grid place-items-center `}>
              <div
                onClick={() => {
                  setStart((prev) => !prev);
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
