import * as types from "../constants/weather.constants"


const getWeather = (keyword) => async (dispatch) => {
    dispatch({type: types.GET_WEATHER_REQUEST, payload: null})
    try {
        const url = `https://weather-app-lukas.herokuapp.com?q=${keyword}`
        console.log("url", url)
        const response = await fetch(url);
        const data = await response.json();
        console.log("data", data)
        dispatch({type: types.GET_WEATHER_SUCCESS, payload: data})

    } catch (err) {
        dispatch({type: types.GET_WEATHER_FAILURE, payload: err.message})

    }
}

// const getBlogs = (currentPage) => async (dispatch) => {
  
//   // First thing is let the system know that we're requesting something.
//   dispatch({ type: types.GET_BLOGS_REQUEST, payload: null });
//   try {
//     const res = await api.get(`/blogs?page=${currentPage}&limit=10`);
//     console.log("data", res.data.data);
//     dispatch({ type: types.GET_BLOGS_SUCCESS, payload: res.data.data });
//   } catch (err) {
//     // oh no something went wrong
//     dispatch({ type: types.GET_BLOGS_FAILURE, payload: err.message });
//   }
// };

export const weatherActions = {
    getWeather
}