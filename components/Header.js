import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
  font-family: IntCircularPro, Arial, sans-serif;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;

  .logo {
    cursor: pointer;
  }

  .wrapper {
    align-items: center;
    display: flex;
    height: 56px;
    justify-content: space-between;
    margin: 0 auto;
    width: 85%;
  }

  nav {
    display: flex;
  }
`;

const FakeLink = styled.span`
  border-bottom: 3px solid #fff;
  color: #6d6e71;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  line-height: 1;
  padding: 20px 20px 18px;
  transition: 300ms;

  &.active,
  &:hover {
    border-bottom-color: #ff8200;
    color: #ff8200;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="wrapper">
      <img
        src="https://vivintsolarcdn.com/home/img/vivint.solar.logo.svg"
        alt="Vivint Solar Logo"
        className="logo"
        height="25"
      />

      <nav>
        <FakeLink>Go Solar</FakeLink>
        <FakeLink>Coverage Areas</FakeLink>
        <FakeLink>Solar Plans</FakeLink>
        <FakeLink>About Us</FakeLink>
        <FakeLink>Log In</FakeLink>
      </nav>
    </div>
  </StyledHeader>
);

export default Header;
