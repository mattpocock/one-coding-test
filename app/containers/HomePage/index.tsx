/**
 *
 * HomePage
 *
 */

import Cart from 'components/Cart';
import Header from 'components/Header';
// @ts-ignore
import Helmet from 'react-helmet';
import OrderSelect from 'components/OrderSelect';
import ProductCard from 'components/ProductCard';
import LoadingProductCard from 'components/ProductCard/Loading';
// @ts-ignore
import clothesImg from 'images/clothes.jpg';
import React, { useState } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import styled from 'styled-components';
import theme from 'theme';
import Product from 'types/Product';
import connectToState from 'utils/helperFunctions/connectToState';
import useComponentDidMount from 'utils/hooks/useComponentDidMount';
import NestedApiCallPropTypes from 'utils/types/NestedApiCallPropTypes';
import * as apiCalls from './apiCalls';
import Footer from 'components/Footer';
import { FormattedMessage } from 'react-intl';
// @ts-ignore
import Sticky from 'react-stickynode';
import messages from './messages';
import useWatchForTruthy from 'utils/hooks/useWatchForTruthy';
import Button from 'components/Button';
import sortFunctions from './sortFunctions';

const container = 'homePage';

const HomePage = ({ getProducts, basket, order }: Props) => {
  const [products, setProducts] = useState([]);

  useComponentDidMount(() => {
    getProducts.submit();
  });

  useWatchForTruthy(getProducts.state.hasSucceeded, () => {
    setProducts([
      ...products,
      ...((getProducts.state.data || {}).products || []),
    ]);
  });

  const handleLoadMore = () => {
    getProducts.submit();
  };

  return (
    <>
      <FormattedMessage {...messages.header}>
        {header => <Helmet title={String(header)} />}
      </FormattedMessage>
      <Header items={basket.state.items} />
      <HeroImage src={clothesImg} />
      <Grid>
        <Row>
          <Col md={8} lg={9}>
            <OrderSelect order={order.state.type} onChange={order.change} />
            <Row>
              {getProducts.state.isLoading &&
                new Array(9).fill(null).map((_, index) => (
                  <Col lg={4} key={index}>
                    <LoadingProductCard />
                  </Col>
                ))}
              {products.sort(sortFunctions[order.state.type]).map(product => (
                <Col lg={4} key={product._id}>
                  <ProductCard
                    title={product.title}
                    imageSrc={product.images[0].src}
                    price={Number(product.variants[0].price)}
                    addToCart={() => basket.add(product)}
                  />
                </Col>
              ))}
              {getProducts.state.hasError && (
                <p>
                  <FormattedMessage {...messages.error} />
                </p>
              )}
            </Row>
          </Col>
          <Col lg={3} md={4}>
            <Sticky enabled top={20}>
              <Cart
                removeFromCart={basket.removeById}
                items={basket.state.items}
              />
            </Sticky>
          </Col>
        </Row>
      </Grid>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: theme.spacings[4],
        }}
      >
        <Button secondary onClick={handleLoadMore}>
          <FormattedMessage {...messages.loadMore} />
        </Button>
      </div>
      <Footer />
    </>
  );
};

const HeroImage = styled.div<{ src: string }>`
  height: 40rem;
  background-image: url(${props => props.src});
  background-position: center;
  margin-bottom: ${theme.spacings[3]};
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
