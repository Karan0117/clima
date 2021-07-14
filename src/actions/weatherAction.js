import axios from "axios";
import { coordAPI } from "../api";
import { weatherAPI } from "../api";

export const loadWeatherData = (cityName) => async (dispatch) => {
  // fetching with Axios
  const initialData = await axios.get(coordAPI(cityName));
  const { lon, lat } = initialData.data.coord;
  const weatherInfo = await axios.get(weatherAPI(lat, lon));
  dispatch({
    type: "FETCH_WEATHER",
    payload: {
      city: initialData.data.name,
      main: initialData.data.main,
      wind: initialData.data.wind,
      weather: initialData.data.weather[0],
      sunrise: initialData.data.sys.sunrise,
      sunset: initialData.data.sys.sunset,
      // current: weatherInfo.data.current,
      hourly: weatherInfo.data.hourly,
      daily: weatherInfo.data.daily,
    },
  });
};
