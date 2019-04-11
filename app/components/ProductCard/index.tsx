import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import Button from 'components/Button';

const ProductCard = ({ imageSrc, title, price }: Props) => {
  return (
    <ProductCardWrapper>
      <ImageWrapper>
        <Image src={imageSrc} />
      </ImageWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </TextWrapper>
      <ButtonsWrapper>
        <Button>Add To Cart</Button>
        <Button secondary>Quick View</Button>
      </ButtonsWrapper>
    </ProductCardWrapper>
  );
};

const TextWrapper = styled.div`
  display: flex;
  margin-bottom: ${theme.spacings[3]};
  font-family: ${theme.fontFamily};
`;

const Title = styled.h3`
  color: ${theme.greys[9]};
  margin: 0;
  font-size: ${theme.fontSizes[3]};
  text-transform: uppercase;
  font-weight: bold;
  margin-right: ${theme.spacings[3]};
  line-height: ${theme.fontSizes[4]};
`;

const Price = styled.h4`
  color: ${theme.greys[9]};
  margin: 0;
  font-size: ${theme.fontSizes[3]};
  font-weight: bold;
`;

const ProductCardWrapper = styled.div`
  background-color: ${theme.greys[0]};
  padding: ${theme.spacings[2]} ${theme.spacings[2]};
`;

const ImageWrapper = styled.div`
  background-color: ${theme.greys[1]};
  padding: ${theme.spacings[2]};
  margin-bottom: ${theme.spacings[3]};
`;

const Image = styled.img`
  width: 100%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  button {
    flex-grow: 1;
  }
`;

export default ProductCard;

interface Props {
  imageSrc: string;
  title: string;
  price: string;
}
