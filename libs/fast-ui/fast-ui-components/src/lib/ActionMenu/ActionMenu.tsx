import { FaRegWindowClose } from "react-icons/fa";
import { tw } from "twind";

export interface ActionItemType {
  label: string;
  Icon: (props: any) => JSX.Element;
  onClick?: () => void;
}

export interface ActionMenuProps {
  actions: ActionItemType[];
  onClose?: () => void;
  numberSelectedItems: number;
}

export function ActionMenu(props: ActionMenuProps) {
  const selectedItemsText =
    props.numberSelectedItems > 1
      ? `${props.numberSelectedItems} tasks selected`
      : `${props.numberSelectedItems} task selected`;

  return (
    <div className="bg-skin-base-inverted text-skin-base-inverted  flex justify-between rounded-t-md p-4">
      <div className="flex items-center justify-center gap-3 pl-4">
        <div className="bg-skin-accent h-2 w-2 rounded-full outline outline-2 outline-offset-1 outline-gray-400"></div>
        <div className="text-skin-base-inverted text-sm">
          {selectedItemsText}
        </div>
      </div>

      <div className="text-skin-base-inverted relative flex flex-grow justify-center gap-5 opacity-80 ">
        {props.actions.map((action) => {
          return <ActionItem action={action} />;
        })}
      </div>

      <div>
        <ActionItem
          action={{
            label: "Close",
            Icon: FaRegWindowClose,
            onClick: props.onClose,
          }}
        />
      </div>
    </div>
  );
}

const ActionItem = ({ action }: { action: ActionItemType }) => {
  const tooltipBase = `
  bg-skin-base-inverted text-skin-base-inverted
  absolute top-10 -left-4 left-0 hidden 
  whitespace-nowrap rounded-md p-1 px-3 text-sm
`;

  const tooltopActive = tw`group-hover:(block)`;

  return (
    <div className="group relative grid place-items-center">
      <button onClick={action.onClick}>
        <action.Icon className="hover:text-skin-accent h-5 w-5" />
      </button>
      <div className={`${tooltipBase} ${tooltopActive}`}>{action.label}</div>
    </div>
  );
};

export default ActionMenu;
