import ApiCallPropTypes from 'utils/types/ApiCallPropTypes';

/**
 * Merges two api call states together
 */
export default (apiCalls: ApiCallPropTypes[]) =>
  apiCalls.reduce(
    (a = defaultApiCallPropTypes, b = defaultApiCallPropTypes) => ({
      isLoading: a.isLoading || b.isLoading,
      hasError: a.hasError || b.hasError,
      hasSucceeded: a.hasSucceeded && b.hasSucceeded,
      errorMessage: a.errorMessage || b.errorMessage,
    }),
    defaultApiCallPropTypes,
  );

const defaultApiCallPropTypes: ApiCallPropTypes = {
  isLoading: false,
  hasError: false,
  hasSucceeded: false,
  errorMessage: '',
  data: null,
};
