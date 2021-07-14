import React from "react";
import styled from "styled-components";
import { getWeatherIcon } from "./Functions";

const DailyForecastRow = ({ day, high, low, desc }) => {
  return (
    <StyleDailyRow>
      <p>{day}</p>
      <div className="weather-info">
        <div className="daily-forecast-weather-icon-container">
          {getWeatherIcon(desc)}
        </div>
        <p>{desc}</p>
      </div>
      <div className="high-low-temp">
        <p>{high}</p>
        <p>{low}</p>
      </div>
    </StyleDailyRow>
  );
};

const StyleDailyRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 2rem 0;
  p:nth-child(1) {
    width: 10rem;
  }
  .weather-info {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 5rem;
    }
    .daily-forecast-weather-icon-container {
      svg {
        width: 5rem;
        height: 5rem;
      }
    }
    p {
      margin-left: 1.6rem;
    }
  }
  .high-low-temp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20rem;
  }
`;

export default DailyForecastRow;
