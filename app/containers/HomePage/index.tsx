/**
 *
 * HomePage
 *
 */

import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import connectToState from 'utils/helperFunctions/connectToState';
import NestedApiCallPropTypes from 'utils/types/NestedApiCallPropTypes';
import messages from './messages';
import * as apiCalls from './apiCalls';
import uuid from 'uuid/v4';
import useComponentDidMount from 'utils/hooks/useComponentDidMount';

const container = 'homePage';

const HomePage = ({ getProducts, basket }: Props) => {
  useComponentDidMount(() => {
    getProducts.submit();
  });
  return (
    <div>
      <button
        onClick={() => basket.add({ item: 'you', amount: 1, id: uuid() })}
      >
        Add
      </button>
      <FormattedHTMLMessage {...messages.header} />
    </div>
  );
};

interface Props {
  getProducts: NestedApiCallPropTypes;
  basket: {
    state: {
      items: [];
    };
    add: (params: { item: any; amount: number; id: string }) => void;
    removeById: (id: string) => void;
    clearAll: () => void;
  };
  order: {
    state: {
      type: string;
    };
    change: (type: string) => void;
  };
}

export default connectToState({
  container,
  apiCalls,
})(HomePage);
