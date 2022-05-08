import { motion } from 'framer-motion';
import { apply, tw } from 'twind';
import { SidebarItem } from '../Sidebar/Sidebar';

export interface SidebarHeaderProps {
  isCollapsed: boolean;
  app: SidebarItem;
}

export function SidebarHeader({ isCollapsed, app }: SidebarHeaderProps) {
  const mainLogoAndHome = apply`
    grid place-items-center 
    p-3 rounded-md max-w-[3.5rem]
    bg-skin-primary
  `;

  return (
    <div
      className={`h-24 flex-shrink-0 border-b-2 border-skin-base px-3 flex flex-row gap-4 justify-start ${
        isCollapsed && 'justify-center'
      } ${(isCollapsed && !app.description) || 'items-center'}`}
    >
      <div className={tw`${mainLogoAndHome}`}>
        <app.icon className="text-skin-standard" />
      </div>

      {/* header title and description - only when not collapsed */}
      <div className={`text-skin-base-dark text-sm ${isCollapsed && 'hidden'}`}>
        <motion.div
          className="text-md"
          animate={{ scale: isCollapsed ? 0 : 1 }}
          transition={{
            type: 'spring',
            stiffness: 600,
            damping: 90,
          }}
        >
          <div className="font-bold">{app.label}</div>

          <div className={app.description ? 'visible' : 'hidden'}>
            {app.description}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SidebarHeader;
