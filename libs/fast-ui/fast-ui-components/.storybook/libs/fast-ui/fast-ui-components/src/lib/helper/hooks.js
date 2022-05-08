import React from 'react';
export const useClickOutside = ({ callbackClickOutside, }) => {
    const containerRef = React.useRef(null);
    React.useEffect(() => {
        const handleClick = (e) => {
            var _a;
            if (!(e.target instanceof Node))
                return;
            if (!containerRef.current)
                return;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const clickedElementId = (_a = e.target) === null || _a === void 0 ? void 0 : _a.id;
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
//# sourceMappingURL=hooks.js.map