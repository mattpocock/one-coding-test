import Product from 'types/Product';
import {
  TITLE_A_TO_Z,
  TITLE_Z_TO_A,
  PRICE_HIGH_TO_LOW,
  PRICE_LOW_TO_HIGH,
} from './constants';

const sortFunctions: {
  [index: string]: (a: Product, b: Product) => number;
} = {
  [TITLE_A_TO_Z]: (a, b) => (a.title > b.title ? 1 : -1),
  [TITLE_Z_TO_A]: (a, b) => (a.title > b.title ? -1 : 1),
  [PRICE_HIGH_TO_LOW]: (a, b) => {
    if (Number(a.variants[0].price) === Number(b.variants[0].price)) return 0;
    return Number(a.variants[0].price) > Number(b.variants[0].price) ? -1 : 1;
  },
  [PRICE_LOW_TO_HIGH]: (a, b) => {
    if (Number(a.variants[0].price) === Number(b.variants[0].price)) return 0;
    return Number(a.variants[0].price) > Number(b.variants[0].price) ? 1 : -1;
  },
};

export default sortFunctions;
