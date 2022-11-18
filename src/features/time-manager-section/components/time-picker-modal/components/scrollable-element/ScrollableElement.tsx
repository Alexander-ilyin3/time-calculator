import React from 'react';

type PropTypes<T> = { elements: T[] };

export const ScrollableElement: <T>(props: PropTypes<T>) => React.ReactElement = ({ elements }) => {
  const scrollToElementCenter = (element: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const div = element.target as HTMLDivElement;
    div.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <>
      {elements.map((num, i) => {
        return (
          <div key={i} onClick={scrollToElementCenter} className="h-20 flex justify-center items-center snap-center">
            <span>{num}</span>
          </div>
        );
      })}
    </>
  );
};
