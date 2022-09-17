import { HiDotsVertical } from "react-icons/hi";
import { ActionItemType } from "../ActionMenu/ActionMenu";
import { Popover } from "../Popover/Popover";

export type DataType = "string" | "number" | "boolean" | "date" | "relational";

export interface DataItemType {
  name: string;
  value: unknown;
  type: DataType;
}

export class DataItem implements DataItemType {
  name: string;
  value: unknown;
  type: DataType;

  constructor(props: { name: string; value: unknown; type: DataType }) {
    this.name = props.name;
    this.value = props.value;
    this.type = props.type;
  }
}

export type ModelTypeData = Record<string | number, unknown> & {
  id: string | number;
};

export type ModelType = {
  model: string;
  description: string;
  items: DataItemType[];
};

export class Model implements ModelType {
  id: string | number;
  model: string;
  description: string;
  items: DataItemType[];

  constructor({
    model,
    items,
    description,
    id,
  }: {
    id: string | number;
    model: string;
    items: DataItemType[];
    description?: string;
  }) {
    this.id = id;
    this.items = items;
    this.model = model;
    this.description = description || "No description";
  }
}

export interface DetailViewProps {
  model: ModelType;
  actions: ActionItemType[];
  mainAction: ActionItemType;
}

export function DetailView({ model, actions, mainAction }: DetailViewProps) {
  return (
    <div className="mt-4 px-8">
      <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
        <button
          onClick={mainAction.onClick}
          type="button"
          className="bg-skin-accent hover:bg-skin-accent-dark focus:ring-accent inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-blend-darken shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:flex-1"
        >
          <mainAction.Icon className="mr-2 h-5 w-5" />
          {mainAction.label}
        </button>

        <Popover
          groups={[
            {
              items: actions,
              label: "Actions",
            },
          ]}
          button={
            <button className="focus:ring-accent inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2">
              <HiDotsVertical className=" cursor-pointer text-xl" />
            </button>
          }
        ></Popover>
      </div>

      <div className="pt-8">
        <h3 className="font-medium text-gray-900">Information</h3>
        <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
          {model.items.map((item) => (
            <div className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">{item.name.toUpperCase()}</dt>
              <dd className="text-gray-900">{String(item.value)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default DetailView;
