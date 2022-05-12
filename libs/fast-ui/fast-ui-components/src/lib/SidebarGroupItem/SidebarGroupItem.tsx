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
        className={`px-4 text-skin-base-light text-sm py-2 font-bold ${
          isCollapsed && 'hidden'
        }`}
      >
        {module.title}
      </div>

      <div className="flex flex-col">
        {module.navigationItems.map((item, index) => (
          <SidebarNavItem
            key={item.label + '_' + index}
            navItem={item}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>
    </>
  );
}

export default SidebarGroupItem;
