import clsx from 'clsx';
import React, { useCallback, useRef } from 'react';

import s from './ScrollBarElementWrapper.module.scss';

type PropTypes = {
  setSelectedElement: React.Dispatch<React.SetStateAction<{ element: HTMLElement; index: number } | undefined>>;
};

export const ScrollBarElementWrapper: React.FC<PropTypes> = ({ children, setSelectedElement }) => {
  const timerRef = useRef<NodeJS.Timeout>();

  const onScroll = useCallback(
    (e: React.UIEvent<HTMLElement>) => {
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(function () {
        const parent = e.target as HTMLDivElement;

        [].slice.call(parent.children).forEach(function (ele: HTMLElement, index) {
          const elementTop = ele.getBoundingClientRect().top;
          const parentTop = parent.getBoundingClientRect().top;

          const elementCenter = elementTop + ele.getBoundingClientRect().height / 2;
          const parentCenter = parentTop + parent.getBoundingClientRect().height / 2;

          if (Math.abs(elementCenter - parentCenter) < 10) {
            setSelectedElement({ element: ele, index });
          }
        });
      }, 100);
    },
    [setSelectedElement],
  );

  return (
    <div
      onScroll={onScroll}
      className={clsx('basis-1/3 h-48 overflow-y-scroll snap-y py-32 self-center', s.ScrollBarElementWrapper)}
    >
      {children}
    </div>
  );
};
