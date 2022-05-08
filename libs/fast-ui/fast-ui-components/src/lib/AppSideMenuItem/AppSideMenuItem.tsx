import { AppGroupItem } from '../AppSideMenu/AppSideMenu';

export type AppSideMenuItemProps = AppGroupItem;

export function AppSideMenuItem({
  label,
  pathname,
  isActive,
}: AppSideMenuItemProps) {
  const itemHover = `
  hover:w-[101%] hover:bg-skin-primary-light
  hover:border-r-2 hover:border-skin-base-dark
`;

  const itemActive = `
  border-r-2 w-[101%] border-skin-primary
  text-skin-primary-intense  bg-skin-primary-light
`;

  const itemBase = `
  list-inside list-item list-disc
  text-skin-base-light pl-8 p-1 cursor-pointer
`;

  return (
    <li
      key={label}
      className={`${itemBase} ${itemHover} ${
        isActive && itemActive
      } active:text-skin-base-dark`}
    >
      {label}
    </li>
  );
}

export default AppSideMenuItem;
