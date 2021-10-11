import React, { useRef } from 'react';
import { useKeys } from '../../../utility/Utility';

const CheckWrapper = ({ children }) => {
  const ref = useRef(null);

  const handler = direction => {
    if (
      !document.activeElement ||
      !ref.current.contains(document.activeElement)
    ) {
      return;
    }

    let { activeElement } = document;

    while (
      activeElement.parentElement &&
      activeElement.parentElement !== ref.current
    ) {
      activeElement = activeElement.parentElement;
    }

    const nextElement =
      direction === 'previous'
        ? activeElement.previousSibling
        : activeElement.nextSibling;

    if (nextElement && nextElement instanceof HTMLElement) {
      nextElement.focus();
    }
  };

  useKeys({
    ArrowUp: () => handler('previous'),
    ArrowDown: () => handler('next')
  });

  return <div ref={ref}>{children}</div>;
};

export default CheckWrapper;
