import styled from 'styled-components';
import theme from 'theme';
import { css } from 'styled-components';

const primaryStyles = css`
  background-color: ${theme.primaryColorMain};
  color: ${theme.white};
`;

const secondaryStyles = css`
  background-color: ${theme.greys[2]};
  color: ${theme.greys[9]};
`;

const Button = styled.button`
  border: none;
  padding: ${theme.spacings[2]} ${theme.spacings[4]};
  ${theme.uppercaseText};
  font-size: ${theme.fontSizes[2]};
  ${(props: { secondary?: boolean }) =>
    props.secondary ? secondaryStyles : primaryStyles};
`;

export default Button;
