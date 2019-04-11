import React from 'react';
// @ts-ignore
import { storiesOf } from '@storybook/react';
import products from 'fixtures/products.json';
import Header from './index';

storiesOf('Header', module).add('Main', () => (
  <>
    <Header items={[products[0], products[1]]} />
  </>
));
