import React from "react";
import styled from "styled-components";
// react-redux
import { useSelector } from "react-redux";
// icons and svg
import SunImg from "../media/images/sun.png";
// components
import SecondaryWeatherBlock from "../components/SecondaryWeatherBlock";
import HourlyForecastBlock from "../components/HourlyForecastBlock";
import WeeklyForecastRow from "../components/WeeklyForecastRow";
// function
import {
  getCurrentMonth,
  getCurrentDay,
  getTime,
  getHour,
  convertToTime,
} from "../components/Functions";

const WeatherPage = () => {
  const weatherData = useSelector((state) => state.selected);

  const secondaryData = [];

  secondaryData.push(
    { High: weatherData.main.temp_max },
    { "Feels like": weatherData.main.feels_like },
    { Sunrise: getTime(weatherData.daily[0].sunrise) },
    { Low: weatherData.main.temp_min },
    { "Wind speed": weatherData.wind.speed },
    { Sunset: getTime(weatherData.daily[0].sunset) }
  );

  //   secondaryData.forEach((data) => {
  //     console.log("Hello", Object.values(data)[0]);
  //   });

  let today = new Date();

  const fullDate = `${getCurrentDay(today.getDay())}, ${getCurrentMonth(
    today.getMonth()
  )} ${today.getDate()}`;

  return (
    <div>
      <CurrentBlock className="current-block">
        <Primary className="primary">
          <div className="location">
            <h3>{weatherData.city}</h3>
            <p>{fullDate}</p>
          </div>
          <div className="weather">
            <img src={SunImg} alt="" />
            <div className="temperature-info">
              <p className="temp-numerics">{weatherData.main.temp}</p>
              <p className="description">{weatherData.weather.description}</p>
            </div>
          </div>
        </Primary>
        <Secondary className="secondary">
          {secondaryData.map((data, index) => (
            <SecondaryWeatherBlock
              label={Object.keys(data)[0]}
              value={Object.values(data)[0]}
              key={index}
            />
          ))}
        </Secondary>
      </CurrentBlock>
      <ForecastBlock className="forecast-block">
        <HourlyRow className="hourly-row">
          {weatherData.hourly.slice(0, 28).map((data) => (
            <HourlyForecastBlock
              key={data.dt}
              time={getHour(data.dt)}
              temp={data.temp}
            />
          ))}
        </HourlyRow>
        <WeeklyBlock className="weekly-block">
          {weatherData.daily.map((data) => (
            <WeeklyForecastRow
              day={getCurrentDay(convertToTime(data.dt).getDay())}
              high={data.temp.max}
              low={data.temp.min}
              desc={data.weather[0].description}
            />
          ))}
        </WeeklyBlock>
      </ForecastBlock>
    </div>
  );
};

const CurrentBlock = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
`;
const Primary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  .location {
    align-self: flex-start;
  }
  .weather {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    .temperature-info {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
    }
  }
`;

const Secondary = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  grid-auto-flow: dense;
`;

const ForecastBlock = styled.div`
  margin-top: 2rem;
`;

const HourlyRow = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
`;

const WeeklyBlock = styled.div`
  /* background: pink; */
  margin: 2rem 0;
`;

export default WeatherPage;
