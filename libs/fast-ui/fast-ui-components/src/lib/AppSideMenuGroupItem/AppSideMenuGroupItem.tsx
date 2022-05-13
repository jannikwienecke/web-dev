import AppSideMenuItem from '../AppSideMenuItem/AppSideMenuItem';
import { SidebarItem } from '../Sidebar';
import { AiTwotoneFolderAdd, AiTwotoneFolderOpen } from 'react-icons/ai';
import { HiDotsHorizontal } from 'react-icons/hi';
import React from 'react';
import { Popover } from '../Popover/Popover';
import { popoverGroups } from '../Popover/Popover.stories';
import { AnimatePresence, motion } from 'framer-motion';

export type AppGroupItem = Pick<
  SidebarItem,
  'label' | 'pathname' | 'description'
> & {
  /** If this app group item is currently showing on the screen */
  isActive?: boolean;
};

export interface AppSideMenuGroupItemProps {
  title: string;
  isActive?: boolean;
  appItems: AppGroupItem[];
}

const settingGroups = popoverGroups;

export function AppSideMenuGroupItem(appGroup: AppSideMenuGroupItemProps) {
  const [groupIsOpen, setGroupIsOpen] = React.useState(false);

  const FolderIcon = groupIsOpen ? AiTwotoneFolderOpen : AiTwotoneFolderAdd;

  const toggleOpenGroup = () => {
    setGroupIsOpen((prev) => !prev);
  };

  const appGroupHeaderWrapper = `
    text-skin-base-dark text-xs uppercase font-semibold
    flex flex-row justify-between pl-6
    hover:bg-skin-base-dark py-2
    ${appGroup.isActive && 'bg-skin-accent-light hover:bg-skin-accent-light'}
  `;

  const folderIcon = `
    text-skin-base-light text-xl
    ${appGroup.isActive && 'text-skin-accent'}
  `;

  const dotsIcon = `
    text-skin-base-light text-xl 
    ${settingGroups.length || 'hidden'}
    ${appGroup.isActive && 'text-skin-accent'}
  
  `;

  return (
    <div className="pt-4" key={appGroup.title}>
      {/* Sub header */}
      <div className={`${appGroupHeaderWrapper} tracking-wide`}>
        <div className="flex flex-row items-center gap-3">
          <button onClick={toggleOpenGroup}>
            <FolderIcon aria-label="folder toggle" className={folderIcon} />
          </button>
          <div>{appGroup.title}</div>
        </div>

        <div className="flex flex-row gap-3 items-center pr-3">
          <Popover
            groups={settingGroups}
            button={
              <div>
                <HiDotsHorizontal className={dotsIcon} />
              </div>
            }
          />

          {/* <div className="bg-skin-base-dark text-sm p-0 px-[6px] py-[1px] rounded-sm ">
          {appGroup.appItems.length}
        </div> */}
        </div>
      </div>

      {/* App items */}
      <AnimatePresence>
        {groupIsOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-30px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{}}
            className="-left-0 relative"
          >
            <ul className="flex flex-col gap-0">
              {appGroup?.appItems?.map((appItem, index) => (
                <AppSideMenuItem key={appItem.label + index} {...appItem} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AppSideMenuGroupItem;
