import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getCurrentDay, getCurrentMonth } from "./Functions";
// images
import SunImg from "../media/images/sun.png";
import { ReactComponent as StarSVG } from "../media/svg/star.svg";

const PrimaryWeather = () => {
  const weatherData = useSelector((state) => state.selected);

  let today = new Date();

  const fullDate = `${getCurrentDay(today.getDay())}, ${getCurrentMonth(
    today.getMonth()
  )} ${today.getDate()}`;

  // event handler
  const favoriteHandler = (event) => {
    console.log("star", event.target);
    event.target.classList.toggle("favorite-city");
  };

  return (
    <Primary className="primary">
      <div className="location">
        <div className="title">
          <h3>{weatherData.city}</h3>
          <StarSVG onClick={favoriteHandler} className="star-icon" />
        </div>
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
  );
};

const Primary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  .location {
    align-self: flex-start;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      .star-icon {
        cursor: pointer;
        margin-left: 1rem;
        path {
          fill: #e9e9e9;
        }
      }
    }
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

export default PrimaryWeather;
