import { motion } from 'framer-motion';
import { apply, tw } from 'twind';
import { SidebarItem } from '../Sidebar/Sidebar';
import { borderIcons, iconWrapperSidebar } from '../styles';

export interface SidebarHeaderProps {
  isCollapsed: boolean;
  app: SidebarItem;
}

export function SidebarHeader({ isCollapsed, app }: SidebarHeaderProps) {
  const mainLogoAndHome = apply`
    bg-skin-accent ${borderIcons}
    ${iconWrapperSidebar} text-xl
  `;

  return (
    <div
      className={`h-20 flex-shrink-0 border-b-[1px] border-skin-base-light px-3 flex flex-row gap-4 justify-start ${
        isCollapsed && 'justify-center'
      } ${(isCollapsed && !app.description) || 'items-center'}`}
    >
      <div className={tw`${mainLogoAndHome}`}>
        <app.icon className="text-skin-base-inverted" />
      </div>

      {/* header title and description - only when not collapsed */}
      <div className={`${isCollapsed && 'hidden'}`}>
        <motion.div
          animate={{ scale: isCollapsed ? 0 : 1 }}
          transition={{
            type: 'spring',
            stiffness: 600,
            damping: 90,
          }}
        >
          <div className="font-bold text-skin-base-light text-md">
            {app.label}
          </div>

          <div
            className={`text-sm text-skin-base-dark ${
              app.description ? 'visible' : 'hidden'
            }`}
          >
            {app.description}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SidebarHeader;
