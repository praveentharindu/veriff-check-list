/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import PropTypes from 'prop-types';

import ButtonGroupWrapper from '../buttonGroupWrapper/ButtonGroupWrapper';

import './CheckItem.scss';

const CheckItem = ({ description, disabled, ...props }) => {
  return (
    <div
      disabled={disabled}
      tabIndex={disabled ? undefined : 0}
      className={`checkItemRow ${disabled && 'disabled'}`}
    >
      <div>
        {description && (
          <div className="itemLabel" data-test="verification-item-description">
            {description}
          </div>
        )}
        <ButtonGroupWrapper disabled={disabled} {...props} />
      </div>
    </div>
  );
};

CheckItem.propTypes = {
  description: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

CheckItem.defaultProps = {
  disabled: false
};

export default CheckItem;
