import { apply, tw } from "twind";
import { SidebarItem } from "../Sidebar";
import { navItemContainer, tooltipBase, tooltopActive } from "../styles";

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
      className={`mb-0 py-3 ${
        isCollapsed && "border-skin-base-light border-b-[1px]"
      }`}
    >
      {appdrawerItems.map((appdrawerItem) => {
        return (
          <SideControlItem
            key={appdrawerItem.label}
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

  const item = "text-xl";

  const itemHover = "hover:text-skin-accent";

  const itemActive = "bg-skin-accent text-skin-base-inverted ";

  if (!sideControlItem) return null;

  return (
    <div
      className={`text-skin-base-dark gap-3 px-4 ${navItemContainer} ${
        isCollapsed ? "justify-center" : "justify-start"
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
          style={{ visibility: isCollapsed ? "visible" : "hidden" }}
          className={`${tooltipBase} ${tooltopActive}`}
        >
          {sideControlItem.label}
        </div>
      </div>

      <div
        className={`text-skin-base-light hover:text-skin-accent text-sm font-normal ${
          isCollapsed && "hidden"
        }`}
      >
        {sideControlItem.label}
      </div>
    </div>
  );
};
