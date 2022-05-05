import { Sidebar } from '@web-dev/fast-ui/fast-ui-components';
import { FaAddressBook, FaApple, FaHiking, FaUser } from 'react-icons/fa';
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
              items={[
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
              ]}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
