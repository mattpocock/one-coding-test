import { css } from 'styled-components';

const primaryColors = {
  5: '#DC6563',
};

const greys = {
  0: 'white',
  1: '#F5F3F6',
  2: '#E6E4E7',
  8: '#444',
  9: '#222222',
};
const spacings = {
  0: '0rem',
  1: '0.5rem',
  2: '1rem',
  3: '1.5rem',
  4: '2rem',
  5: '2.5rem',
  6: '3rem',
  7: '3.5rem',
};

const fontSizes = {
  2: '1rem',
  3: '1.5rem',
  4: '2rem',
};

const fontFamily = 'Montserrat, Futura, sans-serif';

const uppercaseText = css`
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1.2px;
  font-family: ${fontFamily};
`;

const shadows = {
  1: '0px 2px 10px 0px rgba(0,0,0,0.12), 0px 5px 20px 0px rgba(0,0,0,0.08)',
};

const theme = {
  primaryColors,
  primaryColorMain: primaryColors[5],
  white: greys[0],
  greys,
  spacings,
  fontFamily,
  fontSizes,
  shadows,
  uppercaseText,
};

export default theme;
