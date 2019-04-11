import React from 'react';
// @ts-ignore
import { storiesOf } from '@storybook/react';
import Cart from './index';
import { Grid, Row, Col } from 'react-bootstrap';

storiesOf('Cart', module).add('Primary', () => (
  <>
    <Grid>
      <Row>
        <Col md={3}>
          <Cart cartCount={3} />
        </Col>
      </Row>
    </Grid>
  </>
));
