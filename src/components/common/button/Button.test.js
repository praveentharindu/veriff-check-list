import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';
import { findByTestAttr, checkProps } from '../../../utility/TestUtility';

const disabled = false;
const type = 'button';
const onClick = jest.fn();
const customClassName = 'newClass';

const defaultProps = {
  disabled,
  type,
  onClick,
  customClassName
};

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<Button {...setupProps} />);
};

describe('validate props types', () => {
  test('test validate button props types', () => {
    checkProps(Button, defaultProps);
  });
});

describe('render button component', () => {
  test('test button component render', () => {
    const wrapper = setup(defaultProps);
    const buttonElement = findByTestAttr(wrapper, 'common-button');
    expect(buttonElement.length).toBe(1);
  });
});
