/**
 * All API calls exported from this file will be added
 * to the reducer, saga and props of index.js
 */
import createAPICall from 'utils/helperFunctions/createAPICall';
import axios from 'axios';

const container = 'app';

export const getProductsCall = createAPICall({
  name: 'getProducts',
  container,
  apiCallParams: () => [
    [axios, axios.get],
    `https://j-parre.myshopify.com/products.json`,
  ],
});
