import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { css } from 'styled-components';
import RoundPill from 'components/RoundPill';

const Cart = ({ cartCount }: Props) => {
  return (
    <CartWrapper>
      <div style={{ display: 'flex' }}>
        <Header>Cart</Header>
        <RoundPill>{cartCount}</RoundPill>
      </div>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  background-color: ${theme.greys[0]};
  padding: ${theme.spacings[3]};
`;

const Header = styled.h3`
  ${theme.uppercaseText};
  font-size: ${theme.fontSizes[4]};
  margin: 0;
  margin-right: ${theme.spacings[2]};
`;

interface Props {
  cartCount: number;
}

export default Cart;
