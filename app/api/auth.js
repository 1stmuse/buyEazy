import { api } from "./";

export const login = async (data) => {
  const result = await api.post("/users/auth", data);
  return result;
};

export const register = async (data) => {
  const result = await api.post("/users", data);
  return result;
};
