import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
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
    relative text-skin-base-dark text-[13px]
    rounded-sm  pl-6 flex items-center
    select-none pr-1 focus:bg-skin-accent 
    focus:text-skin-base-inverted
    disabled:text-skin-base-dark
    pb-1 last:pb-0
    group
  `;

  const itemStylesDisabled = css`
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

  return (
    <div>
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          {button}
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Content
          avoidCollisions={true}
          sideOffset={10}
          className={`${dropdownContent}  shadow-xl shadow-shadow-base-dark`}
        >
          {groups.map((group, index) => {
            const isLastGroup = index === groups.length - 1;
            return (
              <div key={`${group.label}`}>
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
              </div>
            );
          })}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};
