import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import DailyForecastRow from "./DailyForecastRow";
import { getCurrentDay, convertToTime } from "./Functions";

const DailyForecast = () => {
  const weatherData = useSelector((state) => state.selected);
  return (
    <DailyBlock className="weekly-block">
      {weatherData.daily.map((data) => (
        <DailyForecastRow
          day={getCurrentDay(convertToTime(data.dt).getDay())}
          high={data.temp.max}
          low={data.temp.min}
          desc={data.weather[0].description}
        />
      ))}
    </DailyBlock>
  );
};

const DailyBlock = styled.div`
  margin: 2rem 0;
`;

export default DailyForecast;
