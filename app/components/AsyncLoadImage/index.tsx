import React, { useState } from 'react';
import useComponentDidMount from 'utils/hooks/useComponentDidMount';
import styled from 'styled-components';

const AsyncLoadImage = ({ src, ...props }: Props) => {
  const [hasImageLoaded, setHasImageLoaded] = useState(false);

  useComponentDidMount(() => {
    const img = new Image();
    img.onload = () => setHasImageLoaded(true);
    img.src = src;
  });

  return <FadeInImage isVisible={hasImageLoaded} src={src} {...props} />;
};

const FadeInImage = styled.img`
  opacity: ${(props: ImageProps) => (props.isVisible ? 1 : 0)};
  transition: opacity 1s;
`;

interface ImageProps {
  isVisible: boolean;
}

interface Props {
  src: string;
}

export default AsyncLoadImage;
