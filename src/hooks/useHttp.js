import { useCallback, useReducer } from 'react';

const httpReducer = (state, action) => {
  if (action.type === 'SENDING') {
    return { data: null, error: null, status: 'pending' };
  }
  if (action.type === 'SUCCESS') {
    return { data: action.responseData, error: null, status: 'completed' };
  }
  if (action.type === 'ERROR') {
    return { data: null, error: action.errorMsg, status: 'failed' };
  }

  return state;
};

const useHttp = (requestFunction, startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    data: null,
    error: null,
    status: startWithPending ? 'pending' : null,
  });

  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: 'SENDING' });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', responseData });
      } catch (error) {
        dispatch({
          type: 'ERROR',
          errorMsg: error.message || 'Something went wrong!',
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;


