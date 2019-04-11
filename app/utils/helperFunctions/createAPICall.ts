import { call, put, takeLatest } from 'redux-saga/effects';
import { createSelector, createStructuredSelector } from 'reselect';
import ApiCallPropTypes from 'utils/types/ApiCallPropTypes';

const parseCamelCaseToArray = (string: string) =>
  string.replace(/([A-Z])/g, letter => ` ${letter}`).split(' ');

const constant = (string: string) =>
  parseCamelCaseToArray(string)
    .map(word => word.toUpperCase())
    .join('_');

const capitalize = (string: string) =>
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

const defaultInitialState: ApiCallPropTypes = {
  isLoading: false,
  hasSucceeded: false,
  hasError: false,
  errorMessage: '',
  data: null,
};

export default ({ name, container, apiCallParams, resetData }: Params) => {
  const initialState = defaultInitialState;
  const constants = {
    started: `${container}/${constant(name)}_STARTED`,
    failed: `${container}/${constant(name)}_FAILED`,
    succeeded: `${container}/${constant(name)}_SUCCEEDED`,
    reset: `${container}/RESET_${constant(name)}`,
  };

  const selector = (state: any) => state[container];
  const makeSelectDomain = () =>
    createSelector(
      selector,
      substate => (substate && substate[name] ? substate[name] : {}),
    );

  const selectors = {
    isLoading: () =>
      createSelector(makeSelectDomain(), substate => substate.isLoading),
    hasSucceeded: () =>
      createSelector(makeSelectDomain(), substate => substate.hasSucceeded),
    hasError: () =>
      createSelector(makeSelectDomain(), substate => substate.hasError),
    errorMessage: () =>
      createSelector(makeSelectDomain(), substate => substate.errorMessage),
    data: () => createSelector(makeSelectDomain(), substate => substate.data),
  };

  const actions: ActionCreators = {
    started: payload => ({
      type: constants.started,
      payload,
    }),
    failed: payload => ({
      type: constants.failed,
      payload,
    }),
    succeeded: payload => ({
      type: constants.succeeded,
      payload,
    }),
    reset: () => ({
      type: constants.reset,
    }),
  };

  const reducer = (state = initialState, { type, payload }: Action) => {
    const cases: {
      type: string;
      action: (state: ApiCallPropTypes, payload: any) => any;
    }[] = [
      {
        type: constants.started,
        action: prevState => ({
          ...prevState,
          isLoading: true,
          hasSucceeded: false,
          hasError: false,
          errorMessage: '',
          data: resetData ? null : prevState.data,
        }),
      },
      {
        type: constants.failed,
        action: (prevState, p) => ({
          ...prevState,
          isLoading: false,
          hasSucceeded: false,
          hasError: true,
          errorMessage: p,
        }),
      },
      {
        type: constants.succeeded,
        action: (prevState, p) => ({
          ...prevState,
          isLoading: false,
          hasSucceeded: true,
          hasError: false,
          errorMessage: '',
          data: p,
        }),
      },
      {
        type: constants.reset,
        action: () => initialState,
      },
    ];
    return (
      cases
        .filter(c => type === c.type)
        /**
         * Runs through each case that matches the type, and calls
         * it with (state, payload). At the end of the reduce, returns
         * the state
         */
        .reduce((a, b) => (b.action ? b.action(a, payload) : a), state)
    );
  };

  return {
    actions,
    constants,
    selectors,
    reducer,
    name,
    mapReducer: () => ({ [name]: reducer }),
    /**
     * Creates a structured selector with this shape
     */
    mapStateToProps: () =>
      createStructuredSelector({
        isLoading: selectors.isLoading(),
        data: selectors.data(),
        hasSucceeded: selectors.hasSucceeded(),
        hasError: selectors.hasError(),
        errorMessage: selectors.errorMessage(),
      }),
    mapNestedStateToProps: () =>
      createStructuredSelector({
        state: createStructuredSelector({
          isLoading: selectors.isLoading(),
          data: selectors.data(),
          hasSucceeded: selectors.hasSucceeded(),
          hasError: selectors.hasError(),
          errorMessage: selectors.errorMessage(),
        }),
      }),
    /**
     * Returns a function that takes a payload and dispatches the API call
     *  - put this in mapDispatchToProps
     */
    submit: (dispatch: Function) => (payload?: any) =>
      dispatch(actions.started(payload)),
    reset: (dispatch: Function) => () => dispatch(actions.reset()),
    mapDispatchToProps: (dispatch: Function) => ({
      [`submit${capitalize(name)}`]: (payload: any) =>
        dispatch(actions.started(payload)),
      [`reset${capitalize(name)}`]: () => dispatch(actions.reset()),
    }),
    mapNestedDispatchToProps: (dispatch: Function) => ({
      [name]: {
        submit: (payload: any) => dispatch(actions.started(payload)),
        reset: () => dispatch(actions.reset()),
      },
    }),
    /**
     * You can create a custom saga, as above.
     */
    saga: takeLatest(constants.started, function*({ payload }: Action) {
      let res: DataResponse = {};
      try {
        const params: any[] = apiCallParams(payload);
        // @ts-ignore
        res = yield call(...params);
      } catch (err) {
        console.log(err); // eslint-disable-line
        yield put(actions.failed(err.toString()));
      }
      if (res && res.data) {
        yield put(actions.succeeded(res.data));
      }
    }),
  };
};

interface Params {
  /** The name of the call */
  name: string;
  /** The name of the container */
  container: string;
  /** Whether or not to reset the 'data' attribute on eahc call */
  resetData?: boolean;
  /**
   * Takes in a function which returns an array of params for
   * the 'call' function in redux-saga to work with
   */
  apiCallParams?: (payload: any) => any[];
  /**
   * If you want to perform any manipulations on the data
   * you get from the API before it heads into Redux state,
   * do it here
   */
  adjustDataBeforeReduxState?: (data: any) => any;
}

interface DataResponse {
  data?: any;
}

interface ActionCreators {
  started: (payload: any) => Action;
  failed: (payload: any) => Action;
  succeeded: (payload: any) => Action;
  reset: () => Action;
}

interface Action {
  type: string;
  payload?: any;
}
