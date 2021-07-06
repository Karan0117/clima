import React from "react";
import styled from "styled-components";
// react-redux
import { useSelector } from "react-redux";
// image
import SunImg from "../media/images/sun.png";

const HourlyForecastBlock = ({ time, temp }) => {
  return (
    <StyledHourlyRow>
      <p>{time}</p>
      <img src={SunImg} alt="" />
      <p>{temp}</p>
    </StyledHourlyRow>
  );
};

const StyledHourlyRow = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 1.6rem;
  img {
    width: 5rem;
  }
  p {
    padding: 0.5rem 0;
  }
`;

export default HourlyForecastBlock;
