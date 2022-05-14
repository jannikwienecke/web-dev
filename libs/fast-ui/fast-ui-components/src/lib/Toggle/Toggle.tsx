import { Switch } from "@headlessui/react";
import React from "react";

export interface ToggleProps {
  onChange?: (isEnabled: boolean) => void;
  value: boolean;
}

export function Toggle({ onChange, value }: ToggleProps) {
  const [enabled, setEnabled] = React.useState(value);

  React.useEffect(() => {
    onChange?.(enabled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? "bg-skin-accent" : ""}
      
      ${enabled ? "bg-skin-accent" : ""}
        bg-skin-base-dark
          relative inline-flex h-[20px] w-[38px] shrink-0 cursor-pointer rounded-full border-2  border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-[18px]" : "translate-x-0"}
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
}

export default Toggle;
