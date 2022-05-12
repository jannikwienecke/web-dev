import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { apply, tw } from 'twind';
export function SidebarNavItem({ navItem, isCollapsed }) {
  const tooltip = `
    z-10
    tooltiptext invisible absolute bg-skin-contrast 
    p-1 px-3 text-skin-standard rounded-md top-3
    left-16 text-white text-sm 
    whitespace-nowrap

    ${isCollapsed && tw`group-hover:(block, visible)`}
  `;
  const navItemContainer = `
    rounded-md flex flex-row items-center justify-center
    text-skin-base hover:text-skin-base-dark 
    group
 `;
  const navItemContainerCollapsed = `${
    isCollapsed || tw`hover:(bg-skin-base text-skin-base-dark) justify-start`
  }`;
  const navItemIconContainer = apply`
     text-skin-
      relative grid place-content-center m-2 
      rounded-lg hover:bg-skin-base
      ${isCollapsed && 'p-4 m-0'}
  `;
  const navItemIcon = `group-active:text-skin-primary group-hover:block`;
  return _jsx(
    'div',
    Object.assign(
      { className: `${isCollapsed || 'px-4'}` },
      {
        children: _jsxs(
          'div',
          Object.assign(
            { className: `${navItemContainer} ${navItemContainerCollapsed}` },
            {
              children: [
                _jsx(
                  'div',
                  Object.assign(
                    {
                      className: `max-w-[3.5rem] ${isCollapsed || 'px-3 p-1'}`,
                    },
                    {
                      children: _jsxs(
                        'div',
                        Object.assign(
                          { className: tw`${navItemIconContainer}` },
                          {
                            children: [
                              _jsx(navItem.icon, { className: navItemIcon }),
                              _jsx(
                                'div',
                                Object.assign(
                                  { className: `${tooltip}` },
                                  { children: navItem.label }
                                )
                              ),
                            ],
                          }
                        )
                      ),
                    }
                  )
                ),
                _jsx(
                  motion.div,
                  Object.assign(
                    {
                      className: 'text-md',
                      animate: { scale: isCollapsed ? 0 : 1 },
                      transition: {
                        type: 'spring',
                        stiffness: 500,
                        damping: 40,
                      },
                    },
                    {
                      children: _jsx(
                        'div',
                        Object.assign(
                          { className: tw`text-md ${isCollapsed && 'hidden'}` },
                          { children: navItem.label }
                        )
                      ),
                    }
                  )
                ),
              ],
            }
          )
        ),
      }
    )
  );
}
export default SidebarNavItem;
//# sourceMappingURL=SidebarItem.js.map
