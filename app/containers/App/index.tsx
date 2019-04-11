/**
 *
 * App
 *
 */

import React from 'react';
import HomePage from 'containers/HomePage';
import styled from 'styled-components';
import theme from 'theme';

const App = () => {
  return (
    <Wrapper>
      <HomePage />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.greys[1]};
`;

export default App;
