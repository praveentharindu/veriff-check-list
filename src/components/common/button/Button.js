import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, customClassName, ...rest }) => {
  return (
    <button
      className={`Button ${customClassName && customClassName}`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  customClassName: PropTypes.string
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  onClick: () => null,
  customClassName: undefined
};

export default Button;
