import { jsx as _jsx } from "react/jsx-runtime";
export function AppSideMenuItem({ label, pathname, isActive, }) {
    const itemHover = `
  hover:w-[101%] hover:bg-skin-primary-light
  hover:border-r-2 hover:border-skin-base-dark
`;
    const itemActive = `
  border-r-2 w-[101%] border-skin-primary
  text-skin-primary-intense  bg-skin-primary-light
`;
    const itemBase = `
  list-inside list-item list-disc
  text-skin-base-light pl-8 p-1 cursor-pointer
`;
    return (_jsx("li", Object.assign({ className: `${itemBase} ${itemHover} ${isActive && itemActive} active:text-skin-base-dark` }, { children: label }), label));
}
export default AppSideMenuItem;
//# sourceMappingURL=AppSideMenuItem.js.map