import Button from "../Button/Button";

export interface TablePaginationButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}

export const TablePaginationButton = ({
  onClick,
  disabled,
  children,
}: TablePaginationButtonProps) => {
  return (
    <Button
      className="disabled:cursor-not-allowed"
      disabled={disabled}
      variant="base"
    >
      {children}
    </Button>
    // <button
    //   onClick={onClick}
    //   className="bg-skin-base-light border-skin-base-light text-skin-base-dark hover:bg-skin-accent-light disabled:bg-skin-base-light relative ml-3 inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium disabled:cursor-not-allowed"
    // >
    //   {children}
    // </button>
  );
};
