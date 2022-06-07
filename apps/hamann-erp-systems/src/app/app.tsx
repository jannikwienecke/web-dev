import {
  AppSideMenu,
  AppSideMenuGroupItemProps,
  AppViewHeader,
  Sidebar,
} from '@web-dev/fast-ui/fast-ui-components';
import { FaAddressBook, FaApple, FaHiking, FaUser } from 'react-icons/fa';
import { FiActivity, FiSettings } from 'react-icons/fi';
import {
  HiOutlineBell,
  HiOutlineCloud,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiStar,
} from 'react-icons/hi';

export const appTestGroups: AppSideMenuGroupItemProps[] = [
  {
    title: 'Employee Views',
    isActive: true,
    appItems: [
      { label: 'All Employees', pathname: '#' },
      { label: 'Active Employee', pathname: '#' },
      { label: 'Left Employee', pathname: '#' },
    ],
  },

  {
    title: 'Employee Settings',
    appItems: [
      { label: 'Settings', pathname: '#' },
      { label: 'Views', pathname: '#' },
      { label: 'Drivers', pathname: '#', isActive: true },
      { label: 'TImes', pathname: '#' },
    ],
  },
];
export function App() {
  return (
    <div className="rounded-lg p-2 h-screen flex flex-row  bg-skin-base-dark">
      <Sidebar
        user={{ username: 'John Doe', imgSrc: '' }}
        sideControlItems={[
          {
            label: 'Select apps',
            icon: HiOutlineHome,
            pathname: '#',
          },

          {
            label: 'Notifications',
            icon: HiOutlineBell,
            pathname: '#',
          },

          {

            label: 'Favorites',
            icon: HiStar,
            pathname: '#',
            isActive: true,
          },
        ]}
        app={{
          label: 'Hamann Erp System',
          icon: FiActivity,
          pathname: '#',
          description: 'Workspace',
        }}
        modules={[
          {
            title: 'Apps',
            navigationItems: [
              { icon: FaUser, label: 'User List', pathname: '#' },
              {
                icon: FaHiking,
                label: 'Hiking',
                pathname: '#',
              },
              {
                icon: FaAddressBook,
                label: 'Address Book',
                pathname: '#',
              },
              {
                icon: FaApple,
                label: 'Apple',
                pathname: '#',
              },
            ],
          },
        ]}
        sideControlSecondaryItems={[
          { icon: HiOutlineCloud, label: 'Plugins', pathname: '#' },
          {
            icon: HiOutlineShoppingCart,
            label: 'Marketplace',
            pathname: '#',
          },
          {
            icon: FiSettings,
            label: 'Settings',
            pathname: '#',
          },
        ]}
      />

      <AppSideMenu
        appGroups={appTestGroups}
        isOpen={true}
        appName="User Management"
        appDescription="CRUD Users"
      />

      <AppViewHeader />
    </div>
  );
}

export default App;
