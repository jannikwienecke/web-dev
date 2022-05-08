import React from 'react';

interface IUseClickOuseSide {
  callbackClickOutside: (clickedElementId: string | undefined) => void;
}

export const useClickOutside = ({
  callbackClickOutside,
}: IUseClickOuseSide) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof Node)) return;
      if (!containerRef.current) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const clickedElementId = (e.target as any)?.id;

      const clickedInside = containerRef.current.contains(e.target);

      // test
      if (!clickedInside) {
        callbackClickOutside(clickedElementId);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [callbackClickOutside]);

  return { containerRef };
};
