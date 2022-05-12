import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { css, tw } from 'twind/css';
export const Popover = ({ button, groups }) => {
    const dropDownItem = `
    relative text-skin-base-dark text-[13px]
    rounded-sm  pl-6 flex items-center
    select-none pr-1 focus:bg-skin-accent 
    focus:text-skin-base-inverted
    disabled:text-skin-base-dark
    pb-1 last:pb-0
    group
  `;
    const itemStylesDisabled = css `
    &[data-disabled] {
      color: var(--color-text-base-light);
    }
  `;
    const dropdownContent = `
    p-[5px] rounded-md border-[1px] border-skin-base-light
    min-w-[220px] bg-skin-base-light 
  `;
    const rightSlot = `
    ml-auto pl-5 pr-2 text-skin-base-light hover:text-skin-base-inverted
    group-focus:text-skin-base-inverted
  
  `;
    const seperator = `h-[.5px] bg-skin-accent opacity-40  m-1`;
    return (_jsx("div", { children: _jsxs(DropdownMenuPrimitive.Root, { children: [_jsx(DropdownMenuPrimitive.Trigger, Object.assign({ asChild: true }, { children: button })), _jsx(DropdownMenuPrimitive.Content, Object.assign({ avoidCollisions: true, sideOffset: 10, className: `${dropdownContent}  shadow-xl shadow-shadow-base-dark` }, { children: groups.map((group, index) => {
                        const isLastGroup = index === groups.length - 1;
                        return (_jsxs("div", { children: [group.items.map((item) => {
                                    return (_jsxs(DropdownMenuPrimitive.Item, Object.assign({ disabled: item.disabled, className: `${dropDownItem} ${tw(itemStylesDisabled)}` }, { children: [item.label, ' ', _jsx("div", Object.assign({ className: `
                      
                          ${rightSlot} ${!item.shortCut && 'hidden'}` }, { children: item.shortCut }))] })));
                                }), _jsx(DropdownMenuPrimitive.Separator, { className: `${seperator} ${isLastGroup && 'hidden'}` })] }, `${group.label}`));
                    }) }))] }) }));
};
//# sourceMappingURL=Popover.js.map