import React, { useState } from 'react';
import styled from 'styled-components';

const StyledGallery = styled.div`
  position: relative;
  width: ${props => `${props.width}px`};
  margin: 24px auto;
  overflow: hidden;

  .button {
    background: rgba(255, 255, 255, 0.5);
    border: 0;
    box-shadow: 0 0 10px 3px #0002;
    padding: 20px;
    font-size: 24px;
    position: absolute;
    left: 0;
    top: 215px;
    z-index: 10;
    transition: all 250ms ease-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.75);
      box-shadow: 0 0 10px 3px #0003;
    }
    &:focus {
      outline: none;
    }

    &--right {
      right: 0;
      left: auto;
    }
  }

  ul {
    align-items: center;
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .item {
    background: #111;
    flex: ${props => `0 0 ${props.width}px`};
    height: 500px;
    text-align: center;
  }

  .dot {
    margin: 8px;

    svg {
      fill: lightgray;
    }

    &.active {
      svg {
        fill: #333;
      }
    }
  }

  .button,
  .dot {
    cursor: pointer;
  }

  .container {
    display: flex;
    transform: ${props => `translateX(${props.translateX}px)`};
    transition: all 250ms cubic-bezier(0.83, 0.27, 0.24, 0.91);
  }
`;

const Gallery = ({ images }) => {
  const width = 800;
  const lastX = (images.length - 1) * -1 * width;
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [translateX, setTranslateX] = useState(0);

  function moveSlide(buttonClicked) {
    const direction = buttonClicked === 'left' ? 1 : -1;
    let newX = translateX + direction * width;
    if (newX > 0) {
      newX = lastX;
    } else if (newX < lastX) {
      newX = 0;
    }

    const index = Math.abs(newX) / width;
    setCurrentImage(images[index]);
    setTranslateX(newX);
  }

  function handleDotClick(index) {
    const newX = index * -1 * width;
    setCurrentImage(images[index]);
    setTranslateX(newX);
  }

  return (
    <StyledGallery width={width} translateX={translateX}>
      <button
        class="button button--left"
        onClick={() => {
          moveSlide('left');
        }}
      >
        &lt;
      </button>
      <div class="container">
        {images.map(image => (
          <div key={image.id} className="item">
            <img
              src={
                image.thumb && image !== currentImage ? image.thumb : image.src
              }
              alt="alt"
              height="500"
            />
          </div>
        ))}
      </div>
      <button
        class="button button--right"
        onClick={() => {
          moveSlide('right');
        }}
      >
        &gt;
      </button>
      <ul>
        {images.map((image, i) => (
          <li
            key={`dot-${image.id}`}
            className={`dot${currentImage === image ? ' active' : ''}`}
            onClick={() => {
              handleDotClick(i);
            }}
          >
            <svg height="20" width="20">
              <circle cx="10" cy="10" r="10" />
            </svg>
          </li>
        ))}
      </ul>
    </StyledGallery>
  );
};

Gallery.defaultProps = {
  images: [
    {
      id: '8BoyeHOX4CI',
      thumb: 'https://source.unsplash.com/8BoyeHOX4CI/200x125',
      src: 'https://source.unsplash.com/8BoyeHOX4CI/800x500'
    },
    {
      id: 'xUCrW8aSotI',
      thumb: 'https://source.unsplash.com/xUCrW8aSotI/70x125',
      src: 'https://source.unsplash.com/xUCrW8aSotI/280x500'
    },
    {
      id: 'qajRKcXJL08',
      thumb: 'https://source.unsplash.com/qajRKcXJL08/200x125',
      src: 'https://source.unsplash.com/qajRKcXJL08/800x500'
    }
  ]
};

export default Gallery;
