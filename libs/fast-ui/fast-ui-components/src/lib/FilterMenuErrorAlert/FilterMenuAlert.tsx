import { AnimatePresence, motion } from "framer-motion";
import { FilterMenuProps } from "../FilterMenu/FilterMenu";
import { FilterMenuMachineContext } from "../FilterMenu/machine";

export type FilterMenuErrorAlertProps = Pick<
  FilterMenuProps,
  "invalidFiterMessage"
> &
  Pick<FilterMenuMachineContext, "hasError" | "isSaved">;

export const FilterMenuAlert: React.FC<FilterMenuErrorAlertProps> = ({
  invalidFiterMessage,
  hasError,
  isSaved,
}) => {
  const show = hasError || isSaved;

  const classNameState = hasError ? "bg-error" : "bg-success";
  const errorMessage =
    invalidFiterMessage || "Please check that all fields are filled correctly.";

  const message = hasError ? errorMessage : "Filter saved.";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "-30px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-30px", opacity: 0 }}
          className="absolute top-2 left-0 flex w-full justify-center"
        >
          <div
            className={`${classNameState}  text-skin-base-dark w-auto rounded-md py-2 px-6`}
          >
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
