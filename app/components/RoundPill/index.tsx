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

const RoundPill = styled.div`
  display: inline-flex;
  min-width: 2.5rem;
  justify-content: center;
  align-items: center;
  border: none;
  padding: ${theme.spacings[1]};
  border-radius: 100%;
  font-family: ${theme.fontFamily};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${theme.fontSizes[2]};
  ${(props: { secondary?: boolean }) =>
    props.secondary ? secondaryStyles : primaryStyles};
`;

export default RoundPill;
