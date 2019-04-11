/**
 *
 * HomePage
 *
 */

import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import connectToState from 'utils/helperFunctions/connectToState';
import NestedApiCallPropTypes from 'utils/types/NestedApiCallPropTypes';
import messages from './messages';
import * as apiCalls from './apiCalls';
import uuid from 'uuid/v4';
import useComponentDidMount from 'utils/hooks/useComponentDidMount';
import Header from 'components/Header';
// @ts-ignore
import clothesImg from 'images/clothes.jpg';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import Cart from 'components/Cart';
import ProductCard from 'components/ProductCard';
import theme from 'theme';
import Product from 'types/Product';
import LoadingProductCard from 'components/ProductCard/Loading';

const container = 'homePage';

const HomePage = ({ getProducts, basket }: Props) => {
  useComponentDidMount(() => {
    getProducts.submit();
  });

  const products: Product[] = (getProducts.state.data || {}).products || [];

  return (
    <>
      <Header items={basket.state.items} />
      <HeroImage src={clothesImg} />
      <Grid>
        <Row>
          <Col lg={9}>
            <Row>
              {getProducts.state.isLoading &&
                new Array(9).fill(null).map((_, index) => (
                  <Col lg={4} key={index}>
                    <LoadingProductCard />
                  </Col>
                ))}
              {products.map(product => (
                <Col lg={4} key={product._id}>
                  <ProductCard
                    title={product.title}
                    imageSrc={product.images[0].src}
                    price={Number(product.variants[0].price)}
                    addToCart={() => basket.add(product)}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={3}>
            <Cart
              removeFromCart={basket.removeById}
              items={basket.state.items}
            />
          </Col>
        </Row>
      </Grid>
    </>
  );
};

const HeroImage = styled.div<{ src: string }>`
  height: 40rem;
  background-image: url(${props => props.src});
  background-position: center;
  margin-bottom: ${theme.spacings[6]};
`;

interface Props {
  getProducts: NestedApiCallPropTypes;
  basket: {
    state: {
      items: Product[];
    };
    add: (item: Product) => void;
    removeById: (id: string) => void;
    clearAll: () => void;
  };
  order: {
    state: {
      type: string;
    };
    change: (type: string) => void;
  };
}

export default connectToState({
  container,
  apiCalls,
})(HomePage);
