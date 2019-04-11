import ApiCallPropTypes from './ApiCallPropTypes';

export default interface NestedApiCallPropTypes {
  /** The state of the API call */
  state: ApiCallPropTypes;
  /** Submits the API call */
  submit: (params?: any) => void;
  /** Resets the API call state to its default */
  reset: () => void;
}
