import { jsx as _jsx } from "react/jsx-runtime";
import { AppSideMenu } from './AppSideMenu';
export default {
    component: AppSideMenu,
    title: 'AppSideMenu',
    excludeStories: /.*appTestGroups$/,
    decorators: [
        (Story) => (_jsx("div", Object.assign({ style: { height: '900px' } }, { children: _jsx(Story, {}) }))),
    ],
};
const Template = (args) => _jsx(AppSideMenu, Object.assign({}, args));
export const appTestGroups = [
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
export const Opened = Template.bind({});
Opened.args = {
    isOpen: true,
    appGroups: appTestGroups,
    appName: 'User Management',
    appDescription: 'Create, update, and delete users',
};
export const Closed = Template.bind({});
Closed.args = {
    isOpen: false,
};
//# sourceMappingURL=AppSideMenu.stories.js.map