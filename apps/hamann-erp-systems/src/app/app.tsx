import {
  Sidebar,
  AppSideMenu,
  AppGroup,
} from '@web-dev/fast-ui/fast-ui-components';
import {
  FaAddressBook,
  FaApple,
  FaHiking,
  FaHome,
  FaPuzzlePiece,
  FaShoppingCart,
  FaUser,
} from 'react-icons/fa';
import { FiActivity, FiSettings } from 'react-icons/fi';
import { Route, Routes } from 'react-router-dom';

export const appTestGroups: AppGroup[] = [
  {
    title: 'Employee Views',
    appItems: [
      { label: 'All Employee', pathname: '#' },
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
    <div
      style={{ backgroundColor: 'hsl(260, 20%, 98%)' }}
      className="rounded-lg p-2 h-screen flex flex-row"
    >
      <Sidebar
        user={{ username: 'John Doe', imgSrc: '' }}
        main={{
          label: 'Select Apps',
          icon: FaHome,
          pathname: '#',
        }}
        app={{
          label: 'Hamann Erp System',
          icon: FiActivity,
          pathname: '#',
          description: 'Workspace',
        }}
        modules={[
          {
            title: 'Fast UI Components',
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
          {
            title: 'Settings',
            navigationItems: [
              { icon: FaPuzzlePiece, label: 'Plugins', pathname: '#' },
              {
                icon: FaShoppingCart,
                label: 'Marketplace',
                pathname: '#',
              },
              {
                icon: FiSettings,
                label: 'Settings',
                pathname: '#',
              },
            ],
          },
        ]}
      />

      <AppSideMenu
        appGroups={appTestGroups}
        isOpen={true}
        appName="User Management"
        appDescription="CRUD Users"
      />
    </div>
  );
}

export default App;
