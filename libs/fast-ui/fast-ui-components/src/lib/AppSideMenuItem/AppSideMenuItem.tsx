import { AppGroupItem } from "../AppSideMenu/AppSideMenu";

export type AppSideMenuItemProps = AppGroupItem;

export function AppSideMenuItem({
  label,
  pathname,
  isActive,
}: AppSideMenuItemProps) {
  const itemHover = `
  hover:w-[101%] hover:bg-skin-base-dark
  hover:border-r-2 hover:border-skin-base-dark
`;

  const itemActive = `
  bg-skin-accent-light
  text-skin-base-inverted
  border-r-2 w-[101%] border-skin-primary
  bg-skin-primary-light
  hover:bg-skin-accent-light

  
`;

  const itemBase = `
  text-skin-base-light pl-8 py-1 cursor-pointer text-sm
`;

  return (
    <li
      key={label}
      className={`${itemBase} ${itemHover} ${
        isActive && itemActive
      } active:text-skin-accent`}
    >
      <div className="flex flex-row gap-2">
        <div className="grid place-items-center">
          <div
            className={`border-skin-base-dark hover:border-skin-accent h-2 w-2 rounded-full border-[1px] border-dotted ${
              isActive && "bg-skin-accent border-0"
            } `}
          />
        </div>
        <div>{label}</div>
      </div>
    </li>
  );
}

export default AppSideMenuItem;
