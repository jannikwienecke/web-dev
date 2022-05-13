import { AnimatePresence, motion, Variants } from 'framer-motion';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { AppSideMenuProps } from '../AppSideMenu/AppSideMenu';

export type AppSideMenuHeaderProps = Pick<
  AppSideMenuProps,
  'appDescription' | 'appName'
>;

export function AppSideMenuHeader({
  appName,
  appDescription,
}: AppSideMenuHeaderProps) {
  const variants: Variants = {
    open: { opacity: 1 },
    closed: {
      opacity: 0.7,
      color: 'var(--base-skin-accent)',
    },
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setTimeout(() => inputRef?.current?.focus(), 50);
  }, [isOpen]);

  return (
    <div className="h-20 flex flex-col p-4 relative pb-0 ">
      <AnimatePresence>
        {!isOpen && (
          <div className="line-clamp-2 text-sm w-4/5 text-skin-base-light">
            <motion.div
              initial={{ opacity: 0, y: '-30px' }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              {appDescription}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="flex flex-row">
        <div className="flex-grow text-xl font-bold text-skin-base-dark ">
          {appName}
        </div>

        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          variants={variants}
          animate={isOpen ? 'closed' : 'open'}
          className="cursor-pointer bg-skin-base-light text-skin-base h-7 w-7 grid place-content-center border-skin-base-light border-[1px]"
        >
          <FaSearch aria-label="search open" className=" text-sm" />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-30px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="m-1 -left-1 relative"
          >
            <label htmlFor="search" className="sr-only" />
            <div className="mt-1 flex rounded-md shadow-sm">
              <div className="relative flex items-stretch flex-grow focus-within:z-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch
                    className="h-3 w-3 text-skin-accent"
                    aria-hidden="true"
                    aria-label="search"
                  />
                </div>
                <input
                  ref={inputRef}
                  type="search"
                  name="search"
                  id="search"
                  className="focus:ring-accent focus:border-accent outline-accent p-1 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-skin-base-light"
                  placeholder="Search"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div></motion.div>

      {/* Divider */}
      <div
        className={`border-b-2 w-14 ml-4 absolute bottom-0 ${
          isOpen && 'hidden'
        }`}
      />
    </div>
  );
}

export default AppSideMenuHeader;
