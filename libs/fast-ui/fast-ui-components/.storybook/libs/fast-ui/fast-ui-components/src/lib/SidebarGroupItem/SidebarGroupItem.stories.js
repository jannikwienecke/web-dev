import { jsx as _jsx } from "react/jsx-runtime";
import { module_test_1 } from '../Sidebar/Sidebar.stories';
import { SidebarGroupItem } from './SidebarGroupItem';
export default {
    component: SidebarGroupItem,
    title: 'SidebarGroupItem',
    decorators: [(Story) => _jsx("div", Object.assign({ className: "bg-skin-layer" }, { children: Story() }))],
};
const Template = (args) => (_jsx(SidebarGroupItem, Object.assign({}, args)));
export const Collapsed = Template.bind({});
Collapsed.args = {
    module: module_test_1,
    isCollapsed: true,
};
export const NotCollapsed = Template.bind({});
NotCollapsed.args = {
    module: module_test_1,
    isCollapsed: false,
};
//# sourceMappingURL=SidebarGroupItem.stories.js.map