import { combineReducers } from "redux";
import { userReducer } from "./useReducer";

export const store = combineReducers({
  user: userReducer,
});
