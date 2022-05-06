import { FaChevronRight, FaUserCircle, FaChevronLeft } from 'react-icons/fa';
import { apply, tw } from 'twind';
import { User } from '../Sidebar/Sidebar';

export interface SidebarUserProps {
  isCollapsed: boolean;
  user: User;
  onToggle: () => void;
}

export function SidebarUser({ isCollapsed, user, onToggle }: SidebarUserProps) {
  const tooltip = `
    tooltiptext hidden absolute bg-skin-contrast
    p-1 px-3 text-skin-standard rounded-md top-3
    left-16 text-white text-sm
    group-hover:block whitespace-nowrap
  `;

  const navItemContainer = apply`
      relative grid place-content-center m-2 
      rounded-lg hover:bg-skin-base
      ${isCollapsed && 'p-4 m-0'}
  `;

  if (isCollapsed) {
    return (
      <div className="border-t-[1px] ">
        <div
          onClick={onToggle}
          className="absolute bottom-[16px] right-[-12px] ml-1 border-skin-dark cursor-pointer "
        >
          <div className="bg-skin-layer border-2 py-2 mt-[1px]">
            <FaChevronRight
              id="open-sidebar-btn"
              className="text-sm text-skin-base  hover:bg-skin-layer"
            />
          </div>
        </div>

        <div className={tw`${navItemContainer} group text-3xl `}>
          <FaUserCircle className="group-active:text-skin-primary relative block text-skin-primary" />

          <div className={`${tooltip}`}>{user.username}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row text-skin-base justify-between px-2">
      <div className="flex items-center  px-2 py-4">
        <div className="flex flex-row items-center gap-2">
          <FaUserCircle
            className={`text-3xl text-skin-primary ${user.imgSrc && 'hidden'} `}
          />

          <img
            className={`${user.imgSrc || 'hidden'}`}
            alt={`profile ${user.username}`}
            src={user.imgSrc}
            width="60px"
          />

          <div className="text-sm">{user.username} </div>
        </div>
      </div>
      <div className={`w-14 grid place-items-center `}>
        <div
          onClick={onToggle}
          className="border-skin-base border-2 p-1 cursor-pointer"
        >
          <FaChevronLeft className="text-sm border-skin-base text-skin-base hover:bg-skin-layer" />
        </div>
      </div>
    </div>
  );
}

export default SidebarUser;
