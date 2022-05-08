import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { css, tw } from 'twind/css';
export const Popover = ({ button, groups }) => {
    const dropDownItem = `
    relative text-skin-accent text-[13px]
    rounded-sm  pl-6 flex items-center
    select-none pr-1 focus:bg-skin-primary 
    focus:text-skin-standard
    disabled:text-skin-base
    pb-1 last:pb-0
  `;
    const itemStylesDisabled = css `
    &[data-disabled] {
      color: var(--color-text-disabled);
    }
  `;
    const dropdownContent = `
    p-[5px] rounded-md bg-skin-layer
    min-w-[220px]
  `;
    const boxShadowContent = css `
    box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
      0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  `;
    const rightSlot = `
    ml-auto pl-5 pr-2 text-skin-base
  `;
    const seperator = `h-[.5px] bg-skin-primary opacity-40  m-1`;
    return (_jsx("div", { children: _jsxs(DropdownMenuPrimitive.Root, { children: [_jsx(DropdownMenuPrimitive.Trigger, Object.assign({ asChild: true }, { children: button })), _jsx(DropdownMenuPrimitive.Content, Object.assign({ avoidCollisions: true, sideOffset: 10, className: tw `${boxShadowContent} ${dropdownContent}` }, { children: groups.map((group, index) => {
                        const isLastGroup = index === groups.length - 1;
                        return (_jsxs(_Fragment, { children: [group.items.map((item) => {
                                    return (_jsxs(DropdownMenuPrimitive.Item, Object.assign({ disabled: item.disabled, className: `${dropDownItem} ${tw(itemStylesDisabled)}` }, { children: [item.label, ' ', _jsx("div", Object.assign({ className: `
                      
                          ${rightSlot} ${!item.shortCut && 'hidden'}` }, { children: item.shortCut }))] })));
                                }), _jsx(DropdownMenuPrimitive.Separator, { className: `${seperator} ${isLastGroup && 'hidden'}` })] }));
                    }) }))] }) }));
};
//# sourceMappingURL=Popover.js.map