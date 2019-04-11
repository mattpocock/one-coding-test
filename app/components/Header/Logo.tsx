import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { css } from 'styled-components';

const Logo = ({ secondary = false }) => {
  return (
    <LogoWrapper secondary={secondary}>
      <LogoText>Eclectees</LogoText>
      <Small>co</Small>
    </LogoWrapper>
  );
};

const invertedStyles = css`
  background-color: ${theme.primaryColorMain};
  span {
    color: white;
  }
`;

const LogoWrapper = styled.div`
  display: inline-block;
  border: 2px solid ${theme.primaryColorMain};
  padding: ${theme.spacings[0]} ${theme.spacings[1]};
  ${(props: { secondary: boolean }) => (props.secondary ? invertedStyles : '')};
`;

const Small = styled.span`
  ${theme.uppercaseText};
  font-size: 0.9rem;
  margin-left: 1px;
  transform: translate(0px, 0px);
  vertical-align: top;
  display: inline-block;
`;

const LogoText = styled.span`
  ${theme.uppercaseText};
`;

export default Logo;
