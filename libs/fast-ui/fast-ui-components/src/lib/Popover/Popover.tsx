import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { css, tw } from 'twind/css';

export interface PopoverItem {
  label: string;
  type?: 'checkbox' | 'radio' | 'trigger';
  items?: PopoverItem[];
  shortCut?: string;
  disabled?: boolean;
}

export interface PopoverGroup {
  label: string;
  items: PopoverItem[];
}

export interface PopoverProps {
  button: JSX.Element;
  groups: PopoverGroup[];
}

export const Popover = ({ button, groups }: PopoverProps) => {
  const dropDownItem = `
    relative text-skin-accent text-[13px]
    rounded-sm  pl-6 flex items-center
    select-none pr-1 focus:bg-skin-primary 
    focus:text-skin-standard
    disabled:text-skin-base
    pb-1 last:pb-0
  `;

  const itemStylesDisabled = css`
    &[data-disabled] {
      color: var(--color-text-disabled);
    }
  `;

  const dropdownContent = `
    p-[5px] rounded-md bg-skin-layer
    min-w-[220px]
  `;

  const boxShadowContent = css`
    box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
      0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  `;

  const rightSlot = `
    ml-auto pl-5 pr-2 text-skin-base
  `;

  const seperator = `h-[.5px] bg-skin-primary opacity-40  m-1`;

  return (
    <div>
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          {button}
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Content
          avoidCollisions={true}
          sideOffset={10}
          className={tw`${boxShadowContent} ${dropdownContent}`}
        >
          {groups.map((group, index) => {
            const isLastGroup = index === groups.length - 1;
            return (
              <>
                {group.items.map((item) => {
                  return (
                    <DropdownMenuPrimitive.Item
                      disabled={item.disabled}
                      className={`${dropDownItem} ${tw(itemStylesDisabled)}`}
                    >
                      {item.label}{' '}
                      <div
                        className={`
                      
                          ${rightSlot} ${!item.shortCut && 'hidden'}`}
                      >
                        {item.shortCut}
                      </div>
                    </DropdownMenuPrimitive.Item>
                  );
                })}

                <DropdownMenuPrimitive.Separator
                  className={`${seperator} ${isLastGroup && 'hidden'}`}
                />
              </>
            );
          })}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};
