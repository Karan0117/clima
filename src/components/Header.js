import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderLine className="header-line left"></HeaderLine>
      <Link to="/">
        <h2>Clima</h2>
      </Link>
      <HeaderLine className="header-line"></HeaderLine>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  a {
    text-decoration: none;
  }
  h2 {
    font-family: var(--special-font);
    letter-spacing: 2px;
    margin: 0 1.6rem;
    color: var(--text-color);
  }
  .left {
    transform: rotate(180deg);
  }
`;

const HeaderLine = styled.div`
  height: 1.6rem;
  width: 100%;
  background: var(--header-blue);
  border-radius: var(--border-radius);
`;

export default Header;
