export default interface ApiCallPropTypes {
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
  hasSucceeded: boolean;
  data: any;
  prevPayload?: any;
}
