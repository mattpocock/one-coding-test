import React from 'react';
import { Grid } from 'react-bootstrap';
import styled from 'styled-components';
import theme from 'theme';
import Logo from '../Header/Logo';

const Footer = () => {
  return (
    <FooterWrapper>
      <Grid>
        <FooterOrganiser>
          <div>
            <Logo secondary />
          </div>
          <p>Eclectees Co. Limited 2018</p>
          <SmallMenu>
            <MenuItem>Terms and Conditions</MenuItem>
            <Divider />
            <MenuItem>Privacy Policy</MenuItem>
            <Divider />
            <MenuItem>Contact Us</MenuItem>
          </SmallMenu>
        </FooterOrganiser>
      </Grid>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  background-color: ${theme.greys[1]};
  padding: ${theme.spacings[4]};
  border-top: 2px solid ${theme.greys[2]};
`;

const SmallMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  list-style-type: none;
  color: ${theme.primaryColorMain};
  font-size: ${theme.spacings[2]};
`;

const Divider = styled.div`
  width: 1px;
  background-color: ${theme.primaryColorMain};
  margin-left: ${theme.spacings[1]};
  margin-right: ${theme.spacings[1]};
`;

const FooterOrganiser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    ${theme.textBasics};
    font-size: ${theme.fontSizes[2]};
    margin: 0;
  }
`;

export default Footer;
