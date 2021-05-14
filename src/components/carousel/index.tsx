import React, { useState } from 'react';

import { ArrowRight32, ArrowLeft32 } from '@carbon/icons-react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';

import Theme from 'theme';

import Button from '../button';
import Dot from './dot';

type CarouselProps = {
  alt: string;
  pictures: string[];
};

const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  > div {
    > div {
      position: relative;
      bottom: 30px;
      z-index: 2;
      display: flex;
      justify-content: center;
    }

    > button {
      position: absolute;
      top: 50%;
      z-index: 2;
      width: 30px;
      height: 30px;
      color: white;
      background-color: ${Theme.colors.darkGray};
      border-color: ${Theme.colors.darkGray};
      cursor: pointer;
      opacity: 0;

      &:first-of-type {
        left: 20px;
        transition: opacity 0.6s ease-in-out;
      }

      &:last-of-type {
        right: 20px;
        transition: opacity 0.6s ease-in-out;
      }

      &:hover {
        background-color: ${Theme.colors.darkGray};
      }
    }

    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    &:hover {
      > button:first-of-type,
      > button:last-of-type {
        opacity: 0.8;
      }
    }
  }
`;

const Carousel = ({ pictures, alt }: CarouselProps): React.ReactElement => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState<number>(0);

  const nextSlide = () => {
    if (currentPictureIndex + 1 >= pictures.length) {
      setCurrentPictureIndex(0);
      return;
    }

    setCurrentPictureIndex(currentPictureIndex + 1);
  };

  const backSlide = () => {
    if (currentPictureIndex - 1 < 0) {
      setCurrentPictureIndex(pictures.length - 1);
      return;
    }

    setCurrentPictureIndex(currentPictureIndex - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => backSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const displayPicture = (): React.ReactElement => (
    <img src={pictures[currentPictureIndex]} alt={`${alt} ${currentPictureIndex}`} />
  );

  return (
    <CarouselContainer {...handlers}>
      {pictures.length > 1 ? (
        <div>
          <Button type='button' isOutlined isSmall handleClick={backSlide}>
            <ArrowLeft32 />
          </Button>
          {displayPicture()}
          <div>
            {pictures.map((_, index) => (
              <Dot
                // eslint-disable-next-line
                key={index}
                isSelected={index === currentPictureIndex}
                handleClick={() => setCurrentPictureIndex(index)}
              />
            ))}
          </div>
          <Button type='button' isOutlined isSmall handleClick={nextSlide}>
            <ArrowRight32 />
          </Button>
        </div>
      ) : (
        displayPicture()
      )}
    </CarouselContainer>
  );
};

export default Carousel;
export { CarouselProps };
