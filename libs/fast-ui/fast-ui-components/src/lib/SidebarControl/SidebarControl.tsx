import { apply, tw } from 'twind';
import { SidebarItem } from '../Sidebar';
import { navItemContainer, tooltipBase, tooltopActive } from '../styles';

export interface SidebarControlProps {
  isCollapsed: boolean;
  appdrawerItems?: SidebarItem[];
}

export function SidebarControl({
  isCollapsed,
  appdrawerItems,
}: SidebarControlProps) {
  if (!appdrawerItems || appdrawerItems.length === 0) return null;
  return (
    <div
      className={`py-3 mb-0 ${
        isCollapsed && 'border-b-[1px] border-skin-base-light'
      }`}
    >
      {appdrawerItems.map((appdrawerItem) => {
        return (
          <SideControlItem
            sideControlItem={appdrawerItem}
            isCollapsed={isCollapsed}
          />
        );
      })}
    </div>
  );
}

export default SidebarControl;

export interface SideControlItemProps {
  isCollapsed: boolean;
  sideControlItem: SidebarItem;
}

export const SideControlItem: React.FC<SideControlItemProps> = ({
  isCollapsed,
  sideControlItem,
}) => {
  const mainLogoAndHome = apply`
    grid place-items-center 
    p-2 rounded-md 
    group relative
  `;

  const item = 'text-xl';

  const itemHover = 'hover:text-skin-accent';

  const itemActive = 'bg-skin-accent text-skin-base-inverted ';

  if (!sideControlItem) return null;

  return (
    <div
      className={`text-skin-base-dark px-4 gap-3 ${navItemContainer} ${
        isCollapsed ? 'justify-center' : 'justify-start'
      }
      ${sideControlItem.isActive || itemHover}
      `}
    >
      <div
        className={tw`${mainLogoAndHome}  ${
          sideControlItem.isActive && itemActive
        } `}
      >
        <sideControlItem.icon className={`${item} `} />

        <div
          style={{ visibility: isCollapsed ? 'visible' : 'hidden' }}
          className={`${tooltipBase} ${tooltopActive}`}
        >
          {sideControlItem.label}
        </div>
      </div>

      <div
        className={`text-sm font-normal text-skin-base-light hover:text-skin-accent ${
          isCollapsed && 'hidden'
        }`}
      >
        {sideControlItem.label}
      </div>
    </div>
  );
};
