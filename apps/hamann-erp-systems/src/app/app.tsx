import { ColumnDef } from "@tanstack/react-table";
import {
  ActionItemType,
  ActionMenu,
  AppSideMenu,
  AppSideMenuGroupItemProps,
  AppViewControlPanel,
  AppViewHeader,
  DataItem,
  DataTable,
  DetailView,
  EditView,
  Model,
  ModelType,
  Sidebar,
  SlideOver,
} from "@web-dev/fast-ui/fast-ui-components";
import { motion } from "framer-motion";
import React from "react";
import {
  FaAddressBook,
  FaApple,
  FaEdit,
  FaHiking,
  FaUser,
  FaCommentDots,
  FaTrash,
} from "react-icons/fa";

import { FiActivity, FiSettings } from "react-icons/fi";
import {
  HiOutlineBell,
  HiOutlineCloud,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiStar,
} from "react-icons/hi";

export const appTestGroups: AppSideMenuGroupItemProps[] = [
  {
    title: "Employee Views",
    isActive: true,
    appItems: [
      { label: "All Employee", pathname: "#" },
      { label: "Active Employee", pathname: "#" },
      { label: "Left Employee", pathname: "#" },
    ],
  },

  {
    title: "Employee Setting",
    appItems: [
      { label: "Settings", pathname: "#" },
      { label: "Views", pathname: "#" },
      { label: "Drivers", pathname: "#", isActive: true },
      { label: "TImes", pathname: "#" },
    ],
  },
];

interface Person {
  id: number;
  name: string;
  age: number;
  address: string;
  role: string;
}

const persons: Person[] = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 3,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 4,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 5,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 6,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 7,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 8,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 9,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 10,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 11,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 12,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 3,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 4,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 5,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 6,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 7,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 8,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 9,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 10,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 11,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 12,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 3,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 4,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 5,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 6,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 7,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 8,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 9,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 10,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 11,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 12,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 3,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 4,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 5,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 6,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 7,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 8,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 9,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 10,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 11,
    name: "John Doe",
    age: 30,
    address: "1234 Main St",
    role: "Developer",
  },
  {
    id: 12,
    name: "Jane Doe",
    age: 25,
    address: "1234 Main St",
    role: "Developer",
  },
];

const columns: ColumnDef<Person, unknown>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Age",
    accessorKey: "age",
  },
  {
    header: "Address",
    accessorKey: "address",
  },
  {
    header: "Role",
    accessorKey: "role",
  },
];

const actions: ActionItemType[] = [
  {
    label: "Edit",
    Icon: FaEdit,
  },
  {
    label: "Delete",
    Icon: FaTrash,
  },
  {
    label: "Comment",
    Icon: FaCommentDots,
  },
];

export function App() {
  const [selected, setSelected] = React.useState<Person[]>([]);
  const [clickedRow, _setClickedRow] = React.useState<ModelType>();

  const setClickedRow = (row?: Person) => {
    if (!row) _setClickedRow(undefined);
    else {
      const items = Object.entries(row).map(([key, value]) => {
        if (key === "role") {
          return new DataItem({ name: key, value: value, type: "relational" });
        }
        if (key === "age") {
          return new DataItem({ name: key, value: value, type: "number" });
        }

        if (key === "address") {
          return new DataItem({ name: key, value: value, type: "boolean" });
        }

        return new DataItem({ name: key, value: value, type: "string" });
      });

      const model = new Model({
        model: "Person",
        id: row.id,
        items: items,
      });
      _setClickedRow(model);
    }
  };

  return (
    <>
      <div className="bg-skin-base-dark relative relative flex h-screen flex-row rounded-lg p-2">
        <div className="bg-skin-base-dark sticky top-0 left-0 z-10 flex">
          <Sidebar
            user={{ username: "John Doe", imgSrc: "" }}
            sideControlItems={[
              {
                label: "Select Apps",
                icon: HiOutlineHome,
                pathname: "#",
              },

              {
                label: "Notifications",
                icon: HiOutlineBell,
                pathname: "#",
              },

              {
                label: "Favorites",
                icon: HiStar,
                pathname: "#",
                isActive: true,
              },
            ]}
            app={{
              label: "Hamann Erp System",
              icon: FiActivity,
              pathname: "#",
              description: "Workspace",
            }}
            modules={[
              {
                title: "Apps",
                navigationItems: [
                  { icon: FaUser, label: "User List", pathname: "#" },
                  {
                    icon: FaHiking,
                    label: "Hiking",
                    pathname: "#",
                  },
                  {
                    icon: FaAddressBook,
                    label: "Address Book",
                    pathname: "#",
                  },
                  {
                    icon: FaApple,
                    label: "Apple",
                    pathname: "#",
                  },
                ],
              },
            ]}
            sideControlSecondaryItems={[
              { icon: HiOutlineCloud, label: "Plugins", pathname: "#" },
              {
                icon: HiOutlineShoppingCart,
                label: "Marketplace",
                pathname: "#",
              },
              {
                icon: FiSettings,
                label: "Settings",
                pathname: "#",
              },
            ]}
          />

          <AppSideMenu
            appGroups={appTestGroups}
            isOpen={true}
            appName="User Management"
            appDescription="CRUD Users"
          />
        </div>

        <div className="relative flex w-full flex-col">
          <div className="bg-skin-base-dark sticky top-0 left-0 z-10">
            <AppViewHeader />

            <AppViewControlPanel />
          </div>

          <div className="h-full overflow-scroll p-4">
            <DataTable
              onRowClick={(row) => setClickedRow(row)}
              onSelectChange={(z) => setSelected(z)}
              initialPageSize={48}
              data={persons}
              columns={columns}
              selected={selected}
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ y: -100 }}
        variants={{
          open: { y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
          closed: { y: -100, transition: { duration: 0.3, ease: "easeInOut" } },
        }}
        animate={selected?.length ? "open" : "closed"}
        className="fixed top-0 left-0 z-30 w-full p-2 "
      >
        <ActionMenu
          onClose={() => setSelected([])}
          numberSelectedItems={selected.length}
          actions={actions}
        />
      </motion.div>

      <SlideOver onClose={() => setClickedRow(undefined)} model={clickedRow}>
        {(model) => (
          // <DetailView
          //   actions={actions}
          //   mainAction={actions.find((x) => x.label === "Edit") || actions[0]}
          //   model={model}
          // />
          <EditView model={model} />
        )}
      </SlideOver>
    </>
  );
}

export default App;
