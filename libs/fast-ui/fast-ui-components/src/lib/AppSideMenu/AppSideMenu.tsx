import { tw } from 'twind';
import AppSideMenuGroupItem, {
  AppSideMenuGroupItemProps,
} from '../AppSideMenuGroupItem/AppSideMenuGroupItem';
import AppSideMenuHeader from '../AppSideMenuHeader/AppSideMenuHeader';
import { navContainerBase } from '../Sidebar';

export * from '../AppSideMenuGroupItem/AppSideMenuGroupItem';

export interface AppSideMenuProps {
  // Boolean if this is showing
  isOpen: boolean;

  /** The app items to show - grouped by app  */
  appGroups: AppSideMenuGroupItemProps[];

  /** The display name of the current app */
  appName: string;

  /** The description of the current app  */
  appDescription?: string;
}

export function AppSideMenu({
  isOpen,
  appGroups,
  appName,
  appDescription,
}: AppSideMenuProps) {
  const appSideMenuContainer = `
    bg-skin-base-light border-skin-base-light
    relative border-l-0
  `;

  if (!isOpen) return null;

  return (
    <div
      className={`${tw(
        navContainerBase
      )}${appSideMenuContainer} w-72 rounded-l-0 shrink-0 `}
    >
      <div className="flex flex-col ">
        <AppSideMenuHeader appName={appName} appDescription={appDescription} />
        <div className="pt-3">
          {appGroups.map((appGroup) => (
            <AppSideMenuGroupItem
              key={`app_side_menu_item_${appGroup.title}`}
              {...appGroup}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppSideMenu;
