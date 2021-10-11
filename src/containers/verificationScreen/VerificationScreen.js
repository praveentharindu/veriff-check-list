import React from 'react';

import VerificationProvider from './VerificationContext';
import VerificationForm from '../../components/verificationForm/VerificationForm';

import './VerificationScreen.scss';

export const VerificationScreen = props => {
  return (
    <VerificationProvider componentProps={props}>
      <div
        data-test="verification-form-wrapper"
        className="verificationContainer"
      >
        <VerificationForm />
      </div>
    </VerificationProvider>
  );
};
