import { combineReducers } from "redux";
import { userReducer } from "./useReducer";
import { cartReducer } from "./cartReducer";

export const store = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
