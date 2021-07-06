const initState = {
  city: "",
  // current: [],
  hourly: [],
  daily: [],
  main: [],
  weather: [],
  wind: [],
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return {
        ...state,
        city: action.payload.city,
        main: action.payload.main,
        wind: action.payload.wind,
        weather: action.payload.weather,
        // current: action.payload.current,
        hourly: action.payload.hourly,
        daily: action.payload.daily,
      };
    default:
      return { ...state };
  }
};

export default weatherReducer;
