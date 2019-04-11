import React from 'react';
// @ts-ignore
import { storiesOf } from '@storybook/react';
import OrderSelect from './index';
import { TITLE_A_TO_Z } from 'containers/HomePage/constants';

let value = TITLE_A_TO_Z;

storiesOf('OrderSelect', module).add('Primary', () => (
  <>
    <OrderSelect
      order={value}
      onChange={newValue => {
        value = newValue;
      }}
    />
  </>
));
