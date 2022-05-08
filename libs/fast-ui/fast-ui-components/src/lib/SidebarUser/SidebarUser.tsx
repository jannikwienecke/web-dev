import React from 'react';
import { FaChevronRight, FaUserCircle, FaChevronLeft } from 'react-icons/fa';
import { apply, tw } from 'twind';
import { Popover } from '../Popover/Popover';
import { popoverGroups } from '../Popover/Popover.stories';
import { User } from '../Sidebar/Sidebar';

export interface SidebarUserProps {
  isCollapsed: boolean;
  user: User;
  onToggle: () => void;
}

export function SidebarUser({ isCollapsed, user, onToggle }: SidebarUserProps) {
  const navItemContainer = apply`
      relative grid place-content-center m-2 
      rounded-lg hover:bg-skin-base
      ${isCollapsed && 'p-4 m-0'}
  `;

  const userAvatarBtn = (
    <Popover
      groups={popoverGroups}
      button={
        <div>
          <button aria-label="user settings button">
            <FaUserCircle
              className={`text-3xl text-skin-accent ${
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
      <div className="border-t-[1px] border-skin-base ">
        <button
          aria-label="open sidebar button"
          onClick={onToggle}
          className="absolute z-10 bottom-[16px] right-[-12px] ml-1 border-skin-dark cursor-pointer "
        >
          <div className="bg-skin-layer border-skin-base border-2 py-2 mt-[1px]">
            <FaChevronRight
              id="open-sidebar-btn"
              className="text-sm text-skin-base  hover:bg-skin-layer"
            />
          </div>
        </button>

        <div className={tw`${navItemContainer} group text-3xl`}>
          {userAvatarBtn}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row text-skin-base justify-between px-2 border-t-[1px] border-skin-base">
      <div className="flex items-center  px-2 py-4">
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          {userAvatarBtn}
          <div className="text-sm">{user.username} </div>
        </div>
      </div>
      <div className={`w-14 grid place-items-center `}>
        <div
          onClick={onToggle}
          className="border-skin-base border-2 p-1 cursor-pointer"
        >
          <button aria-label="close sidebar button">
            <FaChevronLeft className="text-sm border-skin-base text-skin-base hover:bg-skin-layer" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarUser;
