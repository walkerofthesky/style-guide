import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px 12px;
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
