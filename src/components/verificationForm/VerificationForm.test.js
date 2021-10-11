import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';

import VerificationProvider from '../../containers/verificationScreen/VerificationContext';
import VerificationForm from './VerificationForm';
import { findByTestAttr } from '../../utility/TestUtility';

const verificationCheckList = [
  {
    id: 'aaa',
    priority: 10,
    description: 'Face on the picture matches face on the document'
  },
  {
    id: 'bbb',
    priority: 5,
    description: 'Veriff supports presented document'
  }
];

const defaultProps = {};

const defaultContextValues = {};

const setup = (props = {}, values = { verificationCheckList }) => {
  const setupProps = { ...defaultProps, ...props };
  const setupContextValue = { ...defaultContextValues, ...values };

  return mount(
    <VerificationProvider componentProps={props} value={setupContextValue}>
      <VerificationForm {...setupProps} />
    </VerificationProvider>
  );
};

describe('test verification check form', () => {
  describe('test form component', () => {
    let wrapper;

    beforeEach(async () => {
      await act(async () => {
        wrapper = setup();
      });
    });

    afterEach(() => {
      wrapper.unmount();
      jest.clearAllMocks();
    });

    test('test form initial load', () => {
      const component = findByTestAttr(wrapper, 'verification-form');
      expect(component.exists()).toBeTruthy();
    });

    test('test submit button not available when data is empty', () => {
      wrapper = setup();
      const submitBtn = findByTestAttr(wrapper, 'verification-submit');
      expect(submitBtn.exists()).toBeFalsy();
    });
  });
});
