import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaChevronRight, FaUserCircle, FaChevronLeft } from 'react-icons/fa';
import { apply, tw } from 'twind';
import { Popover } from '../Popover/Popover';
import { popoverGroups } from '../Popover/Popover.stories';
export function SidebarUser({ isCollapsed, user, onToggle }) {
    const navItemContainer = apply `
      relative grid place-content-center m-2 
      rounded-lg hover:bg-skin-base
      ${isCollapsed && 'p-4 m-0'}
  `;
    const userAvatarBtn = (_jsx(Popover, { groups: popoverGroups, button: _jsxs("div", { children: [_jsx("button", Object.assign({ "aria-label": "user settings button" }, { children: _jsx(FaUserCircle, { className: `text-3xl text-skin-accent ${user.imgSrc && 'hidden'} ` }) })), _jsx("img", { className: `${user.imgSrc || 'hidden'}`, alt: `profile ${user.username}`, src: user.imgSrc, width: "60px" })] }) }));
    if (isCollapsed) {
        return (_jsxs("div", Object.assign({ className: "border-t-[1px] border-skin-base " }, { children: [_jsx("button", Object.assign({ "aria-label": "open sidebar button", onClick: onToggle, className: "absolute z-10 bottom-[16px] right-[-12px] ml-1 border-skin-dark cursor-pointer " }, { children: _jsx("div", Object.assign({ className: "bg-skin-layer border-skin-base border-2 py-2 mt-[1px]" }, { children: _jsx(FaChevronRight, { id: "open-sidebar-btn", className: "text-sm text-skin-base  hover:bg-skin-layer" }) })) })), _jsx("div", Object.assign({ className: tw `${navItemContainer} group text-3xl` }, { children: userAvatarBtn }))] })));
    }
    return (_jsxs("div", Object.assign({ className: "flex flex-row text-skin-base justify-between px-2 border-t-[1px] border-skin-base" }, { children: [_jsx("div", Object.assign({ className: "flex items-center  px-2 py-4" }, { children: _jsxs("div", Object.assign({ className: "flex flex-row items-center gap-2 cursor-pointer" }, { children: [userAvatarBtn, _jsxs("div", Object.assign({ className: "text-sm" }, { children: [user.username, " "] }))] })) })), _jsx("div", Object.assign({ className: `w-14 grid place-items-center ` }, { children: _jsx("div", Object.assign({ onClick: onToggle, className: "border-skin-base border-2 p-1 cursor-pointer" }, { children: _jsx("button", Object.assign({ "aria-label": "close sidebar button" }, { children: _jsx(FaChevronLeft, { className: "text-sm border-skin-base text-skin-base hover:bg-skin-layer" }) })) })) }))] })));
}
export default SidebarUser;
//# sourceMappingURL=SidebarUser.js.map