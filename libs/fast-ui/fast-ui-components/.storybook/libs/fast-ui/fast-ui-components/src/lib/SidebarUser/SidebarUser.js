import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaChevronLeft, FaChevronRight, FaUserCircle } from 'react-icons/fa';
import { tw } from 'twind';
import { Popover } from '../Popover/Popover';
import { popoverGroups } from '../Popover/Popover.stories';
import { iconWrapperSidebar } from '../styles';
export function SidebarUser({ isCollapsed, user, onToggle }) {
    const item = `text-3xl text-skin-accent`;
    const itemHovered = 'hover:text-skin-base-light';
    const itemIsClicked = `active:text-skin-base-dark`;
    const userAvatarBtn = (_jsx(Popover, { groups: popoverGroups, button: _jsxs("div", Object.assign({ className: `${iconWrapperSidebar}` }, { children: [_jsx("button", Object.assign({ "aria-label": "user settings button" }, { children: _jsx(FaUserCircle, { className: `${item} ${itemHovered} ${itemIsClicked} ${user.imgSrc && 'hidden'} ` }) })), _jsx("img", { className: `${user.imgSrc || 'hidden'}`, alt: `profile ${user.username}`, src: user.imgSrc, width: "60px" })] })) }));
    if (isCollapsed) {
        return (_jsxs("div", { children: [_jsx("button", Object.assign({ "aria-label": "open sidebar button", onClick: onToggle, className: "absolute z-10 bottom-[16px] right-[-12px] ml-1 border-skin-base-light cursor-pointer " }, { children: _jsx("div", Object.assign({ className: "bg-skin-base-light border-skin-base-light border-[1px] py-2 mt-[1px]" }, { children: _jsx(FaChevronRight, { id: "open-sidebar-btn", className: "text-sm text-skin-base-light  hover:bg-skin-layer" }) })) })), _jsx("div", Object.assign({ className: tw `${isCollapsed && 'p-4 m-0'} group text-3xl` }, { children: userAvatarBtn }))] }));
    }
    return (_jsxs("div", Object.assign({ className: "flex flex-row text-skin-base justify-between px-2 border-t-[1px] border-skin-base-light" }, { children: [_jsx("div", Object.assign({ className: "flex items-center  px-2 py-4" }, { children: _jsxs("div", Object.assign({ className: "flex flex-row items-center gap-2 cursor-pointer" }, { children: [userAvatarBtn, _jsxs("div", Object.assign({ className: "text-sm font-semibold text-skin-base-light" }, { children: [user.username, ' '] }))] })) })), _jsx("div", Object.assign({ className: `w-14 grid place-items-center ` }, { children: _jsx("div", Object.assign({ onClick: onToggle, className: "border-skin-base-light border-[1px] p-1 cursor-pointer" }, { children: _jsx("button", Object.assign({ "aria-label": "close sidebar button" }, { children: _jsx(FaChevronLeft, { className: "text-sm border-skin-base text-skin-base-light hover:bg-skin-layer" }) })) })) }))] })));
}
export default SidebarUser;
//# sourceMappingURL=SidebarUser.js.map