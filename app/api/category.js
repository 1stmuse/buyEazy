import { api } from "./";

export const getAllCategory = async () => {
  return await api.get("/categories");
};
