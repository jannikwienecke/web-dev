export interface TablePaginationProps {
  totalItems: number;
  buttons: React.ReactNode[];
  index: number;
  pageSize: number;
}

export const TablePagination = ({
  totalItems,
  buttons,
  index,
  pageSize,
}: TablePaginationProps) => {
  const showingFrom = index * pageSize + 1;
  const showingTo = Math.min((index + 1) * pageSize, totalItems);

  return (
    <nav
      className="bg-skin-base-light flex items-center justify-between border-t px-4 py-3 pt-2 sm:px-6"
      aria-label="Pagination"
    >
      <div className="sm:block md:block">
        <p className="text-skin-base-dark text-sm">
          Showing <span className="font-medium">{showingFrom}</span> to{" "}
          <span className="font-medium">{showingTo}</span> of{" "}
          <span className="font-medium">{totalItems}</span> results
        </p>
      </div>

      <div className="flex flex-1 justify-between gap-2 sm:justify-end">
        {buttons.map((button, index) => {
          return <div key={index}>{button}</div>;
        })}
      </div>
    </nav>
  );
};
