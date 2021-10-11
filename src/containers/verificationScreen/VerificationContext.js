import React, { createContext, useEffect, useState } from 'react';
import orderBy from 'lodash/orderBy';
import isNil from 'lodash/isNil';
import { toast } from 'react-toastify';

import { fetchChecks, submitCheckResults } from '../../api/VeriffApi';
import { Helper } from '../../helper/Helper';

export const VerificationContext = createContext();

const VerificationProvider = props => {
  const { children } = props;
  const [isLoading, setLoading] = useState(false);
  const [isErrorLoading, setErrorLoading] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const [submittable, setSubmittable] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [verificationCheckList, setVerificationCheckList] = useState([]);

  /**
   * fetch check list
   */
  const fetchVerificationCheckList = async () => {
    try {
      setLoading(true);
      const response = await fetchChecks();
      setVerificationCheckList(orderBy(response, 'priority'));
    } catch (exception) {
      setErrorLoading(true);
    } finally {
      setLoading(false);
    }
  };

  /**
   * retry fetch check list
   */
  const retryFetchCheckList = () => {
    setErrorLoading(false);
    setSuccess(false);
    fetchVerificationCheckList();
  };

  /**
   * set new answer value
   * @param {*} checkItemId
   * @param {*} result
   */
  const setCheckResult = (checkItemId, result) => {
    const currentCheckItemIndex = verificationCheckList.findIndex(
      check => check.id === checkItemId
    );
    verificationCheckList[currentCheckItemIndex].result = result;
    setVerificationCheckList([...verificationCheckList]);
  };

  /**
   *  on submit form handler
   */
  const onSubmit = async () => {
    try {
      setSubmit(true);
      const saveData = verificationCheckList
        .filter(check => !isNil(check.result))
        .map(check => ({
          checkId: check.id,
          result: check.result ? 'yes' : 'no'
        }));
      await submitCheckResults(saveData);
      toast.success(Helper.VERIFICATION_FORM_SUCCESS_MESSAGE, {
        autoClose: 2000
      });
      setSuccess(true);
    } catch (exception) {
      toast.error(Helper.VERIFICATION_FORM_ERROR_MESSAGE, {
        autoClose: 2000
      });
    } finally {
      setSubmit(false);
    }
  };

  /**
   * first render handler
   */
  useEffect(() => {
    setErrorLoading(false);
    fetchVerificationCheckList();
  }, []);

  /**
   * handle submit button status
   */
  useEffect(() => {
    const falseResults = verificationCheckList.some(
      checkItem => checkItem.result === false
    );
    const tureResults = !verificationCheckList.some(
      checkItem => !checkItem.result
    );
    setSubmittable(falseResults || tureResults);
  }, [verificationCheckList]);

  return (
    <VerificationContext.Provider
      value={{
        isLoading,
        isErrorLoading,
        isSubmit,
        verificationCheckList,
        onSubmit,
        setCheckResult,
        submittable,
        retryFetchCheckList,
        isSuccess
      }}
    >
      {children}
    </VerificationContext.Provider>
  );
};

export default VerificationProvider;
