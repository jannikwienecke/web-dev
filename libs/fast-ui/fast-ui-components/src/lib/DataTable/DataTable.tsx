import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortDirection,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { TablePagination } from "../TablePagination/table-pagination";
import { TablePaginationButton } from "../TablePaginationButton/table-pagination-button";
import { useTableScroll } from "./useTableScroll";
import { useTableToggle } from "./useTableToggle";

export interface DataTableProps<D, C extends ColumnDef<D, unknown>[]> {
  data: D[];
  columns: C;
  isLoading?: boolean;
  goToIndex?: number;
  onRowClick?: (row: D) => void;
  onSelectChange?: (selected: D[]) => void;
  selected?: D[];

  initialPageSize?: number;
  initialIndex?: number;
}

export const DataTable = <D, C extends ColumnDef<D, unknown>[]>({
  data,
  columns,
  onRowClick,
  isLoading,
  goToIndex,
  onSelectChange,
  initialIndex,
  initialPageSize,
  selected,
}: DataTableProps<D, C>) => {
  const [autoScrolling, setAutoScrolling] = React.useState(true);

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const { getHeaderGroups, ...table } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    autoResetPageIndex: false,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    initialState: {
      pagination: {
        pageSize: initialPageSize || 10,
        pageIndex: initialIndex ?? 0,
      },
    },
  });

  useTableScroll({
    autoScrolling: autoScrolling,
    pageIndex: table.getState().pagination.pageIndex,
    pageSize: table.getState().pagination.pageSize,
    gotoPage: (pageIndex) => {
      table.setPageIndex(pageIndex);
    },
    goToIndex: goToIndex,
  });

  const { checkbox, checked, toggleAll, setSelectedRows, selectedRows } =
    useTableToggle({ dataList: data, onChange: onSelectChange, selected });

  return (
    <div className="relative flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="border-skin-base-light overflow-hidden border-[1px] shadow-sm ring-opacity-5 md:rounded-lg">
            <table className="divide-medium-default min-w-full divide-y">
              <thead className="bg-skin-base-dark">
                {getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    <th
                      scope="col"
                      className="relative w-12 px-6 sm:w-16 sm:px-8"
                    >
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>

                    {headerGroup.headers.map((header) => {
                      return (
                        <th
                          className="text-skin-base-dark py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6"
                          scope="col"
                          key={header.id}
                          colSpan={header.colSpan}
                        >
                          {header.isPlaceholder ? null : (
                            <div
                              {...{
                                className: header.column.getCanSort()
                                  ? "cursor-pointer select-none"
                                  : "",
                                onClick:
                                  header.column.getToggleSortingHandler(),
                              }}
                            >
                              <span className="group inline-flex">
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}

                                <Sorting sorted={header.column.getIsSorted()} />
                              </span>
                            </div>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>

              <tbody className="divide-light-shade bg-skin-base-light relative divide-y">
                {table.getRowModel().rows.map((row) => {
                  const isChecked = selectedRows.includes(row.original);
                  return (
                    <tr
                      id={`table-row-${(row.original as any)?.id}`}
                      className={`${
                        isChecked
                          ? "bg-skin-accent-light"
                          : "hover:bg-skin-base-dark "
                      } cursor-pointer`}
                      onClick={
                        onRowClick ? () => onRowClick(row.original) : undefined
                      }
                      key={row.id}
                    >
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedRows.includes(row.original) && (
                          <span className="bg-skin-accent absolute inset-y-0 left-0 w-0.5" />
                        )}
                        <input
                          type="checkbox"
                          className="text-skin-accent focus:ring-accent absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 sm:left-6"
                          value={row.id}
                          checked={isChecked}
                          onChange={(e) =>
                            setSelectedRows(
                              e.target.checked
                                ? [...selectedRows, row.original]
                                : selectedRows.filter((p) => p !== row.original)
                            )
                          }
                        />
                      </td>

                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            className="text-skin-base-dark whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-6"
                            key={cell.id}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}

                <tr
                  className={`${
                    isLoading || "hidden"
                  } bg-medium-default absolute top-0 left-0 h-full w-full opacity-20 `}
                />
              </tbody>
            </table>

            <TablePagination
              totalItems={data.length}
              index={table.getState().pagination.pageIndex}
              pageSize={table.initialState.pagination.pageSize}
              buttons={[
                <TablePaginationButton
                  disabled={!table.getCanPreviousPage()}
                  onClick={() => {
                    table.previousPage();
                    setAutoScrolling(false);
                  }}
                >
                  Previous
                </TablePaginationButton>,

                <TablePaginationButton
                  disabled={!table.getCanNextPage()}
                  onClick={() => {
                    table.nextPage();
                    setAutoScrolling(false);
                  }}
                >
                  Next
                </TablePaginationButton>,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Sorting = ({ sorted }: { sorted: false | SortDirection }) => {
  const SortedIcon = {
    asc: FaChevronUp,
    desc: FaChevronDown,
  };

  const Icon = sorted ? SortedIcon[sorted] : null;

  return (
    <div className="grid place-items-center">
      {Icon ? <Icon className="ml-1 h-3 w-3" /> : null}
    </div>
  );
};
