import React from 'react';
// @ts-ignore
import { storiesOf } from '@storybook/react';
import Cart from './index';
import { Grid, Row, Col } from 'react-bootstrap';

storiesOf('Cart', module)
  .add('One Item', () => (
    <>
      <Grid>
        <Row>
          <Col md={3}>
            <Cart
              items={[
                {
                  id: '1',
                  title: `Matt's t-shirt`,
                  size: 'Medium',
                  price: 19.99,
                },
              ]}
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
            <Cart
              items={[
                {
                  id: '1',
                  title: `Matt's t-shirt`,
                  size: 'Medium',
                  price: 19.99,
                },
                {
                  id: '2',
                  title: `Matt's t-shirt`,
                  size: 'Medium',
                  price: 19.99,
                },
                {
                  id: '3',
                  title: `Matt's t-shirt`,
                  size: 'Medium',
                  price: 19.99,
                },
                {
                  id: '4',
                  title: `Matt's t-shirt`,
                  size: 'Medium',
                  price: 19.99,
                },
              ]}
            />
          </Col>
        </Row>
      </Grid>
    </>
  ));
