import React, { useRef } from 'react';
import { useKeys } from '../../../utility/Utility';
import ButtonGroup from '../buttonGroup/ButtonGroup';

const ButtonGroupWrapper = ({ onChange, options, ...props }) => {
  const ref = useRef(null);
  useKeys({
    ...Object.assign(
      {},
      ...options.map((option, optionIndex) => {
        return {
          [optionIndex + 1]: () => {
            const active =
              ref.current === document.activeElement ||
              ref.current?.contains(document.activeElement) ||
              (document.activeElement?.contains(ref.current) &&
                document.activeElement !== document.body);

            if (!onChange || !active) {
              return;
            }

            onChange(option.value);
          }
        };
      })
    )
  });

  return (
    <ButtonGroup ref={ref} options={options} onChange={onChange} {...props} />
  );
};

export default ButtonGroupWrapper;
