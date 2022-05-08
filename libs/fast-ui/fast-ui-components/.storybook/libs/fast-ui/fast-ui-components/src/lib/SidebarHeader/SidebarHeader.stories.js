import { jsx as _jsx } from "react/jsx-runtime";
import { FiActivity } from 'react-icons/fi';
import { SidebarHeader } from './SidebarHeader';
export default {
    component: SidebarHeader,
    title: 'SidebarHeader',
    decorators: [(Story) => _jsx("div", Object.assign({ className: "bg-skin-layer" }, { children: Story() }))],
};
const Template = (args) => (_jsx(SidebarHeader, Object.assign({}, args)));
const app = {
    description: 'Workspace',
    label: 'Hamann Erp System',
    pathname: '#',
    icon: FiActivity,
};
export const Collapsed = Template.bind({});
Collapsed.args = {
    isCollapsed: true,
    app,
};
export const NotCollapsed = Template.bind({});
NotCollapsed.args = {
    isCollapsed: false,
    app,
};
//# sourceMappingURL=SidebarHeader.stories.js.map