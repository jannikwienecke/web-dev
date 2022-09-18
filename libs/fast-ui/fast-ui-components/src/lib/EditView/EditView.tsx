import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import Button from "../Button/Button";
import { DataItemType, DataType, ModelType } from "../DetailView/DetailView";
import { Select } from "../Select/Select";

export interface EditViewProps {
  model: ModelType;
}

const sortByType = (a: DataItemType, b: DataItemType) => {
  console.log({ a, b });

  if (a.name === "id" || b.name === "id") {
    return 1;
  }

  if (a.type === "relational" && b.type !== "boolean") {
    return 1;
  } else if (a.type === "boolean") {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return -1;
  }
};

export function EditView({ model }: EditViewProps) {
  return (
    <form className="flex h-full flex-col justify-between py-4 px-8">
      <div className="">
        {model.items.sort(sortByType).map((item) => {
          return (
            <div className="sm:border-skin-base-light py-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-2">
              <InputFactory name={item.name} type={item.type} />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end gap-2 p-4">
        <Button size="fit" type="button" variant="base">
          Cancel
        </Button>
        <Button size="fit">Save</Button>
      </div>
    </form>
  );
}

export default EditView;

type InputProps = {
  type: DataType;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const InputFactory = ({ type, ...props }: InputProps) => {
  switch (type) {
    case "relational":
      return <SelectInput type={type} {...props} />;

    case "boolean":
      return <CheckboxInput type={type} {...props} />;

    default:
      return <BaseInput {...props} type={type} />;
  }
};

const BaseInput = ({ type, ...props }: InputProps) => {
  return (
    <>
      <InputLabel name={props.name || ""} />
      <div className="mt-1 sm:col-span-2 sm:mt-0">
        <input
          {...props}
          type={type}
          placeholder="Optional"
          className="border-skin-base-light bg-skin-base-dark focus-visible:border-skin-base-dark focus:border-skin-base-light focus:ring-accent focus-visible:outline-accent block w-full max-w-lg rounded-md border p-2 shadow-gray-300 focus-visible:shadow-md sm:max-w-xs sm:text-sm"
        />
      </div>
    </>
  );
};

const CheckboxInput = ({ type, ...props }: InputProps) => {
  return (
    <div className="border-skin-base-light max-w-lg space-y-4 border-t-[1px] pt-3 sm:col-span-3">
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            {...props}
            type="checkbox"
            className="text-skin-accent focus:ring-accent bg-skin-accent h-4 w-4 rounded border-gray-300"
          />
        </div>

        <div className="ml-3 text-sm">
          <InputLabel name={props.name || ""} />

          <p className="text-skin-base-light">
            Put some description to explain what this checkbox is for.
          </p>
        </div>
      </div>
    </div>
  );
};

const SelectInput = ({ type, ...props }: InputProps) => {
  return (
    <>
      <InputLabel name={props.name || ""} />
      <div className="mt-1 sm:col-span-2 sm:mt-0">
        <Select
          value={{
            id: "1",
            label: "United States",
          }}
          options={[
            {
              id: "1",
              label: "United States",
            },
            {
              id: "2",
              label: "Canada",
            },
          ]}
        />
      </div>
    </>
  );
};

interface InputLabelProps {
  name: string;
}
const InputLabel = ({ name }: InputLabelProps) => {
  return (
    <label
      htmlFor={name}
      className="text-skin-base-light block text-sm font-medium sm:mt-px"
    >
      {name.toUpperCase()}
    </label>
  );
};
