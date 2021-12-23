import { combineReducers } from "redux";
import { userReducer } from "./useReducer";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { addressReducer } from "./addressReducer";

export const store = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
  address: addressReducer,
});
