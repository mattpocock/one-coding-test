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

const smallStyles = css`
  font-size: ${theme.fontSizes[1]};
  padding: ${theme.spacings[1]};
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: ${theme.spacings[2]} ${theme.spacings[4]};
  ${theme.uppercaseText};
  font-size: ${theme.fontSizes[2]};
  ${(props: ButtonProps) =>
    props.secondary ? secondaryStyles : primaryStyles};
  ${(props: ButtonProps) => (props.small ? smallStyles : '')};
`;

interface ButtonProps {
  secondary?: boolean;
  small?: boolean;
}

export default Button;
