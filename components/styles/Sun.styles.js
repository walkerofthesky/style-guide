import styled, { css, keyframes } from 'styled-components';

const radius = 30; // 'px'
const buffer = 10; // 'px'
const rayDistance = radius * 2 + buffer; // 'px'
const halfBuffer = buffer / 2; // 'px'
const rayDistanceAngle = radius * 2 + halfBuffer; // 'px'
const timeMultiplier = 0.6; // 's'
const colorBrand = '#ff8200';

// Keyframes
const grow = keyframes`
  50% {
    width: ${radius + 10}px;
  }
  100% {
    width: ${radius}px;
  }
`;
const growVertical = keyframes`
  50% {
    height: ${radius + 10}px;
  }
  100% {
    height: ${radius}px;
  }
`;
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSunSpinner = styled.div`
  align-items: center;
  background: rgba(25, 25, 25, 0.25);
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
`;

export const Text = styled.div`
  margin-top: ${radius * 3}px;
  color: #ff8200;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 24px;

  p {
    font-size: inherit;
    margin: 0;
  }
`;

const spinAnimation = css`
  ${spin} 13s linear infinite
`;
export const Sun = styled.div`
  height: ${radius * 2}px;
  width: ${radius * 2}px;
  box-shadow: inset 0 0 0 4px ${colorBrand};
  border-radius: 50%;
  position: relative;
  animation: ${spinAnimation};
`;

// Inidividual ray overrides
const index5Through8 = [5, 6, 7, 8];
const ray5Through8 = css`
  border-bottom: 4px solid ${colorBrand};
  border-top: none;
`;
const ray0 = css`
  right: ${rayDistance}px;
  top: ${radius}px;
`;
const ray1 = css`
  right: ${rayDistanceAngle}px;
  top: -${halfBuffer}px;
  transform: rotate(45deg);
  transform-origin: right;
`;
const ray2 = css`
  animation-name: ${growVertical};
  border-left: 4px solid ${colorBrand};
  border-top: none;
  bottom: ${rayDistance}px;
  right: 0;
`;
const ray3 = css`
  left: ${rayDistanceAngle}px;
  top: -${halfBuffer}px;
  transform: rotate(-45deg);
  transform-origin: left;
`;
const ray4 = css`
  left: ${rayDistance}px;
  top: ${radius}px;
`;
const ray5 = css`
  top: ${radius + halfBuffer}px;
  left: ${rayDistanceAngle}px;
  transform: rotate(45deg);
  transform-origin: left;
`;
const ray6 = css`
  animation-name: ${growVertical};
  border-bottom: none;
  border-right: 4px solid ${colorBrand};
  top: ${rayDistance}px;
`;
const ray7 = css`
  bottom: -${halfBuffer}px;
  right: ${rayDistanceAngle}px;
  transform: rotate(-45deg);
  transform-origin: right;
`;
// end individual ray overrides

const rayAnimation = css`
  1.3s ease-in-out 1s infinite both ${grow}
`;
export const Ray = styled.div`
  animation: ${rayAnimation};
  animation-delay: ${props => `${timeMultiplier * (props.idx + 1)}s`};
  border-top: 4px solid ${colorBrand};
  height: ${radius}px;
  margin-left: ${props => (props.idx === 3 || props.idx === 5 ? '4px' : '0')};
  margin-right: ${props => (props.idx === 1 || props.idx === 7 ? '4px' : '0')};
  position: absolute;
  transition: 2s;
  width: ${radius}px;

  ${props => (index5Through8.includes(props.idx) ? ray5Through8 : '')}
  ${props => (props.idx === 0 ? ray0 : '')}
  ${props => (props.idx === 1 ? ray1 : '')}
  ${props => (props.idx === 2 ? ray2 : '')}
  ${props => (props.idx === 3 ? ray3 : '')}
  ${props => (props.idx === 4 ? ray4 : '')}
  ${props => (props.idx === 5 ? ray5 : '')}
  ${props => (props.idx === 6 ? ray6 : '')}
  ${props => (props.idx === 7 ? ray7 : '')}
`;
