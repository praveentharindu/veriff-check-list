import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import VerificationProvider, {
  VerificationContext
} from './VerificationContext';
import { findByTestAttr } from '../../utility/TestUtility';
// import { UnitTestHelper } from '../../../helpers/UnitTestHelper';

/**
 * Factory function to create a ShallowWrapper for the verification component.
 * @function setup
 * @param { object } testValues - Context values specific to this setup.
 * @return { mount }
 */

const ConsumerComponent = props => {
  return <></>;
};

const wait = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};
/**
 * Factory function to create a ReactWrapper for the verification context.
 * @returns {ReactWrapper}
 */
const setup = () => {
  return mount(
    <VerificationProvider>
      <VerificationContext.Consumer>
        {values => <ConsumerComponent {...values} data-test="consumer-comp" />}
      </VerificationContext.Consumer>
    </VerificationProvider>
  );
};

describe('test verification context', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('test initial state', () => {
    const component = findByTestAttr(wrapper, 'consumer-comp');

    const {
      isLoading,
      isErrorLoading,
      isSubmit,
      verificationCheckList,
      onSubmit,
      setCheckResult,
      submittable,
      retryFetchCheckList,
      isSuccess
    } = component.props();

    expect(isLoading).toBeTruthy();
    expect(isErrorLoading).toBeFalsy();
    expect(isSubmit).toBeFalsy();
    expect(verificationCheckList).toEqual([]);
    expect(typeof onSubmit).toBe('function');
    expect(typeof setCheckResult).toBe('function');
    expect(submittable).toBeTruthy();
    expect(typeof retryFetchCheckList).toBe('function');
    expect(isSuccess).toBeFalsy();
  });
});
