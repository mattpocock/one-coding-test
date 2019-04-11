import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoText>Eclectees</LogoText>
      <Small>co</Small>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: inline-block;
  border: 2px solid ${theme.primaryColorMain};
  padding: ${theme.spacings[0]} ${theme.spacings[1]};
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
