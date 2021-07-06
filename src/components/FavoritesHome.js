import React from "react";
import styled from "styled-components";
// svg and images
import { ReactComponent as StarSVG } from "../media/svg/star.svg";

const FavoritesHome = () => {
  return (
    <StyledFavoritesHome>
      <div className="title">
        <h4>Favorites</h4>
        <StarSVG className="star-icon" />
      </div>
    </StyledFavoritesHome>
  );
};

const StyledFavoritesHome = styled.div`
  margin: 4rem 0;
  .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .star-icon {
      margin-left: 1rem;
      path {
        fill: #f4d82f;
      }
      :hover {
      }
    }
  }
`;

export default FavoritesHome;
