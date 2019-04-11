import React from 'react';
// @ts-ignore
import { storiesOf } from '@storybook/react';
import Cart from './index';
import { Grid, Row, Col } from 'react-bootstrap';
import products from 'fixtures/products.json';

storiesOf('Cart', module)
  .add('One Item', () => (
    <>
      <Grid>
        <Row>
          <Col md={3}>
            <Cart
              removeFromCart={() => null}
              items={[products[0], products[1]]}
            />
          </Col>
        </Row>
      </Grid>
    </>
  ))
  .add('Lots of Items', () => (
    <>
      <Grid>
        <Row>
          <Col md={3}>
            <Cart removeFromCart={() => null} items={products} />
          </Col>
        </Row>
      </Grid>
    </>
  ));
