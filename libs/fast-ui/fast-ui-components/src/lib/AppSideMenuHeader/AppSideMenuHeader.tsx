import { FaSearch } from 'react-icons/fa';
import { AppSideMenuProps } from '../AppSideMenu/AppSideMenu';

export type AppSideMenuHeaderProps = Pick<
  AppSideMenuProps,
  'appDescription' | 'appName'
>;

export function AppSideMenuHeader({
  appName,
  appDescription,
}: AppSideMenuHeaderProps) {
  return (
    <div className="h-[6rem] flex flex-col p-4 relative pb-0 ">
      <div className="flex flex-row">
        <div className="flex-grow text-xl font-bold text-skin-base-dark ">
          {appName}
        </div>
        <div className="cursor-pointer bg-skin-layer h-8 w-8 grid place-content-center border-skin-base border-2">
          <FaSearch className="text-skin-base text-sm" />
        </div>
      </div>
      <div className="line-clamp-2 text-sm w-4/5 text-skin-base-light">
        {appDescription}
      </div>

      {/* Divider */}
      <div className="border-b-2 w-14 ml-4 absolute bottom-0" />
    </div>
  );
}

export default AppSideMenuHeader;
