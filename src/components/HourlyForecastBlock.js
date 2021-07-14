import React from "react";
import styled from "styled-components";
// function
import { getWeatherIcon } from "./Functions";

const HourlyForecastBlock = ({ time, temp, desc }) => {
  return (
    <StyledHourlyRow>
      <p>{time}</p>
      <div className="hourly-forecast-weather-icon-container">
        {getWeatherIcon(desc)}
      </div>
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
  .hourly-forecast-weather-icon-container {
    svg {
      width: 6rem;
      height: 6rem;
    }
  }
  p {
    padding: 0.5rem 0;
  }
`;

export default HourlyForecastBlock;
