import React from 'react';
import Button from 'components/Button';
import {
  ProductCardWrapper,
  ImageWrapper,
  TextWrapper,
  ButtonsWrapper,
} from '.';

const LoadingProductCard = () => {
  return (
    <ProductCardWrapper>
      <ImageWrapper style={{ height: '21rem' }} />
      <TextWrapper style={{ height: '2rem' }} />
      <ButtonsWrapper>
        <Button secondary disabled style={{ height: '4rem' }} />
        <Button secondary disabled style={{ height: '4rem' }} />
      </ButtonsWrapper>
    </ProductCardWrapper>
  );
};

export default LoadingProductCard;
