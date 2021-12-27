import { GET_ADDRESS, ADD_ADDRESS } from "./actions";

export const addressReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ADDRESS:
      return (state = payload.data);

    default:
      return state;
  }
};
