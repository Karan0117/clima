import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import HourlyForecastBlock from "./HourlyForecastBlock";
import { getHour } from "./Functions";

const HourlyForecast = () => {
  const weatherData = useSelector((state) => state.selected);

  return (
    <HourlyRow className="hourly-row">
      {weatherData.hourly.slice(0, 28).map((data) => (
        <HourlyForecastBlock
          key={data.dt}
          time={getHour(data.dt)}
          temp={data.temp}
          desc={data.weather[0].description}
        />
      ))}
    </HourlyRow>
  );
};

const HourlyRow = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
`;

export default HourlyForecast;
