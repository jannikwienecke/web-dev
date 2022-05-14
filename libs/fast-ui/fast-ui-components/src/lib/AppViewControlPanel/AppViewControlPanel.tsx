import { AiOutlineCaretDown } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { Listbox } from "../Listbox/Listbox";
import { Popover } from "../Popover/Popover";
import { popoverGroups } from "../Popover/Popover.stories";

const listboxItemsGroupby = [
  { id: "1", label: "None", value: false },
  { id: "2", label: "Status", value: true },
  { id: "3", label: "Assigne", value: false },
  { id: "4", label: "Tags", value: false },
  { id: "5", label: "Due Date", value: false },
];

const listboxItemsSearchBy = [
  { id: "5", label: "ID", value: true },
  { id: "2", label: "First Name", value: true },
  { id: "3", label: "Last Name", value: true },
  { id: "4", label: "Department", value: true },
];

/* eslint-disable-next-line */
export interface AppViewControlPanelProps {}

export function AppViewControlPanel(props: AppViewControlPanelProps) {
  return (
    <div className="text-skin-base-light my-4 mx-2 flex flex-row justify-between bg-red-50 p-4 text-sm">
      {/* left side */}
      <div className="flex flex-row gap-2">
        <div className="hover:text-skin-accent relative flex cursor-pointer flex-row place-items-center gap-[1px]">
          <FaFilter />
          <AiOutlineCaretDown className="relative top-1 text-xs" />
        </div>
        <div className="flex flex-row place-items-center">
          {/* Search Input */}
          <div>
            <label htmlFor="control-panel-search" className="sr-only" />
            <div className="focus-within:border-skin-accent mt-1">
              <input
                type="text"
                name="control-panel-search"
                id="control-panel-serach"
                // eslint-disable-next-line
                className="focus:ring-accent focus:border-accent outline-accent block w-full rounded-none rounded-l-md bg-transparent p-2 px-4 sm:text-sm"
                placeholder="Search in employees"
              />
            </div>
          </div>

          {/* GROUP BY LIST BOX */}
          <div>
            <Listbox
              options={{ allowMultipleSelection: true }}
              listItems={listboxItemsSearchBy}
              label="Search In"
            >
              <div className="flex flex-row">
                <AiOutlineCaretDown />
              </div>
            </Listbox>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-row gap-8">
        <div className="flex flex-row place-items-center">
          <div className="mr-1">Group by: </div>

          {/* GROUP BY LIST BOX */}
          <div className="text-skin-base-dark hover:text-skin-accent relative flex cursor-pointer flex-row">
            <Listbox
              options={{ allowMultipleSelection: false }}
              listItems={listboxItemsGroupby}
              label="Group By"
            >
              <div className="flex flex-row">
                <div className="">Tags</div>

                <div className="flex flex-row place-items-center">
                  <AiOutlineCaretDown />
                </div>
              </div>
            </Listbox>
          </div>
        </div>

        <div className="flex place-items-center">
          <Popover
            groups={popoverGroups}
            button={
              <button>
                <HiDotsHorizontal className=" cursor-pointer text-xl" />
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AppViewControlPanel;
