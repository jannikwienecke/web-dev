import React from "react";
import { FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";
import { tw } from "twind";
import { Popover } from "../Popover/Popover";
import { popoverGroups } from "../Popover/Popover.stories";
import { User } from "../Sidebar/Sidebar";
import { iconWrapperSidebar } from "../styles";

export interface SidebarUserProps {
  isCollapsed: boolean;
  user: User;
  onToggle: () => void;
}

export function SidebarUser({ isCollapsed, user, onToggle }: SidebarUserProps) {
  const item = `text-3xl text-skin-accent`;
  const itemHovered = "hover:text-skin-base-light";
  const itemIsClicked = `active:text-skin-base-dark`;

  const userAvatarBtn = (
    <Popover
      groups={popoverGroups}
      button={
        <div className={`${iconWrapperSidebar}`}>
          <button aria-label="user settings button">
            <FaUserCircle
              className={`${item} ${itemHovered} ${itemIsClicked} ${
                user.imgSrc && "hidden"
              } `}
            />
          </button>

          <img
            className={`${user.imgSrc || "hidden"}`}
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
          className="border-skin-base-light absolute bottom-[16px] right-[-12px] z-10 ml-1 cursor-pointer "
        >
          <div className="bg-skin-base-light border-skin-base-light mt-[1px] border-[1px] py-2">
            <FaChevronRight
              id="open-sidebar-btn"
              className="text-skin-base-light hover:bg-skin-layer text-sm"
            />
          </div>
        </button>

        <div className={tw`${isCollapsed && "m-0 p-4"} group text-3xl`}>
          {userAvatarBtn}
        </div>
      </div>
    );
  }

  return (
    <div className="text-skin-base border-skin-base-light flex flex-row justify-between border-t-[1px] px-2">
      <div className="flex items-center  px-2 py-4">
        <div className="flex cursor-pointer flex-row items-center gap-2">
          {userAvatarBtn}
          <div className="text-skin-base-light text-sm font-semibold">
            {user.username}{" "}
          </div>
        </div>
      </div>
      <div className={`grid w-14 place-items-center `}>
        <div
          onClick={onToggle}
          className="border-skin-base-light cursor-pointer border-[1px] p-1"
        >
          <button aria-label="close sidebar button">
            <FaChevronLeft className="border-skin-base text-skin-base-light hover:bg-skin-layer text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarUser;
