import React from "react";

interface UseTableToggleProps<T> {
  dataList: T[];
  onChange?: (dataList: T[]) => void;
  selected?: T[];
}

export const useTableToggle = <T>({
  dataList,
  onChange,
  selected,
}: UseTableToggleProps<T>) => {
  const checkbox = React.useRef<HTMLInputElement>(null);
  const [checked, setChecked] = React.useState(false);
  const [indeterminate, setIndeterminate] = React.useState(false);
  const [selectedRows, _setSelectedRows] = React.useState<T[]>([]);

  React.useEffect(() => {
    _setSelectedRows(selected || []);
  }, [selected]);

  React.useLayoutEffect(() => {
    if (!checkbox.current) return;

    const isIndeterminate =
      selectedRows.length > 0 && selectedRows.length < dataList.length;
    setChecked(selectedRows.length === dataList.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [dataList.length, selectedRows]);

  function toggleAll() {
    setSelectedRows(checked || indeterminate ? [] : dataList);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  const setSelectedRows = (selectedRows: T[]) => {
    onChange?.(selectedRows);
    _setSelectedRows(selectedRows);
  };

  return {
    checkbox,
    checked,
    indeterminate,
    selectedRows,
    setSelectedRows,
    toggleAll,
  };
};
