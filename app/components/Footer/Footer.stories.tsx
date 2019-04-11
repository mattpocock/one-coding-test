import React from 'react';
// @ts-ignore
import { storiesOf } from '@storybook/react';
import products from 'fixtures/products.json';
import Footer from './index';

storiesOf('Footer', module).add('Main', () => (
  <>
    <Footer />
  </>
));
