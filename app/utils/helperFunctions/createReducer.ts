// @ts-nocheck
import { createSelector, createStructuredSelector } from 'reselect';
import reduceToObject from 'utils/helperFunctions/reduceToObject';
import Action from 'utils/types/Action';

const parseCamelCaseToArray = (string: string) =>
  string.replace(/([A-Z])/g, letter => ` ${letter}`).split(' ');

const constant = (string: string) =>
  parseCamelCaseToArray(string)
    .map(word => word.toUpperCase())
    .join('_');

export default ({
  /** The name of the reducer */
  name,
  /** The name of the container */
  container,
  initialState,
  actions,
}: Props) => {
  const constants = {
    ...Object.keys(actions)
      .map(actionName => ({
        [actionName]: `${container}/${constant(actionName)}`,
      }))
      .reduce(reduceToObject, {}),
  };

  const selector = (state: any) => state[container];
  const makeSelectDomain = () =>
    createSelector(selector, substate => {
      return substate && substate[name] ? substate[name] : {};
    });

  const selectors = Object.keys(initialState)
    .map(keyName => ({
      [keyName]: () =>
        createSelector(makeSelectDomain(), substate => {
          return substate[keyName];
        }),
    }))
    .reduce(reduceToObject, {});

  const actionCreators = {
    ...Object.keys(actions)
      .map(actionName => ({
        [actionName]: (payload: any) => ({
          type: constants[actionName],
          payload,
        }),
      }))
      .reduce(reduceToObject, {}),
  };

  const reducer = (state = initialState, { type, payload }: Action) => {
    const cases = [
      ...Object.keys(actions).map(actionName => ({
        type: constants[actionName],
        action: actions[actionName],
      })),
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
    actions: actionCreators,
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
        ...Object.keys(selectors)
          .map(fieldName => ({
            [fieldName]: selectors[fieldName](),
          }))
          .reduce(reduceToObject, {}),
      }),
    mapNestedStateToProps: () =>
      createStructuredSelector({
        state: createStructuredSelector({
          ...Object.keys(selectors)
            .map(fieldName => ({
              [fieldName]: selectors[fieldName](),
            }))
            .reduce(reduceToObject, {}),
        }),
      }),
    /**
     * Returns a function that takes a payload and dispatches the API call
     *  - put this in mapDispatchToProps
     */
    mapDispatchToProps: (dispatch: Function) => ({
      ...Object.keys(actions)
        .map(actionName => ({
          [`${actionName}`]: (payload: any) => {
            dispatch(actionCreators[`${actionName}`](payload));
          },
        }))
        .reduce(reduceToObject, {}),
    }),
    mapNestedDispatchToProps: (dispatch: Function) => ({
      [name]: {
        ...Object.keys(actions)
          .map(actionName => ({
            [`${actionName}`]: (payload: any) => {
              dispatch(actionCreators[`${actionName}`](payload));
            },
          }))
          .reduce(reduceToObject, {}),
      },
    }),
  };
};

interface Props {
  name: string;
  container: string;
  initialState: {};
  actions: {
    [key: string]: (state: any, payload: any) => any;
  };
}
