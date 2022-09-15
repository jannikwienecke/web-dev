import { AnimatePresence, motion, Variants } from "framer-motion";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { AppSideMenuProps } from "../AppSideMenu/AppSideMenu";

export type AppSideMenuHeaderProps = Pick<
  AppSideMenuProps,
  "appDescription" | "appName"
>;

export function AppSideMenuHeader({
  appName,
  appDescription,
}: AppSideMenuHeaderProps) {
  const variants: Variants = {
    open: { opacity: 1 },
    closed: {
      opacity: 0.7,
      color: "var(--base-skin-accent)",
    },
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setTimeout(() => inputRef?.current?.focus(), 50);
  }, [isOpen]);

  return (
    <div className="relative flex h-20 flex-col p-4 pb-0 ">
      <AnimatePresence>
        {!isOpen && (
          <div className="line-clamp-2 text-skin-base-light w-4/5 text-sm">
            <motion.div
              initial={{ opacity: 0, y: "-30px" }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              {appDescription}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="flex flex-row">
        <div className="text-md text-skin-base-dark flex-grow font-bold ">
          {appName}
        </div>

        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          variants={variants}
          animate={isOpen ? "closed" : "open"}
          className="bg-skin-base-light text-skin-base border-skin-base-light grid h-7 w-7 cursor-pointer place-content-center border-[1px]"
        >
          <FaSearch aria-label="search open" className=" text-sm" />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-30px" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="relative -left-1 m-1"
          >
            <label htmlFor="search" className="sr-only" />
            <div className="mt-1 flex rounded-md shadow-sm">
              <div className="relative flex flex-grow items-stretch focus-within:z-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaSearch
                    className="text-skin-accent h-3 w-3"
                    aria-hidden="true"
                    aria-label="search"
                  />
                </div>
                <input
                  ref={inputRef}
                  type="search"
                  name="search"
                  id="search"
                  className="focus:ring-accent focus:border-accent outline-accent border-skin-base-light block w-full rounded-none rounded-l-md p-1 pl-10 sm:text-sm"
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
        className={`absolute bottom-0 ml-4 w-14 border-b-2 ${
          isOpen && "hidden"
        }`}
      />
    </div>
  );
}

export default AppSideMenuHeader;
