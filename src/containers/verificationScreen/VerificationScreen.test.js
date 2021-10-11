import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { VerificationScreen } from './VerificationScreen';
import { findByTestAttr } from '../../utility/TestUtility';
import { UnitTestHelper } from '../../helper/UnitTestHelper';

const defaultProps = UnitTestHelper.VERIFICATION_CHECK.defaultProviderProps;

/**
 * Factory function to create a ReactWrapper for the verification screen.
 * @param {*} props
 * @param {*} values
 * @returns {ReactWrapper}
 */
const setup = (props = {}, values = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(<VerificationScreen {...setupProps} />);
};

describe('test verification screen', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('test render verification screen without error', () => {
    const component = findByTestAttr(wrapper, 'verification-form-wrapper');
    expect(component.exists()).toBe(true);
  });
});
