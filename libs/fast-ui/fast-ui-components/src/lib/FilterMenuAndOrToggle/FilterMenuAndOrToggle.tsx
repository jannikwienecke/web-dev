import { useActor } from "@xstate/react";
import { Variants, motion } from "framer-motion";
import { HiSwitchVertical } from "react-icons/hi";
import { useFilterMenuService } from "../FilterMenu/state";

import "./FilterMenuAndOrToggle.css";

export interface FilterAndOrToggleProps {
  disabled: boolean;
}

export const FilterMenuAndOrToggle: React.FC<FilterAndOrToggleProps> = ({
  disabled,
}) => {
  const { service, context } = useFilterMenuService();
  const { send } = service;

  const { andOrFiltering } = context;

  const handleToggleAndOr = () => {
    if (disabled) return;

    send({
      type: "TOGGLE_AND_OR",
    });
  };

  const orVariants: Variants = {
    show: {
      y: "0",
      opacity: "100%",
      transition: { duration: 0.3 },
    },
    hide: {
      y: "+20px",
      opacity: "50%",
      transition: { duration: 0.3 },
    },
  };

  const andVariants: Variants = {
    show: {
      y: "0",
      opacity: "100%",
      transition: { duration: 0.3 },
    },
    hide: {
      y: "-20px",
      opacity: "50%",
      transition: { duration: 0.3 },
    },
  };

  const isAndFilter = andOrFiltering === "AND";
  return (
    <div
      className={`${
        disabled && "and-or-toggle-container-disabled"
      } and-or-toggle-container`}
      onClick={handleToggleAndOr}
    >
      <div className=" flex w-full place-items-center  p-1">
        <motion.div
          initial={{ y: isAndFilter ? "0" : "-20px" }}
          animate={isAndFilter ? "show" : "hide"}
          variants={andVariants}
          className={`${disabled && "left-[6px]"}  absolute left-1`}
        >
          {"AND"}
        </motion.div>

        <motion.div
          initial={{ y: !isAndFilter ? "0" : "+20px" }}
          animate={!isAndFilter ? "show" : "hide"}
          variants={orVariants}
          className={`${disabled && "left-[6px]"}  absolute left-1`}
        >
          {"OR"}
        </motion.div>

        <div
          className={`text-skin-base-dark absolute right-[4px] ${
            disabled && "hidden"
          }`}
        >
          <HiSwitchVertical />
        </div>
      </div>
    </div>
  );
};
