import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getTime } from "./Functions";
import SecondaryWeatherBlock from "./SecondaryWeatherBlock";

const SecondaryWeather = () => {
  const weatherData = useSelector((state) => state.selected);

  const secondaryData = [];

  secondaryData.push(
    { High: weatherData.main.temp_max },
    { "Feels like": weatherData.main.feels_like },
    { Sunrise: getTime(weatherData.sunrise) },
    { Low: weatherData.main.temp_min },
    { "Wind speed": weatherData.wind.speed },
    { Sunset: getTime(weatherData.sunset) }
  );

  return (
    <Secondary className="secondary">
      {secondaryData.map((data, index) => (
        <SecondaryWeatherBlock
          label={Object.keys(data)[0]}
          value={Object.values(data)[0]}
          key={index}
        />
      ))}
    </Secondary>
  );
};

const Secondary = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  grid-auto-flow: dense;
`;

export default SecondaryWeather;
