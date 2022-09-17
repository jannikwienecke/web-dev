import { tw } from "twind";

export const borderIcons = "rounded-md ";

export const iconWrapperSidebar = ` 
w-8 h-8 grid place-items-center
`;

export const navItemContainer = `cursor-pointer font-bold rounded-md flex flex-row gap-3 items-center  `;

export const tooltipBase = `
z-10
tooltiptext hidden absolute left-16
p-1 px-3 rounded-md top-1  text-sm 
whitespace-nowrap 
text-skin-base-dark bg-skin-accent-light
`;

export const tooltopActive = tw`group-hover:(block)`;
