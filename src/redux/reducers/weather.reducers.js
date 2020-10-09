import * as types from "../constants/weather.constants";

const initialState = {
  currentWeatherData: null,
  hourlyWeatherData: null,
  loading: false,
  errorMes: null,
};

const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_WEATHER_REQUEST:
      return { ...state, loading: true };
    case types.GET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentWeatherData: payload.current.data,
        hourlyWeatherData: payload.hourly.data.hourly,
      };
    case types.GET_WEATHER_FAILURE:
      return { ...state, loading: false, errorMes: payload };

    default:
      return { ...state };
  }
};

export default weatherReducer;
