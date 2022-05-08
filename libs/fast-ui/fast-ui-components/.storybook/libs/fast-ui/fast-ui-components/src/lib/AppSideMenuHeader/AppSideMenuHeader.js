import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaSearch } from 'react-icons/fa';
export function AppSideMenuHeader({ appName, appDescription, }) {
    return (_jsxs("div", Object.assign({ className: "h-[6rem] flex flex-col p-4 relative pb-0 " }, { children: [_jsxs("div", Object.assign({ className: "flex flex-row" }, { children: [_jsx("div", Object.assign({ className: "flex-grow text-xl font-bold text-skin-base-dark " }, { children: appName })), _jsx("div", Object.assign({ className: "cursor-pointer bg-skin-layer h-8 w-8 grid place-content-center border-skin-base border-2" }, { children: _jsx(FaSearch, { className: "text-skin-base text-sm" }) }))] })), _jsx("div", Object.assign({ className: "line-clamp-2 text-sm w-4/5 text-skin-base-light" }, { children: appDescription })), _jsx("div", { className: "border-b-2 w-14 ml-4 absolute bottom-0" })] })));
}
export default AppSideMenuHeader;
//# sourceMappingURL=AppSideMenuHeader.js.map