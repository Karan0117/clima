// svg
import { ReactComponent as TornadoSVG } from "../media/svg/weatherIcons/tornado.svg";
import { ReactComponent as SnowSVG } from "../media/svg/weatherIcons/snow.svg";
import { ReactComponent as CloudsSVG } from "../media/svg/weatherIcons/clouds.svg";
import { ReactComponent as SleetSVG } from "../media/svg/weatherIcons/sleet.svg";
import { ReactComponent as MistSVG } from "../media/svg/weatherIcons/mist.svg";
import { ReactComponent as ClearSkySVG } from "../media/svg/weatherIcons/clear-sky.svg";
import { ReactComponent as ThunderstormSVG } from "../media/svg/weatherIcons/thunderstorm.svg";
import { ReactComponent as RainDrizzleSVG } from "../media/svg/weatherIcons/rain-drizzle.svg";
import { ReactComponent as DrizzleRainSVG } from "../media/svg/weatherIcons/drizzle-rain.svg";
import { ReactComponent as ThunderstormRainSVG } from "../media/svg/weatherIcons/thunderstorm-rain.svg";
import { ReactComponent as RainSnowSVG } from "../media/svg/weatherIcons/rain-snow.svg";

export const getCurrentMonth = (m) => {
  switch (m) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "Noveber";
    case 11:
      return "December";
    default:
      return "";
  }
};

export const getCurrentDay = (d) => {
  switch (d) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "";
  }
};

export const getTime = (t) => {
  var date = new Date(t * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  if (hours >= 0 && hours < 10) {
    return `0${hours} : ${minutes.substr(-2)}`;
  } else {
    return `${hours} : ${minutes.substr(-2)}`;
  }
};

export const getHour = (t) => {
  var date = new Date(t * 1000);
  var hours = date.getHours();
  if (hours >= 0 && hours < 10) {
    return `0${hours}`;
  } else {
    return `${hours}`;
  }
};

export const convertToTime = (t) => {
  return new Date(t * 1000);
};

export const getWeatherIcon = (message) => {
  // message = message.toLowerCase();
  switch (message) {
    case "tornado":
      return <TornadoSVG />;
    case "light snow":
    case "snow":
    case "heavy snow":
    case "light shower snow":
    case "shower snow":
    case "heavy shower snow":
      return <SnowSVG />;
    case "few clouds":
    case "scattered clouds":
    case "broken clouds":
    case "overcast clouds":
      return <CloudsSVG />;
    case "sleet":
    case "light shower sleet":
    case "shower sleet":
      return <SleetSVG />;
    case "mist":
    case "haze":
      return <MistSVG />;
    case "clear sky":
      return <ClearSkySVG />;
    case "light thunderstorm":
    case "thunderstorm":
    case "heavy thunderstorm":
    case "ragged thunderstorm":
      return <ThunderstormSVG />;
    case "light rain":
    case "moderate rain":
    case "heavy intensity rain":
    case "very heavy rain":
    case "extreme rain":
    case "freezing rain":
    case "light intensity shower rain":
    case "shower rain":
    case "heavy intensity shower rain":
    case "ragged shower rain":
    case "light intensity drizzle":
    case "drizzle":
    case "heacy intensity drizzle":
    case "light intensity drizzle rain":
    case "drizzle rain":
    case "heavy intensity drizzle rain":
    case "heavy rain and drizzle":
    case "heavy shower rain and drizzle":
    case "shower drizzle":
      return <DrizzleRainSVG />;
    case "thunderstorm with light rain":
    case "thunderstorm with rain":
    case "thunderstorm with heavy rain":
    case "thunderstorm with light drizzle":
    case "thunderstorm with drizzle":
    case "thunderstorm with heavy drizzle":
      return <ThunderstormRainSVG />;
    case "light rain and snow":
    case "rain and snow":
      return <RainSnowSVG />;
    default:
      return message;
  }
};
