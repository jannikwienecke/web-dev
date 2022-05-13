import { motion } from "framer-motion";
import React, { HTMLAttributes } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Popover } from "../Popover/Popover";

export interface AppViewHeaderViewItemProps {
  label: string;
  icon: (props: HTMLAttributes<unknown>) => JSX.Element;
  isActive?: boolean;
}

export function AppViewHeaderViewItem({
  isActive,
  label,
  ...props
}: AppViewHeaderViewItemProps) {
  const item = {
    hover: { opacity: 1, scale: 1, width: "1.5rem" },
  };

  const labelText = {
    hoverInactive: { color: "var(--color-text-base-dark)" },
  };

  const iconVariants = {
    hoverInactive: { color: "var(--color-text-accent)" },
  };

  const [s, ss] = React.useState();
  React.useEffect(() => {
    console.log(s);
  }, []);

  return (
    <motion.div
      whileHover={isActive ? "hover" : "hoverInactive"}
      className={`app-view-header-view-item ${
        isActive && "app-view-header-active-view"
      }`}
    >
      <motion.div
        variants={iconVariants}
        className="app-view-header-view-item-icon"
      >
        <props.icon />
      </motion.div>
      <motion.div variants={labelText}>{label}</motion.div>

      <motion.div
        variants={item}
        initial={{
          scale: 0,
          width: 0,
          opacity: 0,
        }}
      >
        <Popover
          groups={[
            {
              items: [
                { label: "Change Label", type: "radio", shortCut: "R" },
                { label: "Edit View", type: "radio", shortCut: "⌘+S" },
              ],
              label: "No Label",
            },
          ]}
          button={
            <div
              className={`app-view-header-view-item-icon ${
                isActive && "hidden"
              }`}
            >
              <button>
                <HiDotsHorizontal className="text-skin-accent " />
                <div className="app-view-header-view-item-icon"></div>
              </button>
            </div>
          }
        />
      </motion.div>
    </motion.div>
  );
}

export default AppViewHeaderViewItem;
