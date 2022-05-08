import { jsx as _jsx } from "react/jsx-runtime";
import { AppSideMenuHeader } from './AppSideMenuHeader';
export default {
    component: AppSideMenuHeader,
    title: 'AppSideMenuHeader',
};
const Template = (args) => (_jsx(AppSideMenuHeader, Object.assign({}, args)));
export const Primary = Template.bind({});
Primary.args = {
    appName: 'Time Tracking',
    appDescription: 'Track your time',
};
export const Overflow = Template.bind({});
Overflow.args = {
    appName: 'Time Tracking',
    appDescription: 'Gets Event Longer and longer and longer. Track your time. A very long description that will overflow. How long is this?',
};
//# sourceMappingURL=AppSideMenuHeader.stories.js.map