const API_KEY = "";

//this is how the API looks -- api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const baselatlongURL = "https://api.openweathermap.org/data/2.5/weather?q=";

//this is how the API looks -- https://api.openweathermap.org/data/2.5/onecall?lat=41.85&lon=-87.65&units=metric&appid={API key}
const baseURL = "https://api.openweathermap.org/data/2.5/onecall?units=metric";

// could get a zip code too
export const coordAPI = (cityName) =>
  `${baselatlongURL}${cityName}&units=metric&appid=${API_KEY}`;

export const weatherAPI = (latitude, longitude) =>
  `${baseURL}&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
