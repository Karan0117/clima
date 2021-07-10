const initState = {
  city: "",
  // current: [],
  hourly: [],
  main: [],
  weather: [],
  wind: [],
  daily: [],
  isFavorite: false,
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
