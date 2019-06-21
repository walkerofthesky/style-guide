import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHamburger = styled.div`
  cursor: pointer;
  height: 32px;
  position: relative;
  width: 32px;

  > * {
    display: block;
    background: #6d6e71;
    height: 3px;
    position: absolute;
    width: 100%;
  }
`;
const TopBun = styled.span`
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'none')};
  transform-origin: right center;
  transition: transform 0.25s ease-in-out;
`;
const Patty = styled.span`
  opacity: ${props => (props.open ? 0 : 1)};
  top: 10px;
  transition: opacity 0.25s ease-in-out;
`;
const BottomBun = styled.span`
  top: ${props => (props.open ? '23px' : '20px')};
  transform: ${props => (props.open ? 'rotate(45deg)' : 'none')};
  transform-origin: right center;
  transition: all 0.25s ease-in-out;
`;

const Hamburger = ({ open }) => (
  <StyledHamburger>
    <TopBun open={open} />
    <Patty open={open} />
    <BottomBun open={open} />
  </StyledHamburger>
);

Hamburger.propTypes = {
  open: PropTypes.bool
};

export default Hamburger;
