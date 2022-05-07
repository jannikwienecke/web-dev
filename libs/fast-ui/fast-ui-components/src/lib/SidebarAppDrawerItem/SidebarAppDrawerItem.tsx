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
    p-3 rounded-md 
    group bg-skin-base relative
    `;

  const tooltip = `tooltiptext hidden absolute bg-skin-contrast p-1 px-3 text-skin-standard rounded-md top-3 left-16 text-white text-sm  group-hover:block whitespace-nowrap`;

  if (!appdrawerItem) return null;
  return (
    <div
      className={`px-3 py-3 mb-0 ${
        isCollapsed && 'border-b-2 border-skin-base'
      }`}
    >
      <div
        className={`cursor-pointer bg-skin-base text-skin-accent font-bold rounded-md flex flex-row items-center justify-center ${
          isCollapsed || 'px-3  justify-start'
        } `}
      >
        <div
          className={tw`${mainLogoAndHome}  ${isCollapsed || 'bg-transparent'}`}
        >
          <appdrawerItem.icon className="text-skin-accent roun opacity-100" />
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
