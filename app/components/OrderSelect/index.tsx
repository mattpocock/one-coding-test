import {
  PRICE_HIGH_TO_LOW,
  PRICE_LOW_TO_HIGH,
  TITLE_A_TO_Z,
  TITLE_Z_TO_A,
} from 'containers/HomePage/constants';
import React from 'react';
import RFSelect from 'react-select';
import styled from 'styled-components';
import theme from 'theme';

const options = [
  {
    value: TITLE_A_TO_Z,
    label: 'Title - A to Z',
  },
  {
    value: TITLE_Z_TO_A,
    label: 'Title - Z to A',
  },
  {
    value: PRICE_HIGH_TO_LOW,
    label: 'Highest Price',
  },
  {
    value: PRICE_LOW_TO_HIGH,
    label: 'Lowest Price',
  },
];

const OrderSelect = ({ order, onChange }: Props) => {
  return (
    <Wrapper>
      <SelectWrapper>
        <RFSelect
          value={options.find(({ value }) => value === order)}
          options={options}
          // @ts-ignore
          onChange={option => onChange(option.value)}
          theme={selectTheme => ({
            ...selectTheme,
            colors: {
              ...selectTheme.colors,
              primary: theme.primaryColorMain,
              primary25: theme.greys[1],
              primary50: theme.greys[2],
              primary75: theme.greys[2],
            },
          })}
        />
      </SelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  * {
    font-family: ${theme.fontFamily};
  }
  padding-bottom: ${theme.spacings[3]};
  border-bottom: 1px solid ${theme.greys[2]};
  margin-bottom: ${theme.spacings[3]};
  display: flex;
  justify-content: flex-start;
`;

const SelectWrapper = styled.div`
  width: 20rem;
`;

interface Props {
  order: string;
  onChange: (order: string) => void;
}

export default OrderSelect;
