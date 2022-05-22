import React from "react";
import "./FilterMenuInput.css";

export interface FilterMenuInputProps {
  type: "text" | "number";
  hasError?: boolean;
  onChange?: (value: string) => void;
  value?: string | number | undefined;
  show?: boolean;
}

export const FilterMenuInput: React.FC<FilterMenuInputProps> = ({
  type,
  hasError,
  onChange,
  value,
  show,
}) => {
  const handleInputChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  const _value = value;
  if (show === false) return null;
  return (
    <div>
      <label htmlFor="control-panel-search" className="sr-only" />
      <div
        className={`${
          hasError && "border-2 border-red-200"
        }  border-skin-base-light focus-within:border-skin-accent mt-1 rounded-md border-[1px]`}
      >
        <input
          value={_value}
          onChange={(e) => handleInputChange(e.target.value)}
          type={type}
          name="control-panel-search"
          id="control-panel-serach"
          className="filter-menu-input focus:ring-accent outline-accent"
          placeholder="Filter..."
        />
      </div>
    </div>
  );
};
