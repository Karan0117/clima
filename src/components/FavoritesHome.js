import React from "react";
import styled from "styled-components";
// svg and images
import { ReactComponent as StarSVG } from "../media/svg/star.svg";

const FavoritesHome = () => {
  return (
    <StyledFavoritesHome>
      <div className="title">
        <StarSVG className="star-icon" />
        <h4>Favorites</h4>
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
      :hover {
      }
      margin-right: 1rem;
    }
  }
`;

export default FavoritesHome;
