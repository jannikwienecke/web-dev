import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { tw } from 'twind';
import AppSideMenuHeader from '../AppSideMenuHeader/AppSideMenuHeader';
import AppSideMenuItem from '../AppSideMenuItem/AppSideMenuItem';
import { navContainerBase } from '../Sidebar';
export function AppSideMenu({ isOpen, appGroups, appName, appDescription, }) {
    const appSideMenuContainer = `
    bg-skin-base border-skin-base relative border-l-0
  `;
    if (!isOpen)
        return null;
    return (_jsx("div", Object.assign({ style: {
            boxShadow: '0px 10px 18px -10px rgba(22, 23, 24, 0.1),0px 10px 10px -20px rgba(22, 23, 24, 0.6)',
        }, className: `${tw(navContainerBase)}${appSideMenuContainer} w-72 rounded-l-0 ` }, { children: _jsxs("div", Object.assign({ className: "flex flex-col " }, { children: [_jsx(AppSideMenuHeader, { appName: appName, appDescription: appDescription }), appGroups.map((appGroup) => {
                    return (_jsxs("div", { children: [_jsxs("div", Object.assign({ className: "text-skin-base-dark text-sm uppercase font-bold p-4 flex flex-row justify-between" }, { children: [_jsx("div", { children: appGroup.title }), _jsx("div", Object.assign({ className: "bg-skin-base-dark text-sm p-0 px-[6px] py-[1px] rounded-sm " }, { children: appGroup.appItems.length }))] })), _jsx("div", { children: _jsx("ul", { children: appGroup.appItems.map((appItem, index) => (_jsx(AppSideMenuItem, Object.assign({}, appItem), appItem.label + index))) }) })] }, appGroup.title));
                })] })) })));
}
export default AppSideMenu;
//# sourceMappingURL=AppSideMenu.js.map