import { useReducer } from 'react';
import ApiCallPropTypes from 'utils/types/ApiCallPropTypes';
import Action from 'utils/types/Action';

const initialState: ApiCallPropTypes = {
  isLoading: false,
  hasError: false,
  hasSucceeded: false,
  data: null,
  errorMessage: '',
  prevPayload: null,
};

const reducer = (state = initialState, action: Action): ApiCallPropTypes => {
  switch (action.type) {
    case STARTED:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        hasSucceeded: false,
        errorMessage: '',
        prevPayload: action.payload,
      };
    case SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        hasSucceeded: true,
        errorMessage: '',
        data: action.payload,
      };
    case FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        hasSucceeded: false,
        errorMessage: action.payload,
        data: null,
      };
    case RESET:
      return initialState;
    default:
      throw new Error();
  }
};

export default ({
  endpoint,
  method = 'GET',
  onSuccess = null,
  mockedData = null,
}: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApiReturn = (res: {
    body: { Data: any; Errors: { Description: string }[] };
  }) => {
    if (res && res.body) {
      const { Data, Errors } = res.body;
      if (Errors && Errors.length > 0) {
        dispatch({
          type: FAILED,
          payload: Errors[0].Description || Errors[0],
        });
        return;
      }
      dispatch({ type: SUCCEEDED, payload: Data });
      if (onSuccess) {
        onSuccess(Data);
      }
    }
  };

  const handleSubmit = (params = {}) => {
    dispatch({ type: STARTED, payload: params });

    if (mockedData) {
      setTimeout(() => {
        dispatch({ type: SUCCEEDED, payload: mockedData });
      }, 400);
      if (onSuccess) {
        onSuccess(mockedData);
      }
      return;
    }

    try {
      // if (method === 'GET') {
      //   api.get(endpoint, params).then(handleApiReturn);
      // } else {
      //   api.post(endpoint, params).then(handleApiReturn);
      // }
    } catch (e) {
      dispatch({ type: FAILED, payload: e.toString() });
    }
  };

  return {
    state,
    submit: handleSubmit,
    reset: () => dispatch({ type: RESET }),
  };
};

interface Props {
  endpoint: string;
  method: string;
  onSuccess?: Function;
  mockedData?: any;
}

const STARTED = 'STARTED';
const SUCCEEDED = 'SUCCEEDED';
const FAILED = 'FAILED';
const RESET = 'RESET';
