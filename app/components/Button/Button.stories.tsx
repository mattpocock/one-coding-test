import React from 'react';
// @ts-ignore
import { storiesOf } from '@storybook/react';
import Button from './index';

storiesOf('Button', module)
  .add('Primary', () => (
    <>
      <Button>Primary</Button>
    </>
  ))
  .add('Secondary', () => (
    <>
      <Button secondary>Secondary</Button>
    </>
  ));
