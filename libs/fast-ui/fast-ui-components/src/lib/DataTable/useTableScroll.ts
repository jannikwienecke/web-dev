import React from "react";

interface UseScroll {
  pageSize: number;
  pageIndex: number;
  gotoPage: (page: number) => void;
  autoScrolling: boolean;
  goToIndex?: number;
}

export const useTableScroll = ({
  pageSize,
  pageIndex,
  gotoPage,
  autoScrolling,
  goToIndex,
}: UseScroll) => {
  const pageRef = React.useRef<number>();
  const goToIndexRef = React.useRef<number | undefined>(undefined);
  const isScrollingRef = React.useRef(false);

  const isVisibleRef = React.useRef(false);
  const observerRef = React.useRef<IntersectionObserver | undefined>(undefined);

  React.useEffect(() => {
    if (!window.IntersectionObserver) return;

    observerRef.current = new window.IntersectionObserver(
      ([row]: IntersectionObserverEntry[]) => {
        if (row.isIntersecting) {
          isVisibleRef.current = true;
          return;
        }
        isVisibleRef.current = false;
      },
      {
        root: null,
        threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
      }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const scroll = React.useCallback(
    (rowId: number | string) => {
      if (isScrollingRef.current) return;

      observerRef.current?.disconnect();

      const row = document.getElementsByClassName(`table-row-${rowId}`)[0];

      if (!row) return;

      try {
        observerRef.current?.observe(row);
      } catch (error) {
        console.error("[useTableScroll]: Error");
        console.error(error);
        return;
      }

      isScrollingRef.current = true;

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 300);

      setTimeout(() => {
        if (autoScrolling) {
          if (!row) return;
          if (isVisibleRef.current) return;

          row.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300);
    },
    [autoScrolling]
  );

  const getPageIndex = React.useCallback(
    (goToIndex: number) => {
      if (goToIndex < pageSize) {
        return 0;
      } else {
        return Math.floor(goToIndex / pageSize);
      }
    },
    [pageSize]
  );

  const initiateScroll = React.useCallback(
    (goToRowIndex: number) => {
      if (goToIndexRef.current !== undefined) return;

      goToIndexRef.current = goToRowIndex;

      setTimeout(() => {
        goToIndexRef.current = undefined;
      }, 1000);

      const gotoPageValue = getPageIndex(goToRowIndex);

      if (gotoPageValue === pageIndex) {
        scroll(goToRowIndex);
      } else {
        gotoPage(gotoPageValue);
        pageRef.current = gotoPageValue;
      }
    },
    [getPageIndex, gotoPage, pageIndex, scroll]
  );

  // After changing the page -> this runs and scrolls to the correct position
  React.useEffect(() => {
    if (!goToIndexRef.current) return;
    if (!autoScrolling) return;

    const gotoPageValue = getPageIndex(goToIndexRef.current);

    if (pageIndex === gotoPageValue) {
      scroll(goToIndexRef.current);
    }
  }, [autoScrolling, getPageIndex, pageIndex, scroll]);

  React.useEffect(() => {
    if (goToIndex === undefined) return;

    initiateScroll(goToIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goToIndex]);
};
