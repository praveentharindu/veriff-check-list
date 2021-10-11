import React, { useContext } from 'react';

import { VerificationContext } from '../../containers/verificationScreen/VerificationContext';
import CheckWrapper from '../common/checkWrapper/CheckWrapper';
import CheckItem from '../common/checkItem/CheckItem';
import { Helper } from '../../helper/Helper';
import Button from '../common/button/Button';
import CheckListLoader from '../common/contentLoader/CheckListLoader';

import './VerificationForm.scss';

const VerificationForm = () => {
  const {
    isLoading,
    isErrorLoading,
    verificationCheckList,
    onSubmit,
    setCheckResult,
    submittable,
    isSubmit,
    retryFetchCheckList,
    isSuccess
  } = useContext(VerificationContext);
  return (
    <>
      {isLoading && (
        <div className="checkItemListWrap" data-test="verification-loader">
          <CheckListLoader />
        </div>
      )}
      {(isErrorLoading || isSuccess) && (
        <div className="messageBox" data-test="message-box">
          <Button onClick={() => retryFetchCheckList()}>
            {isErrorLoading
              ? Helper.VERIFICATION_LIST_LOAD_ERROR
              : Helper.VERIFICATION_FORM_SUCCESS_SCREEN_MESSAGE}
          </Button>
        </div>
      )}
      {!isErrorLoading && !isSuccess && !isLoading && (
        <form
          data-test="verification-form"
          onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <p>{Helper.VERIFICATION_FORM_TITLE}</p>
          <div className="checkItemListWrap" data-test="verification-item-list">
            <CheckWrapper>
              {verificationCheckList.length > 0 &&
                verificationCheckList.map((checkItem, index) => (
                  <CheckItem
                    key={checkItem.id}
                    description={checkItem.description}
                    value={checkItem.result}
                    disabled={verificationCheckList
                      .slice(0, index)
                      .some(check => !check.result)}
                    onChange={newValue => {
                      setCheckResult(checkItem.id, newValue);
                    }}
                    options={Helper.ANSWER_OPTIONS}
                  />
                ))}
            </CheckWrapper>
            {verificationCheckList.length === 0 && (
              <p>{Helper.VERIFICATION_NO_DATA}</p>
            )}
            {verificationCheckList.length > 0 && (
              <Button
                data-test="verification-submit"
                customClassName="verificationSubmit"
                disabled={isSubmit || !submittable}
                type="submit"
              >
                {Helper.VERIFICATION_FORM_SUBMIT}
              </Button>
            )}
          </div>
        </form>
      )}
    </>
  );
};

export default VerificationForm;
