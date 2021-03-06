import React from "react";
import styled from "styled-components";

const Button = ({ content, link }) => {
  return (
    <StyledButton>
      <p>{content}</p>
    </StyledButton>
  );
};

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background: var(--main-color);
  height: 5rem;
  width: 100%;
  border-radius: var(--border);
  p {
    font-weight: var(--semi-bold);
    letter-spacing: 2px;
  }
  cursor: pointer;
  :hover {
  }
`;

export default Button;
