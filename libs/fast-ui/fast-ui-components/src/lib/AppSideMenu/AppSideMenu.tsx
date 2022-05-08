import { tw } from 'twind';
import AppSideMenuHeader from '../AppSideMenuHeader/AppSideMenuHeader';
import AppSideMenuItem from '../AppSideMenuItem/AppSideMenuItem';
import { navContainerBase, SidebarItem } from '../Sidebar';

export type AppGroupItem = Pick<
  SidebarItem,
  'label' | 'pathname' | 'description'
> & {
  /** If this app group item is currently showing on the screen */
  isActive?: boolean;
};

export interface AppGroup {
  title: string;
  appItems: AppGroupItem[];
}

export interface AppSideMenuProps {
  // Boolean if this is showing
  isOpen: boolean;

  /** The app items to show - grouped by app  */
  appGroups: AppGroup[];

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
    bg-skin-base border-skin-base relative border-l-0
  `;

  if (!isOpen) return null;

  return (
    <div
      style={{
        boxShadow:
          '0px 10px 18px -10px rgba(22, 23, 24, 0.1),0px 10px 10px -20px rgba(22, 23, 24, 0.6)',
      }}
      className={`${tw(
        navContainerBase
      )}${appSideMenuContainer} w-72 rounded-l-0 `}
    >
      <div className="flex flex-col ">
        <AppSideMenuHeader appName={appName} appDescription={appDescription} />

        {appGroups.map((appGroup) => {
          return (
            <div key={appGroup.title}>
              {/* Sub header */}
              <div className="text-skin-base text-sm uppercase font-bold p-4 flex flex-row justify-between">
                <div>{appGroup.title}</div>
                <div className="bg-skin-layer text-sm p-0 px-[6px] py-[1px] rounded-sm ">
                  {appGroup.appItems.length}
                </div>
              </div>

              {/* App items */}
              <div>
                <ul>
                  {appGroup.appItems.map((appItem, index) => (
                    <AppSideMenuItem key={appItem.label + index} {...appItem} />
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AppSideMenu;
