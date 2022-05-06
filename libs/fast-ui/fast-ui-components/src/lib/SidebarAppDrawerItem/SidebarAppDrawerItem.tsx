import { FaHome } from 'react-icons/fa';
import { apply, tw } from 'twind';
import { SidebarItem } from '../Sidebar';

export interface SidebarAppDrawerItemProps {
  isCollapsed: boolean;
  appdrawerItem?: SidebarItem;
}

export function SidebarAppDrawerItem({
  isCollapsed,
  appdrawerItem,
}: SidebarAppDrawerItemProps) {
  const mainLogoAndHome = apply`
    grid place-items-center 
    p-3 rounded-md max-w-[3.5rem]
    bg-skin-primary 
    `;

  const tooltip = `tooltiptext hidden  absolute bg-skin-contrast p-1 px-3 text-skin-standard rounded-md top-3 left-16 text-white text-sm  group-hover:block whitespace-nowrap`;

  if (!appdrawerItem) return null;
  return (
    <div
      className={`px-3 py-4 mb-2 ${
        isCollapsed && 'border-b-2 border-skin-base'
      }`}
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
          <appdrawerItem.icon className="text-skin-primary roun opacity-100" />
          <div className={`${tooltip} block`}>{'Home'}</div>
        </div>
        <div className={`${isCollapsed && 'hidden'}`}>
          {appdrawerItem.label}
        </div>
      </div>
    </div>
  );
}

export default SidebarAppDrawerItem;
