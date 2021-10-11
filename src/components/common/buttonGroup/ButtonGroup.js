/* eslint-disable react/no-array-index-key */
import React from 'react';
import Button from '../button/Button';

import './ButtonGroup.scss';

const ButtonGroup = React.forwardRef(
  ({ disabled, value, onChange, options }, ref) => {
    return (
      <div ref={ref} className="buttonGroup">
        {options.map((option, index) => {
          return (
            <Button
              key={index}
              customClassName={`${
                value === option.value && 'primary'
              } btnDefault`}
              onClick={e => {
                e.preventDefault();
                onChange(option.value);
              }}
              disabled={disabled}
            >
              {option.label}
            </Button>
          );
        })}
      </div>
    );
  }
);

export default ButtonGroup;
