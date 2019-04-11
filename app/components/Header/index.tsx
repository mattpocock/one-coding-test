import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { css } from 'styled-components';
import Logo from './Logo';
import { Grid } from 'react-bootstrap';
import RoundPill from '../RoundPill';
import Product from '../../types/Product';

const Header = ({ items }: { items: Product[] }) => {
  return (
    <HeaderWrapper>
      <Grid>
        <HeaderOrganiser>
          <div style={{ flexGrow: 1 }}>
            <Logo />
          </div>
          <CartWrapper>
            <span>
              £{Intl.NumberFormat().format(
                items.reduce((a, b) => a + Number(b.variants[0].price), 0),
              )}
            </span>
            <RoundPill>{items.length}</RoundPill>
          </CartWrapper>
        </HeaderOrganiser>
      </Grid>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background-color: ${theme.greys[1]};
  padding: ${theme.spacings[4]};
`;

const HeaderOrganiser = styled.div`
  display: flex;
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: ${theme.spacings[2]};
    ${theme.boldText};
  }
`;

export default Header;
