import React from "react";
import styled from "styled-components";
// components
import PrimaryWeather from "../components/PrimaryWeather";
import SecondaryWeather from "../components/SecondaryWeather";
import HourlyForecast from "../components/HourlyForecast";
import DailyForecast from "../components/DailyForecast";

const WeatherPage = () => {
  return (
    <div>
      <CurrentBlock className="current-block">
        <PrimaryWeather />
        <SecondaryWeather />
      </CurrentBlock>
      <ForecastBlock className="forecast-block">
        <HourlyForecast />
        <DailyForecast />
      </ForecastBlock>
    </div>
  );
};

const CurrentBlock = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
`;

const ForecastBlock = styled.div`
  margin-top: 2rem;
`;

export default WeatherPage;
