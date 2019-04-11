import React from 'react';
// @ts-ignore
import { storiesOf } from '@storybook/react';
import ProductCard from './index';
import { Grid, Row, Col } from 'react-bootstrap';
import LoadingProductCard from './Loading';

storiesOf('Product Card', module)
  .add('Normal', () => (
    <>
      <Grid>
        <Row>
          <Col md={3}>
            <ProductCard
              imageSrc="https://cdn.shopify.com/s/files/1/1132/9968/products/barb-tee.png?v=1533127390"
              title="Matt's Favourite Shirt"
              price={5}
              addToCart={() => null}
            />
          </Col>
        </Row>
      </Grid>
    </>
  ))
  .add('Loading', () => (
    <>
      <Grid>
        <Row>
          <Col md={3}>
            <LoadingProductCard />
          </Col>
        </Row>
      </Grid>
    </>
  ));
