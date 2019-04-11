import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import RoundPill from 'components/RoundPill';
import Product from '../../types/Product';
import Button from 'components/Button';

const Cart = ({ items = [], removeFromCart }: Props) => {
  return (
    <CartWrapper>
      <HeaderWrapper style={{ display: 'flex', alignItems: 'center' }}>
        <Header>Cart</Header>
        <RoundPill>{items.length}</RoundPill>
      </HeaderWrapper>
      <CartItemsWrapper>
        {items.map(item => (
          <CartItemWrapper key={item._id}>
            <TitleSubtitleWrapper>
              <Title>{item.title}</Title>
              <Size>{item.variants[0].title}</Size>
            </TitleSubtitleWrapper>
            <PriceButtonWrapper>
              <Price>
                £{Intl.NumberFormat().format(Number(item.variants[0].price))}
              </Price>
              <Button secondary small onClick={() => removeFromCart(item._id)}>
                Remove
              </Button>
            </PriceButtonWrapper>
          </CartItemWrapper>
        ))}
      </CartItemsWrapper>
      <TotalsArea>
        <TitleSubtitleWrapper>
          <TotalsTitle>Total</TotalsTitle>
          <TotalsSubtitle>Inc. £0 in taxes</TotalsSubtitle>
        </TitleSubtitleWrapper>
        <Price style={{ fontSize: theme.fontSizes[4] }}>
          £{Intl.NumberFormat().format(
            items.reduce((a, b) => a + Number(b.variants[0].price), 0),
          )}
        </Price>
      </TotalsArea>
    </CartWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacings[4]};
`;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: solid 3px ${theme.primaryColorMain};
  min-height: 30rem;
  background-color: ${theme.greys[0]};
  padding: ${theme.spacings[3]};
  box-shadow: ${theme.shadows[1]};
  margin-bottom: ${theme.spacings[4]};
`;

const CartItemsWrapper = styled.div`
  border-top: 1px solid ${theme.greys[1]};
  flex-grow: 1;
  max-height: 50rem;
  overflow-x: auto;
`;

const TitleSubtitleWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const CartItemWrapper = styled.div`
  border-bottom: 1px solid ${theme.greys[1]};
  padding: ${theme.spacings[2]};
  display: flex;
  justify-content: space-between;
`;

const PriceButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Price = styled.span`
  ${theme.boldText};
  margin-bottom: ${theme.spacings[0]};
`;

const Title = styled.span`
  ${theme.boldText};
  margin-bottom: ${theme.spacings[0]};
  margin-right: ${theme.spacings[2]};
`;

const Size = styled.span`
  ${theme.textBasics};
  font-size: ${theme.fontSizes[2]};
  color: ${theme.primaryColorMain};
`;

const Header = styled.h3`
  ${theme.uppercaseText};
  font-size: ${theme.fontSizes[4]};
  margin: 0;
  margin-right: ${theme.spacings[2]};
`;

const TotalsArea = styled.div`
  background-color: ${theme.greys[2]};
  padding: ${theme.spacings[2]};
  display: flex;
  justify-content: space-between;
`;

const TotalsTitle = styled.span`
  ${theme.boldText};
  margin-bottom: ${theme.spacings[0]};
`;

const TotalsSubtitle = styled.span`
  ${theme.textBasics};
  font-size: ${theme.fontSizes[2]};
  color: ${theme.greys[8]};
`;

interface Props {
  items: Product[];
  removeFromCart: (id: string) => void;
}

export default Cart;
