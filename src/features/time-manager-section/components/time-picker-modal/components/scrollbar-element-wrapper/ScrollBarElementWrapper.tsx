import clsx from 'clsx';
import React, { useCallback, useRef } from 'react';

import s from './ScrollBarElementWrapper.module.scss';

type PropTypes = {
  setSelectedElement: React.Dispatch<React.SetStateAction<{ element: HTMLElement; index: number } | undefined>>;
};

export const ScrollBarElementWrapper: React.FC<PropTypes> = ({ children, setSelectedElement }) => {
  const timerRef = useRef<NodeJS.Timeout>();

  const onScroll = useCallback((e: React.UIEvent<HTMLElement>) => {
    clearTimeout(timerRef.current);

    let closestToCenterElement: HTMLElement | null = null;
    timerRef.current = setTimeout(function () {
      const parent = e.target as HTMLDivElement;

      [].slice.call(parent.children).forEach(function (ele: HTMLElement, index) {
        const elementTop = ele.getBoundingClientRect().top;
        const parentTop = parent.getBoundingClientRect().top;

        const elementCenter = elementTop + ele.getBoundingClientRect().height / 2;
        const parentCenter = parentTop + parent.getBoundingClientRect().height / 2;

        if (!closestToCenterElement) {
          closestToCenterElement = ele;
        } else {
          const closestElementCenter =
            closestToCenterElement.getBoundingClientRect().top +
            closestToCenterElement.getBoundingClientRect().height / 2;
          if (Math.abs(parentCenter - closestElementCenter) > Math.abs(parentCenter - elementCenter)) {
            closestToCenterElement = ele;
          }
        }

        // if (Math.abs(elementCenter - parentCenter) < 10) {
        //   console.log({ elementCenter, parentCenter });
        //   setSelectedElement({ element: ele, index });
        //   ele.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'center',
        //     inline: 'center',
        //   });
        // }
      });
      console.log({ closestToCenterElement });
      if (closestToCenterElement) {
        // TODO: remove test useEffect
        closestToCenterElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }
    }, 300);
  }, []);

  return (
    <div
      onScroll={onScroll}
      className={clsx('basis-1/3 h-48 overflow-y-scroll py-32 self-center', s.ScrollBarElementWrapper)}
    >
      {children}
    </div>
  );
};
