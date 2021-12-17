import {
  LOGIN_ACTION,
  LOGOUT_ACTION,
  UPLOAD_ACTION,
  SIGNUP_ACTION,
} from "./actions";

const initialState = {
  authed: false,
  token: "",
  tempToken: "",
  data: {
    name: "",
    email: "",
    phone: "",
    image: "",
  },
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP_ACTION:
      return (state = {
        ...state,
        data: {
          ...payload,
          image: "",
        },
      });

    case LOGIN_ACTION:
      return (state = {
        ...state,
        authed: payload.authed,
        token: payload.token,
      });

    case LOGOUT_ACTION:
      return (state = {
        ...state,
        authed: false,
        token: "",
      });

    case UPLOAD_ACTION:
      return (state = {
        ...state,
        data: {
          ...state.data,
          image: payload,
        },
      });
    default:
      return state;
  }
};
