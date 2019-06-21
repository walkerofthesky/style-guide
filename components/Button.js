import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const attention = keyframes`
  from {
    transform: none;
  }
  to {
    transform: scale(1.08);
  }
`;
const animation = css`333ms cubic-bezier(0.4, -0.44, 0.61, 1.42) 200ms 2 alternate ${attention}`;

const StyledButton = styled.button`
  animation: ${props => (props.attention ? animation : 'none')};
  background-color: ${props => (props.brand ? '#ff8200' : '#d8d8d8')};
  border: none;
  border-radius: 4px;
  color: ${props => (props.brand ? '#f9f9f9' : '#4f545f')};
  cursor: pointer;
  font-size: 16px;
  padding: 8px 12px;
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
