import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: (props: HTMLAttributes<unknown>) => JSX.Element;
  children?: React.ReactNode;
  variant?: "primary" | "base" | "primary-inverted";
  rounded?: boolean;
  circular?: boolean;
  size?: "full" | "fit";
}

const DEFAULT_VARIANT = "primary";
export function Button({ className, ...props }: ButtonProps) {
  const base = `focus:ring-accent items-center justify-center py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2`;
  const variantClasses = {
    primary: "bg-skin-accent text-skin-base-inverted hover:bg-skin-accent-dark",
    base: "border-skin-base-light bg-skin-base-light text-skin-base-dark border hover:bg-skin-base-dark",
    "primary-inverted":
      "bg-skin-accent-light text-skin-accent hover:text-skin-base-inverted hover:bg-skin-accent",
  };

  const rounded =
    props.rounded || props.circular ? "rounded-full" : "rounded-md";

  const width =
    props.size === "full" || !props.size
      ? "flex flex-1 w-full "
      : "inline-flex";

  const classes = `${className || ""} ${base} ${rounded} ${width}  ${
    variantClasses[props.variant || DEFAULT_VARIANT]
  } `;

  if (props.circular) {
    return (
      <button
        style={{ width: "2.5rem", height: "2.5rem" }}
        className={`px-2 ${classes}`}
      >
        {props.icon && <props.icon className="h-4 w-4" />}
      </button>
    );
  }

  return (
    <button className={classes}>
      {props.icon ? (
        <props.icon className="mr-2 h-4 w-4 cursor-pointer text-xl" />
      ) : null}
      {props.children}
    </button>
  );
}

export default Button;
