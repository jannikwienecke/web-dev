import { BsKanban, BsLightningCharge, BsSearch } from "react-icons/bs";
import { FaFolderOpen, FaList, FaRegCalendar, FaTable } from "react-icons/fa";
import { MdOutlineLibraryAdd } from "react-icons/md";
import AppViewHeaderViewItem from "../AppViewHeaderViewItem/AppViewHeaderViewItem";
import "./AppViewHeader.css";

/* eslint-disable-next-line */
export interface AppViewHeaderProps {}

const VIEW_TYPE_LIST = [
  {
    label: "List",
    icon: FaList,
  },
  {
    label: "Grid",
    icon: BsKanban,
  },
  {
    label: "Table",
    icon: FaTable,
  },

  {
    label: "Calendar",
    icon: FaRegCalendar,
  },
];

export function AppViewHeader(props: AppViewHeaderProps) {
  return (
    <div className="app-view-header-container">
      {/* LEFT SIDE */}
      <div className="flex flex-row">
        {/* TITLE */}
        <div className="app-view-header-title-container">
          <div>
            <FaFolderOpen className="text-skin-base-light" />
          </div>
          <div className="">Employee Views</div>
        </div>

        {/* VIEW TYPE LIST */}
        <div className=" app-view-header-views-container relative">
          {VIEW_TYPE_LIST.map((view, index) => {
            const isActive = index === 1;
            return <AppViewHeaderViewItem isActive={isActive} {...view} />;
          })}
        </div>
      </div>

      {/* RIGHT SIDE */}
      {/* CONTROL */}
      <div className="flex grid flex-row place-items-center gap-5 pr-6">
        <div className="">
          <MdOutlineLibraryAdd className="app-view-header-control-icon" />
        </div>
        <div className="">
          <BsSearch className="app-view-header-control-icon" />
        </div>

        <div>
          <BsLightningCharge className="app-view-header-control-icon" />
        </div>
      </div>
    </div>
  );
}

export default AppViewHeader;
