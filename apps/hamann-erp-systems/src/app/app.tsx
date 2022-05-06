import { Sidebar } from '@web-dev/fast-ui/fast-ui-components';
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

export function App() {
  return (
    <div
      style={{ backgroundColor: '#F6F7FC' }}
      className="rounded-lg p-2 h-screen"
    >
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route
          path="/fast-ui-components"
          element={
            <Sidebar
              user={{ username: 'John Doe', imgSrc: '' }}
              main={{
                label: 'Select Apps',
                icon: FaHome,
                path: '#',
              }}
              app={{
                label: 'Hamann Erp System',
                icon: FiActivity,
                path: '#',
                description: 'Workspace',
              }}
              modules={[
                {
                  title: 'Fast UI Components',
                  navigationItems: [
                    { icon: FaUser, label: 'User List', path: '#' },
                    {
                      icon: FaHiking,
                      label: 'Hiking',
                      path: '#',
                    },
                    {
                      icon: FaAddressBook,
                      label: 'Address Book',
                      path: '#',
                    },
                    {
                      icon: FaApple,
                      label: 'Apple',
                      path: '#',
                    },
                  ],
                },
                {
                  title: 'Settings',
                  navigationItems: [
                    { icon: FaPuzzlePiece, label: 'Plugins', path: '#' },
                    {
                      icon: FaShoppingCart,
                      label: 'Marketplace',
                      path: '#',
                    },
                    {
                      icon: FiSettings,
                      label: 'Settings',
                      path: '#',
                    },
                  ],
                },
              ]}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
