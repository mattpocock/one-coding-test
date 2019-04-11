import reduceToObject from 'utils/helperFunctions/reduceToObject';

function ApiCallArray(apiCalls: any) {
  this.array = Object.keys(apiCalls).map(key => apiCalls[key]);
}

ApiCallArray.prototype.mapStateToProps = function mapStateToProps() {
  return this.array
    .map((apiCall: any) => ({ [apiCall.name]: apiCall.mapStateToProps() }))
    .reduce(reduceToObject, {});
};

ApiCallArray.prototype.mapNestedStateToProps = function mapNestedStateToProps() {
  return this.array
    .map((apiCall: any) => ({
      [apiCall.name]: apiCall.mapNestedStateToProps(),
    }))
    .reduce(reduceToObject, {});
};

ApiCallArray.prototype.mapDispatchToProps = function mapDispatchToProps(
  dispatch: Function,
) {
  return this.array
    .map((apiCall: any) => ({
      ...apiCall.mapDispatchToProps(dispatch),
    }))
    .reduce(reduceToObject, {});
};

ApiCallArray.prototype.mapNestedDispatchToProps = function mapNestedDispatchToProps(
  dispatch: Function,
) {
  return this.array
    .map((apiCall: any) => ({
      ...apiCall.mapNestedDispatchToProps(dispatch),
    }))
    .reduce(reduceToObject, {});
};

ApiCallArray.prototype.mergeNestedProps = function mergeNestedProps() {
  return (stateProps: any, dispatchProps: any, otherProps: any) => {
    const mergedProps = Object.keys(stateProps)
      .map(key => {
        if (!Object.keys(dispatchProps).includes(key)) {
          return { [key]: stateProps[key] };
        }
        return { [key]: { ...stateProps[key], ...dispatchProps[key] } };
      })
      .reduce(reduceToObject, {});
    return {
      ...dispatchProps,
      ...stateProps,
      ...mergedProps,
      ...otherProps,
    };
  };
};

ApiCallArray.prototype.mapReducers = function mapReducers() {
  return this.array
    .map((apiCall: any) => ({ [apiCall.name]: apiCall.reducer }))
    .reduce(reduceToObject, {});
};

ApiCallArray.prototype.mapSaga = function mapSaga() {
  return this.array
    .map(({ saga }: { saga: any }) => [saga])
    .reduce((a: any, b: any) => [...a, ...b], []);
};

export default ApiCallArray;
