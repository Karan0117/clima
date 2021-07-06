import React from "react";
import styled from "styled-components";
// route
import { Link } from "react-router-dom";
// svgs
import { ReactComponent as HomeSVG } from "../media/svg/home.svg";
import { ReactComponent as StarSVG } from "../media/svg/star.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <Link to="/">
        <div className="footer-block">
          <HomeSVG className="home-icon" />
          <p>Home</p>
        </div>
      </Link>
      <Link to="/favorites">
        <div className="footer-block">
          <StarSVG className="star-icon" />
          <p>Favorites</p>
        </div>
      </Link>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: var(--main-color);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 8rem;
  margin-top: 3rem;
  position: sticky;
  bottom: 0;
  a {
    color: var(--white);
    text-decoration: none;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    :hover {
      filter: brightness(2);
    }
    p {
      font-size: 1.4rem;
      letter-spacing: 2px;
      margin-top: 0.3rem;
    }
  }
`;

export default Footer;
