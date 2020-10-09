import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import weatherReducer from "./reducers/weather.reducers";

const initialState = {};
const store = createStore(
  weatherReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
