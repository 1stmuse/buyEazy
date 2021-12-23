import { GET_PRODUCTS } from "./actions";

export const productReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return (state = payload.data);
      break;

    default:
      return state;
  }
};
