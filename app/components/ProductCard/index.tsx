import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import Button from 'components/Button';
import AsyncLoadImage from 'components/AsyncLoadImage';

const ProductCard = ({ imageSrc, title, price, addToCart }: Props) => {
  return (
    <ProductCardWrapper>
      <ImageWrapper>
        <Image src={imageSrc} />
      </ImageWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Price>£{price}</Price>
      </TextWrapper>
      <ButtonsWrapper>
        <Button onClick={addToCart}>Add To Cart</Button>
        <Button secondary>Quick View</Button>
      </ButtonsWrapper>
    </ProductCardWrapper>
  );
};

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacings[3]};
  font-family: ${theme.fontFamily};
`;

export const Title = styled.h3`
  color: ${theme.greys[9]};
  margin: 0;
  font-size: ${theme.fontSizes[3]};
  text-transform: uppercase;
  font-weight: bold;
  margin-right: ${theme.spacings[3]};
  line-height: ${theme.fontSizes[4]};
`;

export const Price = styled.h4`
  color: ${theme.greys[9]};
  margin: 0;
  font-size: ${theme.fontSizes[3]};
  font-weight: bold;
`;

export const ProductCardWrapper = styled.div`
  background-color: ${theme.greys[0]};
  display: flex;
  flex-direction: column;
  padding: ${theme.spacings[2]} ${theme.spacings[2]};
  box-shadow: ${theme.shadows[1]};
  margin-bottom: ${theme.spacings[4]};
  height: calc(100% - ${theme.spacings[4]});
`;

export const ImageWrapper = styled.div`
  background-color: ${theme.greys[1]};
  padding: ${theme.spacings[2]};
  margin-bottom: ${theme.spacings[3]};
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const Image = styled(AsyncLoadImage)`
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  button {
    flex-grow: 1;
  }
`;

export default ProductCard;

interface Props {
  imageSrc: string;
  title: string;
  price: number;
  addToCart: () => void;
}
