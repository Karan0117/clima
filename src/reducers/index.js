import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  selected: weatherReducer,
});

export default rootReducer;
