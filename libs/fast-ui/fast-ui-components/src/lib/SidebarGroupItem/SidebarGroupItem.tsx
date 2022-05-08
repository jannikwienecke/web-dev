import { Module } from '../Sidebar/Sidebar';
import { SidebarNavItem } from '../SidebarItem';

export interface SidebarGroupItemProps {
  isCollapsed: boolean;
  module: Module;
}

export function SidebarGroupItem({
  isCollapsed,
  module,
}: SidebarGroupItemProps) {
  return (
    <>
      {/* Module description for not collapsed screen */}
      <div
        className={`mt-3 px-3 first:mt-0 ${
          isCollapsed && 'border-b-2  mb-2 border-skin-base first:hidden'
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
      {module.navigationItems.map((item, index) => (
        <SidebarNavItem
          key={item.label + '_' + index}
          navItem={item}
          isCollapsed={isCollapsed}
        />
      ))}
    </>
  );
}

export default SidebarGroupItem;
