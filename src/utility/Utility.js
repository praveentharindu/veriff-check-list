import { useEffect } from 'react';

export const useKeys = handlersByKey => {
  const handler = e => {
    if (!handlersByKey[e.key]) {
      return;
    }

    handlersByKey[e.key]();
  };

  useEffect(() => {
    window.addEventListener('keyup', handler);
    return () => {
      window.removeEventListener('keyup', handler);
    };
  }, []);
};
