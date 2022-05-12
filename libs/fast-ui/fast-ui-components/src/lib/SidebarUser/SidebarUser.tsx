import React from 'react';
import { FaChevronLeft, FaChevronRight, FaUserCircle } from 'react-icons/fa';
import { tw } from 'twind';
import { Popover } from '../Popover/Popover';
import { popoverGroups } from '../Popover/Popover.stories';
import { User } from '../Sidebar/Sidebar';
import { iconWrapperSidebar } from '../styles';

export interface SidebarUserProps {
  isCollapsed: boolean;
  user: User;
  onToggle: () => void;
}

export function SidebarUser({ isCollapsed, user, onToggle }: SidebarUserProps) {
  const item = `text-3xl text-skin-accent`;
  const itemHovered = 'hover:text-skin-base-light';
  const itemIsClicked = `active:text-skin-base-dark`;

  const userAvatarBtn = (
    <Popover
      groups={popoverGroups}
      button={
        <div className={`${iconWrapperSidebar}`}>
          <button aria-label="user settings button">
            <FaUserCircle
              className={`${item} ${itemHovered} ${itemIsClicked} ${
                user.imgSrc && 'hidden'
              } `}
            />
          </button>

          <img
            className={`${user.imgSrc || 'hidden'}`}
            alt={`profile ${user.username}`}
            src={user.imgSrc}
            width="60px"
          />
        </div>
      }
    />
  );

  if (isCollapsed) {
    return (
      <div>
        <button
          aria-label="open sidebar button"
          onClick={onToggle}
          className="absolute z-10 bottom-[16px] right-[-12px] ml-1 border-skin-base-light cursor-pointer "
        >
          <div className="bg-skin-base-light border-skin-base-light border-[1px] py-2 mt-[1px]">
            <FaChevronRight
              id="open-sidebar-btn"
              className="text-sm text-skin-base-light  hover:bg-skin-layer"
            />
          </div>
        </button>

        <div className={tw`${isCollapsed && 'p-4 m-0'} group text-3xl`}>
          {userAvatarBtn}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row text-skin-base justify-between px-2 border-t-[1px] border-skin-base-light">
      <div className="flex items-center  px-2 py-4">
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          {userAvatarBtn}
          <div className="text-sm font-semibold text-skin-base-light">
            {user.username}{' '}
          </div>
        </div>
      </div>
      <div className={`w-14 grid place-items-center `}>
        <div
          onClick={onToggle}
          className="border-skin-base-light border-[1px] p-1 cursor-pointer"
        >
          <button aria-label="close sidebar button">
            <FaChevronLeft className="text-sm border-skin-base text-skin-base-light hover:bg-skin-layer" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarUser;
