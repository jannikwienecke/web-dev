import {
  FaAddressBook,
  FaApple,
  FaHiking,
  FaPuzzlePiece,
  FaShoppingCart,
  FaUser,
} from 'react-icons/fa';
import { FiActivity, FiSettings } from 'react-icons/fi';
import { HiOutlineHome } from 'react-icons/hi';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Sidebar } from './Sidebar';
export default {
  component: Sidebar,
  title: 'Sidebar',
  excludeStories: /.*module_test_1$/,
  decorators: [
    (Story) =>
      _jsx(
        'div',
        Object.assign(
          { style: { height: '900px' } },
          { children: _jsx(Story, {}) }
        )
      ),
  ],
};
const Template = (args) => _jsx(Sidebar, Object.assign({}, args));
const user = { username: 'John Doe', imgSrc: '' };
const main = {
  label: 'Select Apps',
  icon: HiOutlineHome,
  pathname: '#',
};
const app: SidebarControlProps = [
  {
    label: 'Hamann Erp System',
    icon: FiActivity,
    pathname: '#',
    description: 'Workspace',
  },
];

export const module_test_1 = {
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
};
const modules = [
  module_test_1,
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
];
export const Collapsed = Template.bind({});
Collapsed.args = {
  user,
  //   app,
  main,
  modules,

  isCollapsed: true,
};
export const NotCollapsed = Template.bind({});
NotCollapsed.args = {
  user,
  app,
  main,
  modules,
  isCollapsed: false,
};
export const Play = Template.bind({});
Play.args = {
  user,
  app,
  main,
  modules,
  isCollapsed: true,
};
// Play.play =  () => {
//     // const toggleBtn = await screen.findByRole('button', {
//     //   name: /open sidebar/i,
//     // });
//     setTimeout(() => {
//         const submitButton = screen.getByRole('button', {
//             name: /open sidebar button/i,
//         });
//         userEvent.click(submitButton);
//     }, 300);
//     setTimeout(() => {
//         const submitButton = screen.getByRole('button', {
//             name: /close sidebar button/i,
//         });
//         userEvent.click(submitButton);
//     }, 1200);
//     setTimeout(() => {
//         const submitButton = screen.getByRole('button', {
//             name: /user settings button/i,
//         });
//         userEvent.click(submitButton);
//     }, 1400);
// });
// //# sourceMappingURL=Sidebar.stories.js.map
