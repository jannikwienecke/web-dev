import { jsx as _jsx } from "react/jsx-runtime";
import { AppSideMenuItem } from './AppSideMenuItem';
export default {
    component: AppSideMenuItem,
    title: 'AppSideMenuItem',
};
const Template = (args) => (_jsx(AppSideMenuItem, Object.assign({}, args)));
export const InActive = Template.bind({});
InActive.args = {
    label: 'Home',
    pathname: '#',
    description: 'Home page',
    isActive: false,
};
export const Active = Template.bind({});
Active.args = {
    label: 'Home',
    pathname: '#',
    description: 'Home page',
    isActive: true,
};
//# sourceMappingURL=AppSideMenuItem.stories.js.map