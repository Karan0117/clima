import React from "react";
import styled from "styled-components";

const SecondaryWeatherBlock = ({ value, label }) => {
  return (
    <StyledSecondaryBlock>
      <p className="secondary-value">{value}</p>
      <p className="secondary-label">{label}</p>
    </StyledSecondaryBlock>
  );
};

const StyledSecondaryBlock = styled.div`
  border: 3px solid var(--main-color);
  filter: drop-shadow(2px 2px 5px rgba(10, 10, 10, 0.5));
  border-radius: var(--border);
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default SecondaryWeatherBlock;
