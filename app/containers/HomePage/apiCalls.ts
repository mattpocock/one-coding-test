/**
 * All API calls exported from this file will be added
 * to the reducer, saga and props of index.js
 */
import createAPICall from 'utils/helperFunctions/createAPICall';
import axios from 'axios';
import createReducer from 'utils/helperFunctions/createReducer';
import { TITLE_A_TO_Z } from './constants';

const container = 'homePage';

export const getProductsCall = createAPICall({
  name: 'getProducts',
  container,
  apiCallParams: () => [
    [axios, axios.get],
    `https://j-parre.myshopify.com/products.json`,
  ],
});

export const basketState = createReducer({
  name: 'basket',
  container,
  initialState: {
    items: [],
  },
  actions: {
    add: (state, payload) => ({
      ...state,
      items: [...(state.items || []), payload],
    }),
    removeById: (state, id) => ({
      ...state,
      items: state.items.filter((item: { id: string }) => item.id !== id),
    }),
    changeById: (state, { id, newItem }) => ({
      ...state,
      items: state.items.map((item: { id: string }) => {
        if (item.id === id) return newItem;
        return item;
      }),
    }),
    clearAll: state => ({ ...state, items: [] }),
  },
});

export const orderState = createReducer({
  name: 'order',
  container,
  initialState: {
    type: TITLE_A_TO_Z,
  },
  actions: {
    change: (state, payload) => ({ ...state, type: payload }),
  },
});
